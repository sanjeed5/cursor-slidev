<template>
  <div class="glow-wrapper w-full h-full relative">
    <div class="glow-bg" aria-hidden="true" />
    <div class="relative z-10 flex items-center justify-center h-full">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.glow-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #14120b;
}

.glow-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.glow-bg::before {
  content: "";
  position: absolute;
  top: 40%;
  left: 50%;
  width: 120vmax;
  height: 120vmax;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    rgba(43, 41, 35, 0.55) 0%,
    rgba(20, 18, 11, 0) 65%
  );
  opacity: 0.9;
}

.glow-bg::after {
  content: "";
  position: absolute;
  bottom: -20%;
  right: -10%;
  width: 60vmax;
  height: 60vmax;
  background: radial-gradient(
    circle,
    rgba(245, 78, 0, 0.06) 0%,
    rgba(20, 18, 11, 0) 70%
  );
}
</style>
