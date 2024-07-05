<!--
//  *   ts :
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.07.01
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page - body - components - Octahedron
//  *   version: 1.0.0
//  *
-->

<template>

  <div class="m_container">

    <div class="m_switch-container">

      <div class="m_sw-items">
        <button class="m_swit_btn T-switch" id="btn1" role="button" type="button" aria-hidden="true"
                @click="fn_switch_items('geometry')"
                @contextmenu.prevent="fn_switch_items('geometry')">geometry
        </button>
      </div>

<!--      <div class="m_sw-items m_switch-items-second">-->
<!--        <button class="m_swit_btn T-switch" id="btn1" role="button" type="button" aria-hidden="true"-->
<!--                @click="fn_switch_items('image')"-->
<!--                @contextmenu.prevent="fn_switch_items('image')">image-->
<!--        </button>-->
<!--      </div>-->

      <div class="m_sw-items m_switch-items-second">
        <button class="m_swit_btn T-switch" id="btn1" role="button" type="button" aria-hidden="true"
                @click="fn_switch_items('map')"
                @contextmenu.prevent="fn_switch_items('map')">map
        </button>
      </div>
    </div>

    <div class="m_art_container" v-if="MENU_selected === 'geometry'">

      <svg class="m_svg_octahedron"
           x="0px" y="0px" viewBox="0 0 480 480"
           style="user-select:none; overflow:hidden;" aria-hidden="true" focusable="false" role="img"
           xmlns="http://www.w3.org/2000/svg">
        <g>
          <line class="m_st_svg" x1="239.59" y1="438.97" x2="464" y2="260.5"/>
          <line class="m_st_svg" x1="464" y1="260.5" x2="282.21" y2="130.03"/>
          <line class="m_st_svg" x1="15.18" y1="218.85" x2="282.21" y2="130.03"/>
          <line class="m_st_svg" x1="239.59" y1="40.38" x2="282.21" y2="130.03"/>
          <line class="m_st_svg" x1="464" y1="260.5" x2="196.97" y2="349.32"/>
          <line class="m_st_svg" x1="464" y1="260.5" x2="239.59" y2="40.38"/>
          <line class="m_st_svg" x1="239.59" y1="40.38" x2="196.97" y2="349.32"/>
          <line class="m_st_svg" x1="15.18" y1="218.85" x2="196.97" y2="349.32"/>
          <line class="m_st_svg" x1="15.18" y1="218.85" x2="239.59" y2="40.38"/>
          <line class="m_st_svg" x1="196.97" y1="349.32" x2="239.59" y2="438.97"/>
          <line class="m_st_svg" x1="282.21" y1="130.03" x2="239.59" y2="438.97"/>
          <line class="m_st_svg" x1="239.59" y1="438.97" x2="15.18" y2="218.85"/>
        </g>
      </svg>

    </div>

    <div class="m_art_container" v-if="MENU_selected === '3d'">
      <canvas ref="ref_canvas"></canvas>
    </div>

    <div class="m_art_container" v-if="MENU_selected === 'image'">

      <div class="m_image T-m_image"><img v-bind:src="ref_image" alt="image_octahedron"></div>

<!--      <div class="m_image-switch-container">-->
<!--        <ul class="m_image-switch-ul">-->

<!--          <li class="m_image-switch-li">-->
<!--            <button class="m_swit_btn T-switch-image" id="btn1" role="button" type="button" aria-hidden="true"-->
<!--                    @click="fn_switch_image(1)"-->
<!--                    @contextmenu.prevent="fn_switch_image(1)">1.,-->
<!--            </button>-->
<!--          </li>-->

<!--          <li class="m_image-switch-li">-->
<!--            <button class="m_swit_btn T-switch-image" id="btn1" role="button" type="button" aria-hidden="true"-->
<!--                    @click="fn_switch_image(2)"-->
<!--                    @contextmenu.prevent="fn_switch_image(2)">2.,-->
<!--            </button>-->
<!--          </li>-->

          <!--          <li class="m_image-switch-li">-->
          <!--            <button class="m_swit_btn T-switch-image" id="btn1" role="button" type="button" aria-hidden="true"-->
          <!--                    @click="fn_switch_image(3)"-->
          <!--                    @contextmenu.prevent="fn_switch_image(3)">3.-->
          <!--            </button>-->
          <!--          </li>-->

<!--        </ul>-->
<!--      </div>-->

    </div>

    <div class="m_art_container" v-if="MENU_selected === 'map'">
      <div class="m_image"><img v-bind:src="ref_image_karte" alt="map_forms_LV"></div>
      <div class="m_text-space-vertical T-text-space">Octahedron: 57°45'29.7"N, 22°35'48.3"E</div>
    </div>

    <div class="m_art_container">

      <div class="m_text-space-horizontal T-text-space">

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
    </div>

  </div>

</template>



<script setup lang="ts">

import {onMounted, ref} from 'vue';

const isMobile = ref(false);
const isDesktop = ref(true);

const ref_image_karte = ref('');
ref_image_karte.value = 'img/map.jpg';

const MENU_selected = ref('');
MENU_selected.value = "geometry";

const fn_switch_items = (switchTo: string) => {
  MENU_selected.value = switchTo;
}

const ref_image = ref('');
ref_image.value = 'img/octahedron001.jpg';

function fn_switch_image(number){
  try {
    const imageUrl = 'img/octahedron00' + number + '.jpg';
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      this.ref_image = imageUrl;
    };

    img.onerror = () => {
      return null;
    };
  } catch (error) {
    return null;
  }
}

</script>

<style lang="scss" src="./_formaStyleMobile.scss"/>
