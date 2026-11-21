import { Row, RowList } from '../../src'

export default function RowListDemo() {
  return (
    <RowList>
      <Row title="イベントに参加する" description="参加方法と、LT会での登壇の流れ。" href="https://under18.dev/join/" />
      <Row title="プロジェクトを見てみる" description="GitHub で公開しているリポジトリ。" href="https://github.com/under18dev" />
      <Row title="連絡・協力を相談する" description="協賛・共催・会場の提供などのご相談。" href="https://under18.dev/support/" />
    </RowList>
  )
}
