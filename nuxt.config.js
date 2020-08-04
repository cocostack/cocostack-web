export default {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | cocostack-nuxt',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
   ** Load nuxt modules
   */
  modules: [
    '@nuxt/content',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '66085036',
        webvisor: true,
      },
    ],
  ],

  /*
   ** Load nuxt build-modules
   */
  buildModules: ['@nuxtjs/tailwindcss'],

  /*
   ** This option is given directly to the vue-router Router constructor
   */
  router: {
    base: '',
    linkActiveClass: 'is-active',
  },

  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** PostCSS setup
     */
    postcss: {
      // Add plugin names as key and arguments as value
      // Disable a plugin by passing false as value
      plugins: {
        cssnano: {
          preset: 'default',
          discardComments: { removeAll: true },
          zIndex: false,
        },
        'postcss-nested': {},
      },
      // Change the postcss-preset-env settings
      preset: {
        autoprefixer: {
          cascade: false,
          grid: true,
        },
      },
    },

    /*
     ** Run ESLint on save
     */
    extend(config, ctx) {},
  },
}
