<!--
//  *   vue : 507bc6bc-b152-4adc-a92f-6b96d8987c6f
//  *
//  *   Project Name: "Sacred Geometry Sites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.18
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
  import { RefreshService } from '@/_services/refresh.service';

  // Services //=> ts : 3077efdc-d524-44c3-ad8f-e9106bb97c8a
  import { browserCompactabilityService } from '@services/browser.service';

  onMounted(() => {
    RefreshService();
    browserCompactabilityService();
  });

</script>

<template>
  <RouterView/>
</template>

