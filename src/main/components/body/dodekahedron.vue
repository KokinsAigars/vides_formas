<!--
//  *   vue : 4125ded2-aa79-4453-9ba0-48eeddac6a5b
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.07.31
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
        <button class="m_swit_btn T-switch" id="btn1" role="button" type="button"
                v-bind:class = "(MENU_selected === 'geometry')?'m_swit_btn_selected':''"
                @click="fn_switch_items('geometry')"
                @contextmenu.prevent="fn_switch_items('geometry')">geometry
        </button>
      </div>
      <div class="m_sw-items m_switch-items-second" v-if="btn_3D === true">
        <button class="m_swit_btn T-switch" id="btn1" role="button" type="button"
                v-bind:class = "(MENU_selected === '3D')?'m_swit_btn_selected':''"
                v-on:click="fn_init_Canvas(10); fn_switch_items('3D')"
                @contextmenu.prevent="fn_switch_items('3D')">3D
        </button>
      </div>
      <div class="m_sw-items m_switch-items-second">
        <button class="m_swit_btn T-switch" id="btn1" role="button" type="button"
                v-bind:class = "(MENU_selected === 'image')?'m_swit_btn_selected':''"
                @click="fn_switch_items('image')"
                @contextmenu.prevent="fn_switch_items('image')">image
        </button>
      </div>
      <div class="m_sw-items m_switch-items-second">
        <button class="m_swit_btn T-switch" id="btn1" role="button" type="button"
                v-bind:class = "(MENU_selected === 'map')?'m_swit_btn_selected':''"
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

      <div class="webgl_container" v-if="MENU_selected === '3D'"
           @mousedown="circuitBreaker = false; fn_RelTimeRender()"
           v-on:scroll.capture="handleScroll()"
           @mouseup="circuitBreaker = true">
        <canvas ref="ref_webgl" class="webgl"></canvas>
      </div>

      <img class="m_image T-m_image" v-if="MENU_selected === 'image'"
           v-bind:src="ref_image" alt="image_dodekahedron">

      <div class="googleMapsContainer" v-if="MENU_selected === 'map'">
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
            position: { lat: 56.5454149, lng: 27.8855629 },
            icon: svgMarker,
            title: 'Dodekahedron',
             }"
          />
        </GoogleMap>
        <div class="GPS-container">
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

  import {ref} from 'vue';

  // RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
  import { useRootStore } from '@rootStore/index.html-store';
  const RootStore = useRootStore();

  const lastState = ref<string>(null);

  // --------'geometry'
  const MENU_selected = ref('');
  MENU_selected.value = "geometry";

  const fn_switch_items = (switchTo: string) => {

    if (lastState.value === '3D') {
      MENU_selected.value = switchTo;
      fn_three_dispose();
    } else {
      MENU_selected.value = switchTo;
    }

    lastState.value = switchTo;
  }



  // --------'3D'
  import * as THREE from 'three';
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
  import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
  import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
  import { GUI } from 'dat.gui';

  import {Create_DoDEC} from '@assets/test/DodecahedronGeometry.js';
  import {mat_Basic} from '@assets/test/MeshBasicMaterial.js';

  const btn_3D = ref<boolean>(true);
  const cls_webgl_container = ref(null);
  const ref_webgl = ref<HTMLCanvasElement | null>(null);
  let canvas = null;
  let scene = null;
  let camera = null;
  let light = null;
  let SpotLight1 = null;
  let controls = null;
  let axesHelper = null;
  let gui = null;
  let renderer = null;
  const circuitBreaker = ref<boolean>(false);

  const fn_init_Canvas = (timeout: number) => {

    setTimeout(function(){

      cls_webgl_container.value = document.querySelector('.webgl_container') as HTMLDivElement;

      if (cls_webgl_container.value !== null){
        fn_init()
      } else {
        fn_lets_wait_a_bit_longer();
      }
    }, timeout );

    // LAST CHANCE
    const fn_lets_wait_a_bit_longer = () => {

      setTimeout(function(){

        cls_webgl_container.value = document.querySelector('.webgl_container') as HTMLDivElement;

        if (cls_webgl_container.value !== null){
          fn_init()
        } else {
          fn_switch_items('geometry')
          btn_3D.value = false;
        }
      }, 500 );
    }

    // INIT() 3D view
    const fn_init = () => {
      fn_add_Canvas();
      fn_add_Scene();
      fn_add_Camera();
      fn_add_Controls();
      fn_add_Lights();
      fn_add_Geo();
      fn_add_Render();
      fn_UCS();
      fn_GUI();
      circuitBreaker.value = false;
      fn_RelTimeRender();
    }

  }

    const fn_add_Canvas   = () => {
      canvas = ref_webgl.value as unknown as HTMLCanvasElement;
    }
    const fn_add_Scene    = () => {
      scene = new THREE.Scene();
    }
    const fn_add_Camera   = () => {
      camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
      camera.position.x = 1.3;
      camera.position.y = 1.5;
      camera.position.z = 1.5;
      // camera.rotation.x = -5;
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      scene.add(camera);

    }
    const fn_add_Controls = () => {

      controls = new OrbitControls(camera, canvas);
      controls.enableDamping = true;
      controls.campingFactor = 0.25;
      controls.enabledZoom = true;
      // controls.maxPolarAngle = Math.PI / 2;
      controls.enabled = true;

    }
    const fn_add_Lights   = () => {

      light = new THREE.DirectionalLight(0xffffff, 1)
      light.position.set(0, 15, 15)
      scene.add(light);

      SpotLight1 = new THREE.SpotLight("rgb(223,173,107)", 12, 1);
      SpotLight1.position.set(-4,-4,-4);
      SpotLight1.lookAt(0,0,0)
      scene.add(SpotLight1);

      const HemisphereLight1 = new THREE.HemisphereLight(0xffffbb, 0xffffaa, 0.4);
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
    const fn_add_Geo      = () => {

      const objHex = new OBJLoader();
      const mtlHex = new MTLLoader();

      let hexahedron = 'hexahedron3';
      let dodekahedron = 'dodekahedron3';

      mtlHex.load('./obj/'+hexahedron+'.mtl', function ( materials ) {
            materials.preload();

            objHex.setMaterials(materials);
            objHex.load('./obj/'+hexahedron+'.obj',function ( object ) {
                  // object.position.z += 2;



                  // --NOT ___ VISIBLE ON SCENE -----
                  // scene.add( object );

                },
                function ( xhr ) {fn_onProgress(xhr);},
                function ( error ) {fn_onError( error );}
            );
          },
          function ( xhr ) {fn_onProgress(xhr);},
          function ( error ) {fn_onError( error );}
      );

      //
      // const edges = new THREE.EdgesGeometry( objHex );
      // const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: "#222222" } ) );
      // scene.add( line );


      function fn_onProgress(xhr){
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      }
      function fn_onError( error ) {
        console.log( 'An error happened', error );
      }

      const geBox = new THREE.BoxGeometry(1,1, 1);
      const boxMat = new THREE.MeshPhongMaterial({color: "rgb(124,175,241)"});
      const boxMesh = new THREE.Mesh(geBox, boxMat);
      scene.add(boxMesh);

    //   https://www.youtube.com/watch?v=JyhhHhoqK2o


    }
    const fn_add_Render   = () => {

      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
      });
      renderer.setClearColor( 0xffffff, 0);
      renderer.setSize(cls_webgl_container.value.offsetWidth-4, cls_webgl_container.value.offsetHeight-4);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); //pixel ratio not biger than 2
      renderer.render(scene, camera);
    }
    const fn_UCS          = () => {
      axesHelper = new THREE.AxesHelper();
      scene.add(axesHelper)
    }
    const fn_GUI          = () => {
      gui = new GUI();
      gui.add(camera.position, 'x', 0, 20).name(camera.position.x);
      gui.add(camera.position, 'y', 0, 20).name(camera.position.y);
      gui.add(camera.position, 'z', 0, 20).name(camera.position.z);
      // gui.add(camera.rotation, 'x', 0, 20).name(camera.rotation.x);
      // gui.add(camera.rotation, 'y', 0, 20).name(camera.rotation.y);
      // gui.add(camera.rotation, 'z', 0, 20).name(camera.rotation.z);
    }

  const fn_RelTimeRender = () =>  {
    if(circuitBreaker.value === false) {
      controls.update()
      renderer.render(scene, camera)
      window.requestAnimationFrame(fn_RelTimeRender)
    }
  }

  const handleScroll = () => {
    console.log('schrooling');
  }

  const fn_three_dispose = () => {

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

    console.log('3d view disposed');

  }



  // --------'image'
  const ref_image = ref('');
  ref_image.value = 'img/dodekahedron001.jpg';
  function fn_switch_image(number:number){
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

  // beforeDestroy() {
  //   cancelAnimationFrame(animationFrameId);
  // }

  // --------'map'
  import { GoogleMap, Marker } from "vue3-google-map";
  const p = RootStore.constructed();
  const map_id  = RootStore.mapStyleId;
  const center = { lat: 56.927628, lng: 24.372477 };
  const zoom  = 7;
  //const version = 3.55;   // 3.47; //IE supported version
  const svgMarker = {
    path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
    // anchor: new google.maps.Point(0, 20),s
  };



</script>

<style lang="scss" src="./_formaStyleBody.scss"/>
