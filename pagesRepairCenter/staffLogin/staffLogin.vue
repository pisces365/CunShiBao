<template>
	<view style="background-color: rgb(243, 243, 243);">
		<view class="back-image">
			<view class="login-back">
				<view class="item">
					<view class="icon" style="background-image: url(http://p1362.bvimg.com/10465/d64c5893102ebea9.png);">
						
					</view>
					<view class="input">
						<input class="login-input" type="text" name="user" placeholder="请输入工作账号" />
					</view>
				</view>
				<view class="item">
					<view class="icon" style="background-image: url(http://p1362.bvimg.com/10465/0b4470f770c62b53.png);">
						
					</view>
					<view class="input">
						<input class="login-input" type="text" name="password" placeholder="请输入密码" />
					</view>
				</view>
				<view>
					<button class="r-button2" @click="next">登 录</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			next() {
				uni.navigateTo({
				            // url: 'test?id=1&name=uniapp'  c传递参数
				
				            url:""
				
				        })
			}
		}
	}
</script>

<style>
	@import url("../../common/iconfont.css");
	page {
		background-color: rgb(243, 243, 243);
	}
	
	.back-image {
		background-image: url(http://p1362.bvimg.com/10465/bb05365f0f6427ec.png);
		background-size: 800rpx;
		background-repeat: no-repeat;
		background-position: center top;
		height: 1000rpx;
	}
	
	.login-back {
		width: 600rpx;
		float: left;
		margin:200rpx 50rpx;
		padding: 80rpx 26rpx;
		background-color: rgba(255,255,255,0.9);
		border-radius: 40rpx;
	}
	.item {
		display: flex;
		margin-bottom: 100rpx;
		height: 60rpx;
		border-bottom: 1px solid #d8d7d7;
	}
	.icon {
		flex: 1;
		height: 40rpx;
		/* background-image: url(http://p1362.bvimg.com/10465/bb05365f0f6427ec.png); */
		background-size: 40rpx;
		background-repeat: no-repeat;
		background-position: left center;
	}
	.input {
		flex: 10;
	}
	.login-input {
		
	}
	
	button {
		/* width: 100%; */
		border-radius: 50rpx;
		margin:0 30rpx;
		font-size: 32rpx;
	}
	
	 .r-button2 {
		background-color: rgba(95,123,249,1);
		color: white;
	}
	
	 .r-button2:active {
		background-color: rgba(95,123,249,0.8);
	}  
</style>
