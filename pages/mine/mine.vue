<template>
	<view class="homePage" v-show="ifLoading">
		<view class="homePage-title"></view>
		<view class="homePage-PersonalInfo" >
			<view class="homePage-PersonalInfo-left" @click="getUserInfo">
				<view class="PersonalInfo-HeadImage">
					<image class="PersonalInfo-HeadImage-image"
						:src="avatarUrl==''?'http://p1362.bvimg.com/10465/f055218fcab03c86.jpg':avatarUrl"
						mode="aspectFix">
					</image>
				</view>
			</view>
			<view class="homePage-PersonalInfo-right">
				<view class="right-content">
					<view class="basicInfo">
						<view class="name">
							{{nickName==''?'村事宝游客':nickName}}
						</view>
						<text class="iconfont icon-chuangzuo"></text>
					</view>
					<view class="residentialAddress">
						{{residentialAddress==''?'神圣兽国游尾郡窝窝乡窝窝村':residentialAddress}}
					</view>
				</view>
			</view>
		</view>
		<view class="homePage-RealNameInfo">
			<view class="homePage-RealNameInfo-left">
				实名信息
			</view>
			<view class="homePage-RealNameInfo-right">
				<view class="homePage-RealNameInfo-IfFillIn">
					{{IfFillIn}}
				</view>
				<text class="iconfont icon-a-LeftArrow-copy"></text>
			</view>

		</view>
		<view class="homePage-work">
			<view class="homePage-work-part affairsRecord">
				<view class="homePage-image">
					<image class="homePage-imageSelf" src="http://p1362.bvimg.com/10465/2e19b1e773a4611d.png" mode=""></image>
				</view>
				<text class="homePage-work-part-title">我的办事</text>
				<text class="homePage-iconRight iconfont icon-a-LeftArrow-copy"></text>
			</view>
			<view class="cross-line"></view>
			<view class="homePage-work-part ">
				<view class="homePage-image">
					<image class="homePage-imageSelf" src="http://p1362.bvimg.com/10465/d4884a09cce2142d.png" mode=""></image>
				</view>
				<text class="homePage-work-part-title">我的收藏</text>
				<text class="homePage-iconRight iconfont icon-a-LeftArrow-copy"></text>
			</view>
			<view class="cross-line"></view>
			<view class="homePage-work-part ">
				<view class="homePage-image">
					<image class="homePage-imageSelf" src="http://p1362.bvimg.com/10465/f3cccd9d8ea14fd9.png" mode=""></image>
				</view>
				<text class="homePage-work-part-title">我的咨询</text>
				<text class="homePage-iconRight iconfont icon-a-LeftArrow-copy"></text>
			</view>
			<view class="cross-line"></view>
			<view class="homePage-work-part ">
				<view class="homePage-image">
					<image class="homePage-imageSelf" src="http://p1362.bvimg.com/10465/c4bdfb427f9ea9ab.png" mode=""></image>
				</view>
				<text class="homePage-work-part-title">我的投诉</text>
				<text class="homePage-iconRight iconfont icon-a-LeftArrow-copy"></text>
			</view>
			<view class="cross-line"></view>
			<view class="homePage-work-part ">
				<view class="homePage-image">
					<image class="homePage-imageSelf" src="http://p1362.bvimg.com/10465/0af17ea9ed3160bb.png" mode=""></image>
				</view>
				<text class="homePage-work-part-title">我的预约</text>
				<text class="homePage-iconRight iconfont icon-a-LeftArrow-copy"></text>
			</view>
		</view>

		<view class="homePage-developer">
			<text>村事宝数字乡村小程序服务由[浙工大计算机村事宝开发团队]提供；使用[村事宝]即代表你完全接受我们的 </text>
			<text style="color: #42b359;margin-left: 4rpx;" @click="toAgreement()">用户协议</text>
			<text>客服电话：</text><text style="color: #42b359;"@click="makeCall"> 0571-17858407426</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatarUrl: '',
				city: '',
				country: '',
				gender: '',
				language: '',
				nickName: '',
				province: '',
				residentialAddress: '',
				identify: '村民',
				IfFillIn: '未填写',
				ifLoading: false, //是否加载完毕 加载完毕在进行加载
				userInfomation: {}
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
			getUserInfo() {
				let that = this;
				//判断缓存中是否有用户数据，没有则获取
				if (!uni.getStorageSync('userInfo')) {
					uni.getUserProfile({
						desc: '获取你的名称、头像、地区',
						success: infoRes => {
							if (infoRes.errMsg === 'getUserProfile:ok') {
								// 获取到的当前数据存入缓存
								console.log(infoRes)
								uni.setStorageSync('encryptedData', infoRes.encryptedData);
								uni.setStorageSync('iv', infoRes.iv);
								uni.setStorageSync('rawData', infoRes.rawData);
								uni.setStorageSync('signature', infoRes.signature);
								uni.setStorageSync('securityStatus', 1);
								uni.setStorageSync('userInfo', infoRes.userInfo);
							} else {
								uni.showToast({
									title: '授权失败',
									icon: 'error'
								});
							}
						},
						fail: err => {
							console.log('userInfo-err', JSON.stringify(err));
						}
					});
				} else {
					console.log("已有缓存，直接进入")
					uni.getStorage({
						key: 'userInfo',
						success(res) {
							that.userInfomation = res.data;
							that.avatarUrl = res.data.avatarUrl;
							that.city = res.data.city;
							that.country = res.data.country;
							that.gender = res.data.gender;
							that.language = res.data.language;
							that.nickName = res.data.nickName;
							that.province = res.data.province;
							console.log('获取成功', res);
						}
					})
				}
			}

		},
		onLoad() {
			this.ifLoading = true;
		}
	}
