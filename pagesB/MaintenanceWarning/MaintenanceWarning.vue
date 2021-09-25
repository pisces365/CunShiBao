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
				<button type="primary" class="button" @click="toOrder">{{count}}秒后自动跳转</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count: 5
			}
		},
		methods: {
			toOrder() {
				uni.redirectTo({
					url: '../myWorkOrder/myWorkOrder'
				})
			}
		},
		mounted() {
			let _this = this
			this.timer = setInterval(() => {
				_this.count--
				console.log(_this.count);
				if (_this.count <= 0) {
					uni.redirectTo({
						url: '../myWorkOrder/myWorkOrder'
					})
				}
			}, 1000)


		},
		beforeDestroy() {
			if (this.timer) {
				clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
			}
		}


	}
</script>

<style>
	page {
		background: white;
	}

	.warning-top {
		margin-top: 20rpx;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.warning-top image {
		width: 340rpx;
		height: 230rpx;
	}

	.warning-center {
		margin: 20rpx 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.button {
		margin-top: 20rpx;
		width: 500rpx;
	}
</style>
