
//  *   ts : 23ddfd40-b699-49fa-b6bc-9435e0d5675c
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.08.14
//  *   Contributor(s): Aigars Kokins
//  *
//  *   /ROUTES  [main.routes.ts]
//  *

import { createRouter, createWebHistory } from 'vue-router'
import { AuthGuard_app } from '@services/auth-guard-service.ts';

const EnterGuards = async (to: any, from: any, next: any) => {
  let isAuthenticated: boolean = false;
  try {
    isAuthenticated  = await AuthGuard_app();

  } catch (error) { console.error(error); }
  if (!isAuthenticated) next({ name: 'forbidden' }); // 403.error => ts : d4ad29e7-70e4-4812-888a-6bd369680905
  else {
    next();
    // return true;
  }
}


const router = createRouter ({

  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [

    // { path: '/', redirect: '/h' },

    //  home page
    { path: '/', name: "home",
      component: () => import('@home/home.vue'),
    },

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

    //   Admin Console
    { path: '/adm', name: "adm",
      component: () => import('@admin/adm.vue'),
      children: [
        {
          path: 'adm/:id',
          name: 'adminConsole',
          component: () => import('@admin/console.vue'),
          props: true,
          beforeEnter: EnterGuards,
        },
      ],
    },

    { path: '/:catchAll(.*)*', name: 'NotFound', redirect: '/' },

  ],

})

export default router
