<template>
	<view>
		<view>
			<navigation :titles="titles" @setItem="ItemSetFunc"></navigation>
		</view>
		
		<scroll-view v-show="titles[0].isActive" scroll-y="true" show-scrollbar="10" style="height: 1380rpx;">
			<view  style="margin-top: 30rpx;">
				<view style="margin-bottom: 20rpx; padding: 6rpx; border-radius: 20rpx; background-color: white;" v-for="(item,index) in latestPolicy" :key="index">
					<view>
						<view class="news">
							<navigator :url="item.url" class="nav">
								<view class="title">
									{{item.title}}
								</view>
								<view class="bottom-infomation">
									<text class="source">
										{{item.source}}
									</text>
									<text class="date">
										{{item.date}}
									</text>
									<text class="reading">
										<text>阅读 {{item.reading}}</text>
									</text>
									<text class="like"> 
										<text>赞 {{item.like}}</text>						
									</text>
								</view>
							</navigator>
						</view>
					</view>
				</view>
			</view>
			<view class="none">
				再多也木有咯……
			</view>
		</scroll-view>
		<scroll-view v-show="getTitle(1)" scroll-y="true" show-scrollbar="10" style="height: 1380rpx;">
			<view >
				<view class="personInfo-title">
					我的线路
				</view>
				<view class="none" v-if="bus.length==0">
					空空如也，快去收藏吧！
				</view>
				<navigator v-for="(item , index) in bus" :key="index" :url="'../../pagesBus/routeInfo/routeInfo?carNum='+item.route+'&start='+item.start+'&end='+item.end"  class="bus-item" >
					<view>
						<text class="bus-stop">{{item.route}}</text>
						<text class="station">开往</text>
						<text class="station">{{item.end}}</text>
						<text style="font-size: 28rpx;float: right;margin-top: 2rpx;">{{item.start}}-{{item.end}}</text>
					</view>
					<!-- <view style="font-size: 28rpx; margin-top: 40rpx;">
						<text style="margin-right: 30rpx;">上车站：{{item.aboard}}</text>
						<text>距离</text><text class="num">{{item.distance}}</text><text>站</text> <text class="num">{{item.minute}}</text><text>分钟</text>
						<view class="icon">
							<image class="icon-crowd" :src="item.crowd" mode="widthFix"></image>
							<image class="icon-access" :src="item.accessible" mode="widthFix"></image>
						</view>
					</view> -->
					<view style="font-size: 28rpx; margin-top: 40rpx;">
						<text style="margin-right: 30rpx;">上车站：西溪医院·横街</text>
						<text>距离</text><text class="num">4</text><text>站</text> <text class="num">8</text><text>分钟</text>
						<view class="icon">
							<image class="icon-crowd" src="http://p1362.bvimg.com/10465/4e30996c5dee8fb1.png" mode="widthFix"></image>
							<image class="icon-access" src="http://p1362.bvimg.com/10465/b693c9983d17943e.png" mode="widthFix"></image>
						</view>
					</view>
				</navigator>
				<view class="personInfo-title">
					我的车站
				</view>
				<navigator :url="'../../pagesBus/stationInfo/stationInfo?station='+item.station" class="bus-item" v-for="(item , index) in station" :key="index">
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
			<view class="none">
				再多也木有咯……
			</view>
		</scroll-view>
		<scroll-view v-show="getTitle(2)" scroll-y="true" show-scrollbar="10" style="height: 1380rpx;">
			<view  >
				<navigator url="../../pagesMarket/buy/buy" class="my-item" style="display: flex;">
					<view style="flex: 5;">
						<image class="secondHandImage" src="http://p1362.bvimg.com/10465/252a23a1d7b10b5b.jpg"  style="width: 100%;" mode="aspectFill"></image>
					</view>
					<view style="flex: 7; margin: 30rpx 0 20rpx 30rpx; position: relative;">
						<view>
							<text class="goods-name">珞玲珑电视柜茶几组合</text>
						</view>
						<view class="" style="margin:20rpx 0">
							<text class="brand-and-condition">钢化玻璃 人造板</text>
							<text class="brand-and-condition">|</text>
							<text class="brand-and-condition">珞玲珑</text>
						</view>
						<view class="" style="position: absolute; bottom: 10rpx;">
							<text class="price-now">￥899</text>
							<text class="price-before">￥999</text>
							<text class="discount">已减￥100</text>
						</view>
					</view>
				</navigator>
			</view>
			<view class="none">
				再多也木有咯……
			</view>
		</scroll-view>
	</view>
	
