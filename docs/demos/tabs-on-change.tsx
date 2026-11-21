import { useState } from 'react'
import { Tabs, Text } from '../../src'

export default function TabsOnChange() {
  const [current, setCurrent] = useState('upcoming')
  return (
    <div className="u18-stack">
      <Tabs
        label="イベントの種類"
        onChange={setCurrent}
        items={[
          { id: 'upcoming', label: '開催予定', content: <Text>開催予定のイベントを並べます。</Text> },
          { id: 'past', label: '開催済み', content: <Text>開催済みのイベントを並べます。</Text> },
        ]}
      />
      <Text variant="small">選んでいるタブの id: <code>{current}</code></Text>
    </div>
  )
}
