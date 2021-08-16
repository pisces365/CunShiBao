<template>
	<view  class="content">
		<view class="logo-box">
			<image mode="aspectFill" class="logo" src="http://b1137.bvimg.com/10453/585be99bc830c431.jpg"></image>
		</view>
		<view class="text-area">
			<text class="name">{{name}}</text>
		</view>
		<view class="text-area">
			<text class="duty">{{duty}}</text>
		</view>
		<view class="function">
			<navigator class="my-button">
				<text class="iconfont function-text" id="modify-logo">修改头像</text>
			</navigator>
			
			<navigator class="my-button">
				<text class="iconfont function-text" id="modify-password">修改密码</text>
			</navigator>
			<navigator class="my-button">
				<text class="iconfont function-text" id="feedback">问题反馈</text>
			</navigator>
			<navigator class="my-button">
				<text class="iconfont function-text" id="about">关于我们</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '姓名',
				duty: '村民'
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	@font-face {
	  font-family: 'iconfont';  /* Project id 2698742 */
	  src: url('//at.alicdn.com/t/font_2698742_tiaexfm8trb.woff2?t=1629087167074') format('woff2'),
	       url('//at.alicdn.com/t/font_2698742_tiaexfm8trb.woff?t=1629087167074') format('woff'),
	       url('//at.alicdn.com/t/font_2698742_tiaexfm8trb.ttf?t=1629087167074') format('truetype');
	}
	
	.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;/*字体清除锯齿效果*/
    -webkit-text-stroke-width: 0.2px;/*文本外边框大小*/
    -moz-osx-font-smoothing: grayscale;}
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		
		height: 170rpx;
		width: 170rpx;
		border-radius: 170rpx;
		border: 1px solid #ffffff;
	}
	
	.logo-box {
		display: flex;
		border-radius: 170rpx;
		margin-top: 100rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 30rpx;
		border: 3px solid #bec2c9;
	}
	
	.text-area {
		display: flex;
		justify-content: center;
		margin-bottom: 5px;
	}

	.name {
		font-size: 42rpx;
		color: #000000;
		font-weight: bold;
	}
	
	.duty {
		font-size: 28rpx;
	}
	
	.function {
		margin-top: 90rpx;
	}
	
	.my-button {
		display: flex;
		justify-content: center;
		line-height: 46rpx;
		padding: 20rpx;
	}
	
	.function-text {
		display: flex;
		font-size: 28rpx;
	}
	
	#modify-logo:before {
		content: '\e67f';
		font-size: 52rpx;
		margin-right: 52rpx;
	}
	
	#modify-logo:after {
		content: '\e608';
		font-size: 52rpx;
		margin-left: 250rpx;
	}
	
	#modify-password:before {
		content: '\e619';
		font-size: 52rpx;
		margin-right: 52rpx;
	}
	
	#modify-password:after {
		content: '\e608';
		font-size: 52rpx;
		margin-left: 250rpx;
	}
	
	#feedback:before {
		content: '\e600';
		font-size: 52rpx;
		margin-right: 52rpx;
	}
	
	#feedback:after {
		content: '\e608';
		font-size: 52rpx;
		margin-left: 250rpx;
	}
	
	#about:before {
		content: '\e673';
		font-size: 52rpx;
		margin-right: 52rpx;
	}
	
	#about:after {
		content: '\e608';
		font-size: 52rpx;
		margin-left: 250rpx;
	}
</style>
