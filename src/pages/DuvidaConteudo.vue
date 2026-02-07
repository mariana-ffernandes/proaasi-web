<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

import ContentVideoPage from '@/components/layout/ContentVideoPage.vue'

const route = useRoute()
const { t, locale } = useI18n()

const slug = computed(() => route.params.slug)

/** base i18n: duvidas.module.contents.adaptacao */
const baseKey = computed(() => `duvidas.module.contents.${slug.value}`)

const videoKey = computed(() => {
  return `${slug.value}-${locale.value}`
})

function safeText(key) {
  const v = t(key)
  return v !== key ? v : ''
}

const paragraphs = computed(() => {
  return [
    safeText(`${baseKey.value}.paragraph1`),
    safeText(`${baseKey.value}.paragraph2`),
    safeText(`${baseKey.value}.paragraph3`)
  ].filter(Boolean)
})

/**
 * Vídeo
 */
const videoSrc = computed(() => {
  const lang = locale.value
  return `/videos/duvidas/${slug.value}-duvidas-${lang}.mp4`
})
</script>

<template>
<ContentVideoPage
  :key="videoKey"
  :title="safeText(`${baseKey}.title`)"
  :video-src="videoSrc"
  :paragraphs="paragraphs"
  back-route="/duvidas"
  :back-label="t('duvidas.back')"
  cta-label="← Ver outros temas"
  cta-route="/duvidas"
/>
</template>
