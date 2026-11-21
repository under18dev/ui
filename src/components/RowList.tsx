import type { CSSProperties, ReactNode } from 'react'
import { BaseLink, opensInNewTab } from '../lib/link'
import { cx } from '../lib/cx'
import { Arrow } from './Arrow'
import { Reveal } from './Reveal'

export interface RowListProps {
  as?: 'ul' | 'ol'
  className?: string
  children: ReactNode
}

/** 罫線で区切った縦のリスト。カードを並べる代わりに使う */
export function RowList({ as: Tag = 'ul', className, children }: RowListProps) {
  return <Tag className={cx('u18-row-list', className)}>{children}</Tag>
}

export interface RowProps {
  /** 番号。意味のある順序があるときだけ（演出のためだけの 01 / 02 は付けない） */
  index?: string
  title: ReactNode
  description?: ReactNode
  meta?: ReactNode
  /** 行全体のリンク先。指定すると行全体がリンクになる */
  href?: string
  external?: boolean
  /** リンクの文言（split レイアウトで右端に出す）。省略すると矢印だけ */
  actionLabel?: string
  /**
   * stack: タイトルと説明を縦に積み、右端に矢印
   * split: タイトル / 説明 / リンクの文言を3列に並べる（PC）
   */
  layout?: 'stack' | 'split'
  /** statement: 原則などの大きな行。title に大きな文字を渡す */
  size?: 'default' | 'statement'
  headingLevel?: 2 | 3 | 4
  /** スクロールで表示する */
  reveal?: boolean
}

/** RowList の1行。index / title / supporting text / metadata / arrow の順 */
export function Row({
  index,
  title,
  description,
  meta,
  href,
  external,
  actionLabel,
  layout = 'stack',
  size = 'default',
  headingLevel = 3,
  reveal = false,
}: RowProps) {
  const H = `h${headingLevel}` as const
  const newTab = opensInNewTab(href, external)
  const titleNode =
    size === 'statement' ? (
      <H className="u18-type-display-l u18-tone-primary">{title}</H>
    ) : (
      <H className="u18-row__title">{title}</H>
    )

  const content =
    layout === 'split' ? (
      <>
        {index && <span className="u18-row__index">{index}</span>}
        {titleNode}
        <div>
          {description && <p className="u18-row__description u18-type-body">{description}</p>}
          {meta && <p className="u18-row__meta">{meta}</p>}
        </div>
        {href && (
          <span className="u18-row__action">
            {actionLabel}
            <Arrow direction={newTab ? 'external' : 'next'} />
          </span>
        )}
      </>
    ) : (
      <>
        {index && <span className="u18-row__index">{index}</span>}
        {size === 'statement' ? (
          <>
            {titleNode}
            <div>
              {description && <p className="u18-row__description u18-type-body">{description}</p>}
              {meta && <p className="u18-row__meta u18-row__gap-md">{meta}</p>}
            </div>
          </>
        ) : (
          <div>
            {titleNode}
            {description && <p className="u18-row__description u18-row__gap-sm u18-type-small">{description}</p>}
            {meta && <p className="u18-row__meta u18-row__gap-md">{meta}</p>}
          </div>
        )}
        {href && <Arrow direction={newTab ? 'external' : 'next'} className="u18-row__arrow" />}
      </>
    )

  // PC での列。番号・矢印の有無に合わせて、中身の数と列の数を揃える
  const columns = [
    index && '6rem',
    ...(layout === 'split'
      ? ['minmax(0, 1fr)', 'minmax(0, 1.4fr)', href && '12rem']
      : size === 'statement'
        ? ['minmax(0, 1fr)', 'minmax(0, 1fr)', href && 'auto']
        : ['minmax(0, 1fr)', href && 'auto']),
  ].filter(Boolean)

  const innerProps = {
    className: cx('u18-row__inner', href && 'u18-arrow-host'),
    'data-layout': layout === 'split' ? 'split' : undefined,
    style: { '--row-columns': columns.join(' ') } as CSSProperties,
  }

  return (
    <Reveal as="li" className="u18-row" disabled={!reveal} data-size={size === 'statement' ? 'statement' : undefined}>
      {href ? (
        <BaseLink href={href} external={external} {...innerProps}>
          {content}
        </BaseLink>
      ) : (
        <div {...innerProps}>{content}</div>
      )}
    </Reveal>
  )
}
