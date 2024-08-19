<!--
//  *   vue :
//  *
//  *   Project Name: "sacredgeometrysites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.19
//  *   Contributor(s): Aigars Kokins, ChatGPT
//  *
//  *   some experiments
//  *
-->

<script setup lang="ts">

import {onBeforeUnmount, onMounted, ref} from "vue";

/**
 * initialized values
 * @param ref_grid_cnn - div element in DOM where grid and its items will be stored
 * @param grid_cnn_width - screen width
 * @param grid_cnn_height - screen height
 *
 */
const ref_grid_cnn = ref<HTMLDivElement>(null);
const grid_cnn_width = ref(window.innerWidth + 50);
const grid_cnn_height = ref(window.innerHeight + 50);

/**
 * fn_round_numbers function
 * @remarks
 * round numbers so that they are divisible
 */
const fn_round_numbers = () => {

  console.clear();

  grid_cnn_width.value = Math.ceil(grid_cnn_width.value) + 50;
  // console.log(`init: grid_cnn_width: %c${grid_cnn_width.value}`, "color: #828282; font-family:sans-serif; font-size: 25px");


  grid_cnn_height.value = Math.ceil(grid_cnn_height.value) + 50;
  // console.log(`init: grid_cnn_height: %c${grid_cnn_height.value}`, "color: #828282; font-family:sans-serif; font-size: 25px");
}

const fn_updateGridSize = () => {

  fn_round_numbers();
  ref_grid_cnn.value.innerHTML = '';
  grid_cnn_width.value = window.innerWidth + 50;         // console.log('grid_cnn_width.value: ', grid_cnn_width.value);
  grid_cnn_height.value = window.innerHeight + 50;        //console.log('grid_cnn_height.value', grid_cnn_height.value);

  fn_createGrid();
};


