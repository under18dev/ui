<script setup lang="ts">
// コンポーネントの一覧（/components/）
import { withBase } from 'vitepress'
import { componentPages } from '../pages'
</script>

<template>
  <div v-for="group in componentPages" :key="group.group" class="ci-group">
    <h2 :id="group.group">{{ group.group }}</h2>
    <ul class="ci-list">
      <li v-for="[slug, name] in group.items" :key="slug">
        <a :href="withBase(`/components/${slug}`)">{{ name }}</a>
      </li>
    </ul>
  </div>
</template>
