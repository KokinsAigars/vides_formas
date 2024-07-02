
//  *   ts : 9df63d66-54e2-4fcf-b07b-b0926d0a6ac5
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.06.29
//  *   Contributor(s): Aigars Kokins
//  *	
//  *   after web browser refresh
//  *   [refresh.service.ts]
//  *
//  *   // Services // =>  ts : 9df63d66-54e2-4fcf-b07b-b0926d0a6ac5
//  *   import { RefreshService } from '@user/shared/services/refresh.service';

import i18n from '@/locale/index'
import { useRootStore } from '@rootStore/index.html-store';
// import { watch } from 'vue';

export const RefreshService = () => {
    
    const RootStore = useRootStore();

    // UI Theme
    const ui_theme = RootStore.$state.Ui_Theme;
    const ui_theme_sessionStorage = localStorage.getItem('ui_theme');
    localStorage.setItem('ui_theme', ui_theme);
    if (ui_theme !== ui_theme_sessionStorage && ui_theme_sessionStorage !== null) {

        // adding :root theme attribute to <html>
        // document.documentElement.className = '';
        // document.documentElement.classList.add(ui_theme_sessionStorage);
        document.documentElement.setAttribute('data-theme', ui_theme_sessionStorage);

        // change UI theme
        RootStore.changeUiTheme(ui_theme_sessionStorage);

    } else {
        // document.documentElement.className = '';
        // document.documentElement.classList.add(ui_theme);
        document.documentElement.setAttribute('data-theme', ui_theme);
    }

    // UI Language
    const ui_lang = RootStore.$state.Ui_Language;
    const ui_lang_sessionStorage = localStorage.getItem('ui_lang');
    localStorage.setItem('ui_lang', ui_lang);
    if (i18n && ui_lang !== ui_lang_sessionStorage && ui_lang_sessionStorage !== null) {

        // change i18n language [locale: "en" | "lv" | "ru"]
        //=> localization => ts : aa82b725-d29a-4717-9812-ea128c49d907
        i18n.global.locale = ui_lang_sessionStorage as "en" | "lv" | "ru";

        // change UI language
        RootStore.changeUiLanguage(ui_lang_sessionStorage);

    } else {
        i18n.global.locale = ui_lang as "en" | "lv" | "ru";
    }
    
}   
