<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	body{
		max-width: 750px;
		margin: 0 auto !important;
	}
		
		
		/* reset */
	html,body,div,span,iframe,h1,h2,h3,h4,h5,h6,
	em,img,strong,sub,sup,b,i,dl,dt,dd,ol,ul,li,
	form,label,table,tbody,tfoot,thead,tr,th,td,
	p,canvas,footer,header,nav,audio,video {
		margin:0;
		padding:0;
	}
	h1,h2,h3,h4,h5,h6,em,i {
		font-weight:100;
		font-style:normal;
	}
	ul,ol,li {
		list-style-type:none;
	}
	input {
		outline: none;
		border: none;
	}
	button:after{
		border: 0;
	}
	
	
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	.clf:after{
		display: block;
		content: '.';
		visibility: hidden;
		opacity: 0;
		height: 0;
		clear: both;
	}
	
	.btn_r{
		width: 325px;
		height: 48px;
		background: linear-gradient(left, #ff8e06, #ff5011);
		border-radius: 24px;
		font-size: 14px;
		color: #fff;
		text-align: center;
		line-height: 47px;
		margin: 45px auto 0;
		opacity: .5;
	}
	.btn_r.on{
		opacity: 1;
	}
	
	.bgcolor_r{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
		z-index: -2;
	}
	
	
	@font-face {
	  font-family: 'iconfont';  /* project id 1187559 */
	  src: url('http://at.alicdn.com/t/font_1187559_elnhdyckmss.eot');
	  src: url('http://at.alicdn.com/t/font_1187559_elnhdyckmss.eot?#iefix') format('embedded-opentype'),
	  url('http://at.alicdn.com/t/font_1187559_elnhdyckmss.woff2') format('woff2'),
	  url('http://at.alicdn.com/t/font_1187559_elnhdyckmss.woff') format('woff'),
	  url('http://at.alicdn.com/t/font_1187559_elnhdyckmss.ttf') format('truetype'),
	  url('http://at.alicdn.com/t/font_1187559_elnhdyckmss.svg#iconfont') format('svg');
	}	



	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	

	.icondaohang:before {
	  content: "\e602";
	}

	.iconfenxiang:before {
	  content: "\e600";
	}

	.iconcart:before {
	  content: "\e601";
	}

	.iconiconfontfenxiang3:before {
	  content: "\e629";
	}

	.iconshanchu:before {
	  content: "\e6fa";
	}

	.iconkefu:before {
	  content: "\e658";
	}

	.iconnotice:before {
	  content: "\e6a9";
	}

	.iconjian:before {
	  content: "\e608";
	}

	.iconjia:before {
	  content: "\e609";
	}

	.icondizhi:before {
	  content: "\e604";
	}

	.icondianhua:before {
	  content: "\e605";
	}

	.iconunselected:before {
	  content: "\e607";
	}

	.iconselected:before {
	  content: "\e60f";
	}

	.iconxiangji:before {
	  content: "\e60e";
	}

	.iconshoucang:before {
	  content: "\e613";
	}

	.iconMagnifier:before {
	  content: "\e62d";
	}

	.iconjifendingdan:before {
	  content: "\e60b";
	}

	.iconjifenduihuan:before {
	  content: "\e60c";
	}

	.iconclear:before {
	  content: "\e713";
	}

	.iconmenu-line:before {
	  content: "\e653";
	}

	.iconkefu2:before {
	  content: "\e610";
	}

	.iconfanhui:before {
	  content: "\e60a";
	}

	.icongengduo:before {
	  content: "\e617";
	}

	.iconmimabukejian:before {
	  content: "\e61b";
	}

	.iconmimakejian:before {
	  content: "\e61c";
	}

	.iconxingxing:before {
	  content: "\e618";
	}

	.iconkefu1:before {
	  content: "\e60d";
	}

	.iconshezhi:before {
	  content: "\e615";
	}

	.icondianzan:before {
	  content: "\e616";
	}

	.icondizhi1:before {
	  content: "\e622";
	}

	.iconhuiyuan:before {
	  content: "\e62f";
	}

</style>
