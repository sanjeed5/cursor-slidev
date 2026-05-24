import { defineConfig } from 'vite'

// GitHub Pages serves at /cursor-slidev/. Override with SLIDEV_BASE=/ for root hosting (e.g. Cloudflare Pages).
export default defineConfig({
  base: process.env.SLIDEV_BASE ?? '/cursor-slidev/',
})
