<!--
//  *   vue : c4cf3822-2e11-482c-8244-55b197a85a7f
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.08.01
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page - body - component
//  *   [Hexahedron]
//  *
//  *   abbreviations
//  *   - body : b
//  *   - container : cnn
//  *   - menu : m
//  *   - object : o
//  *   - button : btn
-->

<template>
  <div class="b-cnn">

    <!--MENU-->
    <div class="m-cnn">

      <div class="m-items">

        <button class="m-btn T-switch" role="button" type="button"
                v-bind:class = "(m_select === '3D')?'m-btn-active':''"
                @click="fn_switch_items('geometry')"
                @contextmenu.prevent="fn_switch_items('geometry')">geometry
        </button>

      </div>

      <div class="m-items m-items2">

        <button class="m-btn T-switch" role="button" type="button"
                v-bind:class = "(m_select === '3D')?'m-btn-active':''"
                @click="fn_switch_items('map')"
                @contextmenu.prevent="fn_switch_items('map')">map
        </button>

      </div>

    </div>

    <!--OBJECT-->
    <div class="o-cnn">

      <div class="o-svg-cnn" v-if="m_select === 'geometry'">

        <svg class="svg-static"
             x="0px" y="0px" viewBox="0 0 480 480"
             aria-hidden="true" focusable="false" role="img">

          <g>
            <line class="svg-static-st1" x1="450" y1="82.17" x2="190.12" y2="7.35"/>
            <line class="svg-static-st1" x1="450" y1="82.17" x2="450" y2="343.18"/>
            <line class="svg-static-st1" x1="190.12" y1="268.36" x2="450" y2="343.18"/>
            <line class="svg-static-st1" x1="190.12" y1="7.35" x2="190.12" y2="268.36"/>
            <line class="svg-static-st1" x1="299.06" y1="210.99" x2="450" y2="82.17"/>
            <line class="svg-static-st1" x1="299.06" y1="210.99" x2="299.06" y2="472"/>
            <line class="svg-static-st1" x1="450" y1="343.18" x2="299.06" y2="472"/>
            <line class="svg-static-st1" x1="190.12" y1="7.35" x2="39.18" y2="136.17"/>
            <line class="svg-static-st1" x1="39.18" y1="397.18" x2="190.12" y2="268.36"/>
            <line class="svg-static-st1" x1="39.18" y1="136.17" x2="299.06" y2="210.99"/>
            <line class="svg-static-st1" x1="39.18" y1="136.17" x2="39.18" y2="397.18"/>
            <line class="svg-static-st1" x1="299.06" y1="472" x2="39.18" y2="397.18"/>
          </g>

        </svg>
      </div>

      <div class="o-map-cnn" v-if="m_select === 'map'">

        <GoogleMap
            style="width: 100%; height: 100%"
            :map-id="map_id"
            :api-key="p"
            version="3.55"
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

        <div class="gps-cnn">
          <a class="gps T-GPS"
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

  const p = RootStore.constructed();
  const map_id  = RootStore.mapStyleId;
  const center = { lat: 56.927628, lng: 24.372477 };
  const zoom  = 7;
  const version = 3.55;
  //const version = 3.47; //IE supported version


  const svgMarker = {
    path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
  };

  const m_select = ref('');
  m_select.value = "geometry";

  const fn_switch_items = (switchTo: string) => {
    m_select.value = switchTo;
  }

</script>

<style lang="scss" src="./_formaStyleBody.scss"/>
