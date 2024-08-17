<!--
//  *   vue : 507bc6bc-b152-4adc-a92f-6b96d8987c6f
//  *
//  *   Project Name: "sacredgeometrysites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.16
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Initialize Vue web app
//  *   <RouterView/>
//  *
//  *   [initialize_app.vue]
//  *
//  *   description: This component is render, "mounted", first
//  *   RefreshService makes possible to write and read all Root Store content in Application / local storage
//  *   prevents losing states after refresh
-->

<script setup lang="ts">

  import HeaderComponent  from '@components/header/lp-header-component.vue';
  import HeaderComponentLine  from '@components/header/lp-header-line.vue';
  import FooterComponent  from '@components/footer/lp-footer-componentV2.vue';

  import {onMounted, ref, watch, watchEffect} from 'vue';
  import { RouterView, useRoute } from 'vue-router'

  // Services //=> ts : 9df63d66-54e2-4fcf-b07b-b0926d0a6ac5
  import { RefreshService } from '@/_services/refresh.service';

  const route = useRoute();
  const routePath = ref<string>(null);
  routePath.value= route.path;

  onMounted(() => {
    RefreshService();
  });

  watchEffect(() => {
    if(routePath.value !== route.path){
      routePath.value = route.path.substring(0,5)
    }
  })

</script>

<template>

  <div class="LPb" v-if="routePath === '/auth'"> <RouterView/> </div>

  <div class="LP-Layout" v-if="routePath !== '/auth'">
      <HeaderComponent/>
      <HeaderComponentLine/>
      <div class="LPb">
        <RouterView/>
      </div>
      <FooterComponent/>
  </div>
</template>

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
