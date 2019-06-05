<template>
	<div class="container">
		<div class="top">
			<ul>
				<li @click="clickMe(0)" :class="{color:index == 0}">首页</li>
				<li @click="clickMe(1)" :class="{color:index == 1}">商城</li>
				<li @click="clickMe(2)" :class="{color:index == 2}">购物车</li>
				<li @click="clickMe(3)" :class="{color:index == 3}">订单</li>
				<li @click="clickMe(4)" :class="{color:index == 4}">个人中心</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return{
				index:0
			}
		},
		props:{
			step:{
				type:String,
				default:''
			},
			dv:{
				type:String,
				default:''
			}
		},
		methods:{
			onlod(){
				this.index = this.dv;
			},
			clickMe(i){
				this.index = i;
				this.$emit('tock',i);
				switch(i){
					case 0:
					this.$router.push({
							name:'index',
							params:{
								id:'0'
							}
						});
					break; 
					
					case 1:
					this.$router.push({
							name:'shop',
							params:{
								id:'1'
							}
						});
					break; 
					
					case 2:
					this.$router.push({
							name:'shopping_cart',
							params:{
								id:'2'
							}
						});
					break; 
					
					case 3:
					this.$router.push({
							name:'order',
							params:{
								id:'3'
							}
						});
					break; 
					
					case 4:
					this.$router.push({
							name:'my',
							params:{
								id:'4'
							}
						});
					break; 

				}
			}
		},
		mounted() {
			this.onlod()
		}
	}
</script>

<style>
	.top{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 3;
		width: 100%;
		height: 40px;
		background-color: #fff;
	}
	.top ul{
		width: 100%;
		height: 100%;
		padding: 0 5%;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		color: #000;
	}
	.top ul li{
		width: 20%;
		height: 40px;
		text-align: center;
		line-height: 40px;
		font-size: 14px;
	}
	.color{
		color: fuchsia;
	}
</style>
