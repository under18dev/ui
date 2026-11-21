import { EventRow, RowList, formatEventDate } from '../../src'

export default function EventRowDateLabel() {
  const date = '2026-12-24T18:30:00+09:00'
  return (
    <RowList>
      <EventRow
        href="https://under18.dev/events/kuribocchi-meetup-2026/"
        title="クリぼっちMeetup 2026"
        date={date}
        // 開始と終了の時刻まで出す
        dateLabel={`${formatEventDate(date)} 18:30〜21:30`}
        status={new Date() > new Date('2026-12-24T21:30:00+09:00') ? 'ended' : 'upcoming'}
        venue="東京都内（会場は決まり次第お知らせします）"
      />
    </RowList>
  )
}
