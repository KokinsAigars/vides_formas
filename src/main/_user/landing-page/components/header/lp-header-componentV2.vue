<!--
//  *   ts : 6c8c7a9d-ce1f-45dc-9ca0-151f456f8df8
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.07.01
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page - header [.ts]
//  *   abbreviation: LPh
//  *   version: 2
//  *
-->

<template>
    <!--
    <div class="AuxiliaryLine0"></div><div class="AuxiliaryLine1"></div><div class="AuxiliaryLine2"></div>
    <div class="AuxiliaryLineVidus"></div><div class="AuxiliaryLine3"></div><div class="AuxiliaryLine4"></div>
    -->

    <header class="LPh-header">
        <div class="LPh-container">

<!--            <div class="LPh-Title T-LPh-Title">{{VIVENTE}}-->
<!--            </div>-->

      <div class="LPh-products">
                  <div class="LPh-products">
                    <select class="hc2-user-text-s T-h-signin">
                      <option class="hc2-user-text-options T-h-signin" value="Products">Hexahedron</option>
                      <option class="hc2-user-text-options T-h-signin" value="Solutions">Tetrahedron</option>
                      <option class="hc2-user-text-options T-h-signin" value="Sales">Octahedron</option>
                      <option class="hc2-user-text-options T-h-signin" value="Sales">Dodekahedron</option>
                      <option class="hc2-user-text-options T-h-signin" value="Sales">Icosahedron</option>
                    </select>
                  </div>
      </div>


        <!-- Menu -->
        <div class="hb-c">
        <div
            v-if="MENU_option_display"
            class="hb-c-div">

          <select
              class="hb-c-select T-hb-c-select"
              id="hb-c-select"
              v-model="MENU_selected"
              @click="MENU_fn_ChangeApp(MENU_selected)">
            <option
                v-for="x in MENU_option" :key="x"
                class="hb-c-select-o T-hb-c-select"
                :value="x"
            >
              {{ x }}
            </option>
          </select>

        </div>
      </div>
        </div>
    </header>

</template>

<script setup lang="ts">

import { useRouter } from 'vue-router';
import {onMounted, onUnmounted, ref, computed, Ref} from 'vue';

// localization // => ts : aa82b725-d29a-4717-9812-ea128c49d907
import i18n from '@locale/index'

// RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
import { useRootStore } from '@rootStore/index.html-store';


// MENU
const MENU_option: Ref<string[]> = ref([]);
const MENU_option_display = ref(false);
const MENU_selected = ref('');

if(MENU_option.value.length > 0){
  MENU_option_display.value = true;
  if (useRootStore.$state.formas[0].title == 'Hexahedron' && useRootStore.$state.apps[0].value !== '')
  {MENU_selected.value = String(useRootStore.$state.formas[0].value);}
  else MENU_selected.value = MENU_option.value[0];
}

