<template>
	<view>
		<view class="phone">
			<view class="inputPhone" v-show="!ifSendCode">
				<view class="phone-title">
					绑定手机
				</view>
				<view class="phone-tip">
					应国家监管要求请绑定手机
				</view>
				<view class="input-tip">
					手机号
				</view>
				<view class="input-content">
					<input type="number" maxlength="11" placeholder="输入手机号" v-model="phone" @input="inputPhone" />
				</view>
				<view class="cross-line">

				</view>
				<view class="checkPolicy" @click="radioChanged()">
					<label class="radio">
						<radio value="" /><text>阅读并同意《<text class="underLine">村事宝用户服务协议</text>》及《<text
								class="underLine">村事宝隐私政策</text>》</text>
					</label>

				</view>
				<view class="phone-button" @click="getMsgCode()">
					获取验证码
				</view>
			</view>
			<view class="inputCode" v-show="ifSendCode">
				<view class="phone-title">
					输入验证码
				</view>
				<view class="inputCode-codeTip">
					验证码已发送至
				</view>
				<view class="inputCode-codeContent">
					<view class="codeContent-phone">
						{{phone.substring(0,3)+' '}}{{phone.substring(3,7)+' '}}{{phone.substring(7,11)}}
					</view>
					<view class="reSend">
						<text>{{count<=0?'':count+'秒后 '}}</text> <text @click="reSendCode">重新发送</text>
					</view>
				</view>
				<view class="input-content">
					<input type="number" maxlength="6" v-model="code" @input="inputCode" />
				</view>
				<view class="cross-line"></view>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		sendSmsCode,
		phoneBind
	} from '../../../common/api.js'
	export default {
		data() {
			return {
				count: '',
				phone: '',
				code: '',
				checkRadio: false,
				ifSendCode: false
			}
		},
		methods: {
			radioChanged() {
				let _this = this
				if (_this.checkRadio == false) {
					_this.checkRadio = true
				} else {
					_this.checkRadio = false
				}
			},
			inputPhone(e) {
				this.phone = e.detail.value;
				// console.log(this.phone);
			},
			async inputCode(e) {
				let _this = this
				_this.code = e.detail.value;
				if (_this.code.length == 6) {
					let data = {
						"code": _this.code,
						"phone": _this.phone
					}
					await phoneBind(data).then((res) => {
						if (res.code == "200") {
							uni.showToast({
								title: '手机账号绑定成功',
								icon: 'none',
								duration:1000
							})
							uni.setStorageSync('phone',_this.phone)
							setTimeout(function() {
								uni.navigateBack({
									delta:2
								})
							}, 1000);
						} else {
							_this.code = ""
							uni.showToast({
								title: res.msg,
								icon: 'none',
								duration:1000
							})
						}
						console.log(res);
					})
				}
			},
			reSendCode() {
				let _this = this
				if (_this.count <= 0) {
					uni.showToast({
						title: '发送验证码成功',
						icon: 'none'
					})
					_this.ifSendCode = true
					let data = {
						"phone": _this.phone,
						"type": "login"
					}
					sendSmsCode(data).then((res) => {
						console.log(res);
					})
					if (_this.count <= 0) {
						_this.timer_();
					}
				}
			},
			//获取短信验证码
			getMsgCode() {
				let _this = this

				if (_this.phone.length != 11) {
					uni.showToast({
						title: '请输入正确的手机号',
						icon: 'none'
					})
					return;
				} else if (!_this.checkRadio) {
					uni.showToast({
						title: '请您勾选村事宝用户服务协议及村事宝隐私政策',
						icon: 'none'
					})
				} else {
					uni.showToast({
						title: '发送验证码成功',
						icon: 'none'
					})
					_this.ifSendCode = true
					let data = {
						"phone": _this.phone,
						"type": "login"
					}
					sendSmsCode(data).then((res) => {
						console.log(res);
					})
					if (_this.count <= 0) {
						_this.timer_();
					}

				}
			},
			timer_() {
				let _this = this
				const TIME_COUNT = 60;
				if (!_this.timer) {
					_this.count = TIME_COUNT;
					_this.timer = setInterval(() => {
						if (_this.count > 0 && _this.count <= TIME_COUNT) {
							_this.count--;
							// console.log(_this.count);
						} else {
							_this.count--;
							clearInterval(_this.timer);
							_this.timer = null;
						}
					}, 1000);
				}
			}
		}
	};
</script>
<style>
	page {
		background-color: white;
	}

	.phone {
		margin: 20rpx;
		border-radius: 20rpx;
		padding: 0 40rpx;

	}

	.phone-title {
		padding: 20rpx 0;
		display: flex;
		align-content: center;
		font-size: 50rpx;
		font-weight: 600;
	}

	.phone-input {
		margin: 20rpx;
		display: flex;
		padding: 10rpx;
		border: #d4e0e7 2rpx solid;
	}

	.phone-input-title,
	.phone-input-input,
	.phone-input-sendCode {
		display: flex;
		justify-content: center;
		margin-right: 10rpx;
	}

	.phone-input-sendCode {
		color: #3143e1;
		font-weight: bold;
	}

	.input-tip {
		margin-top: 100rpx;
		color: #939493;
		font-size: 26rpx;
	}

	.input-content {
		margin-top: 40rpx;
		font-size: 46rpx;
		font-weight: bold;
	}

	.cross-line {
		width: 90%;
		height: 2rpx;
		margin: 28rpx;
		background: #EAE9E9;
	}

	.phone-button {
		display: flex;
		align-content: center;
		justify-content: center;
		font-size: 34rpx;
		font-weight: bold;
		color: white;
		background: #4CD964;
		width: 90%;
		padding: 20rpx;
	}

	.checkPolicy {
		margin: 30rpx 0;
		font-size: 26rpx;
	}

	.radio text {
		line-height: 50rpx;
	}

	.inputCode-codeContent {
		display: flex;

	}

	.inputCode-codeTip {
		margin-top: 20rpx;
		position: relative;
	}

	.codeContent-phone {
		margin-top: 10rpx;
	}

	.reSend {
		position: absolute;
		right: 40rpx;
		font-size: 32rpx;
	}

	.reSend text:nth-child(1) {
		font-weight: bold;
	}
</style>
