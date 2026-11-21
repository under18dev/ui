import type { ReactNode } from 'react'

export interface EmptyStateProps {
  title: ReactNode
  description?: ReactNode
  /** 代わりに案内する先（「過去のイベントを見る」など） */
  action?: ReactNode
  headingLevel?: 2 | 3 | 4
}

/** 掲載できるデータがないときの表示。架空の内容で埋めない（design.md §7.4・§18） */
export function EmptyState({ title, description, action, headingLevel = 3 }: EmptyStateProps) {
  const H = `h${headingLevel}` as const
  return (
    <div className="u18-empty">
      <H className="u18-empty__title">{title}</H>
      {description && <p className="u18-empty__body u18-type-body">{description}</p>}
      {action}
    </div>
  )
}
