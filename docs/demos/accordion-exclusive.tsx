import { Accordion } from '../../src'

export default function AccordionExclusive() {
  return (
    <Accordion
      // 同じ name の項目は、1つ開くとほかが閉じる
      name="components-faq"
      items={[
        {
          summary: 'JS が動かなくても開閉できますか？',
          content: 'はい。details と summary の要素を使っているので、JS がなくても開閉できます。',
          defaultOpen: true,
        },
        {
          summary: '色は何色を使っていますか？',
          content: '白・黒・グレーの無彩色だけです。ライトとダークで、同じ明暗の階層になるように揃えています。',
        },
      ]}
    />
  )
}
