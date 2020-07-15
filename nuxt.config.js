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
    title: 'Stargate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Stargate Upgrade for the Cosmos ecosystem',
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
  plugins: [],
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
  // TODO: config scrolling speed
  // https://vue-scrollto.netlify.app/docs/#options
  modules: ['vue-scrollto/nuxt'],
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
