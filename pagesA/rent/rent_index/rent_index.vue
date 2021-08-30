<!-- 房屋租赁首页 -->
<template>
	<view class="rent">
		<view class="rent-top">
			<view class="rent-title">
				<view class="rent-title-search">
					<swiper class="swiper" autoplay="true" vertical="true" interval="3000" duration="400">
						<swiper-item id="item1">
							<view class="rent-title-search-content"><text class="iconfont icon-sousuo"></text>龙湖紫晶上城
							</view>
						</swiper-item>
						<swiper-item id="item2">
							<view class="rent-title-search-content"><text class="iconfont icon-sousuo"></text>圆梦亭民宿
							</view>
						</swiper-item>
						<swiper-item id="item3">
							<view class="rent-title-search-content"><text class="iconfont icon-sousuo"></text>安吉喜山民宿
							</view>
						</swiper-item>
					</swiper>
				</view>
				<view class="rent-title-function">
					<view class="functionPart" v-for="(item,index) in rent_function" :key="index">
						<image class="functionPart-image" :src="item.imageUrl" mode=""></image>
						<view class="functionPart-description">
							{{item.description}}
						</view>
					</view>
				</view>
			</view>
			<view class="rent-classify">
				<view class="rent-classify-Area rent-classify-Part">
					<picker class="content-inputText" mode="selector" :range="AreaArray" @change="AreaPicker">
						<view class="uni-input">{{AreaArray[info.AreaIndex]}}</view>
						<text class="iconfont icon-arrow-down-copy"></text>
					</picker>
				</view>
				<view class=" vertical-line"></view>
				<view class="rent-classify-Price rent-classify-Part">
					<picker class=" content-inputText" mode="selector" :range="PriceArray" @change="PricePicker">
						<view class="uni-input">{{PriceArray[info.PriceIndex]}}</view>
						<text class="iconfont icon-arrow-down-copy"></text>
					</picker>
				</view>
				<view class=" vertical-line"></view>
				<view class=" rent-classify-Part uni-input rent-classify-Location">
					距离最近
				</view>
			</view>
		</view>
		<scroll-view scroll-y="true" class="rent-bottom">
			<view class="houseInfo" v-for="(item,index) in houseInfo" :key="index" @tap="handleToDetail(item)">
				<view class="houseInfo-left">
					<image class="houseInfo-left-image" :src="item.images[0]" mode=""></image>
				</view>
				<view class="houseInfo-right">
					<view class="houseInfo-right-type">
						<text>{{item.type}}</text>
						<text class=" iconfont icon-weibiaoti"></text>
						<text>{{item.description}}</text>
					</view>
					<view class="houseInfo-right-location">
						<text>{{item.locationStreet}}</text>
						<text class=" iconfont icon-weibiaoti"></text>
						<text>{{item.locationDetail}}</text>
					</view>
					<view class="houseInfo-right-label">
						<view class="houseInfo-label" v-for="(labelItem,labelIndex) in item.label" :key="labelIndex">
							{{labelItem}}
						</view>
					</view>
					<view class="houseInfo-right-info_Based">
						<text class="price">{{item.price}}</text>
						<text> 元/月</text>
						<text>{{item.RoomInfo}}室</text>
						<text>{{item.hourseAream}}</text>
						<text>m</text>
						<text>2</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {
					AreaIndex: 0,
					PriceIndex: 0
				},
				rent_function: [{
					imageUrl: 'http://p1362.bvimg.com/10465/50d2d8801b5312d3.png',
					description: '整租'
				}, {
					imageUrl: 'http://p1362.bvimg.com/10465/d4b52b7dca101fb9.png',
					description: '合租'
				}, {
					imageUrl: 'http://p1362.bvimg.com/10465/474e9d880e912623.png',
					description: '民宿短租'
				}, {
					imageUrl: 'http://p1362.bvimg.com/10465/0cb1543ada346e6b.png',
					description: '发房源'
				}],
				AreaArray: ['地区分类', '相国寺', '郭家村', '岑村', '塘屋里', '新西湖小镇', '黄婆庙', '金家塘村'],
				PriceArray: ['价格区间', '1000以下', '1000-1500元', '1500-2000元', '2000-2500元', '2500-3000元', '3000-3500元',
					'3500-4000元', '4000以上'
				],
				houseInfo: [{
						index:0,
						images: [
							'http://p1362.bvimg.com/10465/dadb7710bab66b03.jpg',
							'http://p1362.bvimg.com/10465/9311eaf0f8f5998c.jpg',
							'http://p1362.bvimg.com/10465/b08a00e34fc03eb4.jpg',
							'http://p1362.bvimg.com/10465/0926d8cf12e38c14.jpg',
							'http://p1362.bvimg.com/10465/0926d8cf12e38c14.jpg'
						],
						type: '整租',
						description: '暗黑工业风Loft投影双床房/步行至解放碑洪崖洞/下楼即达地铁站/免费寄存行李',
						locationStreet: '解放碑洪崖洞',
						locationDetail: '怡景花城',
						label: ['南北', '近地铁', '精装修', '有电梯'],
						price: 4500,
						RoomInfo: '3',
						hourseAream: '58.70'
					},
					{
						index:1,
						images: [
							'http://p1362.bvimg.com/10465/d0f01d219711b656.jpg',
							'http://p1362.bvimg.com/10465/1b14be816d32cd9b.jpg',
							'http://p1362.bvimg.com/10465/fd08103b8d4128f2.jpg',
							'http://p1362.bvimg.com/10465/a22b2c814cbb96e6.jpg',
							'http://p1362.bvimg.com/10465/20d674b0f767f3d9.jpg'
						],
						type: '合租',
						description: '高层/高空江景/落地窗/180度全江景/洪崖洞步行5分钟',
						locationStreet: '崖街',
						locationDetail: '彼岸花园',
						label: ['可开发票', '提供接送', '自助入住'],
						price: 2300,
						RoomInfo: '1',
						hourseAream: '20.36'
					},
					{
						index:2,
						images: [
							'http://p1362.bvimg.com/10465/4a83cee2226f81b2.jpg',
							'http://p1362.bvimg.com/10465/3d4d4bbd0a403adf.jpg',
							'http://p1362.bvimg.com/10465/ce9781fc89074e8c.jpg',
							'http://p1362.bvimg.com/10465/ae096b7ed7379d8f.jpg',
							'http://p1362.bvimg.com/10465/53e77cccc3c830bc.jpg'
						],
						type: '整租',
						description: '低风险地区无需核酸-【路寓·香草】步行十分钟到洪崖洞,解放碑商圈,江景豪华大床房 A2',
						locationStreet: '解放碑洪崖洞',
						locationDetail: '怡景花城',
						label: ['南北', '近地铁', '精装修', '有电梯'],
						price: 3400,
						RoomInfo: '3',
						hourseAream: '47.36'
					},
					{
						index:3,
						images: [
							'http://p1362.bvimg.com/10465/65bebecfe84d37d1.jpg',
							'http://p1362.bvimg.com/10465/97bf88170c900f16.jpg',
							'http://p1362.bvimg.com/10465/fb4d64b59bdca475.jpg',
							'http://p1362.bvimg.com/10465/b999d3188e56977b.jpg',
							'http://p1362.bvimg.com/10465/756b9c4f8c848de1.jpg'
						],
						type: '整租',
						description: '低风险地区无需核酸-【路寓·香草】步行十分钟到洪崖洞,解放碑商圈,江景豪华大床房 A2',
						locationStreet: '解放碑洪崖洞',
						locationDetail: '怡景花城',
						label: ['景区', '近地铁', '拎包入住', '风景美'],
						price: 2800,
						RoomInfo: '2',
						hourseAream: '28.9'
					},
					{
						index:4,
						images: [
							'http://p1362.bvimg.com/10465/1e4b701092fd54fb.jpg',
							'http://p1362.bvimg.com/10465/97bf88170c900f16.jpg',
							'http://p1362.bvimg.com/10465/9583a1f5a6a5a926.jpg',
							'http://p1362.bvimg.com/10465/f420e08483bcc0f3.jpg',
							'http://p1362.bvimg.com/10465/d900d0e6c2396a8e.jpg'
						],
						type: '整租',
						description: '<100英寸超清无屏电视>解放碑洪崖洞地铁口后现代轻奢蓝大床影院LOFT2⑦',
						locationStreet: '解放碑洪崖洞',
						locationDetail: '怡景花城',
						label: ['投影仪', '近地铁', '可存行李', '四楼'],
						price: 3400,
						RoomInfo: '3',
						hourseAream: '40.86'
					},
					{
						
						index:5,
						images: [
							'http://p1362.bvimg.com/10465/2b98fad4a3460c42.jpg',
							'http://p1362.bvimg.com/10465/78e189463a1a85da.jpg',
							'http://p1362.bvimg.com/10465/1a41dcacf7fdd9b7.jpg',
							'http://p1362.bvimg.com/10465/bf240930e5936a24.jpg',
							'http://p1362.bvimg.com/10465/13e2c9ace6e3ddca.jpg'
						],
						type: '合租',
						description: '《一半 · 安迪晓屋》暗黑系日式禅意投影双床房/步行至解放碑/下楼即达地铁站洪崖洞/免费寄存行李',
						locationStreet: '解放碑洪崖洞',
						locationDetail: '怡景花城',
						label: ['向南', '超赞房东', '精装修', '有电梯'],
						price: 3800,
						RoomInfo: '3',
						hourseAream: '50.36'
					},
					{
						index:6,
						images: [
							'http://p1362.bvimg.com/10465/3e7370813864b03d.jpg',
							'http://p1362.bvimg.com/10465/fb3a590008ac9d37.jpg',
							'http://p1362.bvimg.com/10465/e8700774f5cf3dc1.jpg',
							'http://p1362.bvimg.com/10465/4085a4ed998bcb58.jpg',
							'http://p1362.bvimg.com/10465/3793f4d28e093137.jpg'
						],
						type: '整租',
						description: '【日暮】全屋消毒安心入住｜距七星岗轻轨站5分钟｜近解放碑 洪崖洞 长江索道 李子坝｜舒适居家一居',
						locationStreet: '解放碑洪崖洞',
						locationDetail: '怡景花城',
						label: ['夜晚美', '超赞风景', '风格独特', '安全'],
						price: 6700,
						RoomInfo: '4',
						hourseAream: '60.36'
					}
				]

			}
		},
		methods: {
			AreaPicker(e) {
				this.info.AreaIndex = e.detail.value
			},
			PricePicker(e) {
				this.info.PriceIndex = e.detail.value
			},
			handleToDetail(houseInfo) {
				let that = this;
				var houseInfo = JSON.stringify(houseInfo); // 这里转换成 字符串
				uni.navigateTo({
					url: '../rent_content/rent_content?houseInfo=' + houseInfo
				})
			}

		}
	}
