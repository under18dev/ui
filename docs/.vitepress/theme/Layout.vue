<script setup lang="ts">
// VitePress のダークモード（html.dark）と、ライブラリのテーマ（u18.theme と html[data-theme]）を揃える。
// どちらで切り替えても、もう一方が追従する
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { onMounted, onUnmounted, watch } from 'vue'
import { applyTheme, readThemeChoice, resolveTheme, storeThemeChoice } from '../../../src/theme/theme'

const { isDark } = useData()
let observer: MutationObserver | undefined

// VitePress 側の明暗に、ライブラリの保存値と表示を合わせる
const syncFromVitePress = (dark: boolean) => {
  const systemDark = matchMedia('(prefers-color-scheme: dark)').matches
  if (resolveTheme(readThemeChoice(), systemDark) !== (dark ? 'dark' : 'light')) {
    storeThemeChoice(dark ? 'dark' : 'light')
  }
  applyTheme(readThemeChoice())
}

onMounted(() => {
  const root = document.documentElement
  // 動きを減らす設定でなければ、スクロール表示の演出を有効にする
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) root.dataset.motion = ''
  syncFromVitePress(isDark.value)
  // プレビューの ThemeControl で切り替えたら、VitePress 側を合わせる
  observer = new MutationObserver(() => {
    const dark = root.dataset.theme === 'dark'
    if (dark !== isDark.value) isDark.value = dark
  })
  observer.observe(root, { attributeFilter: ['data-theme'] })
})
onUnmounted(() => observer?.disconnect())
watch(isDark, (dark) => syncFromVitePress(dark))
</script>

<template>
  <DefaultTheme.Layout />
</template>
