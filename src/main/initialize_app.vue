<!--
//  *   ts : 507bc6bc-b152-4adc-a92f-6b96d8987c6f
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.08.14
//  *   Contributor(s): Aigars Kokins
//  *
//  *   <RouterView/>
//  *
//  *   [Initialize App Vue]
//  *
//  *   description: This component is render, "mounted", first
//  *
-->

<template>
  <div class="LP-Layout">

    <HeaderComponent v-if="TempRoutePath !=='/adm' || route.path !=='/adm'"/>
    <HeaderComponentLine v-if="TempRoutePath !=='/adm' || route.path !=='/adm'"/>

    <div class="LPb"> <RouterView/> </div>

    <FooterComponent v-if="TempRoutePath !=='/adm' || route.path !=='/adm'"/>

  </div>
</template>

<script setup lang="ts">

  import HeaderComponent  from '@components/header/lp-header-component.vue';
  import HeaderComponentLine  from '@components/header/lp-header-line.vue';
  import FooterComponent  from '@components/footer/lp-footer-componentV2.vue';

  import {onMounted, watch, watchEffect} from 'vue';
  import { RouterView, useRoute } from 'vue-router'

  // Services //=> ts : 9df63d66-54e2-4fcf-b07b-b0926d0a6ac5
  import { RefreshService } from '@services/refresh.service';

  // import { browserService } from '@services/refresh.service';

  // what is current route.path [e.g. '/h']
  const route = useRoute();
  let TempRoutePath: string = route.path;

  watchEffect(() => {

    // if [route.path] changes
    if(TempRoutePath !== route.path){
      console.log(route.path);
      TempRoutePath = route.path;
    }
  })

  onMounted(() => {
    RefreshService();
  });


</script>

<style scoped lang="scss">

  html, body {
    overflow-x: hidden;
    overflow-y: auto !important;
  }

  $b-height: calc(var(--V-screen-height) - var(--V-h-height) - var(--LP-V-h-footer));

  .LP-Layout{
    height: var(--V-screen-height); min-height: var(--V-screen-height); max-height: var(--V-screen-height);
    width: var(--V-screen-width); min-width: var(--V-screen-width); max-width: var(--V-screen-width);
  }
  .LPb{
    overflow: visible;
    left: 0;
    top: var(--V-h-height);
    width:  100%;
    height: $b-height;
    background-color: var(--C-background-color);
    //border: 1px solid transparent;
    //border: 3px dashed blue;
  }

</style>
