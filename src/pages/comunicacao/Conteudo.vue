<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import ContentVideoPage from '@/components/layout/ContentVideoPage.vue'

const route = useRoute()
const { t, locale } = useI18n()

/*
  /comunicacao/:tipo/:slug
*/
const tipo = computed(() => route.params.tipo)       // usuario | parceiro
const slug = computed(() => route.params.slug)

/*
  comunicacao.usuario.contents.ambientes
*/
const baseKey = computed(
  () => `comunicacao.${tipo.value}.contents.${slug.value}`
)

function text(key) {
  const value = t(key)
  return value !== key ? value : ''
}

/* Parágrafos dinâmicos */
const paragraphs = computed(() => {
  return [
    text(`${baseKey.value}.paragraph1`),
    text(`${baseKey.value}.paragraph2`),
    text(`${baseKey.value}.paragraph3`),
    text(`${baseKey.value}.paragraph4`)
  ].filter(Boolean)
})

/*
  Seus vídeos estão organizados assim:

  /videos/comunicacao/usuario/
  /videos/comunicacao/parceiro/

  E o nome do arquivo é:
  slug-comunicacao-usuario-pt.mp4
*/

const videoSrc = computed(() => {
  const lang = locale.value

  return `/videos/comunicacao/${tipo.value}/${slug.value}-comunicacao-${tipo.value}-${lang}.mp4`
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
    :back-route="`/comunicacao/${tipo}`"
    :back-label="t('comunicacao.back')"
    cta-label="← Ver outros temas"
    :cta-route="`/comunicacao/${tipo}`"
  />
</template>