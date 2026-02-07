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
  () => `comunicacao.${tipo.value}.contents.${slug.value}`
)

function text(key) {
  const v = t(key)
  return v !== key ? v : ''
}

const paragraphs = computed(() => {
  return [
    text(`${baseKey.value}.paragraph1`),
    text(`${baseKey.value}.paragraph2`),
    text(`${baseKey.value}.paragraph3`)
  ].filter(Boolean)
})

const videoSrc = computed(() => {
  return `/videos/comunicacao/${tipo.value}/${slug.value}-${locale.value}.mp4`
})

const videoKey = computed(() => {
  return `${tipo.value}-${slug.value}-${locale.value}`
})
</script>

<template>
  <ContentVideoPage
    :key="videoKey"
    :title="text(`${baseKey}.title`)"
    :video-src="videoSrc"
    :paragraphs="paragraphs"
    back-route="/comunicacao"
    :back-label="t('comunicacao.back')"
    cta-label="← Ver outros temas"
    cta-route="/comunicacao"
  />
</template>
