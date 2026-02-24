<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()
const { t, tm } = useI18n()

const modulo = computed(() => route.params.modulo)
const baseKey = computed(() => `intro.modules.${modulo.value}`)

const contents = computed(() => {
  const raw = tm(`${baseKey.value}.contents`) || {}

  return Object.entries(raw).map(([slug, data]) => ({
    slug,
    ...data
  }))
})

function go(slug) {
  router.push(`/intro/${modulo.value}/${slug}`)
}
</script>

<template>
  <section class="module-page">
    <header class="module-hero">
      <div class="module-hero-content">
        <button class="back-btn" @click="router.push('/intro')">
          ← {{ t('intro.back') }}
        </button>

        <div class="module-title-row">
          <h1>{{ t(`${baseKey}.title`) }}</h1>
          <p>{{ t(`${baseKey}.description`) }}</p>
        </div>
      </div>
    </header>

    <main class="module-content">
      <div
        v-for="item in contents"
        :key="item.slug"
        class="module-item"
        role="button"
        tabindex="0"
        @click="go(item.slug)"
        @keyup.enter="go(item.slug)"
      >
        <div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </div>

        <span class="chevron">›</span>
      </div>
    </main>
  </section>
</template>

<style scoped>
.module-hero {
  background: linear-gradient(90deg, #4a90d9, #1e3a5f);
  color: white;
}

.module-hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 32px 64px;
}

.back-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 32px;
  opacity: 0.9;
}

.back-btn:hover {
  text-decoration: underline;
}

.module-title-row h1 {
  font-size: 2.6rem;
  margin-bottom: 8px;
}

.module-title-row p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.module-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 64px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.module-item {
  background: white;
  border-radius: 14px;
  padding: 28px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  transition: transform .2s ease, box-shadow .2s ease;
}

.module-item:hover,
.module-item:focus {
  transform: translateY(-2px);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.12);
}

.module-item h2 {
  font-size: 1.25rem;
  margin: 0;
}

.chevron {
  font-size: 2rem;
  color: #94a3b8;
}

@media (max-width: 640px) {
  .module-item {
    padding: 22px;
  }
}

</style>
