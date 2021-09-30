<template>
	<view>
		<view class="supervise">
			<view class="supervise-feedback supervise-part" @click="toFeedback()">
				<view class="title">
					问题反馈
				</view>
				<view class="enter">
					<view class="enterimg">
						<image class="enterImg" src="../../static/image/enter.png" mode=""></image>
					</view>
					<view class="enterText">
						进入
					</view>
				</view>
			</view>
			<view class="supervise-environment supervise-part" @click="toEnvironment()">
				<view class="title">
					人居环境
				</view>
				<view class="enter">
					<view class="enterimg">
						<image class="enterImg" src="../../static/image/enter.png" mode=""></image>
					</view>
					<view class="enterText">
						进入
					</view>
				</view>
			</view>
			<view class="supervise-epidemic supervise-part" @click="toEpidemic()">
				<view class="title">
					疫情防控
				</view>
				<view class="enter">
					<view class="enterimg">
						<image class="enterImg" src="../../static/image/enter.png" mode=""></image>
					</view>
					<view class="enterText">
						进入
					</view>
				</view>
			</view>
			<view class="supervise-construction supervise-part" @click="toConstruction()">
				<view class="title">
					村庄建设
				</view>
				<view class="enter">
					<view class="enterimg">
						<image class="enterImg" src="../../static/image/enter.png" mode=""></image>
					</view>
					<view class="enterText">
						进入
					</view>
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
			toFeedback() {
				uni.navigateTo({
					url: '../supervise-feedback/supervise-feedback'
				})
			},
			toEnvironment() {
				uni.navigateTo({
					url: '../supervise-environment/supervise-environment'
				})
			},
			toEpidemic() {
				uni.navigateTo({
					url: '../supervise-epidemic/supervise-epidemic'
				})
			},
			toConstruction() {
				uni.navigateTo({
					url: '../supervise-construction/supervise-construction'
				})
			}
		}
	}
</script>

<style>
	@import url("@/common/iconfont.css");

	.supervise {
		display: flex;
		padding: 30rpx;
		padding-top: 10rpx;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.supervise-part {
		background: white;
		width: 100%;
		border-radius: 30rpx;
		overflow: hidden;
		margin-top: 30rpx;
		position: relative;
		height: 300rpx;
		box-shadow: #5a5a5a 0rpx 0rpx 6rpx;
	}

	.supervise-feedback {
		background-image: url('http://p1362.bvimg.com/10465/71f76d543133e4d7.jpg');
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.supervise-environment {
		background-image: url('http://p1362.bvimg.com/10465/f9a57f06ab4fab75.jpg');
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.supervise-epidemic {
		background-image: url('http://p1362.bvimg.com/10465/11f7eb63a68118e3.jpg');
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.supervise-construction {
		background-image: url('http://p1362.bvimg.com/10465/5bc2bd2471d6ad30.jpg');
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.title {
		margin-top: 30rpx;
		margin-left: 40rpx;
		font-size: 36rpx;
	}

	.enter {
		display: flex;
		margin-top: 20rpx;
		align-items: center;
	}

	.enterText {
		display: flex;
		align-items: center;
		height: 50rpx;
		margin-left: 20rpx;
	}

	.enterImg {
		margin-left: 40rpx;
		width: 50rpx;
		height: 50rpx;
		opacity: 0.7;
	}
</style>
