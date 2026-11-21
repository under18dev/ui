import { Text } from '../../src'

export default function TextTones() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Text tone="primary">primary: 見出しと同じ濃さ</Text>
      <Text>secondary: 本文の既定</Text>
      <Text tone="muted">muted: 日付や場所などの補足</Text>
    </div>
  )
}
