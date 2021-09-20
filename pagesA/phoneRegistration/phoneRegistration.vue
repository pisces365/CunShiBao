<template>
	<view>
		<view class="phone">
			<view class="phone-title">
				社区租房管理上报
			</view>
			<view class="phone-input">
				<view class="phone-input-title">
					手机号
				</view>
				<view class="phone-input-input">
					<input type="number" placeholder="请输入手机号" @input="inputPhone" />
				</view>
				<view class="phone-input-sendCode" @tap="getMsgCode">
					发送验证码
				</view>
			</view>
			<view class="phone-input">
				<view class="phone-input-title">
					验证码
				</view>
				<view class="phone-input-input">
					<input type="number" placeholder="请输入验证码" @input="inputCode" />
				</view>
			</view>
			<view class="phone-input">
				<button type="default">确认上报</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				phone:'',
				code:''
			}
		},
		methods: {
			inputPhone(e){
				this.phone = e.detail.value;
			},
			inputCode(e){
				this.code = e.detai.value;
			},
			//获取短信验证码
			getMsgCode() {
				if (this.phone.length != 11) {
					uni.showToast({
						title: '请输入正确的手机号',
						icon: 'none'
					})
					return;
				}
				if (this.count <= 0) {
					getMsgCode({
						phone
					}).then(res => {
						console.log(res);
						this.timer_();
					});
				}
			},
			timer_() {
				const TIME_COUNT = 60;
				if (!this.timer) {
					this.count = TIME_COUNT;
					this.timer = setInterval(() => {
						if (this.count > 0 && this.count <= TIME_COUNT) {
							this.count--;
						} else {
							this.count--;
							clearInterval(this.timer);
							this.timer = null;
						}
					}, 1000);
				}
			}
		}
	};
</script>
<style>
	page {
		background: #f7f7f7;
	}

	.phone {
		margin: 20rpx;
		background-color: white;
		border-radius: 20rpx;

	}

	.phone-title {
		padding: 20rpx 0;
		display: flex;
		align-content: center;
		justify-content: center;
		font-size: 40rpx;
		font-weight: 600;
	}
	.phone-input{
		margin: 20rpx;
		display: flex;
		padding: 10rpx;
		border: #d4e0e7 2rpx solid;
	}
	.phone-input-title,.phone-input-input,.phone-input-sendCode{
		display: flex;
		justify-content: center;
		margin-right: 10rpx;
	}
	.phone-input-sendCode{
		color: #3143e1;
		font-weight: bold;
	}
</style>
