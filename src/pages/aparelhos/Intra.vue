<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t, tm } = useI18n()
const router = useRouter()

const items = computed(() => {
  const raw = tm('aparelhos.intra.contents') || {}
  return Object.entries(raw).map(([slug, data]) => ({
    slug,
    title: data.title,
    description: data.description
  }))
})

function goTo(slug) {
  router.push(`/aparelhos/intra/${slug}`)
}
</script>

<template>
  <section class="content-page">

    <header class="content-hero">
      <div class="content-hero-inner">
        <button class="back-btn" @click="router.push('/aparelhos')">
          ← {{ t('aparelhos.back') }}
        </button>

        <h1>{{ t('aparelhos.intra.title') }}</h1>
        <p>{{ t('aparelhos.intra.subtitle') }}</p>
      </div>
    </header>

    <main class="content-list">
      <div
        v-for="item in items"
        :key="item.slug"
        class="content-item"
        role="button"
        tabindex="0"
        @click="goTo(item.slug)"
        @keyup.enter="goTo(item.slug)"
      >
        <div class="text">
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </div>

        <span class="chevron">›</span>
      </div>
    </main>
  </section>
</template>

<style scoped>
.content-hero {
  background: linear-gradient(90deg, #3b82f6, #1e40af);
  color: white;
}

.content-hero-inner {
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
  margin-bottom: 24px;
  opacity: 0.9;
}

.back-btn:hover {
  text-decoration: underline;
}

.content-hero h1 {
  font-size: 2.4rem;
  margin-bottom: 8px;
}

.content-hero p {
  font-size: 1.15rem;
  opacity: 0.9;
}

.content-list {
  max-width: 900px;
  margin: 0 auto;
  padding: 64px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.content-item {
  background: white;
  border-radius: 14px;
  padding: 26px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  transition: transform .2s ease, box-shadow .2s ease;
}

.content-item:hover,
.content-item:focus {
  transform: translateY(-2px);
  box-shadow: 0 10px 26px rgba(0,0,0,0.12);
}

.content-item h2 {
  font-size: 1.25rem;
  margin-bottom: 6px;
}

.content-item p {
  font-size: 1rem;
  color: #475569;
  max-width: 620px;
}

.chevron {
  font-size: 2rem;
  color: #fbbf24;
}


@media (max-width: 640px) {
  .content-item {
    padding: 22px;
  }

  .content-hero h1 {
    font-size: 2rem;
  }
}
</style>
