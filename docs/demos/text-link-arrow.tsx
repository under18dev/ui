import { TextLink } from '../../src'

export default function TextLinkArrow() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* 同じページ・同じサイトの中は → */}
      <TextLink href="#props" arrow>
        このページの Props へ
      </TextLink>
      {/* http(s) のリンクは新しいタブで開き、↗ になる */}
      <TextLink href="https://github.com/under18dev" arrow>
        GitHub
      </TextLink>
    </div>
  )
}
