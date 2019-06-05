<template>
	<div class="shopping_cart">
		<top_r :dv=this.$route.params.id></top_r>
		<div>我是购车</div>
		<!-- <div>woshi{{this.$route.params.id}}</div> -->
	</div>
</template>

<script>
	import top_r from '../common/top.vue'
	export default{
		components:{
			top_r
		}
	}
	
</script>

<style scoped>
	.shopping_cart{
		color: #0f0;
		font-size: 0.3rem;
	},
	.name{
		margin-top: 50px;
		text-align: center;
	}
</style>
