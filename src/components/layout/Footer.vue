<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-container">

      <div class="footer-grid">

        <div class="footer-brand">
          <div class="brand-header">
            <img src="/images/proaasi-icon.png" alt="Ícone do ProAASI" class="brand-img" />
            <span class="brand-title">ProAASI</span>
          </div>

          <p class="brand-description">
            {{ t('home.footer.description') }}
          </p>
        </div>

        <div class="footer-institutional">
          <div class="institutional-logos">
            <img src="/images/usp-logo.png" alt="Universidade de São Paulo" class="usp-logo" />
            <img src="/images/CNPq-logo.png" alt="CNPq" class="cnpq-logo" />
          </div>
        </div>

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

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <p>
          © {{ currentYear }} ProAASI — {{ t('home.footer.rights') }}
        </p>
      </div>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  background: linear-gradient(135deg, #1e3a5f, #4a1a6b);
  color: white;
}

.footer-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 72px 24px 32px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 56px;
}

.brand-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.brand-img {
  width: 58px;
  height: 58px;
  object-fit: contain;
}

.brand-title {
  font-size: 1.9rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.brand-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin-top: 8px;
  max-width: 360px;
}

.footer-institutional {
  display: flex;
  flex-direction: column;
}

.institutional-logos {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 12px;
}

.usp-logo,
.cnpq-logo {
  width: 180px;
  max-width: 100%;
  object-fit: contain;
  opacity: 0.9;
}

.footer-heading {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 18px;
  letter-spacing: 0.3px;
}

.footer-links nav {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer-link {
  position: relative;
  width: fit-content;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0%;
  height: 1px;
  background: white;
  transition: width 0.3s ease;
}

.footer-link:hover {
  color: white;
}

.footer-link:hover::after {
  width: 100%;
}

.accessibility-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.accessibility-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
}

.icon {
  font-size: 1.1rem;
  opacity: 0.85;
}

.footer-divider {
  margin: 56px 0 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
}

.footer-bottom {
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.3px;
}

.footer-dev {
  margin-top: 6px;
  font-size: 0.8rem;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-container {
    padding: 56px 24px 32px;
  }
}
</style>