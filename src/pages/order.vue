<template>
	<div class="index">
		<top_r v-on:tock="clickOn" :dv=this.$route.params.id></top_r>
		
		<div class="name">我是订单</div>
	</div>
</template>

<script>
	import top_r from '../common/top.vue'
	export default{
		components:{
			top_r
		},
		data(){
			return{
			}
		},
		methods:{
			clickOn(d){
				// console.log(d)
				// console.log(this.$route.params.id)
				
			}
		}
	}
	
</script>

<style scoped>
	.index{
		color: #00f;
		font-size: 0.3rem;
	}
	.name{
		margin-top: 50px;
		text-align: center;
	}
	input{border: 1px solid red;}
</style>
