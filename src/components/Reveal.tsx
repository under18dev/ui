import { useEffect, useLayoutEffect, useRef, type CSSProperties, type ElementType, type HTMLAttributes, type ReactNode } from 'react'

// サーバーでの描画では useLayoutEffect の警告が出るので、ブラウザだけで使う
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

// IntersectionObserver はページで1つだけ作って共有する（design.md §13.2）
let observer: IntersectionObserver | null = null

function getObserver(): IntersectionObserver {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        // 一度表示したら、逆にスクロールしても隠さない（design.md §9.3）
        entry.target.setAttribute('data-revealed', '')
        observer?.unobserve(entry.target)
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
  )
  return observer
}

function isInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect()
  return rect.top < window.innerHeight && rect.bottom > 0
}

export interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  /** 同じまとまりの中での順番（0〜2）。100ms ずつ遅らせる */
  index?: number
  /** 演出しない（ふつうの要素として描く） */
  disabled?: boolean
  children?: ReactNode
  [dataAttribute: `data-${string}`]: string | undefined
}

/**
 * 画面に入ったときに一度だけ、下から 12〜16px ふわっと表示する（design.md §9）。
 * JS が動かないとき・動きを減らす設定のときは、最初から表示したまま。
 * 隠すのは、JS が動いて observer の準備ができてから（html の data-reveal-ready）。
 */
export function Reveal({ as: Tag = 'div', index = 0, disabled = false, style, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useIsomorphicLayoutEffect(() => {
    const element = ref.current
    if (disabled || !element) return
    const root = document.documentElement
    if (!('motion' in root.dataset)) {
      element.setAttribute('data-revealed', '')
      return
    }
    // すでに画面内にある要素は、隠してから出し直さない（ちらつき防止）
    if (isInViewport(element)) {
      element.setAttribute('data-revealed', '')
    } else {
      getObserver().observe(element)
    }
    root.dataset.revealReady = ''
    return () => observer?.unobserve(element)
  }, [disabled])

  if (disabled) {
    return (
      <Tag style={style} {...rest}>
        {children}
      </Tag>
    )
  }
  return (
    <Tag ref={ref} data-reveal="" style={index ? ({ ...style, '--reveal-index': index } as CSSProperties) : style} {...rest}>
      {children}
    </Tag>
  )
}
