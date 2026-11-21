import type { ReactNode } from 'react'
import { BaseLink, opensInNewTab } from '../lib/link'
import { Arrow } from './Arrow'
import { Badge } from './Badge'
import { Reveal } from './Reveal'

export type EventStatus = 'upcoming' | 'ongoing' | 'ended'

const statusLabels: Record<EventStatus, string> = {
  upcoming: '開催予定',
  ongoing: '開催中',
  ended: '開催済み',
}

export interface EventRowProps {
  href: string
  /** 新しいタブで開く。未指定なら http(s) の外部リンクだけ新しいタブ */
  external?: boolean
  title: ReactNode
  /** 1〜2行の説明 */
  description?: ReactNode
  /** 確定した開催日（ISO 8601）。未確定なら渡さず、status だけを出す */
  date?: string
  /** 表示用の日付の文字列。省略すると date から「2026.11.21（土）」の形で作る */
  dateLabel?: string
  /** 開催状態。必ず明示する（design.md §7.4） */
  status: EventStatus
  venue?: ReactNode
  image?: { src: string; alt?: string }
  headingLevel?: 2 | 3
  reveal?: boolean
}

const weekdays = ['日', '月', '火', '水', '木', '金', '土']

/** 日付を「2026.11.21（土）」の形にする。日本時間で数える */
export function formatEventDate(iso: string): string {
  const date = new Date(iso)
  const jst = new Date(date.getTime() + 9 * 60 * 60 * 1000)
  const y = jst.getUTCFullYear()
  const m = String(jst.getUTCMonth() + 1).padStart(2, '0')
  const d = String(jst.getUTCDate()).padStart(2, '0')
  return `${y}.${m}.${d}（${weekdays[jst.getUTCDay()]}）`
}

/** イベントの1行。行全体がリンクになる（design.md §7.3・§7.4）。RowList の中に置く */
export function EventRow({
  href,
  external,
  title,
  description,
  date,
  dateLabel,
  status,
  venue,
  image,
  headingLevel = 3,
  reveal = false,
}: EventRowProps) {
  const H = `h${headingLevel}` as const
  return (
    <Reveal as="li" className="u18-row" disabled={!reveal}>
      <BaseLink href={href} external={external} className="u18-event-row__inner u18-arrow-host" data-has-image={image ? '' : undefined}>
        <div className="u18-event-row__when">
          {date && (
            <time dateTime={date} className="u18-event-row__date">
              {dateLabel ?? formatEventDate(date)}
            </time>
          )}
          <Badge variant={status === 'ended' ? 'muted' : status === 'ongoing' ? 'solid' : 'outline'}>
            {statusLabels[status]}
          </Badge>
        </div>
        <div className="u18-event-row__text">
          <H className="u18-row__title">{title}</H>
          {description && (
            <p className="u18-type-small u18-tone-secondary u18-row__gap-md">
              {description}
            </p>
          )}
          {venue && (
            <p className="u18-row__meta u18-row__gap-md">
              {venue}
            </p>
          )}
        </div>
        {image && <img className="u18-event-row__image" src={image.src} alt={image.alt ?? ''} width={1200} height={630} loading="lazy" decoding="async" />}
        <Arrow direction={opensInNewTab(href, external) ? 'external' : 'next'} className="u18-event-row__arrow" />
      </BaseLink>
    </Reveal>
  )
}
