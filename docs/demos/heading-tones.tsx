import { Heading } from '../../src'

export default function HeadingTones() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Heading level={2} size="h3">
        primary の見出し
      </Heading>
      <Heading level={2} size="h3" tone="secondary">
        secondary の見出し
      </Heading>
      <Heading level={2} size="h3" tone="muted">
        muted の見出し
      </Heading>
    </div>
  )
}
