<template>
	<view>
		<view class="message">
			<view class="content">
				<view class="left">
					<view class="content-left">
						<image src="http://p1362.bvimg.com/10465/38b03e16d43faaa5.png" mode=""></image>
					</view>
					<view class="content-right">
						<view class="top">
							公告推送
						</view>
						<view class="bottom">
							暂无
						</view>
					</view>
				</view>
				<view class="right">
					>
				</view>
				
			</view>
			<view class="cross-line">

			</view>
			<view class="content">
				<view class="left">
					<view class="content-left">
						<image src="http://p1362.bvimg.com/10465/af35d4318af160fa.png" mode=""></image>
					</view>
					<view class="content-right">
						<view class="top">
							业务推送
						</view>
						<view class="bottom">
							暂无
						</view>
					</view>
				</view>
				<view class="right">
					>
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

		}
	}
</script>

<style>
	page {
		background: #f1f1f1;
	}

	.message {
		padding: 20rpx;
		background: white;
	}

	.content-left {
		width: 100rpx;
		height: 100rpx;
	}

	.content-left image {
		width: 100%;
		height: 100%;
	}

	.content-right {
		margin-left: 20rpx;
		display: flex;
		/* align-items: center; */
		justify-content: center;
		flex-direction: column;
	}

	.cross-line {
		margin: 20rpx 0;
		background: #DCDDDC;
		height: 2rpx;
		width: 100%;
	}

	.content {
		display: flex;
		justify-content: space-between;
	}
	.left{
		display: flex;
	}

	.bottom {
		margin-top: 6rpx;
		color: #8E8F8E;
	}
	.right{
		margin-top: 24rpx;
		font-size: 40rpx;
		font-weight: bold;
		margin-right: 20rpx;
		color: #c6c7c6;
	}
</style>
