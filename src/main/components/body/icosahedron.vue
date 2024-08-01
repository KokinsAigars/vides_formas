<!--
//  *   vue : 5a1b85c2-8935-4562-b817-aabe48a3ca95
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.08.01
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page - body - component
//  *   [Icosahedron]
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

    <!-- MENU buttons -->
    <div class="m-cnn">

      <div class="m-items">

        <button class="m-btn T-switch" role="button" type="button"
                v-bind:class = "(m_select === 'geometry')?'m-btn-active':''"
                @click="fn_switch_items('geometry')"
                @contextmenu.prevent="fn_switch_items('geometry')"
        >geometry
        </button>

      </div>

      <div class="m-items m-items2" v-if="btn_3D === true">

        <button class="m-btn T-switch" role="button" type="button"
                v-bind:class = "(m_select === '3D')?'m-btn-active':''"
                v-on:click="fn_init_Canvas(10); fn_switch_items('3D')"
                @contextmenu.prevent="fn_switch_items('3D')"
        >3D
        </button>

      </div>

      <div class="m-items m-items2">

        <button class="m-btn T-switch" role="button" type="button"
                v-bind:class = "(m_select === 'image')?'m-btn-active':''"
                @click="fn_switch_items('image')"
                @contextmenu.prevent="fn_switch_items('image')"
        >image
        </button>

      </div>

      <div class="m-items m-items2">

        <button class="m-btn T-switch" role="button" type="button"
                v-bind:class = "(m_select === 'map')?'m-btn-active':''"
                @click="fn_switch_items('map')"
                @contextmenu.prevent="fn_switch_items('map')"
        >map
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
            <line class="svg-static-st1" x1="316.51" y1="452.49" x2="162.69" y2="352.6"/>
            <line class="svg-static-st1" x1="162.69" y1="352.6" x2="90.79" y2="407.91"/>
            <line class="svg-static-st1" x1="23.19" y1="200.63" x2="162.69" y2="352.6"/>
            <line class="svg-static-st1" x1="90.79" y1="407.91" x2="316.51" y2="452.49"/>
            <line class="svg-static-st1" x1="23.18" y1="200.62" x2="90.79" y2="206.58"/>
            <line class="svg-static-st1" x1="23.18" y1="200.63" x2="90.79" y2="407.91"/>
            <line class="svg-static-st1" x1="90.79" y1="407.91" x2="272.09" y2="362.26"/>
            <line class="svg-static-st1" x1="90.79" y1="407.91" x2="90.8" y2="206.59"/>
            <line class="svg-static-st1" x1="316.51" y1="126.75" x2="272.08" y2="362.24"/>
            <line class="svg-static-st1" x1="316.51" y1="126.75" x2="90.8" y2="206.59"/>
            <line class="svg-static-st1" x1="272.08" y1="362.24" x2="90.8" y2="206.59"/>
            <line class="svg-static-st1" x1="207.12" y1="117.08" x2="388.38" y2="71.42"/>
            <line class="svg-static-st1" x1="162.69" y1="26.86" x2="23.18" y2="200.62"/>
            <line class="svg-static-st1" x1="162.69" y1="26.86" x2="207.11" y2="117.08"/>
            <line class="svg-static-st1" x1="207.11" y1="117.08" x2="23.19" y2="200.63"/>
            <line class="svg-static-st1" x1="207.12" y1="117.08" x2="162.69" y2="352.6"/>
            <line class="svg-static-st1" x1="316.51" y1="126.75" x2="162.69" y2="26.86"/>
            <line class="svg-static-st1" x1="90.79" y1="206.58" x2="162.69" y2="26.86"/>
            <line class="svg-static-st1" x1="388.39" y1="71.43" x2="388.39" y2="272.74"/>
            <line class="svg-static-st1" x1="388.39" y1="71.42" x2="316.51" y2="126.75"/>
            <line class="svg-static-st1" x1="388.38" y1="71.42" x2="162.69" y2="26.86"/>
            <line class="svg-static-st1" x1="456" y1="278.72" x2="388.39" y2="272.74"/>
            <line class="svg-static-st1" x1="456" y1="278.71" x2="388.39" y2="71.43"/>
            <line class="svg-static-st1" x1="456" y1="278.71" x2="316.51" y2="126.75"/>
            <line class="svg-static-st1" x1="272.09" y1="362.26" x2="456" y2="278.71"/>
            <line class="svg-static-st1" x1="162.69" y1="352.6" x2="388.39" y2="272.75"/>
            <line class="svg-static-st1" x1="388.39" y1="272.75" x2="207.12" y2="117.08"/>
            <line class="svg-static-st1" x1="388.39" y1="272.75" x2="316.51" y2="452.49"/>
            <line class="svg-static-st1" x1="316.51" y1="452.49" x2="456" y2="278.72"/>
            <line class="svg-static-st1" x1="272.09" y1="362.26" x2="316.51" y2="452.49"/>
          </g>

        </svg>

      </div>

      <div class="o-3d-cnn" v-if="m_select === '3D'"
           @mousedown="circuitBreaker = false; fn_RelTimeRender()"
           @mouseup="circuitBreaker = true"
           v-on:scroll.capture="handleScroll()"
      >

        <canvas ref="ref_webgl" class="webgl"></canvas>

      </div>

      <div class="o-image-cnn" v-if="m_select === 'image'">
        <img class="o-image" v-bind:src="ref_image" alt="image_Icosahedron">
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
            position: { lat: 57.8718272, lng: 25.005863 },
            icon: svgMarker,
            title: 'Icosahedron',
             }"
          />
        </GoogleMap>

        <div class="gps-cnn">
          <a class="gps T-GPS"
             href="https://www.google.com/maps/place/57%C2%B052'18.5%22N+25%C2%B000'20.7%22E/@57.8718056,25.00575,17z/data=!3m1!4b1!4m4!3m3!8m2!3d57.8718056!4d25.00575?entry=ttu">
            57°52'18.5"N 25°00'20.7"E
          </a>
        </div>

      </div>

    </div>

  </div>
