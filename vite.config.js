import glsl from 'vite-plugin-glsl'

export default {
  plugins: [ glsl() ],
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        menu: '/public/menu.html',
        script: '/public/script.js'
      },
    },
  },
}