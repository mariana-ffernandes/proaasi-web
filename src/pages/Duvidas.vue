<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t, tm } = useI18n()
const router = useRouter()

const topics = computed(() => {
  const raw = tm('duvidas.module.topics') || {}
  return Object.entries(raw).map(([slug, data]) => ({ slug, ...data }))
})

function goToTopic(slug) {
  router.push(`/duvidas/${slug}`)
}
</script>

<template>
  <section class="duvidas-page">

    <header class="duvidas-hero">
      <div class="duvidas-hero-content">
        <button class="back-btn" @click="router.push('/')">
          ← {{ t('duvidas.module.back') }}
        </button>

        <div class="hero-row">
          <img src="/images/ponto-interrogacao.png" alt="" class="hero-icon" />

          <div>
            <h1>{{ t('duvidas.module.title') }}</h1>
            <p>{{ t('duvidas.module.subtitle') }}</p>
          </div>
        </div>
      </div>
    </header>

    <main class="duvidas-content">
      <div v-for="topic in topics" :key="topic.slug" class="duvidas-item" role="button" tabindex="0"
        @click="goToTopic(topic.slug)" @keyup.enter="goToTopic(topic.slug)">
        <div class="text">
          <h2>{{ topic.title }}</h2>
          <p>{{ topic.description }}</p>
        </div>

        <span class="chevron">›</span>
      </div>
    </main>
  </section>
</template>

<style scoped>
.duvidas-hero {
  background: linear-gradient(90deg, #6366f1, #4f46e5);
  color: white;
}

.duvidas-hero-content {
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

.hero-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.hero-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 16px;
  filter: brightness(0) invert(1);
}

.duvidas-hero h1 {
  font-size: 2.6rem;
  margin-bottom: 8px;
}

.duvidas-hero p {
  font-size: 1.2rem;
  opacity: 0.92;
  max-width: 760px;
}

.duvidas-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 64px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.duvidas-item {
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

.duvidas-item:hover,
.duvidas-item:focus {
  transform: translateY(-2px);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.12);
}

.duvidas-item h2 {
  font-size: 1.25rem;
  margin-bottom: 6px;
}

.duvidas-item p {
  font-size: 1rem;
  color: #475569;
  max-width: 620px;
}

.chevron {
  font-size: 2rem;
  color: #94a3b8;
}

@media (max-width: 640px) {
  .duvidas-hero h1 {
    font-size: 2rem;
  }

  .duvidas-item {
    padding: 22px;
  }

  .duvidas-item p {
    font-size: 0.95rem;
  }
}
</style>
