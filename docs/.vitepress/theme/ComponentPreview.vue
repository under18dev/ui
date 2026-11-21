<script setup lang="ts">
// shadcn/ui のような「プレビュー / コード」の切り替え。
// プレビューは docs/demos/<name>.tsx の React コンポーネントを、ブラウザでだけ描く
import { onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'
import type { Root } from 'react-dom/client'

const props = withDefaults(
  defineProps<{
    name: string
    /** center: 中央に置く、start: 左上から、full: 余白なしで全幅（ヘッダーやヒーロー） */
    align?: 'center' | 'start' | 'full'
    /** プレビューの最小の高さ（px） */
    minHeight?: number
  }>(),
  { align: 'center', minHeight: 280 },
)

const demos = import.meta.glob('../../demos/*.tsx')
const tab = ref<'preview' | 'code'>('preview')
const mount = ref<HTMLElement>()
const error = shallowRef<string>()
let root: Root | undefined

onMounted(async () => {
  const load = demos[`../../demos/${props.name}.tsx`]
  if (!load || !mount.value) {
    error.value = `デモ「${props.name}」が見つかりません`
    return
  }
  const [{ createRoot }, { createElement, StrictMode }, mod] = await Promise.all([
    import('react-dom/client'),
    import('react'),
    load() as Promise<{ default: () => unknown }>,
  ])
  root = createRoot(mount.value)
  root.render(createElement(StrictMode, null, createElement(mod.default as never)))
})

onBeforeUnmount(() => root?.unmount())
</script>

<template>
  <div class="cp">
    <div class="cp-tabs" role="tablist" aria-label="表示の切り替え">
      <button
        type="button"
        role="tab"
        :aria-selected="tab === 'preview'"
        :class="{ active: tab === 'preview' }"
        @click="tab = 'preview'"
      >
        プレビュー
      </button>
      <button
        type="button"
        role="tab"
        :aria-selected="tab === 'code'"
        :class="{ active: tab === 'code' }"
        @click="tab = 'code'"
      >
        コード
      </button>
    </div>
    <div v-show="tab === 'preview'" class="cp-preview vp-raw" :data-align="align" :style="{ minHeight: `${minHeight}px` }">
      <p v-if="error" class="cp-error">{{ error }}</p>
      <div ref="mount" class="u18-preview" />
    </div>
    <div v-show="tab === 'code'" class="cp-code">
      <slot />
    </div>
  </div>
</template>
