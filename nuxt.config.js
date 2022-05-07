//* config.js
const config = require('./contentful.json')

export default {
  target: 'static',
  loading: {
    color: 'blue',
    height: '5px',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      'Freelance Web Developer || freelance frontend Javascript Developer || create your website  ',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  //* page spped , adopt modern browsers //
  modern: true,
  ssr: false,
  // Global CSS: https://go.nuxtjs.dev/config-css
  // '~/assests/global.css'
  css: ['@/assests/default.scss'],

  // //* export contentful keys //
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_ENVIRONMENT: config.CTF_ENVIRONMENT,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // if u want to add here
  // install like this  => npm install --save vue-typed-js
  plugins: [
    { src: '~/plugins/vue_Typical.js' },
    //here work after adding de mode //
    { src: '~/plugins/vue_particles.js' },
    { src: '~/plugins/vee-validate.js' },
    { src: '~/plugins/email.js' },
    //'~/plugins/vue_particles.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-animejs',
    '@nuxt/image',
    [
      '@nuxtjs/fontawesome',
      {
        icons: {
          solid: true,
          brands: true,
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    //'@nuxt/image',
    // https://go.nuxtjs.dev/axios
    // 'nuxt-lazy-load',
    '@nuxtjs/axios',
  ],
  image: {
    // Options
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    aggressiveCodeRemoval: true,
    // transpile : ['vue-typical']
    // Add exception
    // build error parse
    transpile: ['vee-validate/dist/rules'],
    postcss: {
      plugins: {
        'postcss-custom-properties': false,
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // ...
    },
  },
}
