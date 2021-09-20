<template>
	<view style="position: fixed; width: 100%;">
		<view>
			<map  id="navi_map" class="map"
			:longitude="markers[0].longitude"
			:latitude="markers[0].latitude" 
			:scale="scale" :markers="markers" :polyline="polyline" :style="'height: '+lastY+'rpx;'">
			</map>
			<!-- <web-view class="map" src="../../static/map.html"></web-view> -->
			<!-- <view class="map" style="height: 100rpx;"></view> -->
		</view>
		<view @touchmove="handletouchmove" @touchend="handletouchend" style="border-radius: 20rpx;">
			<view  style="padding-top:14rpx; border-radius: 20rpx;">
				<view  style="height: 14rpx;
				width: 60rpx;
				background-color: rgba(142, 142, 147, 0.6);
				margin: 0 auto;
				border-radius: 20rpx;
				margin-top: 10rpx;
				z-index: 100;">
					
				</view>
			</view>
			<view>
				<input class="search" type="text" placeholder="搜索"/>
			</view>
		</view>
		<scroll-view scroll-y="true" show-scrollbar="10" :style="'height: '+bottomHeight+'rpx;'">
			<view class="title-line">
				<text class="line">&nbsp;</text>
				<text class="title">推荐线路</text>
			</view>
			<navigator :url="'../routeInfo/routeInfo?carNum='+item.route" class="bus-item" v-for="(item , index) in bus" :key="index">
				<text class="bus-stop">{{item.route}}</text>
				<text class="station">开往</text>
				<text class="station">{{item.bond}}</text>
			</navigator>
			<view class="title-line">
				<text class="line">&nbsp;</text>
				<text class="title">推荐站点</text>
			</view>
			<navigator :url="'../stationInfo/stationInfo?station='+item" class="bus-item" v-for="(item , index) in station" :key="index">
				<image class="icon-crowd" src="http://p1362.bvimg.com/10465/6f6692899d8c324a.png" mode="widthFix"></image>
				<text style="vertical-align: top;">{{item}}</text>
			</navigator>
		</scroll-view>
	</view>
</template>


<script>
	import amapFile from '../../amap-uni.js'

	export default {
		data() {
			return {
				scale:14,
				pageHeight:0,
				currentY:0,
				ty:0,
				mapHeight:720,
				lastY:720,
				bottomHeight:400, 
				bus:[
					{
						route:"102路",
						bond:"公交总站"
					},
					{
						route:"193路",
						bond:"公交总站"
					},
					{
						route:"7476路",
						bond:"公交总站"
					},
					{
						route:"310B路高峰线",
						bond:"公交总站"
					},
					{
						route:"310B路高峰线",
						bond:"公交总站"
					}
				],
				station:[
					"水口",
					"屏风",
					"留下"
				],
				// markers:[] 这个数组一定要有两个 代表起点和终点的样式和位置
				markers: [{
							iconPath: "http://p1362.bvimg.com/10465/b27c2fbdf44267d7.png", // 起点
							id: 0,
							latitude: '30.241823',
							longitude: '120.035148',
							width: 24,
							height: 24
						}, 
						{
							iconPath: "http://p1362.bvimg.com/10465/1c41610ad5093738.png", // 中间点
							id: 1,
						    latitude: '30.24956',
							longitude: '120.190088',
							width: 24,
							height: 24
						}, 
						{
							iconPath: "http://p1362.bvimg.com/10465/6b73c5ddaa8c7cb1.png", // 终点
							id: 2,
						    latitude: '30.44956',
							longitude: '120.490088',
							width: 24,
							height: 24
						}],
						myAmapFun: '',
						locations: {} ,//这个是从其他页面获取的起点终点经纬度对象
						polyline: [{
						          points: [
									  {latitude: 30.241823,longitude: 120.035148},
									  {latitude: 30.24956,longitude: 120.190088},
									  {latitude: 30.44956,longitude: 120.490088},
									  {latitude: 30.45956,longitude: 120.480088}
								  ],
						          color: "#31c27c",
						          width: 10,
						          arrowLine: true,
						          borderWidth: 2 //线的边框宽度，还有很多参数，请看文档 
						        }]
			}
		},
		onShow() {
			console.log(uni.getSystemInfoSync().screenHeight);
			this.pageHeight = uni.getSystemInfoSync().screenHeight*1.7;
			this.bottomHeight = this.pageHeight - this.lastY;
		},
		methods: {
				handletouchmove: function(event)
				{
					this.currentY = event.changedTouches[0].pageY;
					// this.ty = this.currentY - this.lastY;
					// console.log(this.currentY);
					if(this.currentY < 150)
					{
						this.currentY = 150;
					}
					if(this.currentY > 450)
					{
						this.currentY = 450;
					}
					this.lastY = this.currentY+this.currentY;
					// console.log(this.lastY);
					this.bottomHeight = this.pageHeight - this.lastY;
				},
				handletouchend: function(event) {
					if(this.lastY < 300)
					{
						this.scale = 10;
					}
					else if(this.lastY < 700){
						this.scale = 14;
					}
					else{
						this.scale = 18;
					}
				}
			}
	}
</script>

<style>
	page {
		background-color: rgb(245,246,245);
		font-size: 28rpx;
		color: rgba(142, 142, 147, 1);
	}
	.map {
		width: 100%;
		/* height: 720rpx; */
	}
	.search {
		padding: 14rpx 20rpx;
		margin:14rpx 14rpx;
		background-color: white;
		border-radius: 20rpx;
		font-size: 28rpx;
	}
	.line {
		margin-left: 14rpx;
		margin-right: 14rpx;
		display: inline-block;
		width: 10rpx;
		height: 22rpx;
		background-color: rgb(161,191,86);
		border-radius: 5rpx;
	}
	.title {
		
	}
	.title-line {
		margin:20rpx 0;
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
	}
	.station {
		font-size: 24rpx;
		margin-left: 10rpx;
	}
	.icon-crowd{
		width: 32rpx;
		height: 32rpx;
		margin-right: 26rpx;
	}
</style>
