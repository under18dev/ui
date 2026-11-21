import { SkipLink, Text, TextLink } from '../../src'

export default function SkipLinkDemo() {
  return (
    <div style={{ width: '100%' }}>
      {/* 移動先をこのデモの中に置く。実際のページでは <main id="main"> を使う */}
      <SkipLink targetId="skip-link-demo-main" />
      <nav aria-label="デモのナビ" style={{ display: 'flex', gap: 24 }}>
        <TextLink href="https://under18.dev/about/">団体について</TextLink>
        <TextLink href="https://under18.dev/events/">イベント</TextLink>
        <TextLink href="https://under18.dev/support/">支援する</TextLink>
      </nav>
      <div id="skip-link-demo-main" tabIndex={-1} style={{ marginTop: 32 }}>
        <Text>
          この枠の中の何もないところをクリックしてから Tab キーを押すと、左上に「メインコンテンツへ」が出ます。Enter
          で、ナビを飛ばしてこの段落に移ります。
        </Text>
      </div>
    </div>
  )
}
