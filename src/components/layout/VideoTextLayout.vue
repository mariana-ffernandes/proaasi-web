<script setup>
defineProps({
  title: String,
  videoSrc: String,
  poster: String,
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <section class="video-text">
    <h1 class="title">{{ title }}</h1>

    <div class="top" :class="{ reverse }">
      <div class="video">
        <video controls :src="videoSrc" :poster="poster" />
      </div>

      <div class="side-text">
        <slot name="side" />
      </div>
    </div>

    <div class="below-text">
      <slot name="below" />
    </div>
  </section>
</template>

<style scoped>
.video-text {
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 32px;
}

.title {
  font-size: 2.4rem;
  color: #1f3a8a;
  margin-bottom: 32px;
}

.top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.video video {
  width: 100%;
  border-radius: 16px;
}

.side-text p,
.below-text p {
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 16px;
  color: #333;
}

.below-text {
  margin-top: 32px;
}

.top.reverse {
  direction: rtl;
}

.top.reverse>* {
  direction: ltr;
}
@media (max-width: 900px) {
  .top {
    grid-template-columns: 1fr;
  }
}
</style>
