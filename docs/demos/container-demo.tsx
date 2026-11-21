import { Container, Text } from '../../src'

export default function ContainerDemo() {
  return (
    // 幅が分かるように、プレビューでだけ点線の枠を付けています
    <Container style={{ outline: '1px dashed var(--color-border-strong)', paddingBlock: 24 }}>
      <Text>作ることが好きな人が、年齢に関係なくつながって挑戦する技術コミュニティです。</Text>
    </Container>
  )
}
