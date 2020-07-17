export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Stargate | Cosmos Network',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'The Internet of Blockchains is on the horizon, bringing interoperability and more to the Cosmos ecosystem.',
      },
      // Open Graph
      { hid: 'og:site_name', property: 'og:site_name', content: 'Stargate' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Stargate | Cosmos Network',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'The Internet of Blockchains is on the horizon, bringing interoperability and more to the Cosmos ecosystem.',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://stargate.cosmos.network',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://stargate.cosmos.network/og-image.jpg',
      },
      // Twitter Card
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@cosmos' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Stargate | Cosmos Network',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'The Internet of Blockchains is on the horizon, bringing interoperability and more to the Cosmos ecosystem.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://stargate.cosmos.network/og-image.jpg',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Stargate',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Inter:400,700,900&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['normalize.css', { src: '~/assets/app.styl', lang: 'stylus' }],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' },
    { src: '~plugins/vue-scrollto.js', mode: 'client' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // https://nuxtjs.org/faq/postcss-plugins/#recommended-method
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      // plugins: {
      //   // Disable a plugin by passing false as value
      //   'postcss-url': false,
      //   'postcss-nested': {},
      //   'postcss-responsive-type': {},
      //   'postcss-hexrgba': {},
      // },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {},
      },
    },
  },
}
