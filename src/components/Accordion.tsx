import type { ReactNode } from 'react'
import { cx } from '../lib/cx'

export interface AccordionItem {
  /** 質問・見出し */
  summary: ReactNode
  content: ReactNode
  defaultOpen?: boolean
}

export interface AccordionProps {
  items: AccordionItem[]
  /** 同じ name の項目は1つだけ開く（対応ブラウザのみ） */
  name?: string
  className?: string
}

/** よくある質問などの開閉リスト。details / summary を使い、JS がなくても開閉できる */
export function Accordion({ items, name, className }: AccordionProps) {
  return (
    <div className={cx('u18-accordion', className)}>
      {items.map((item, i) => (
        <details className="u18-accordion__item" key={i} open={item.defaultOpen} name={name}>
          <summary className="u18-accordion__summary">
            <span>{item.summary}</span>
            <span className="u18-accordion__icon" aria-hidden="true" />
          </summary>
          <div className="u18-accordion__content u18-type-body">{item.content}</div>
        </details>
      ))}
    </div>
  )
}
