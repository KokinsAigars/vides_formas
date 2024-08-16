
//  *   ts : aa82b725-d29a-4717-9812-ea128c49d907
//  *
//  *   Project Name: "sacredgeometrysites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.16
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Internationalization (i18n)
//  *

// https://vue-i18n.intlify.dev/guide/installation.html

import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      language: 'English',
      lang: 'en',

    },
  },
  lv: {
    message: {
      language: 'Latviešu',
      lang: 'lv',

    }
  },
  ru: {
    message: {
      language: 'Русский',
      lang: 'ru',

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
