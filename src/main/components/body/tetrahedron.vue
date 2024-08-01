<!--
//  *   vue : 566071e3-9694-4511-bc7e-da9f408d86d6
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.08.01
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page - body - component
//  *   [Tetrahedron]
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
            <line class="svg-static-st1" x1="39.18" y1="269.15" x2="427.54" y2="449.13"/>
            <line class="svg-static-st1" x1="39.18" y1="269.15" x2="302.24" y2="30.22"/>
            <line class="svg-static-st1" x1="427.54" y1="449.13" x2="440" y2="105.43"/>
            <line class="svg-static-st1" x1="302.24" y1="30.22" x2="440" y2="105.43"/>
            <line class="svg-static-st1" x1="427.54" y1="449.13" x2="302.24" y2="30.22"/>
            <line class="svg-static-st1" x1="440" y1="105.43" x2="39.18" y2="269.15"/>
          </g>

        </svg>

      </div>

      <div class="o-image-cnn" v-if="m_select === 'image'">

        <img class="o-image" v-bind:src="ref_image" alt="image_tetrahedron">

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
              position: { lat: 57.0159213, lng: 21.5810198 },
              icon: svgMarker,
              title: 'Tetrahedron',
            }"
          />

        </GoogleMap>

        <div class="gps-cnn">
          <a class="gps T-GPS"
             href="https://www.google.com/maps/place/57%C2%B000'57.4%22N+21%C2%B034'51.1%22E/@57.0159448,21.5759791,792m/data=!3m1!1e3!4m13!1m8!3m7!1s0x46f0246a071254b7:0x29e13b1cdc62efa0!2sAlsunga,+Alsungas+pagasts,+Kuld%C4%ABga+Municipality,+LV-3306!3b1!8m2!3d56.9819676!4d21.5664811!16s%2Fm%2F02qm3xz!3m3!8m2!3d57.0159444!4d21.5808611?entry=ttu">
            57°00'57.4"N 21°34'51.1"E
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
    // anchor: new google.maps.Point(0, 20),s
  }

  const m_select = ref('');
  m_select.value = "geometry";

  const fn_switch_items = (switchTo: string) => {
    m_select.value = switchTo;
  }

  const ref_image = ref('');
  ref_image.value = 'img/tetrahedron/t01.jpg';

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

<style lang="scss" src="./_formaStyleBody.scss"/>
