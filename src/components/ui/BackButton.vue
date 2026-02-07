<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  to: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: 'Ver outros conteúdos'
  }
})

const router = useRouter()
</script>

<template>
  <button
    class="back-button"
    @click="router.push('/')"
    aria-label="Voltar"
  >
    <span class="icon">←</span>
    <span>{{ label }}</span>
  </button>
</template>

<style scoped>
.back-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  background-color: #2563eb; /* azul forte */
  color: #ffffff;

  border: none;
  border-radius: 999px;

  padding: 14px 26px;
  font-size: 1.05rem;
  font-weight: 600;

  cursor: pointer;
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
  transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease;
}

.back-button:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 12px 26px rgba(37, 99, 235, 0.45);
}

.back-button:focus {
  outline: 3px solid #93c5fd;
  outline-offset: 3px;
}

.icon {
  font-size: 1.4rem;
  line-height: 1;
}
</style>
