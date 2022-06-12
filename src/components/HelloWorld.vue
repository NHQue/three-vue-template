<template>

	<div class="hello">
		<h1>Welcome to the three-vue-template</h1>
		<h3>Go to</h3>
		<ul>
			<li><router-link class="router-link" to="/cube">Turning Cube</router-link></li>
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
	margin-bottom: 50px;
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
.router-link {
	text-decoration: none;
	border: 1px solid #42b983;
	padding: 15px;
	border-radius: 25px;
}

.router-link:hover {
	background-color: #42b98317;
}


</style>
