import { InfoList, formatEventDate } from '../../src'

export default function InfoListDemo() {
  const date = '2026-12-24T18:30:00+09:00'
  return (
    <InfoList
      items={[
        { term: 'イベント', detail: 'クリぼっちMeetup 2026' },
        { term: '日時', detail: <time dateTime={date}>{formatEventDate(date)} 18:30〜21:30</time> },
        { term: '会場', detail: '東京都内（会場は決まり次第お知らせします）' },
        { term: '主催', detail: 'Under18 Developers' },
      ]}
    />
  )
}
