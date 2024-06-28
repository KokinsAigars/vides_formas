 
//  *   ts : a4397f81-2ff7-4909-9aa9-de3f5f2b0126
//  *
//  *   Project Name: Vides Formas
//  *   Organization: VIVENTE
//  *   Vue 3 + Typescript + SCSS + Vite
//  *   Built on 2024.06.28
//  *   Contributor(s): Aigars Kokins
//  *   
//  *   /ROUTES  [main.routes.ts]
//  * 

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter ({

  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      // Landing_Page => ts : e2823e62-7d2c-4c9a-b1e0-f3959eb84e00
      path: '/',
      name: "lp",
      component: () => import('@user/landing-page/landing-page-component.vue'),
    },
  ],

})

export default router
