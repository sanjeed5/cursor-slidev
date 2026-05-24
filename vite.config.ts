import { defineConfig } from 'vite'

// Root hosting (Cloudflare Pages, cursor.sanjeed.in). Legacy GitHub Pages: SLIDEV_BASE=/cursor-slidev/
export default defineConfig({
  base: process.env.SLIDEV_BASE ?? '/',
})
