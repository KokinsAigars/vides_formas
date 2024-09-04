<!--
//  *   vue : 507bc6bc-b152-4adc-a92f-6b96d8987c6f
//  *
//  *   Project Name: "Sacred Geometry Sites"
//  *   Organization: VIVENTE
//  *   Built on 2024.09.04
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

  import { onMounted } from 'vue';

  // Services //=> ts : 9df63d66-54e2-4fcf-b07b-b0926d0a6ac5
  import { ser_onBrowserRefresh } from '@services/ser_onBrowserRefresh';

  // Services //=> ts : 3077efdc-d524-44c3-ad8f-e9106bb97c8a
  import { ser_browserCompatibility } from '@services/ser_browserCompatibility';

  // Service - Service Worker //=> ts : 6b1379b4-7118-4761-b9b6-c35e7198fd9c
  // import { ser_sw_register, ser_sw_unregister } from '@services/ser_ServiceWorker';

  // Services //=> ts :
  //import { ser_db_test } from "@services/ser_db_test";

  onMounted(() => {
    ser_browserCompatibility();
    // ser_sw_register();
    ser_onBrowserRefresh();
    // ser_db_test();
  });

</script>

<template>

  <RouterView/>

</template>

