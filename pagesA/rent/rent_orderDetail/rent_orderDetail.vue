<template>
	<view class="rentDetail">
		<view class="rentDetail_top">
			<view class="rentDetail_top_part1">
				待房东确认 ...
			</view>
			<view class="rentDetail_top_part2">
				您提交了预约看房申请，待房东回应
			</view>
		</view>
		<view class="rentDetail_center">
			<view class="blueBg">

			</view>
			<view class="whiteBg">

			</view>
			<view class="rentDetail_center-fixed">
				<view class="rentDetail_center-top">
					<view class="rentDetail_center-top-left">
						<view class="rentDetail_center-top-img">
							<image class="hostImage" :src="houseInfo.hostRoughVo.avatarUrl" mode=""></image>
						</view>
						<view class="rentDetail_center-top-name">
							{{houseInfo.hostRoughVo.name}}
						</view>
					</view>
					<view class="rentDetail_center-top-right">
						<text class="iconfont icon-pinglun1" @click="chat"></text>
						<view class="vertical-line"></view>
						<text class="iconfont icon-dianhua1" @click="callHost"></text>
					</view>

				</view>
				<view class="cross-line"></view>
				<view class="rentDetail_center-bottom">
					<text>预约</text>
					<text>{{watchHouse_date+' '+watchHouse_time}}</text>
					<text>看房</text>
				</view>
			</view>

		</view>
		<view class="rentDetail_content">
			<view class="houseDes">
				<view class="houseDes-left">
					<image :src="houseInfo.pictureUrl[0]" mode=""></image>
				</view>
				<view class="houseDes-right">
					<view class="houseDes-right-top">
						<text>{{houseInfo.type}}</text>
						<text>{{'|'}}</text>
						<text class="noWarp">{{ houseInfo.desc}}</text>
					</view>
					<view class="houseDes-right-center">
						押一付三 {{' · '+houseInfo.bedroomAmount+'室 '}}·{{houseInfo.area+'m · 南北'}}
					</view>
					<view class="houseDes-right-bottom">
						{{houseInfo.price}}元/月
					</view>
				</view>
			</view>
			<view class="cross-line">

			</view>
			<view class="rentDetail_content-orderTime">
				邀请时间 : <text>{{houseInfo.inviteTime}}</text>
			</view>
			<view class="rentDetail_content-orderId">
				订单编号 : <text>18620059</text>
			</view>
		</view>
		<view class="bottomFixed">
			<view class="cancelOrder" @click="cancelOrder()">
				取消看房
			</view>
			<view class="reminder" @click="cuidan()">
				催单
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		onLoad(options) {
			let that = this;
			var data = JSON.parse(options.houseInfo); // 字符串转对象
			that.houseInfo = data;
			that.watchHouse_date = options.watchHouse_date;
			that.watchHouse_time = options.watchHouse_time;
			console.log(that.houseInfo)
		},
		data() {
			return {
				houseInfo: {},
				watchHouse_date: '',
				watchHouse_time: ''
			}
		},
		methods: {
			cancelOrder() {
				let _this = this;
				var houseInfo = JSON.stringify(_this.houseInfo); // 这里转换成 字符串
				uni.redirectTo({
					url: './rent_orderCancel?houseInfo=' + houseInfo + '&&watchHouse_date=' + _this.watchHouse_date +
						'&&watchHouse_time' + _this.watchHouse_time
				})
			},
			cuidan(){
				uni.showToast({
					title: '催单成功',
					icon: 'none',
					duration: 2000
				})
			},
			chat() {
				uni.showToast({
					title: '聊天咨询未开通',
					icon: 'none',
					duration: 2000
				})
			},
			callHost() {
				uni.makePhoneCall({
					phoneNumber: this.houseInfo.hostRoughVo.phone //仅为示例
				});
			},
		}
	}
</script>

