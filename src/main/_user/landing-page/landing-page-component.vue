<!-- 
//  *   ts : 909c371e-652b-45a3-ac7d-ec3a65c2ff8c
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.06.29
//  *   Contributor(s): Aigars Kokins
//  *	 
//  *   Landing page  [.ts]
//  *   abbreviation: LP
//  *
-->

<template>
  <div class="LP-Layout">
    <HeaderComponent/>
    <BodyComponent/>
    <FooterComponent/>
  </div>
</template>

<script setup lang="ts">

  import HeaderComponent  from '@landing_page/components/header/lp-header-componentV2.vue';
  import BodyComponent    from '@landing_page/components/body/lp-body-componentV1.vue';
  import FooterComponent  from '@landing_page/components/footer/lp-footer-componentV2.vue';
  //
  // if (localStorage.getItem('UserStore')) {
  //   localStorage.removeItem('UserStore');
  // }
  
</script>


<style>
html, body {
    overflow-x: hidden;
    overflow-y: auto !important;}
</style>

<style scoped lang="scss">

</style>

