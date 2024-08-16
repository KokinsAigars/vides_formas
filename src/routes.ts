
//  *   ts : 23ddfd40-b699-49fa-b6bc-9435e0d5675c
//  *
//  *   Project Name: "sacredgeometrysites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.16
//  *   Contributor(s): Aigars Kokins
//  *
//  *   /ROUTES  [main.routes.ts]
//  *

import { createRouter, createWebHistory } from 'vue-router'

import adminConsole from '@admin/console.vue';

// Auth Guard //=> ts : 73a8d985-a778-4113-8850-ba1321b9dfcf
import { AuthGuard_app } from '@services/auth-guard-service.ts';

const EnterGuards = async (to: any, from: any, next: any) => {
  let isAuthenticated: boolean = false;

  try {

    isAuthenticated  = await AuthGuard_app();

  } catch (error) {
    console.error('not Authenticated', error);
  }

  if (!isAuthenticated) next({ redirect: '/' });
  else {
    next();
    // return true;
  }
}


const router = createRouter ({

  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [

    //  Home Page
    { path: '/', name: "home",
      component: () => import('@home/home.vue'),
    },

    //  Hexahedron
    { path: '/h', name: "Hexahedron",
      component: () => import('@components/body/hexahedron.vue'),
    },

    //  Tetrahedron
    { path: '/t', name: "Tetrahedron",
      component: () => import('@components/body/tetrahedron.vue'),
    },

    //  Octahedron
    { path: '/o', name: "Octahedron",
      component: () => import('@components/body/octahedron.vue'),
    },

    //  Dodekahedron
    { path: '/d', name: "Dodekahedron",
      component: () => import('@components/body/dodekahedron.vue'),
    },

    //  Icosahedron
    { path: '/i', name: "Icosahedron",
      component: () => import('@components/body/icosahedron.vue'),
    },

    //  Login
    { path: '/adm', name: "adm",
      component: () => import('@admin/adm.vue'),
    },

    //   Admin Console
    { path: '/adm/console', name: 'adminConsole',
      component: adminConsole,
      beforeEnter: EnterGuards,
    },

    { path: '/:catchAll(.*)*', name: 'NotFound', redirect: '/' },

  ],

})

export default router
