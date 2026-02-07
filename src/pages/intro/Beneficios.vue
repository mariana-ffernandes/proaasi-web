<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import ContentVideoPage from '@/components/layout/ContentVideoPage.vue'

const { t, locale } = useI18n()

const videoByLocale = {
  pt: '/videos/beneficios/beneficios-pt.mp4',
  en: '/videos/beneficios/beneficios-en.mp4'
}

const videoSrc = computed(() => videoByLocale[locale.value])

const paragraphs = computed(() => [
  t('intro.beneficios.paragraph1'),
  t('intro.beneficios.paragraph2'),
  t('intro.beneficios.paragraph3')
])
</script>

<template>
  <ContentVideoPage
    :title="t('intro.beneficios.title')"
    :video-src="videoSrc"
    :paragraphs="paragraphs"
    back-route="/intro"
    back-label="Voltar ao módulo"
    cta-route="/intro"
    cta-label="← Ver outros conteúdos"
  />
</template>
