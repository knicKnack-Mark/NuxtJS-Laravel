// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts'],
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/scss/main.scss',
      ],
  app: {
    head: {
      title: 'Casa de Lujo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Testing Web meta desc' },
        { name: 'format-detection', content: 'telephone-no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})