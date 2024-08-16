<!--
//  *   vue : fb65edee-07fa-45e9-8a36-3891f0701c19
//  *
//  *   Project Name: "sacredgeometrysites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.16
//  *   Contributor(s): Aigars Kokins
//  *
//  *   HOME page
//  *
//  *   [home.vue]
//  *
-->

<script setup lang="ts">

  import {ref} from "vue";

  const unique_img_path = 'd/d';
  // --------'image'
  const ref_image = ref('');
  ref_image.value = 'img/'+ unique_img_path +'01.jpg';

</script>

<template>
  <div class="b-cnn">
    <div class="o-cnn">
      <div class="o-image-cnn">

        <img class="o-image" v-bind:src="ref_image" alt="image">

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

@import '@style/mixin.scss';

$include: 600px;
$svg_form_size: 350px;
$svg_form_size_small: 250px;
$webgl_size: 700px;
$webgl_size_small: 350px;
$maxImgWidth: 900px;

.b-cnn {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%; min-width: 100%; max-width: 100%;
  padding-left: 40px;
  padding-right: 60px;
  //border: 3px dashed blue;

  @include for-size($include) {
    padding-left: 0;
    padding-right: 0;
  }}

.o-cnn {
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%; min-width: 100%; max-width: 100%;
  min-height: $svg_form_size;
  margin-bottom: 25px;
  @include for-size($include) {
    min-height: $svg_form_size_small;
  }}

.o-image-cnn        {
  margin-top: 40px;
  width: 760px;
  opacity: 1;
  @include for-size($include) {
    width: 480px;
    padding-left: 20px;
    opacity: 1;
  }}
.o-image            {
  max-width: 100%;
  max-height: 100%;
}

</style>

