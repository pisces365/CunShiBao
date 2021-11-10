<template name="index_old">
	<view>
		<view class="index">
			<swiper class="index-swiper" indicator-dots="true"  circular="true"
				indicator-active-color="#f7f7f7" indicator-color="#a6a6a6" @click="toBus">
				
				<swiper-item v-for="(item , index) in bus" :key="index" >
					<view class="bus">
						<view class="bus-image">
							<image src="http://p1362.bvimg.com/10465/0b3327e28e49a2a9.png" mode="aspectFit" lazy-load="true"></image>
						</view>
						<view class="bus-items">
							<view style="display: flex;">
								<view style="flex: 1;">
									<view style="padding-top:10rpx">
										<text class="bus-stop" >{{item.route}}</text>
									</view>
									<view style="margin-top: 6rpx;">
										<text class="station">开往 {{item.bond}}</text>
									</view>
								</view>
								<view style="float: right;">
									<text style="font-size: 32rpx; position: absolute; right: 20rpx; top:14%">{{item.start}}-{{item.end}}</text>
								</view>
							</view>
							<view style="font-size: 28rpx; margin-top: 40rpx;">
								<text style="margin-right: 30rpx;">上车站：{{item.aboard}}</text>
								<text>距离</text><text class="num">{{item.distance}}</text><text>站</text> <text class="num">{{item.minute}}</text><text>分钟</text>
							</view>
							<view style="font-size: 28rpx; margin-top: 40rpx;">
								<text style="margin-right: 30rpx;">拥挤程度</text>
								<view class="icon">
									<image class="icon-crowd" :src="item.crowd" mode="widthFix"></image>
								</view>
							</view>		
							<view style="font-size: 28rpx; margin-top: 40rpx;">
								<text style="margin-right: 30rpx;">残障支持情况</text>
								<view class="icon">
									<image class="icon-access" :src="item.accessible" mode="widthFix"></image>
								</view>
							</view>										
						</view>
					</view>
				</swiper-item>
			</swiper>
			
			<view class="index-polling">
				<view class="index-polling-title">
					<view class="index-polling-title-image">
						<image src="http://p1362.bvimg.com/10465/5f6f4059cd36c002.png" lazy-load="true" mode=""></image>
					</view>
					<view class="index-polling-title-text">
						<text>村务党建</text>
					</view>
				</view>
				<view class="functions">
					<navigator url="../../pagesA/policy/newAndExpert/newAndExpert" class="function-item">
						<view class="function-image">
							<image src="http://p1362.bvimg.com/10465/0e90b9e752f332b6.png" lazy-load="true" mode=""></image>
						</view>
						政策解读
					</navigator>
					<navigator url="../../pagesA/election/infoAndVote/infoAndVote" class="function-item">
						<view class="function-image">
							<image src="http://p1362.bvimg.com/10465/4aaa6a4c14a2acb3.png" lazy-load="true" mode=""></image>
						</view>
						换届选举
					</navigator>
					<navigator url="../../pagesA/VillageHead_Email/IWannaWrite/IWannaWrite" class="function-item">
						<view class="function-image">
							<image src="http://p1362.bvimg.com/10465/120e840f1b3a2cfa.png" lazy-load="true" mode=""></image>
						</view>
						村长信箱
					</navigator>
					<navigator class="function-item function-end function-hidden">
						占位
					</navigator>
				</view> 
			</view>
			
			<view class="index-polling">
				<view class="index-polling-title">
					<view class="index-polling-title-image">
						<image src="http://p1362.bvimg.com/10465/e1e8ef9ddb3bb0d5.png" lazy-load="true" mode=""></image>
					</view>
					<view class="index-polling-title-text">
						<text>民生服务</text>
					</view>
				</view>
				<view class="functions">
					<navigator url="../../pagesA/rent/rentType/rentType" class="function-item">
						<view class="function-image">
							<image src="http://p1362.bvimg.com/10465/c0dad633a9893441.png" lazy-load="true" mode=""></image>
						</view>
						房屋租赁
					</navigator>
					<navigator url="../../pagesMarket/mainPage/mainPage" class="function-item">
						<view class="function-image">
							<image src="http://p1362.bvimg.com/10465/a055fb17b410fd8c.png" lazy-load="true" mode=""></image>
						</view>
						乡村电商
					</navigator>
					<navigator url="../../pagesSupervision/superviseIndex/superviseIndex" class="function-item">
						<view class="function-image">
							<image src="http://p1362.bvimg.com/10465/c6116453eef5c3d0.png" lazy-load="true" mode=""></image>
						</view>
						村务监督
					</navigator>
					<navigator url="../../pagesHelp/helpIndex/helpIndex" class="function-item function-end">
						<view class="function-image">
							<image src="http://p1362.bvimg.com/10465/8f1438b9c9663ddb.png" lazy-load="true" mode=""></image>
						</view>
						精准帮扶
					</navigator>
				</view>  
			</view>
			
			<view class="index-polling">
				<view class="index-polling-title">
					<view class="index-polling-title-image">
						<image src="http://p1362.bvimg.com/10465/48c9cea3fa41b180.png" lazy-load="true" mode=""></image>
					</view>
					<view class="index-polling-title-text">
						<text>安全巡检</text>
					</view>
				</view>
				<view class="functions">
					<navigator url="../../pagesB/maintenanceCenter/maintenanceCenter" class="function-item">
						<view class="function-image">
							<image src="http://p1362.bvimg.com/10465/aed8e654d372d7e5.png" lazy-load="true" mode=""></image>
						</view>
						维修中心
					</navigator>
					<navigator url="../../pagesRepairCenter/maintenanceCenter/maintenanceCenter" class="function-item">
						<view class="function-image">
							<image src="http://p1362.bvimg.com/10465/aed8e654d372d7e5.png" lazy-load="true" mode=""></image>
						</view>
						维修中心(新版)
					</navigator>
					<navigator class="function-item function-hidden">
						占位
					</navigator>
					<navigator class="function-item function-end function-hidden">
						占位
					</navigator>
				</view>  
			</view>
		
		</view>
		<view style="height: 120rpx;">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bus:[{
					route:"236M路", //
					bond:"文三路",
					start:"西溪源公交站",
					end:"文三路",
					aboard:"西溪医院·横街",
					distance:"4",
					minute:"8",
					crowd:"http://p1362.bvimg.com/10465/4e30996c5dee8fb1.png",
					accessible:"http://p1362.bvimg.com/10465/b693c9983d17943e.png"
				},
				{
					route:"193路", //
					bond:"环北新村",
					start:"西溪源公交站",
					end:"环北新村",
					aboard:"西溪医院·横街",
					distance:"3",
					minute:"6",
					crowd:"http://p1362.bvimg.com/10465/4e30996c5dee8fb1.png",
					accessible:"http://p1362.bvimg.com/10465/b693c9983d17943e.png"
				}]
			}
		},
		methods: {
			toBus() {
				uni.navigateTo({
					url:"../../pagesBus/info/info"
				})
			}
		}
	}
