if (process.env.NODE_ENV !== "production") require("dotenv").config();

export default {
  // Static hosting
  target: 'static',
  // Env settings
  env: {
    gMap: process.env.GOOGLE_MAPS_API_KEY
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Bolarinwa Olakunle (Joberror)' },
      { name: 'description', content: 'We supply, install and maintain industrial utility systems in Nigeria' },
      { name: 'keywords', content: 'compressor,industry,mechanical,utility,installation,supply,maintenance,engineering' },
      { name: 'rating', content: 'General' },
      { name: 'copyright', content: 'Airpress Technical & Allied Services Limited, Copyright - ' + new Date().getFullYear() },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=yes' },
    ],
    link: [
      { rel: 'icon', type: 'icon', href: '/favicon-32.png', sizes: '32x32' },
      { rel: 'apple-touch-icon', type: 'icon', href: '/favicon-195.png' },
      { rel: 'apple-touch-icon', type: 'icon', href: '/favicon-512.png', sizes: '512x512' },
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//storage.googleapis.com' },
      { rel: 'preconnect', href: '//fonts.googleapis.com' },
      { rel: 'preconnect', href: '//storage.googleapis.com', crossorigin: 'true' },
      { rel: 'preconnect', href: '//fonts.gstatic.com', crossorigin: 'true' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/sass/main.sass'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg',

    // Custom module
    [
      // https://www.npmjs.com/package/nuxt-compress
      'nuxt-compress', {
        gzip: {
          threshold: 8192,
          cache: true
        },
        brotli: {
          threshold: 10240,
        }
      }
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'Airpress Technology',
      short_name: 'airpress-tech'
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};

