// テーマ設定。初期描画は ThemeScript が同じ仕様で確定する
export type ThemeChoice = 'system' | 'light' | 'dark'
export type ResolvedTheme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'u18.theme'
export const THEME_CHOICES: readonly ThemeChoice[] = ['system', 'light', 'dark']
export const THEME_COLORS: Record<ResolvedTheme, string> = { light: '#fafafa', dark: '#101010' }

const darkQuery = () => window.matchMedia('(prefers-color-scheme: dark)')

export function isThemeChoice(value: unknown): value is ThemeChoice {
  return value === 'system' || value === 'light' || value === 'dark'
}

export function resolveTheme(choice: ThemeChoice, systemDark: boolean): ResolvedTheme {
  return choice === 'system' ? (systemDark ? 'dark' : 'light') : choice
}

export function readThemeChoice(): ThemeChoice {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY)
    if (isThemeChoice(value)) return value
  } catch {
    // ストレージが使えない環境では system として扱う
  }
  return 'system'
}

export function storeThemeChoice(choice: ThemeChoice): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, choice)
  } catch {
    // 保存できなくても、このページでは選んだテーマを使う
  }
}

export function systemPrefersDark(): boolean {
  return typeof window !== 'undefined' && darkQuery().matches
}

/** html の data-theme を更新する。animate のときだけ色を補間する */
export function applyTheme(choice: ThemeChoice, { animate = false } = {}): ResolvedTheme {
  const root = document.documentElement
  const resolved = resolveTheme(choice, darkQuery().matches)
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (animate && !reduce && root.dataset.theme !== resolved) {
    root.dataset.themeSwitching = ''
    window.setTimeout(() => delete root.dataset.themeSwitching, 300)
  }
  root.dataset.theme = resolved
  root.dataset.themePreference = choice
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[resolved])
  return resolved
}

/**
 * head に置く同期スクリプトの中身。
 * React の外（Astro・素の HTML など）で使うときは、この文字列を <script> に入れる。
 */
export function themeScriptSource({ heroMotion = false } = {}): string {
  const hero = heroMotion
    ? `if('motion' in r.dataset){try{if(sessionStorage.getItem('u18.hero')!=='1'){sessionStorage.setItem('u18.hero','1');r.dataset.heroPlay=''}}catch(e){}}`
    : ''
  return `(()=>{const r=document.documentElement;let c='system';try{const s=localStorage.getItem('${THEME_STORAGE_KEY}');if(s==='system'||s==='light'||s==='dark')c=s}catch(e){}const d=c==='dark'||(c==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);r.dataset.theme=d?'dark':'light';r.dataset.themePreference=c;const m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',d?'${THEME_COLORS.dark}':'${THEME_COLORS.light}');if(!matchMedia('(prefers-reduced-motion: reduce)').matches)r.dataset.motion='';${hero}})()`
}
