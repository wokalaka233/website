import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 因为你绑定了域名 wokalaka.top，所以这里必须是 '/'
  base: '/', 
  build: {
    outDir: 'dist',
  }
})