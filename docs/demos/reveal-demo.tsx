import { Reveal, Text } from '../../src'

const principles = [
  ['作る。', 'アイデアを試し、動くものとして形にする。'],
  ['話す。', '好きな技術や、自分が見ている世界を共有する。'],
  ['つながる。', '年齢や肩書きの違いを越えて、同じ興味を持つ人と出会う。'],
]

export default function RevealDemo() {
  return (
    <div style={{ padding: '32px 24px' }}>
      {/* 表示する要素を、最初は画面の外に置く */}
      <div style={{ minHeight: '100vh' }}>
        <Text tone="muted">プレビューの中を下へスクロールしてください。</Text>
      </div>
      <div style={{ display: 'grid', gap: 32, paddingBottom: 160 }}>
        {principles.map(([title, description], index) => (
          // 同じまとまりの中で 100ms ずつずらす
          <Reveal key={title} index={index}>
            <p className="u18-type-h2">{title}</p>
            <Text tone="secondary">{description}</Text>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
