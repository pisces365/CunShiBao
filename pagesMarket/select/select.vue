<template>
	<view>
		<view class="">
			<scroll-view class="scroll" scroll-x="true" scroll-left="0" show-scrollbar="true">
				<view style="display: inline-block; margin:30rpx 20rpx;" v-for="(item , index) in mainTypes" :key="index" @click="changeMain(index)">
					<image class="image" :src="item.img" mode="aspectFill"></image>
					<view class="" style="display: flex; margin-top: 20rpx;">
						<view :class="main==index?'mainName mainName-click':'mainName'">
							{{item.name}}
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="bottom">
			<scroll-view class="left-scroll" scroll-y="true" scroll-top="0" show-scrollbar="true">
				<view :class="middle==index?'left-tap left-tap-click':'left-tap' " v-for="(item , index) in middleTypes[main].array" :key="index" @click="changeMiddle(index)">
					{{item.name}}
				</view>
			</scroll-view>
			<scroll-view class="right-scroll" scroll-y="true" scroll-top="0" show-scrollbar="true">
				<view class="" v-for="(item , index) in detailType[main].content[middle].detail" :key="index" @click="changeDetail(index)">
					<view v-if="index===0" class="g-item">
						<view class="g-image">
							<image class="one-image" src="https://app-file.beitaichufang.com/img/H5/web/banner/banner21.jpg" mode="aspectFill"></image>
						</view>
						<view class="g-info">
							<view class="g-">
								<text class="g-index">{{index+1}}</text>
								<text class="g-name">{{item.name}}</text>
							</view>
							<view class="g-price">
								￥ {{item.price}}
							</view>
						</view>
					</view>
					<view v-else-if="index===2||index===1" class="g-item">
						<text class="g-index">{{index+1}}</text>
						<text class="g-name">{{item.name}}</text>
					</view>
					<view v-else class="g-item">
						{{item.name}}
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mainTypes:[
					{
						id:0,
						img:"https://app-file.beitaichufang.com/img/H5/web/banner/banner21.jpg",
						name:"家电",
						selected:true
					},
					{
						id:1,
						img:"https://app-file.beitaichufang.com/img/H5/web/banner/banner21.jpg",
						name:"图书",
						selected:false
					},
					{
						id:2,
						img:"https://app-file.beitaichufang.com/img/H5/web/banner/banner21.jpg",
						name:"交通",
						selected:false
					},
					{
						id:3,
						img:"https://app-file.beitaichufang.com/img/H5/web/banner/banner21.jpg",
						name:"衣物",
						selected:false
					},
					{
						id:4,
						img:"https://app-file.beitaichufang.com/img/H5/web/banner/banner21.jpg",
						name:"农具",
						selected:false
					}
				],
				main:0,
				middleTypes:[
					{
						id:0,
						array:[
							{
								num:0,
								name:"洗衣机",
								choose:true
							},
							{
								num:1,
								name:"冰箱",
								choose:false
							},
							{
								num:2,
								name:"微波炉",
								choose:false
							},
							{
								num:3,
								name:"热水器",
								choose:false
							},
							{
								num:4,
								name:"扫地机",
								choose:false
							},
							{
								num:5,
								name:"烤箱",
								choose:false
							}
						]
					},
					{
						id:1,
						array:[
							{
								num:0,
								name:"少儿",
								choose:true
							},
							{
								num:1,
								name:"初高中",
								choose:false
							},
							{
								num:2,
								name:"文学",
								choose:false
							},
							{
								num:3,
								name:"体育",
								choose:false
							},
							{
								num:4,
								name:"科技",
								choose:false
							},
							{
								num:5,
								name:"期刊",
								choose:false
							}
						]
					}
				],
				middle:0,
				detailType:[
					{
						id:0,
						content:[
							{
								id:0,
								detail:[
									{
										id:0,
										name:"海尔洗衣机",
										price:"1000",
										selected:false
									},
									{
										id:1,
										name:"美的洗衣机",
										price:"1000",
										selected:false
									},
									{
										id:2,
										name:"滚筒洗衣机",
										price:"1000",
										selected:false
									},
									{
										id:3,
										name:"xx洗衣机",
										price:"1000",
										selected:false
									},
									{
										id:4,
										name:"ab洗衣机",
										price:"1000",
										selected:false
									},
									{
										id:5,
										name:"汤姆斯洗衣机",
										price:"1000",
										selected:false
									},
									{
										id:6,
										name:"万家乐洗衣机",
										price:"1000",
										selected:false
									}
								]
							},
							{
								id:1,
								detail:[
									{
										id:0,
										name:"海尔冰箱",
										price:"1000",
										selected:false
									},
									{
										id:1,
										name:"美的冰箱",
										price:"1000",
										selected:false
									},
									{
										id:2,
										name:"滚筒冰箱",
										price:"1000",
										selected:false
									},
									{
										id:3,
										name:"xx冰箱",
										price:"1000",
										selected:false
									},
									{
										id:4,
										name:"ab冰箱",
										price:"1000",
										selected:false
									},
									{
										id:5,
										name:"汤姆斯冰箱",
										price:"1000",
										selected:false
									},
									{
										id:6,
										name:"万家乐冰箱",
										price:"1000",
										selected:false
									}
								]
							}
						]
					},
					{
						id:1,
						content:[
							{
								id:0,
								detail:[
									{
										id:0,
										name:"红果果",
										price:"1000",
										selected:false
									},
									{
										id:1,
										name:"绿泡泡",
										price:"1000",
										selected:false
									},
									{
										id:2,
										name:"童话故事",
										price:"1000",
										selected:false
									},
									{
										id:3,
										name:"阿凡提",
										price:"1000",
										selected:false
									},
									{
										id:4,
										name:"十万个为什么",
										price:"1000",
										selected:false
									},
									{
										id:5,
										name:"一千零一下也",
										price:"1000",
										selected:false
									},
									{
										id:6,
										name:"神笔马良",
										price:"1000",
										selected:false
									}
								]
							},
							{
								id:1,
								detail:[
									{
										id:0,
										name:"语文",
										price:"1000",
										selected:false
									},
									{
										id:1,
										name:"数学",
										price:"1000",
										selected:false
									},
									{
										id:2,
										name:"英语",
										price:"1000",
										selected:false
									},
									{
										id:3,
										name:"物理",
										price:"1000",
										selected:false
									},
									{
										id:4,
										name:"化学",
										price:"1000",
										selected:false
									},
									{
										id:5,
										name:"生物",
										price:"1000",
										selected:false
									},
									{
										id:6,
										name:"政治",
										price:"1000",
										selected:false
									}
								]
							}
						]
					}
					
				],
				detail:0
			}
		},
		methods: {
			changeMain(e) {
				this.main = e;
				this.middle = 0;
				this.detail = 0;
			},
			changeMiddle(e) {
				this.middle = e;
				this.detail = 0;
			},
			changeDetail(e) {
				this.detail = e;
			}
		}
	}
