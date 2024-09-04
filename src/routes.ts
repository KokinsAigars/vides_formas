
//  *   ts : 23ddfd40-b699-49fa-b6bc-9435e0d5675c
//  *
//  *   Project Name: "Sacred Geometry Sites"
//  *   Organization: VIVENTE
//  *   Built on 2024.09.04
//  *   Contributor(s): Aigars Kokins
//  *
//  *   /ROUTES  [main.routes.ts]
//  *
//  *   Documentation: https://router.vuejs.org/api/

import { createRouter, createWebHistory } from 'vue-router'

import adminConsole from '@admin/console.vue';

// authentication guard service //=> ts : 73a8d985-a778-4113-8850-ba1321b9dfcf
import { ser_authGuard } from '@services/ser_authGuard.ts';

const EnterGuards = async (to: any, from: any, next: any) => {
  let isAuthenticated: boolean = false;

  try {

    isAuthenticated  = await ser_authGuard ();

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

    { path: '/', name: "root", redirect: '/h'},

    //  Home Page
    { path: '/--', name: "home",
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

    //  login page [/auth]
    { path: '/auth', name: "auth",
      component: () => import('@admin/login/auth.vue'),
    },

    //  logout page [/out]
    { path: '/out', name: "out",
      component: () => import('@admin/login/out.vue'),
    },

    //   Administrative Console
    { path: '/auth/console', name: 'adminConsole',
      component: adminConsole,
      beforeEnter: EnterGuards,
    },

    { path: '/:catchAll(.*)*', name: 'NotFound', redirect: '/' },


    //  experiments
    { path: '/exp', name: "exp",
      component: () => import('@home/exp.vue'),
    },

  ],

})

export default router
