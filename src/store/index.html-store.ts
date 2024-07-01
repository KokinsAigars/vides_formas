
//  *   ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.06.29
//  *   Contributor(s): Aigars Kokins
//  *
//  *   GLOBAL STORE (pinia)
//  *   ROOT STORE
//  *
//  *   // RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
//  *   import { useRootStore } from '@rootStore/index.html-store';

import i18n from '@/locale/index';
import {defineStore} from "pinia";

export const useRootStore = defineStore({

    id: 'RootStore',

    state: () => ({

        init: 'RootStore',

        Released_id: 'f775bba3-a998-46cc-a4ea-8ed081068bc9',
        Title: 'Vides Formas',

        // in session storage
        Ui_Language: 'en', // 'lv', 'ru'
        Ui_Theme: 'ThemeLight', //'ThemeDark', 'ThemeCustom', 'ThemeLightColorA'

        formas: [
            {id: 0, title: 'Hexahedron'     , value: ''},
            {id: 1, title: 'Tetrahedron'    , value: false},
            {id: 2, title: 'Octahedron'     , value: false},
            {id: 3, title: 'Dodekahedron'   , value: false},
            {id: 4, title: 'Icosahedron'    , value: false},
        ],
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
