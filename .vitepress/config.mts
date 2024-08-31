import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wine Captain",
  description: "Your AI-powered Wine Companion 🍷",

  head: [
    ['meta', { property: 'og:title', content: 'Wine Captain' }],
    ['meta', { property: 'og:description', content: 'Your AI-powered Wine Companion 🍷' }],
    ['meta', { property: 'og:image', content: 'https://pandermatt.ch/wine-captain/og-image.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' }],
    ['link', { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'msapplication-config', content: '/browserconfig.xml' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
  ],

  themeConfig: {

    footer: {
      message: 'Made with ❤️ in Switzerland',
      copyright: 'by <a href="https://www.linkedin.com/in/pascal-andermatt-b4327a166/" target="_blank">Pascal Andermatt</a>, <a href="https://www.linkedin.com/in/yves-l%C3%BCtjens-8a1359182/" target="_blank">Yves Lütjens</a>, <a href="https://www.linkedin.com/in/ralphlmeier/" target="_blank">Ralph Meier</a>  <div style="margin-top: 5px"></div> <a href="https://pandermatt.ch/privacy-policy" target="_blank">Privacy Policy</a>'
    },
  }
})
