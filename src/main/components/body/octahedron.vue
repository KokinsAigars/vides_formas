<!--
//  *   ts :
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.07.15
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page - body - components - Octahedron
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
      <svg class="m_svg_octahedron" v-if="MENU_selected === 'geometry'"
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
            position: { lat: 57.7582386, lng: 22.5969097 },
            icon: svgMarker,
            title: 'Octahedron',
             }"
          />
        </GoogleMap>
        <div class="GPS-container T-GPS">
          <a class="GPS T-GPS"
             href="https://www.google.com/maps/place/57%C2%B045'29.7%22N+22%C2%B035'48.3%22E/@56.9898973,23.2136148,8z/data=!4m4!3m3!8m2!3d57.75825!4d22.59675?entry=ttu">
            57°45'29.7"N 22°35'48.3"E
          </a>
        </div>
      </div>
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
    // anchor: new google.maps.Point(0, 20),s
  }

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
