<!--
//  *   vue :
//  *
//  *   Project Name: "Sacred Geometry Sites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.18
//  *   Contributor(s): Aigars Kokins
//  *
//  *   HOME page
//  *
//  *   [home.vue]
//  *
-->

<script setup lang="ts">

</script>

<template>
  <div class="cnn">
    <div class="h">
      <p class="t-hp">Header</p>
    </div>
    <div class="b">
      <p class="bp t-bp">Body</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

.cnn {
  width: 100vw;
  height: 100vh;
  background: var(--c-home-bg);
  overflow:hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.h{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
}
.b{
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: auto;

  .bp {
    margin: auto;
    width: 80%;
    text-align: left;
  }
}

</style>