</template>

<script setup lang="ts">

const unique_geo_path = 'icosahedron/icosahedron';
const unique_img_path = 'icosahedron/i';


// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

      import {ref} from 'vue';

      // RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
      import { useRootStore } from '@rootStore/index.html-store';
      const RootStore = useRootStore();

      const lastState = ref<string>(null);

      const m_select = ref('');
      m_select.value = "geometry";

      const fn_switch_items = (switchTo: string) => {

        if (switchTo === '3D' && lastState.value === '3D') {
          return
        }
        else if (lastState.value === '3D') {
          m_select.value = switchTo;
          fn_three_dispose();
        } else {
          m_select.value = switchTo;
        }

        lastState.value = switchTo;
      }

      // --------'3D'
      import * as THREE from 'three';
      import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
      import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
      import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
      import { GUI } from 'dat.gui';

      const mtlHex = new MTLLoader();
      const objHex = new OBJLoader();

      const btn_3D = ref<boolean>(true); const cls_webgl_container = ref(null); const ref_webgl = ref<HTMLCanvasElement | null>(null); let canvas = null; let scene = null; let camera = null; let light = null; let SpotLight1 = null; let controls = null; let axesHelper = null; let gui = null; let renderer = null; const circuitBreaker = ref<boolean>(false);

      const fn_init_Canvas = (timeout: number) => {

        setTimeout(function(){

          cls_webgl_container.value = document.querySelector('.o-3d-cnn') as HTMLDivElement;

          if (cls_webgl_container.value !== null){
            fn_init()
          } else {
            fn_lets_wait_a_bit_longer();
          }
        }, timeout );

        // LAST CHANCE
        const fn_lets_wait_a_bit_longer = () => {

          setTimeout(function(){

            cls_webgl_container.value = document.querySelector('.o-3d-cnn') as HTMLDivElement;

            if (cls_webgl_container.value !== null){
              fn_init()
            } else {
              fn_switch_items('geometry')
              btn_3D.value = false;
            }
          }, 500 );
        }

        // ---INIT()--- 3D view
        const fn_init = () => {
          fn_add_Canvas();
          fn_add_Scene();
          fn_add_Camera();
          fn_add_Controls();
          fn_add_Lights();
          fn_add_Geo();
          fn_add_Render();
          // fn_UCS();
          // fn_GUI();
          circuitBreaker.value = false;
          fn_RelTimeRender();
        }

      }

      const fn_add_Canvas     = () => {
        canvas = ref_webgl.value as unknown as HTMLCanvasElement;
      }
      const fn_add_Scene      = () => {
        scene = new THREE.Scene();
      }
      const fn_add_Camera     = () => {
        camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
        camera.position.x = 1.3;
        camera.position.y = 1;
        camera.position.z = 1.3;
        // camera.rotation.x = -5;
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);

      }
      const fn_add_Controls   = () => {
        controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        controls.campingFactor = 0.25;
        controls.enabledZoom = true;
        // controls.maxPolarAngle = Math.PI / 2;
        controls.enabled = true;
      }
      const fn_add_Lights     = () => {

        light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(0, 15, 15)
        scene.add(light);

        SpotLight1 = new THREE.SpotLight("rgb(255,255,255)", 22, 1);
        SpotLight1.position.set(-4,-4,-4);
        SpotLight1.lookAt(0,0,0)
        scene.add(SpotLight1);

        const HemisphereLight1 = new THREE.HemisphereLight("rgb(255,255,255)", "rgb(255,255,255)", 0.7);
        HemisphereLight1.position.y -=0.5;
        scene.add(HemisphereLight1);

        // const alight = new THREE.AmbientLight(0xf0f0f0, 0.4)
        // scene.add(alight)

        // HELPERS
        // let light1Helper = new THREE.DirectionalLightHelper(DirectionalLight1);
        // scene.add(light1Helper);
        //
        // let HemisphereLight1Helper = new THREE.HemisphereLightHelper(HemisphereLight1);
        // scene.add(HemisphereLight1Helper);

        // const SpotLight1Helper = new THREE.SpotLightHelper(SpotLight1);
        // scene.add(SpotLight1Helper);

      }
      const fn_add_Geo        = () => {

        mtlHex.load('./obj/'+ unique_geo_path +'.mtl', function ( materials ) {
          materials.preload();
          objHex.setMaterials(materials);
          objHex.load('./obj/'+ unique_geo_path +'.obj',function ( object ) {
            // object.position.z += 2;
            scene.add( object );
          });
        });

      }
      const fn_add_Render     = () => {
        renderer = new THREE.WebGLRenderer({
          canvas: canvas,
          antialias: true,
        });
        renderer.setClearColor( 0xffffff, 0);
        renderer.setSize(cls_webgl_container.value.offsetWidth-4, cls_webgl_container.value.offsetHeight-4);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); //pixel ratio not biger than 2
        renderer.render(scene, camera);
      }
      const fn_UCS            = () => {
        axesHelper = new THREE.AxesHelper();
        scene.add(axesHelper)
      }
      const fn_GUI            = () => {
        gui = new GUI();
        gui.add(camera.position, 'x', 0, 20).name(camera.position.x);
        gui.add(camera.position, 'y', 0, 20).name(camera.position.y);
        gui.add(camera.position, 'z', 0, 20).name(camera.position.z);
        // gui.add(camera.rotation, 'x', 0, 20).name(camera.rotation.x);
        // gui.add(camera.rotation, 'y', 0, 20).name(camera.rotation.y);
        // gui.add(camera.rotation, 'z', 0, 20).name(camera.rotation.z);
      }
      const fn_RelTimeRender  = () => {
        if(circuitBreaker.value === false) {
          controls.update()
          renderer.render(scene, camera)
          window.requestAnimationFrame(fn_RelTimeRender)
        }
      }
      const handleScroll      = () => {
        console.log('schrooling');
      }
      const fn_three_dispose  = () => {

        scene.clear();
        renderer.dispose();
        renderer.forceContextLoss();

        canvas = null;
        scene = null;
        camera = null;
        light = null;
        SpotLight1 = null;
        controls = null;
        axesHelper = null;
        gui = null;
        renderer = null;
        circuitBreaker.value = true;

        // console.log('3d view disposed');

      }

      // --------'image'
      const ref_image = ref('');
      ref_image.value = 'img/'+ unique_img_path +'01.jpg';

      // function fn_switch_image(number:number){
      //   try {
      //     const imageUrl = 'img/dodekahedron00' + number + '.jpg';
      //     const img = new Image();
      //     img.src = imageUrl;
      //
      //     img.onload = () => {
      //       this.ref_image = imageUrl;
      //     };
      //
      //     img.onerror = () => {
      //       return null;
      //     };
      //   } catch (error) {
      //     return null;
      //   }
      // }

      // --------'map'
      import { GoogleMap, Marker } from "vue3-google-map";
      const p = RootStore.constructed();
      const map_id  = RootStore.mapStyleId;
      const center = { lat: 56.927628, lng: 24.372477 };
      const zoom  = 7;
      //const version = 3.47; //IE supported version


// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------




const svgMarker = {
    path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
    // anchor: new google.maps.Point(0, 20),s
  }


</script>

<style lang="scss" src="./_formaStyleBody.scss"/>
