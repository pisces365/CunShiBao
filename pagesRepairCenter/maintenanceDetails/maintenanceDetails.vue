<!-- 维修中心-工单详情的主页 -->
<template>
	<view>		
		<view class="top">	
			<navigation  :titles="titles" @setItem="ItemSetFunc"></navigation>
		</view>
		<view style="height: 100rpx;"></view>
		
		<view v-if="getTitle0()">
			<view class="number-bar">
				<view class="number-bar-text">
					<view class="number-bar-1">水电-水龙头</view>
					<view class="number-bar-2">编号20190606</view>
					<view class="number-bar-3">
						保存单号
					</view>
				</view>	
				<view class="number-bar-bgi">
				</view>
			</view>
			
			<view class="items">
				<view class="items-border" style="position: relative;">
					<text class="text-left">下单时间</text>
					<text class="text-right">2019.9.25</text>
					<text class="intro-condition">已受理</text>
				</view>
			</view>
			<view class="items">
				<view class="items-border">
					<text class="text-left">维修地址</text>
					<text class="text-right">屏峰校区家和西苑13号701</text>
				</view>
			</view>
			<view class="items" style="margin-bottom: 30rpx;">
				<view class="items-border">
					<text class="text-left">具体问题</text>
					<view>
						<view class="text-right">水龙头连接处水管破损</view>
						<view class="items-image-box">
							<view v-for="(item , index) in imgArr" :key="index" style="position: relative;" class="items-image">
								<image :src="item.url" mode="aspectFill" class="repair-image" style="padding: 0;" ></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="items">
				<view class="items-border">
					<text class="text-left">联系方式</text>
					<text class="text-right">李先生</text>
				</view>
			</view>
			<view class="items">
				<view class="items-border">
					<text class="text-left">预计上门时间</text>
					<text class="text-right">2020.9.29 17:30-18:30</text>
				</view>
			</view>
			<view class="items">
				<view class="items-border">
					<text class="text-left">维修人员信息</text>
					<text class="text-right">张师傅</text>
				</view>
			</view>
		</view>
		   <!-- 123 -->
		<view v-if="getTitle1()">
			<view class="handle-details">
				<workOrderInDetails class=""></workOrderInDetails>
				<view class="handle-details-background">
					
				</view>
			</view>
			<view class="" style="padding: 0 30rpx; background-color: white;">
				<view style="display: flex; background-color: white;">
					<view class="left-panel">
					
					</view>
					<view class="right-panel">
						<view class="process">
							<view class="process-top">
								<view class="process-type">
									完工
								</view>
								<view class="process-date">
									2021.9.29 15:31:00
								</view>
								<view class="process-phone">
									
								</view>
							</view>
							<view class="process-item i-people">
								S01-维修组
							</view>
							<view class="process-item i-group">
								水电维修组
							</view>
							<view class="process-item i-goods">
								水管/个*1
							</view>
							<view class="process-item i-price">
								工时费：2.30元<br>
								物料费：12.00元
							</view>
							<view class="process-border-point">

							</view>							
						</view>
						
						<view class="process">
							<view class="process-top">
								<view class="process-type">
									派工
								</view>
								<view class="process-date">
									2021.9.29 15:31:00
								</view>
								<view class="process-phone">
									
								</view>
							</view>
							<view class="process-item i-people">
								S01-公寓维修组
							</view>
							<view class="process-item i-group">
								水电维修组
							</view>
							<view class="process-border-point">
							
							</view>
						</view>
						<view class="process">
							<view class="process-top">
								<view class="process-type">
									受理
								</view>
								<view class="process-date">
									2021.9.29 15:31:00
								</view>
								<view class="process-phone">
									
								</view>
							</view>
							<view class="process-item i-people">
								系统自动受理-受理部门
							</view>
							<view class="process-item i-group">
								水电维修组
							</view>
							<view class="process-border-point">
							
							</view>
						</view>
						<view class="process">
						<view class="process-top">
							<view class="process-type">
								申报
							</view>
							<view class="process-date">
								2021.9.29 15:31:00
							</view>
							<view class="process-phone">
								
							</view>
						</view>
						<view class="process-item i-people">
							我我我
						</view>
						<view class="process-item i-type">
							水电-水龙头
						</view>
						<view class="process-item i-address">
							屏峰校区家和西苑13号701
						</view>
						<view class="process-item i-problem">
							水龙头连接处水管破裂
						</view>
						<view class="process-item i-photo">
							<view class="items-image-box">
								<view v-for="(item , index) in imgArr" :key="index" style="position: relative;" class="items-image">
									<image :src="item.url" mode="aspectFill" class="repair-image" style="padding: 0;" ></image>
								</view>
							</view>
						</view>
					</view>
					</view>
				</view>
			</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import navigation from '@/component/policyInterpretation/navigation/navigation.vue'
	import workOrderInDetails from '@/componentB/maintenanceCenter/workOrderInDetails/workOrderInDetails.vue'
	export default {
		components: { 
			navigation,
			workOrderInDetails
		},
		data() {
			return {
				imgArr:[
					{
						id:0,
						url:"http://p1362.bvimg.com/10465/f055218fcab03c86.jpg"
					},
					{
						id:1,
						url:"http://p1362.bvimg.com/10465/f055218fcab03c86.jpg"
					}
				],
				titles:[
						  {
							id:0,
							name:"工单详情",
							isActive:true
						  },
						  {
							id:1,
							name:"处理详情",
							isActive:false
						  }
					   ],
				
				allIntro:[
					{
						date:"09"+"-"+"29",
						num:"20190606",
						person:"赵芳舟",
						condition:"已派工",
						bool_condition:true,
						pic_url:"http://p1362.bvimg.com/10465/c3a9c337f395eaf7.png",
						campus:"屏峰校区",
						building:"家和西苑13号",
						roomNo:"701",
						Info:"寝室阳台关不上，厕所门掉了，灯时而闪，床塌了，地砖裂了，电风扇没风扇，空调坏了，墙皮没了"
					},
					{
						date:"08"+"-"+"28",
						num:"20180606",
						person:"雷军",
						condition:"待派工",
						bool_condition:false,
						pic_url:"http://p1362.bvimg.com/10465/c3a9c337f395eaf7.png",
						campus:"屏峰校区",
						building:"家和西苑树屋",
						roomNo:"000",
						Info:"寝室阳台关不上，厕所门掉了，灯时而闪，床塌了，地砖裂了，电风扇没风扇，空调坏了，墙皮没了"
					}
				],
				myIntro:[
					{
						date:"09"+"-"+"29",
						num:"20190606",
						person:"赵芳舟",
						condition:"已派工",
						bool_condition:true,
						pic_url:"http://p1362.bvimg.com/10465/c3a9c337f395eaf7.png",
						campus:"屏峰校区",
						building:"家和西苑13号",
						roomNo:"701",
						Info:"寝室阳台关不上，厕所门掉了，灯时而闪，床塌了，地砖裂了，电风扇没风扇，空调坏了，墙皮没了"
					}
				]
			}
		},
		methods: {
			  ItemSetFunc(index){				
					for(var i=0;i<this.titles.length;++i)
					{
						this.titles[i].isActive = false;
					}
					this.titles[index].isActive = true;
			  }
			  ,
			  getTitle0() {
				    return this.titles[0].isActive;
			  }
			  ,
			  getTitle1() {
					return this.titles[1].isActive;
			  }			
		}
	}
