<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import BackButton from '@/components/ui/BackButton.vue'

const router = useRouter()
const { t } = useI18n()

const items = [
  {
    key: 'usuario',
    route: '/comunicacao/usuario'
  },
  {
    key: 'parceiro',
    route: '/comunicacao/parceiro'
  }
]

function go(route) {
  router.push(route)
}
</script>

<template>
  <section class="page">
    <!-- HERO -->
    <header class="hero">
      <div class="hero-inner">
                <button class="back-btn" @click="router.push('/modulos')">
          ← {{ t('comunicacao.back') }}
        </button>

        <h1 class="hero-title">
          {{ t('comunicacao.title') }}
        </h1>

        <p class="hero-subtitle">
          {{ t('comunicacao.subtitle') }}
        </p>
      </div>
    </header>

    <!-- LISTA -->
    <div class="content">
      <div class="list">
        <button
          v-for="item in items"
          :key="item.key"
          class="list-item"
          type="button"
          @click="go(item.route)"
        >
          <div class="item-left">
            <h2 class="item-title">{{ t(`comunicacao.${item.key}.title`) }}</h2>
            <p class="item-desc">{{ t(`comunicacao.${item.key}.description`) }}</p>
          </div>

          <span class="item-arrow">›</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ====== PAGE BASE ====== */
.page {
  width: 100%;
  background: #f3f4f6;
}

/* ====== HERO (igual Introdução) ====== */
.hero {
  background: linear-gradient(135deg, #14b8a6, #0d7377);
  color: #fff;
}

.hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 72px 32px 64px;
  position: relative;
}

.back {
  position: absolute;
  top: 24px;
  left: 32px;
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

.hero-title {
  font-size: clamp(2.4rem, 4vw, 3.2rem);
  font-weight: 800;
  margin: 0 0 12px;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.95;
  max-width: 760px;
  line-height: 1.6;
  margin: 0;
}

/* ====== CONTENT ====== */
.content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 56px 32px 88px;
}

/* ====== LIST (cards brancos) ====== */
.list {
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.list-item {
  width: 100%;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 16px;
  padding: 26px 26px;
  text-align: left;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;

  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.06);
  cursor: pointer;

  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.list-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.1);
}

.list-item:focus-visible {
  outline: 4px solid #facc15;
  outline-offset: 4px;
}

.item-left {
  min-width: 0;
}

.item-title {
  font-size: 1.45rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 10px;
}

.item-desc {
  margin: 0;
  color: #475569;
  line-height: 1.6;
  font-size: 1.05rem;
}

.item-arrow {
  font-size: 2.2rem;
  color: #94a3b8;
  line-height: 1;
  flex-shrink: 0;
}

/* ====== RESPONSIVO ====== */
@media (max-width: 768px) {
  .hero-inner {
    padding: 64px 24px 56px;
  }

  .back {
    left: 24px;
  }

  .content {
    padding: 44px 24px 72px;
  }

  .list {
    max-width: 100%;
  }

  .list-item {
    padding: 22px 20px;
  }

  .item-title {
    font-size: 1.3rem;
  }

  .item-arrow {
    font-size: 2rem;
  }
}
</style>
