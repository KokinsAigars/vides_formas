
//  *   ts : 09533637-797a-43ab-98a7-90b6a3447ae9
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.06.29
//  *   Contributor(s): Aigars Kokins
//  *
//  *   vite.config.ts
//  *   https://vitejs.dev/config/
//  *

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueJsx(),
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

      '@user'           : '/src/main/_user',
      '@auth'           : '/src/main/_user/auth',
      '@landing_page'   : '/src/main/_user/landing-page',
      '@user_shared'    : '/src/main/_user/shared',
      "@userStore"      : '/src/main/_user/shared/store',

      '@workspace'      : '/src/main/_user/auth/_workspace',
      '@workShared'     : '/src/main/_user/auth/_workspace/shared',
      '@app_stock'      : '/src/main/_user/auth/_workspace/app-stock',
      '@app_sale'       : '/src/main/_user/auth/_workspace/app-sale/',
      '@app_management' : '/src/main/_user/auth/_workspace/app-management',
      '@app_report'     : '/src/main/_user/auth/_workspace/app-report',
      '@app_users'      : '/src/main/_user/auth/_workspace/app-users/',

      '@style'          : '/src/assets/styles/',

    },
  },
})
