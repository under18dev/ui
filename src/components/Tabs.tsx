import { useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from 'react'

export interface TabItem {
  /** URL のハッシュなどに使える一意な値 */
  id: string
  label: ReactNode
  content: ReactNode
}

export interface TabsProps {
  items: TabItem[]
  /** タブ全体の読み上げ名 */
  label: string
  defaultTabId?: string
  /** 選んだタブが変わったとき */
  onChange?: (id: string) => void
}

const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

/**
 * pill 形のタブ（WAI-ARIA の Tabs パターン）。選択中のタブの後ろでインジケーターが滑る。
 * 左右の矢印・Home・End で移動し、移動と同時に切り替える。
 */
export function Tabs({ items, label, defaultTabId, onChange }: TabsProps) {
  const baseId = useId()
  const [selected, setSelected] = useState(defaultTabId ?? items[0]?.id)
  const [entering, setEntering] = useState(false)
  const [indicator, setIndicator] = useState<{ x: number; w: number; animate: boolean } | null>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef(new Map<string, HTMLButtonElement>())

  // インジケーターの位置を選択中のタブに合わせる。最初の1回は動かさない
  useIsomorphicLayoutEffect(() => {
    const measure = (animate: boolean) => {
      const tab = selected ? tabRefs.current.get(selected) : undefined
      if (!tab) return
      setIndicator({ x: tab.offsetLeft - 4, w: tab.offsetWidth, animate })
    }
    measure(indicator !== null)
    const onResize = () => measure(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
    // indicator は位置の計算結果なので、依存に入れない
  }, [selected])

  const select = (id: string, focus = false) => {
    if (id === selected) return
    setSelected(id)
    setEntering(true)
    onChange?.(id)
    if (focus) tabRefs.current.get(id)?.focus()
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = items.findIndex((item) => item.id === selected)
    let next: number | null = null
    if (event.key === 'ArrowRight') next = (index + 1) % items.length
    else if (event.key === 'ArrowLeft') next = (index - 1 + items.length) % items.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = items.length - 1
    if (next === null) return
    event.preventDefault()
    select(items[next].id, true)
  }

  return (
    <div>
      <div
        ref={listRef}
        role="tablist"
        aria-label={label}
        className="u18-tabs__list"
        data-ready={indicator ? '' : undefined}
        data-animate={indicator?.animate ? '' : undefined}
        style={indicator ? ({ '--tab-x': `${indicator.x}px`, '--tab-w': `${indicator.w}px` } as CSSProperties) : undefined}
        onKeyDown={onKeyDown}
      >
        <span className="u18-tabs__indicator" aria-hidden="true" />
        {items.map((item) => {
          const active = item.id === selected
          return (
            <button
              key={item.id}
              ref={(element) => {
                if (element) tabRefs.current.set(item.id, element)
                else tabRefs.current.delete(item.id)
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={active}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={active ? 0 : -1}
              className="u18-tabs__tab"
              onClick={() => select(item.id)}
            >
              {item.label}
            </button>
          )
        })}
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`${baseId}-panel-${item.id}`}
          aria-labelledby={`${baseId}-tab-${item.id}`}
          tabIndex={0}
          hidden={item.id !== selected}
          className="u18-tabs__panel"
          data-entering={item.id === selected && entering ? '' : undefined}
          onAnimationEnd={() => setEntering(false)}
        >
          {item.content}
        </div>
      ))}
    </div>
  )
}
