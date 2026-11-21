import { Card, Heading, Split, Text } from '../../src'

export default function SplitDemo() {
  return (
    <Split
      id="split-demo-create"
      eyebrow="01 / Create"
      title={
        <>
          作りたいものがある。
          <br />
          でも、何から始めれば？
        </>
      }
      body="アイデアはある。検索もした。だけど、最初の一歩がいちばん難しい。"
      visual={
        // 挿絵は装飾なので読み上げない
        <Card padding="lg" aria-hidden="true">
          <Text variant="small" tone="muted" className="u18-mono">
            my-first-project / README.md
          </Text>
          <Heading level={3} size="h4" style={{ marginTop: 16 }}>
            作りたいもの
          </Heading>
        </Card>
      }
    />
  )
}
