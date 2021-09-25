<template>
	<view class="workOrder">
		<view class="top">
			<view class="redLine">

			</view>
			<view class="top-content">
				保修服务工作人员专用通道
			</view>
		</view>
		<view class="content">
			<view class="account">
				<uni-easyinput v-model="username" placeholder="<请输入工号>" maxlength="11" />
			</view>
			<view class="password">
				<uni-easyinput v-model="password" placeholder="<请输入密码>" maxlength="11" />
			</view>
		</view>
		<view class="submit">
			<button type="primary">立即绑定</button>
		</view>
		<view class="tip">
			<view class="juzhong">
				村事宝数字乡村小程序
			</view>
			<view class="juzhong">
				浙江工业大学后浪技术开发团队
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {

		}
	}
</script>

<style>
	page {
		background: #f6f7f6;
	}

	.workOrder {
		padding: 20rpx;
	}

	.top {
		display: flex;
		align-items: center;
	}

	.top-content {
		margin-left: 20rpx;
	}

	.account {}

	.password {}

	.redLine {
		height: 40rpx;
		width: 6rpx;
		background: red;
	}

	.content {
		margin-top: 20rpx;
	}

	.content {
		background: white;
	}

	.submit {
		margin: 30rpx 0;
	}

	.juzhong {
		margin: 10rpx;
		color: #787978;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
