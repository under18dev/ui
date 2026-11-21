import { EmptyState, TextLink } from '../../src'

export default function EmptyStateDemo() {
  return (
    <EmptyState
      title="開催予定のイベントはまだありません"
      description="決まり次第、connpass でお知らせします。"
      action={
        <TextLink href="https://under18dev.connpass.com" strong arrow>
          connpass をフォローする
        </TextLink>
      }
    />
  )
}
