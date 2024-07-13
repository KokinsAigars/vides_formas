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

      <svg class="m_svg_tetrahedron"
           x="0px" y="0px" viewBox="0 0 480 480"
           style="user-select:none; overflow:hidden;" aria-hidden="true" focusable="false" role="img"
           xmlns="http://www.w3.org/2000/svg">
        <g>
          <line class="m_st_svg" x1="39.18" y1="269.15" x2="427.54" y2="449.13"/>
          <line class="m_st_svg" x1="39.18" y1="269.15" x2="302.24" y2="30.22"/>
          <line class="m_st_svg" x1="427.54" y1="449.13" x2="440" y2="105.43"/>
          <line class="m_st_svg" x1="302.24" y1="30.22" x2="440" y2="105.43"/>
          <line class="m_st_svg" x1="427.54" y1="449.13" x2="302.24" y2="30.22"/>
          <line class="m_st_svg" x1="440" y1="105.43" x2="39.18" y2="269.15"/>
        </g>
      </svg>

    </div>

    <div class="m_art_container" v-if="MENU_selected === '3d'">
      <canvas ref="ref_canvas"></canvas>
    </div>

    <div class="m_art_container" v-if="MENU_selected === 'image'">

      <div class="m_image T-m_image"><img v-bind:src="ref_image" alt="image_tetrahedron"></div>

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

      <div class="googleMapsContainer">
        <GoogleMap
            style="width: 100%; height: 100%"
            :map-id="map_id"
            :api-key="apiKey"
            version="3.55"
            :center="center"
            :zoom="7"
            :disableDefaultUi="true"
        >
          <Marker :options="{
              position: { lat: 57.0159213, lng: 21.5810198 },
              icon: svgMarker,
              title: 'Tetrahedron',
            }"
          >
<!--          <InfoWindow>-->
<!--            <h3 id="firstHeading" class="firstHeading">Tetrahedron</h3>-->
<!--          </InfoWindow>-->
        </Marker>

      </GoogleMap>
      </div>
    </div>

    <div class="m_art_container">
    </div>


  </div>




</template>



<script setup lang="ts">

import {onMounted, ref} from 'vue';


// RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
import { useRootStore } from '@rootStore/index.html-store';
const RootStore = useRootStore();

import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

const apiKey  = RootStore.mapAPI;
const map_id  = RootStore.mapStyleId;
const center = { lat: 56.927628, lng: 24.405436 }

const svgMarker = {
  path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
  fillColor: "blue",
  fillOpacity: 0.6,
  strokeWeight: 0,
  rotation: 0,
  scale: 1.5,
  // anchor: new google.maps.Point(0, 20),s
}

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
ref_image.value = 'img/tetrahedron001.jpg';

function fn_switch_image(number){
  try {
    const imageUrl = 'img/tetrahedron00' + number + '.jpg';
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
