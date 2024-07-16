<!--
//  *   ts :
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.07.15
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page - body - components - Hexahedron
//  *   version: 1.0.0
//  *
-->

<template>
  <div class="m_container">

    <!--MENU-->
    <div class="m_switch-container">
      <div class="m_sw-items">
        <button class="m_swit_btn T-switch" id="btn1" role="button" type="button" aria-hidden="true"
                @click="fn_switch_items('geometry')"
                @contextmenu.prevent="fn_switch_items('geometry')">geometry
        </button>
      </div>
      <div class="m_sw-items m_switch-items-second">
        <button class="m_swit_btn T-switch" id="btn1" role="button" type="button" aria-hidden="true"
                @click="fn_switch_items('map')"
                @contextmenu.prevent="fn_switch_items('map')">map
        </button>
      </div>
    </div>

    <!--OBJECT-->
    <div class="m_art_container">
      <svg class="m_svg_hexahedron" v-if="MENU_selected === 'geometry'"
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
      <div class="googleMapsContainer" v-if="MENU_selected === 'map'">
        <GoogleMap
            style="width: 100%; height: 100%"
            :map-id="map_id"
            :api-key="apiKey"
            version="version"
            :center="center"
            :zoom="zoom"
            :disableDefaultUi="true"
        >
          <Marker :options="{
            position: { lat: 56.5719081, lng: 23.0734866 },
            icon: svgMarker,
            title: 'Hexahedron',
             }"
          />

        </GoogleMap>
        <div class="GPS-container T-GPS">
          <a class="GPS T-GPS"
             href="https://www.google.com/maps/place//@56.571917,23.0735,14z/data=!4m2!3m1!1s0x0:0x40f9edc407a559ce?entry=s&sa=X">
            56°34'18.9"N 23°04'24.6"E
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

  import {onBeforeMount, onMounted, ref} from 'vue';

  // RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
  import { useRootStore } from '@rootStore/index.html-store';
  const RootStore = useRootStore();

  import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

  const apiKey  = RootStore.mapAPI;
  const map_id  = RootStore.mapStyleId;
  const center = { lat: 56.927628, lng: 24.372477 };
  const zoom  = 7;
  // const version = 3.55;
  const version = 3.47; //IE supported version


  const svgMarker = {
    path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
  };

  const MENU_selected = ref('');
  MENU_selected.value = "geometry";

  const fn_switch_items = (switchTo: string) => {
    MENU_selected.value = switchTo;
  }

</script>

<style lang="scss" src="./_formaStyleMobile.scss"/>
