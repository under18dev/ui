import { Heading, Text } from '../../src'

export default function HeadingLevelSize() {
  return (
    <div>
      <Heading level={2} size="h3">
        開催したイベント
      </Heading>
      {/* 階層は h3 のまま、見た目だけ小さくする */}
      <Heading level={3} size="h4" style={{ marginTop: 32 }}>
        知らない世界の話をしよう 2026
      </Heading>
      <Text variant="small" style={{ marginTop: 8 }}>
        兵庫県三田市 私立三田学園中学校・高等学校
      </Text>
    </div>
  )
}
