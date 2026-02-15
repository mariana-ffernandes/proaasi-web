<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const router = useRouter()
const { t, tm } = useI18n()

const modules = computed(() => {
  const raw = tm('intro.modules') || {}

  return Object.entries(raw).map(([key, data]) => ({
    key,
    ...data
  }))
})

function go(modulo) {
  router.push(`/intro/${modulo}`)
}
</script>

<template>
  <section class="intro-page">

    <header class="intro-hero">
      <div class="intro-hero-content">
        <button class="back-btn" @click="router.push('/modulos')">
          ← {{ t('intro.back') }}
        </button>

        <div class="intro-title-row">
          <h1>{{ t('intro.title') }}</h1>
          <p>{{ t('intro.subtitle') }}</p>
        </div>
      </div>
    </header>

    <main class="intro-content">
      <div
        v-for="module in modules"
        :key="module.key"
        class="intro-item"
        @click="go(module.key)"
      >
        <div>
          <h2>{{ module.title }}</h2>
          <p>{{ module.description }}</p>
        </div>

        <span class="chevron">›</span>
      </div>
    </main>

  </section>
</template>

<style scoped>
/* =========================
   HERO
========================= */

.intro-hero {
  background: linear-gradient(90deg, #4a90d9, #1e3a5f);
  color: white;
}

.intro-hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 32px 64px;
}

.hero-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 16px;
  filter: brightness(0) invert(1);
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

.intro-title-row {
  display: flex;
  align-items: center;
  gap: 20px;
}

.intro-icon {
  width: 56px;
  height: 56px;
}

.intro-title-row h1 {
  font-size: 2.6rem;
  margin-bottom: 6px;
}

.intro-title-row p {
  font-size: 1.2rem;
  opacity: 0.9;
}

/* =========================
   CONTENT
========================= */

.intro-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 64px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.intro-item {
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

.intro-item:hover,
.intro-item:focus {
  transform: translateY(-2px);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.12);
}

.intro-item h2 {
  font-size: 1.25rem;
  margin-bottom: 6px;
}

.intro-item p {
  font-size: 1rem;
  color: #475569;
  max-width: 600px;
}

.chevron {
  font-size: 2rem;
  color: #94a3b8;
}

/* =========================
   RESPONSIVO
========================= */

@media (max-width: 640px) {
  .intro-title-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .intro-item {
    padding: 22px;
  }
}
</style>
