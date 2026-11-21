<script setup lang="ts">
// Props の一覧。rows は [名前, 型, 既定値, 説明] の配列
defineProps<{ rows: Array<[string, string, string, string]> }>()
</script>

<template>
  <table class="props-table">
    <thead>
      <tr>
        <th>Prop</th>
        <th>型</th>
        <th>既定値</th>
        <th>説明</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row[0]">
        <td><code>{{ row[0] }}</code></td>
        <td><code class="props-type">{{ row[1] }}</code></td>
        <td><code v-if="row[2] !== '—'">{{ row[2] }}</code><span v-else>—</span></td>
        <td>{{ row[3] }}</td>
      </tr>
    </tbody>
  </table>
</template>
