// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'arete' // <<-- change to your repo name EXACTLY (case-sensitive)

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'development' ? '/' : `/${repoName}/`,
  build: {
    outDir: 'dist',
  },
}))
