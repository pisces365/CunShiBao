<template>
	<view>
		<view class="me">
			<view class="me-info">
				<view class="me-info-img">
					<image :src="userInfo.avatarUrl==''?'http://p1362.bvimg.com/10465/f055218fcab03c86.jpg'
					:userInfo.avatarUrl" mode=""></image>
				</view>
				<view class="me-info-content">
					<view class="me-info-name">
						{{userInfo.nickName==''?'村事宝游客':userInfo.nickName}}
					</view>
					<view class="vertical-line">
						
					</view>
					<view class="me-info-identification">
						村民
					</view>
				</view>
				<view class="me-info-villege">
					神圣兽国游尾郡窝窝乡窝窝村
				</view>
				<view class="me-cross-line">

				</view>
				<view class="me-info-bottom">
					<navigator class="me-info-edit" url="../../mine/personalInfo/personalInfo">
						<image class="info-img" src="http://p1362.bvimg.com/10465/5eefbe51da38df66.png" mode=""></image>个人设置
					</navigator>
					<view class="me-vertical-line">
						
					</view>
					<navigator class="me-info-realNameQulification" url="../../mine/moreInfo/moreInfo">
						<image  class="info-img" src="http://p1362.bvimg.com/10465/2ca7f023ff869655.png" mode=""></image>实名认证
					</navigator>
				</view>
			</view>
			<view class="homePage-work">
				<view class="homePage-work-part affairsRecord">
					<view class="homePage-image">
						<image class="homePage-imageSelf" src="http://p1362.bvimg.com/10465/28c7e28867e563a1.png"
							mode=""></image>
					</view>
					<text class="homePage-work-part-title">我的办事</text>
					<text class="homePage-iconRight iconfont icon-a-LeftArrow-copy"></text>
				</view>
				<view class="cross-line"></view>
				<navigator url="../../mine/my_collection/my_collection" class="homePage-work-part ">
					<view class="homePage-image">
						<image class="homePage-imageSelf" src="http://p1362.bvimg.com/10465/cfef562ceaee8e47.png"
							mode=""></image>
					</view>
					<text class="homePage-work-part-title">我的收藏</text>
					<text class="homePage-iconRight iconfont icon-a-LeftArrow-copy"></text>
				</navigator>
				<view class="cross-line"></view>
				<view class="homePage-work-part ">
					<view class="homePage-image">
						<image class="homePage-imageSelf" src="http://p1362.bvimg.com/10465/96f0f5d5baa33f09.png"
							mode=""></image>
					</view>
					<text class="homePage-work-part-title">我的咨询</text>
					<text class="homePage-iconRight iconfont icon-a-LeftArrow-copy"></text>
				</view>
				<view class="cross-line"></view>
				<view class="homePage-work-part ">
					<view class="homePage-image">
						<image class="homePage-imageSelf" src="http://p1362.bvimg.com/10465/882f9fcef8a85de0.png"
							mode=""></image>
					</view>
					<text class="homePage-work-part-title">我的投诉</text>
					<text class="homePage-iconRight iconfont icon-a-LeftArrow-copy"></text>
				</view>
				<view class="cross-line"></view>
				<view class="homePage-work-part ">
					<view class="homePage-image">
						<image class="homePage-imageSelf" src="http://p1362.bvimg.com/10465/1ab94b612907cd90.png"
							mode=""></image>
					</view>
					<text class="homePage-work-part-title">我的预约</text>
					<text class="homePage-iconRight iconfont icon-a-LeftArrow-copy"></text>
				</view>
			</view>
			<view class="bottom">
				<text>村事宝数字乡村小程序服务由[浙工大计算机村事宝开发团队]提供；使用[村事宝]即代表你完全接受我们的 </text>
				<text style="color: #42b359;margin-left: 4rpx;" @click="toAgreement()">用户协议</text>
				<text>客服电话：</text><text style="color: #42b359;" @click="makeCall"> 0571-17858407426</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		wechatLogin
	} from '../../common/api.js'
	export default {
		onLoad() {
			let _this = this
			var userInfo = uni.getStorageSync('userInfo')
			console.log(userInfo);
			_this.userInfo = userInfo
		},
		data() {
			return {
				userInfo: '',
			}
		},
		methods: {
			makeCall(){
				uni.makePhoneCall({
					phoneNumber: '17858407426'
				})
			},
			toAgreement(){
				uni.navigateTo({
					url:'user/user-agree'
				})
			},
		}
	}
</script>

<style>
	@import '@/common/iconfont.css';
	page {
		background-image: url('http://p1362.bvimg.com/10465/342f6de442795851.png');
		background-size: 100% 100%;
	}

	.me {
		margin: 10rpx;
		padding: 20rpx 40rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.me-info {
		padding-top: 40rpx;
		background-color: rgba(255, 255, 255, 0.7);
		/*  阴影 */
		box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.10);
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.me-info-content {
		margin-top: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.me-info-name {
		font-size: 32rpx;
	}

	.me-info-identification {
		font-size: 28rpx;
		color: #212121;
	}

	.me-info-villege {
		margin-top: 10rpx;
		color: #414141;
		font-size: 28rpx;
	}

	.me-info-img {
		width: 140rpx;
		height: 140rpx;
		overflow: hidden;
		border-radius: 10rpx;
	}

	.me-info-bottom {
		display: flex;
		width: 100%;
		height: 60rpx;
		margin-bottom: 20rpx;
	}
	.me-info-edit{
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.me-info-realNameQulification{
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.info-img{
		width: 30rpx;
		height: 30rpx;
		margin-right: 20rpx;
	}
	.me-info-img image {
		width: 100%;
		height: 100%;
	}

	.cross-line {
		width: 100%;
		height: 2rpx;
		background: rgba(0, 0, 0, 0.1);
	}
	.me-cross-line{
		margin: 20rpx;
		width: 100%;
		height: 2rpx;
		background: rgba(0, 0, 0, 0.2);
	}

	.homePage-imageSelf {
		width: 100%;
		height: 100%;
	}

	.homePage-image {
		height: 60rpx;
		width: 60rpx;
	}
	.vertical-line{
		margin: 0 20rpx;
		width: 2rpx;
		height: 28rpx;
		background: rgba(0, 0, 0, 0.5);
	}
	.me-vertical-line{
		width: 2rpx;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
	}
	.homePage-work {
		padding: 6rpx 0;
		background-color: rgba(255, 255, 255, 0.7);
		/*  阴影 */
		box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.10);
		width: 100%;
		margin-top: 50rpx;
		margin-bottom: 40rpx;
		border-radius: 10rpx;
		overflow: hidden;

	}

	.homePage-work-part-title {
		
		font-size: 34rpx;
		font-weight: 500;
		margin-left: 20rpx;
	}

	.homePage-iconRight {
		position: absolute;
		right: 30rpx;
		font-size: 40rpx;
		color: #b4b5b4;
	}

	.homePage-work-part {
		margin-left: 30rpx;
		height: 120rpx;
		display: flex;
		align-items: center;
		position: relative;

	}
	.bottom text{
		font-size: 24rpx;
		color: #343434;
	}
</style>
