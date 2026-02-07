<template>
  <div class="layout">
    <!-- Header fixo -->
    <Header />

    <!-- Conteúdo dinâmico das rotas -->
    <main class="layout-content">
      <router-view />
    </main>

    <!-- Footer fixo -->
    <Footer />
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Área onde entram as páginas (Home, Intro, etc) */
.layout-content {
  flex: 1;
  width: 100%;
}
</style>
