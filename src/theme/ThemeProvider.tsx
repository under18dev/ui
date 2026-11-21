import { createContext, useCallback, useContext, useEffect, useMemo, useState, useSyncExternalStore, type ReactNode } from 'react'
import {
  THEME_STORAGE_KEY,
  applyTheme,
  isThemeChoice,
  readThemeChoice,
  resolveTheme,
  storeThemeChoice,
  systemPrefersDark,
  type ResolvedTheme,
  type ThemeChoice,
} from './theme'

interface ThemeContextValue {
  /** 保存されている選択（system / light / dark） */
  choice: ThemeChoice
  /** 実際に表示しているテーマ */
  resolved: ResolvedTheme
  setChoice: (choice: ThemeChoice) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

/**
 * テーマの状態を持つ。ThemeScript が確定した値を読み取り、
 * system のときだけ OS の設定変更に追従し、他のタブでの変更にも揃える。
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  // サーバーでの描画と最初のクライアント描画を揃えるため、最初は system として描く
  const [choice, setChoiceState] = useState<ThemeChoice>('system')
  const [resolved, setResolved] = useState<ResolvedTheme>('light')

  useEffect(() => {
    const initial = readThemeChoice()
    setChoiceState(initial)
    setResolved(applyTheme(initial))

    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const onSystemChange = () => {
      if (readThemeChoice() !== 'system') return
      setResolved(applyTheme('system', { animate: true }))
    }
    const onStorage = (event: StorageEvent) => {
      if (event.key !== THEME_STORAGE_KEY) return
      const next = readThemeChoice()
      setChoiceState(next)
      setResolved(applyTheme(next))
    }
    query.addEventListener('change', onSystemChange)
    window.addEventListener('storage', onStorage)
    return () => {
      query.removeEventListener('change', onSystemChange)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  const setChoice = useCallback((next: ThemeChoice) => {
    storeThemeChoice(next)
    setChoiceState(next)
    setResolved(applyTheme(next, { animate: true }))
  }, [])

  const value = useMemo(() => ({ choice, resolved, setChoice }), [choice, resolved, setChoice])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// ThemeProvider の外では、html の data-theme・data-theme-preference を見て状態を作る
function subscribeRoot(onChange: () => void): () => void {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributeFilter: ['data-theme', 'data-theme-preference'] })
  return () => observer.disconnect()
}

function readRootSnapshot(): string {
  const { theme, themePreference } = document.documentElement.dataset
  return `${themePreference ?? readThemeChoice()}|${theme ?? ''}`
}

const fallbackSetChoice = (next: ThemeChoice) => {
  storeThemeChoice(next)
  applyTheme(next, { animate: true })
}

/**
 * テーマの状態を読む。ThemeProvider の外でも、html の属性の変化に合わせて描き直す
 * （ThemeScript だけを置いたサイトや、ほかの仕組みでテーマを切り替えるサイトでも使える）
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  const snapshot = useSyncExternalStore(subscribeRoot, readRootSnapshot, () => 'system|')
  if (context) return context
  const [preference, theme] = snapshot.split('|')
  const choice: ThemeChoice = isThemeChoice(preference) ? preference : 'system'
  const resolved: ResolvedTheme = theme === 'dark' || theme === 'light' ? theme : resolveTheme(choice, systemPrefersDark())
  return { choice, resolved, setChoice: fallbackSetChoice }
}
