<template>

	<div id="threeContainer">
		<ThreeCube />
	</div>

	<router-link class="button-back" to="/">Back</router-link>
	

</template>

<script>
// @ is an alias to /src
import ThreeCube from '@/components/ThreeCube.vue';

export default {
	name: 'ThreeView',
	components: {
		ThreeCube
	}
}
</script>



<style scoped>

#threeContainer {
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	position: absolute;
	background: black;
}

.button-back {
	text-decoration: none;
	appearance: none;
	background-color: transparent;
	border: 1px solid white;
	color: white;
	border-radius: 10px;
	padding: 5px 15px;
	position: fixed;
	top: 2%;
	left: 96%;
	cursor: pointer;
}

.button-back:hover {
	background-color: rgba(255, 255, 255, 0.189);
}

</style>