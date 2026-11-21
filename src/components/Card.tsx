import type { HTMLAttributes, ReactNode } from 'react'
import { BaseLink, opensInNewTab } from '../lib/link'
import { cx } from '../lib/cx'
import { Arrow } from './Arrow'

export interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: 'article' | 'div' | 'li' | 'section'
  /** paper: 紙のカード（影あり）、flat: 一段沈んだ面、outline: 線だけ */
  variant?: 'paper' | 'flat' | 'outline'
  /** 中の余白。none なら CardBody などで組み立てる */
  padding?: 'none' | 'md' | 'lg'
}

/**
 * 紙のようなカード（DECISION-004）。イベント・お知らせなど、実際の異なるデータを並べるときだけ使う。
 * 罫線のリストで読めるなら RowList を使う（design.md §6.4・§17）。
 */
export function Card({ as: Tag = 'article', variant = 'paper', padding = 'none', className, ...rest }: CardProps) {
  return (
    <Tag
      className={cx('u18-card', className)}
      data-variant={variant === 'paper' ? undefined : variant}
      data-padding={padding === 'none' ? undefined : padding}
      {...rest}
    />
  )
}

export interface LinkCardProps {
  href: string
  external?: boolean
  title: ReactNode
  /** タイトルの見出しの階層 */
  headingLevel?: 2 | 3 | 4
  description?: ReactNode
  /** 日付・種別などのメタ情報（Badge を入れてもよい） */
  meta?: ReactNode
  /** 画像。alt は内容を説明する文にする。装飾なら空文字 */
  image?: { src: string; alt: string; width?: number; height?: number }
  /** カード下部のリンクの文言。省略するとタイトルだけがリンク */
  actionLabel?: string
  as?: 'article' | 'li' | 'div'
  className?: string
}

/**
 * 全体がリンクのカード。タイトルのリンクをカード全体に広げるので、中に別のリンクを入れない（design.md §7.3）。
 * 画像がなくても崩れない。
 */
export function LinkCard({
  href,
  external,
  title,
  headingLevel = 3,
  description,
  meta,
  image,
  actionLabel,
  as = 'article',
  className,
}: LinkCardProps) {
  const H = `h${headingLevel}` as const
  return (
    <Card as={as} className={cx('u18-arrow-host', className)} data-interactive="">
      {image && (
        <div className="u18-card__media">
          <img src={image.src} alt={image.alt} width={image.width ?? 1200} height={image.height ?? 630} loading="lazy" decoding="async" />
        </div>
      )}
      <div className="u18-card__body">
        {meta && <div className="u18-card__meta">{meta}</div>}
        <H className="u18-card__title">
          <BaseLink href={href} external={external} className="u18-card__link">
            {title}
          </BaseLink>
        </H>
        {description && <p className="u18-card__description u18-type-small">{description}</p>}
        {actionLabel && (
          <div className="u18-card__footer" aria-hidden="true">
            <span>{actionLabel}</span>
            <Arrow direction={opensInNewTab(href, external) ? 'external' : 'next'} />
          </div>
        )}
      </div>
    </Card>
  )
}

export interface CardGridProps {
  columns?: 2 | 3
  as?: 'ul' | 'div'
  className?: string
  children: ReactNode
}

/** カードの並び。スマホは1列、タブレットは2列、PC は columns 列 */
export function CardGrid({ columns = 3, as: Tag = 'ul', className, children }: CardGridProps) {
  return (
    <Tag className={cx('u18-card-grid', className)} data-columns={columns}>
      {children}
    </Tag>
  )
}
