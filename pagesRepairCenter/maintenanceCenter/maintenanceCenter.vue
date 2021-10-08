<!-- 维修中心的主页 -->
<template>
	<view>
		<view class="top">
			<view style="padding: 40rpx 0;"></view>
			<view>
				<image class="topImage" src="http://p1362.bvimg.com/10465/518d95f0952dc833.png" mode="widthFix"></image>
			</view>
			<view style="padding: 28rpx 0;"></view>
		</view>
		
		<view style="padding: 20rpx 0;"></view>
		<view style="padding-top: 30rpx; margin:0 30rpx; background-color: #fefefe;">
			<view class="new-info" style="background-image: url(http://p1362.bvimg.com/10465/d1347580d914d745.png);">
				<text>报修</text>
				<text style="color: rgba(252,183,108,1);">服务</text>
			</view>
		</view>
		<view class="nav" style="display: flex;">
			<navigator url="../repairApply/repairApply" class="icon">
				<image class="sh-image" src="http://p1362.bvimg.com/10465/09aae7a693857728.png" style="background-color: rgba(250,208,196,0.1)" mode="aspectFill"></image>
				<view class="title">
					我要报修
				</view>
			</navigator>
			<navigator url="../myRepair/myRepair" class="icon">
				<image class="sh-image" src="http://p1362.bvimg.com/10465/b880dafd16148410.png" style="background-color: rgba(252,182,159,0.1)" mode="aspectFill"></image>
				<view class="title">
					我的报修
				</view>
			</navigator>
			<navigator url="../staffLogin/staffLogin" class="icon">
				<image class="sh-image" src="http://p1362.bvimg.com/10465/3d76de5a031eb483.png" style="background-color: rgba(253,160,133,0.1)" mode="aspectFill"></image>
				<view class="title">
					我的工单
				</view>
			</navigator>
		</view>
		<view style="padding: 20rpx 0;"></view>
		
		<view style="padding-top: 30rpx; margin:0 30rpx; background-color: white;">
			<view class="new-info" style="background-image: url(http://p1362.bvimg.com/10465/c620bb6595ae91aa.png);">
				<text>报修</text>
				<text style="color: rgba(252,183,108,1);">广场</text>
			</view>
			<workOrderIntroduce :intro="allIntro"></workOrderIntroduce>

		</view>
		
	</view>
</template>

<script>
	import workOrderIntroduce from '../../componentB/maintenanceCenter/workOrderIntroduce/workOrderIntroduce.vue'
	export default {
		components: {
			workOrderIntroduce,
		},
		data() {
			return {
				ifCount: false,
				allIntro: [{
						date: "09" + "-" + "29",
						num: "20190606",
						person: "赵芳舟",
						condition: "已派工",
						bool_condition: true,
						pic_url: "http://p1362.bvimg.com/10465/c3a9c337f395eaf7.png",
						campus: "屏峰校区",
						building: "家和西苑13号",
						roomNo: "701",
						Info: "寝室阳台关不上，厕所门掉了，灯时而闪，床塌了，地砖裂了，电风扇没风扇，空调坏了，墙皮没了"
					},
					{
						date: "08" + "-" + "28",
						num: "20180606",
						person: "雷军",
						condition: "待派工",
						bool_condition: false,
						pic_url: "http://p1362.bvimg.com/10465/c3a9c337f395eaf7.png",
						campus: "屏峰校区",
						building: "家和西苑树屋",
						roomNo: "000",
						Info: "寝室阳台关不上，厕所门掉了，灯时而闪，床塌了，地砖裂了，电风扇没风扇，空调坏了，墙皮没了"
					}
				]
				
			}
		},
		methods: {
			ItemSetFunc(index) {
				let _this = this
				for (var i = 0; i < _this.titles.length; ++i) {
					_this.titles[i].isActive = false;

				}
				_this.titles[index].isActive = true;
				_this.showIndex = index
				if (index == 3) {
					uni.navigateTo({
						url:'../MaintenanceWarning/MaintenanceWarning'
					})
				}
			}

		}
	}
</script>

<style>
	/* @import url("../../common/common_layout.css");

	page {
		min-height: 100%;
		background-color: #f3f2f2;
	} */
	
	@import url("../../common/iconfont.css");
	page {
		 background: rgb(243,243,243);
		background: linear-gradient(0deg, rgba(243,243,243,1) 50%, rgba(252,183,108,1) 100%); 
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
		box-shadow: 0rpx 4rpx 20rpx #9da19d;
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
		
		background-size: 40rpx;
		background-repeat: no-repeat;
		background-position: left top;
		padding-left: 60rpx;
		margin-left: 30rpx;
		font-weight: bolder;
		border-bottom: 4px solid #ffde59;
		display: inline-block;
		padding-bottom: 10rpx;
		/* margin-bottom: 30rpx; */
		
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
