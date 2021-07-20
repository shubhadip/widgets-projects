<template>
	<div>I am Home Component</div>
	<div><router-link to="/test-one">One</router-link></div>
	<div><router-link to="/test-two">Two</router-link></div>
	<div><router-link to="/test-three">Three</router-link></div>
</template>

<script>
export default {
	name: "Home",
};
</script>