import { EventRow, RowList, type EventStatus } from '../../src'

// 開催状態は日付から決める。固定の文字にすると、日が過ぎても「開催予定」のまま残る
function statusOf(date: string, endDate: string, now = new Date()): EventStatus {
  if (now < new Date(date)) return 'upcoming'
  if (now <= new Date(endDate)) return 'ongoing'
  return 'ended'
}

const events = [
  {
    id: 'kuribocchi-meetup-2026',
    title: 'クリぼっちMeetup 2026',
    description:
      'クリスマスイブに、エンジニアや技術に関心のある方が集まる交流イベントです。LT大会やトークセッション、軽食を囲んだ交流を通じて、年齢や立場を越えたつながりをつくります。',
    date: '2026-12-24T18:30:00+09:00',
    endDate: '2026-12-24T21:30:00+09:00',
    venue: '東京都内（会場は決まり次第お知らせします）',
  },
  {
    id: 'kobe-univ',
    title: '知らない世界の話をしよう Day 2',
    description:
      '私立三田学園中学校・高等学校の文化祭で行われたUnder18 DevelopersとGDGoC Kobe Universityが共同で開催したLT会です。',
    date: '2026-11-03T12:50:00+09:00',
    endDate: '2026-11-03T16:00:00+09:00',
    venue: '兵庫県三田市 私立三田学園中学校・高等学校',
  },
  {
    id: 'unknown-world-2026',
    title: '知らない世界の話をしよう 2026',
    description:
      '私立三田学園中学校・高等学校の文化祭で行われたUnder18 Developersと地域コミュニティ三田.devが共同で開催したLT会です。',
    date: '2026-11-02T09:30:00+09:00',
    endDate: '2026-11-02T16:50:00+09:00',
    venue: '兵庫県三田市 私立三田学園中学校・高等学校',
  },
]

export default function EventRowDemo() {
  return (
    <RowList>
      {events.map((event) => (
        <EventRow
          key={event.id}
          href={`https://under18.dev/events/${event.id}/`}
          title={event.title}
          description={event.description}
          date={event.date}
          status={statusOf(event.date, event.endDate)}
          venue={event.venue}
        />
      ))}
    </RowList>
  )
}
