
//  *   ts : 9df63d66-54e2-4fcf-b07b-b0926d0a6ac5
//  *
//  *   Project Name: "sacredgeometrysites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.16
//  *   Contributor(s): Aigars Kokins
//  *
//  *   after web browser refresh
//  *   [refresh.service.ts]
//  *
//  *   // Services //=> ts : 9df63d66-54e2-4fcf-b07b-b0926d0a6ac5
//  *   import { RefreshService } from '@services/refresh.service';

import i18n from '@/_locale/index'
import { useRootStore } from '@rootStore/index.html-store';
import { watch } from 'vue';

export const RefreshService = () => {

    const RootStore= useRootStore();

    // Load state from localStorage
    if (localStorage.getItem('RS')) {
        RootStore.$patch(JSON.parse(localStorage.getItem('RS') ?? ''));
    }
    watch(
        () => RootStore.$state,
        ( newState ) => {localStorage.setItem('RS', JSON.stringify(newState));},
        { deep: true }
    );

    // UI Theme
    const ui_theme = RootStore.$state.Ui_Theme;
    const ui_theme_sessionStorage = localStorage.getItem('ui_theme');
    localStorage.setItem('ui_theme', ui_theme);
    if (ui_theme !== ui_theme_sessionStorage && ui_theme_sessionStorage !== null) {
        document.documentElement.setAttribute('data-theme', ui_theme_sessionStorage);
        // change UI theme
        RootStore.changeUiTheme(ui_theme_sessionStorage);
    } else {
        document.documentElement.setAttribute('data-theme', ui_theme);
    }

    // UI Language
    const ui_lang = RootStore.$state.Ui_Language;
    const ui_lang_sessionStorage = localStorage.getItem('ui_lang');
    localStorage.setItem('ui_lang', ui_lang);
    if (i18n && ui_lang !== ui_lang_sessionStorage && ui_lang_sessionStorage !== null) {
        i18n.global.locale = ui_lang_sessionStorage as "en" | "lv" | "ru";
        // change UI language
        RootStore.changeUiLanguage(ui_lang_sessionStorage);
    } else {
        i18n.global.locale = ui_lang as "en" | "lv" | "ru";
    }

}
