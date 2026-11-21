import type { ReactNode } from 'react'
import { cx } from '../lib/cx'

export interface InfoListProps {
  items: Array<{ term: ReactNode; detail: ReactNode }>
  className?: string
}

/** 「項目：値」の一覧（日時・会場・参加費など）。dl で組む */
export function InfoList({ items, className }: InfoListProps) {
  return (
    <dl className={cx('u18-info-list', className)}>
      {items.map((item, i) => (
        <div className="u18-info-list__row" key={i}>
          <dt className="u18-info-list__term">{item.term}</dt>
          <dd className="u18-info-list__detail">{item.detail}</dd>
        </div>
      ))}
    </dl>
  )
}
