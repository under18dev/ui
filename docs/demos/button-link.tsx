import { Button, ButtonGroup } from '../../src'

export default function ButtonLink() {
  return (
    <ButtonGroup>
      {/* 同じサイトの中へのリンクは → */}
      <Button href="#events" arrow>
        イベントを見る
      </Button>
      {/* http(s) のリンクは新しいタブで開き、↗ になる */}
      <Button href="https://github.com/under18dev" variant="secondary" arrow>
        GitHub
      </Button>
    </ButtonGroup>
  )
}