</script>

<style>
	@import url("../../common/iconfont.css");

	page {
		background-image: url('http://p1362.bvimg.com/10465/cec1b7d96cf7acf2.png');
		background-attachment: fixed;
	}

	.index {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20rpx 30rpx;
	}

	.index-swiper {
		height: 400rpx;
		width: 100%;
		margin: 24rpx 0 16rpx 0;
		border-radius: 20rpx;
		overflow: hidden;
		background-color: white;
	}

	.index-polling-title {
		margin-top:20rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.index-polling-title-image image {
		height: 100rpx;
		width: 100rpx;
	}

	.index-polling {
		width: 670rpx;
	}
	
	.functions {
		display: flex;
	}
	
	.function-item {
		flex: 1;
		background-color: #FFFFFF;
		padding: 20rpx 10rpx;
		margin-right: 20rpx;
		height: 124rpx;
		border-radius: 30rpx;
		text-align: center;
	}
	
	.function-end {
		margin-right: 0rpx !important;
	}
	
	.function-hidden {
		visibility:hidden;
	}
	
	.function-image {
		height: 80rpx;
		width: 80rpx;
		margin: 0 auto;
		padding-bottom: 10rpx;
	}
	
	.function-image image {
		width: 100%;
		height: 100%;
	}
	
	.bus-stop {
		border: 2rpx solid rgb(161,191,86);
		border-bottom: 10rpx  solid rgb(161,191,86);
		border-radius: 10rpx 10rpx 0 0;
		font-weight: bold;
		/* font-size: 24rpx; */
		color: rgb(161,191,86);
		margin-right: 8rpx;
		
	}
	.bus-item {
		padding:24rpx 36rpx;
		background-color: #fff;
		border-bottom: 1px solid rgb(223, 223, 223);
	}
	.station {
		font-size: 28rpx;
		color: rgba(142, 142, 147, 1);
	}
	
	.icon {
		display: inline-block;
	}
	
	.icon-crowd{
		width: 34rpx;
		height: 34rpx;
		margin-right: 26rpx;
	}
	
	.icon-access {
		width: 30rpx;
		height: 30rpx;
	}
	
	.num {
		display: inline-block;
		margin:0rpx 8rpx;
		color: rgb(161,191,86);
		font-weight: bold;
	}
	
	.bus {
		background-color: white;
		padding: 20rpx 10rpx;
		/* border-radius: 20rpx; */
	}
	.bus-image {
		display: inline-block;
		border-right: 1px solid #A6A6A6;
	}
	.bus-image image{
		width: 140rpx;
		height: 320rpx;
	}
	.bus-items {
		margin-left: 20rpx;
		display: inline-block;
	}
</style>
