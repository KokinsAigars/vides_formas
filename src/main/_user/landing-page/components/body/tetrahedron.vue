<!--
//  *   ts :
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.07.01
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page - body - components - Tetrahedron
//  *   version: 1.0.0
//  *
-->

<template>

  <div class="div_cls_svg_form">

    <div class="title-formas T-title-formas">Tetrahedron</div>
    <div class="GPS-formas T-GPS-formas">57°00'57.4"N 21°34'51.1"E</div>

    <svg class="cls_svg_tetrahedron"
         x="0px" y="0px" viewBox="0 0 480 480"
         style="user-select:none; overflow:hidden;" aria-hidden="true" focusable="false" role="img"
         xmlns="http://www.w3.org/2000/svg">
      <g>
        <line class="st_svg_hex" x1="39.18" y1="269.15" x2="427.54" y2="449.13"/>
        <line class="st_svg_hex" x1="39.18" y1="269.15" x2="302.24" y2="30.22"/>
        <line class="st_svg_hex" x1="427.54" y1="449.13" x2="440" y2="105.43"/>
        <line class="st_svg_hex" x1="302.24" y1="30.22" x2="440" y2="105.43"/>
        <line class="st_svg_hex" x1="427.54" y1="449.13" x2="302.24" y2="30.22"/>
        <line class="st_svg_hex" x1="440" y1="105.43" x2="39.18" y2="269.15"/>
      </g>
    </svg>

  </div>

</template>

<script setup lang="ts">
</script>

<style lang="scss" src="./formaStyle.scss"/>
