<script setup>
import { useI18n } from 'vue-i18n'
import BackButton from '@/components/ui/BackButton.vue'

const { t } = useI18n()
</script>

<template>
  <section class="about">
    <div class="about-container">

      <header class="about-header">
        <h1 class="title">
          {{ t('home.about.title') }}
        </h1>

        <p class="subtitle">
          {{ t('home.about.subtitle') }}
        </p>
      </header>

      <div class="about-card">
        <p>{{ t('home.about.paragraph1') }}</p>
      </div>
       <!-- Voltar -->
        <div class="back-btn" to="/modulos">
      <BackButton />
      </div>
    </div>
  </section>
</template>


<style scoped>
.about {
  background-color: #f8fafc;
  width: 100%;
}

.about-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 64px 32px 96px;
}

.back-btn {
  margin-top: 32px;
  align-content: center;
  display: flex;
  justify-content: center;
}

/* Cabeçalho */
.about-header {
  margin-bottom: 40px;
}

.title {
  font-size: 2.6rem;
  color: #000000;
  margin-bottom: 12px;
}

.subtitle {
  font-size: 1.25rem;
  color: #444;
  line-height: 1.6;
}

/* Card de conteúdo */
.about-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 40px 48px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  align-content: justify;
}

.about-card p {
  margin-bottom: 20px;
  line-height: 1.9;
  font-size: 1.05rem;
  color: #333;
}

.about-card p:last-child {
  margin-bottom: 0;
}

/* Responsivo */
@media (max-width: 768px) {
  .about-card {
    padding: 28px 24px;
  }

  .title {
    font-size: 2.2rem;
  }

  .subtitle {
    font-size: 1.15rem;
  }
}

</style>