const MENU_fn_ChangeApp = (value: string) => {

  if (useRootStore.$state.formas[0].value !== value){

    useRootStore.$state.formas[0].value = value;
    MENU_selected.value = value;

    try {
      router.push({ name: value });
    } catch (error) {
      // console.error(error);
      // console.error('Failed to navigate to ', value, ': ', ID);
      // if  (value === 'Workspace') {ResetService(); router.push({ name: 'lp' });}
      // else router.push({ name: 'Workspace' });
    }
  }
}





    const RootStore = useRootStore();
    const router = useRouter();

    // public API (localization)
    const Products  = computed(() => i18n.global.t('message.landingPage_Products'));
    const Solutions = computed(() => i18n.global.t('message.landingPage_Solutions'));
    const Sales = computed(() => i18n.global.t('message.landingPage_Sales'));
    const VIVENTE = 'VIVENTE';

    // LANGUAGE
    const ref_langMenuContainer = ref(null);
    let langMenu = ref(false);
    const uiLang = [
        {id: 1, name: 'english' , value: 'en', On: true},
        {id: 2, name: 'latviešu', value: 'lv', On: false},
        {id: 3, name: 'ру́сский' , value: 'ru', On: false},
    ]
    const onLang_menu = () => {
        langMenu.value = !langMenu.value;
        themeMenu.value = false;
    }
    const onLangMenuBttonClick = (payload: string) => {
        try {

            // change UI language
            RootStore.changeUiLanguage(payload);

            langMenu.value = false;
            themeMenu.value = false;
        } catch (error) {
            console.error('An error occurred: [ts : 78dc185a-bdd1-432d-8e60-d71c535b0919]', error);
        }
    }

    // THEME
    const ref_themeMenuContainer = ref(null);
    let themeMenu = ref(false);
    const ifThemeDark = computed(() => RootStore.$state.Ui_Theme);
    const uiTheme = [
        {id: 1, name: i18n.global.t('message.landingPage_uiTheme_Light') , value: 'ThemeLight', On: true},
        {id: 1, name: i18n.global.t('message.landingPage_uiTheme_Dark') , value: 'ThemeDark', On: false},
        {id: 1, name: i18n.global.t('message.landingPage_uiTheme_Custom') , value: 'ThemeCustom', On: false},
        {id: 1, name: i18n.global.t('message.landingPage_uiTheme_LightColorA') , value: 'ThemeLightColorA', On: false},
    ]
    const onTheme_menu = () => {
        themeMenu.value = !themeMenu.value;
        langMenu.value = false;
    }
    const onThemeMenuChange = (payload: string) => {
        try {

            // change UI theme
            RootStore.changeUiTheme(payload);

            langMenu.value = false;
            themeMenu.value = false;
        } catch (error) {
            console.error('An error occurred: [ts : 78dc185a-bdd1-432d-8e60-d71c535b0919]', error);
        }
    }

    // handle <body> click event, switch off language and theme menu if not on menu and its children
    const handleBodyClick = (event: MouseEvent) => {

        if (ref_langMenuContainer.value !== null && (ref_langMenuContainer.value as HTMLElement).contains(event.target as Node)) {
            return;
        }
        else if (ref_themeMenuContainer.value !== null &&  (ref_themeMenuContainer.value as HTMLElement).contains(event.target as Node) ){
            return;
        }
        else {
            langMenu.value = false;
            themeMenu.value = false;
        }
    };

    onMounted(() => {
        document.body.addEventListener('click', handleBodyClick);
    });

    onUnmounted(() => {
      document.body.removeEventListener('click', handleBodyClick);
    });


</script>

<style scoped lang="scss">

    @import '@style/mixin.scss';


    .hb-c{
      margin-left: auto;
      display: flex;
      justify-content: right;
      height: 48px; min-height: 48px; max-height: 48px;
      margin-top: 9px;
      margin-right: 15px;
      background-color: transparent;
      @include for-size(720px) {
        display:none;
        transition: 1s;
      }}
    .hb-c-div{
      display: flex;
      text-decoration: none;
      background-color: transparent;
      border: 1px solid var(--C-T-app-h-search-line);
      //background-color: transparent;
      border-radius: 5px;
      padding-left: 5px;
      padding-right: 5px;
      overflow: hidden !important;
      cursor: pointer;}
    .hb-c-select {
      background-color: transparent;
      border: 0;
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 3px;}
    .hb-c-select-o{
      background-color: var(--C-app-h-bg);
    }
    .hb-c-select:focus, .hb-c-select-o:focus {
      outline: none;}



































// -------- auxiliary lines
// .AuxiliaryLine0{@include AuxL_Horizontal(0px);}
// .AuxiliaryLine1{@include AuxL_Horizontal(7px);}
// .AuxiliaryLine2{@include AuxL_Horizontal(17px);}
// .AuxiliaryLineVidus{@include AuxL_HorizontalColor(31px, red);}
// .AuxiliaryLine3{@include AuxL_Horizontal(52px);}
// .AuxiliaryLine4{@include AuxL_Horizontal(var(--LP-V-h-height));}

// -------- ICONS
.RS_A_C1{
    fill: var(--C-VIVENTE-fillA);}
.RS_A_C2{
    fill: var(--C-VIVENTE-fillB);}
.LPh-iA{
    fill: var(--LP-C-h_icont_bg)};

// -------- Header
.LPh-header{
    top: 0;
    height: var(--LP-V-h-height); min-height: var(--LP-V-h-height); max-height: var(--LP-V-h-height);
    width: var(--V-screen-width); min-width: var(--V-screen-width); max-width: var(--V-screen-width);
    // border-bottom: 1px solid var(--C-background-line);
    background-color: var(--C-background-color);}
