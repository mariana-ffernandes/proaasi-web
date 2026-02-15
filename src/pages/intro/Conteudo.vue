<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import ContentVideoPage from '@/components/layout/ContentVideoPage.vue'

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()

const modulo = computed(() => route.params.modulo)
const slug = computed(() => route.params.slug)

const baseKey = computed(
  () => `intro.modules.${modulo.value}.contents.${slug.value}`
)

function text(key) {
  const v = t(key)
  return v !== key ? v : ''
}

const paragraphs = computed(() => {
  return [
    text(`${baseKey.value}.paragraph1`),
    text(`${baseKey.value}.paragraph2`),
    text(`${baseKey.value}.paragraph3`),
    text(`${baseKey.value}.paragraph4`)
  ].filter(Boolean)
})

/* Ajuste o caminho do vídeo conforme sua pasta */
const videoSrc = computed(() => {
  return `/videos/modulos/${slug.value}-${locale.value}.mp4`
})

const videoKey = computed(() => {
  return `${modulo.value}-${slug.value}-${locale.value}`
})
</script>

<template>
  <ContentVideoPage
    :key="videoKey"
    :title="text(`${baseKey}.title`)"
    :video-src="videoSrc"
    :paragraphs="paragraphs"
    :back-route="`/intro/${modulo}`"
    :back-label="t('intro.back')"
    :cta-route="`/intro/${modulo}`"
    cta-label="← Ver outros temas"
  />
</template>