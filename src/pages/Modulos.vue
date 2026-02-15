<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import ServiceCard from '@/components/ui/ServiceCard.vue'

const { t, tm } = useI18n()
const router = useRouter()

const modules = [
  {
    iconSrc: '/images/lampada-intro.png',
    route: '/intro',
    variant: 'intro'
  },
  {
    iconSrc: '/images/aparelho-aasi.png',
    route: '/aparelhos',
    variant: 'device'
  },
  {
    iconSrc: '/images/balao-comunicacao.png',
    route: '/comunicacao',
    variant: 'communication'
  },
  {
    iconSrc: '/images/ponto-interrogacao.png',
    route: '/duvidas',
    variant: 'help'
  }
]

const items = computed(() => tm('modulos.items') || [])
</script>


<template>
  <section class="modules">
    <div class="modules-container">

      <h2 class="modules-title">
        {{ t('modulos.title') }}
      </h2>

      <p class="modules-subtitle">
        {{ t('modulos.subtitle') }}
      </p>

      <div class="modules-grid">
        <ServiceCard v-for="(module, index) in modules" :key="module.route" :icon-src="module.iconSrc"
          :title="items[index]?.title" :description="items[index]?.description" :button-text="items[index]?.button"
          :onClick="() => router.push(module.route)" :variant="module.variant" />
      </div>

    </div>
  </section>
</template>

<style scoped>
.modules {
  width: 100%;
  background-color: #f3f4f6;
}

.modules-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 96px 32px;
  text-align: center;
}

.modules-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.modules-subtitle {
  font-size: 1.25rem;
  color: #475569;
  margin-bottom: 72px;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

@media (max-width: 1024px) {
  .modules-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .modules-grid {
    grid-template-columns: 1fr;
  }
}
</style>
