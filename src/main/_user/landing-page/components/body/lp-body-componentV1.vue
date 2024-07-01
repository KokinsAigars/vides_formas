<!--
//  *   ts : 17f285cf-aff2-4726-bbb6-70d379fcbe23
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.07.01
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page - body
//  *   abbreviation: LPb
//  *   version: 1.0.0
//  *
-->

<template>
  <div class="LPb">
    <Hexahedron/>
<!--    <Tetrahedron/>-->
<!--    <Octahedron/>-->
<!--    <Dodekahedron/>-->
<!--    <Icosahedron/>-->
  </div>
</template>

<script setup lang="ts">
    // RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
    import { useRootStore } from '@rootStore/index.html-store';
    const RootStore = useRootStore();

    import Hexahedron from '@bodyComp/hexahedron.vue';
    import Tetrahedron from '@bodyComp/tetrahedron.vue';
    import Octahedron from '@bodyComp/octahedron.vue';
    import Dodekahedron from '@bodyComp/dodekahedron.vue';
    import Icosahedron from '@bodyComp/icosahedron.vue';


</script>

<style lang="scss" src="./lp-body-componentV1.scss"/>
