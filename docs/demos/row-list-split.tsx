import { Row, RowList } from '../../src'

export default function RowListSplit() {
  return (
    <RowList>
      <Row
        layout="split"
        title="LT会・技術イベント"
        description="学校や地域のコミュニティと共催で、LT会や交流会を開いています。話すのが初めてでも、聞くだけでも参加できます。"
        href="https://under18.dev/events/"
        actionLabel="イベントを見る"
      />
      <Row
        layout="split"
        title="YouTube での発信"
        description="イベントの配信やアーカイブ、技術にまつわるコンテンツを公開しています。"
        href="https://www.youtube.com/channel/UCdFl5aaezIAVW38NoyrA9qA"
        actionLabel="YouTube を開く"
      />
      <Row
        layout="split"
        title="オープンソース"
        description="イベントの Web サイトや、Markdown からスライドを作るツールなど、作ったものを GitHub で公開しています。"
        href="https://github.com/under18dev"
        actionLabel="GitHub を開く"
      />
    </RowList>
  )
}
