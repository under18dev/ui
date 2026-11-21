import { useState } from 'react'
import { Button, Dialog, Text } from '../../src'

export default function DialogDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        ダイアログを開く
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} title="イベントのお知らせ">
        <Text>イベントは決まり次第、connpass でお知らせします。</Text>
      </Dialog>
    </>
  )
}
