import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use the subfolder path ONLY during final production build, otherwise use root '/'
  base: command === 'build' ? '/portfolio/' : '/',
}))