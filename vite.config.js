import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path, { dirname } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    port: 3000,
    open: true,
    host: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname,"./src")
    }
  }
})
