<template>
	<view>
		<view class="welcome-initial">
			<view class="welcome-initial-image">
				<image src="http://p1362.bvimg.com/10465/64a031f46da3bb66.jpg" mode=""></image>
			</view>
			<view class="welcome-initial-text">
				<view class="welcome-initial-text-top">
					欢迎您
				</view>
				<view class="welcome-initial-text-bottom">
					村里的事儿 村事宝来办
				</view>
			</view>
			<view class="welcome-initial-button">
				<button @click="goLogin" class="bottom-btn" type="primary">点击进入</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code: "",
				SessionKey: '',
				encryptedData: "",
				iv: "",
				OpenId: '',
				nickName: null,
				gender: 0,
				avatarUrl: null,
				isCanUse: uni.getStorageSync('isCanUse'), //默认为true  记录当前用户是否是第一次授权使用的
				userInfomation: {
					avatarUrl: '',
					city: '',
					country: '',
					gender: '',
					language: '',
					nickName: '',
					province: ''
				}
			}
		},
		methods: {
			goLogin() {
				let that = this;
				//判断缓存中是否有用户数据，没有则获取
				if (!uni.getStorageSync('encryptedData')) {
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
								// 选择版本
								uni.switchTab({
									url: "../index/index"
								});
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
							console.log('获取成功', res);
						}
					})

					uni.switchTab({
						url: "../index/index"
					});
				}
			}
		}
	}
</script>

<style>
	page {
		background: #f8f9f8;
	}

	.welcome-initial,
	.welcome-initial-text-top,
	.welcome-initial-text-bottom,
	.welcome-button {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.welcome-initial {
		margin-top: 220rpx;
	}

	.welcome-initial-text-top {
		margin-top: 46rpx;
		font-size: 50rpx;
	}

	.welcome-initial-text-bottom {
		margin-top: 18rpx;
		font-size: 24rpx;
	}

	.welcome-initial-image {
		width: 360rpx;
		height: 360rpx;
		border-radius: 300rpx;
		overflow: hidden;
	}

	.welcome-initial-image image {
		width: 100%;
		height: 100%;
	}

	.welcome-initial-button {
		width: 420rpx;
		height: 96rpx;
		border-radius: 50rpx;
		overflow: hidden;
		margin-top: 100rpx;

	}

	.welcome-button {
		width: 100%;
		height: 100%;
		background: #A2C056;
		color: white;
		font-size: 34rpx;
	}
</style>
