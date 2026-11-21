import { Accordion } from '../../src'

export default function AccordionDemo() {
  return (
    <Accordion
      items={[
        {
          summary: 'JS が動かなくても開閉できますか？',
          content: 'はい。details と summary の要素を使っているので、JS がなくても開閉できます。',
        },
        {
          summary: '色は何色を使っていますか？',
          content: '白・黒・グレーの無彩色だけです。ライトとダークで、同じ明暗の階層になるように揃えています。',
        },
        {
          summary: 'スタイルはどう読み込みますか？',
          content: <>'@under18dev/ui/styles.css' を一度だけ読み込みます。</>,
        },
      ]}
    />
  )
}
