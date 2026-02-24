<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import BackButton from '@/components/ui/BackButton.vue'

const router = useRouter()
const { tm, t } = useI18n()

const itens = computed(() => {
  const raw = tm('comunicacao.parceiro.contents') || {}
  return Object.entries(raw).map(([slug, data]) => ({
    slug,
    ...data
  }))
})

function go(slug) {
  router.push(`/comunicacao/parceiro/${slug}`)
}
</script>

<template>
  <section class="page">
    <header class="hero">
      <div class="hero-inner">
        <button class="back-btn" @click="router.push('/comunicacao')">
          ← {{ t('comunicacao.back') }}
        </button>

        <h1>{{ t('comunicacao.parceiro.title') }}</h1>
        <p>{{ t('comunicacao.parceiro.subtitle') }}</p>
      </div>
    </header>

    <div class="content">
      <div class="list">
        <button v-for="item in itens" :key="item.slug" class="list-item" @click="go(item.slug)">
          <div class="item-text">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </div>

          <span class="arrow">›</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page {
  background: #f3f4f6;
  min-height: 100vh;
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

.hero {
  background: linear-gradient(135deg, #4a90d9, #1e3a5f);
  color: white;
}

.hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 72px 32px 64px;
}

.hero h1 {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 12px;
}

.hero p {
  font-size: 1.2rem;
  opacity: 0.95;
}

.content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 56px 32px 88px;
}

.list {
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.list-item {
  background: #ffffff;
  border-radius: 16px;
  padding: 26px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.06);
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.list-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1);
}

.item-text h2 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #0f172a;
}

.item-text p {
  color: #475569;
  font-size: 1.05rem;
  line-height: 1.6;
}

.arrow {
  font-size: 2.2rem;
  color: #94a3b8;
}

@media (max-width: 768px) {
  .hero-inner {
    padding: 64px 24px;
  }

  .content {
    padding: 48px 24px 72px;
  }

  .list-item {
    padding: 22px;
  }
}
</style>
