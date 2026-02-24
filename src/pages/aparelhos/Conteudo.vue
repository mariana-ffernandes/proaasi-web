<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

import ContentVideoPage from '@/components/layout/ContentVideoPage.vue'

const route = useRoute()
const { t, locale } = useI18n()

const tipo = computed(() => route.params.tipo)
const slug = computed(() => route.params.slug)

const baseKey = computed(
  () => `aparelhos.${tipo.value}.contents.${slug.value}`
)

function text(key) {
  const value = t(key)
  return value !== key ? value : ''
}

const paragraphs = computed(() => {
  return [
    text(`${baseKey.value}.paragraph1`),
    text(`${baseKey.value}.paragraph2`),
    text(`${baseKey.value}.paragraph3`)
  ].filter(Boolean)
})

const videoConfig = {
  intra: {
    folder: 'intraaural',
    suffix: 'intra'
  },
  'tubo-fino': {
    folder: 'tubo-fino',
    suffix: 'tubo-fino'
  },
  receptor: {
    folder: 'receptor',
    suffix: 'receptor'
  },
  molde: {
    folder: 'molde',
    suffix: 'molde'
  }
}

const videoSrc = computed(() => {
  const config = videoConfig[tipo.value]
  if (!config) return ''

  const lang = locale.value

  return `/videos/${config.folder}/${slug.value}-${config.suffix}-${lang}.mp4`
})

const videoKey = computed(() => {
  return `${tipo.value}-${slug.value}-${locale.value}`
})
</script>

<template>
  <ContentVideoPage :key="videoKey" :title="text(`${baseKey}.title`)" :video-src="videoSrc" :paragraphs="paragraphs"
    :back-route="`/aparelhos/${tipo}`" :back-label="t('aparelhos.back')" cta-label="← Ver outros conteúdos"
    :cta-route="`/aparelhos/${tipo}`" />
</template>
