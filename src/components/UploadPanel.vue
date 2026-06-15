<template>
  <div class="upload-panel">
    <h1 class="upload-title">📄 Markdown Viewer</h1>
    <p class="upload-subtitle">
      Select a Markdown file from your device<br />
      Supports .md and .markdown files<br />
      Content is processed locally and never uploaded
    </p>
    <button class="upload-button" @click="triggerFileInput">
      Choose Markdown File
    </button>
    <input
      ref="fileInput"
      type="file"
      accept=".md,.markdown"
      class="file-input"
      @change="handleFileSelect"
    />
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { MarkdownDocument } from '../types/file'

const emit = defineEmits<{
  fileLoaded: [document: MarkdownDocument]
}>()

const fileInput = ref<HTMLInputElement>()
const error = ref<string>('')

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

function triggerFileInput() {
  fileInput.value?.click()
}

async function handleFileSelect(e: Event) {
  const target = e.target as HTMLInputElement
  const files = target.files

  error.value = ''

  if (!files || files.length === 0) {
    return
  }

  const file = files[0]

  // Validate file size
  if (file.size > MAX_FILE_SIZE) {
    error.value = `File is too large. Maximum size is ${MAX_FILE_SIZE / (1024 * 1024)}MB`
    return
  }

  // Validate file extension
  const fileName = file.name.toLowerCase()
  if (!fileName.endsWith('.md') && !fileName.endsWith('.markdown')) {
    error.value = 'Invalid file type. Please select a .md or .markdown file'
    return
  }

  try {
    // Read file content
    const content = await file.text()

    if (!content.trim()) {
      error.value = 'File is empty'
      return
    }

    // Emit the loaded document
    emit('fileLoaded', {
      fileName: file.name,
      content: content
    })

    // Reset file input
    target.value = ''
  } catch (err) {
    console.error('Error reading file:', err)
    error.value = 'Failed to read file. Please try again.'
  }
}
</script>

<style scoped>
/* Styles are in src/styles/markdown.css */
</style>
