import type { ReactNode } from 'react'
import { cx } from '../lib/cx'
import { Heading, type HeadingSize } from './Typography'

export interface SectionHeadingProps {
  id?: string
  /** 見出しの上の英字ラベル（任意） */
  eyebrow?: string
  title: ReactNode
  /** 見出しの下のリード文 */
  lead?: ReactNode
  level?: 2 | 3
  size?: HeadingSize
  align?: 'start' | 'center'
  /** 見出しの右に置くリンクなど（「すべて見る」） */
  action?: ReactNode
  className?: string
}

/** 章の見出し。ラベル → 見出し → リード文の順に、16〜32px の間隔で並べる（design.md §6.3） */
export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  level = 2,
  size,
  align = 'start',
  action,
  className,
}: SectionHeadingProps) {
  const heading = (
    <Heading id={id} level={level} size={size ?? (level === 2 ? 'h2' : 'h3')}>
      {title}
    </Heading>
  )
  return (
    <div className={cx('u18-section-heading', className)} data-align={align === 'center' ? 'center' : undefined}>
      {eyebrow && <p className="u18-type-label u18-eyebrow">{eyebrow}</p>}
      {action ? (
        <div className="u18-section-heading__row">
          {heading}
          {action}
        </div>
      ) : (
        heading
      )}
      {lead && <div className="u18-section-heading__lead u18-type-lead u18-measure">{lead}</div>}
    </div>
  )
}
