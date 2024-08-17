
//  *   ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
//  *
//  *   Project Name: "sacredgeometrysites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.17
//  *   Contributor(s): Aigars Kokins
//  *
//  *   GLOBAL STORE (pinia)
//  *   ROOT STORE
//  *
//  *   // RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
//  *   import { useRootStore } from '@rootStore/index.html-store';
//  *   const RootStore = useRootStore();

import i18n from '@/_locale/index';
import {defineStore} from "pinia";

export const useRootStore = defineStore({

    id: 'RootStore',

    state: () => ({

        init: 'RootStore',

        // if you change this, then change 'public/manifest.json' ["id"] as well
        // and index.html [uuid] as well
        Released_id: '2024.08.17.f775bba3-a998-46cc-a4ea-8ed081068bc9',
        Title: 'Vides Formas',

        // in session storage
        Ui_Language: 'en', // 'lv', 'ru'
        Ui_Theme: 'ThemeLight', //'ThemeDark', 'ThemeCustom', 'ThemeLightColorA'

        isAuthenticated: false,
        uid: '',

        formas: [
            {id: 0, title: 'Hexahedron'     , path: 'h', value: false },
            {id: 1, title: 'Tetrahedron'    , path: 't', value: false},
            {id: 2, title: 'Octahedron'     , path: 'o', value: false},
            {id: 3, title: 'Dodekahedron'   , path: 'd', value: true},
            {id: 4, title: 'Icosahedron'    , path: 'i', value: false},
        ],

        m:  'AIzaSyB14TR',
        a:  '74Nym584RN4Y',
        z:  'y6zcIN_AtZiw3-ew',

        mapStyleId: 'aff95100f6e051a6',

    }),

    actions: {

        // at Landing page footer
        Copyright() {
            return 'Copyright © 2024 VIVENTE Net';
        },

        // at Landing page footer
        ReleaseId() {
            return 'Released ' + this.$state.Released_id;
        },

        constructed() {
            return this.$state.m + this.$state.a + this.$state.z;
        },

        // onMenuChange in header
        changeUiMENU(payload: string) {

            // console.log('changeUiMENU(), payload: ', payload);

            if(payload === 'h' || payload === 't' || payload === 'o' || payload === 'd' || payload === 'i') {

                for (let i = 0; i < 5; i++) { this.$state.formas[i].value = false; }

                if (payload === 'h') this.$state.formas[0].value = true;
                if (payload === 't') this.$state.formas[1].value = true;
                if (payload === 'o') this.$state.formas[2].value = true;
                if (payload === 'd') this.$state.formas[3].value = true;
                if (payload === 'i') this.$state.formas[4].value = true;

            }
        },

        act_isAuthenticated(payload: boolean) {
            this.$state.isAuthenticated = payload;
        },
        act_isAuthenticated_false() {
            this.$state.isAuthenticated = false;
        },

        act_uid (payload: string) {
            this.$state.uid = payload;
        },

        // change UI language
        changeUiLanguage(payload: string) {

            if (payload === 'en' || payload === 'lv' || payload === 'ru') {
                this.$state.Ui_Language = payload;
            }

            // CHANGE GLOBAL LANGUAGE
            if (i18n) {

                // change i18n language [locale: "en" | "lv" | "ru"]
                //=> localization => ts : aa82b725-d29a-4717-9812-ea128c49d907
                i18n.global.locale = this.$state.Ui_Language as "en" | "lv" | "ru";

                localStorage.setItem('ui_lang', payload);
            }
        },

        // change UI theme
        changeUiTheme(payload: string) {

            if (payload === 'ThemeLight' || payload === 'ThemeDark' || payload === 'ThemeCustom' || payload === 'ThemeLightColorA') {
                this.$state.Ui_Theme = payload;
                localStorage.setItem('ui_theme', payload);
            }

            if (this.$state.Ui_Theme === 'ThemeLight') {
                document.documentElement.setAttribute('data-theme', 'ThemeLight');
            }

            if (this.$state.Ui_Theme === 'ThemeDark') {
                document.documentElement.setAttribute('data-theme', 'ThemeDark');
            }

            if (this.$state.Ui_Theme === 'ThemeCustom') {
                document.documentElement.setAttribute('data-theme', 'ThemeCustom');
            }

            if (this.$state.Ui_Theme === 'ThemeLightColorA') {
                document.documentElement.setAttribute('data-theme', 'ThemeLightColorA');
            }
        }
    }

})
