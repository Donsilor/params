<template>
	<div class="container">
		<top_r :step="step" @tock = "receive" :dv=this.$route.params.id></top_r>
		
		<!-- <div class="num" v-for="(data,index) in num" :key="" ref="num">{{data}} -->
			<!-- <div class="city" v-for="(city) in cityItem[index]" ref="city">{{city}}</div> -->
		<!-- </div> -->

		<div class="success" @click="onon">恭喜{{user}}登录成功</div>
		<input type="text" v-model="step">
	</div>
</template>

<script>
	import top_r from '../common/top.vue'
	import Bus from '../common/Bus.js'
	
	export default{
		components:{
			top_r
		},
		data () {
			return{
				user:'',
				step:'666',
				num:['a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t'],
				cityItem:[
					['安徽','鞍山','阿毅','安徽'],
					['北京','碧水','滨海'],
					['苍山','苍山','山'],
					['大海','大运'],
					['富裕','福州'],
					['广州','甘肃'],
					['上海','深圳']
				]
			}
		},
		methods:{
			paixu(){
				// this.$refs.num.forEach(k =>{
					// console.log(index)
				// })
			},
			receive(data){
				// console.log(data)
			},
			onon(){
				Bus.$emit('log',this.step)
			}
		},
		mounted() {
			this.paixu()
		}
	}
</script>

<style scoped>
	.container{
		color: #000;
		font-size: 20px;
	}
	.num{
		margin-left: 20px;
		font-size: 22px;
		color: darkturquoise;
	}
	.city{
		font-size: 14px;
		color: #333;
		padding-left: 15px;
		box-sizing: border-box;
	}
	.success{
		margin-top: 100px;
		text-align: center;
		color: #42B983;
	}
	input{border: 1px solid red;}
</style>
