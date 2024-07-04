<!--
//  *   ts :
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.07.01
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page - body - components - Tetrahedron
//  *   version: 1.0.0
//  *
-->

<template>

  <div class="div_container">

    <div class="image-container">
      <svg class="cls_svg_tetrahedron"
           x="0px" y="0px" viewBox="0 0 480 480"
           style="user-select:none; overflow:hidden;" aria-hidden="true" focusable="false" role="img"
           xmlns="http://www.w3.org/2000/svg">
        <g>
          <line class="st_svg_hex" x1="39.18" y1="269.15" x2="427.54" y2="449.13"/>
          <line class="st_svg_hex" x1="39.18" y1="269.15" x2="302.24" y2="30.22"/>
          <line class="st_svg_hex" x1="427.54" y1="449.13" x2="440" y2="105.43"/>
          <line class="st_svg_hex" x1="302.24" y1="30.22" x2="440" y2="105.43"/>
          <line class="st_svg_hex" x1="427.54" y1="449.13" x2="302.24" y2="30.22"/>
          <line class="st_svg_hex" x1="440" y1="105.43" x2="39.18" y2="269.15"/>
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

        <div v-if="MENU_selected === 'map'">57°00'57.4"N 21°34'51.1"E</div>
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
