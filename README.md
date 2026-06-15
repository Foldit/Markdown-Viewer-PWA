# Markdown Viewer PWA

A lightweight, offline-first Progressive Web App to view Markdown files locally on mobile or desktop.

## Features

- Upload a `.md` / `.markdown` file from your device (local-only, never uploaded)
- Render Markdown locally using `markdown-it` (HTML disabled for XSS safety)
- Close document and reupload another file
- Mobile-first responsive UI and PWA install support

## Quickstart

Requirements: Node.js 16+ and npm

Install dependencies:

```bash
cd d:\pwa\markdown-viewer\Markdown-Viewer-PWA
npm install
```

Run the dev server:

```bash
npm run dev
```

Open the app at the URL shown by Vite (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Project Structure

```
public/
	└── icon.svg                # App icon
src/
	├── App.vue                 # Main app (upload/view state)
	├── main.ts                 # App entry
	├── components/
	│   ├── UploadPanel.vue     # File selection UI
	│   ├── Toolbar.vue         # File name, close, reupload
	│   └── MarkdownViewer.vue  # Renders HTML from markdown-it
	├── composables/
	│   └── useMarkdown.ts      # markdown-it instance and renderer
	├── styles/markdown.css     # Markdown + layout styles
	└── types/file.ts           # TypeScript types
vite.config.ts                # Vite + vite-plugin-pwa config
package.json
tsconfig.json
```

## Security & Privacy

- Raw HTML rendering is disabled in the Markdown parser to reduce XSS risk.
- Markdown files are read locally and not uploaded or cached by the app by default.

## PWA Notes

The project uses `vite-plugin-pwa` and includes a manifest and service worker configuration. Install the app to your device from the browser to use it offline. The service worker caches application assets but does not cache user Markdown files.

## Troubleshooting

- If Markdown rendering fails, check the browser console for errors.
- For development issues, ensure dependencies are installed and Node version is compatible.

