<template>

	<div class="hello">
		<h1>Welcome to the Three.js-Vue.js-Template</h1>
		<h3>Installed CLI Plugins</h3>
		<ul>
			<li><router-link class="router-link" to="/cube">Cube</router-link></li>
			<li><router-link class="router-link" to="/viewport">Viewport</router-link></li>			
		</ul>
	</div>
	
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
