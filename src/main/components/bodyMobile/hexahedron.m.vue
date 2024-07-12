<!--
//  *   ts :
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.07.04
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page - body - components - Hexahedron
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

        <svg class="m_svg_hexahedron"
           x="0px" y="0px" viewBox="0 0 480 480"
           style="user-select:none; overflow:hidden;" aria-hidden="true" focusable="false" role="img"
           xmlns="http://www.w3.org/2000/svg">
          <g>
            <line class="m_st_svg" x1="450" y1="82.17" x2="190.12" y2="7.35"/>
            <line class="m_st_svg" x1="450" y1="82.17" x2="450" y2="343.18"/>
            <line class="m_st_svg" x1="190.12" y1="268.36" x2="450" y2="343.18"/>
            <line class="m_st_svg" x1="190.12" y1="7.35" x2="190.12" y2="268.36"/>
            <line class="m_st_svg" x1="299.06" y1="210.99" x2="450" y2="82.17"/>
            <line class="m_st_svg" x1="299.06" y1="210.99" x2="299.06" y2="472"/>
            <line class="m_st_svg" x1="450" y1="343.18" x2="299.06" y2="472"/>
            <line class="m_st_svg" x1="190.12" y1="7.35" x2="39.18" y2="136.17"/>
            <line class="m_st_svg" x1="39.18" y1="397.18" x2="190.12" y2="268.36"/>
            <line class="m_st_svg" x1="39.18" y1="136.17" x2="299.06" y2="210.99"/>
            <line class="m_st_svg" x1="39.18" y1="136.17" x2="39.18" y2="397.18"/>
            <line class="m_st_svg" x1="299.06" y1="472" x2="39.18" y2="397.18"/>
          </g>
        </svg>

    </div>

    <div class="m_art_container" v-if="MENU_selected === '3d'">
      <canvas ref="ref_canvas"></canvas>
    </div>

    <div class="m_art_container" v-if="MENU_selected === 'image'">

<!--      <div class="m_image T-m_image"><img v-bind:src="ref_image" alt="image_hexahedron"></div>-->

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

      <GoogleMap
          :api-key="key"
          style="height: 30rem; width: 50rem;"
          :center="center"
          :zoom="7"
          :disableDefaultUi="true"
      >

        <Marker :options="{ position: { lat: 56.5719081, lng: 23.0734866 }}" >
          <InfoWindow>
              <h3 id="firstHeading" class="firstHeading">Hexahedron</h3>
          </InfoWindow>
        </Marker>

      </GoogleMap>

    </div>

</div>

</template>


<script setup lang="ts">

import {onBeforeMount, onMounted, ref} from 'vue';

import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

const key = 'AIzaSyB14TR74Nym584RN4Yy6zcIN_AtZiw3-ew'
const center = { lat: 56.927628, lng: 24.405436 }

  const MENU_selected = ref('');
  MENU_selected.value = "geometry";

  const fn_switch_items = (switchTo: string) => {
    MENU_selected.value = switchTo;
  }

</script>

<style lang="scss" src="./_formaStyleMobile.scss"/>
