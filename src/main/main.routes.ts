 
//  *   ts : 23ddfd40-b699-49fa-b6bc-9435e0d5675c
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.06.29
//  *   Contributor(s): Aigars Kokins
//  *   
//  *   /ROUTES  [main.routes.ts]
//  * 

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter ({

  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      // Landing_Page => ts : 909c371e-652b-45a3-ac7d-ec3a65c2ff8c
      path: '/',
      name: "lp",
      component: () => import('@user/landing-page/landing-page-component.vue'),
    },
    {
      //  Route_NotFound => ts : d25f0af1-2337-43d1-98b7-f339fc7bca3a
      path: '/:catchAll(.*)*',
      // path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@user/shared/components/404-not-found/404-componentV1.vue')

    },
  ],

})

export default router
