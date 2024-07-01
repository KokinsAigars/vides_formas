
//  *   ts : 23ddfd40-b699-49fa-b6bc-9435e0d5675c
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.07.01
//  *   Contributor(s): Aigars Kokins
//  *
//  *   /ROUTES  [main.routes.ts]
//  *

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter ({

  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [

    { path: '/', redirect: '/h' },

    {
      path: '/h',
      name: "Hexahedron",
      component: () => import('@bodyComp/hexahedron.vue'),
    },
    {
      path: '/t',
      name: "Tetrahedron",
      component: () => import('@bodyComp/tetrahedron.vue'),
    },
    {
      path: '/o',
      name: "Octahedron",
      component: () => import('@bodyComp/octahedron.vue'),
    },
    {
      path: '/d',
      name: "Dodekahedron",
      component: () => import('@bodyComp/dodekahedron.vue'),
    },
    {
      path: '/i',
      name: "Icosahedron",
      component: () => import('@bodyComp/icosahedron.vue'),
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
