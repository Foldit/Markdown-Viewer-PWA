<template>
  <div class="markdown-viewer markdown-body" v-html="htmlContent"></div>
</template>

<script setup lang="ts">
defineProps<{
  htmlContent: string
}>()
</script>

<style scoped>
.markdown-viewer {
  padding: 16px;
}

@media (max-width: 600px) {
  .markdown-viewer {
    padding: 12px;
  }
}
</style>
