<template>
	<div class="container">
		<div class="user_img">
			<image src="../../static/images/user.png"></image>
		</div>
		<div class="box">
			<div class="list">
				<input class="fl ipt" type="text" value="" :placeholder="ipt_1" placeholder-style="color:#999" v-model="ipt1"/>
			</div>
			<div class="list clf">
				<input ref="ipt" class="fl ipt" :type="text" value="" :placeholder="ipt_2" placeholder-style="color:#999" v-model="ipt2"/>
				<div class="fr clf right">
					<span class="fl iconfont" v-if="ifShow" :class="[{iconmimabukejian: isLook == false},{iconmimakejian: isLook == true}]" @click = "look()"></span>
					<div class="fr forget" :class="[{verification: ifShow == false},{color: this.ipt1 && ifShow == false}]" @click="findPassword">{{forget}}</div>
				</div>
			</div>
		</div>
		
		<router-link to="/index:''" class="btn" :class="{on: ipt1 && ipt2}" @click="login">登录</router-link>
		<div class="reg clf">
			<div class="fl" @click="chooseWay">{{loginWay}}</div>	
			<div class="fr" @click="route">新用户注册</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isLook: false,
				ifShow: true,
				ipt1: '',
				ipt2: '',
				text: 'password',
				ipt_1:'请输入ID/手机号',
				ipt_2:'请输入登录密码',
				forget: '忘记密码',
				loginWay:'短信验证码登录'
			}
		},
		methods:{
			look(){
				this.isLook = !this.isLook;
				this.text = this.text == 'password' ? 'text' : 'password';
			},
			chooseWay(){
				if(this.loginWay == '短信验证码登录' ){
					this.ipt_1 = '请输入手机号';
					this.ipt_2 = '请输入6位验证码';
					this.ipt1 = '';
					this.ipt2 = '';
					this.loginWay = '密码登录';	
					this.forget = '获取验证码';
					this.ifShow = false;
				}else{
					this.ipt_1 = '请输入ID/手机号';
					this.ipt_2 = '请输入登录密码';
					this.ipt1 = '';
					this.ipt2 = '';
					this.loginWay = '短信验证码登录';	
					this.forget = '忘记密码';
					this.ifShow = true;
				}
			},
			findPassword(){

			},
			login:function() {
					console.log('登录成功');


				if(this.ipt1 && this.ipt2){
				
				}
			},
			route(){
				 this.$router.push({path:'/my'})
			}
		},
		// mounted(){
			// this.commonJs()
		// }
	}
</script>

<style>
	.container{
		width: 100%;
		margin: 0 auto;
	}
	.container .user_img{
		width: 75px;
		height: 75px;
		background-color: #ccc;
		border-radius: 50%;
		margin: 50px auto;
	}
	.container .user_img image{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	
	.container .box{
	}
	.container .box .list{
		width: 90%;
		height: 45px;
		line-height: 45px;
		margin: 0 auto;
		border-bottom: 1px solid #ddd;
		font-size: 16px;
		color: #333;
	}
	
	.container .box .list .ipt{
		width: 200px;
		height: 18px;
		font-size: 16px;
		margin-top: 12px;
		border: 0;
		outline: none;
	}
	.container .box .list .right{
		width: 100px;
		height: 20px;
		margin-top: 15px;
		line-height: 16px;
		box-sizing: border-box;
	}
	.container .box .list .right .iconfont{
		padding: 0 14px 0 0;
		box-sizing: border-box;
		border-right: 1px solid #ddd;
		height: 20px
	}
	.container .box .list .right .forget{
		height: 20px;
		line-height: 18px;
		font-size: 14px;
		color: #666;
	}
	.container .box .list .right .verification{
		color: #999;
	}
	.container .box .list .right .color{
		color: #fc921f;
	}
	.container .btn{
		display: block;
		width: 325px;
		height: 48px;
		background: linear-gradient(left, #ff8e06, #ff5011);
		border-radius: 24px;
		font-size: 14px;
		color: #fff;
		line-height: 48px;
		text-align: center;
		margin: 45px auto 30px;
		opacity: .5;
	}
	.container .on{
		opacity: 1;
	}
	.container .reg{
		padding: 0 5%;
		box-sizing: border-box;
		font-size: 14px;
		color: #666;
	}
</style>
