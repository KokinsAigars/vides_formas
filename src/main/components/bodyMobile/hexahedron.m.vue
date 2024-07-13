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
            position: { lat: 56.5719081, lng: 23.0734866 },
            icon: svgMarker,
            title: 'Hexahedron',
             }"
          />

        </GoogleMap>
      </div>

    </div>

</div>

</template>

<!--v-bind:styles="MapStyle"-->
<!--:libraries="googleMapLibraries"-->
<!--@idle.once="onReady"-->

<script setup lang="ts">

  import {onBeforeMount, onMounted, ref} from 'vue';

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
  };

  //
  // const MapStyle = ref([
  //     { featureType: "all", elementType: "labels.text.fill", styles: [{saturation: 36}, {color: "#ffffff"}, {lightness: 40} ]},
  //     { featureType: "all", elementType: "labels.text.stroke", stylers: [{visibility: "off"}, {color: "#04187a"}, {lightness: 16} ]},
  // ])

  // },
  //
  //
  //
  //
  // {
  //   "requestContext": {
  //   "platformMetadata": {
  //     "platformType": "RIF"
  //   },
  //   "p2Metadata": {
  //     "feature": "features/1565661834259",
  //         "environment": "environments/production",
  //         "release": "releases/13feb174-08f8-31d2-be8f-e6d3326c7620",
  //         "extension": "extensions/map_styling"
  //   },
  //   "clientVersion": "pantheon.pangular_20240709.05_p4",
  //       "pagePath": "/google/maps-apis/studio/styles/:styleId/edit",
  //       "pageViewId": 1043533260046279,
  //       "trackingId": "d6970190737770401",
  //       "forcedExperimentIds": {
  //     "add": [],
  //         "remove": []
  //   },
  //   "backendOverrides": {},
  //   "clientSessionId": "4EDF1CDB-8C95-43C9-BC1D-8034B43C97B8",
  //       "projectId": "videsformas",
  //       "experimentFlagsBinary": "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"
  // },
  //   "operationName": "ListStyleSnapshots",
  //     "variables": {
  //   "parent": "projects/633823330129/clientStyles/7f92104c00468ce8"
  // }
  // }
  //
  //
  //
  //






  const MENU_selected = ref('');
  MENU_selected.value = "geometry";

  const fn_switch_items = (switchTo: string) => {
    MENU_selected.value = switchTo;
  }

</script>

<style lang="scss" src="./_formaStyleMobile.scss"/>
