<template>
	<view>
		<view class="warning">
			<view class="warning-top">
				<image src="http://p1362.bvimg.com/10465/683f054ad71cedd3.png" mode=""></image>
			</view>
			<view class="warning-center">
				工作人员专用通道，请先绑定工号！
			</view>
			<view class="warning-bottom">
				<button type="primary">{{count}}秒后自动跳转</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count: 4
			}
		},
		methods: {

		}
		
	}
</script>

<style>
	.warning-top {
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.warning-top image {
		width: 340rpx;
		height: 220rpx;
	}
</style>
