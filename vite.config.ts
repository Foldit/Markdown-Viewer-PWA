import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/Markdown-Viewer-PWA/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Markdown Viewer',
        short_name: 'MDViewer',
        description: 'Offline, local, mobile-friendly Markdown Viewer',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        start_url: '/Markdown-Viewer-PWA/',
        scope: '/Markdown-Viewer-PWA/',
        icons: [
          {
            src: '/Markdown-Viewer-PWA/icon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any'
          },
          {
            src: '/Markdown-Viewer-PWA/icon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any'
          },
          {
            src: '/Markdown-Viewer-PWA/icon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'maskable'
          }
        ],
        screenshots: [
          {
            src: '/Markdown-Viewer-PWA/icon.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2,ttf,eot}'],
        runtimeCaching: []
      },
      devOptions: {
        enabled: true
      }
    })
  ]
})
