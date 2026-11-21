import { Heading } from '../../src'

export default function HeadingTight() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Heading level={2} size="display-l">
        Under18 Developers.
      </Heading>
      <Heading level={2} size="display-l" tight>
        Under18 Developers.
      </Heading>
    </div>
  )
}