</script>

<style>
	* {
		font-size: 28rpx;
	}
	
	.scroll {
		white-space: nowrap;
		overflow: hidden;
		box-shadow: 0rpx 10rpx 30rpx #dcdddc;
	}
	
	.image {
		width: 120rpx;
		height: 120rpx;
		display: inline-block;
		border-radius: 30rpx;
		box-shadow: 0rpx 10rpx 20rpx #cdcecd;
	}
	.mainName {
		text-align: center;
		color: #8b8b8b;
		display: inline-block;
		margin: 0 auto;
		padding-bottom: 8rpx;
	}
	.mainName-click {
		color: rgb(22,132,252) !important;
		border-bottom: 2px solid rgb(22,132,252);
	}
	
	.bottom {
		display: flex;
	}
	.left-scroll {
		flex: 3;
		background-color: #f7f6f6;
		height: 100vh;
	}
	.left-tap {
		text-align: center;
		padding:30rpx 0;
		color: #8b8b8b;
	}
	.left-tap-click {
		background-color: rgb(128,179,235);
		color: white !important;
	}
	.right-scroll {
		flex: 9;
		
	}
	
	.one-image {
		width: 100rpx;
		height: 100rpx;
		display: inline-block;
		border-radius: 50rpx;
		box-shadow: 10rpx 10rpx 20rpx #dcdddc;
	}
	
	.g-item {
		margin:50rpx 50rpx;
		display: flex;
		color: #8b8b8b;
	}
	.g-image {
		
	}
	.g-info {
		margin-left: 30rpx;
		padding: 10rpx 0;
	}
	.g-index {
		background-color: rgb(243, 153, 18);
		color: white;
		border-radius: 6rpx;
		padding: 4rpx 12rpx;
		font-size: 28rpx;
		margin-right: 16rpx;
	}
	.g-name {
		margin-left: 10rpx;
		color: #8b8b8b;
	}
	.g-price {
		margin-top: 20rpx;
		font-size: 32rpx;
		color: rgb(243, 153, 18);
	}
</style>
