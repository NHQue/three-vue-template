/* eslint-disable no-undef */

<template>
	<div id="wrapper">
		<div id="container" @mousedown="onMouseDown" @mouseup="onMouseUp">
		</div>
	</div>
</template>

<script>


//--------------------------------------------------------------------------------------------------------------
//												IMPORT 
//--------------------------------------------------------------------------------------------------------------

//Import Three.js
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { Rhino3dmLoader } from 'three/examples/jsm/loaders/3DMLoader.js';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';


THREE.Object3D.DefaultUp.set(0, 0, 1);
window.THREE = THREE;


//For Three.js
let container, renderer, scene, camera, orbitControl, composer;
scene = new THREE.Scene();
// let sceneContent;
var mainGrid;
var grid10m;
var axesHelper;


export default {
	name: "Three1",
	data() {
		return {
	
		};
	},
	methods: {
		init() {

			container = document.getElementById("container");

			// Camera
			camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.01, 10000000);
			camera.position.set(50, 70, 40);
			camera.lookAt(new THREE.Vector3());
			scene = new THREE.Scene();

			//Renderer
			renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			renderer.xr.enabled = true;
			renderer.setSize(container.clientWidth, container.clientHeight);
			renderer.setPixelRatio(window.devicePixelRatio);
			// renderer.setClearColor(0xf2f2f2);
			renderer.setClearColor(0xd4d4d4, 0);
			container.appendChild(renderer.domElement);

			//Composer
			composer = new EffectComposer(renderer);
			composer.addPass(new RenderPass(scene, camera));

			//Lights
			// Spot light
			const spotLight = new THREE.SpotLight( 0xffffff, 1.5 );
			spotLight.position.set( 0, 1500, 200 );
			spotLight.angle = Math.PI * 0.2;
			spotLight.castShadow = false;
			spotLight.shadow.camera.near = 200;
			spotLight.shadow.camera.far = 2000;
			spotLight.shadow.bias = - 0.000222;
			spotLight.shadow.mapSize.width = 1024;
			spotLight.shadow.mapSize.height = 1024;
			scene.add( spotLight );

			// //Ambient light 
			const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
			scene.add(ambientLight);
			// //Directional light 
			const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
			directionalLight.position.set(40, 40, 20);
			scene.add(directionalLight);

			//Controls
			orbitControl = new OrbitControls(camera, renderer.domElement);
			orbitControl.enableDamping = true;
			orbitControl.dampingFactor = 0.2;
			orbitControl.update();

			//Grid and Axes
			mainGrid = new THREE.GridHelper( 100, 100 );
			mainGrid.geometry.rotateX( Math.PI / 2 );
			mainGrid.material.opacity = 0.25;
			mainGrid.material.transparent = true;

			grid10m = new THREE.GridHelper( 100, 10 );
			grid10m.geometry.rotateX( Math.PI / 2 );
			grid10m.material.opacity = 0.45;
			grid10m.material.transparent = true;
			
			scene.add( mainGrid,  grid10m);

			const axesHelper = new THREE.AxesHelper( 3 );    //x-Axis -> red, y-Axis -> green, z-Axis -> blue
			scene.add( axesHelper );

			//Event listeners
			window.addEventListener( 'pointermove', this.onPointerMove );
			window.addEventListener( 'pointerdown', this.onPointerDown );
			window.addEventListener( 'pointerup', this.onPointerUp );

			//Raycaster for drawing tool
			const raycaster = new THREE.Raycaster();
			var plane = new THREE.Plane( new THREE.Vector3( 0, 0, 1), 0 );
			const clickMouse = new THREE.Vector2();


			//Sphere
			// const sphereGeometry = new THREE.SphereGeometry( 15, 32, 16 );
			// const material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
			// material.opacity = 0.9;
			// material.transparent = true;
			// const sphereMesh = new THREE.Mesh( sphereGeometry, material );
			// scene.add( sphereMesh );

		},
		animate() {
			renderer.setAnimationLoop(() => {
				// controls.update();
				composer.render();
				renderer.render(scene, camera);
			});
		},
		render() {
			renderer.render(scene, camera);
		},
	},
	mounted() {
		this.init();
		this.animate();
		setTimeout(this.loadModel, 2000);
	},
};
</script>


<style scoped>

#container {
	width: 100%;
	height: 100%;
	padding: 0px;
	margin: 0px;
	overflow: hidden;
	position: absolute;
}

#wrapper {
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	overflow: hidden;
}

</style>