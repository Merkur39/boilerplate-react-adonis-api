import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@client': path.resolve(__dirname, './src'),
      '@api': path.resolve(__dirname, '../api/src'),
      '@shared': path.resolve(__dirname, '../shared/src'),
    },
  },
})
