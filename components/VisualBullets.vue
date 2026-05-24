<script setup lang="ts">
defineProps<{
  wide?: boolean
}>()
</script>

<template>
  <div class="visual-bullets" :class="{ 'visual-bullets--wide': wide }">
    <slot />
  </div>
</template>
