import MarkdownIt from 'markdown-it'

// Create markdown-it instance with safe configuration
const md = new MarkdownIt({
  html: false, // Disable raw HTML to prevent XSS
  linkify: true, // Detect URLs and convert them to links
  breaks: true // Convert line breaks to <br>
})

// Add external link handling
const defaultRender = md.renderer.rules.link_open || function(tokens, idx) {
  return md.utils.escapeHtml(tokens[idx].markup)
}

md.renderer.rules.link_open = function(tokens, idx) {
  const token = tokens[idx]
  if (token.attrGet('href')?.startsWith('http')) {
    token.attrSet('rel', 'noopener noreferrer')
    token.attrSet('target', '_blank')
  }
  return md.renderer.renderToken(tokens, idx, {})
}

export function renderMarkdown(content: string): string {
  try {
    return md.render(content)
  } catch (error) {
    console.error('Markdown rendering error:', error)
    return '<p style="color: red;">Failed to parse markdown content</p>'
  }
}
