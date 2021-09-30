<template>
	<view class="feedback">
		<view class="topBar">
			<view class="topBar-item" :style="{color:topbarIndex==0?'#6AA0F8':'black'}" @click="toBeSolved()">
				<text class="iconfont icon-lishi"></text>
				<text class="topBar-item-text">未解决</text>
			</view>
			<view class="topBar-item" :style="{color:topbarIndex==1?'#6AA0F8':'black'}" @click="reSolved()">
				<text class="iconfont icon-user-outline"></text>
				<text class="topBar-item-text">已解决</text>
			</view>
			<view class="vertical-line"></view>
		</view>
		<view class="BarBottomLine">
			<view class="BarBottomLine-cross-line" :style="{backgroundColor:topbarIndex==0?'#6AA0F8':'white'}"> </view>
			<view class="BarBottomLine-cross-line" :style="{backgroundColor:topbarIndex==1?'#6AA0F8':'white'}">
			</view>
		</view>
		<view class="content" v-show="!ifONLOADING">
			<image class="content-img" src="http://p1362.bvimg.com/10465/39be30fa3a5b0c76.jpg" mode=""></image>
			<view class="content-text">暂无内容</view>
		</view>
		<view class="fixedButtom" @click="toAddQustion">
			<view class="addQuestion">
				新增问题
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topbarIndex: 0,
				ifONLOADING: false
			}
		},
		methods: {
			toBeSolved() {
				let _this = this
				_this.topbarIndex = 0
				_this.ifONLOADING = true
				uni.showLoading({
					title: '加载中...',
				})
				setTimeout(function() {
					_this.ifONLOADING = false
					uni.hideLoading()

				}, 600);
			},
			reSolved() {
				let _this = this
				_this.topbarIndex = 1
				_this.ifONLOADING = true
				uni.showLoading({
					title: '加载中...',
				})
				setTimeout(function() {
					_this.ifONLOADING = false
					uni.hideLoading()

				}, 600);
			},
			toAddQustion(){
				uni.navigateTo({
					url:'../addQuestion/addQuestion'
				})
			}
		}
	}
</script>

<style>
	@import url("@/common/iconfont.css");

	.topBar {
		display: flex;
		position: relative;


	}

	.topBar-item {
		flex: 1;
		padding: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 34rpx;
	}

	.topBar-item-text {
		margin-left: 16rpx;
	}

	.vertical-line {
		position: absolute;
		background: #787978;
		height: 40rpx;
		width: 2rpx;
		top: 20rpx;
		left: 374rpx;
	}

	.BarBottomLine {
		display: flex;
	}

	.BarBottomLine-cross-line {
		align-items: center;
		justify-content: center;
		height: 2rpx;
		width: 100%;
		margin: 0 10rpx;
	}

	.content {
		height: 800rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.content-img {
		width: 400rpx;
		height: 400rpx;
		opacity: 0.6;
	}

	.content-text {
		margin-top: 40rpx;
		color: #81888D;
	}

	.fixedButtom {
		position: fixed;
		bottom: 30rpx;
		left: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: 40rpx;

	}

	.addQuestion {
		height: 80rpx;
		width: 600rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #6AA0F8;
		color: white;
	}
</style>
