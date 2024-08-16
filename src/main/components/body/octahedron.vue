<!--
//  *   vue : b8581f59-5cc3-42fa-9e3e-4bc7f47ce20c
//  *
//  *   Project Name: "sacredgeometrysites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.16
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page (site) - body - component
//  *   [Octahedron]
//  *
//  *   abbreviations
//  *     - body : b
//  *     - container : cnn
//  *     - menu : m
//  *     - object : o
//  *     - button : btn
-->

<script setup lang="ts">

//  UNIQUE for OCTAHEDRON

const unique_geometry = ref<string>(null);
unique_geometry.value = 'octahedron';

const add_Images = ref<boolean>(true);

const unique_geo_path = 'o/octahedron';
const unique_img_path = 'o/o';
const unique_number_of_images = ref<number>(3);

const unique_gps = '57°45\'29.7"N 22°35\'48.3"E';
const unique_gps_path = 'https://www.google.com/maps/place/57%C2%B045\'29.7%22N+22%C2%B035\'48.3%22E/@57.7521343,22.5792294,6836m'

const unique_svgMarkerD_color = "black";
const unique_svgMarkerH_color = "black";
const unique_svgMarkerI_color = "black";
const unique_svgMarkerO_color = "blue";
const unique_svgMarkerT_color = "black";


// ---------------------------------------------------------------------------------
// -------------------  identical  - START -----------------------------------------
// ---------------------------------------------------------------------------------

import {ref} from 'vue';

// RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
import { useRootStore } from '@rootStore/index.html-store';
const RootStore = useRootStore();

// SVG vue component
import svg_Hexahedron from '@/_assets/svg/h.vue';
import svg_Tetrahedron from '@/_assets/svg/t.vue';
import svg_Octahedron from '@/_assets/svg/o.vue';
import svg_Dodekahedron from '@/_assets/svg/d.vue';
import svg_Icosahedron from '@/_assets/svg/i.vue';


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
import {RectAreaLightUniformsLib} from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
// import { GUI } from 'dat.gui';
import { GUI } from 'lil-gui'

const mtlLoader = new MTLLoader();
const objLoader = new OBJLoader();

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

    canvas = ref_webgl.value as unknown as HTMLCanvasElement;
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );

    fn_add_Camera();

    renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true,});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(cls_webgl_container.value.offsetWidth-4, cls_webgl_container.value.offsetHeight-4);
    // renderer.setClearColor( 0xffffff, 0);
    renderer.render(scene, camera);

    fn_add_Controls();

    fn_add_Geo();
    // fn_add_Geo_plane();

    fn_add_HemisphereLight();
    //fn_add_AmbientLight();
    fn_add_DirectionalLight();
    //fn_add_RectAreaLight();

    // fn_UCS();
    // fn_GUI();

    circuitBreaker.value = false;
    fn_RelTimeRender();
  }

}

