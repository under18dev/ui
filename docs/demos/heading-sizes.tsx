import { Heading } from '../../src'

export default function HeadingSizes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Heading level={2} size="display-xl" tight>
        Display XL
      </Heading>
      <Heading level={2} size="display-l" tight>
        Display L
      </Heading>
      <Heading level={2} size="h1">
        H1 の大きさ
      </Heading>
      <Heading level={2} size="h2">
        H2 の大きさ
      </Heading>
      <Heading level={2} size="h3">
        H3 の大きさ
      </Heading>
      <Heading level={2} size="h4">
        H4 の大きさ
      </Heading>
    </div>
  )
}
