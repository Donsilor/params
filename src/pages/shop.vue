<template>
	<div class="order">
		<top_r :dv=this.$route.params.id></top_r>
		
		<div>我是商城</div>
		<div>{{dat}}</div>
	</div>
</template>

<script>
	import top_r from '../common/top.vue'
	import Bus from '../common/Bus.js'
	
	export default{
		components:{
			top_r
		},
		data(){
			return{
				dat:'565'
			}
		},
		mounted(){
			var _this = this;
			Bus.$on('log',content => {
				console.log(_this.data)
				this.data = content;
			})
		}
	}
	
</script>

<style scoped>
	.order{
		color: orange;
		font-size: 0.3rem;
	},
	.name{
		margin-top: 50px;
		text-align: center;
	}
</style>
