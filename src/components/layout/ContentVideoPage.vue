<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import BackButton from '@/components/ui/BackButton.vue'

const { t } = useI18n()
const router = useRouter()

defineProps({
  title: {
    type: String,
    required: true
  },
  videoSrc: {
    type: String,
    required: true
  },
  paragraphs: {
    type: Array,
    required: true
  },
  backRoute: {
    type: String,
    default: '/'
  },
  backLabel: {
    type: String,
    default: 'Voltar'
  },
  ctaLabel: {
    type: String,
    default: '← Ver outros conteúdos'
  },
  ctaRoute: {
    type: String,
    default: '/'
  }
})

</script>

<template>
  <section class="content-page">
    <header class="content-hero">
      <div class="content-hero-inner">
        <button class="back-btn" @click="router.push(backRoute)">
          ← {{ backLabel }}
        </button>

        <h1>{{ title }}</h1>
      </div>
    </header>
    <main class="content-body">
      <div class="video-wrapper">
        <video controls preload="metadata" class="video">
          <source :src="videoSrc" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
      </div>
      <div class="text-wrapper">
        <p v-for="(p, index) in paragraphs" :key="index">
          {{ p }}
        </p>
      </div>
      <div class="cta-wrapper">
        <div class="back-btn" @click="router.push(ctaRoute)">
          <BackButton :to="ctaRoute" :label="t('common.common.seeOtherContents')" />
        </div>
      </div>
    </main>
  </section>
</template>

<style scoped>

.content-hero {
  background: linear-gradient(90deg, #1e3a5f, #4a1a6b);
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
  font-size: 2.6rem;
}

.content-body {
  max-width: 900px;
  margin: 0 auto;
  padding: 64px 32px;
}

.video-wrapper {
  margin-bottom: 48px;
}

.video {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
}

.text-wrapper p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 20px;
  color: #1f2937;
}

.cta-wrapper {
  margin-top: 48px;
  display: flex;
  justify-content: center;
}

.cta-btn {
  background-color: #1e3a8a;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 999px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
}

.cta-btn:hover {
  opacity: 0.9;
}

@media (max-width: 640px) {
  .content-hero h1 {
    font-size: 2rem;
  }

  .text-wrapper p {
    font-size: 1rem;
  }
}
</style>
