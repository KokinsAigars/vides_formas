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


    </div>

    <div class="m_art_container" v-if="MENU_selected === 'map'">

      <GoogleMap
          :api-key="key"
          style="height: 30rem; width: 50rem;"
          :center="center"
          :zoom="7"
          :disableDefaultUi="true"
      >
        <Marker :options="{ position: { lat: 57.7582386, lng: 22.5969097 }}" >
          <InfoWindow>
            <h3 id="firstHeading" class="firstHeading">Octahedron</h3>
          </InfoWindow>
        </Marker>

      </GoogleMap>

    </div>

    <div class="m_art_container">

    </div>

  </div>

</template>



<script setup lang="ts">

import {onMounted, ref} from 'vue';


import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

const key = 'AIzaSyB14TR74Nym584RN4Yy6zcIN_AtZiw3-ew'
const center = { lat: 56.927628, lng: 24.405436 }

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
