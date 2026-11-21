import { useId, type ReactNode } from 'react'
import { ButtonGroup } from './Button'
import { Reveal } from './Reveal'

export interface StatementProps {
  /** 大きな文字の前の一文 */
  kicker?: ReactNode
  /** 最も印象的な文字。ページに1か所だけ使う（design.md §8.4） */
  title: ReactNode
  body?: ReactNode
  actions?: ReactNode
  /** 背景を反転する。両テーマで同じ強さの明暗差になる */
  inverse?: boolean
  align?: 'center' | 'start'
  /** 英字の見出しなら字間を詰める */
  tight?: boolean
  id?: string
}

/** 問いかけから団体の紹介へ切り替える、大きな文字の章（S04） */
export function Statement({ kicker, title, body, actions, inverse = true, align = 'center', tight = false, id }: StatementProps) {
  const fallbackId = useId()
  const headingId = id ? `${id}-heading` : fallbackId
  return (
    <section
      id={id}
      className={inverse ? 'u18-statement u18-inverse' : 'u18-statement'}
      data-align={align === 'center' ? 'center' : undefined}
      aria-labelledby={headingId}
    >
      <div className="u18-container u18-statement__inner">
        {kicker && (
          <Reveal as="p" className="u18-type-h3 u18-statement__kicker">
            {kicker}
          </Reveal>
        )}
        <Reveal as="h2" id={headingId} index={1} className={`u18-type-display-xl u18-statement__title${tight ? ' u18-tight' : ''}`}>
          {title}
        </Reveal>
        {body && (
          <Reveal as="p" index={2} className="u18-type-lead u18-statement__body">
            {body}
          </Reveal>
        )}
        {actions && (
          <Reveal index={2}>
            <ButtonGroup className="u18-statement__actions">{actions}</ButtonGroup>
          </Reveal>
        )}
      </div>
    </section>
  )
}
