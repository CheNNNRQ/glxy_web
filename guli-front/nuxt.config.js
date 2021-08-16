module.exports = {
  // some nuxt config...
  plugins: [
    {src: '~/plugins/nuxt-swiper-plugin.js', ssr: false}
  ],
  css: [
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: '在线课堂',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'keywords', name: 'keywords', content: 'diodi的在线教育项目'},
      {hid: 'description', name: 'description', content: '想变强吗 , 想变强就来在线课堂学习吧!'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

}

