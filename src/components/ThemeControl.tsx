import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { useTheme } from '../theme/ThemeProvider'
import type { ThemeChoice } from '../theme/theme'
import { cx } from '../lib/cx'

const options: Array<{ value: ThemeChoice; label: string; short: string }> = [
  { value: 'system', label: 'システム設定に合わせる', short: '自動' },
  { value: 'light', label: 'ライト', short: 'ライト' },
  { value: 'dark', label: 'ダーク', short: 'ダーク' },
]

/**
 * テーマ切替（design.md §4.3）。1つのボタンと、自動 / ライト / ダークを選ぶメニュー。
 * 現在の値を文字で出し、選択状態は aria-checked で伝える。矢印キー・Home・End・Escape で操作できる。
 */
export function ThemeControl({ className }: { className?: string }) {
  const { choice, setChoice } = useTheme()
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([])
  const current = options.find((option) => option.value === choice) ?? options[0]

  const close = (restoreFocus = true) => {
    setOpen(false)
    if (restoreFocus) buttonRef.current?.focus({ preventScroll: true })
  }

  // 開いたら選択中の項目にフォーカスする
  useEffect(() => {
    if (!open) return
    const index = Math.max(
      0,
      options.findIndex((option) => option.value === choice),
    )
    itemRefs.current[index]?.focus({ preventScroll: true })
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
    // choice が変わったときにフォーカスを動かさないよう、open だけを見る
  }, [open])

  const onMenuKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const items = itemRefs.current.filter((item): item is HTMLButtonElement => item !== null)
    const index = items.indexOf(document.activeElement as HTMLButtonElement)
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      const step = event.key === 'ArrowDown' ? 1 : -1
      items[(index + step + items.length) % items.length]?.focus()
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault()
      items[event.key === 'Home' ? 0 : items.length - 1]?.focus()
    } else if (event.key === 'Tab') {
      close(false)
    }
  }

  return (
    <div
      ref={rootRef}
      className={cx('u18-theme-control', className)}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          event.stopPropagation()
          close()
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className="u18-theme-control__button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => (open ? close() : setOpen(true))}
      >
        <svg className="u18-theme-control__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5Z" fill="currentColor" />
        </svg>
        <span className="u18-sr-only">テーマ: </span>
        <span>{current.short}</span>
        <span className="u18-sr-only">（変更する）</span>
      </button>
      <ul id={menuId} role="menu" aria-label="テーマ" hidden={!open} className="u18-theme-control__menu" onKeyDown={onMenuKeyDown}>
        {options.map((option, i) => (
          <li role="none" key={option.value}>
            <button
              ref={(element) => {
                itemRefs.current[i] = element
              }}
              type="button"
              role="menuitemradio"
              aria-checked={option.value === choice}
              className="u18-theme-control__item"
              onClick={() => {
                setChoice(option.value)
                close()
              }}
            >
              {option.label}
              <span className="u18-theme-control__check" aria-hidden="true">
                ✓
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
