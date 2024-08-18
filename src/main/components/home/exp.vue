<!--
//  *   vue :
//  *
//  *   Project Name: "sacredgeometrysites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.18
//  *   Contributor(s): Aigars Kokins
//  *
//  *   some experiments, not production, to slow to render
//  *
-->

<script setup lang="ts">

import {onBeforeUnmount, onMounted, ref, watchEffect} from "vue";

const ref_grid_cnn = ref<HTMLDivElement>(null);
const grid_cnn_width = ref(window.innerWidth);
const grid_cnn_height = ref(window.innerHeight);


// const updateGridSize = () => {
//   grid_cnn_width.value = window.innerWidth;   // console.log('grid_cnn_width.value: ', grid_cnn_width.value);
//   grid_cnn_height.value = window.innerHeight; // console.log('grid_cnn_height.value', grid_cnn_height.value);
//
//   createGrid();
// };


const createGrid = () => {

  const gridItemWidth = 50;  // Must match CSS
  const gridItemHeight = 50; // Must match CSS

  const cols = Math.floor(grid_cnn_width.value / gridItemWidth);
  const rows = Math.floor(grid_cnn_height.value / gridItemHeight);

  // class list to choose from
  const possibleClasses = ['cls_g1', 'cls_g2', 'cls_g3', 'cls_g4', 'cls_g5'];
  const possibleTexts = ['A', 'B', 'C', '1', '2', '3', '!'];  // Array of random text

  const styleSettings = {
    'cls_g1': {
      backgroundColor: '#dfe8ef',
      color: '#ffffff',
      // border: '1px solid #000'
      // opacity: '0.3',
    },
    'cls_g2': {
      backgroundColor: '#f6f4ec',
      color: '#ff0000',
      // border: '2px solid red'
      // opacity: '0.3',
    },
    'cls_g3': {
      backgroundColor: '#f1eae5',
      color: '#ff0000',
      // border: '2px solid red'
      // opacity: '0.3',
    },
    'cls_g4': {
      backgroundColor: '#edf6f5',
      color: '#ff0000',
      // border: '2px solid red'
      // opacity: '0.3',
    },
    'cls_g5': {
      backgroundColor: '#f4f5fb',
      color: '#ff0000',
      // border: '2px solid red'
      // opacity: '0.3',
    }
  };

  const divGrid = ref_grid_cnn.value as HTMLDivElement
  // console.log(divGrid);

  if(divGrid){

    divGrid.style.gridTemplateColumns = `repeat(${cols}, ${gridItemWidth}px)`;
    divGrid.style.gridTemplateRows = `repeat(${rows}, ${gridItemHeight}px)`;

    for (let i = 0; i < cols * rows; i++) {
      const gridItem = document.createElement('div');

      // // Assign random text
      // gridItem.textContent = possibleTexts[Math.floor(Math.random() * possibleTexts.length)];

      // Assign a random class
      const randomClass = possibleClasses[Math.floor(Math.random() * possibleClasses.length)];
      gridItem.className = `grid-item ${randomClass}`;

      // Set multiple style properties
      const styles = styleSettings[randomClass];
      for (const property in styles) {
        gridItem.style[property] = styles[property];
      }


      divGrid.appendChild(gridItem);
    }

  }

}

onMounted(() => {
  createGrid(); // Initial grid creation
  // window.addEventListener('resize', updateGridSize); // Listen for resize events
});
// onBeforeUnmount(() => {
//   window.removeEventListener('resize', updateGridSize); // Cleanup on component unmount
// });


</script>

<template>
  <div class="cnn">
    <div class="inFront"></div>
    <div ref="ref_grid_cnn" class="grid-cnn"/>
  </div>
</template>

<style scoped lang="scss">

.cnn {
  z-index: 10;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: var(--c-home-bg);
  overflow:hidden;
}
  .grid-cnn{
    position: relative;
    display: grid;
    width: 100%;
    height: 100%;
    //border: 3px dashed #494d5a;
}
  .grid-item{
    width: 100%;
    height: 100%;
    //box-sizing: border-box;
  }
.grid-item.cls_g1 {
  background-color: #4f4f52 !important;
}

.grid-item.cls_g2 {
  background-color: #58588c !important;

}
.inFront{
  z-index: 1000;
  position: absolute;
  margin-top: 150px;
  margin-left: 200px;
  width: 200px; min-width: 200px;
  height: 260px; min-height: 260px;
  background-color: var(--C-background-color);
  border: 1px solid var(--vivente-icon-lines);
  border-radius: 10px;
}
</style>

<!--//align-content: center;-->
<!--//vertical-align: center;-->

<!--    <iframe class="iframe-cnn"-->
<!--            src=""-->
<!--            height="100%"-->
<!--            width="100%"-->
<!--    >-->
<!--    </iframe>-->
<!--//.iframe-cnn {-->
<!--//  height:100%;-->
<!--//  width:100%;-->
<!--//  overflow:hidden;-->
<!--//  border: 0;-->
<!--//}-->