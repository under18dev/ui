import { EmptyState, EventRow, RowList, Tabs, TextLink, type EventStatus } from '../../src'

function statusOf(date: string, endDate: string, now = new Date()): EventStatus {
  if (now < new Date(date)) return 'upcoming'
  if (now <= new Date(endDate)) return 'ongoing'
  return 'ended'
}

const events = [
  {
    id: 'kuribocchi-meetup-2026',
    title: 'クリぼっちMeetup 2026',
    date: '2026-12-24T18:30:00+09:00',
    endDate: '2026-12-24T21:30:00+09:00',
    venue: '東京都内（会場は決まり次第お知らせします）',
  },
  {
    id: 'kobe-univ',
    title: '知らない世界の話をしよう Day 2',
    date: '2026-11-03T12:50:00+09:00',
    endDate: '2026-11-03T16:00:00+09:00',
    venue: '兵庫県三田市 私立三田学園中学校・高等学校',
  },
  {
    id: 'unknown-world-2026',
    title: '知らない世界の話をしよう 2026',
    date: '2026-11-02T09:30:00+09:00',
    endDate: '2026-11-02T16:50:00+09:00',
    venue: '兵庫県三田市 私立三田学園中学校・高等学校',
  },
]

export default function TabsDemo() {
  const withStatus = events.map((event) => ({ ...event, status: statusOf(event.date, event.endDate) }))
  const upcoming = withStatus.filter((event) => event.status !== 'ended')
  const past = withStatus.filter((event) => event.status === 'ended')

  const list = (items: typeof withStatus) =>
    items.length > 0 ? (
      <RowList>
        {items.map((event) => (
          <EventRow
            key={event.id}
            href={`https://under18.dev/events/${event.id}/`}
            title={event.title}
            date={event.date}
            status={event.status}
            venue={event.venue}
          />
        ))}
      </RowList>
    ) : (
      <EmptyState
        title="開催予定のイベントはまだありません"
        description="決まり次第、connpass でお知らせします。"
        action={
          <TextLink href="https://under18dev.connpass.com" strong arrow>
            connpass をフォローする
          </TextLink>
        }
      />
    )

  return (
    <Tabs
      label="イベントの種類"
      items={[
        { id: 'upcoming', label: `開催予定（${upcoming.length}）`, content: list(upcoming) },
        { id: 'past', label: `開催済み（${past.length}）`, content: list(past) },
      ]}
    />
  )
}
