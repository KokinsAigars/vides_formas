<!--
//  *   vue : 8483f325-3938-43f7-b352-20c484a98f6a
//  *
//  *   Project Name: "sacredgeometrysites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.17
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Administrative Login Page
//  *   abbreviation: alp
//  *
//  *   [alp.vue]
//  *
-->

<script setup lang="ts">

  // should match with a comment at a top of the page
  const ID = 'vue : 8483f325-3938-43f7-b352-20c484a98f6a';

  // Logo
  import ViventeIcon from '@assets/svg/vivente-icon.vue';
  const ViventeIconSize = '120px';

  import loadingSVG from '@assets/svg/spinner.vue';

  import { onMounted, reactive, computed, ref } from 'vue';

  import { useRouter } from 'vue-router'
  const router = useRouter()

  // localization
  import i18n from '@/_locale';

  // RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
  import { useRootStore } from '@/_store/index.html-store.ts';
  const RootStore = useRootStore();

  // services
  import { AuthService } from '@services/auth.service.ts';

  // interface
  import type { IAuthUser } from '@models/user.ts';

  // Authentication Guard
  import { AuthGuard_app } from '@services/auth-guard-service.ts';


  // public API (localized)
  const lang                  = computed(() =>  i18n.global.t('message.lang'));
  const Title_msg             = computed(() =>  i18n.global.t('message.signIn_title_alp'));
  const UserEmail             = computed(() =>  i18n.global.t('message.signIn_placeholder_EmailUser'));
  const UserPassword          = computed(() =>  i18n.global.t('message.signIn_placeholder_Password'));
  const ProceedBtn            = computed(() =>  i18n.global.t('message.signIn_proceed_btn'));
  const signIn_password_show  = computed(() =>  i18n.global.t('message.signIn_password_show'));
  const signIn_password_hide  = computed(() =>  i18n.global.t('message.signIn_password_hide'));
  const placeholder_incorrect = computed(() =>  i18n.global.t('message.signIn_placeholder_incorrect'));
  const sup_email             = computed(() =>  i18n.global.t('message.signIn_superscript_email'));
  const sup_password          = computed(() =>  i18n.global.t('message.signIn_superscript_password'));
  const Reset_password_title  = computed(() =>  i18n.global.t('message.signIn_forgot_Reset_password'));
  const Alert_Email_sent      = computed(() =>  i18n.global.t('message.signIn_Alert_Email_sent'));

  const placeholder       = ref('');
  const activeValue       = ref('');     //<input value>
  const activeModel       = ref('text'); //=><='password'
  const typingPassword    = ref(false);
  const ifShowPassword    = ref(false);
  const onEyeHover        = ref(false);
  const forgot_count      = ref(0);
  const email             = ref('');
  const inputField        = ref<HTMLInputElement | null>(null);

  let userData: IAuthUser = { usernameOrEmail: "", password: "" };
  let isAuthenticated: boolean = false;
  let loading: boolean = false;


  // "--STATE--" v-if="siState == 0"
  /*
  *   0. _INIT state
  *   1. entering password
  */
  const siState = ref(0);

  onMounted( async() => {

    if(inputField.value !== null) {
      inputField.value.focus();
    }

    // prevent Sign in page after user is authenticated
    // or rewrite: beforeEnter in routes
    try {
      isAuthenticated  = await AuthGuard_app();
      console.log('isAuthenticated: ', isAuthenticated)
    } catch (error) {
      _INIT();
    }

    if (isAuthenticated) {
      try { await router.push({name: 'adminConsole'})}
      catch (error) {console.error(error, `An error occurred: ${ID}`);}
    }

  });


  // 0.--STATE--
  const _INIT = () => {
    siState.value = 0;
    placeholder.value = UserEmail.value;
    activeValue.value = '';
    activeModel.value = 'text';
    typingPassword.value = false;
    ifShowPassword.value = false;
    onEyeHover.value = false;
    userData = { usernameOrEmail: "", password: "" };
  }

  // 1.--STATE--
  const _statePassword = () => {
    siState.value = 1;
  }


  // MAIN FUNCTION IN COMPONENT
  /*
  *   Sing In <button> click event onProceedBtnClick()
  *   1. check if input is empty, if, return
  *   2. store email or username in a variable and proceed (reset placeholder, indicate password input)))
  *   3. store password in a variable and proceed (call service for authentication)
  *      if authentication successful, navigate to Admin Console
  */
  const onProceedBtnClick = async () => {

    // 1.
    if (activeValue.value === '') return; // if no input, do nothing

    // 2.
    if (activeModel.value === 'text' && siState.value === 0) {
      userData.usernameOrEmail = activeValue.value;
      email.value = activeValue.value;
      activeValue.value = '';
      await passColor();
      activeValue.value = '';
      activeModel.value = 'password';
      placeholder.value = UserPassword.value;
      typingPassword.value = true;
      _statePassword(); //siState.value = 1;
      return;
    }

    // 3.
    if (activeModel.value === 'password' && siState.value === 1) {
      userData.password = activeValue.value;
      activeValue.value = '';

      try {

        loading = true;

        // call service for authentication
        // => service :
        const success = await AuthService(userData)
        if (!success) {
          console.log(`error in Sign in component: ${ID}`);
          placeholder.value = placeholder_incorrect.value;
          await passColor(500, "#ff8080");
          await resetAndReturn();
          return
        }

        loading = false;

        await router.push({name: 'adminConsole'})

      } catch (error) {
        console.error(error, `An error occurred in Sing in component: ${ID}`);
        await resetAndReturn();
      }

      return;
    }

  }


  //  Function ID: 3632611
  const inputColor = ref('');
  const passColor = async (duration: number = 300, color: string = "rgb(219, 248, 213)") => {
    return new Promise((resolve) => {
      inputColor.value = `background-color: ${color};`;
      setTimeout(() => {
        inputColor.value = `background-color: ${'transparent'};`;
        resolve('done');
      }, duration);
    });
  }

  //  Function ID: 5536181
  const resetAndReturn = async ()  => {
    loading = false;
    placeholder.value = 'authentication error';
    await passColor(2000,"rgb(255, 204, 204)" );
    _INIT();
  }

  // PASSWORD in INPUT FIELD
  const clickShowPassword = () => {
    ifShowPassword.value = !ifShowPassword.value;
    if (activeModel.value === 'password') {
      activeModel.value = 'text';
    } else {
      activeModel.value = 'password';
    }
  }

  // LANGUAGE
  const state = reactive({
    selectedLang: lang.value,
    uiLang: [
      {id: 1, name: 'english' , value: 'en', On: true},
      {id: 2, name: 'latviešu', value: 'lv', On: false},
      {id: 3, name: 'ру́сский' , value: 'ru', On: false},
    ]
  });
  const onLangChange = () => {
    const selected_Lang = state.selectedLang;
    try {
      if(selected_Lang === null) return;

      // change UI language
      //=> store : b6ce8e81-d3d9-4287-bdbe-a89528b14c67
      RootStore.changeUiLanguage(selected_Lang);
      onLangChange_2();
      return { ...state, onLangChange };

    } catch (error) {
      console.error(error, `An error occurred:  ${ID}`);
    }
  }
  // reset values, force reactivity, after language change
  const onLangChange_2 = () => {
    if (activeModel.value === 'text') {placeholder.value = UserEmail.value;}
    if (activeModel.value === 'password') {placeholder.value = UserPassword.value;}
  }

  const onTermsBtnClick = () => {
    // alert(i18n.global.t('message.signIn_f_Terms'));
  }
  const onCookiesBtnClick = () => {
   // alert(i18n.global.t('message.signIn_Cookies_alert'));
  }


