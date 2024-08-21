
//  *   ts : 9ce03af6-fd0e-4c23-9be7-022c8c0c964e
//  *
//  *   Project Name: "Sacred Geometry Sites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.20
//  *   Contributor(s): Aigars Kokins
//  *
//  *   [main.ts]
//  *

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import init_app_vue from './main/initialize_app.vue' //=> ts : 507bc6bc-b152-4adc-a92f-6b96d8987c6f
import router from './routes' //=> ts : 23ddfd40-b699-49fa-b6bc-9435e0d5675c
import i18n from '@/_locale/index'; //=> ts : aa82b725-d29a-4717-9812-ea128c49d907
import { VueFire, VueFireFirestoreOptionsAPI, VueFireAuth } from "vuefire";
import { firebaseApp } from './firebase';

const   VIVENTE = createApp (init_app_vue)
        VIVENTE.use(i18n)
        VIVENTE.use(router)
        VIVENTE.use(createPinia())
        VIVENTE.use(VueFire, {
                firebaseApp,
                modules: [
                        VueFireFirestoreOptionsAPI(),
                        VueFireAuth(),
                ],
        });
        VIVENTE.mount('.app')

// Styles
import '@style/Fonts.scss';
import '@style/mixin.scss';
import '@style/stylesReset.scss';
import '@style/stylesRoot_Light.scss';
import '@style/stylesScrollbar.scss';
import '@style/Typography.scss';
import '@style/Variables.scss';
import '@style/sign-in/Typography-signIn-V2.scss';
