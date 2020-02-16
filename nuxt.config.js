const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
  head: {
    title: 'KIWI BLOG',
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    'cookie-universal-nuxt',
  ],
  buildModules: [
    '@nuxtjs/moment',
    '@nuxtjs/vuetify',
  ],
  moment: {
    locales: ['ko']
  },
  plugins: [
    { src: '~/plugins/vee-validate.js', ssr: true },
    { src: '~/plugins/nuxt-client-init.js', ssr: false },
    { src: '~/plugins/axios.js', ssr: true }
  ],
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash',
      }),
      // @see https://github.com/Urthen/case-sensitive-paths-webpack-plugin
      new CaseSensitivePathsPlugin({
        debug: false
        // debug: config.get('env').NODE_ENV === 'development'
      })
    ],
    analyze: false,
    extend(config, { isClient, isServer, isDev }) {
      if (isServer && !isDev) {
        config.devtool = 'hidden-source-map';
      }
      console.log('###webpack### => ', config, isServer, isClient);
      console.log("process.env.NODE_ENV", process.env.NODE_ENV)
    }
  },
  css: [
  ],
  axios: {
    browserBaseURL: '',
    baseURL: '',
    https: false,
  },
  toast: {
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },
  server: {
    //port: process.env.PORT || 3081,
  }
};
