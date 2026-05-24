<template>
  <div class="composer-stats">
    <div class="composer-stats__cell">
      <div class="composer-stats__value">63.2</div>
      <div class="composer-stats__label">CursorBench v3.1</div>
    </div>
    <div class="composer-stats__cell">
      <div class="composer-stats__value">79.8%</div>
      <div class="composer-stats__label">SWE-Bench Multilingual</div>
    </div>
    <div class="composer-stats__promo">
      <span class="composer-stats__promo-strong">Double usage</span>
      <span class="composer-stats__promo-muted"> in the IDE</span>
    </div>
  </div>
</template>

<style scoped>
.composer-stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.625rem;
  width: 100%;
  max-width: 22rem;
}

.composer-stats__cell {
  padding: 0.875rem 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(237, 236, 236, 0.1);
  background: #1b1913;
}

.composer-stats__value {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1;
  color: #f54e00;
}

.composer-stats__label {
  margin-top: 0.35rem;
  font-size: 0.75rem;
  color: rgba(237, 236, 236, 0.6);
}

.composer-stats__promo {
  grid-column: 1 / -1;
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(245, 78, 0, 0.35);
  background: #201e18;
  text-align: center;
  font-size: 0.9375rem;
}

.composer-stats__promo-strong {
  font-weight: 600;
  color: #edecec;
}

.composer-stats__promo-muted {
  color: rgba(237, 236, 236, 0.6);
}
</style>
