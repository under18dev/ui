import { Badge, formatEventDate } from '../../src'

export default function BadgeWithDate() {
  const date = '2026-11-02T09:30:00+09:00'
  return (
    <div className="u18-cluster">
      <time dateTime={date} className="u18-mono">
        {formatEventDate(date)}
      </time>
      <Badge variant="muted">開催済み</Badge>
    </div>
  )
}
