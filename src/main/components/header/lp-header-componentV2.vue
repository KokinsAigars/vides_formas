<!--
//  *   ts : 6c8c7a9d-ce1f-45dc-9ca0-151f456f8df8
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.07.02
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page - header [.ts]
//  *   abbreviation: LPh
//  *   version: 2
//  *
-->

<template>

  <header class="LPh-header">
    <div class="LPh-container">

      <div class="hb-c">

<!--        <div class="hb-c-select T-hb-c-select">Vietas Latvijā</div>-->

        <div class="hb-c-div">
          <select class="hb-c-select T-hb-c-select" id="hb-c-select"
              v-model="MENU_selected"
              @click="MENU_fn_Change(MENU_selected)">

            <option class="hb-c-select-o T-hb-c-select" value="Hexahedron">Hexahedron</option>
            <option class="hb-c-select-o T-hb-c-select" value="Tetrahedron">Tetrahedron</option>
            <option class="hb-c-select-o T-hb-c-select" value="Octahedron">Octahedron</option>
            <option class="hb-c-select-o T-hb-c-select" value="Dodekahedron">Dodekahedron</option>
            <option class="hb-c-select-o T-hb-c-select" value="Icosahedron">Icosahedron</option>

          </select>
        </div>
      </div>

    </div>
  </header>

</template>

<script setup lang="ts">

import {onMounted, ref } from 'vue';

  import {useRouter} from 'vue-router';
  const router = useRouter();

  // localization // => ts : aa82b725-d29a-4717-9812-ea128c49d907
  //import i18n from '@locale/index'

  // RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
  import {useRootStore} from '@rootStore/index.html-store';
  const RootStore = useRootStore();

  const ID = 'ts : 6c8c7a9d-ce1f-45dc-9ca0-151f456f8df8';

  import {RefreshService} from "@services/refresh.service";

  const isDesktop = ref(true);
  const isMobile = ref(false);

  // MENU
  const MENU_selected = ref('');
  MENU_selected.value = "Hexahedron";

  const MENU_fn_Change = (value: string) => {
    MENU_selected.value = value;

    try {
      if (window.innerWidth < 800){
        router.push({name: value + 'Mobile'});
        // console.log(window.innerWidth, 'Mobile');
      }
      else {
        router.push({name: value});
        // console.log(window.innerWidth, 'Desktop');
      }

    } catch (error) {
        console.error(error);
        console.error('Failed to navigate to ', value, ': ', ID);
      }
  }


</script>

<style scoped lang="scss">

@import '@style/mixin.scss';

.LPh-header{
  top: 0;
  height: var(--LP-V-h-height); min-height: var(--LP-V-h-height); max-height: var(--LP-V-h-height);
  width: var(--V-screen-width); min-width: var(--V-screen-width); max-width: var(--V-screen-width);
  background-color: var(--C-background-color);
}
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
  background-color: transparent;
}

.LPh-products{
  display: flex;
  justify-content: right;
  flex: 1;
  margin-left: auto;
  background-color: transparent;
}

.hc2-user-text-s{
  height: 40px;
  margin-right: 16px;
  background-color: transparent;
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
}

.LPh-signin-text, .hc2-user-text-options{
  margin-top: 7px;
  margin-left: 16px;
  margin-right: 16px;
  background-color: transparent;
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
}

.hb-c{
  margin-left: auto;
  display: flex;
  justify-content: right;
  height: 48px; min-height: 48px; max-height: 48px;
  margin-top: 9px;
  margin-right: 15px;
  background-color: transparent;
}

.hb-c-div{
  display: flex;
  text-decoration: none;
  background-color: transparent;
  border: 1px solid var(--C-T-app-h-search-line);
  border-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
  overflow: hidden !important;
  cursor: pointer;
}

.hb-c-select {
  background-color: transparent;
  border: 0;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 3px;
}

.hb-c-select-o{
  background-color: var(--C-app-h-bg);
}

.hb-c-select:focus, .hb-c-select-o:focus {
  outline: none;
}

*:focus {
  outline: none;
}

input:focus {
  outline:none;
}

</style>