</template>

<script>
	import information from '@/component/policyInterpretation/information/information.vue'
	import navigation from '@/component/policyInterpretation/navigation/navigation.vue'
	export default {
		components: {
			navigation,
			information
		},
		onShow() {
			// console.log(123);
			let news = uni.getStorageSync('news');
			if(news == "")
			{
				this.latestPolicy = [];
				this.ItemSetFunc(0);
				    this.$nextTick(() => {
				        this.titles[0].isActive = true;
				    })
			}
			else{
			let news_array = news.split('#%%#');
			// console.log(news_array);
			this.latestPolicy = [];
			for(var i=0;i<news_array.length;++i)
			{
				let temp = JSON.parse(news_array[i]);
				// console.log(temp);
				let obj = {title:temp.title.titleContent,
							source:temp.title.artileSource,
							date:temp.title.releaseTime,
							reading:temp.data_reading,
							like:temp.data_like,
							url:"../../pagesA/News?newsID="+temp.NewsID +'&doyoulike=true'}
							
				this.latestPolicy[i] = obj;
				// title: "辽宁省康平县：稻蟹共生促发展 一田两用助增收",
				// source: "康平融媒号",
				// date: "2021年08月24日",
				// reading: "8,496",
				// like: "6,318",
				// url: "../../News?newsID=2"
			}
			this.ItemSetFunc(0);
			    this.$nextTick(() => {
			        this.titles[0].isActive = true;
			    })
			// console.log(456);
			}
			
			/////////////////////////////////////////公交
			let buses = uni.getStorageSync('bus_route');
			if(buses == "")
			{
				this.bus = [];
				return;
			}
			let buses_array = buses.split("#%%#");
			let buses_obj_array = [];
			for(var i=0;i<buses_array.length;++i)
			{
				buses_obj_array[i] = JSON.parse(buses_array[i]);
			}
			this.bus = buses_obj_array;
			console.log(this.bus);
		},
		data() {
			return {
				titles:[
						  {
						  	id:0,
						  	name:"政策资讯",
						  	isActive:false
						  },
						  {
							id:1,
							name:"公交出行",
							isActive:false
						  },
						  {
							id:2,
							name:"二手商品",
							isActive:false
						  },
						  {
						  	id:3,
						  	name:"房屋租赁",
						  	isActive:false
						  }
					   ],
					   latestPolicy: [],
					   bus:[
					   	// {
					   	// 	route:"236M路", //
					   	// 	bond:"文三路",
					   	// 	start:"西溪源公交站",
					   	// 	end:"文三路",
					   	// 	aboard:"西溪医院·横街",
					   	// 	distance:"4",
					   	// 	minute:"8",
					   	// 	crowd:"http://p1362.bvimg.com/10465/4e30996c5dee8fb1.png",
					   	// 	accessible:"http://p1362.bvimg.com/10465/b693c9983d17943e.png"
					   	// },
					   	// {
					   	// 	route:"193路",
					   	// 	bond:"环北新村",
					   	// 	start:"西溪源公交站",
					   	// 	end:"环北新村",
					   	// 	aboard:"西溪医院·横街",
					   	// 	distance:"3",
					   	// 	minute:"6",
					   	// 	crowd:"http://p1362.bvimg.com/10465/4e30996c5dee8fb1.png",
					   	// 	accessible:"http://p1362.bvimg.com/10465/b693c9983d17943e.png"
					   	// },
					   	// {
					   	// 	route:"7467路",
					   	// 	bond:"午潮山公交站",
					   	// 	start:"梦想小镇",
					   	// 	end:"午潮山公交站",
					   	// 	aboard:"留下",
					   	// 	distance:"5",
					   	// 	minute:"5",
					   	// 	crowd:"http://p1362.bvimg.com/10465/4e30996c5dee8fb1.png",
					   	// 	accessible:"http://p1362.bvimg.com/10465/b693c9983d17943e.png"
					   	// },
					   	// {
					   	// 	route:"136路",
					   	// 	bond:"金莲桥",
					   	// 	start:"留下南",
					   	// 	end:"金莲桥",
					   	// 	aboard:"留下",
					   	// 	distance:"2",
					   	// 	minute:"3",
					   	// 	crowd:"http://p1362.bvimg.com/10465/4e30996c5dee8fb1.png",
					   	// 	accessible:"http://p1362.bvimg.com/10465/b693c9983d17943e.png"
					   	// }
					   ],
					   station:[
					   	{
					   		station:"西溪医院·横街",
					   		distance:"847",
					   		route:[
					   			"236M路",
					   			"193路",
					   			"526路",
					   			"310路"
					   		]
					   	},
						{
					   		station:"屏峰",
					   		distance:"439",
					   		route:[
					   			"236M路",
					   			"193路",
					   			"596路",
					   			"310B路"
					   		]
					   	},
						{
					   		station:"留下",
					   		distance:"2000",
					   		route:[
					   			"1408路",
					   			"382路",
					   			"367路",
					   			"193路",
					   			"279H路"
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
			getTitle(num) {
				return this.titles[num].isActive;
			}
		}
	}
</script>

<style>
	page {
		background-color: rgb(243, 243, 243);
		overflow: hidden;
		position:fixed;
	}
	
	
	
	.news {
		background-color: white;		
	}
	
	.nav {
		padding: 30rpx 0;
		margin: 0 30rpx;
		/* border-bottom: 0.24rpx solid #eae9e9; */
	}
	
	.title {
		margin:0 10rpx 10rpx 10rpx;
		font-size: 36rpx;
	}
	.bottom-infomation {
		margin-top: 30rpx;
		margin-left: 10rpx;
		font-size: 26rpx;
	}
	.source,.date{
		color: #939493;
		margin-right: 20rpx;
	}
	.reading,.like {
		float: right;
		margin-right: 20rpx;
	}
	/* .reading text {
		color: rgba(86,120,243,1);
		background-color: rgba(86,120,243,0.1);
		padding: 5rpx;
		border-radius: 5rpx;
		/* box-shadow: 10rpx 10rpx 20rpx #dbdcdb; */
	/* } 
	 */
	.like {
		flex: 0.6;
	}
	/* .like text {
		color: rgba(255,69,91,1);
		background-color: rgba(255,69,91,0.1);
		padding: 5rpx;
		border-radius: 5rpx;
		/* box-shadow: 10rpx 10rpx 20rpx #dbdcdb; */
	/* } 
	*/
	.reading text {
		color: rgb(109, 141, 173);
		background-color: rgba(109, 141, 173, 0.1);
		padding: 5rpx;
		border-radius: 5rpx;
		/* box-shadow: 10rpx 10rpx 20rpx #dbdcdb; */
		font-weight: 600;
	}
	.like text {
		color: rgb(158, 65, 46);
		background-color: rgba(158, 65, 46, 0.1);
		padding: 5rpx;
		border-radius: 5rpx;
		/* box-shadow: 10rpx 10rpx 20rpx #dbdcdb; */
		font-weight: 600;
	}
	
	.main {
		padding-left: 20rpx;
		padding-right: 20rpx;
		/* padding-top: 30rpx; */
	}
	
	.my-item {
		background-color: white;
		padding: 20rpx 30rpx;
		margin: 30rpx 0;
		border-radius: 20rpx;
	}
	
	.my-item-title {
		font-size: 30rpx;
	}
	.my-item-time {
		font-size: 26rpx;
		color: #A6A6A6;
		margin: 20rpx 0;
	}
	.my-item-text {
		font-size: 28rpx;
	}
	
	.none {
		color: #A6A6A6;
		font-size: 28rpx;
		text-align: center;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}
	
	@import url("../../common/common_layout.css");
	page {
		min-height: 100%;
		background-color: #f3f2f2;
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
		margin-bottom: 20rpx;
		border-radius: 20rpx;
		padding:24rpx 36rpx;
		background-color: #fff;
		/* border-bottom: 1px solid rgb(223, 223, 223); */
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
	
	.personInfo-title {
		margin: 30rpx 40rpx;
		font-size: 32rpx;
		font-weight: bolder;
	}
	
	.price-now {
		font-size: 30rpx;
		color: rgb(243, 153, 18);
	}
	.price-before {
		margin-left: 8rpx;
		color: rgb(243, 153, 18);
		font-size: 24rpx;
		text-decoration: line-through;
	}
	.discount {
		margin-left: 8rpx;
		color: rgb(243, 153, 18);
		background-color: rgba(243, 153, 18,0.1);
		font-size: 24rpx;
		padding: 6rpx;
		margin-right: 10rpx;
	}
	
	.goods-name {
		font-weight: bold;
		margin-right: 14rpx;
		font-size: 30rpx;
	}
	.brand-and-condition {
		font-size: 24rpx;
		color: #A6A6A6;
		margin-right: 8rpx;
	}
	.secondHandImage {
		height: 240rpx;
		border-radius: 20rpx;
	}
</style>