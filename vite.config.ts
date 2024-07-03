
//  *   ts : 09533637-797a-43ab-98a7-90b6a3447ae9
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.07.02
//  *   Contributor(s): Aigars Kokins
//  *
//  *   vite.config.ts
//  *   https://vitejs.dev/config/
//  *

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],

  // FOLDER NAME IN TOMCAT SERVER
  base: '/vue',

  resolve: {

    //  Vite compiler path alias
    // also in && => tsconfig.json "paths" { ... }
    alias: {

      // path to write in html url?
      '@': fileURLToPath(new URL('./src', import.meta.url)),

      '@assets'         : '/src/assets',
      '@locale'         : '/src/locale',
      '@main'           : '/src/main',
      '@rootStore'      : '/src/store',

      '@components'     : '/src/main/components',
      '@services'       : '/src/main/services',

      '@style'          : '/src/assets/styles/',

    },
  },
})
