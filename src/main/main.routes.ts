
//  *   ts : 23ddfd40-b699-49fa-b6bc-9435e0d5675c
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.07.15
//  *   Contributor(s): Aigars Kokins
//  *
//  *   /ROUTES  [main.routes.ts]
//  *

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter ({

  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [

    { path: '/', redirect: '/h' },

    //   Hexahedron
    { path: '/h', name: "Hexahedron",
      component: () => import('@components/body/hexahedron.vue'),
    },

    //   Tetrahedron
    { path: '/t', name: "Tetrahedron",
      component: () => import('@components/body/tetrahedron.vue'),
    },

    //   Octahedron
    { path: '/o', name: "Octahedron",
      component: () => import('@components/body/octahedron.vue'),
    },

    //   Dodekahedron
    { path: '/d', name: "Dodekahedron",
      component: () => import('@components/body/dodekahedron.vue'),
    },

    //   Icosahedron
    { path: '/i', name: "Icosahedron",
      component: () => import('@components/body/icosahedron.vue'),
    },

    { path: '/:catchAll(.*)*', name: 'NotFound', redirect: '/h' },
  ],

})

export default router
