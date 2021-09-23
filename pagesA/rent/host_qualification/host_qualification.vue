<template>
	<view>
		<view class="titleImg">
			<image src="http://p1362.bvimg.com/10465/3e9316ff79bf409e.png" mode=""></image>
		</view>
		<view class="content">
			<view class="content-title">
				房产信息
			</view>
			<view class="content-item">
				<view class="content-item-title">
					城市
				</view>
				<view class="content-item-part" @click="chooseCity">
					<text class="gray" v-if="city==''">请选择 </text>
					<text v-else>{{city}}</text><text class="rightArrow">></text>
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					小区
				</view>
				<view class="content-item-part">
					请选择<text>></text>
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					户型
				</view>
				<view class="content-item-part">
					请选择<text>></text>
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					面积
				</view>
				<view class="content-item-part">
					请选择<text>></text>
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					楼层
				</view>
				<view class="content-item-part">
					请选择<text>></text>
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					朝向
				</view>
				<view class="content-item-part">
					请选择<text>></text>
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					装修
				</view>
				<view class="content-item-part">
					请选择<text>></text>
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					房屋类型
				</view>
				<view class="content-item-part">
					请选择<text>></text>
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					电梯
				</view>
				<view class="content-item-part">
					请选择<text>></text>
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					售价
				</view>
				<view class="content-item-part">
					请选择<text>></text>
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					照片
				</view>
				<view class="content-item-part">
					请选择<text>></text>
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					联系人
				</view>
				<view class="content-item-part">
					请选择<text>></text>
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					联系电话
				</view>
				<view class="content-item-part">
					请选择<text>></text>
				</view>
			</view>
		</view>
		<view class="bottom">
			<label class="radio">
				<radio value="" class="radio-style" />
				<text class="bottom-tip">
					请确认你已阅读并接受《出售房源信息发布及交易服务协议》
				</text>
			</label>
			<view class="button">
				提交
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				city: ''
			}
		},
		onLoad(options) {
			let _this = this
			if (options.cityInfo != null) {
				var cityInfo = JSON.parse(options.cityInfo)
				_this.city = cityInfo.cityName
				// console.log(_this.city);
			}
		},
		methods: {
			chooseCity() {
				uni.navigateTo({
					url: './citys/citys'
				})
			}
		}
	}
</script>

<style>
	.titleImg {
		width: 100vw;
		height: 300rpx;
	}

	.titleImg image {
		width: 100%;
		height: 100%;
	}

	.content {
		margin: 20rpx;
		padding: 20rpx;
		margin-bottom: 220rpx;
	}

	.content-item {
		display: flex;
		justify-content: space-between;
	}

	.content-title {
		font-size: 40rpx;
		margin-bottom: 40rpx;
	}

	.content-item-part {
		width: 600rpx;
		text-align: right;
	}

	.cross-line {
		margin: 26rpx 0rpx;
		width: 100%;
		height: 2rpx;
		background: #F1F3F2;
	}

	.bottom {
		padding: 10rpx;
		padding-top: 14rpx;
		background: white;
		box-shadow: 0px -2rpx 2rpx #cacaca;
		position: fixed;
		bottom: 0;
		width: 100vw;
	}

	.bottom-tip {
		font-size: 26rpx;
	}

	.radio-style {
		transform: scale(0.8);
	}

	.button {
		margin: 20rpx;
		height: 70rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 34rpx;
		background: #00cb95;
		color: white;
	}

	.gray {
		color: #939493;
	}
	.rightArrow{
		color: #939493;
		margin-left: 10rpx;
	}
</style>
