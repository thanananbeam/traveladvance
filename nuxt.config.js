export default {
  buildModules: [
    '@nuxtjs/dotenv'
  ],
  dotenv: {
    /* module options */
  },
  env: {
    baseUrl: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://my-domain.com'
  },
  head: {
    titleTemplate: '%s',
    meta: [ // Each object in this array is its own meta tag
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial scale=1' },
      { name: 'description', hid: 'description', content: "วันหยุดพักผ่อนกับสมาชิกพร้อมเสียงหัวเราะมากมาย" },
      // Open Graph
      { name: 'og:title', content: "3 เดือน เจอเพื่อนทีนึง" },
      { name: 'og:description', content: "วันหยุดพักผ่อนกับสมาชิกพร้อมเสียงหัวเราะมากมาย" },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://boiling-castle-05431.herokuapp.com/' },
      { name: 'og:image', content: 'https://sv1.picz.in.th/images/2019/11/21/gJKMr8.jpg' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@nuxt_js' },
      { name: 'twitter:title', content: "3 เดือน เจอเพื่อนทีนึง" },
      { name: 'twitter:description', content: "วันหยุดพักผ่อนกับสมาชิกพร้อมเสียงหัวเราะมากมาย" },
      { name: 'twitter:image', content: 'https://sv1.picz.in.th/images/2019/11/21/gJKMr8.jpg' },
      { name: 'twitter:image:alt', content: '3 เดือน เจอเพื่อนทีนึง' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { 
        rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css' 
      },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.7.2/css/all.min.css' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js' }
    ],
    
  }
}