<template>
	<view>
		<view class="welcome-initial">
			<view class="welcome-initial-image">
				<image src="http://p1362.bvimg.com/10465/102cff8e6efee1fa.jpg" mode=""></image>
			</view>
			<view class="welcome-initial-text">

			</view>
			<view class="welcome-initial-button">
				<button class="sys_btn" open-type="getUserInfo" lang="zh_CN"
					@getuserinfo="appLoginWx">{{loginInfo.openid != "" && loginInfo.openid != undefined ? "已授权" : "小程序授权"}}</button>
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
			// #ifdef MP-WEIXIN
			appLoginWx() {
				// #ifdef MP-WEIXIN
				uni.getProvider({
					service: 'oauth',
					success: function(res) {
						if (~res.provider.indexOf('weixin')) {
							uni.login({
								provider: 'weixin',
								success: (res) => {
									_self.authorization = res.code;
									uni.getUserInfo({
										provider: 'weixin',
										success: (info) => { //这里请求接口
											console.log('用户昵称为：' + infoRes.userInfo.nickName);
											console.log(res);
											console.log(info);

										},
										fail: () => {
											uni.showToast({
												title: "微信登录授权失败",
												icon: "none"
											});
										}
									})

								},
								fail: () => {
									uni.showToast({
										title: "微信登录授权失败",
										icon: "none"
									});
								}
							})

						} else {
							uni.showToast({
								title: '请先安装微信或升级版本',
								icon: "none"
							});
						}
					}
				});
				//#endif
			},
			ifLoginAlready() {
				uni.getSetting({
					success(res) {
						console.log("授权：", res);
						if (!res.authSetting['scope.userInfo']) {
							//这里调用授权
							console.log("当前未授权");
							appLoginWx();
						} else {
							//用户已经授权过了
							console.log("当前已授权");
						}
					}
				})
			}
			//#endif
		}
	}
</script>

<style>

</style>
