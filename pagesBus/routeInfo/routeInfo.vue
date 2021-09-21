<template>
	<view>
		<view class="bus-item">
			<view>
				<text class="bus-stop">{{bus.route}}</text>
				<text class="like">收藏线路</text>
			</view>
			<view style="margin-top: 30rpx; position: relative;">
				<view class="change">
					换向
				</view>
				<view>
					<view>{{bus.start}}</view>
					<view class="to">开往</view>
					<view>{{bus.end}}</view>
				</view>
			</view>
			<view style="
					border-top: 1px solid rgb(223, 223, 223);
					border-bottom: 1px solid rgb(223, 223, 223);
					padding: 20rpx 0;
					margin: 20rpx 0;
					color: rgba(142, 142, 147, 1);">
				<view style="margin-bottom: 20rpx;">总里程:20km | 票价:3元</view>
				<view>运营时间：04:10 - 23:30</view>
			</view>
			
			<view>
				<view style="position: relative;">
					<text class="circle-start">始</text>
					<text style="margin-left: 14rpx;">{{bus.start}}</text>
					<block>
						<text  v-show="isShow(0)" style="position: absolute; top: 14rpx; left: 160rpx; border: 1px solid rgb(161,191,86); color: rgb(161,191,86); border-radius: 10rpx; font-size: 20rpx;">离您最近</text>
						<text  v-show="isShow(0)" style="position: absolute; top: 14rpx; right: 0;" class="like">收藏站台</text>
					</block>
				</view>
			</view>
			<view>
				<view>
					<view class="rectangle">
						<image class="icon-crowd" src="http://p1362.bvimg.com/10465/6e267dfe965c55d0.png" mode="widthFix"></image>
					</view>
					<view style="position: relative;">
						<block>
							<view v-show="isShow(0)" style="position: absolute; top: -80rpx; left: 70rpx;">
								<text style="vertical-align: top;">距您</text><text style="vertical-align: top;" class="num">{{bus.distance_meter}}</text><text style="vertical-align: top;">m</text>		
							</view>
							<view v-show="isShow(0)" style="position: absolute; top: -40rpx; left: 70rpx;">
								<text>距离</text><text class="num">{{bus.distance_station}}</text><text>站</text> <text class="num">{{bus.minute}}</text><text>分钟</text>
							</view>
							<view v-show="isShow(0)" class="icon" style="position: absolute; top: -70rpx; right:0;">
								<image class="icon-crowd" :src="bus.crowd" mode="widthFix"></image>
								<image class="icon-access" :src="bus.accessible" mode="widthFix"></image>
							</view>
						</block>
					</view>
				</view>
			</view>
			
			<view v-for="(item , index) in bus.allStation" :key="index" v-if="index >= 1">
				<view style="position: relative;">
					<view class="next">
						<image style="display: inline-block;" class="icon-crowd" src="http://p1362.bvimg.com/10465/07c47152ab91f3a2.png" mode="widthFix"></image>
					</view>
					<text style="position: absolute; top: 24rpx; left: 70rpx;">{{item.station}}</text>
					<block>	
						<text v-show="isShow(index)" style="position: absolute; top: 24rpx; left: 140rpx; border: 1px solid rgb(161,191,86); color: rgb(161,191,86); border-radius: 10rpx; font-size: 20rpx;">离您最近</text>
						<text v-show="isShow(index)" style="position: absolute; top: 14rpx; right: 0;" class="like">收藏站台</text>
					</block>
				</view>
				<view style="position: relative;">
					<view class="rectangle">
						<image class="icon-crowd" src="http://p1362.bvimg.com/10465/6e267dfe965c55d0.png" mode="widthFix"></image>
					</view>
					<block>
						<view v-show="isShow(index)" style="position: absolute; top: 24rpx; left: 70rpx;">
							<text style="vertical-align: top;">距您</text><text style="vertical-align: top;" class="num">{{bus.distance_meter}}</text><text style="vertical-align: top;">m</text>		
						</view>
						<view v-show="isShow(index)" style="position: absolute; top: 60rpx; left: 70rpx;">
							<text>距离</text><text class="num">{{bus.distance_station}}</text><text>站</text> <text class="num">{{bus.minute}}</text><text>分钟</text>
						</view>
						<view v-show="isShow(index)" class="icon" style="position: absolute; top: 30rpx; right:0;">
							<image class="icon-crowd" :src="bus.crowd" mode="widthFix"></image>
							<image class="icon-access" :src="bus.accessible" mode="widthFix"></image>
						</view>
					</block>
				</view>
			</view>
			
			
			<view>
				<view style="position: relative;">
					<text class="circle-end">终</text>
					<text style="margin-left: 14rpx;">{{bus.end}}</text>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bus:{
						route:"102路",
						bond:"公交总站",
						start:"营门口",
						end:"金玉井",
						aboard:"留下",
						distance_meter:"3",
						distance_station:"3",
						minute:"6",
						crowd:"http://p1362.bvimg.com/10465/4e30996c5dee8fb1.png",
						accessible:"http://p1362.bvimg.com/10465/b693c9983d17943e.png",
						allStation:[
							{
								station:"营门口",
								selected:false
							},
							{
								station:"上埠",
								selected:true
							},
							{
								station:"屏风",
								selected:false
							},
							{
								station:"西溪",
								selected:false
							}
						]
					}
			}
		},
		onLoad(options) {
			// console.log(options);
			this.bus.route = options.carNum;
		},
		methods: {
			isShow(num)
			{
				return this.bus.allStation[num].selected;
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
	
	.num {
		display: inline-block;
		margin:0rpx 8rpx;
		color: rgb(161,191,86);
		font-weight: bold;
	}
	
	.icon-crowd{
		width: 30rpx;
		height: 30rpx;
		margin-right: 30rpx;
		margin-top: 30rpx;
	}
	
	.circle-start {
		display: inline-block;
		background-color: rgb(229,229,234);
		color: rgb(161,191,86);
		width: 60rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		border-radius: 1000rpx;
		box-shadow: 0rpx 10rpx 10rpx #8e8f8e;
	}
	
	.circle-end {
		display: inline-block;
		background-color: rgb(229,229,234);
		color: rgb(161,191,86);
		width: 60rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		border-radius: 1000rpx;
		box-shadow: 0rpx -10rpx 10rpx #8e8f8e;
	}
	
	.rectangle {
		/* display: inline-block; */
		background-color: rgb(229,229,234);
		width: 36rpx;
		height: 100rpx;
		margin-left: 14rpx;
	}
	
	.next {
		/* display: inline-block; */
		background-color: rgb(229,229,234);
		width: 36rpx;
		height: 60rpx;
		margin-left: 14rpx;
	}
	
	.like {
		background-color: rgb(161,191,86);
		background-image: url(http://p1362.bvimg.com/10465/9ea2c1386d6d8511.png);
		background-repeat: no-repeat;
		background-size: 28rpx;
		background-position: 10rpx center;
		padding: 10rpx;
		padding-left: 46rpx;
		color: white;
		font-size: 20rpx;
		border-radius: 12rpx;
		float: right;
	}
	
	.to {
		background-image: url(http://p1362.bvimg.com/10465/614b4750108d095b.png);
		background-repeat: no-repeat;
		background-size: 50rpx;
		background-position: 0rpx center;
		padding: 30rpx 0;
		padding-left: 46rpx;
		color: rgba(142, 142, 147, 1);
	}
	
	.change {
		position: absolute;
		right: 0;
		top:25%;
		background-image: url(http://p1362.bvimg.com/10465/80978d6c304a0db0.png);
		background-repeat: no-repeat;
		background-size: 40rpx;
		background-position:center 0rpx ;
		padding-top: 40rpx;
		font-size: 20rpx;
	}
	
	.search {
		padding: 14rpx 20rpx;
		margin: 14rpx 14rpx;
		background-color: white;
		border-radius: 20rpx;
		font-size: 28rpx;
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
		font-size: 24rpx;
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
		font-size: 8rpx; 
		color: rgb(161,191,86);
		margin-right: 12rpx;
		margin-top: 10rpx;
		display: inline-block;
	}
</style>

