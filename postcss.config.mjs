// ドキュメントのプレビュー（.vp-raw）の中に、VitePress の初期スタイルと本文のスタイルが効かないようにする。
// 初期設定では base.css だけが対象なので、vp-doc.css も加える
import { postcssIsolateStyles } from 'vitepress'

export default {
  plugins: [postcssIsolateStyles({ includeFiles: [/vitepress.*[\\/](base|vp-doc)\.css$/] })],
}
