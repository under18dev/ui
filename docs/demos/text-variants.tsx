import { Text } from '../../src'

export default function TextVariants() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Text variant="lead">特別な実績がなくても大丈夫。気になるところから始めてください。</Text>
      <Text>イベントの配信やアーカイブ、技術にまつわるコンテンツを YouTube で公開しています。</Text>
      <Text variant="small">東京都内（会場は決まり次第お知らせします）</Text>
    </div>
  )
}
