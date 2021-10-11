<template>
	<view>
		<view class="personInfo">
			
			<view class="personInfo-title">
				个人信息
			</view>
			<view class="baseInfo">
				<view class="baseInfo-item">
					<view class="baseInfo-item-left">
						头像
					</view>
					<view class="baseInfo-item-right">
						<image :src="userInfo.avatarUrl==''?'http://p1362.bvimg.com/10465/f055218fcab03c86.jpg'
					:userInfo.avatarUrl" mode=""></image>
					</view>
				</view>
				<view class="cross-line">

				</view>
				<view class="baseInfo-item">
					<view class="baseInfo-item-left">
						昵称
					</view>
					<view class="baseInfo-item-right">
						{{userInfo.nickName==''?'村事宝游客':userInfo.nickName}}
					</view>
				</view>
				<view class="cross-line"></view>
				<view class="baseInfo-item" v-if="userInfo.phone!=null">
					<view class="baseInfo-item-left">
						手机号
					</view>
					<view class="baseInfo-item-right black">
						{{userInfo.phone}}
					</view>
				</view>
				<view class="baseInfo-item" v-else @click="toBindPhone">
					<view class="baseInfo-item-left">
						手机号
					</view>
					<view class="baseInfo-item-right gray">
						去绑定 >
					</view>
				</view>
			</view>
			<view class="otherInfo">
				<view class="otherInfo-item" @click="toPoliticStatus">
					<view class="otherInfo-item-left">
						政治面貌
					</view>
					<view class="otherInfo-item-right">
						未填写 >
					</view>

				</view>
				<view class="cross-line"></view>
				<view class="otherInfo-item" @click="toMoreInfo">
					<view class="otherInfo-item-left">
						实名信息
					</view>
					<view class="otherInfo-item-right">
						未填写 >
					</view>

				</view>
				<view class="cross-line"></view>
				<view class="otherInfo-item" @click="toFamilyInfo">
					<view class="otherInfo-item-left">
						家庭信息
					</view>
					<view class="otherInfo-item-right">
						未填写 >
					</view>

				</view>
				<view class="cross-line"></view>
				<view class="otherInfo-item" @click="toWorkInfo">
					<view class="otherInfo-item-left">
						单位信息
					</view>
					<view class="otherInfo-item-right">
						未填写 >
					</view>

				</view>
			</view>
			
			
			<view class="personInfo-title">
				偏好配置
			</view>
			<view class="baseInfo">
				<view @click="toChangeStyle" class="baseInfo-item" >
					<view class="baseInfo-item-left">
						首页风格
					</view>
					<view class="baseInfo-item-right gray">
						去设置 >
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			let _this = this
			var userInfo = uni.getStorageSync('userInfo');
			var phone = uni.getStorageSync('phone')
			_this.userInfo = userInfo
			_this.userInfo.phone = phone
		},
		data() {
			return {
				userInfo: {
					phone: ''
				}
			}
		},
		methods: {
			toChangeStyle() {
				uni.navigateTo({
					url: '../select_main_page/select_main_page'
				})
			},
			toBindPhone() {
				uni.navigateTo({
					url: '../../pagesA/rent/phoneRegistration/phoneRegistration'
				})
			},
			toWorkInfo() {
				uni.navigateTo({
					url: '../workInfo/workInfo'
				})
			},
			toFamilyInfo() {
				uni.navigateTo({
					url: '../familyInfo/familyInfo'
				})
			},
			toMoreInfo() {
				uni.navigateTo({
					url: '../moreInfo/moreInfo'
				})
			},
			toPoliticStatus(){
				uni.navigateTo({
					url:'../politicStatus/politicStatus'
				})
			}
		}
	}
</script>

<style>
	page {
		background: #f7f8f7;
	}

	.personInfo-title {
		margin: 30rpx 40rpx;
		font-size: 32rpx;
		font-weight: bolder;
	}

	.personInfo {}

	.baseInfo {
		padding: 20rpx;
		background: white;
	}

	.baseInfo-item {
		display: flex;
		align-items: center;
		padding-left: 24rpx;
		padding-right: 24rpx;
		justify-content: space-between;
		height: 80rpx;
	}

	.otherInfo {
		padding: 20rpx;
		margin-top: 30rpx;
		background: white;
	}

	.cross-line {
		margin: 20rpx 0;
		width: 100%;
		background: #f0f1f0;
		height: 2rpx;
	}

	.otherInfo-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 24rpx;
		padding-right: 24rpx;
		height: 80rpx;
	}

	.baseInfo-item-right image {
		width: 90rpx;
		height: 90rpx;
		border-radius: 50rpx;
		overflow: hidden;
	}

	.otherInfo-item-right {
		color: #939493;
	}

	.black {
		color: #000000;
	}

	.gray {
		color: #939493;
	}
</style>
