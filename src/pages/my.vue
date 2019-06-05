<template>
	<div class="container">
		<top_r :dv=this.$route.params.id></top_r>
		
		<div class="top_bgcolor">
			<div class="user clf">
				<div class="user_img fl">
					<image src="/static/images/user.png"></image>
				</div>
				<div class='fl'>
					<div class="clf">
						<div class='user_name fl'>风平浪静</div>
						<div class="rank fl">
							<span class='fl circle'>
								<i class='iconfont iconxingxing'></i>
							</span>
							<span class='fl'>学员</span>
						</div>
					</div>
					<div class="user_id">ID：5263225</div>
				</div>
			</div>
			
			<div class="integral clf">
				<div class="fl integral_r">
					<div class="num">3662</div>积分
				</div>
				<div class="fr integral_r">
					<div class="num">5233</div>幸福指数
				</div>
				<span class='line'></span>
			</div>
		</div>
		
		<div class="my_order">
			<div class="tit">我的订单</div>
			<div class="order_box">
				<div class="list">
					<div class="icon icon1"></div>待付款
				</div>
				<div class="list">
					<div class="icon icon2"></div>待发货
				</div>
				<div class="list">
					<div class="icon icon3"></div>待收货
				</div>
				<div class="list">
					<div class="icon icon4"></div>已完成
				</div>
				<div class="list">
					<div class="icon icon5"></div>全部订单
				</div>
			</div>
		</div>
		
		<div class="my_box">
			<div class="list">
				<span class='fl icon'>
					<i class='iconfont iconhuiyuan'></i>
				</span>我的粉丝
			</div>
			<div class="list">
				<span class='fl icon'>
					<i class='iconfont icondianzan'></i>
				</span>我的推荐码
			</div>
			<div class="list">
				<span class='fl icon'>
					<i class='iconfont icondizhi'></i>
				</span>收货地址管理
			</div>
			<div class="list">
				<span class='fl icon'>
					<i class='iconfont iconkefu1'></i>
				</span>联系客服
			</div>
			<div class="list">
				<span class='fl icon'>
					<i class='iconfont iconshezhi'></i>
				</span>设置
			</div>
		</div>

	</div>
</template>

<script>
	import top_r from '../common/top.vue'
	
	export default{
		data () {
			return{
				index: ''
			}
		},
		components:{
			top_r
		}
	}
</script>

<style scoped>
	page{
		background: #f5f5f5;
	}

	.top_bgcolor{
		width: 100%;
		height: 246px;
		background: url('https://szdbi.oss-cn-shenzhen.aliyuncs.com/youfangyouche/personal_01.png') no-repeat center;
		background-size: 100% 100%;
		padding-top: 64px;
		box-sizing: border-box;
	}
	.top_bgcolor .user{
		height: 40px;
	}
	.top_bgcolor .user .user_img{
		width: 40px;
		height: 40px;
		background-color: #fff;
		border-radius: 50%;
		text-align: center;
		line-height: 40px;
		margin: 0 15px;
	}
	.top_bgcolor .user .user_img image{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.top_bgcolor .user .user_name{
		font-size: 16px;
		color: #fff;
		margin-right: 15px;
	}
	.top_bgcolor .user .rank{
		width: 48px;
		height: 16px;
		background: linear-gradient(to right, #57575c, #363b3f, #0f0e15);
		border-radius: 8px;
		line-height: 16px;
		margin-top: 4px;
		font-size: 12px;
		color: #fff;
	}
	.top_bgcolor .user .rank .circle{
		width: 16px;
		height: 16px;
		background: linear-gradient(top left, #f8d986, #cea048);
		border-radius: 50%;
		margin-left: -1px;
		margin-right: 4px;
		text-align: center;
		line-height: 14px;
	}
	.top_bgcolor .user .rank .circle .iconxingxing{
		font-size: 12px;
		color: #fff;
	}
	.top_bgcolor .user .user_id{
		font-size: 14px;
		color: #fff;
		margin-top: 5px;
	}
	.integral{
		width: 90%;
		margin: 25px 0 0 5%;
		position: relative;
	}	
	.integral .integral_r{
		width: 50%;
		text-align: center;
		font-size: 14px;
		color: #fff;
	}
	.integral .num{
		font-size: 24px;
		color: #fff;
		margin-bottom: 5px;
	}
	.integral .line{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 30px;
		width: 1px;
		border-left: 1px solid #fff;
	}
	.my_order{
		width: 90%;
		hegiht: 128px;
		background-color: #fff;
		border-radius: 5px;
		margin: -50px 0 0 5%;
		padding: 20px 0;
		box-sizing: border-box;
	}
	.my_order .tit{
		font-size: 18px;
		color: #333;
		margin-left: 15px;
	}
	.my_order .order_box{
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 20px;
	}
	.my_order .order_box .list{
		font-size: 12px;
		color: #333;
		text-align: center;
	}
	.my_order .order_box .list .icon{
		width: 34px;
		height: 32px;
		margin: 0 auto 10px;
	}
	.my_order .icon1{
		background: url('https://szdbi.oss-cn-shenzhen.aliyuncs.com/youfangyouche/my_icon_01.png') no-repeat center center;
		background-size: 32px 32px;
	}
	.my_order .icon2{
		background: url('https://szdbi.oss-cn-shenzhen.aliyuncs.com/youfangyouche/my_icon_02.png') no-repeat center center;
		background-size: 30px 28px;
	}
	.my_order .icon3{
		background: url('https://szdbi.oss-cn-shenzhen.aliyuncs.com/youfangyouche/my_icon_03.png') no-repeat center center;
		background-size: 34px 30px;
	}
	.my_order .icon4{
		background: url('https://szdbi.oss-cn-shenzhen.aliyuncs.com/youfangyouche/my_icon_04.png') no-repeat center center;
		background-size: 30px 28px;
	}
	.my_order .icon5{
		background: url('https://szdbi.oss-cn-shenzhen.aliyuncs.com/youfangyouche/my_icon_05.png') no-repeat center center;
		background-size: 24px 28px;
	}
	
	.my_box{
		width: 90%px;
		background-color: #fff;
		border-radius: 5px;
		margin: 10px;
		padding: 0 10px;
		box-sizing: border-box;
	}
	.my_box .list{
		height: 50px;
		font-size: 16px;
		color: #333;
		line-height: 50px;
	}
	.my_box .list .icon{
		width: 18px;
		height: 18px;
		margin-right: 10px;
		margin-top: 18px;
		text-align: center;
		line-height: 18px;
	}
	.my_box .list .icon .iconfont{
		color: #ff7e00;
		font-size: 18px;
	}
	.my_box .list:not(:last-child){
		border-bottom: 1px solid #ddd;
	}

</style>
