import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@mui/lab', '@mui/icons-material'],
  },
  server: {
    open: true, // Automatically open the app in the browser
    port: 3000,
    host: '0.0.0.0',  // You can specify a custom port
  },
  resolve: {
    alias: {
      '@': '/src', // Define alias for easier imports
    },
  },
  build: {
    target: 'esnext', // Ensure compatibility with latest JavaScript features
  },
})