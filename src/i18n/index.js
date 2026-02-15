import { createI18n } from 'vue-i18n'

import ptHome from '../content/pt/home.json'
import enHome from '../content/en/home.json'
import ptIntro from '../content/pt/intro.json'
import enIntro from '../content/en/intro.json'
import ptAparelhos from '../content/pt/aparelhos.json'
import enAparelhos from '../content/en/aparelhos.json'
import ptDuvidas from '../content/pt/duvidas.json'
import enDuvidas from '../content/en/duvidas.json'
import ptComoFunciona from '../content/pt/como-funciona.json'
import enComoFunciona from '../content/en/como-funciona.json'
import ptComunicacao from '../content/pt/comunicacao.json'
import enComunicacao from '../content/en/comunicacao.json'
import ptCommon from '../content/pt/pt.json'
import enCommon from '../content/en/en.json'
import ptModulos from '../content/pt/modulos.json'
import enModulos from '../content/en/modulos.json'

const savedLocale = localStorage.getItem('locale') || 'pt'

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: savedLocale,
  fallbackLocale: 'pt',
  messages: {
    pt: {
      home: ptHome,
      intro: ptIntro,
      aparelhos: ptAparelhos,
      duvidas: ptDuvidas,
      comoFunciona: ptComoFunciona,
      comunicacao: ptComunicacao,
      common: ptCommon,
      modulos: ptModulos
    },
    en: {
      home: enHome,
      intro: enIntro,
      aparelhos: enAparelhos,
      duvidas: enDuvidas,
      comoFunciona: enComoFunciona,
      comunicacao: enComunicacao,
      common: enCommon,
      modulos: enModulos
    }
  }
})
