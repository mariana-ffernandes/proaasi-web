<script setup>
import { computed, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { locale } = useI18n()

/* =========================
   Navegação
========================= */
const navItems = computed(() => [
  { label: locale.value === 'pt' ? 'Início' : 'Home', to: '/' },
  { label: locale.value === 'pt' ? 'Módulos' : 'Modules', to: '/modulos' },
  { label: locale.value === 'pt' ? 'Sobre' : 'About', to: '/sobre' }
])

/* =========================
   Menu mobile
========================= */
const isMenuOpen = ref(false)
function closeMenu() {
  isMenuOpen.value = false
}

/* =========================
   Fonte
========================= */
const MIN_FONT = 20
const MAX_FONT = 26
const STEP = 2
const fontSize = ref(20)

function applyFont(size) {
  fontSize.value = size
  document.documentElement.style.setProperty('--base-font-size', `${size}px`)
  localStorage.setItem('font-size', size)
}

function increaseFont() {
  if (fontSize.value < MAX_FONT) applyFont(fontSize.value + STEP)
}

function decreaseFont() {
  if (fontSize.value > MIN_FONT) applyFont(fontSize.value - STEP)
}

/* =========================
   Idioma
========================= */
const isLangOpen = ref(false)

function setLanguage(lang) {
  locale.value = lang
  localStorage.setItem('locale', lang)
  isLangOpen.value = false
}

/* =========================
   Restore
========================= */
onMounted(() => {
  const savedFont = localStorage.getItem('font-size')
  applyFont(savedFont ? Number(savedFont) : MIN_FONT)

  const savedLocale = localStorage.getItem('locale')
  if (savedLocale) locale.value = savedLocale
})
</script>

<template>
  <header class="header">
    <div class="container">

      <!-- Logo -->
      <RouterLink to="/" class="brand">
        <img src="/images/proaasi-icon.png" alt="ProAASI" class="brand-img" />
        <span class="brand-text">ProAASI</span>
      </RouterLink>

      <!-- Navegação Desktop -->
      <nav class="nav">
        <RouterLink v-for="item in navItems" :key="item.label" :to="item.to" class="nav-link">
          {{ item.label }}
        </RouterLink>
      </nav>

      <!-- Ações (sempre visíveis) -->
      <div class="actions">
        <button class="action-btn" @click="decreaseFont" aria-label="Diminuir fonte">
          A-
        </button>

        <button class="action-btn" @click="increaseFont" aria-label="Aumentar fonte">
          A+
        </button>

        <div class="lang-wrapper">
          <button class="action-btn" @click="isLangOpen = !isLangOpen" aria-haspopup="listbox">
            🌐 {{ locale.toUpperCase() }}
          </button>

          <div v-if="isLangOpen" class="lang-dropdown">
            <button @click="setLanguage('pt')">🇧🇷 Português</button>
            <button @click="setLanguage('en')">🇺🇸 English</button>
          </div>
        </div>

        <!-- Botão menu mobile -->
        <button class="menu-btn" @click="isMenuOpen = true" aria-label="Abrir menu">
          ☰
        </button>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div v-if="isMenuOpen" class="mobile-menu">
      <button class="close-btn" @click="closeMenu">✕</button>

      <nav class="mobile-nav">
        <RouterLink v-for="item in navItems" :key="item.label" :to="item.to" class="mobile-link" @click="closeMenu">
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: linear-gradient(90deg, #1e3a5f, #4a1a6b);
  box-shadow: 0 6px 20px rgba(0, 0, 0, .25);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  text-decoration: none;
}

.brand-img {
  width: 32px;
  height: 32px;
}

.brand-text {
  font-size: 1.4rem;
  font-weight: 700;
}

/* Nav desktop */
.nav {
  display: none;
  gap: 28px;
}

.nav-link {
  color: rgba(255, 255, 255, .85);
  text-decoration: none;
  font-weight: 500;
}

/* Actions */
.actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.action-btn {
  background: rgba(255, 255, 255, .2);
  border: none;
  color: white;
  padding: 10px 14px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

/* Idioma */
.lang-wrapper {
  position: relative;
}

.lang-dropdown {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  background: white;
  color: #1e293b;
  border-radius: 10px;
  padding: 6px;
  min-width: 160px;
  z-index: 100;
}

.lang-dropdown button {
  width: 100%;
  background: none;
  border: none;
  padding: 8px;
  text-align: left;
  cursor: pointer;
}

/* Menu mobile */
.menu-btn {
  background: rgba(255, 255, 255, .2);
  border: none;
  color: white;
  font-size: 20px;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
}

.mobile-menu {
  position: fixed;
  inset: 0;
  background: linear-gradient(180deg, #1e3a5f, #4a1a6b);
  z-index: 200;
  padding: 24px;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 26px;
  cursor: pointer;
}

.mobile-nav {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.mobile-link {
  color: white;
  font-size: 1.4rem;
  text-decoration: none;
}

/* Desktop */
@media (min-width: 768px) {
  .nav {
    display: flex;
  }

  .menu-btn {
    display: none;
  }
}
</style>
