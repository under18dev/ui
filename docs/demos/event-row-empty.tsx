import { EmptyState, EventRow, RowList, TextLink, type EventStatus } from '../../src'

const events = [
  {
    id: 'kuribocchi-meetup-2026',
    title: 'クリぼっちMeetup 2026',
    date: '2026-12-24T18:30:00+09:00',
    endDate: '2026-12-24T21:30:00+09:00',
  },
]

function statusOf(date: string, endDate: string, now = new Date()): EventStatus {
  if (now < new Date(date)) return 'upcoming'
  if (now <= new Date(endDate)) return 'ongoing'
  return 'ended'
}

export default function EventRowEmpty() {
  // 開催予定と開催中だけを出す。日が過ぎると空になり、EmptyState に切り替わる
  const upcoming = events.filter((event) => statusOf(event.date, event.endDate) !== 'ended')

  if (upcoming.length === 0) {
    return (
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
  }

  return (
    <RowList>
      {upcoming.map((event) => (
        <EventRow
          key={event.id}
          href={`https://under18.dev/events/${event.id}/`}
          title={event.title}
          date={event.date}
          status={statusOf(event.date, event.endDate)}
        />
      ))}
    </RowList>
  )
}
