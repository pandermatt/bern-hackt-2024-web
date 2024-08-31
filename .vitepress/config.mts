import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wine Captain",
  description: "Your AI-powered Wine Companion 🍷",
  base: '/wine-captain/',

  head: [
    ['meta', { property: 'og:title', content: 'Wine Captain' }],
    ['meta', { property: 'og:description', content: 'Your AI-powered Wine Companion 🍷' }],
    ['meta', { property: 'og:image', content: 'https://pandermatt.ch/wine-captain/og-image.png' }]
  ],

  themeConfig: {

    footer: {
      message: 'Made with ❤️ in Switzerland',
      copyright: 'by <a href="https://www.linkedin.com/in/pascal-andermatt-b4327a166/" target="_blank">Pascal Andermatt</a>, <a href="https://www.linkedin.com/in/yves-l%C3%BCtjens-8a1359182/" target="_blank">Yves Lütjens</a>, <a href="https://www.linkedin.com/in/ralphlmeier/" target="_blank">Ralph Meier</a> | <a href="https://pandermatt.ch/privacy-policy" target="_blank">Privacy Policy</a>'
    },
  }
})
