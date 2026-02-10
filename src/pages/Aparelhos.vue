<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import UsoCard from '@/components/ui/UsoCard.vue'

const { t, tm } = useI18n()
const router = useRouter()

const devices = [
  {
    id: 'intra',
    image: '/images/intraaural-icon.png',
    color: '#3b82f6',
    route: '/aparelhos/intra'
  },
  {
    id: 'tubo-fino',
    image: '/images/mini-com-tubo-icon.png',
    color: '#a855f7',
    route: '/aparelhos/tubo-fino'
  },
  {
    id: 'receptor',
    image: '/images/retro-receptor-icon.png',
    color: '#22c55e',
    route: '/aparelhos/receptor'
  },
  {
    id: 'molde',
    image: '/images/retro-molde-icon.png',
    color: '#f97316',
    route: '/aparelhos/molde'
  }
]
</script>

<template>
  <section class="aparelhos-page">
    <!-- HERO -->
    <header class="aparelhos-hero">
      <div class="aparelhos-hero-inner">
        <button class="back-btn" @click="router.push('/')">
          ← Voltar ao início
        </button>

        <div class="hero-header">
          <img
            src="/images/aparelho-aasi.png"
            alt=""
            class="hero-icon"
          />

          <div class="hero-text">
            <h1>{{ t('aparelhos.title') }}</h1>
            <p>{{ t('aparelhos.subtitle') }}</p>
          </div>
        </div>
      </div>
    </header>

    <!-- CONTEÚDO -->
    <main class="aparelhos-content">
      <div class="devices-grid">
        <UsoCard
          v-for="(card, index) in tm('aparelhos.cards')"
          :key="devices[index].id"
          :image="devices[index].image"
          :color="devices[index].color"
          :title="card.title"
          :description="card.description"
          :onClick="() => router.push(devices[index].route)"
        />
      </div>
    </main>
  </section>
</template>

<style scoped>
/* =========================
   HERO
========================= */

.aparelhos-hero {
  background: linear-gradient(180deg, #8b5cf6, #5b21b6);
  color: white;
}

.aparelhos-hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 32px 64px;
}

/* botão voltar */
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

/* bloco do hero */
.hero-header {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* ícone */
.hero-icon {
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  filter: brightness(0) invert(1);
}

/* texto */
.hero-text h1 {
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: 800;
  margin: 0 0 8px;
  line-height: 1.1;
}

.hero-text p {
  font-size: 1.15rem;
  opacity: 0.95;
  margin: 0;
  max-width: 520px;
  line-height: 1.6;
}

/* =========================
   CONTENT
========================= */

.aparelhos-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 72px 32px;
  text-align: center;
}

/* =========================
   GRID
========================= */

.devices-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

@media (max-width: 1024px) {
  .devices-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .devices-grid {
    grid-template-columns: 1fr;
  }

  .hero-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .hero-icon {
    width: 48px;
    height: 48px;
  }
}
</style>
