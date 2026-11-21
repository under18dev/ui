import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { BaseLink } from '../lib/link'
import { Arrow } from './Arrow'
import { Button } from './Button'
import { ThemeControl } from './ThemeControl'

export interface NavItem {
  href: string
  label: string
}

export interface SiteHeaderProps {
  /** ロゴ。文字列なら団体名として描く */
  logo?: ReactNode
  /** ロゴのリンクの読み上げ名 */
  logoLabel?: string
  homeHref?: string
  /** 主要ナビ（4項目程度。design.md §2.3） */
  items: NavItem[]
  /** 右端の「参加する」などの導線 */
  cta?: NavItem
  /** 現在のページのパス。aria-current を付けるのに使う */
  currentPath?: string
  /** テーマ切替を出す */
  themeControl?: boolean
}

function isCurrent(currentPath: string | undefined, href: string): boolean {
  if (!currentPath || href === '/') return currentPath === href
  const normalize = (path: string) => (path.endsWith('/') ? path : `${path}/`)
  return normalize(currentPath).startsWith(normalize(href))
}

/**
 * サイトのヘッダー（design.md §7.1・§2.3）。上に固定し、スクロールしたら背景と区切り線を付ける。
 * 1024px 未満では「メニュー」ボタンで全画面のメニューを開く。開いている間は背景のスクロールを止め、
 * フォーカスをメニューの中に閉じ込め、Escape で閉じてボタンにフォーカスを戻す。
 */
export function SiteHeader({
  logo = 'Under18 Developers',
  logoLabel = 'Under18 Developers トップページ',
  homeHref = '/',
  items,
  cta,
  currentPath,
  themeControl = true,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const panelId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLElement>(null)
  const allItems = cta ? [...items, cta] : items

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const button = buttonRef.current
    const panel = panelRef.current
    document.documentElement.style.overflow = 'hidden'
    panel?.querySelector<HTMLElement>('a[href]')?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        button?.focus()
        return
      }
      // 開いている間は、ボタンとメニューの中だけでフォーカスを回す
      if (event.key === 'Tab' && button && panel) {
        const focusables = [button, ...panel.querySelectorAll<HTMLElement>('a[href]')]
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    // 幅が広がってメニューが不要になったら閉じる
    const wide = window.matchMedia('(min-width: 1024px)')
    const onWide = (event: MediaQueryListEvent) => event.matches && setOpen(false)

    document.addEventListener('keydown', onKeyDown)
    wide.addEventListener('change', onWide)
    return () => {
      document.documentElement.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
      wide.removeEventListener('change', onWide)
    }
  }, [open])

  return (
    <header className="u18-header" data-scrolled={scrolled || open || undefined}>
      <div className="u18-container u18-header__bar">
        <BaseLink href={homeHref} className="u18-header__logo" aria-label={logoLabel}>
          {logo}
        </BaseLink>

        <nav className="u18-header__nav" aria-label="メイン">
          {items.map((item) => (
            <BaseLink
              key={item.href}
              href={item.href}
              className="u18-header__nav-link"
              aria-current={isCurrent(currentPath, item.href) ? 'page' : undefined}
            >
              {item.label}
            </BaseLink>
          ))}
        </nav>

        <div className="u18-header__actions">
          {themeControl && <ThemeControl />}
          {cta && (
            <Button
              href={cta.href}
              variant="secondary"
              size="sm"
              className="u18-header__cta"
              aria-current={isCurrent(currentPath, cta.href) ? 'page' : undefined}
            >
              {cta.label}
            </Button>
          )}
          <button
            ref={buttonRef}
            type="button"
            className="u18-header__menu-button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? '閉じる' : 'メニュー'}
          </button>
        </div>
      </div>

      <nav ref={panelRef} id={panelId} aria-label="メニュー" hidden={!open} className="u18-header__panel">
        <ul className="u18-container u18-header__panel-list">
          {allItems.map((item) => (
            <li key={item.href}>
              <BaseLink
                href={item.href}
                className="u18-header__panel-link"
                aria-current={isCurrent(currentPath, item.href) ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
                <Arrow />
              </BaseLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
