<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import ServiceCard from '../components/ui/ServiceCard.vue'

const { t, tm } = useI18n()
const router = useRouter()
const services = [
  {
    iconSrc: '/images/lampada-intro.png',
    route: '/intro',
    color: 'intro'
  },
  {
    iconSrc: '/images/aparelho-aasi.png',
    route: '/aparelhos',
    color: 'device'
  },
  {
    iconSrc: '/images/balao-comunicacao.png',
    route: '/comunicacao',
    color: 'communication'
  },
  {
    iconSrc: '/images/ponto-interrogacao.png',
    route: '/duvidas',
    color: 'help'
  }
]

const faqItems = computed(() => {
  return tm('duvidas.items') || []
})
</script>

<template>
  <div>

    <section class="hero">
    <div class="hero-bg">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
    </div>

    <div class="hero-content">
      <div class="hero-badge">
        <img src="/images/proaasi-icon.png" alt="Ícone do ProAASI" class="badge-icon" />
        <span>{{ t('home.hero.badge') }}</span>
      </div>

      <h1 class="hero-title">
        {{ t('home.hero.title') }}
      </h1>

      <p class="hero-subtitle">
        {{ t('home.hero.subtitle') }}
      </p>

      <a href="#modules" class="hero-cta">
        {{ t('home.hero.button') }}
        <span class="arrow">↓</span>
      </a>
    </div>
  </section>

  <section class="services" id="modules">
    <div class="services-container">
      <h2 class="services-title">
        {{ t('home.servicesTitle') }}
      </h2>

      <p class="services-subtitle">
        {{ t('home.servicesSubtitle') }}
      </p>

      <div class="services-grid">
        <div v-for="(service, index) in services" :key="service.route" class="service-card-wrapper">
          <ServiceCard :icon-src="service.iconSrc" :title="t(`home.services.${index}.title`)"
            :description="t(`home.services.${index}.description`)" :button-text="t(`home.services.${index}.button`)"
            :variant="service.color" :onClick="() => router.push(service.route)" />
        </div>
      </div>
    </div>
  </section>

  <section class="faq">
    <div class="faq-container">
      <h2 class="faq-title">
        {{ t('duvidas.title') }}
      </h2>

      <p class="faq-subtitle">
        {{ t('duvidas.subtitle') }}
      </p>

      <div class="faq-list">
        <details v-for="(item, index) in faqItems" :key="index" class="faq-item">
          <summary>
            {{ item.question }}
            <span class="chevron">
              <img src="/images/expand-arrow.png" alt="" aria-hidden="true" class="chevron-icon" />
            </span>
          </summary>

          <p>
            {{ item.answer }}
          </p>
        </details>
      </div>
    </div>
  </section>
  </div>
</template>

<style scoped>

.hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg,
      #1e3a5f 0%,
      #2d4a6f 40%,
      #4a1a6b 100%);
  color: white;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.25;
}

.blob-1 {
  width: 300px;
  height: 300px;
  background: white;
  top: 80px;
  left: 40px;
}

.blob-2 {
  width: 420px;
  height: 420px;
  background: #a78bfa;
  bottom: 60px;
  right: 60px;
}

.hero-content {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 120px 32px;
  text-align: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(6px);
  padding: 12px 20px;
  border-radius: 999px;
  margin-bottom: 32px;
  font-weight: 500;
}

.badge-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
  display: block;
}

.hero-title {
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 28px;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 48px;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: white;
  color: #1e3a5f;
  padding: 16px 32px;
  border-radius: 999px;
  font-size: 1.15rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform .2s ease, box-shadow .2s ease;
}

.hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

.arrow {
  font-size: 1.3rem;
  animation: bounce 1.5s infinite;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(6px);
  }
}

.hero-button {
  background-color: #6589E9;
  color: #ffffff;
  border: none;
  padding: 14px 28px;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
}

.hero-button:hover {
  opacity: 0.9;
}

.hero-image img {
  width: 100%;
  max-width: 480px;
}

.services {
  width: 100%;
  background-color: #f3f4f6;
  margin: 80px auto;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 96px auto;
  text-align: center;
}

.services-title {
  font-size: 2.4rem;
  margin-bottom: 12px;
}

.services-subtitle {
  font-size: 1.15rem;
  margin-bottom: 64px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}

.service-card-wrapper {
  height: 100%;
  display: flex;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  grid-auto-rows: 1fr;
  align-items: stretch;
}

.faq {
  background-color: #ffffff;
  width: 100%;
}

.faq-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 96px 32px;
  text-align: center;
}

.faq-title {
  font-size: 2.4rem;
  margin-bottom: 12px;
  color: #0f172a;
}

.faq-subtitle {
  font-size: 1.15rem;
  margin-bottom: 56px;
  color: #475569;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.faq-item {
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  padding: 0;
  overflow: hidden;
  text-align: left;
}

.faq-item summary {
  list-style: none;
  cursor: pointer;
  padding: 22px 26px;
  font-size: 1.15rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item p {
  padding: 0 26px 24px;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #334155;
}

.chevron {
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;
}

.chevron-icon {
  width: 20px;
  height: 20px;
}

.faq-item[open] .chevron {
  transform: rotate(180deg);
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-text h1 {
    font-size: 2.4rem;
  }

  .hero-image img {
    margin: 0 auto;
  }
}

@media (max-width: 600px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  @media (max-width: 640px) {
    .faq-container {
      padding: 72px 24px;
    }

    .faq-title {
      font-size: 2rem;
    }
  }
}
</style>
