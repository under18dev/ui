import { Container, Heading, Text } from '../../src'

export default function ContainerAs() {
  return (
    <Container as="article" style={{ paddingBlock: 24 }}>
      <Heading level={2} size="h3">
        クリぼっちMeetup 2026
      </Heading>
      <Text style={{ marginTop: 16 }}>
        クリスマスイブに、エンジニアや技術に関心のある方が集まる交流イベントです。
      </Text>
    </Container>
  )
}
