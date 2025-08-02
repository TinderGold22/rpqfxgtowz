import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdPlugin from 'vite-plugin-md'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),         // React plugin
    mdPlugin(),      // Markdown (.md) support
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".jsx", ".md"], // optional, to support .md import
  },
  optimizeDeps: {
    include: ["vite-plugin-md"],
  },
})
