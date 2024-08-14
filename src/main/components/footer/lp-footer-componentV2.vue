<!--
//  *   ts : 5b2b11cc-f727-408d-973a-993916120dc4
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.08.14
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page - footer  [.ts]
//  *   abbreviation: LPf
//  *   version: 2
//  *
-->

<template>

    <footer class="LPf-footer">
        <div class="LPf-container">
            <p class="LPf-el T-LPf-el">{{RootStore.Copyright()}}</p>
<!--            <p class="LPf-el T-LPf-el">{{RootStore.ReleaseId()}}</p>-->
          <p>
            <button class="btn_footer_email T-LPf-el">
              Share your photos
            </button>
          </p>

        </div>
    </footer>
</template>


<script setup lang="ts">
    // RootStore => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
    import { useRootStore } from '@rootStore/index.html-store';
    import {ref, watchEffect} from "vue";
    const RootStore = useRootStore();

    // const appHeight = ref<HTMLDivElement | null>(null);
    // appHeight.value = document.querySelector('.app') as HTMLDivElement;
    // console.log('hmm', appHeight.value.offsetHeight);

    // watchEffect(() => {
    //   let temp = document.querySelector('.app') as HTMLDivElement;
    //   if(appHeight.value !== temp.offsetHeight){
    //     appHeight.value = temp;
    //     console.log(appHeight.value);
    //   }
    // })


    /**/	//	Sending emails from Feedback window using ""emailjs""
    /**/	//	https://dashboard.emailjs.com/
    /**/
    function fn_send_mail(Feedback_INPUT:string) { //_log(Feedback_INPUT);

      let data = {
        service_id: "service_z3yp5bg",
        template_id: "template_nft4qrm",
        user_id: "YY3n_uVQKT3V7sJmA",
        template_params: {
          'message' : Feedback_INPUT,
          'date': new Date()
        }
      };

      let http = new XMLHttpRequest();
      http.open("POST", 'https://api.emailjs.com/api/v1.0/email/send', true);
      http.setRequestHeader("Content-Type", 'application/json');
      http.send ( JSON.stringify(data) );

    }

</script>


<style scoped lang="scss">

@import '@style/mixin.scss';

    .LPf-footer{
        height: var(--LP-V-h-footer); min-height: var(--LP-V-h-footer); max-height: var(--LP-V-h-footer);
        width: var(--V-screen-width); min-width: var(--V-screen-width); max-width: var(--V-screen-width);
        background-color: var(--C-background-color);
        //border-top:1px solid var(--C-background-line);
        padding: 33px;
    }

    .LPf-container{
        margin: auto;
        max-width: var(--V-screen-width);
        // border:1px dashed purple;

      @include for-height-size(600px) {
        display: none;
      }
    }
    .LPf-el{
        margin: 0;
        text-align: center;
      opacity: 0.7;
        // border:1px dashed red;
    }
    .btn_footer_email{
      padding-left: 40px;
      text-decoration: none;
      background-color: transparent;
      border: 0;
      overflow: hidden !important;
      cursor: pointer;
    }

</style>
