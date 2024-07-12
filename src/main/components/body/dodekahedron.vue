<!--
//  *   ts :
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.07.04
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page - body - components - Dodekahedron
//  *   version: 1.0.0
//  *
-->

<template>

  <div class="div_container">

    <div v-if="MENU_selected === 'geometry' || MENU_selected === '3d'" class="image-container-overflow">

      <div v-if="MENU_selected === 'geometry'">
        <svg class="cls_svg_dodekahedron"
             x="0px" y="0px" viewBox="0 0 480 480"
             style="user-select:none; overflow:hidden;" aria-hidden="true" focusable="false" role="img"
             xmlns="http://www.w3.org/2000/svg">
          <g>
            <line class="st_svg_hex" x1="443.02" y1="262.38" x2="443.02" y2="125.89"/>
            <line class="st_svg_hex" x1="316.34" y1="249.71" x2="443.02" y2="262.38"/>
            <line class="st_svg_hex" x1="443.02" y1="262.38" x2="414.3" y2="394.2"/>
            <line class="st_svg_hex" x1="443.02" y1="125.89" x2="316.34" y2="28.85"/>
            <line class="st_svg_hex" x1="414.3" y1="173.35" x2="443.02" y2="125.89"/>
            <line class="st_svg_hex" x1="36.16" y1="353.46" x2="36.16" y2="216.97"/>
            <line class="st_svg_hex" x1="269.86" y1="463" x2="209.32" y2="373.7"/>
            <line class="st_svg_hex" x1="36.16" y1="353.46" x2="162.84" y2="450.49"/>
            <line class="st_svg_hex" x1="64.89" y1="306" x2="36.16" y2="353.46"/>
            <line class="st_svg_hex" x1="209.32" y1="373.7" x2="64.89" y2="306"/>
            <line class="st_svg_hex" x1="82.64" y1="140.17" x2="64.89" y2="306"/>
            <line class="st_svg_hex" x1="238.05" y1="105.38" x2="316.34" y2="249.71"/>
            <line class="st_svg_hex" x1="209.32" y1="373.7" x2="316.34" y2="249.71"/>
            <line class="st_svg_hex" x1="36.16" y1="216.97" x2="64.89" y2="85.14"/>
            <line class="st_svg_hex" x1="162.84" y1="229.64" x2="36.16" y2="216.97"/>
            <line class="st_svg_hex" x1="209.32" y1="16.35" x2="269.86" y2="105.65"/>
            <line class="st_svg_hex" x1="162.84" y1="450.49" x2="241.14" y2="373.97"/>
            <line class="st_svg_hex" x1="162.84" y1="450.49" x2="269.86" y2="463"/>
            <line class="st_svg_hex" x1="414.3" y1="394.2" x2="269.86" y2="463"/>
            <line class="st_svg_hex" x1="414.3" y1="394.2" x2="396.54" y2="339.18"/>
            <line class="st_svg_hex" x1="82.64" y1="140.17" x2="238.05" y2="105.38"/>
            <line class="st_svg_hex" x1="64.89" y1="85.14" x2="82.64" y2="140.17"/>
            <line class="st_svg_hex" x1="209.32" y1="16.35" x2="64.89" y2="85.14"/>
            <line class="st_svg_hex" x1="209.32" y1="16.35" x2="316.34" y2="28.85"/>
            <line class="st_svg_hex" x1="316.34" y1="28.85" x2="238.05" y2="105.38"/>
            <line class="st_svg_hex" x1="162.84" y1="229.64" x2="269.86" y2="105.65"/>
            <line class="st_svg_hex" x1="241.14" y1="373.97" x2="162.84" y2="229.64"/>
            <line class="st_svg_hex" x1="396.54" y1="339.18" x2="241.14" y2="373.97"/>
            <line class="st_svg_hex" x1="396.54" y1="339.18" x2="414.3" y2="173.35"/>
            <line class="st_svg_hex" x1="414.3" y1="173.35" x2="269.86" y2="105.65"/>
          </g>
        </svg>
      </div>

      <!--      <div >-->
      <!--        <canvas ref="ref_canvas"></canvas>-->
      <!--      </div>-->

    </div>

    <div v-if="MENU_selected !== 'geometry' && MENU_selected !== '3d'" class="image-container">

      <div v-if="MENU_selected === 'image'">

        <div class="image-container-image"><img v-bind:src="ref_image" alt="dodec"></div>

        <div class="multiple-ImageSwitch-container">
          <ul class="misc-list">
            <li class="listItems">
              <button class="btn_swi T-switch-image" id="btn1" role="button" type="button" aria-hidden="true"
                      @click="fn_switch_image(1)"
                      @contextmenu.prevent="fn_switch_image(1)">1.,
              </button>
            </li>
            <li class="listItems">
              <button class="btn_swi T-switch-image" id="btn1" role="button" type="button" aria-hidden="true"
                      @click="fn_switch_image(2)"
                      @contextmenu.prevent="fn_switch_image(2)">2.,
              </button>
            </li>
            <li class="listItems">
              <button class="btn_swi T-switch-image" id="btn1" role="button" type="button" aria-hidden="true"
                      @click="fn_switch_image(3)"
                      @contextmenu.prevent="fn_switch_image(3)">3.
              </button>
            </li>
          </ul>
        </div>

      </div>

      <div v-if="MENU_selected === 'map'">
        <div class="image-container-image gpskarte"><img v-bind:src="ref_image_karte" alt="dodec"></div>
        <div class="m_text-space-vertical T-text-space">Tetrahedron: 57°00'57.4"N, 21°34'51.1"E</div>
      </div>

    </div>



    <div class="text-container">

      <!--switch-container-->
      <div class="switch-container">
        <div class="switch-items">
          <button class="btn_swi T-switch" id="btn1" role="button" type="button" aria-hidden="true"
                  @click="fn_switch_items('geometry')"
                  @contextmenu.prevent="fn_switch_items('geometry')">geometry
          </button>
        </div>

