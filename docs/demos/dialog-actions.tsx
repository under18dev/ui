import { useState } from 'react'
import { Button, ButtonGroup, Dialog, Text } from '../../src'

export default function DialogActions() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        connpass について
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} title="connpass を開きます">
        <div className="u18-stack">
          <Text>イベントの告知は connpass に載せています。新しいタブで開きます。</Text>
          <ButtonGroup>
            <Button href="https://under18dev.connpass.com" arrow onClick={() => setOpen(false)}>
              connpass を開く
            </Button>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              やめる
            </Button>
          </ButtonGroup>
        </div>
      </Dialog>
    </>
  )
}
