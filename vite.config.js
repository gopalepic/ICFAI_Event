// Correct version of vite.config.js
export default {
  server: {
    proxy: {
      '/register': {
        target: 'https://icfai-event-backend.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/register/, '')
      }
    }
  }
}
