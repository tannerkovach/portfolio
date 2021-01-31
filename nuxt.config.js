

export default {
	
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Tanner Kovach: Portfolio - Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tanner Kovach: Portfolio & Blog' }
    ],
    htmlAttrs: {
      lang: 'en'
    },
    link: [
	    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preload", as: "font", href: "made-dillan.otf", crossorigin: "anonymous"}
	  ],
	  script: [
      {
        src: 'js/main.js', async: true
      },
      {
        src: 'js/watched-box.min.js', type: 'module', async: true 
      },
      {
        src: 'js/focus-visible.min.js', async: true 
      },
      // { 
      //   src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList'
      // }
	  ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
	  '@/assets/css/tailwind.css',
	  '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
	'@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
	'@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  
  server: {     
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },

  render: {
    bundleRenderer: {
      shouldPreload: (_file, type) => {
        console.log(_file, type)
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
}
