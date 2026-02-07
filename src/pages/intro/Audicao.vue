<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import ContentVideoPage from '@/components/layout/ContentVideoPage.vue'

const { t, locale } = useI18n()

const videoByLocale = {
  pt: '/videos/audicao/audicao-pt.mp4',
  en: '/videos/audicao/audicao-en.mp4'
}

const videoSrc = computed(() => videoByLocale[locale.value])

const paragraphs = computed(() => [
  t('intro.audicao.paragraph1'),
  t('intro.audicao.paragraph2'),
  t('intro.audicao.paragraph3')
])
</script>

<template>
  <ContentVideoPage
    :title="t('intro.audicao.title')"
    :video-src="videoSrc"
    :paragraphs="paragraphs"
    back-route="/intro"
    back-label="Voltar ao módulo"
    cta-route="/intro"
    cta-label="← Ver outros conteúdos"
  />
</template>