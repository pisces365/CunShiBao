<template>
	<view class="environment">
		<navigator class="showResult environment-part" url="achievementExhibition" hover-class="none">
			<view class="title">
				成果展示
			</view>
			<view class="showMore">
				查看更多
				<text class="iconfont icon-a-jiantou"></text>
			</view>
		</navigator>
		<view class="cross-line"></view>
		<navigator class="workMan environment-part" url="workmates" hover-class="none">
			<view class="title">
				工作人员
			</view>
			<view class="showMore">
				查看更多
				<text class="iconfont icon-a-jiantou"></text>
			</view>
		</navigator>
		<view class="cross-line"></view>
		<view class="bestFamily environment-part">
			<view class="title">
				家庭文明示范户
			</view>
		</view>
		<view class="environment-part">
			<navigator class="environment-part-item" url="Family-demonstration-household">
				<view class="floatText">
					<text>文明党员</text>
					<text>家庭示范户</text>
				</view>
				<view class="environment-part-item-bgImg">
					<image src="http://p1362.bvimg.com/10465/6d625579d158df51.jpg" mode=""></image>
				</view>
			</navigator>
			<navigator class="environment-part-item" url="envrionment-policy">
				<view class="floatText">
					<text>政策标准</text>
				</view>
				<view class="environment-part-item-bgImg">
					<image src="http://p1362.bvimg.com/10465/9dcb2fc23732a6ff.jpg" mode=""></image>
				</view>
			</navigator>
		</view>
		<navigator class="environment-photo" url="../addQuestion/addQuestion" hover-class="none">
			<view class="title">
				环境随手拍
			</view>
			<view class="environment-photo-img">
				<image src="https://tse1-mm.cn.bing.net/th/id/OIP-C._eqsuSEK2xAGHHiqEApCNgHaEb?w=291&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" mode=""></image>
			</view>
			<view class="float-image">
				<text class="iconfont icon-xiangji"></text>
			</view>
		</navigator>
		<navigator class="institution environment-part" url="envrionment-policy" hover-class="none">
			<view class="title">
				制度公约
			</view>
			<view class="showMore">
				查看更多
				<text class="iconfont icon-a-jiantou"></text>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	@import url("@/common/iconfont.css");

	.environment {
		padding: 30rpx;
	}

	.iconfont {
		color: #999999;
	}

	.environment-part {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.environment-part-item {
		width: 332rpx;
		border-radius: 12rpx;
		overflow: hidden;
		position: relative;
		margin-top: 20rpx;
	}

	.environment-part-item-bgImg {
		width: 332rpx;
		height: 250rpx;
	}

	.environment-part-item-bgImg image {
		-webkit-filter: brightness(70%);
		/*考虑浏览器兼容性：兼容 Chrome, Safari, Opera */
		filter: brightness(70%);
		width: 100%;
		height: 100%;
	}

	.title {
		font-size: 36rpx;
	}

	.cross-line {
		margin: 20rpx 0;
		width: 100%;
		background: #f0f1f0;
		height: 2rpx;
	}

	.floatText {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		z-index: 99999;
		position: absolute;
		top: 0rpx;
		left: 0rpx;
		width: 320rpx;
		height: 240rpx;

	}

	.floatText text {
		line-height: 70rpx;
		font-size: 36rpx;
		font-weight: bold;
		color: white;
	}
	.environment-photo{
		margin-top: 20rpx;
		position: relative;
	}
	.float-image{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 110%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.icon-xiangji{
		opacity: 0.7;
		font-size: 200rpx;
		color: white;
	}
	.environment-photo-img{
		margin-top: 30rpx;
		width: 100%;
		height: 320rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-radius: 20rpx;
		overflow: hidden;
	}
	.environment-photo-img image{
		width: 640rpx;
		height: 320rpx;
		border-radius: 20rpx;
	}
	.showMore{
		color: #636463;
	}
	.institution{
		margin-top: 30rpx;
	}
</style>
