// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

const isDev = process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
    '@nuxt/image',
  ],
  runtimeConfig: {
    public: {
      siteUrl: '',
    },
  },
  vue: {
    defineModel: true,
  },
  components: [
    { path: '~/components/base', prefix: 'T' },
    '~/components',
  ],
  alias: {
    '@scss': fileURLToPath(new URL('./assets/scss/', import.meta.url)),
  },
  image: {
    format: ['webp', 'png', 'jpg'],
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 80,
          height: 80,
        },
      },
    },
  },
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],
    },
    display: 'swap',
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1',
      htmlAttrs: { lang: 'vi' },
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      ],
      meta: [
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' },
      ],
    },
  },
  devtools: { enabled: true },
  sourcemap: isDev,
  experimental: {
    payloadExtraction: false,
  },
  typescript: {
    strict: true,
  },
})
