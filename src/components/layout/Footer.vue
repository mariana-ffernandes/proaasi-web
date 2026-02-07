<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- GRID PRINCIPAL -->
      <div class="footer-grid">

        <!-- LOGO + DESCRIÇÃO -->
        <div class="footer-brand">
          <div class="brand-header">
            <div class="brand-icon">
              <img src="/images/proaasi-icon.png" alt="Ícone do ProAASI" class="brand-img" />
            </div>
            <span class="brand-title">ProAASI</span>
          </div>

          <!-- LOGO USP -->
          <div class="brand-usp">
            <img src="/images/usp-logo.png" alt="Universidade de São Paulo" class="usp-logo" />
            <span class="usp-text">Fonoaudiologia Bauru</span>
          </div>
        </div>

        <!-- LINKS RÁPIDOS -->
        <div class="footer-links">
          <h3 class="footer-heading">
            {{ t('home.footer.quickLinks') }}
          </h3>

          <nav aria-label="Links do rodapé">
            <RouterLink to="/" class="footer-link">
              {{ t('home.footer.links.home') }}
            </RouterLink>

            <RouterLink to="/como-funciona" class="footer-link">
              {{ t('home.footer.links.howItWorks') }}
            </RouterLink>

            <RouterLink to="/modulos" class="footer-link">
              {{ t('home.footer.links.modules') }}
            </RouterLink>

            <RouterLink to="/sobre" class="footer-link">
              {{ t('home.footer.links.about') }}
            </RouterLink>
          </nav>
        </div>

        <!-- ACESSIBILIDADE -->
        <div class="footer-accessibility">
          <h3 class="footer-heading">
            {{ t('home.footer.accessibility.title') }}
          </h3>

          <ul class="accessibility-list">
            <li>
              <span class="icon">🔊</span>
              {{ t('home.footer.accessibility.captions') }}
            </li>
            <li>
              <span class="icon">📖</span>
              {{ t('home.footer.accessibility.textSize') }}
            </li>
            <li>
              <span class="icon">🌍</span>
              {{ t('home.footer.accessibility.languages') }}
            </li>
          </ul>
        </div>
      </div>

      <!-- DIVISÓRIA -->
      <div class="footer-divider" />

      <!-- BOTTOM -->
      <div class="footer-bottom">
        <p>
          © {{ currentYear }} ProAASI. {{ t('home.footer.rights') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  background: linear-gradient(90deg, #1e3a5f, #4a1a6b);
  color: white;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 24px 32px;
}

/* GRID */
.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 48px;
}

/* BRAND */
.footer-brand {
  max-width: 420px;
}

.brand-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.brand-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  display: block;
}

.brand-text {
  font-size: 1.6rem;
  font-weight: 700;
}

.brand-title {
  font-size: 1.8rem;
  font-weight: 700;
}

.brand-text {
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  font-size: 0.95rem;
}

/* =========================
   USP BRAND
========================= */

.brand-usp {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.usp-logo {
  width: 140px;
  max-width: 100%;
  object-fit: contain;
}

.usp-text {
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.3px;
}

/* HEADINGS */
.footer-heading {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 16px;
}

/* LINKS */
.footer-links nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: white;
}

/* ACESSIBILIDADE */
.accessibility-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.accessibility-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.85);
}

.icon {
  font-size: 1.3rem;
}

/* DIVIDER */
.footer-divider {
  margin: 40px 0 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

/* BOTTOM */
.footer-bottom {
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
}

.footer-dev {
  margin-top: 6px;
  font-size: 0.8rem;
}

/* RESPONSIVO */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .footer-container {
    padding: 48px 24px 32px;
  }
}
</style>
