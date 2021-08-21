<template>
	<button @click="goLogin" class="bottom-btn" type="primary">登入</button>
</template>


<script>
	import {
		mapMutations
	} from 'vuex'
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
				isCanUse: uni.getStorageSync('isCanUse') //默认为true  记录当前用户是否是第一次授权使用的
			}
		},
		methods: {
			goLogin() {
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
								// 选择版本
								uni.navigateTo({
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
					uni.navigateTo({
						url: "../index/index"
					});
				}
			}
		}
	}
</script>

<style>
	.header {
		margin: 90rpx 0 90rpx 50rpx;
		border-bottom: 1px solid #ccc;
		text-align: center;
		width: 650rpx;
		height: 300rpx;
		line-height: 450rpx;
	}

	.header image {
		width: 200rpx;
		height: 200rpx;
	}

	.content {
		margin-left: 50rpx;
		margin-bottom: 90rpx;
	}

	.content text {
		display: block;
		color: #9d9d9d;
		margin-top: 40rpx;
	}

	.bottom {
		border-radius: 80rpx;
		margin: 70rpx 50rpx;
		font-size: 35rpx;
	}
</style>
