<script setup lang="ts">
import { asset } from './asset-url'

const lockupDark = asset('cursor-lockup-dark.svg')

defineProps<{
  image?: string
  imageAlt?: string
  title: string
  subtitle: string
  name?: string
}>()
</script>

<template>
  <div class="h-full w-full relative overflow-hidden bg-[#14120b]">
    <template v-if="image">
      <img
        :src="image"
        :alt="imageAlt ?? title"
        class="absolute inset-0 w-full h-full object-cover object-top opacity-90"
      />
      <div class="absolute bottom-0 left-0 right-0 px-12 pb-12 pt-24 bg-gradient-to-t from-[#14120b] via-[#14120b]/85 to-transparent">
        <img :src="lockupDark" alt="Cursor" class="h-7 mb-5 opacity-90" />
        <h1 class="text-5xl font-bold tracking-tight text-[#edecec] mb-2">{{ title }}</h1>
        <p class="text-xl text-muted">{{ subtitle }}</p>
        <p v-if="name" class="text-sm text-muted mt-3">{{ name }}</p>
      </div>
    </template>
    <div v-else class="cover-plain">
      <div class="cover-plain__glow" aria-hidden="true" />
      <img :src="lockupDark" alt="Cursor" class="cover-plain__logo" />
      <div class="cover-plain__content">
        <h1 class="text-6xl font-bold tracking-tight text-[#edecec] mb-3">{{ title }}</h1>
        <p class="text-2xl text-muted">{{ subtitle }}</p>
        <p v-if="name" class="text-base text-muted mt-4">{{ name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cover-plain {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.cover-plain__glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.cover-plain__glow::before {
  content: "";
  position: absolute;
  top: 45%;
  left: 50%;
  width: 100vmax;
  height: 100vmax;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    rgba(43, 41, 35, 0.55) 0%,
    rgba(20, 18, 11, 0) 65%
  );
}

.cover-plain__logo {
  position: absolute;
  top: 2.5rem;
  right: 3rem;
  z-index: 2;
  height: 1.75rem;
  opacity: 0.9;
}

.cover-plain__content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem;
  max-width: 48rem;
}
</style>
