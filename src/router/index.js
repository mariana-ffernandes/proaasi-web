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

  /* ================= INTRO ================= */

  {
    path: '/intro',
    name: 'intro',
    component: () => import('../pages/Intro.vue')
  },

  {
    path: '/intro/:modulo',
    name: 'intro-modulo',
    component: () => import('../pages/intro/Modulo.vue')
  },

  {
    path: '/intro/:modulo/:slug',
    name: 'intro-conteudo',
    component: () => import('../pages/intro/Conteudo.vue')
  },

  /* ================= APARELHOS ================= */
  {
    path: '/aparelhos',
    name: 'aparelhos',
    component: () => import('../pages/Aparelhos.vue')
  },

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

  {
    path: '/aparelhos/:tipo/:slug',
    name: 'aparelhos-conteudo',
    component: () => import('../pages/aparelhos/Conteudo.vue')
  },

  /* ================= COMUNICAÇÃO ================= */

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

  /* ================= DÚVIDAS ================= */

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
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
      // suave:
      // return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
