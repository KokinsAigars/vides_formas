<!-- 
//  *   ts : 6c8c7a9d-ce1f-45dc-9ca0-151f456f8df8
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.06.29
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
<!--                <select class="hc2-user-text-s T-h-signin">-->
<!--                    <option class="hc2-user-text-options T-h-signin" value="Products">{{Products}}</option>-->
<!--                </select>-->
<!--                <select class="hc2-user-text-s T-h-signin">-->
<!--                    <option class="hc2-user-text-options T-h-signin" value="Solutions">{{Solutions}}</option>-->
<!--                </select>-->
<!--                <select class="hc2-user-text-s T-h-signin">-->
<!--                    <option class="hc2-user-text-options T-h-signin" value="Sales">{{Sales}}</option>-->
<!--                </select>-->
</div>

            <div class="LPh-store"> 

                <div class="LPh-Translate">
                        
                    <div class="LPh-Light-Dark-hover"
                        @click.stop="onLang_menu()">

                        <svg class="LPh-icon-svg-hover" aria-hidden="true" focusable="false" role="img"
                            width="48" height="48" viewBox="0 0 48 48" style="user-select:none; overflow:hidden;">
                            <circle class="LPh-iA-hover" cx="24" cy="24" r="24"/>
                        </svg>

                        <button class="LPh-icon-btn-B"
                            role="button" type="button" aria-hidden="true">
                            <svg class="LPh-icon-svg-B" aria-hidden="true" focusable="false" role="img"
                                width="48" height="48" viewBox="0 0 48 48" style="user-select:none; overflow:hidden;">
                                <path class="LPh-iA" d="M23.8,44l9.1-24h4.2l9.1,24H42l-2.1-6.1h-9.7L28,44H23.8z M8,38l-2.8-2.8l10.1-10.1c-1.2-1.2-2.2-2.5-3.2-4s-1.8-3.2-2.6-5.1h4.2c0.7,1.3,1.3,2.4,2,3.4s1.5,1.9,2.4,2.9c1.1-1.1,2.2-2.6,3.4-4.6c1.2-2,2.1-3.9,2.7-5.7H2V8h14V4h4v4h14v4h-5.8c-0.7,2.4-1.8,4.9-3.1,7.4c-1.4,2.5-2.8,4.5-4.2,5.8l4.8,4.9l-1.5,4.1l-6.1-6.3L8,38z M31.4,34.4h7.2L35,24.2L31.4,34.4z"/>
                            </svg>
                        </button>

                    </div>

                    <div v-if="langMenu"
                        ref="ref_langMenuContainer"
                        class="LPh-themeMenu-container">

                        <button v-for="x in uiLang" :key="x.id"
                            class="LPh-menu-buttn T-LPh-menu-buttn" role="button" type="button" aria-hidden="true"
                            @click="onLangMenuBttonClick(x.value)">
                            {{ x.name }}
                        </button>

                    </div>

                </div>

                <div class="LPh-Light-Dark">

                    <div class="LPh-Light-Dark-hover"
                        @click.stop="onTheme_menu()">

                        <svg class="LPh-icon-svg-hover" aria-hidden="true" focusable="false" role="img"
                            width="48" height="48" viewBox="0 0 48 48" style="user-select:none; overflow:hidden;">
                            <circle class="LPh-iA-hover" cx="24" cy="24" r="24"/>
                        </svg>

                        <button class="LPh-icon-btn-B-svg"
                            role="button" type="button" aria-hidden="true">
                            <svg class="LPh-icon-svg-B" aria-hidden="true" focusable="false" role="img"
                                width="48" height="48" viewBox="0 0 48 48" style="user-select:none; overflow:hidden;">
                                <g v-if="ifThemeDark !== 'ThemeDark'">
                                    <path class="LPh-iA" d="M24,30c1.7,0,3.1-0.6,4.2-1.8c1.2-1.2,1.8-2.6,1.8-4.2s-0.6-3.1-1.8-4.2S25.7,18,24,18s-3.1,0.6-4.2,1.8
                                        C18.6,20.9,18,22.3,18,24s0.6,3.1,1.8,4.2C20.9,29.4,22.3,30,24,30z M24,34c-2.8,0-5.1-1-7.1-2.9C15,29.1,14,26.8,14,24
                                        s1-5.1,2.9-7.1S21.2,14,24,14s5.1,1,7.1,2.9S34,21.2,34,24s-1,5.1-2.9,7.1C29.1,33,26.8,34,24,34z M10,26H2v-4h8V26z M46,26h-8v-4
                                        h8V26z M22,10V2h4v8H22z M22,46v-8h4v8H22z M12.8,15.5l-5.1-4.8l2.9-3l4.8,5L12.8,15.5z M37.4,40.3l-4.9-5l2.7-2.8l5,4.8L37.4,40.3
                                        z M32.5,12.8l4.9-5l2.9,2.8l-5,4.8L32.5,12.8z M7.7,37.4l5-4.9l2.8,2.7l-4.8,5L7.7,37.4z"/>
                                </g>
                                <g  v-if="ifThemeDark === 'ThemeDark'">
                                    <path class="LPh-iA" d="M28,44c-2.7,0-5.3-0.5-7.8-1.6s-4.6-2.5-6.4-4.3s-3.2-3.9-4.3-6.4S8,26.7,8,24c0-2.8,0.5-5.4,1.6-7.8
                                        c1.1-2.4,2.5-4.5,4.3-6.4s3.9-3.2,6.4-4.3S25.3,4,28,4c1.8,0,3.6,0.2,5.2,0.7c1.7,0.5,3.3,1.1,4.8,2c-3,1.8-5.5,4.2-7.3,7.2
                                        c-1.8,3-2.7,6.4-2.7,10.1c0,3.7,0.9,7.1,2.7,10.1c1.8,3,4.2,5.4,7.3,7.2c-1.5,0.9-3,1.5-4.8,2C31.6,43.8,29.8,44,28,44z M28,40h1.1
                                        c0.3,0,0.6,0,0.9-0.1c-1.9-2.2-3.4-4.7-4.4-7.4C24.5,29.8,24,27,24,24s0.5-5.8,1.6-8.5c1-2.7,2.5-5.2,4.4-7.4C29.7,8,29.4,8,29.1,8
                                        H28c-4.4,0-8.2,1.6-11.3,4.7S12,19.6,12,24s1.6,8.2,4.7,11.3C19.8,38.4,23.6,40,28,40z"/>
                                </g>
                            </svg>
                        </button>

                    </div>

                    <div v-if="themeMenu"
                        ref="ref_themeMenuContainer"
                        class="LPh-themeMenu-container">

                        <button v-for="y in uiTheme" :key="y.id"
                            class="LPh-menu-buttn T-LPh-menu-buttn" role="button" type="button" aria-hidden="true"
                            @click="onThemeMenuChange(y.value)">
                            {{ y.name }}
                        </button>

                    </div>
                    
                </div>

            </div>

        </div>
    </header>

</template>

<script setup lang="ts">

    import { useRouter } from 'vue-router';
    import { onMounted, onUnmounted, ref, computed } from 'vue';

    // localization // => ts : aa82b725-d29a-4717-9812-ea128c49d907
    import i18n from '@locale/index'

    // RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
    import { useRootStore } from '@rootStore/index.html-store';

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


    // SIGN IN || LOG IN
    const onLogin = () => {router.push('/login');}

</script>

<style scoped lang="scss">

    @import '@style/mixin.scss';

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
    width: auto; min-width: auto; max-width: auto;
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