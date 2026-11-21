import { Heading, Section, Text } from '../../src'

export default function SectionTones() {
  return (
    <>
      <Section aria-label="canvas の例">
        <Text variant="small" tone="muted">tone="canvas"</Text>
        <Heading level={2} size="h3" style={{ marginTop: 16 }}>
          はじめかたは、シンプル。
        </Heading>
      </Section>
      <Section tone="section" aria-label="section の例">
        <Text variant="small" tone="muted">tone="section"</Text>
        <Heading level={2} size="h3" style={{ marginTop: 16 }}>
          やってみたい、が動き出す場所。
        </Heading>
      </Section>
      <Section tone="inverse" aria-label="inverse の例">
        <Text variant="small" tone="muted">tone="inverse"</Text>
        <Heading level={2} size="h2" style={{ marginTop: 16 }}>
          好きなことに、年齢はいらない。
        </Heading>
      </Section>
    </>
  )
}
