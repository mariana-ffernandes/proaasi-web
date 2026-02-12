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
    :title="t('intro.audicao.title')"
    :video-src="videoSrc"
    :paragraphs="paragraphs"
    back-route="/intro"
    :back-label="t('common.common.backToModule')"
    cta-route="/intro"
    :cta-label="`← ${t('common.common.seeOtherContents')}`"
  />
</template>
