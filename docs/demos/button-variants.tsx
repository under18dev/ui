import { Button, ButtonGroup } from '../../src'

export default function ButtonVariants() {
  return (
    <ButtonGroup>
      <Button>主要な操作</Button>
      <Button variant="secondary">補助の操作</Button>
    </ButtonGroup>
  )
}