.LPh-container{
    height: var(--LP-V-h-height); min-height: var(--LP-V-h-height); max-height: var(--LP-V-h-height);
    width: var(--V-screen-width); min-width: var(--V-screen-width); max-width: var(--V-screen-width);
    padding-top: 7px;
    padding-left: 80px;
    padding-right: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    flex-shrink: 0;
    flex-grow: 0;
    background-color: transparent;}
.LPh-Title{
    // width: 33px;
    // height: 46px;
    // background-color: transparent;
//    background: linear-gradient(to right, green, indigo,);
  //  background-clip: text;
    //-webkit-background-clip: text;
    //-webkit-text-fill-color: transparent;
    //color: transparent;
    @include for-size(950px) {
        display:none;
    }}

.LPh-icon-btn{
    text-decoration: none;
    background-color: transparent;
    border: 0;
    overflow: hidden !important;
    cursor: pointer;}
.LPh-icon-svg{
    overflow: hidden !important;
    opacity: var(--LP-T-h_Title-opacity);}
.LPh-store{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 20px;
    background-color: transparent;
    @include for-size(760px) {
        display:none;
    }}
.LPh-Translate, .LPh-Light-Dark{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    margin-top: -5px;
    background-color: transparent;}
.LPh-Light-Dark-hover{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background-color: transparent;}
.LPh-icon-svg-hover{
    position: absolute;
    width: 90%;
    height: 90%;
    opacity: 0;}
.LPh-Light-Dark-hover:hover > .LPh-icon-svg-hover{
    opacity: 0.2;}
.LPh-iA-hover{
    fill: var(--LP-C-h_icont_bg-hover)};
.LPh-icon-btn-B{
    text-decoration: none;
    background-color: transparent;
    border: 0;
    padding: 7px;
    overflow: hidden !important;
    cursor: pointer;}
.LPh-icon-btn-B-svg{
    position: absolute;
    text-decoration: none;
    background-color: transparent;
    border: 0;
    // padding: 7px;
    overflow: hidden !important;
    cursor: pointer;}
.LPh-icon-svg-B{
    display: flex;
    width: 25px;
    height: 25px;
    background-color: transparent;}
.LPh-products{
    display: flex;
    justify-content: right;
    flex: 1;
    margin-left: auto;
    background-color: transparent;
    @include for-size(650px) {
        display:none;
    }}
.LPh-signin{
    height: 41px; min-height: 41px; max-height: 41px;
    width: auto;
    border: 0.1px solid var(--C-background-line);
    border-radius: 5px;
    margin-left: auto;
    cursor: pointer;}
.LPh-signin:hover{
    background-color: var(--C-ui-SignIn-btn-hover);
    box-shadow: 1px 1px 1px var(--C-ui-btn-shadow);}
.hc2-user-text-s{
    height: 40px;
    margin-right: 16px;
    background-color: transparent;
    text-decoration: none;
    border: 1px solid transparent;
    cursor: pointer;}
.LPh-signin-text, .hc2-user-text-options{
    margin-top: 7px;
    margin-left: 16px;
    margin-right: 16px;
    background-color: transparent;
    text-decoration: none;
    border: 1px solid transparent;
    cursor: pointer;}
.hc2-user-text-options{
    background-color: red;
}
.LPfc2-lang-select-o{
    width: 200px;
    height: 500px;
    background-color: cadetblue;
}
.LPh-themeMenu-container{
    position: absolute;
    top: 48px;
    right: 0;
    display: block;
    flex-direction: column;
    flex-wrap: nowrap;
    width: auto;
    height: auto;
    padding: 10px 10px;
    border-radius: 10px;
    background-color: var(--C-background-color);
    border:1px solid var(--C-background-line);
    @include for-size(650px) {
        display:none;
    }
}
.LPh-menu-buttn{
    text-decoration: none;
    background-color: transparent;
    border: 0;
    border-radius: 5px;
    width: 100%;
    padding: 7px 15px;
    white-space: nowrap;
    text-align: left;
    overflow: hidden !important;
    cursor: pointer;}

.LPh-menu-buttn:hover{
    background-color: var(--C-ui-SignIn-btn-hover);
    box-shadow: 1px 1px 1px var(--C-ui-btn-shadow);}


</style>
