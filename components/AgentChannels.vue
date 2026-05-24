<template>
  <div class="channel-grid">
    <div v-for="channel in channels" :key="channel.name" class="channel-card">
      <span class="channel-card__label">{{ channel.name }}</span>
      <span class="channel-card__hint">{{ channel.hint }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const channels = [
  { name: 'IDE', hint: 'Composer 2.5 · Plan Mode' },
  { name: 'Cloud', hint: 'Async PRs · handoff' },
  { name: 'Slack', hint: '@Cursor in threads' },
  { name: 'GitHub', hint: 'Issues · PRs' },
  { name: 'Linear', hint: 'Tickets · triage' },
  { name: 'Jira', hint: 'Assign · @Cursor' },
  { name: 'Automations', hint: 'Always-on agents' },
]
</script>

<style scoped>
.channel-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  width: 100%;
  max-width: 26rem;
}

.channel-card {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.125rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(237, 236, 236, 0.1);
  background: #1b1913;
}

.channel-card__label {
  font-size: 1.125rem;
  font-weight: 700;
  color: #edecec;
  letter-spacing: -0.02em;
}

.channel-card__hint {
  font-size: 0.8125rem;
  color: rgba(237, 236, 236, 0.55);
  line-height: 1.35;
}

.channel-card:last-child {
  grid-column: 1 / -1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.channel-card:last-child .channel-card__hint {
  text-align: right;
}
</style>
