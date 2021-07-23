<template>
	<div class="font-bold text-24 p-16 text-white bg-red">I am Widget One</div>
	<div class="font-bold text-24 p-16 text-white bg-red">{{data.name}}</div>
	<div v-html="data.description"></div>
</template>

<script >
import { ref, onMounted } from 'vue';

export default {
	name: "Test1",
	setup(){
		const data = ref({})
		
		onMounted(() => {
			fetch('http://localhost:1337/restaurants')
				.then(data => data.json())
				.then((response) => {
					data.value = response[0]
				})
		})

		return {
			data
		}
	}
};
</script>
<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