</script>

<template>
  <div class="alp-cnn">
    <div class="alp-side"></div>
    <div class="alp-center">

      <!--  main  -->
      <div class="alp-c-a">

        <div class="alp-c-loading"></div>

        <div class="alp-c-main">

          <div class="alp-c-logo"><ViventeIcon :height="ViventeIconSize"/></div>

          <div class="alp-c-title">
            <div v-if="siState == 0" class="T-signin-title">{{ Title_msg }}</div>
            <div v-if="siState == 1" class="T-signin-email">{{ email }}</div>
            <div v-if="siState == 2" class="T-signin-email">{{ Reset_password_title }}</div>
          </div>

          <div class="alp-c-input-superscript-cnn">
            <div class="alp-c-input-superscript" v-if="activeValue !== ''" >
              <div v-if="siState == 0 || siState == 2" class="T-SignIn_superscript">{{ sup_email }}</div>
              <div v-if="siState == 1" class="T-SignIn_superscript">{{ sup_password }}</div>
            </div>
          </div>

          <div :style="inputColor" class="alp-c-input-cnn">

            <form
                @submit.prevent
                class="alp-c-input-main-form"
                id="sIF" name="sIF">
              <input
                  class="alp-c-signIn-input T-signin-input"
                  id="sIFIN" name="sIFIN"
                  spellcheck="false"
                  ref="inputField"
                  :type="activeModel"
                  :placeholder="placeholder"
                  v-model="activeValue"
                  @keyup.enter="onProceedBtnClick()"
                  required
              >
            </form>

            <button v-if="typingPassword" aria-label="Show password"
                    class="alp-c-input-eye-btn" role="button" type="button" aria-hidden="true"
                    @click="clickShowPassword()"
                    @mouseover="onEyeHover = true"
                    @mouseout="onEyeHover = false"
            >
              <svg class="alp-c-input-eye-svg" focusable="false" role="img"
                   width="48" height="48" viewBox="0 0 48 48" style="user-select:none; overflow:hidden;">
                <g v-if="typingPassword && ifShowPassword">
                  <path class="alp-c-input-eye-svg-st0"
                        d="M24,32c2.5,0,4.6-0.9,6.4-2.6S33,25.5,33,23s-0.9-4.6-2.6-6.4S26.5,14,24,14s-4.6,0.9-6.4,2.6S15,20.5,15,23
                        s0.9,4.6,2.6,6.4S21.5,32,24,32z M24,28.4c-1.5,0-2.8-0.5-3.8-1.6c-1.1-1-1.6-2.3-1.6-3.8s0.5-2.8,1.6-3.8c1-1,2.3-1.6,3.8-1.6
                        s2.8,0.5,3.8,1.6c1,1.1,1.6,2.3,1.6,3.8s-0.5,2.8-1.6,3.8C26.8,27.9,25.5,28.4,24,28.4z M24,38c-4.9,0-9.3-1.4-13.3-4.1
                        S3.8,27.6,2,23c1.8-4.6,4.7-8.2,8.7-10.9S19.1,8,24,8s9.3,1.4,13.3,4.1S44.2,18.4,46,23c-1.8,4.6-4.7,8.2-8.7,10.9S28.9,38,24,38z
                        M24,34c3.8,0,7.2-1,10.4-3s5.6-4.7,7.2-8c-1.7-3.4-4.1-6-7.2-8s-6.6-3-10.4-3s-7.2,1-10.4,3s-5.6,4.7-7.2,8c1.7,3.4,4.1,6,7.2,8
                        S20.2,34,24,34z"/>
                </g>
                <g v-if="typingPassword && !ifShowPassword">
                  <path class="alp-c-input-eye-svg-st0"
                        d="M32.2,26.6l-2.9-2.9c0.3-1.6-0.2-3-1.4-4.4c-1.2-1.4-2.8-1.9-4.6-1.6l-2.9-2.9c0.6-0.3,1.1-0.5,1.7-0.6
                        c0.6-0.1,1.2-0.2,1.9-0.2c2.5,0,4.6,0.9,6.4,2.6S33,20.5,33,23c0,0.7-0.1,1.3-0.2,1.9C32.7,25.5,32.5,26,32.2,26.6z M38.6,32.9
                        l-2.9-2.8c1.3-1,2.4-2,3.4-3.2s1.8-2.5,2.5-3.9c-1.7-3.4-4.1-6-7.2-8c-3.1-2-6.6-3-10.4-3c-1,0-1.9,0.1-2.9,0.2
                        c-0.9,0.1-1.8,0.3-2.8,0.6l-3.1-3.1c1.4-0.6,2.8-1,4.2-1.3C20.9,8.1,22.4,8,24,8c5,0,9.5,1.4,13.5,4.2S44.2,18.6,46,23
                        c-0.8,2-1.8,3.8-3,5.5C41.7,30.2,40.3,31.6,38.6,32.9z M39.6,45.2l-8.4-8.3c-1.2,0.4-2.3,0.6-3.5,0.8C26.5,37.9,25.3,38,24,38
                        c-5,0-9.5-1.4-13.4-4.2S3.8,27.4,2,23c0.7-1.8,1.6-3.4,2.7-4.9c1.1-1.5,2.3-2.9,3.7-4.1L2.8,8.4l2.8-2.8l36.8,36.8L39.6,45.2z
                        M11.1,16.8c-1,0.9-1.9,1.8-2.7,2.9S7,21.8,6.4,23c1.7,3.4,4.1,6,7.2,8s6.6,3,10.4,3c0.7,0,1.3,0,2-0.1s1.3-0.2,1.9-0.3l-1.8-1.9
                        c-0.4,0.1-0.7,0.2-1,0.2C24.7,32,24.4,32,24,32c-2.5,0-4.6-0.9-6.4-2.6S15,25.5,15,23c0-0.4,0-0.7,0.1-1.1c0.1-0.3,0.1-0.7,0.2-1
                        L11.1,16.8z"/>
                </g>
              </svg>

              <div class="alp-c-pwd_tooltip T-pwd_tooltip" v-if="onEyeHover">
                <div v-if="!ifShowPassword">{{ signIn_password_show }}</div>
                <div v-if="ifShowPassword">{{ signIn_password_hide }}</div>
              </div>

            </button>

          </div>

          <div class="alp-c-login-btn-cnn">
            <div class="alp-c-login-btn-line T-signin-msg">
              contact for user
            </div>

            <div class="alp-c-proceed-cnn">
              <button class="alp-c-proceed-btn T-proceed-btn"
                      @click="onProceedBtnClick()">
                {{ ProceedBtn }}
              </button>
            </div>
          </div>

        </div>

      </div>

      <!--  MESSAGE at a bottom -->
      <div class="alp-c-b">

        <div class="alp-c-b-btn1 T-signin-msg"
             @click="onTermsBtnClick()">
          {{ $t('message.signIn_f_Terms') }}
        </div>

        <div class="alp-c-b-btn2 T-signin-msg"
             @click="onCookiesBtnClick()">
          {{ $t('message.signIn_f_Cookies') }}
        </div>

        <div style="margin: auto;"></div>

        <div class="alp-c-b-btn1 T-signin-msg">

          <select class="alp-c-b-select T-signin-msg"
                  v-model="state.selectedLang"
                  @change="onLangChange">

            <option class="alp-c-b-select-o T-signin-msg"
                    v-for="x in state.uiLang" :key="x.id"
                    :value="x.value">
              {{ x.name }}
            </option>

          </select>

        </div>

      </div>

      <!--  loading pinner -->
      <div v-if="loading" class="alp-loadingSpinner">
        <loadingSVG/>
      </div>

      </div>
    <div class="alp-side"></div>
  </div>
</template>

<style scoped lang="scss" src="./_adm-styles.scss"/>
