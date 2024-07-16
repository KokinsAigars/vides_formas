<!--
//  *   ts : 6c8c7a9d-ce1f-45dc-9ca0-151f456f8df8
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.07.15
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page - header [.ts]
//  *   abbreviation: LPh
//  *   version: 2
//  *
-->

<template>

<!--  <div class="AuxiliaryLine0"></div><div class="AuxiliaryLine1"></div><div class="AuxiliaryLine2"></div>-->

  <header class="LPh-header">
    <div class="LPh-container">

      <div class="LPh-color"></div>

      <div class="LPh-Title T-h-Title">
        {{HEADER_TITLE}}
      </div>

      <div class="hb-c-right">
        <div class="hb-c-div">
          <select class="hb-c-select T-hb-c-select"
                  id="hb-c-select"
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

<script setup lang="ts">

  const ID = 'ts : 6c8c7a9d-ce1f-45dc-9ca0-151f456f8df8';

  import {ref} from 'vue';

  import {useRouter} from 'vue-router';
  const router = useRouter();

  const HEADER_TITLE = 'sacred geometry sites';

  const defaultValue = ref('');
  defaultValue.value = 'h'


  const temp = ref('');

  const fn_Select = (event: Event) => {

    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;

    if(temp.value === selectedValue) {
      return
    } else {
      try {
        router.push({path: '/' + selectedValue});
        temp.value = selectedValue;
      } catch (error) {
        console.error(error);
        console.error('Failed to navigate to ', selectedValue, ': ', ID);
      }
    }

  }


</script>

<style scoped lang="scss">

@import '@style/mixin.scss';

.AuxiliaryLine0{@include AuxL_Horizontal(40px);}

.LPh-header{
  top: 0;
  height: var(--LP-V-h-height); min-height: var(--LP-V-h-height); max-height: var(--LP-V-h-height);
  width: var(--V-screen-width); min-width: var(--V-screen-width); max-width: var(--V-screen-width);
  background-color: var(--C-background-color);
}
.LPh-container{
  height: var(--LP-V-h-height); min-height: var(--LP-V-h-height); max-height: var(--LP-V-h-height);
  width: var(--V-screen-width); min-width: var(--V-screen-width); max-width: var(--V-screen-width);
  //padding-right: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-shrink: 0;
  flex-grow: 0;
  background-color: transparent;

  @include for-size(600px) {
    padding-right: 0;
  }}

.LPh-color{
  left: 0;
  width: 5px;
  background: var(--LP-T-h_Title);

  @include for-size(750px) {
    display:none;
  }}

.LPh-Title{
  margin-left: 55px;
  padding-top: 10px;
  background: transparent;

  @include for-size(750px) {
    display:none;
  }}

.hb-c-right{
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
  //border: 1px solid transparent;//var(--LP-T-h_Title); //var(--C-T-app-h-search-line);
  //border-bottom: 1px solid var(--LP-T-h_Title);
  //border-radius: 5px;
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
.hb-c-select-o { background-color: var(--C-background-color); }
.hb-c-select:focus, .hb-c-select-o:focus {outline: none;}
*:focus {outline: none;}
input:focus {outline:none;}

.h_svg_hexahedron, .h_svg_tetrahedron, .h_svg_octahedron, .h_svg_dodekahedron, .h_svg_icosahedron {
  width: 30px;
  height: 30px;
  margin-left: 20px}

.h_st_svg{
  fill:none;
  stroke: #c122a9;//#5B5B5B;
  stroke-width: 5;
  stroke-linecap:round;
  stroke-linejoin:round;
  stroke-miterlimit:10;}


</style>
