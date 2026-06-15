<template>
  <div class="toolbar">
    <span class="toolbar-title">{{ fileName }}</span>
    <div class="toolbar-actions">
      <button class="toolbar-button" @click="emit('reupload')" title="Upload another file">
        ↻ Reupload
      </button>
      <button class="toolbar-button close-btn" @click="emit('close')" title="Close document">
        ✕ Close
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  fileName: string
}>()

const emit = defineEmits<{
  close: []
  reupload: []
}>()
</script>

<style scoped>
/* Styles are in src/styles/markdown.css */
</style>
