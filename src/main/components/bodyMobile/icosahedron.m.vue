<!--
//  *   ts :
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.07.01
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page - body - components - Icosahedron
//  *   version: 1.0.0
//  *
-->

<template>

  <div class="div_container">

    <div class="image-container">
      <svg class="cls_svg_icosahedron"
           x="0px" y="0px" viewBox="0 0 480 480"
           style="user-select:none; overflow:hidden;" aria-hidden="true" focusable="false" role="img"
           xmlns="http://www.w3.org/2000/svg">
        <g>
          <line class="st_svg_hex" x1="316.51" y1="452.49" x2="162.69" y2="352.6"/>
          <line class="st_svg_hex" x1="162.69" y1="352.6" x2="90.79" y2="407.91"/>
          <line class="st_svg_hex" x1="23.19" y1="200.63" x2="162.69" y2="352.6"/>
          <line class="st_svg_hex" x1="90.79" y1="407.91" x2="316.51" y2="452.49"/>
          <line class="st_svg_hex" x1="23.18" y1="200.62" x2="90.79" y2="206.58"/>
          <line class="st_svg_hex" x1="23.18" y1="200.63" x2="90.79" y2="407.91"/>
          <line class="st_svg_hex" x1="90.79" y1="407.91" x2="272.09" y2="362.26"/>
          <line class="st_svg_hex" x1="90.79" y1="407.91" x2="90.8" y2="206.59"/>
          <line class="st_svg_hex" x1="316.51" y1="126.75" x2="272.08" y2="362.24"/>
          <line class="st_svg_hex" x1="316.51" y1="126.75" x2="90.8" y2="206.59"/>
          <line class="st_svg_hex" x1="272.08" y1="362.24" x2="90.8" y2="206.59"/>
          <line class="st_svg_hex" x1="207.12" y1="117.08" x2="388.38" y2="71.42"/>
          <line class="st_svg_hex" x1="162.69" y1="26.86" x2="23.18" y2="200.62"/>
          <line class="st_svg_hex" x1="162.69" y1="26.86" x2="207.11" y2="117.08"/>
          <line class="st_svg_hex" x1="207.11" y1="117.08" x2="23.19" y2="200.63"/>
          <line class="st_svg_hex" x1="207.12" y1="117.08" x2="162.69" y2="352.6"/>
          <line class="st_svg_hex" x1="316.51" y1="126.75" x2="162.69" y2="26.86"/>
          <line class="st_svg_hex" x1="90.79" y1="206.58" x2="162.69" y2="26.86"/>
          <line class="st_svg_hex" x1="388.39" y1="71.43" x2="388.39" y2="272.74"/>
          <line class="st_svg_hex" x1="388.39" y1="71.42" x2="316.51" y2="126.75"/>
          <line class="st_svg_hex" x1="388.38" y1="71.42" x2="162.69" y2="26.86"/>
          <line class="st_svg_hex" x1="456" y1="278.72" x2="388.39" y2="272.74"/>
          <line class="st_svg_hex" x1="456" y1="278.71" x2="388.39" y2="71.43"/>
          <line class="st_svg_hex" x1="456" y1="278.71" x2="316.51" y2="126.75"/>
          <line class="st_svg_hex" x1="272.09" y1="362.26" x2="456" y2="278.71"/>
          <line class="st_svg_hex" x1="162.69" y1="352.6" x2="388.39" y2="272.75"/>
          <line class="st_svg_hex" x1="388.39" y1="272.75" x2="207.12" y2="117.08"/>
          <line class="st_svg_hex" x1="388.39" y1="272.75" x2="316.51" y2="452.49"/>
          <line class="st_svg_hex" x1="316.51" y1="452.49" x2="456" y2="278.72"/>
          <line class="st_svg_hex" x1="272.09" y1="362.26" x2="316.51" y2="452.49"/>
        </g>
      </svg>
    </div>

    <div class="text-container">

      <!--switch-container-->
      <div class="switch-container">
        <div class="switch-items">
          <button class="btn_swi T-switch" id="btn1" role="button" type="button" aria-hidden="true"
                  @click="fn_switch_items('geometry')"
                  @contextmenu.prevent="fn_switch_items('geometry')">geometry
          </button>
        </div>

        <div class="switch-items si-b">
          <button class="btn_swi T-switch" id="btn1" role="button" type="button" aria-hidden="true"
                  @click="fn_switch_items('image')"
                  @contextmenu.prevent="fn_switch_items('image')">image
          </button>
        </div>

        <div class="switch-items si-b">
          <button class="btn_swi T-switch" id="btn1" role="button" type="button" aria-hidden="true"
                  @click="fn_switch_items('map')"
                  @contextmenu.prevent="fn_switch_items('map')">map
          </button>
        </div>
      </div>

      <div class="text-space T-text-space">

        <div v-if="MENU_selected === 'geometry'">

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim id laborum nulla ullam? Animi
          asperiores atque consectetur cupiditate, esse facere fugit impedit laudantium mollitia qui, repellat rerum
          similique velit.
          A amet distinctio dolor dolore earum, eos eum expedita id ipsum nulla officia pariatur perferendis quae
          quibusdam quidem quisquam reprehenderit saepe tempora. Blanditiis iure libero modi necessitatibus quibusdam
          suscipit voluptatum.
          Ab autem beatae blanditiis corporis cum deleniti dignissimos distinctio earum harum impedit inventore,
          minus mollitia necessitatibus nihil numquam odit omnis possimus provident quibusdam quisquam quos saepe
          soluta voluptas voluptate voluptatibus?
          Aliquid amet architecto aspernatur, debitis dicta esse illo iusto nihil non optio perferendis quae
          quaerat quia recusandae rem reprehenderit sapiente, sint veniam. A debitis deserunt libero modi pariatur
          velit veniam?
          Ab alias corporis, doloribus eius in labore magnam maxime necessitatibus officia porro sed similique
          veniam! Architecto aut pariatur quasi quis repellat. Aliquam delectus deleniti explicabo facere laborum?
          Asperiores culpa, repellat!

        </div>

        <div v-if="MENU_selected === 'image'"></div>

        <div v-if="MENU_selected === 'map'">57°52'18.5"N 25°00'20.7"E</div>
      </div>

    </div>

  </div>

</template>



<script setup lang="ts">

import {ref} from 'vue';

const MENU_selected = ref('');
MENU_selected.value = "geometry";

const fn_switch_items = (switchTo: string) => {
  MENU_selected.value = switchTo;
}

</script>

<style lang="scss" src="./_formaStyleMobile.scss"/>
