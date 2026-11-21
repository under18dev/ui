import { Tabs, Text, TextLink } from '../../src'

export default function TabsDefault() {
  return (
    <Tabs
      label="活動の種類"
      defaultTabId="oss"
      items={[
        {
          id: 'events',
          label: 'イベント',
          content: <Text>学校や地域のコミュニティと共催で、LT会や交流会を開いています。</Text>,
        },
        {
          id: 'youtube',
          label: 'YouTube',
          content: <Text>イベントの配信やアーカイブ、技術にまつわるコンテンツを公開しています。</Text>,
        },
        {
          id: 'oss',
          label: 'オープンソース',
          content: (
            <Text>
              作ったものは <TextLink href="https://github.com/under18dev">GitHub</TextLink> で公開しています。
            </Text>
          ),
        },
      ]}
    />
  )
}
