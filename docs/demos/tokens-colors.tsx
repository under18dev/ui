// 色のトークンの見本。値は CSS 変数から読むので、テーマを切り替えると見本も変わる
const tokens = [
  ['--color-canvas', 'ページの背景'],
  ['--color-section', '一段沈んだ面'],
  ['--color-surface', 'カードなどの面'],
  ['--color-surface-raised', '1 段上の面'],
  ['--color-text', '本文・見出し'],
  ['--color-text-secondary', '補足の文'],
  ['--color-text-muted', 'ラベル・メタ情報'],
  ['--color-border', '境界線'],
  ['--color-border-strong', '強い区切り'],
  ['--color-inverse-bg', '反転した面・主要なボタン'],
  ['--color-inverse-text', '反転した面の文字'],
]

export default function TokensColors() {
  return (
    <ul className="u18-row-list">
      {tokens.map(([name, use]) => (
        <li key={name} className="u18-row">
          <div className="u18-cluster" style={{ paddingBlock: 12, gap: 16 }}>
            <span
              aria-hidden="true"
              style={{
                width: 40,
                height: 40,
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                background: `var(${name})`,
              }}
            />
            <code className="u18-mono u18-type-small u18-tone-primary" style={{ minWidth: '14rem' }}>
              {name}
            </code>
            <span className="u18-type-small">{use}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
