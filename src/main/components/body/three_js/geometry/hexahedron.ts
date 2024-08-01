

import * as THREE from 'three';


export const hexahedron = new THREE.BoxGeometry(1,1, 1);




// import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
// import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
//
//
// const objHex = new OBJLoader();
// const mtlHex = new MTLLoader();
//
// let hexahedron = 'hexahedron3';
// let dodekahedron = 'dodekahedron3';
//
// mtlHex.load('./obj/'+hexahedron+'.mtl', function ( materials ) {
//       materials.preload();
//
//       objHex.setMaterials(materials);
//       objHex.load('./obj/'+hexahedron+'.obj',function ( object ) {
//             // object.position.z += 2;
//
//
//
//             // --NOT ___ VISIBLE ON SCENE -----
//             // scene.add( object );
//
//           },
//           function ( xhr ) {fn_onProgress(xhr);},
//           function ( error ) {fn_onError( error );}
//       );
//     },
//     function ( xhr ) {fn_onProgress(xhr);},
//     function ( error ) {fn_onError( error );}
// );
//
// //
// // const edges = new THREE.EdgesGeometry( objHex );
// // const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: "#222222" } ) );
// // scene.add( line );
// //
// //
// function fn_onProgress(xhr){
//   console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
// }
// function fn_onError( error ) {
//   console.log( 'An error happened', error );
// }
