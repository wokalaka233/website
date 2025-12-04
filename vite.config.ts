import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 因为你绑定了域名 wokalaka.top，所以这里必须是 '/'
  // 如果未来取消了域名绑定，需要改为 '/wokalaka233.github.io/'
  base: './', 
  build: {
    outDir: 'dist',
  }
})
