
//  *   ts : 23ddfd40-b699-49fa-b6bc-9435e0d5675c
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.07.02
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
      component: () => import('@components/bodyMobile/hexahedron.m.vue'),
      // component: () => import('@components/body/hexahedron.vue'),
    },
    { path: '/h.m', name: "HexahedronMobile",
      component: () => import('@components/bodyMobile/hexahedron.m.vue'),
    },

    //   Tetrahedron
    { path: '/t', name: "Tetrahedron",
      component: () => import('@components/bodyMobile/tetrahedron.m.vue'),
      // component: () => import('@components/body/tetrahedron.vue'),
    },
    { path: '/t.m', name: "TetrahedronMobile",
      component: () => import('@components/bodyMobile/tetrahedron.m.vue'),
    },

    //   Octahedron
    { path: '/o', name: "Octahedron",
      component: () => import('@components/bodyMobile/octahedron.m.vue'),
      // component: () => import('@components/body/octahedron.vue'),
    },
    { path: '/o.m', name: "OctahedronMobile",
      component: () => import('@components/bodyMobile/octahedron.m.vue'),
    },

    //   Dodekahedron
    { path: '/d', name: "Dodekahedron",
      component: () => import('@components/bodyMobile/dodekahedron.m.vue'),
      // component: () => import('@components/body/dodekahedron.vue'),
    },
    { path: '/d.m', name: "DodekahedronMobile",
      component: () => import('@components/bodyMobile/dodekahedron.m.vue'),
    },

    //   Icosahedron
    { path: '/i', name: "Icosahedron",
      component: () => import('@components/bodyMobile/icosahedron.m.vue'),
      // component: () => import('@components/body/icosahedron.vue'),
    },
    { path: '/i.m', name: "IcosahedronMobile",
      component: () => import('@components/bodyMobile/icosahedron.m.vue'),
    },

    { path: '/:catchAll(.*)*', name: 'NotFound', redirect: '/h' },
  ],

})

export default router
