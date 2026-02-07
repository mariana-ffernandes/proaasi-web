<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
  buttonText: {
    type: String,
    default: 'Acessar'
  },
  variant: {
    type: String,
    default: 'default'
  },
  onClick: Function
})
</script>

<template>
  <div class="service-card" :class="`variant-${variant}`" role="button" tabindex="0" @click="onClick"
    @keyup.enter="onClick">
    <!-- Ícone -->
    <div class="service-icon">
      {{ icon }}
    </div>

    <!-- Conteúdo -->
    <h3 class="service-title">
      {{ title }}
    </h3>

    <p class="service-description">
      {{ description }}
    </p>

    <!-- CTA -->
    <div class="service-cta">
      {{ buttonText }} →
    </div>
  </div>
</template>

<style scoped>
/* =========================
   Card base (FULL gradient)
========================= */

.service-card {
  height: 100%;
  min-height: 300px;
  padding: 25px;
  border-radius: 18px;
  color: white;

  display: flex;
  flex-direction: column;

  cursor: pointer;
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.15);
  transition: transform .25s ease, box-shadow .25s ease;
}

.service-card:hover,
.service-card:focus {
  transform: translateY(-6px);
  box-shadow: 0 22px 44px rgba(0, 0, 0, 0.25);
}

/* =========================
   Ícone
========================= */

.service-icon {
  width: 56px;
  height: 56px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}

/* =========================
   Título
========================= */

.service-title {
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 10px;
  text-align: left;

  /* garante equilíbrio visual entre cards */
  min-height: 3.4rem;
}

/* =========================
   Texto
========================= */

.service-description {
  font-size: 1rem;
  line-height: 1.55;
  opacity: 0.95;
  text-align: left;

  /* empurra o CTA para o fundo */
  flex-grow: 1;
}

/* =========================
   CTA
========================= */

.service-cta {
  margin-top: 16px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

/* =========================
   Variantes (gradientes)
========================= */

.variant-intro {
  background: linear-gradient(180deg, #4a90d9, #1e3a5f);
}

.variant-device {
  background: linear-gradient(180deg, #8b5cf6, #4a1a6b);
}

.variant-communication {
  background: linear-gradient(180deg, #14b8a6, #0d7377);
}

.variant-help {
  background: linear-gradient(180deg, #6366f1, #4338ca);
}

/* =========================
   Alto contraste
========================= */

.theme-contrast .service-card {
  box-shadow: none;
  outline: 3px solid white;
}
</style>
