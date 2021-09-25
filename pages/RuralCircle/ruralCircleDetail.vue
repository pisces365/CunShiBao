<template>
	<view>
		<view class="ruraldetail">
			<view class="title">
				<image :src="contentInfo.img" mode=""></image>
			</view>
			<view class="content">
				<view class="content-item">
					<view class="tip">
						发布人
					</view>
					<view class="text">
						{{contentInfo.nickName}}
					</view>
				</view>
				<view class="cross-line">
					
				</view>
				<view class="content-item">
					<view class="tip">
						联系电话
					</view>
					<view class="text">
						{{contentInfo.phone}}
					</view>
				</view>
				<view class="cross-line">
					
				</view>
				<view class="content-item">
					<view class="tip">
						标题
					</view>
					<view class="text">
						{{contentInfo.title}}
					</view>
				</view>
				<view class="cross-line">
					
				</view>
				<view class="content-item">
					<view class="tip">
						详情
					</view>
					<view class="text">
						{{contentInfo.content}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			let _this = this
			_this.contentInfo = JSON.parse(options.info);
			// console.log(JSON.parse(options.info));
		},
		data() {
			return {
				contentInfo: {
				}
			}
		},
		methods: {

		}
	}
</script>

<style>
	page{
		background: #f6f7f6;
	}
	.title{
		width: 100vw;
		height: 500rpx;
	}
	.title image{
		width: 100%;
		height: 100%;
	}
	.content{
		background: white;
		padding: 30rpx 20rpx;
	}
	.content-item {
		display: flex;
	}
	.cross-line{
		margin: 30rpx 0;
		background: #DCDDDC;
		height: 2rpx;
		width: 100%;
	}
	.tip{
		width: 170rpx;
		display: flex;
		align-items: center;
		/* justify-content: center; */
	}
	.text{
		width: 550rpx;
		color: #8c8d8c;
	}
</style>
