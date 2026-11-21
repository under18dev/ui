import { InfoList, TextLink, formatEventDate } from '../../src'

export default function InfoListLinks() {
  const date = '2026-11-02T09:30:00+09:00'
  return (
    <InfoList
      items={[
        { term: '日時', detail: <time dateTime={date}>{formatEventDate(date)} 9:30〜16:50</time> },
        { term: '会場', detail: '兵庫県三田市 私立三田学園中学校・高等学校' },
        { term: '共催', detail: 'Under18 Developers、三田.dev' },
        {
          term: '詳細',
          detail: <TextLink href="https://under18.dev/events/unknown-world-2026/">イベントのページ</TextLink>,
        },
      ]}
    />
  )
}
