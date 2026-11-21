import { Button, EmptyState } from '../../src'

export default function EmptyStateButton() {
  return (
    <EmptyState
      title="お知らせはまだありません"
      description="これまでの活動は、イベントのページで見られます。"
      action={
        <Button href="https://under18.dev/events/" variant="secondary" arrow>
          イベントを見る
        </Button>
      }
    />
  )
}