</script>

<style>
	@import url("../../common/common_layout.css"); 
	page {
		min-height: 100%;
		background-color: #f3f2f2;
	}
	
	
	.items-border {
		display: flex;
		padding: 20rpx 0rpx;
		margin: 0 30rpx;
		background-color: white;
		border-bottom: 0.24rpx solid #eae9e9;
		
	}
	
	.items {
		background-color: white;
	}
	
	.repair-image {
		height: 120rpx;
		width: 120rpx;
		border-radius: 30rpx !important;
		border-radius: 12rpx;
		padding: 10rpx;
		font-size: 32rpx;
		color: #A6A7A6;
		line-height: 40rpx;
	}
	
	.intro-condition {
		position: absolute;
		font-size: 24rpx;
		right: 0; 
		color: #A1BF56;
		background-color: rgba(161,191,86,0.1);
		padding: 5rpx;
		margin: 10rpx 0;
		border-radius: 10rpx;
		box-shadow: 0 0 0 #000000;
	}
	
	.intro-yellow-condition {
		color: rgba(252,189,3,1) !important;
		background-color: rgba(252,189,3,0.1) !important;
	}

	.text-left {
		padding: 10rpx;
		margin-right: 30rpx;
		font-size: 32rpx;
		color: #A6A7A6;
	}
	
	.text-right {
		padding: 10rpx;
		font-size: 32rpx;
	}
	
	.items-image-box {
		display: flex;
	}
	
	.items-image {
		margin-right: 20rpx;
	}
	
	.number-bar {
		margin: 30rpx;
		display: flex;
		/* background: linear-gradient(to right,#4ecf68,#8dd3e1); */
		background: linear-gradient(200deg, #f57b39 0%, #ffce42 100%);
		border-radius: 30rpx;
		color: white;
		box-shadow: 10rpx 10rpx 30rpx #c2c3c2;
	}
	
	.number-bar-text {
		padding: 30rpx;
		flex: 4;
	}
	
	.number-bar-bgi {
		flex: 4;		
		background-image: url(http://p1362.bvimg.com/10465/018ca3ddc57ef953.png);
		border-radius: 30rpx;
		background-repeat: no-repeat;
		background-position: 16rpx 40rpx;
		background-size: 350rpx;
		opacity: 0.12;
		
	}
	
	.number-bar .number-bar-1 {
		font-size: 36rpx;
		margin-bottom: 10rpx;
	}
	
	.number-bar .number-bar-2 {
		font-size: 24rpx;
		margin-bottom: 70rpx;
	}
	
	.number-bar .number-bar-3 {
		padding: 16rpx 20rpx;
		background: #A1BF56;
		border-radius: 20rpx;
		color: white;
		font-size: 26rpx;
		display: inline-block;
		/* box-shadow: 3rpx 3rpx 15rpx #bcbdbc; */
	}
	
	
	
	/* 处理详情 */
	/* top */
	.handle-details {
		margin: 30rpx;
		border-radius: 30rpx;
		box-shadow: 10rpx 10rpx 30rpx #c2c3c2;
		/* background-color: white; */
		background: linear-gradient(45deg, #ffffff 0%, #ffffff 100%);
	}
	
	.handle-details-background {
		
	}
	
	
	/* 进度 */
	.left-panel {
		flex: 1;
		background-image: url(http://p1362.bvimg.com/10465/6abfa9d7b0fedf10.png);
		background-repeat: no-repeat;
		background-size: 50rpx;
		background-position: left top;
		margin-top: 30rpx;
	}
	
	.right-panel {
		flex: 7;
		font-size: 32rpx;
		margin-left: -5rpx;
	}
	
	.process {
		position: relative;
		padding-top: 20rpx;
		padding-left: 40rpx;
		border-bottom: 0.24rpx solid #eae9e9;
		border-left: 0.24rpx solid #eae9e9;
	}
	
	.process-border-point {
		position: absolute;
		background-repeat: no-repeat;
		background-size: 20rpx;
		background-position: 0 0;
		width: 20rpx;
		height: 20rpx;
		border-radius: 12rpx;
		bottom: -11rpx;
		left: -11rpx;
		z-index: 50;
		background-color: #c5c6c5;
	}
	
	.process-top {
		margin-top: 10rpx;
		display: flex;
	}
	
	.process-type {
		padding: 10rpx 20rpx;
		background-color: rgba(161,191,86,0.1);
		color: rgba(161,191,86,1);
		border-radius: 16rpx;
		font-size: 24rpx;
		text-align: center;
		flex: 1;
		/* box-shadow: 6rpx 6rpx 20rpx #c2c3c2; */
	}
	.process-date {
		line-height: 54rpx;
		font-size: 24rpx;
		margin-left: 30rpx;
		color: #A6A7A6;
		flex: 7;
	}
	
	.process-phone {
		background-image: url(http://p1362.bvimg.com/10465/ab867bab013a07e6.png);
		background-repeat: no-repeat;
		background-size: 50rpx;
		background-position: right top;
		flex: 2;
		position: relative;
		right: 0;
	}
	
	.process-item {
		margin-top:40rpx;
		margin-bottom:40rpx;
		line-height: 50rpx;
		padding-left: 90rpx;
		font-size: 28rpx;
	}
	
	.right-panel .i-goods {
		background-image: url(http://p1362.bvimg.com/10465/0ef6238b202847da.png);
		background-repeat: no-repeat;
		background-size: 45rpx;
		background-position: 2rpx 0;
	}
	.right-panel .i-price {
		background-image: url(http://p1362.bvimg.com/10465/1ba8677801c0731c.png);
		background-repeat: no-repeat;
		background-size: 50rpx;
		background-position: 0rpx 0;
	}
	
	
	.right-panel .i-group {
		background-image: url(http://p1362.bvimg.com/10465/0d41402b1def8839.png);
		background-repeat: no-repeat;
		background-size: 45rpx;
		background-position: 2rpx 0;
	}
	
	.right-panel .i-people{
		background-image: url(http://p1362.bvimg.com/10465/29a8357cf2ba4893.png);
		background-repeat: no-repeat;
		background-size: 50rpx;
		background-position: 0rpx 0;
	}
	.right-panel .i-type{
		background-image: url(http://p1362.bvimg.com/10465/3cc87bb8eff14191.png);
		background-repeat: no-repeat;
		background-size: 40rpx;
		background-position: 6rpx 0;
	}
	.right-panel .i-address{
		background-image: url(http://p1362.bvimg.com/10465/acbb3db4ae72b1f0.png);
		background-repeat: no-repeat;
		background-size: 50rpx;
		background-position: left;
	}
	.right-panel .i-problem{
		background-image: url(http://p1362.bvimg.com/10465/2171ee66bbc3815f.png);
		background-repeat: no-repeat;
		background-size: 60rpx;
		background-position: left top;
	}
	.right-panel .i-photo{
		background-image: url(http://p1362.bvimg.com/10465/9899f5992490668d.png);
		background-repeat: no-repeat;
		background-size: 50rpx;
		background-position: left top;
	}
</style>

