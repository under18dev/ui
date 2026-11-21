import { Badge } from '../../src'

export default function BadgeVariants() {
  return (
    <div className="u18-cluster">
      <Badge>開催予定</Badge>
      <Badge variant="solid">開催中</Badge>
      <Badge variant="muted">開催済み</Badge>
    </div>
  )
}