</script>

<style lang="scss">
	@import '@/common/iconfont.css';

	.rent {
		display: flex;
		flex-direction: column;
	}

	.rent-top {
		padding: 20rpx 30rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);

		.rent-title {
			width: 100%;

			.rent-title-search {

				background: #eeefee;
				border-radius: 10rpx;

				.swiper {
					height: 70rpx;
					display: flex;
					align-items: center;
					justify-content: center;

					.rent-title-search-content {
						.iconfont {
							margin-right: 16rpx;
							font-size: 40rpx;
						}

						width: 100%;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}
			}

			.rent-title-function {
				display: flex;
				flex-direction: row;
				margin-top: 20rpx;

				.functionPart {
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;

					.functionPart-image {
						width: 130rpx;
						height: 130rpx;

					}
				}

			}
		}

		.rent-classify {
			// box-shadow: 0 0 4rpx rgba(0, 0, 0, 0.15);
			margin-top: 20rpx;
			width: 100%;
			display: flex;
			flex-direction: row;

			.vertical-line {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 2rpx;
				margin-top: 10rpx;
				height: 30rpx;
				background: #C6C7C6;
			}

			.rent-classify-Part {
				display: flex;
				align-items: center;
				justify-content: center;
				flex: 1;

				.uni-input {
					display: inline-block;
					font-size: 28rpx;
				}

				.icon-arrow-down-copy {
					margin-left: 16rpx;
					font-size: 24rpx;
				}
			}
		}

	}

	.rent-bottom {
		margin-top: 20rpx;
		height: 1100rpx;

		.houseInfo {
			margin-top: 10rpx;
			height: 260rpx;
			width: 100%;
			display: flex;
			flex-direction: row;

			.houseInfo-left {
				margin-left: 30rpx;
				width: 260rpx;
				height: 240rpx;
				border-radius: 14rpx;
				overflow: hidden;

				.houseInfo-left-image {
					width: 100%;
					height: 100%;
				}
			}

			.houseInfo-right {
				margin: 0 28rpx;
				width: 400rpx;


				.houseInfo-right-type {
					color: #343534;
					margin: 6rpx 0;
					width: 100%;
					display: -webkit-box;
					word-break: break-all;
					text-overflow: ellipsis;
					font-size: 32rpx; //自适应字体
					overflow: hidden;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2; //设置 需要显示的行数
				}

				.houseInfo-right-location {
					color: #7e7f7e;
					margin: 6rpx 0;
					font-size: 28rpx;
					width: 100%;
					overflow: hidden; //超出一行文字自动隐藏
					text-overflow: ellipsis; //文字隐藏后添加省略号
					white-space: nowrap; //强制不换行
				}

				.houseInfo-right-label {
					display: flex;
					overflow: hidden; //超出一行文字自动隐藏
					text-overflow: ellipsis; //文字隐藏后添加省略号
					white-space: nowrap; //强制不换行

					.houseInfo-label {
						display: flex;
						justify-content: center;
						align-items: center;
						margin: 6rpx 10rpx;
						margin-left: 0;
						padding: 0 2rpx;
						font-size: 26rpx;
						color: #0c8b15;
						border: 2rpx solid #67a636;
						border-radius: 8rpx;
					}
				}

				.houseInfo-right-info_Based {
					position: relative;
					margin-top: 6rpx;
					color: #8b8c8b;
					font-size: 26rpx;

				}
			}
		}
	}


	#item1,
	#item2,
	#item3 {
		width: 100%;
		height: 100%;
		line-height: 70rpx;
		display: flex;
		align-items: center;
		vertical-align: center;
	}

	.houseInfo-right-info_Based text:nth-child(1) {
		font-size: 36rpx;
		color: #ee2c2c;
		font-weight: 600;
	}

	.houseInfo-right-info_Based text:nth-child(2) {
		margin-left: 6rpx;
		font-size: 30rpx;
		color: #f35a3f;
	}

	.houseInfo-right-info_Based text:nth-child(3) {
		margin-left: 14rpx;
	}

	.houseInfo-right-info_Based text:nth-child(4) {
		margin-left: 6rpx;
	}

	.houseInfo-right-info_Based text:nth-child(5) {
		margin-left: 6rpx;
	}

	.houseInfo-right-info_Based text:nth-child(6) {
		font-size: 18rpx;
		position: absolute;
		top: 4rpx;
	}
	.rent-classify-Location{
		font-size: 28rpx;
	}
	.functionPart-description{
		font-size: 28rpx;
		color: #5d5e5d;
	}
</style>