<style>
	@import url("@/common/iconfont.css");

	page {
		background: #f8f8f8;
	}

	.rentDetail_top {
		width: 100vw;
		padding: 20rpx 40rpx;
		height: 130rpx;
		background: #2F9BFE;
		color: white;
	}

	.rentDetail_top_part1 {
		font-size: 34rpx;

	}

	.rentDetail_top_part2 {
		margin-top: 20rpx;
		font-size: 28rpx;
	}

	.rentDetail_content {
		padding: 60rpx 20rpx 20rpx 30rpx;
		background: white;
	}

	.houseDes {
		display: flex;

	}

	.houseDes-left {
		width: 140rpx;
		height: 120rpx;
	}

	.houseDes-left image {
		width: 100%;
		height: 100%;
	}

	.houseDes-right {
		width: 520rpx;
		margin-left: 20rpx;
	}

	.houseDes-right-top {
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.houseDes-right-top text {
		margin-right: 10rpx;
	}

	.cross-line {
		margin: 10rpx 0;
		width: 100%;
		background: #e4e5e4;
		height: 1rpx;

	}

	.rentOwner {
		display: flex;
		padding: 20rpx;
	}

	.rentOwner-image {
		border-radius: 50rpx;
		overflow: hidden;
		width: 100rpx;
		height: 100rpx;
	}

	.rentOwner-image image {
		width: 100%;
		height: 100%;
	}

	.rentOwner-info {
		margin-left: 20rpx;
		font-size: 28rpx;
	}

	.houseDes-right-center {
		font-size: 28rpx;
		color: #999999;
	}

	.houseDes-right-bottom {
		font-size: 28rpx;
		color: #999999;
	}

	.cross-line {
		margin: 20rpx 0;
		width: 100%;
		background: #e4e5e4;
		height: 1rpx;

	}

	.rentDetail_content-orderTime {
		font-size: 28rpx;
		margin: 20rpx;
		padding: 10rpx 0;
	}

	.rentDetail_content-orderTime text {
		margin-left: 20rpx;
		color: #737473;
	}

	.rentDetail_content-orderId text {
		margin-left: 20rpx;
		color: #737473;
	}

	.rentDetail_content-orderId {
		margin: 20rpx;
		font-size: 28rpx;

	}

	.rentDetail_center {
		position: relative;

	}

	.blueBg {
		height: 80rpx;
		background: #2F9BFE;
	}

	.whiteBg {
		height: 100rpx;
		background: white;
	}

	.rentDetail_center-fixed {
		position: absolute;
		top: 0;
		left: 34rpx;
		width: 600rpx;
		border-radius: 30rpx;
		padding: 30rpx 40rpx;
		background: white;
		box-shadow: 0 0 4rpx #c5c5c5;
	}

	.rentDetail_center-top-img {
		width: 60rpx;
		height: 60rpx;
		border-radius: 30rpx;
		overflow: hidden;
	}

	.rentDetail_center-top-name {
		margin-left: 20rpx;
	}

	.hostImage {
		width: 100%;
		height: 100%;
	}

	.rentDetail_center-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.rentDetail_center-top-left {
		display: flex;
		align-items: center;
	}

	.iconfont {
		color: #81888d;
	}

	.rentDetail_center-top-right {
		display: flex;
		align-items: center;
	}

	.vertical-line {
		background: #B3B4B3;
		height: 30rpx;
		width: 2rpx;
		margin: 0 40rpx;
	}

	.rentDetail_center-bottom {
		display: flex;
		align-items: center;
	}

	.rentDetail_center-bottom text:nth-child(1) {
		font-size: 32rpx;
	}

	.rentDetail_center-bottom text:nth-child(2) {
		margin-left: 20rpx;
		font-size: 34rpx;
		color: #ff5500;
	}

	.rentDetail_center-bottom text:nth-child(3) {
		font-size: 32rpx;
		margin-left: 20rpx;
	}

	.bottomFixed {
		background: white;
		position: fixed;
		bottom: 0;
		width: 100vw;
		height: 80rpx;
		display: flex;
		padding: 10rpx 0;
		align-items: center;
		justify-content: center;
	}

	.cancelOrder {
		width: 340rpx;
		height: 70rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2rpx solid #2F9BFE;
		color: #2F9BFE;
		background: white;
	}

	.reminder {
		margin-left: 20rpx;
		width: 340rpx;
		height: 74rpx;
		color: white;
		background: #2F9BFE;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
