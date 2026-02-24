<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import BackButton from '@/components/ui/BackButton.vue'

const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <section class="tutorial">
    <div class="tutorial-container">


      <h1 class="title">
        {{ t('comoFunciona.title') }}
      </h1>

      <p class="subtitle">
        {{ t('comoFunciona.subtitle') }}
      </p>

      <div class="steps-grid">
        <div class="step-card">
          <div class="icon">📘</div>
          <h3>{{ t('comoFunciona.steps.0.title') }}</h3>
          <p>{{ t('comoFunciona.steps.0.text') }}</p>
        </div>

        <div class="step-card">
          <div class="icon">🎥</div>
          <h3>{{ t('comoFunciona.steps.1.title') }}</h3>
          <p>{{ t('comoFunciona.steps.1.text') }}</p>
        </div>

        <div class="step-card">
          <div class="icon">📄</div>
          <h3>{{ t('comoFunciona.steps.2.title') }}</h3>
          <p>{{ t('comoFunciona.steps.2.text') }}</p>
        </div>

        <div class="step-card">
          <div class="icon">⚙️</div>
          <h3>{{ t('comoFunciona.steps.3.title') }}</h3>
          <p>{{ t('comoFunciona.steps.3.text') }}</p>
        </div>
      </div>

      <div class="calm-box">
        <p>{{ t('comoFunciona.calm') }}</p>
      </div>
      <div class="back-btn" to="/modulos">
        <BackButton :to="'/modulos'" :label="t('common.common.seeOtherContents')" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.tutorial {
  width: 100%;
  background-color: #ffffff;
}

.tutorial-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 96px 32px;
  text-align: center;
}

.title {
  font-size: 2.6rem;
  color: #000000;
  margin-bottom: 16px;
}

.subtitle {
  font-size: 1.25rem;
  color: #334155;
  margin-bottom: 72px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 72px;
}

.step-card {
  background: #f8fafc;
  border-radius: 18px;
  padding: 36px 32px;
  text-align: center;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-number {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #1f3a8a;
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.icon {
  font-size: 2.6rem;
  margin-bottom: 16px;
}

.step-card h3 {
  font-size: 1.25rem;
  margin-bottom: 12px;
  color: #1f3a8a;
}

.step-card p {
  font-size: 1.05rem;
  line-height: 1.65;
  color: #334155;
}

.calm-box {
  background: #eef2ff;
  border-left: 6px solid #1f3a8a;
  padding: 28px 32px;
  margin-bottom: 56px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #1e293b;
  border-radius: 12px;
}

.action {
  text-align: center;
}

@media (max-width: 768px) {
  .steps-grid {
    grid-template-columns: 1fr;
  }

  .tutorial-container {
    padding: 64px 24px;
  }

  .title {
    font-size: 2.2rem;
  }
}
</style>
