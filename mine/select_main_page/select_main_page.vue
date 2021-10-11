<template>
	<view >
		<radio-group name="">
			<view class="otherInfo">
				<view class="otherInfo-item" @click="change(1)">
					<view class="otherInfo-item-left">
						标准风格
					</view>
					<view class="otherInfo-item-right">
						<label>
							<radio :checked="mainPage==1" />
						</label>
					</view>
				</view>
				<view class="cross-line"></view>
				<view class="otherInfo-item" @click="change(2)">
					<view class="otherInfo-item-left">
						老年风格
					</view>
					<view class="otherInfo-item-right">
						<label>
							<radio :checked="mainPage==2"  />
						</label>
					</view>
				</view>
			</view>
		</radio-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mainPage:1
			}
		},
		onLoad() {
			this.mainPage = uni.getStorageSync('mainPage');
		},
		methods: {
			change(num) {
				console.log(num);
				uni.setStorageSync('mainPage', num);
				this.mainPage = num;
			}
		}
	}
</script>

<style>
	page {
		background: #f7f8f7;
	}

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

	.black {
		color: #000000;
	}

	.uni-input {
		text-align: right;
	}

	.gray {
		color: #939493;
	}

	.submit {
		position: fixed;
		width: 100%;
		bottom: 0;
	}
	
	.otherInfo-item-right {
		float: right;
	}
</style>

