// 見本で使うデータ。すべて under18.dev に公開済みの内容（design.md §0.2: 架空の実績を作らない）
import type { EventStatus } from '../../src'

export const links = {
  site: 'https://under18.dev/',
  about: 'https://under18.dev/about/',
  join: 'https://under18.dev/join/',
  support: 'https://under18.dev/support/',
  github: 'https://github.com/under18dev',
  youtube: 'https://www.youtube.com/channel/UCdFl5aaezIAVW38NoyrA9qA',
  x: 'https://x.com/under18dev',
  connpass: 'https://under18dev.connpass.com',
}

export interface DemoEvent {
  id: string
  title: string
  description: string
  date: string
  endDate: string
  venue: string
}

export const events: DemoEvent[] = [
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

export function eventStatus(event: DemoEvent, now = new Date()): EventStatus {
  if (now < new Date(event.date)) return 'upcoming'
  if (now <= new Date(event.endDate)) return 'ongoing'
  return 'ended'
}

export const eventHref = (event: DemoEvent) => `https://under18.dev/events/${event.id}/`
