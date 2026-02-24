<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  color: String,
  onClick: Function
})
</script>

<template>
<button
  class="uso-card"
  :style="{ backgroundColor: color }"
  @click="onClick"
>
  <div class="icon-wrapper">
    <img :src="image" alt="" />
  </div>

  <h3 class="title">{{ title }}</h3>
  <p class="description">{{ description }}</p>
</button>
</template>

<style scoped>
.uso-card {
  border-radius: 20px;
  padding: 36px 24px;
  text-align: center;
  cursor: pointer;
  color: white;
  box-shadow: 0 12px 30px rgba(0,0,0,0.15);
  transition: transform .2s ease, box-shadow .2s ease;
  border: none;
}

.uso-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
}

.uso-dot {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(255,255,255,0.35);
}

.uso-title {
  font-size: 1.35rem;
  font-weight: 600;
  text-align: center;
}
</style>

