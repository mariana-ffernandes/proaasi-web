import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Modulos from '../pages/Modulos.vue'
const routes = [
  /* ================= HOME ================= */

  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/como-funciona',
    name: 'como-funciona',
    component: () => import('../pages/ComoFunciona.vue')
  },

  {
    path: '/modulos',
    name: 'modulos',
    component: Modulos
  },

  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../pages/Sobre.vue')
  },

  /* ================= INTRODUÇÃO ================= */

  {
    path: '/intro',
    name: 'intro',
    component: () => import('../pages/Intro.vue')
  },
  {
    path: '/intro/audicao',
    name: 'intro-audicao',
    component: () => import('../pages/intro/Audicao.vue')
  },
  {
    path: '/intro/beneficios',
    name: 'intro-beneficios',
    component: () => import('../pages/intro/Beneficios.vue')
  },

  /* ================= APARELHOS ================= */

  {
    path: '/aparelhos',
    name: 'aparelhos',
    component: () => import('../pages/Aparelhos.vue')
  },

  /* LISTAS (nível 2) */
  {
    path: '/aparelhos/intra',
    name: 'aparelhos-intra',
    component: () => import('../pages/aparelhos/Intra.vue')
  },
  {
    path: '/aparelhos/tubo-fino',
    name: 'aparelhos-tubo-fino',
    component: () => import('../pages/aparelhos/TuboFino.vue')
  },
  {
    path: '/aparelhos/receptor',
    name: 'aparelhos-receptor',
    component: () => import('../pages/aparelhos/Receptor.vue')
  },
  {
    path: '/aparelhos/molde',
    name: 'aparelhos-molde',
    component: () => import('../pages/aparelhos/Molde.vue')
  },

  /* CONTEÚDO (nível 3 – vídeo + texto) */
  {
    path: '/aparelhos/:tipo/:slug',
    name: 'aparelhos-conteudo',
    component: () => import('../pages/aparelhos/Conteudo.vue')
  },

  /* ================= OUTROS ================= */

  {
    path: '/comunicacao',
    name: 'comunicacao',
    component: () => import('../pages/comunicacao/Comunicacao.vue')
  },

  {
    path: '/comunicacao/usuario',
    name: 'comunicacao-usuario',
    component: () => import('../pages/comunicacao/Usuario.vue')
  },

  {
    path: '/comunicacao/parceiro',
    name: 'comunicacao-parceiro',
    component: () => import('../pages/comunicacao/Parceiro.vue')
  },

  {
    path: '/comunicacao/:tipo/:slug',
    name: 'comunicacao-conteudo',
    component: () => import('../pages/comunicacao/Conteudo.vue')
  },
  {
    path: '/duvidas',
    name: 'duvidas',
    component: () => import('../pages/Duvidas.vue')
  },
  {
    path: '/duvidas/:slug',
    name: 'DuvidaConteudo',
    component: () => import('../pages/DuvidaConteudo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
