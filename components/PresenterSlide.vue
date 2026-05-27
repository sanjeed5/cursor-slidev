<script setup lang="ts">
import { asset } from './asset-url'

const photo = asset('sanjeed.jpg')
const qrLinkedIn = asset('qr/linkedin.png')
const qrX = asset('qr/x.png')

const social = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/msanjeed/', qr: qrLinkedIn },
  { label: 'X', href: 'https://x.com/sanjeed_i', qr: qrX },
]
</script>

<template>
  <div class="presenter-slide">
    <div class="presenter-card">
      <img :src="photo" alt="Sanjeed" class="presenter-photo" />

      <div class="presenter-body">
        <h1 class="presenter-name">Sanjeed</h1>
        <p class="presenter-role">Cursor Community · South Asia Lead</p>
        <p class="presenter-arc">
          <span class="presenter-arc-edu">IIT Madras</span>
          <span class="presenter-arc-sep">·</span>
          <span>Engineer</span>
          <span class="presenter-arc-sep">→</span>
          <span>PM</span>
          <span class="presenter-arc-sep">→</span>
          <span>AI Consultant</span>
        </p>
        <a href="https://sanjeed.in" target="_blank" class="presenter-site link-plain">sanjeed.in</a>
      </div>

      <div class="presenter-social">
        <p class="presenter-social-caption">Follow for AI pro tips</p>
        <div class="presenter-social-links">
          <a
            v-for="item in social"
            :key="item.label"
            :href="item.href"
            target="_blank"
            class="presenter-social-link link-plain"
          >
            <img :src="item.qr" :alt="item.label" class="presenter-qr" />
            <span>{{ item.label }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.presenter-slide {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 3rem;
}

.presenter-card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  max-width: 52rem;
  padding: 2rem 2.25rem;
  border-radius: 1rem;
  border: 1px solid rgba(237, 236, 236, 0.1);
  background: #1b1913;
}

.presenter-photo {
  width: 8.5rem;
  height: 8.5rem;
  border-radius: 9999px;
  object-fit: cover;
  border: 1px solid rgba(237, 236, 236, 0.12);
}

.presenter-body {
  min-width: 0;
}

.presenter-name {
  margin: 0;
  font-size: 2.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: #edecec;
}

.presenter-role {
  margin: 0.5rem 0 0;
  font-size: 1.25rem;
  color: rgba(237, 236, 236, 0.85);
  line-height: 1.35;
}

.presenter-arc {
  margin: 0.85rem 0 0;
  font-size: 0.9375rem;
  color: rgba(237, 236, 236, 0.6);
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  align-items: center;
}

.presenter-arc-sep {
  color: rgba(237, 236, 236, 0.35);
}

.presenter-arc-edu {
  color: rgba(237, 236, 236, 0.78);
  font-weight: 500;
}

.presenter-site {
  display: inline-block;
  margin-top: 1rem;
  font-size: 1.0625rem;
  font-weight: 600;
  color: #edecec;
}

.presenter-social {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-left: 1rem;
  border-left: 1px solid rgba(237, 236, 236, 0.08);
  max-width: 11rem;
}

.presenter-social-caption {
  margin: 0 0 0.25rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: rgba(237, 236, 236, 0.7);
  line-height: 1.3;
}

.presenter-social-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.presenter-social-link {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  text-decoration: none;
}

.presenter-social-link span {
  font-size: 0.8125rem;
  font-weight: 600;
  color: rgba(237, 236, 236, 0.5);
  min-width: 3.25rem;
}

.presenter-social-link:hover span {
  color: rgba(237, 236, 236, 0.75);
}

.presenter-qr {
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 0.375rem;
  display: block;
  flex-shrink: 0;
}
</style>
