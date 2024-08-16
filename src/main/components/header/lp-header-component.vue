<!--
//  *   vue : 6c8c7a9d-ce1f-45dc-9ca0-151f456f8df8
//  *
//  *   Project Name: "sacredgeometrysites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.16
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page (site) - header
//  *   abbreviation: LPh
//  *   version: 2
//  *
-->

<script setup lang="ts">

  const ID = 'ts : 6c8c7a9d-ce1f-45dc-9ca0-151f456f8df8';

  import {onMounted, ref} from 'vue';
  import {useRouter} from 'vue-router';
  const router = useRouter();

  // RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
  import { useRootStore } from '@rootStore/index.html-store';
  const RootStore = useRootStore();

  const HEADER_TITLE = 'sacred geometry'; // sites
  const defaultValue = ref('');
  const temp = ref('');

  const fn_clearSelect = () => {
    defaultValue.value = '';
  }
  const fn_notSelected = () => {
    defaultValue.value = temp.value;
  }
  const fn_Select = (event: Event) => {
    // console.log(event);

    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;

    if(temp.value === selectedValue) return
    else {
      try {
        router.push({path: '/' + selectedValue});
        RootStore.changeUiMENU(selectedValue);
        temp.value = selectedValue;
      } catch (error) {
        console.error('An error occurred in fn_Select(): ', ID, error);
      }
    }

  }

  onMounted(() => {
    try {
      const activeForm = ''
      defaultValue.value = 'd';
      temp.value = activeForm;

    } catch (error) {
      console.error('An error occurred in onMounted(): ', ID, error);
    }


  })

</script>

<template>
<!--  <div class="AuxiliaryLine0"></div><div class="AuxiliaryLine1"></div><div class="AuxiliaryLine2"></div>-->

  <header class="LPh-header">
    <div class="LPh-container">

      <div class="LPh-Title T-h-Title">
        {{HEADER_TITLE}}
      </div>

      <div class="hb-c-right">
        <div class="hb-c-div">
          <select class="hb-c-select T-hb-c-select"
                  id="hb-c-select"
                  @mousedown="fn_clearSelect()"
                  @mouseup="fn_notSelected()"
                  @input="fn_Select($event)"
                  v-model="defaultValue">
            <option class="hb-c-select-o T-hb-c-select" value="h">Hexahedron</option>
            <option class="hb-c-select-o T-hb-c-select" value="t">Tetrahedron</option>
            <option class="hb-c-select-o T-hb-c-select" value="o">Octahedron</option>
            <option class="hb-c-select-o T-hb-c-select" value="d">Dodekahedron</option>
            <option class="hb-c-select-o T-hb-c-select" value="i">Icosahedron</option>
          </select>
        </div>
      </div>

    </div>
  </header>

</template>

<style lang="scss" src="./_formaStyleHeader.scss"/>
