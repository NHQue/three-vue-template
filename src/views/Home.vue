<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<img id="three-logo" alt="Three logo" src="../assets/Three_logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>

	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
	name: 'Home',
	components: {
		HelloWorld
	}
}
</script>



<style scoped>

#three-logo {
	margin-left: 50px;
	height: 190px;
	width: 190px;
}



</style>