</script>

<style lang="scss">
	@import '@/common/iconfont.css';

	page {
		background-color: #f2f3f2;
	}

	.homePage {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.homePage-title {
			width: 100%;
			height: 250rpx;
			background-image: linear-gradient(#d4e605, #1be554);
			z-index: -1;
			position: fixed;
			top: 0;
			left: 0;
		}

		.homePage-PersonalInfo {
			background: #FFFFFF;
			width: 680rpx;
			height: 260rpx;
			margin-top: 100rpx;
			border-radius: 20rpx;
			overflow: hidden;
			display: flex;
			flex-direction: row;
			box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);

			.homePage-PersonalInfo-left {
				width: 200rpx;
				margin-left: 10rpx;
				display: flex;
				justify-content: center;
				align-items: center;

				.PersonalInfo-HeadImage {
					width: 160rpx;
					height: 160rpx;
					border-radius: 100rpx;
					overflow: hidden;

					.PersonalInfo-HeadImage-image {
						width: 100%;
						height: 100%;
					}
				}
			}

			.homePage-PersonalInfo-right {
				flex: 1;

				.right-content {
					width: 90%;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;

					.basicInfo {
						display: flex;
						flex-direction: row;
						margin: 0 20rpx 10rpx 0rpx;

						.name {
							font-size: 40rpx;
						}

						.icon-chuangzuo {
							margin-left: 20rpx;
							color: #96fa8f;
						}
					}

					.residentialAddress {
						font-size: 30rpx;
						color: #939493;
						margin-top: 10rpx;
						margin-bottom: 10rpx;

					}
				}

			}
		}

		.homePage-RealNameInfo {
			background: #FFFFFF;
			width: 680rpx;
			height: 140rpx;
			margin-top: 40rpx;
			border-radius: 20rpx;
			overflow: hidden;
			display: flex;
			flex-direction: row;
			align-items: center;
			box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
			position: relative;

			.homePage-RealNameInfo-left {
				margin-left: 30rpx;
				font-weight: 500;
			}

			.homePage-RealNameInfo-right {
				display: flex;
				flex-direction: row;
				align-items: center;
				position: absolute;
				right: 20rpx;
				color: #A4ADB3;

				.icon-a-LeftArrow-copy {
					margin-left: 14rpx;
				}
			}
		}

		.homePage-work {
			background: #FFFFFF;
			width: 680rpx;
			// height: 500rpx;
			margin-top: 40rpx;
			margin-bottom: 40rpx;
			border-radius: 20rpx;
			overflow: hidden;
			box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);

			.cross-line {
				width: 100%;
				height: 1rpx;
				background: rgba(0, 0, 0, 0.1);
			}

			.homePage-work-part {
				margin-left: 30rpx;
				height: 120rpx;
				display: flex;
				align-items: center;
				position: relative;

				.homePage-image {
					height: 60rpx;
					width: 60rpx;

					.homePage-imageSelf{
						width: 100%;
						height: 100%;
					}
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
			}
		}
		.homePage-developer{
			width: 620rpx;
			text{
				font-size: 24rpx;
				color: #acadac;
			}
			margin-bottom: 40rpx;
		}
	}
</style>