<!--        <div class="switch-items si-b">-->
<!--          <button class="btn_swi T-switch" id="btn1" role="button" type="button" aria-hidden="true"-->
<!--                  @click="fn_switch_items('3d')"-->
<!--                  @contextmenu.prevent="fn_switch_items('3d')">3d-->
<!--          </button>-->
<!--        </div>-->

        <div class="switch-items si-b">
          <button class="btn_swi T-switch" id="btn1" role="button" type="button" aria-hidden="true"
                  @click="fn_switch_items('image')"
                  @contextmenu.prevent="fn_switch_items('image')">image
          </button>
        </div>

        <div class="switch-items si-b">
          <button class="btn_swi T-switch" id="btn1" role="button" type="button" aria-hidden="true"
                  @click="fn_switch_items('map')"
                  @contextmenu.prevent="fn_switch_items('map')">map
          </button>
        </div>
      </div>

<!--      <div class="text-space T-text-space">-->

<!--        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim id laborum nulla ullam? Animi-->
<!--        asperiores atque consectetur cupiditate, esse facere fugit impedit laudantium mollitia qui, repellat rerum-->
<!--        similique velit.-->
<!--        A amet distinctio dolor dolore earum, eos eum expedita id ipsum nulla officia pariatur perferendis quae-->
<!--        quibusdam quidem quisquam reprehenderit saepe tempora. Blanditiis iure libero modi necessitatibus quibusdam-->
<!--        suscipit voluptatum.-->
<!--        Ab autem beatae blanditiis corporis cum deleniti dignissimos distinctio earum harum impedit inventore,-->
<!--        minus mollitia necessitatibus nihil numquam odit omnis possimus provident quibusdam quisquam quos saepe-->
<!--        soluta voluptas voluptate voluptatibus?-->
<!--        Aliquid amet architecto aspernatur, debitis dicta esse illo iusto nihil non optio perferendis quae-->
<!--        quaerat quia recusandae rem reprehenderit sapiente, sint veniam. A debitis deserunt libero modi pariatur-->
<!--        velit veniam?-->
<!--        Ab alias corporis, doloribus eius in labore magnam maxime necessitatibus officia porro sed similique-->
<!--        veniam! Architecto aut pariatur quasi quis repellat. Aliquam delectus deleniti explicabo facere laborum?-->
<!--        Asperiores culpa, repellat!-->

<!--        <div v-if="MENU_selected === 'map'" class="gps-on-screen">56°32'43.5"N 27°53'08.1"E</div>-->

<!--      </div>-->

    </div>

  </div>

</template>

<script setup lang="ts">

  import {onMounted, ref} from 'vue';

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
  ref_image.value = 'img/dodekahedron00' + 1 + '.jpg';

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

  //
  // const REF_canvas = ref<HTMLCanvasElement | null>(null);
  //
  // import { Scene, PerspectiveCamera, Vector3, WebGLRenderer } from 'three';
  //
  // const scene  = new Scene();
  //
  // const camera = new PerspectiveCamera(45,window.innerWidth / window.innerHeight,0.1,1000);
  // scene.add(camera);
  //
  // onMounted(() => {
  //   const renderer = new WebGLRenderer({
  //     canvas: REF_canvas.value as unknown as HTMLCanvasElement,
  //     antialias: true
  //   });
  //
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //
  //     renderer.render(scene, camera);
  //
  // })

</script>

<style lang="scss" src="./_formaStyle.scss"/>
