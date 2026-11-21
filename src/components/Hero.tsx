import type { CSSProperties, ReactNode } from 'react'
import { ButtonGroup } from './Button'

export interface HeroProps {
  /** 見出しの上の小さな英字（団体名など） */
  eyebrow?: string
  /** 主役の見出し。2〜3行に収める（design.md §8.1） */
  title: ReactNode
  /** 説明文。1〜2文 */
  lead?: ReactNode
  /** ボタン（1〜2個）。Button を渡す */
  actions?: ReactNode
  /** スクロール案内のリンク先（ページ内の id）。省略すると出さない */
  scrollTargetId?: string
  scrollLabel?: string
  id?: string
}

const step = (n: number) => ({ '--hero-step': n }) as CSSProperties

/**
 * トップの最初の画面（design.md §8.1）。左寄せの大きな見出しを主役にする。
 * ThemeScript に heroMotion を付けると、セッションの最初の1回だけ順に表示する（見出し → 説明 → ボタン、120ms ずつ）。
 */
export function Hero({ eyebrow, title, lead, actions, scrollTargetId, scrollLabel = '下へスクロール', id }: HeroProps) {
  return (
    <section className="u18-hero" id={id}>
      <div className="u18-container u18-hero__body">
        {eyebrow && (
          <p className="u18-type-label u18-eyebrow" data-hero-step="" style={step(0)}>
            {eyebrow}
          </p>
        )}
        <h1 className="u18-type-display-xl u18-hero__title" data-hero-step="" style={step(0)}>
          {title}
        </h1>
        {lead && (
          <p className="u18-type-lead u18-hero__lead" data-hero-step="" style={step(1)}>
            {lead}
          </p>
        )}
        {actions && (
          <div data-hero-step="" style={step(2)}>
            <ButtonGroup className="u18-hero__actions">{actions}</ButtonGroup>
          </div>
        )}
      </div>
      {scrollTargetId && (
        <a href={`#${scrollTargetId}`} className="u18-container u18-hero__cue">
          {scrollLabel}
          <span className="u18-hero__cue-line" aria-hidden="true" />
        </a>
      )}
    </section>
  )
}

/** 見出しの一部を薄くする（「年齢は<Muted>いらない。</Muted>」）。色は text-muted で AA を満たす */
export function Muted({ children }: { children: ReactNode }) {
  return <span className="u18-tone-muted">{children}</span>
}
