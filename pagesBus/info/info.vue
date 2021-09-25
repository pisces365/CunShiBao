<template>
	<view>
		<view>
			<view class="top">
				<view>
					<image class="topImage" src="http://p1362.bvimg.com/10465/0660e0c8379f7898.png" mode="widthFix"></image>
				</view>
				<navigator url="../search/search" style="background-color: rgb(245,246,245); padding: 2rpx 0rpx;">
					<input class="search" type="text" placeholder="搜索" disabled=""/>
				</navigator>
				<navigation :titles="titles" @setItem="ItemSetFunc"></navigation>
			</view>
			<view style="height: 530rpx;"></view>
			<navigator :url="'../routeInfo/routeInfo?carNum='+item.route" v-show="getTitle0()" class="bus-item" v-for="(item , index) in bus" :key="index">
				<view>
					<text class="bus-stop">{{item.route}}</text>
					<text class="station">开往</text>
					<text class="station">{{item.bond}}</text>
					<text style="font-size: 28rpx;float: right;margin-top: 2rpx;">{{item.start}}-{{item.end}}</text>
				</view>
				<view style="font-size: 28rpx; margin-top: 40rpx;">
					<text style="margin-right: 30rpx;">上车站：{{item.aboard}}</text>
					<text>距离</text><text class="num">{{item.distance}}</text><text>站</text> <text class="num">{{item.minute}}</text><text>分钟</text>
					<view class="icon">
						<image class="icon-crowd" :src="item.crowd" mode="widthFix"></image>
						<image class="icon-access" :src="item.accessible" mode="widthFix"></image>
					</view>
				</view>
			</navigator>
			<navigator :url="'../stationInfo/stationInfo?station='+item.station" v-show="getTitle1()" class="bus-item" v-for="(item , index) in station" :key="index">
				<image class="icon-crowd" src="http://p1362.bvimg.com/10465/6f6692899d8c324a.png" mode="widthFix"></image>
				<text style="vertical-align: top;">{{item.station}}</text>
				<view style="display: inline; float: right; ">
					<text style="vertical-align: top;">距您</text><text style="vertical-align: top;" class="num">{{item.distance}}</text><text style="vertical-align: top;">m</text>					
				</view>
				<view style="margin-top: 26rpx;">
					<text v-for="(item , index) in item.route" :key="index"  class="route">
						{{item}}
					</text>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	import navigation from '@/component/policyInterpretation/navigation/navigation.vue'
	export default {
		components: {
			navigation
		},
		data() {
			return {
				titles:[
						  {
							id:0,
							name:"我的公交",
							isActive:true
						  },
						  {
							id:1,
							name:"附近车站",
							isActive:false
						  }
					   ],
					   bus:[
					   	{
					   		route:"102路", //
					   		bond:"公交总站",
							start:"营门口",
							end:"金玉井",
							aboard:"留下",
							distance:"3",
							minute:"6",
							crowd:"http://p1362.bvimg.com/10465/4e30996c5dee8fb1.png",
							accessible:"http://p1362.bvimg.com/10465/b693c9983d17943e.png"
					   	},
					   	{
					   		route:"193路",
					   		bond:"公交总站",
					   		start:"营门口",
					   		end:"金玉井",
					   		aboard:"留下",
					   		distance:"3",
					   		minute:"6",
					   		crowd:"http://p1362.bvimg.com/10465/4e30996c5dee8fb1.png",
					   		accessible:"http://p1362.bvimg.com/10465/b693c9983d17943e.png"
					   	},
					   	{
					   		route:"7476路",
					   		bond:"公交总站",
					   		start:"营门口",
					   		end:"金玉井",
					   		aboard:"留下",
					   		distance:"3",
					   		minute:"6",
					   		crowd:"http://p1362.bvimg.com/10465/4e30996c5dee8fb1.png",
					   		accessible:"http://p1362.bvimg.com/10465/b693c9983d17943e.png"
					   	},
					   	{
					   		route:"310B路高峰线",
					   		bond:"公交总站",
					   		start:"营门口",
					   		end:"金玉井",
					   		aboard:"留下",
					   		distance:"3",
					   		minute:"6",
					   		crowd:"http://p1362.bvimg.com/10465/4e30996c5dee8fb1.png",
					   		accessible:"http://p1362.bvimg.com/10465/b693c9983d17943e.png"
					   	}
					   ],
					   station:[
					   	{
							station:"水口",
							distance:"123",
							route:[
								"11路",
								"193路",
								"7476路",
								"310B路高峰线"
							]
						},
					   	{
							station:"屏风",
							distance:"123",
							route:[
								"11路",
								"193路",
								"7476路",
								"310B路高峰线",
								"236M路地铁接驳线"
							]
						},
					   	{
							station:"留下",
							distance:"123",
							route:[
								"11路",
								"193路",
								"7476路",
								"310B路高峰线",
								"236M路地铁接驳线"
							]
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
		font-size: 28rpx;
	}
	
	.search {
		padding: 14rpx 20rpx;
		margin: 14rpx 14rpx;
		background-color: white;
		border-radius: 20rpx;
		font-size: 30rpx;
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
		margin-left: 10rpx;
		color: rgba(142, 142, 147, 1);
	}
	
	.icon {
		float: right;
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
	.route {
		border: 1px solid rgb(161,191,86);
		border-radius: 10rpx; 
		font-size: 26rpx; 
		color: rgb(161,191,86);
		margin-right: 12rpx;
		margin-top: 10rpx;
		display: inline-block;
	}
</style>
