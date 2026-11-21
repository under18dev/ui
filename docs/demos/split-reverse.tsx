import { Card, Heading, Split, Text } from '../../src'

export default function SplitReverse() {
  return (
    <Split
      id="split-demo-connect"
      reverse
      eyebrow="02 / Connect"
      title={
        <>
          同じ話ができる仲間、
          <br />
          どこにいるんだろう？
        </>
      }
      body="学校ではちょっと浮いてしまう話も、誰かとなら、何時間でも話していたい。"
      visual={
        <Card padding="lg" aria-hidden="true">
          <Text variant="small" tone="muted" className="u18-mono">
            under18dev.connpass.com
          </Text>
          <Heading level={3} size="h4" style={{ marginTop: 16 }}>
            イベント一覧
          </Heading>
        </Card>
      }
    />
  )
}
