import { Badge, CardGrid, LinkCard, formatEventDate } from '../../src'

export default function CardColumns() {
  return (
    <CardGrid columns={2}>
      <LinkCard
        as="li"
        href="https://under18.dev/events/kobe-univ/"
        title="知らない世界の話をしよう Day 2"
        description="私立三田学園中学校・高等学校の文化祭で行われたUnder18 DevelopersとGDGoC Kobe Universityが共同で開催したLT会です。"
        meta={
          <>
            <time dateTime="2026-11-03T12:50:00+09:00" className="u18-mono">
              {formatEventDate('2026-11-03T12:50:00+09:00')}
            </time>
            <Badge variant="muted">開催済み</Badge>
          </>
        }
      />
      <LinkCard
        as="li"
        href="https://under18.dev/events/unknown-world-2026/"
        title="知らない世界の話をしよう 2026"
        description="私立三田学園中学校・高等学校の文化祭で行われたUnder18 Developersと地域コミュニティ三田.devが共同で開催したLT会です。"
        meta={
          <>
            <time dateTime="2026-11-02T09:30:00+09:00" className="u18-mono">
              {formatEventDate('2026-11-02T09:30:00+09:00')}
            </time>
            <Badge variant="muted">開催済み</Badge>
          </>
        }
      />
    </CardGrid>
  )
}
