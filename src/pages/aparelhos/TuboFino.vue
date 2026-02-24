<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { tm, t } = useI18n()
const router = useRouter()

const itens = computed(() => {
  const raw = tm('aparelhos.tubo-fino.contents') || {}
  return Object.entries(raw).map(([slug, data]) => ({
    slug,
    ...data
  }))
})

function goToContent(slug) {
  router.push(`/aparelhos/tubo-fino/${slug}`)
}
</script>

<template>
  <section class="tubo-page">

    <header class="tubo-hero">
      <div class="tubo-hero-content">
        <button class="back-btn" @click="router.push('/aparelhos')">
          ← {{ t('aparelhos.back') }}
        </button>

        <h1>{{ t('aparelhos.tubo-fino.title') }}</h1>
        <p>{{ t('aparelhos.tubo-fino.subtitle') }}</p>
      </div>
    </header>

    <main class="tubo-content">
      <div
        v-for="item in itens"
        :key="item.slug"
        class="tubo-item"
        role="button"
        tabindex="0"
        @click="goToContent(item.slug)"
        @keyup.enter="goToContent(item.slug)"
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

.tubo-hero {
  background: linear-gradient(90deg, #8b5cf6, #4a1a6b);
  color: white;
}

.tubo-hero-content {
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

.tubo-hero h1 {
  font-size: 2.6rem;
  margin-bottom: 8px;
}

.tubo-hero p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 700px;
}
.tubo-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 64px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.tubo-item {
  background: white;
  border-radius: 14px;
  padding: 28px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  transition: transform .2s ease, box-shadow .2s ease;
}

.tubo-item:hover,
.tubo-item:focus {
  transform: translateY(-2px);
  box-shadow: 0 10px 26px rgba(0,0,0,0.12);
}

.tubo-item h2 {
  font-size: 1.25rem;
  margin-bottom: 6px;
}

.tubo-item p {
  font-size: 1rem;
  color: #475569;
  max-width: 600px;
}

.chevron {
  font-size: 2rem;
  color: #94a3b8;
}

@media (max-width: 640px) {
  .tubo-hero h1 {
    font-size: 2rem;
  }

  .tubo-item {
    padding: 22px;
  }

  .tubo-item p {
    font-size: 0.95rem;
  }
}
</style>