const fn_add_Camera     = () => {
  camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.x = 1.3;
  camera.position.y = 1;
  camera.position.z = 1.3;
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  scene.add(camera);

}
const fn_add_Controls   = () => {
  controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.campingFactor = 0.25;
  controls.enabledZoom = true;
  controls.enabled = true;
}
const fn_add_Geo        = () => {

  let my_mat = new THREE.MeshLambertMaterial( {
    color: "rgb(0,111,255)",
    opacity: 0.6,
    transparent: true,
    side: THREE.DoubleSide,
    flatShading: false
  } );

  // let my_mat = new THREE.MeshPhongMaterial( {
  //   color: "rgb(0,111,255)",
  //   opacity: 0.6,
  //   transparent: true,
  //   flatShading: true,
  //   vertexColors: true,
  //   shininess: 0
  // } );


  // let meshGeometry = new THREE.DodecahedronGeometry( 10 );
  //
  // const mesh = new THREE.Mesh( meshGeometry, my_mat);
  // scene.add(mesh);

  mtlLoader.load('./obj/'+ unique_geo_path +'.mtl', function ( materials ) {
    materials.preload();
    objLoader.setMaterials(materials);

    objLoader.load('./obj/'+ unique_geo_path +'.obj',function ( object ) {
      object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material = my_mat;
        }
      });
      // object.position.z += 2;
      scene.add( object );
    });
  });


}
const fn_add_Geo_plane  = () => {
  const planeGeometry = new THREE.PlaneGeometry( 10, 10 );
  planeGeometry.rotateX( - Math.PI / 2 );
  const planeMaterial = new THREE.ShadowMaterial( { color: 0x000000, opacity: 0.2 } );

  const plane = new THREE.Mesh( planeGeometry, planeMaterial );
  plane.position.y = - 0.2;
  plane.receiveShadow = true;
  scene.add( plane );

  const helper = new THREE.GridHelper( 10, 50 );
  helper.position.y = - 0.99;
  helper.material.opacity = 0.25;
  helper.material.transparent = false;
  scene.add( helper );
}
const fn_add_HemisphereLight = () => {
  let light_2_HemisphereLight = new THREE.HemisphereLight( 0xcfe3fc, 0x6f849e, 2.0)
  scene.add(light_2_HemisphereLight);
}
const fn_add_AmbientLight = () => {

  let light_1_Ambient = new THREE.AmbientLight(0xFFFF80, 1) ;
  scene.add(light_1_Ambient);
}
const fn_add_DirectionalLight = () => {

  // Directional light
  let light_3_Directional = new THREE.DirectionalLight(0xFFFFFF, 5.3);
  light_3_Directional.position.set(2, 10, 1);
  light_3_Directional.target.position.set(0,0,0);
  scene.add(light_3_Directional);

  let light_3_Directional2 = new THREE.DirectionalLight(0xFFFFFF, 2.3);
  light_3_Directional2.position.set(-2, -10, -1);
  light_3_Directional2.target.position.set(0,0,0);
  scene.add(light_3_Directional2);


  // let Helper_light_3_Directional = new THREE.DirectionalLightHelper(light_3_Directional, 5, "rgb(0,0,0)");
  // scene.add(Helper_light_3_Directional);
}
const fn_add_RectAreaLight = () => {

  RectAreaLightUniformsLib.init();

  const width = 5;
  const height = 5;
  const intensity1 = 3.5;
  const intensity2 = 2.2;
  const intensity3 = 1.9;
  const color1 = 0xFFFFFF;
  const color2 = 0xFFFFFF;
  const color3 = 0xFFFFFF;

  const rectLight1 = new THREE.RectAreaLight( color1, intensity1,  width, height );
  rectLight1.position.set( 5, 0, 0 );
  rectLight1.lookAt( 0, 0, 0 );
  scene.add( rectLight1 );

  const rectLight2 = new THREE.RectAreaLight( color1, intensity1,  width, height );
  rectLight2.position.set( -5, 0, 0 );
  rectLight2.lookAt( 0, 0, 0 );
  scene.add( rectLight2 );

  const rectLight3 = new THREE.RectAreaLight( color2, intensity2,  width, height );
  rectLight3.position.set( 0, 5, 0 );
  rectLight3.lookAt( 0, 0, 0 );
  scene.add( rectLight3 );

  const rectLight4 = new THREE.RectAreaLight( color2, intensity2,  width, height );
  rectLight4.position.set( 0, -5, 0 );
  rectLight4.lookAt( 0, 0, 0 );
  scene.add( rectLight4 );

  const rectLight5 = new THREE.RectAreaLight( color3, intensity3,  width, height );
  rectLight5.position.set( 0, 0, 5 );
  rectLight5.lookAt( 0, 0, 0 );
  scene.add( rectLight5 );

  const rectLight6 = new THREE.RectAreaLight( color3, intensity3,  width, height );
  rectLight6.position.set( 0, 0, -5 );
  rectLight6.lookAt( 0, 0, 0 );
  scene.add( rectLight6 );


  // const rectLightHelper1 = new RectAreaLightHelper( rectLight1,  0xdb1229);
  // rectLight1.add( rectLightHelper1 );
  // const rectLightHelper2 = new RectAreaLightHelper( rectLight2,  0xdb1229);
  // rectLight2.add( rectLightHelper2 );
  // const rectLightHelper3 = new RectAreaLightHelper( rectLight3,  0xdb1229);
  // rectLight3.add( rectLightHelper3 );
  // const rectLightHelper4 = new RectAreaLightHelper( rectLight4,  0xdb1229);
  // rectLight4.add( rectLightHelper4 );

}
const fn_UCS            = () => {
  axesHelper = new THREE.AxesHelper();
  scene.add(axesHelper)
}
const fn_GUI            = () => {
  gui = new GUI();
  //
  // gui.add(camera.position, 'x', 0, 20).name(camera.position.x);
  // gui.add(camera.position, 'y', 0, 20).name(camera.position.y);
  // gui.add(camera.position, 'z', 0, 20).name(camera.position.z);
  //
  // gui.add(my_mat.color, "r", 0.0, 1.0);
  // gui.add(my_mat.color, "g", 0.0, 1.0);
  // gui.add(my_mat.color, "b", 0.0, 1.0);

  // Ambient light
  // gui.add(light_1_Ambient, "visible");
  // gui.add(light_1_Ambient, "castShadow");
  // gui.add(light_1_Ambient, "intensity", 0.0, 3.0);
  // gui.add(light_1_Ambient.color, "r", 0.0, 1.0);
  // gui.add(light_1_Ambient.color, "g", 0.0, 1.0);
  // gui.add(light_1_Ambient.color, "b", 0.0, 1.0);

  // HemisphereLight
  // gui.add(light_2_HemisphereLight, "visible");
  // gui.add(light_2_HemisphereLight, "intensity", 0.0, 3.0);

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

function fn_switch_image(input_number:number){
  try {
    ref_image.value = 'img/'+ unique_img_path +'0'+ input_number +'.jpg';
  } catch (error) {
    return null;
  }
}



// --------'map'
import { GoogleMap, Marker } from "vue3-google-map";
const p = RootStore.constructed();
const map_id  = RootStore.mapStyleId;
const center = { lat: 56.927628, lng: 24.372477 };
const zoom  = 7;
//const version = 3.47; //IE supported version

// GoogleMapsMarkers
const svgMarkerD = {
  path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
  fillColor: unique_svgMarkerD_color,
  fillOpacity: 0.6,
  strokeWeight: 0,
  rotation: 0,
  scale: 1.5,
  // anchor: new google.maps.Point(0, 20),s
};
const svgMarkerH = {
  path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
  fillColor: unique_svgMarkerH_color,
  fillOpacity: 0.6,
  strokeWeight: 0,
  rotation: 0,
  scale: 1.5,
};
const svgMarkerI = {
  path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
  fillColor: unique_svgMarkerI_color,
  fillOpacity: 0.6,
  strokeWeight: 0,
  rotation: 0,
  scale: 1.5,
  // anchor: new google.maps.Point(0, 20),s
}
const svgMarkerO = {
  path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
  fillColor: unique_svgMarkerO_color,
  fillOpacity: 0.6,
  strokeWeight: 0,
  rotation: 0,
  scale: 1.5,
  // anchor: new google.maps.Point(0, 20),s
}
const svgMarkerT = {
  path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
  fillColor: unique_svgMarkerT_color,
  fillOpacity: 0.6,
  strokeWeight: 0,
  rotation: 0,
  scale: 1.5,
  // anchor: new google.maps.Point(0, 20),
}



// ---------------------------------------------------------------------------------
// -------------------  identical  - END  ------------------------------------------
// ---------------------------------------------------------------------------------


</script>

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

      <div class="m-items m-items2" v-if="add_Images === true">

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

    <!-- OBJECTS -->
    <div class="o-cnn">

      <div class="o-svg-cnn" v-if="m_select === 'geometry'">

        <svg_Hexahedron   v-if="unique_geometry === 'hexahedron'"   />
        <svg_Tetrahedron  v-if="unique_geometry === 'tetrahedron'"  />
        <svg_Octahedron   v-if="unique_geometry === 'octahedron'"   />
        <svg_Dodekahedron v-if="unique_geometry === 'dodekahedron'" />
        <svg_Icosahedron  v-if="unique_geometry === 'icosahedron'"  />

      </div>

      <div class="o-3d-cnn" v-if="m_select === '3D'"
           @mousedown="circuitBreaker = false; fn_RelTimeRender()"
           @mouseup="circuitBreaker = true"
           v-on:scroll.capture="handleScroll()"
      >
        <canvas ref="ref_webgl" class="webgl"></canvas>

      </div>

      <div class="o-image-cnn" v-if="m_select === 'image'">

        <img class="o-image" v-bind:src="ref_image" alt="image">

        <div class="o-img-switch-cnn T-m_image">
          <ul class="o-img-switch-ul">
            <li v-for="(index) in unique_number_of_images" class="o-img-switch-li">
              <button class="o-img-switch-btn" @click="fn_switch_image(index)">{{index}}</button>
            </li>

          </ul>
        </div>

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
            :minZoom="zoom"
            :maxZoom="zoom"
        >

          <Marker :options="{
            position: { lat: 56.5454149, lng: 27.8855629 },
            icon: svgMarkerD,
            title: 'Dodekahedron',
             }"/>
          <Marker :options="{
            position: { lat: 56.5719081, lng: 23.0734866 },
            icon: svgMarkerH,
            title: 'Hexahedron',
             }"
          />
          <Marker :options="{
            position: { lat: 57.8718272, lng: 25.005863 },
            icon: svgMarkerI,
            title: 'Icosahedron',
             }"
          />
          <Marker :options="{
            position: { lat: 57.7582386, lng: 22.5969097 },
            icon: svgMarkerO,
            title: 'Octahedron',
             }"
          />
          <Marker :options="{
              position: { lat: 57.0159213, lng: 21.5810198 },
              icon: svgMarkerT,
              title: 'Tetrahedron',
            }"
          />
        </GoogleMap>

        <div class="gps-cnn">
          <a class="gps T-GPS"
             :href="`${unique_gps_path}`">
            {{ unique_gps }}
          </a>
        </div>

      </div>

    </div>

  </div>
</template>

<style lang="scss" src="./_formaStyleBody.scss"/>
