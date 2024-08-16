<!--
//  *   vue : 5b2b11cc-f727-408d-973a-993916120dc4
//  *
//  *   Project Name: "sacredgeometrysites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.16
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page (site) - footer
//  *   abbreviation: LPf
//  *
-->

<script setup lang="ts">
    // RootStore => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
    import { useRootStore } from '@rootStore/index.html-store';
    const RootStore = useRootStore();
</script>

<template>
  <footer class="LPf-footer">
    <div class="LPf-container">
      <p class="LPf-el T-LPf-el">{{RootStore.Copyright()}}</p>
      <!--<p class="LPf-el T-LPf-el">{{RootStore.ReleaseId()}}</p>-->
    </div>
  </footer>
</template>

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
