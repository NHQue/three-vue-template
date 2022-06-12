<template>

		<div id="threeContainer">
			<ThreeCube />
		</div>

		

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

</style>