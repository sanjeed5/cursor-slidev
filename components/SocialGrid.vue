<script setup lang="ts">
import { defaultSocialTweets } from './social-slide'

withDefaults(
  defineProps<{
    tweets?: { screenshot: string; name: string }[]
  }>(),
  { tweets: () => defaultSocialTweets },
)
</script>

<template>
  <div class="social-grid">
    <figure v-for="(t, i) in tweets" :key="i" class="tweet-card">
      <img :src="t.screenshot" :alt="`Post by ${t.name}`" />
    </figure>
  </div>
</template>

<style scoped>
.social-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  width: 100%;
  max-height: min(62vh, 520px);
}

.tweet-card {
  margin: 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(237, 236, 236, 0.08);
  background: #1b1913;
  display: flex;
  align-items: stretch;
}

.tweet-card img {
  width: 100%;
  height: 100%;
  max-height: 240px;
  object-fit: contain;
  object-position: top center;
  display: block;
}
</style>
