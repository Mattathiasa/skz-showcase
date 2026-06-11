import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // vite dev has no serverless runtime; proxy /api to production
      '/api': {
        target: 'https://skz-showcase.vercel.app',
        changeOrigin: true,
      },
    },
  },
})
