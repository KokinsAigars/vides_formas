
<template>

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

  </template>

<script setup lang="ts"></script>

<style scoped lang="scss">

  $svg_form_header_size: 25px;

  .cls_svg_hexahedron, .cls_svg_tetrahedron, .cls_svg_octahedron, .cls_svg_dodekahedron, .cls_svg_icosahedron{
    width: $svg_form_header_size;
    height: $svg_form_header_size;
  }

  .st_svg_hex{
    fill:none;
    stroke: #11184e;//#5B5B5B;
    stroke-width:0.7;
    stroke-linecap:round;
    stroke-linejoin:round;
    stroke-miterlimit:10;
  }

</style>
