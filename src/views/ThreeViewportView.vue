<template>

		<div id="threeContainer">
			<ThreeViewport />
		</div>

		

</template>

<script>
// @ is an alias to /src
import ThreeViewport from '@/components/ThreeViewport.vue';

export default {
	name: 'ThreeViewportView',
	components: {
		ThreeViewport
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