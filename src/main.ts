
//  *   ts : 9ce03af6-fd0e-4c23-9be7-022c8c0c964e
//  *
//  *   Project Name: Vides Formas
//  *   Organization: VIVENTE
//  *   Vue 3 + Typescript + SCSS + Vite
//  *   Built on 2024.06.28
//  *   Contributor(s): Aigars Kokins
//  *	 
//  *   [main.ts]
//  *   

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import RouterView from './main/router-view-component.vue' //=> ts : 94c7e038-2cfe-4283-9165-644f0ed43ed9
import router from './main/main.routes' //=> ts : 9c87f043-90a2-4d7e-a1af-a4936ee057fc
import i18n from '@/locale/index'; //=> ts : f7114ab1-95e0-42eb-9d09-9a58add7370c

const   VIVENTE = createApp(RouterView)
        VIVENTE.use(i18n)
        VIVENTE.use(router)
        VIVENTE.use(createPinia())
        VIVENTE.mount('.app')

// Styles
// import '@style/mixin.scss';
// import '@style/Variables.scss';
// import '@style/Fonts.scss';
// import '@style/Typography.scss';
// import '@style/stylesReset.scss';
// import '@style/stylesRoot_Light.scss';
// import '@style/stylesRoot_Dark.scss';
// import '@style/stylesRoot_Custom.scss';
// import '@style/stylesRoot_Light_ColorA.scss';
// import '@style/stylesScrollbar.scss';
// import '@style/landing-page/Typography-LP-V2.scss';
// import '@style/sign-in/Typography-signIn-V1.scss';
// import '@style/workspace/T-workspace-V1.scss';
// import '@style/workspace/styleWorkspace-V1.scss';
// import '@style/tabs/T-tabs-V1.scss';
// import '@style/invoice/T-invoice.scss';
// import '@style/settings/T-settings.scss';