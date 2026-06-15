<template>
  <div class="app-container">
    <template v-if="state === 'upload'">
      <UploadPanel @file-loaded="handleFileLoaded" />
    </template>
    <template v-else>
      <Toolbar
        :file-name="document?.fileName || ''"
        @close="handleClose"
        @reupload="handleReupload"
      />
      <div class="content-area">
        <MarkdownViewer :html-content="htmlContent" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import UploadPanel from './components/UploadPanel.vue'
import Toolbar from './components/Toolbar.vue'
import MarkdownViewer from './components/MarkdownViewer.vue'
import { renderMarkdown } from './composables/useMarkdown'
import type { MarkdownDocument } from './types/file'

type AppState = 'upload' | 'view'

const state = ref<AppState>('upload')
const document = ref<MarkdownDocument | null>(null)
const htmlContent = computed(() => {
  return document.value ? renderMarkdown(document.value.content) : ''
})

function handleFileLoaded(doc: MarkdownDocument) {
  document.value = doc
  state.value = 'view'
  // Scroll to top
  window.scrollTo(0, 0)
}

function handleClose() {
  document.value = null
  state.value = 'upload'
}

function handleReupload() {
  document.value = null
  state.value = 'upload'
}
</script>

<style scoped>
/* Styles are in src/styles/markdown.css */
</style>