const fn_createGrid = () => {

  const gridItemWidth = 50;  // Must match CSS
  const gridItemHeight = 50; // Must match CSS

  const cols = Math.floor(grid_cnn_width.value / gridItemWidth);
  const rows = Math.floor(grid_cnn_height.value / gridItemHeight);

  // class list to choose from
  const possibleClasses = ['cls_g1', 'cls_g2', 'cls_g3', 'cls_g4', 'cls_g5'];
  const possibleTexts = ['A', 'B', 'C', '1', '2', '3', '!'];  // Array of random text
  const possibleSVGs = ['dodekahedron', 'tetrahedron', 'hexahedron'];  // Array of SVG element types

  const styleSettings = {
    'cls_g1': {
      backgroundColor: '#faf6f6',
      // color: '#ffffff',
      // border: '0.3px dashed gray'
      // opacity: '0.3',
    },
    'cls_g2': {
      backgroundColor: '#fafbf8',
      // color: '#ff0000',
      // border: '0.3px dashed gray'
      // opacity: '0.3',
    },
    'cls_g3': {
      backgroundColor: '#fbfbf8',
      // color: '#ff0000',
      // border: '0.3px dashed gray'
      // opacity: '0.3',
    },
    'cls_g4': {
      backgroundColor: '#f3f4f6',
      // color: '#ff0000',
      // border: '0.3px dashed gray'
      // opacity: '0.3',
    },
    'cls_g5': {
      backgroundColor: '#fbf8fb',
      // color: '#ff0000',
      // border: '0.3px dashed gray'
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



      const childDiv = document.createElement('div');
      // childDiv.style.width = `40px`;


      // Create an SVG element
      const svgNS = "http://www.w3.org/2000/svg";
      const svgElement = document.createElementNS(svgNS, 'svg');

      // Randomly choose an SVG element type
      const randomSVG = possibleSVGs[Math.floor(Math.random() * possibleSVGs.length)];
      let shape = null;

        if (randomSVG === 'dodekahedron') {

          svgElement.setAttribute('x', '0');
          svgElement.setAttribute('y', '0');
          svgElement.setAttribute('width', '100%');
          svgElement.setAttribute('height', '100%');
          svgElement.setAttribute('viewBox', '0 0 50 50');
          svgElement.setAttribute('focusable', 'false')
          svgElement.setAttribute('role', 'img');

          svgElement.setAttribute('fill', 'none');
          svgElement.setAttribute('stroke', '#d6d0d6');
          svgElement.setAttribute('stroke-width', '0.4');
          svgElement.setAttribute('stroke-miterlimit', '10');

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '46.1');
            shape.setAttribute('y1', '27.3');
            shape.setAttribute('x2', '46.1');
            shape.setAttribute('y2', '13.1');
            svgElement.appendChild(shape);

            // <line>
            shape = null;
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '33');
            shape.setAttribute('y1', '26');
            shape.setAttribute('x2', '46.1');
            shape.setAttribute('y2', '27.3');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '46.1');
            shape.setAttribute('y1', '27.3');
            shape.setAttribute('x2', '43.2');
            shape.setAttribute('y2', '41.1');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '46.1');
            shape.setAttribute('y1', '13.1');
            shape.setAttribute('x2', '33');
            shape.setAttribute('y2', '3');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '43.2');
            shape.setAttribute('y1', '18.1');
            shape.setAttribute('x2', '46.1');
            shape.setAttribute('y2', '13.1');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '3.8');
            shape.setAttribute('y1', '36.8');
            shape.setAttribute('x2', '3.8');
            shape.setAttribute('y2', '22.6');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '28.1');
            shape.setAttribute('y1', '48.2');
            shape.setAttribute('x2', '21.8');
            shape.setAttribute('y2', '38.9');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '3.8');
            shape.setAttribute('y1', '36.8');
            shape.setAttribute('x2', '17');
            shape.setAttribute('y2', '46.9');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '6.8');
            shape.setAttribute('y1', '31.9');
            shape.setAttribute('x2', '3.8');
            shape.setAttribute('y2', '36.8');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '21.8');
            shape.setAttribute('y1', '38.9');
            shape.setAttribute('x2', '6.8');
            shape.setAttribute('y2', '31.9');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '8.6');
            shape.setAttribute('y1', '14.6');
            shape.setAttribute('x2', '6.8');
            shape.setAttribute('y2', '31.9');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '24.8');
            shape.setAttribute('y1', '11');
            shape.setAttribute('x2', '33');
            shape.setAttribute('y2', '26');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '21.8');
            shape.setAttribute('y1', '38.9');
            shape.setAttribute('x2', '33');
            shape.setAttribute('y2', '26');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '3.8');
            shape.setAttribute('y1', '22.6');
            shape.setAttribute('x2', '6.8');
            shape.setAttribute('y2', '8.9');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '17');
            shape.setAttribute('y1', '23.9');
            shape.setAttribute('x2', '3.8');
            shape.setAttribute('y2', '22.6');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '21.8');
            shape.setAttribute('y1', '1.7');
            shape.setAttribute('x2', '28.1');
            shape.setAttribute('y2', '11');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '17');
            shape.setAttribute('y1', '46.9');
            shape.setAttribute('x2', '25.1');
            shape.setAttribute('y2', '39');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '17');
            shape.setAttribute('y1', '46.9');
            shape.setAttribute('x2', '28.1');
            shape.setAttribute('y2', '48.2');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '43.2');
            shape.setAttribute('y1', '41.1');
            shape.setAttribute('x2', '28.1');
            shape.setAttribute('y2', '48.2');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '43.2');
            shape.setAttribute('y1', '41.1');
            shape.setAttribute('x2', '41.3');
            shape.setAttribute('y2', '35.3');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '8.6');
            shape.setAttribute('y1', '14.6');
            shape.setAttribute('x2', '24.8');
            shape.setAttribute('y2', '11');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '6.8');
            shape.setAttribute('y1', '8.9');
            shape.setAttribute('x2', '8.6');
            shape.setAttribute('y2', '14.6');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '21.8');
            shape.setAttribute('y1', '1.7');
            shape.setAttribute('x2', '6.8');
            shape.setAttribute('y2', '8.9');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '21.8');
            shape.setAttribute('y1', '1.7');
            shape.setAttribute('x2', '33');
            shape.setAttribute('y2', '3');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '33');
            shape.setAttribute('y1', '3');
            shape.setAttribute('x2', '24.8');
            shape.setAttribute('y2', '11');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '17');
            shape.setAttribute('y1', '23.9');
            shape.setAttribute('x2', '28.1');
            shape.setAttribute('y2', '11');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '25.1');
            shape.setAttribute('y1', '39');
            shape.setAttribute('x2', '17');
            shape.setAttribute('y2', '23.9');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '41.3');
            shape.setAttribute('y1', '35.3');
            shape.setAttribute('x2', '25.1');
            shape.setAttribute('y2', '39');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '41.3');
            shape.setAttribute('y1', '35.3');
            shape.setAttribute('x2', '43.2');
            shape.setAttribute('y2', '18.1');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '43.2');
            shape.setAttribute('y1', '18.1');
            shape.setAttribute('x2', '28.1');
            shape.setAttribute('y2', '11');
            svgElement.appendChild(shape);


          // Append the SVG element to the grid item
          childDiv.appendChild(svgElement);

          gridItem.appendChild(childDiv);

        }

        else if (randomSVG === 'hexahedron') {

          svgElement.setAttribute('x', '0');
          svgElement.setAttribute('y', '0');
          svgElement.setAttribute('width', '100%');
          svgElement.setAttribute('height', '100%');
          svgElement.setAttribute('viewBox', '0 0 50 50');
          svgElement.setAttribute('focusable', 'false')
          svgElement.setAttribute('role', 'img');

          svgElement.setAttribute('fill', 'none');
          svgElement.setAttribute('stroke', '#8aa9fa');
          svgElement.setAttribute('stroke-width', '0.4');
          svgElement.setAttribute('stroke-miterlimit', '10');

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '46.9');
            shape.setAttribute('y1', '8.6');
            shape.setAttribute('x2', '19.8');
            shape.setAttribute('y2', '0.8');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '46.9');
            shape.setAttribute('y1', '8.6');
            shape.setAttribute('x2', '46.9');
            shape.setAttribute('y2', '35.7');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '19.8');
            shape.setAttribute('y1', '28');
            shape.setAttribute('x2', '46.9');
            shape.setAttribute('y2', '35.7');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '19.8');
            shape.setAttribute('y1', '0.8');
            shape.setAttribute('x2', '19.8');
            shape.setAttribute('y2', '28');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '31.2');
            shape.setAttribute('y1', '22');
            shape.setAttribute('x2', '46.9');
            shape.setAttribute('y2', '8.6');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '31.2');
            shape.setAttribute('y1', '22');
            shape.setAttribute('x2', '31.2');
            shape.setAttribute('y2', '49.2');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '46.9');
            shape.setAttribute('y1', '35.7');
            shape.setAttribute('x2', '31.2');
            shape.setAttribute('y2', '49.2');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '19.8');
            shape.setAttribute('y1', '0.8');
            shape.setAttribute('x2', '4.1');
            shape.setAttribute('y2', '14.2');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '4.1');
            shape.setAttribute('y1', '41.4');
            shape.setAttribute('x2', '19.8');
            shape.setAttribute('y2', '28');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '4.1');
            shape.setAttribute('y1', '14.2');
            shape.setAttribute('x2', '31.2');
            shape.setAttribute('y2', '22');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '4.1');
            shape.setAttribute('y1', '14.2');
            shape.setAttribute('x2', '4.1');
            shape.setAttribute('y2', '41.4');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '31.2');
            shape.setAttribute('y1', '49.2');
            shape.setAttribute('x2', '4.1');
            shape.setAttribute('y2', '41.4');
            svgElement.appendChild(shape);


          // Append the SVG element to the grid item
          childDiv.appendChild(svgElement);

          gridItem.appendChild(childDiv);

        }

        else if (randomSVG === 'tetrahedron') {

          svgElement.setAttribute('x', '0');
          svgElement.setAttribute('y', '0');
          svgElement.setAttribute('width', '100%');
          svgElement.setAttribute('height', '100%');
          svgElement.setAttribute('viewBox', '0 0 50 50');
          svgElement.setAttribute('focusable', 'false')
          svgElement.setAttribute('role', 'img');

          svgElement.setAttribute('fill', 'none');
          svgElement.setAttribute('stroke', '#ff9a9a');
          svgElement.setAttribute('stroke-width', '0.4');
          svgElement.setAttribute('stroke-miterlimit', '10');

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '4.1');
            shape.setAttribute('y1', '28');
            shape.setAttribute('x2', '44.5');
            shape.setAttribute('y2', '46.8');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '4.1');
            shape.setAttribute('y1', '28');
            shape.setAttribute('x2', '31.5');
            shape.setAttribute('y2', '3.1');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '44.5');
            shape.setAttribute('y1', '46.8');
            shape.setAttribute('x2', '45.8');
            shape.setAttribute('y2', '11');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '31.5');
            shape.setAttribute('y1', '3.1');
            shape.setAttribute('x2', '45.8');
            shape.setAttribute('y2', '11');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '44.5');
            shape.setAttribute('y1', '46.8');
            shape.setAttribute('x2', '31.5');
            shape.setAttribute('y2', '3.1');
            svgElement.appendChild(shape);

            // <line>
            shape = document.createElementNS(svgNS, 'line');
            shape.setAttribute('x1', '45.8');
            shape.setAttribute('y1', '11');
            shape.setAttribute('x2', '4.1');
            shape.setAttribute('y2', '28');
            svgElement.appendChild(shape);


          // Append the SVG element to the grid item
          childDiv.appendChild(svgElement);

          gridItem.appendChild(childDiv);

        }



      divGrid.appendChild(gridItem);


    }

  }

}

onMounted(() => {
  fn_createGrid(); // Initial grid creation
  window.addEventListener('resize', fn_updateGridSize); // Listen for resize events
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', fn_updateGridSize); // Cleanup on component unmount
});


</script>

<template>
  <div class="cnn">
<!--    <div class="inFront"></div>-->
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

.svg-static       {
  user-select:none;
  overflow:hidden;
}
.svg-static-st1   {
  fill:none;
  stroke: #ef10a1; //var(--svg-object-color); //#252633;//#5B5B5B;
  stroke-width:1;
  stroke-linecap:round;
  stroke-linejoin:round;
  stroke-miterlimit:10;
}


//.inFront{
//  z-index: 1000;
//  position: absolute;
//  margin-top: 150px;
//  margin-left: 200px;
//  width: 200px; min-width: 200px;
//  height: 260px; min-height: 260px;
//  background-color: var(--C-background-color);
//  border: 1px solid var(--vivente-icon-lines);
//  border-radius: 10px;
//}
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
