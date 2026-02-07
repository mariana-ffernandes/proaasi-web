<script setup>
import { computed, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { locale } = useI18n()
/* =========================
   Navegação
========================= */
const navItems = computed(() => [
  {
    label: locale.value === 'pt' ? 'Início' : 'Home',
    to: '/'
  },
  {
    label: locale.value === 'pt' ? 'Módulos' : 'Modules',
    to: '/#modules'
  },
  {
    label: locale.value === 'pt' ? 'Sobre' : 'About',
    to: '/sobre'
  }
])

/* =========================
   Menu mobile
========================= */
const isMenuOpen = ref(false)

function closeMenu() {
  isMenuOpen.value = false
}

/* =========================
   Fonte (20px – 26px)
========================= */
const MIN_FONT = 20
const MAX_FONT = 26
const STEP = 2

const fontSize = ref(20)

function applyFont(size) {
  fontSize.value = size
  document.documentElement.style.setProperty(
    '--base-font-size',
    `${size}px`
  )
  localStorage.setItem('font-size', size)
}

function increaseFont() {
  if (fontSize.value < MAX_FONT) {
    applyFont(fontSize.value + STEP)
  }
}

function decreaseFont() {
  if (fontSize.value > MIN_FONT) {
    applyFont(fontSize.value - STEP)
  }
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
  if (savedFont) applyFont(Number(savedFont))
  else applyFont(MIN_FONT)

  const savedLocale = localStorage.getItem('locale')
  if (savedLocale) locale.value = savedLocale
})
</script>

<template>
  <header class="header">
    <div class="container">

      <!-- Logo -->
      <RouterLink to="/" class="brand" aria-label="ProAASI - Página inicial">
        <div class="brand-icon">
          <img src="/images/proaasi-icon.png" alt="Ícone do ProAASI" class="brand-img" />
        </div>
        <span class="brand-text">ProAASI</span>
      </RouterLink>

      <!-- Navegação Desktop -->
      <nav class="nav" aria-label="Menu principal">
        <RouterLink v-for="item in navItems" :key="item.label" :to="item.to" class="nav-link">
          {{ item.label }}
        </RouterLink>
      </nav>

      <!-- Acessibilidade -->
      <div class="actions">
        <button class="action-btn" @click="decreaseFont" aria-label="Diminuir tamanho da fonte">
          A-
        </button>

        <button class="action-btn" @click="increaseFont" aria-label="Aumentar tamanho da fonte">
          A+
        </button>
        <!-- Mobile menu button -->
        <button class="menu-btn" @click="isMenuOpen = true" aria-label="Abrir menu">
          ☰
        </button>

        <!-- Mobile drawer -->
        <div v-if="isMenuOpen" class="mobile-menu">
          <button class="close-btn" @click="closeMenu" aria-label="Fechar menu">
            ✕
          </button>

          <nav class="mobile-nav" aria-label="Menu mobile">
            <RouterLink v-for="item in navItems" :key="item.label" :to="item.to" class="mobile-link" @click="closeMenu">
              {{ item.label }}
            </RouterLink>
          </nav>
        </div>

        <!-- Idioma -->
        <div class="lang-wrapper">
          <button class="action-btn lang-btn" @click="isLangOpen = !isLangOpen" aria-haspopup="listbox"
            aria-expanded="isLangOpen">
            🌐 {{ locale.toUpperCase() }}
          </button>

          <div v-if="isLangOpen" class="lang-dropdown" role="listbox">
            <button @click="setLanguage('pt')">
              🇧🇷 Português
            </button>
            <button @click="setLanguage('en')">
              🇺🇸 English
            </button>
          </div>
        </div>
      </div>
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
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
}

.brand-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-img {
  width: 30px;
  height: 30px;
  object-fit: contain;
  display: block;
}

.brand-text {
  font-size: 1.6rem;
  font-weight: 700;
}

/* Nav */
.nav {
  display: none;
  gap: 32px;
}

.nav-link {
  color: rgba(255, 255, 255, .85);
  font-weight: 500;
  text-decoration: none;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background: white;
  transition: width .3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Actions */
.actions {
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
}

.action-btn {
  background: rgba(255, 255, 255, .2);
  border: none;
  color: white;
  padding: 12px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

.action-btn:hover {
  background: rgba(255, 255, 255, .3);
}

/* Idioma dropdown */
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
  box-shadow: 0 10px 25px rgba(0, 0, 0, .2);
  padding: 6px;
  min-width: 160px;
  z-index: 100;
}

.lang-dropdown button {
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
}

.lang-dropdown button:hover {
  background: #f1f5f9;
}

.font-indicator {
  color: white;
  font-size: .9rem;
  opacity: .9;
}

.lang {
  display: flex;
  align-items: center;
  gap: 6px;
}

.menu-btn {
  display: none;
  background: rgba(255, 255, 255, .2);
  border: none;
  color: white;
  font-size: 20px;
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
}

/* Mobile drawer */
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
  font-size: 24px;
  cursor: pointer;
}

.mobile-nav {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.mobile-link {
  color: white;
  font-size: 1.4rem;
  text-decoration: none;
}

/* Responsive */
@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .menu-btn {
    display: inline-flex;
  }
}

/* Desktop */
@media (min-width: 768px) {
  .nav {
    display: flex;
  }
}
</style>
