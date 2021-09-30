<template>
	<view style="background-color: rgb(243, 243, 243);">
		<view class="back-image">
			<view class="top" >
				<view style="padding: 46rpx 0;"></view>
				<view>
					<image class="topImage" src="http://p1362.bvimg.com/10465/07713b8f67cb3807.png" mode="widthFix"></image>
				</view>
				<view style="padding: 28rpx 0;"></view>
				<view>
					<input class="search" style="height: 50rpx;" type="text" placeholder="搜索"/>
				</view>
				<view style="padding: 20rpx 0;"></view>
				<view class="nav" style="display: flex;">
					<navigator url="../myApply/myApply" class="icon">
						<image class="sh-image" src="http://p1362.bvimg.com/10465/b84af5bceaf0ce0a.png" style="background-color: rgba(182,101,237,0.1)" mode="aspectFill"></image>
						<view class="title">
							帮扶申报
						</view>
					</navigator>
					<navigator url="../myHelp/myHelp" class="icon">
						<image class="sh-image" src="http://p1362.bvimg.com/10465/b0f7fc3234f17f85.png" style="background-color: rgba(115,37,255,0.1)" mode="aspectFill"></image>
						<view class="title">
							我的帮扶
						</view>
					</navigator>
					<navigator url="../staffLogin/staffLogin" class="icon">
						<image class="sh-image" src="http://p1362.bvimg.com/10465/d681147ad272afcd.png" style="background-color: rgba(249,91,123,0.1)" mode="aspectFill"></image>
						<view class="title">
							入户走访
						</view>
					</navigator>
					<!-- <navigator url="../managePage/managePage" class="icon">
						<image class="sh-image" src="http://p1362.bvimg.com/10465/bdd1706b7e82c4b4.png"  mode=""></image>
						<view class="title">
							二手管理
						</view>
					</navigator> -->
				</view>
				<view style="padding: 20rpx 0;"></view>
				<view class="nav" style="padding-bottom: 0;">
					<view class="new-info">
						<text>最新</text>
						<text style="color: #5f7bf9;">资讯</text>
					</view>
					<view class="info-list" style="padding: 0;">

					</view>
					
					<navigator url="../../pagesA/News?newsID=0" class="info-list">
						你不便 我上门 办实事 解民忧
						<text class="iconfont"></text>
					</navigator>
					<navigator url="../../pagesA/News?newsID=0" class="info-list">
						你不便 我上门 办实事 解民忧
						<text class="iconfont"></text>
					</navigator>
					<navigator url="../../pagesA/News?newsID=0" class="info-list">
						你不便 我上门 办实事 解民忧
						<text class="iconfont"></text>
					</navigator>
					<navigator url="../../pagesA/News?newsID=0" class="info-list">
						你不便 我上门 办实事 解民忧
						<text class="iconfont"></text>
					</navigator>
				</view>
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
			
		}
	}
</script>

<style>
	@import url("../../common/iconfont.css");
	page {
		background-color: rgb(243, 243, 243);
	}
	
	.back-image {
		background-image: url(http://p1362.bvimg.com/10465/bb05365f0f6427ec.png);
		background-size: 800rpx;
		background-repeat: no-repeat;
		background-position: center top;
		height: 100%;
	}
	
	.topImage {
		border-radius: 40rpx;
		margin:30rpx;
		margin-top: 0;
		margin-bottom: 0;
		display: block;	
		width: 690rpx;
		box-shadow: 0rpx 4rpx 30rpx #4e504e;
	}
	
	.top {
		/* margin-top: 30rpx; */
		 /* box-shadow: 0rpx 10rpx 30rpx #dcdddc; */
		 /* background-color: white; */
		 z-index: 100; 
		 /* float: left; */
		 width: 100%; 
		 /* position: fixed; */
	}
	
	.search {
		padding: 14rpx 20rpx;
		margin:0rpx 30rpx;
		background-color: rgb(255, 255, 255);
		border-radius: 20rpx;
		font-size: 28rpx;
		/* width: 100%; */
	}
	.title {
		margin-top: 16rpx;
		font-size: 30rpx;
		text-align: center;
	}
	.discribe {
		font-size: 28rpx;
		color: #A6A6A6;
		text-align: center;
	}
	.nav {
		margin:0 30rpx;
		padding: 30rpx 0;
		width: 690rpx;
		background-color: rgba(255,255,255,0.9);
	}
	.nav navigator {
		flex:1;
	}
	.nav navigator .sh-image {
		width: 60rpx;
		height: 60rpx;
		display: block;
		margin: 0 auto;
		padding: 20rpx;
		border-radius: 20rpx;
	}
	
	.new-info {
		background-image: url(http://p1362.bvimg.com/10465/d8a0cc03abaf5a4d.png);
		background-size: 40rpx;
		background-repeat: no-repeat;
		background-position: left center;
		padding-left: 60rpx;
		margin-left: 30rpx;
		font-weight: bolder;
		margin-bottom: 30rpx;
		
	}
	
	.info-list {
		font-size: 30rpx;
		padding:30rpx 30rpx;
		border-bottom: 1px solid #dfdfdf;
		/* border-top: 1px solid #dfdfdf; */
	}
	
	.info-list text {
		float: right;
		font-size: 38rpx;
	}
	.info-list text:after {
		content: "\e608";
	}
</style>
