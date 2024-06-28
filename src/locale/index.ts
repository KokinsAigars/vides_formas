
//  *   ts : a922fa37-1747-45c5-b595-5d76159a1223
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue 3 + Typescript + SCSS + Vite
//  *   Built on 2024.06.28
//  *   Contributor(s): Aigars Kokins 
//  *
//  *   Internationalization (i18n)
//  *

import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      language: 'English',
      lang: 'en',

      landingPage_uiTheme_Light: 'Light theme',
      landingPage_uiTheme_Dark: 'Dark theme',
      landingPage_uiTheme_Custom: 'Customized',
      landingPage_uiTheme_LightColorA: 'Color A',

      signIn_title_msg_default : 'VIVENTE',//Sign in -
    }
  },
  lv: {
    message: {
      language: 'Latviešu',
      lang: 'lv',

      landingPage_uiTheme_Light: 'Gaišais režīms',
      landingPage_uiTheme_Dark: 'Tumšais režīms',
      landingPage_uiTheme_Custom: 'Pielāgots',
      landingPage_uiTheme_LightColorA: 'Kāsa A',

      signIn_title_msg_default : 'VIVENTE', //'Pierakstīties',
    }
  },
  ru: {
    message: {
      language: 'Русский',
      lang: 'ru',

      landingPage_uiTheme_Light: 'Светлая тема',
      landingPage_uiTheme_Dark: 'Темная тема',
      landingPage_uiTheme_Custom: 'Индивидуальный',
      landingPage_uiTheme_LightColorA: 'Цвет A',

      signIn_title_msg_default : 'VIVENTE',//Вход -
    }
  },
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  // legacy: false, // `false`, to use Composition API
  messages,
})

export default i18n
