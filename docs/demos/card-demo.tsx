import { Badge, CardGrid, LinkCard, formatEventDate } from '../../src'

// 開催状態は日付から決める（固定の文字にしない）
function isEnded(endDate: string) {
  return new Date() > new Date(endDate)
}

const events = [
  {
    id: 'kuribocchi-meetup-2026',
    title: 'クリぼっちMeetup 2026',
    description:
      'クリスマスイブに、エンジニアや技術に関心のある方が集まる交流イベントです。LT大会やトークセッション、軽食を囲んだ交流を通じて、年齢や立場を越えたつながりをつくります。',
    date: '2026-12-24T18:30:00+09:00',
    endDate: '2026-12-24T21:30:00+09:00',
  },
  {
    id: 'kobe-univ',
    title: '知らない世界の話をしよう Day 2',
    description:
      '私立三田学園中学校・高等学校の文化祭で行われたUnder18 DevelopersとGDGoC Kobe Universityが共同で開催したLT会です。',
    date: '2026-11-03T12:50:00+09:00',
    endDate: '2026-11-03T16:00:00+09:00',
  },
  {
    id: 'unknown-world-2026',
    title: '知らない世界の話をしよう 2026',
    description:
      '私立三田学園中学校・高等学校の文化祭で行われたUnder18 Developersと地域コミュニティ三田.devが共同で開催したLT会です。',
    date: '2026-11-02T09:30:00+09:00',
    endDate: '2026-11-02T16:50:00+09:00',
  },
]

export default function CardDemo() {
  return (
    <CardGrid>
      {events.map((event) => (
        <LinkCard
          key={event.id}
          as="li"
          href={`https://under18.dev/events/${event.id}/`}
          title={event.title}
          description={event.description}
          meta={
            <>
              <time dateTime={event.date} className="u18-mono">
                {formatEventDate(event.date)}
              </time>
              {isEnded(event.endDate) ? <Badge variant="muted">開催済み</Badge> : <Badge>開催予定</Badge>}
            </>
          }
          actionLabel="詳しく見る"
        />
      ))}
    </CardGrid>
  )
}
