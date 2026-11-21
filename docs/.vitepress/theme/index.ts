import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import '@fontsource-variable/inter'
import '@fontsource-variable/noto-sans-jp'
// ライブラリのトークンとコンポーネントの CSS。要素の初期スタイル（base.css）は VitePress と衝突するので、
// プレビューの中だけに docs.css で当てる
import '../../../src/styles/tokens.css'
import '../../../src/styles/components.css'
import './docs.css'
import ComponentPreview from './ComponentPreview.vue'
import PropsTable from './PropsTable.vue'
import ComponentIndex from './ComponentIndex.vue'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('ComponentPreview', ComponentPreview)
    app.component('PropsTable', PropsTable)
    app.component('ComponentIndex', ComponentIndex)
  },
} satisfies Theme
