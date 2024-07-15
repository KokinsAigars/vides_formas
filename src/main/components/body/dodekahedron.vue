<!--
//  *   ts :
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.07.15
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page - body - components - Dodekahedron
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
                @click="fn_switch_items('image')"
                @contextmenu.prevent="fn_switch_items('image')">image
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
      <svg class="m_svg_dodekahedron" v-if="MENU_selected === 'geometry'"
           x="0px" y="0px" viewBox="0 0 480 480"
           style="user-select:none; overflow:hidden;" aria-hidden="true" focusable="false" role="img"
           xmlns="http://www.w3.org/2000/svg">
        <g>
          <line class="m_st_svg" x1="443.02" y1="262.38" x2="443.02" y2="125.89"/>
          <line class="m_st_svg" x1="316.34" y1="249.71" x2="443.02" y2="262.38"/>
          <line class="m_st_svg" x1="443.02" y1="262.38" x2="414.3" y2="394.2"/>
          <line class="m_st_svg" x1="443.02" y1="125.89" x2="316.34" y2="28.85"/>
          <line class="m_st_svg" x1="414.3" y1="173.35" x2="443.02" y2="125.89"/>
          <line class="m_st_svg" x1="36.16" y1="353.46" x2="36.16" y2="216.97"/>
          <line class="m_st_svg" x1="269.86" y1="463" x2="209.32" y2="373.7"/>
          <line class="m_st_svg" x1="36.16" y1="353.46" x2="162.84" y2="450.49"/>
          <line class="m_st_svg" x1="64.89" y1="306" x2="36.16" y2="353.46"/>
          <line class="m_st_svg" x1="209.32" y1="373.7" x2="64.89" y2="306"/>
          <line class="m_st_svg" x1="82.64" y1="140.17" x2="64.89" y2="306"/>
          <line class="m_st_svg" x1="238.05" y1="105.38" x2="316.34" y2="249.71"/>
          <line class="m_st_svg" x1="209.32" y1="373.7" x2="316.34" y2="249.71"/>
          <line class="m_st_svg" x1="36.16" y1="216.97" x2="64.89" y2="85.14"/>
          <line class="m_st_svg" x1="162.84" y1="229.64" x2="36.16" y2="216.97"/>
          <line class="m_st_svg" x1="209.32" y1="16.35" x2="269.86" y2="105.65"/>
          <line class="m_st_svg" x1="162.84" y1="450.49" x2="241.14" y2="373.97"/>
          <line class="m_st_svg" x1="162.84" y1="450.49" x2="269.86" y2="463"/>
          <line class="m_st_svg" x1="414.3" y1="394.2" x2="269.86" y2="463"/>
          <line class="m_st_svg" x1="414.3" y1="394.2" x2="396.54" y2="339.18"/>
          <line class="m_st_svg" x1="82.64" y1="140.17" x2="238.05" y2="105.38"/>
          <line class="m_st_svg" x1="64.89" y1="85.14" x2="82.64" y2="140.17"/>
          <line class="m_st_svg" x1="209.32" y1="16.35" x2="64.89" y2="85.14"/>
          <line class="m_st_svg" x1="209.32" y1="16.35" x2="316.34" y2="28.85"/>
          <line class="m_st_svg" x1="316.34" y1="28.85" x2="238.05" y2="105.38"/>
          <line class="m_st_svg" x1="162.84" y1="229.64" x2="269.86" y2="105.65"/>
          <line class="m_st_svg" x1="241.14" y1="373.97" x2="162.84" y2="229.64"/>
          <line class="m_st_svg" x1="396.54" y1="339.18" x2="241.14" y2="373.97"/>
          <line class="m_st_svg" x1="396.54" y1="339.18" x2="414.3" y2="173.35"/>
          <line class="m_st_svg" x1="414.3" y1="173.35" x2="269.86" y2="105.65"/>
        </g>
      </svg>
      <img class="m_image T-m_image" v-if="MENU_selected === 'image'" v-bind:src="ref_image" alt="image_dodekahedron">
      <div class="googleMapsContainer" v-if="MENU_selected === 'map'">
        <GoogleMap
            style="width: 100%; height: 100%"
            :map-id="map_id"
            :api-key="apiKey"
            version="3.55"
            :center="center"
            :zoom="zoom"
            :disableDefaultUi="true"
        >
          <Marker :options="{
            position: { lat: 56.5454149, lng: 27.8855629 },
            icon: svgMarker,
            title: 'Dodekahedron',
             }"
          />
        </GoogleMap>
        <div class="GPS-container T-GPS">
          <a class="GPS T-GPS"
             href="https://www.google.com/maps/place/56%C2%B032'43.5%22N+27%C2%B053'08.1%22E/@56.8242139,26.7347303,9z/data=!4m4!3m3!8m2!3d56.5454167!4d27.8855833?entry=ttu">
            56°32'43.5"N 27°53'08.1"E
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

  const svgMarker = {
    path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
    // anchor: new google.maps.Point(0, 20),s
  };


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
  ref_image.value = 'img/dodekahedron001.jpg';

  function fn_switch_image(number){
    try {
      const imageUrl = 'img/dodekahedron00' + number + '.jpg';
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
