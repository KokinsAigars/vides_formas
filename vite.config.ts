
//  *   ts : 09533637-797a-43ab-98a7-90b6a3447ae9
//  *
//  *   Project Name: "sacredgeometrysites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.16
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

      '@assets'         : '/src/_assets',
      '@locale'         : '/src/_locale',
      '@services'       : '/src/_services',
      '@rootStore'      : '/src/_store',
      '@main'           : '/src/main',

      '@components'     : '/src/main/components',

      '@admin'          : '/src/main/components/admin',
      '@home'           : '/src/main/components/home',

      '@style'          : '/src/_assets/styles/',

    },
  },
  optimizeDeps: {
    include: [
      "@fawmi/vue-google-maps",
      "fast-deep-equal",
    ],
  },
})
