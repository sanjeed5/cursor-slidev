<script setup lang="ts">
import { asset } from './asset-url'

const lockupDark = asset('cursor-lockup-dark.svg')

const links = [
  { label: 'Changelog', href: 'https://cursor.com/changelog' },
  { label: 'Docs', href: 'https://cursor.com/docs' },
  { label: 'Community', href: 'https://cursor.com/community' },
]
</script>

<template>
  <div class="end-slide">
    <div class="end-slide__glow" aria-hidden="true" />

    <div class="end-slide__content">
      <img :src="lockupDark" alt="Cursor" class="end-slide__logo" />

      <h1 class="end-slide__title">Questions?</h1>

      <nav class="end-slide__links" aria-label="Cursor links">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          target="_blank"
          class="end-slide__link link-plain"
        >
          <span class="end-slide__link-label">{{ link.label }}</span>
          <span class="end-slide__link-url">{{ link.href.replace(/^https?:\/\//, '') }}</span>
        </a>
      </nav>

      <p class="end-slide__footer">
        Sanjeed
      </p>
    </div>
  </div>
</template>

<style scoped>
.end-slide {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #14120b;
  display: flex;
  align-items: center;
  justify-content: center;
}

.end-slide__glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.end-slide__glow::before {
  content: "";
  position: absolute;
  top: 42%;
  left: 50%;
  width: 100vmax;
  height: 100vmax;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    rgba(43, 41, 35, 0.5) 0%,
    rgba(20, 18, 11, 0) 62%
  );
}

.end-slide__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  max-width: 40rem;
}

.end-slide__logo {
  height: 1.75rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}

.end-slide__title {
  margin: 0;
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: #edecec;
}

.end-slide__links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2.25rem;
}

.end-slide__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  padding: 0.75rem 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(237, 236, 236, 0.1);
  background: #1b1913;
  text-decoration: none;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  min-width: 16rem;
}

.end-slide__link:hover {
  background: #201e18;
  border-color: rgba(237, 236, 236, 0.16);
  opacity: 1;
}

.end-slide__link-label {
  font-size: 1rem;
  font-weight: 600;
  color: rgba(237, 236, 236, 0.9);
}

.end-slide__link-url {
  font-size: 0.95rem;
  font-weight: 400;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  color: rgba(237, 236, 236, 0.55);
  letter-spacing: -0.01em;
}

.end-slide__footer {
  margin: 3rem 0 0;
  font-size: 0.875rem;
  color: rgba(237, 236, 236, 0.4);
  line-height: 1.5;
}
</style>
