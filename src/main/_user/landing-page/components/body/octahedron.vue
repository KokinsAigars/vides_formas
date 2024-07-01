<!--
//  *   ts :
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.07.01
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page - body - components - Octahedron
//  *   version: 1.0.0
//  *
-->

<template>

  <div class="div_cls_svg_form">

    <div class="title-formas T-title-formas">Octahedron</div>
    <div class="GPS-formas T-GPS-formas">57°45'29.7"N 22°35'48.3"E</div>

    <svg class="cls_svg_octahedron"
         x="0px" y="0px" viewBox="0 0 480 480"
         style="user-select:none; overflow:hidden;" aria-hidden="true" focusable="false" role="img"
         xmlns="http://www.w3.org/2000/svg">
      <g>
        <line class="st_svg_hex" x1="239.59" y1="438.97" x2="464" y2="260.5"/>
        <line class="st_svg_hex" x1="464" y1="260.5" x2="282.21" y2="130.03"/>
        <line class="st_svg_hex" x1="15.18" y1="218.85" x2="282.21" y2="130.03"/>
        <line class="st_svg_hex" x1="239.59" y1="40.38" x2="282.21" y2="130.03"/>
        <line class="st_svg_hex" x1="464" y1="260.5" x2="196.97" y2="349.32"/>
        <line class="st_svg_hex" x1="464" y1="260.5" x2="239.59" y2="40.38"/>
        <line class="st_svg_hex" x1="239.59" y1="40.38" x2="196.97" y2="349.32"/>
        <line class="st_svg_hex" x1="15.18" y1="218.85" x2="196.97" y2="349.32"/>
        <line class="st_svg_hex" x1="15.18" y1="218.85" x2="239.59" y2="40.38"/>
        <line class="st_svg_hex" x1="196.97" y1="349.32" x2="239.59" y2="438.97"/>
        <line class="st_svg_hex" x1="282.21" y1="130.03" x2="239.59" y2="438.97"/>
        <line class="st_svg_hex" x1="239.59" y1="438.97" x2="15.18" y2="218.85"/>
      </g>
    </svg>

  </div>

</template>

<script setup lang="ts">
</script>

<style lang="scss" src="./formaStyle.scss"/>
