import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/user':{
        target: 'http://localhost:5000',  // Backend API server
        changeOrigin: true,
        secure: false,
      },
      '/book':{
        target: 'http://localhost:5000',  // Backend API server
        changeOrigin: true,
        secure: false,
      },
      '/api':{
        target: 'http://localhost:5000',  // Backend API server
        changeOrigin: true,
        secure: false,
      }
    },
  },
  plugins: [react()],
})
