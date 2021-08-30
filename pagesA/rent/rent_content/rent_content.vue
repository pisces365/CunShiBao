<!-- 房源详情 -->
<template>
	<view>
		<view class="rent">
			<view class="rentTop">
				<swiper class="swiper" indicator-dots="true" indicator-color="#9d9d9d" indicator-active-color="#FFFFFF"
					autoplay="true" circular="true" interval="3000" duration="500">
					<swiper-item v-for="(Item , Index) in houseInfo.images" :key="Index">
						<image class="rentTop-image" :src="Item" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="rent-description">
				<view class="rent-desc-location">
					<text> {{houseInfo.locationStreet}}</text>
					<text>·</text>
					<text> {{houseInfo.locationDetail}}</text>
				</view>
				<view class="rent-desc-des">
					<text class="rent-desc-des-text">{{houseInfo.description}}</text>
				</view>
				<view class="rent-desc-label-top">
					<view class="rent-desc-textFixed1">
						{{additionalInfo.label1}}
					</view>
					<view class="rent-desc-textFixed2">
						{{additionalInfo.label2}}
					</view>
				</view>
				<view class="rent-desc-label-bottom">
					<view class="rent-desc-text" v-for="(item,index) in houseInfo.label" :key="index">
						{{item}}
					</view>
				</view>

			</view>
			<view class="rent-ad">
				<navigator url="" hover-stay-time="300" class="rent-ad-content">
					<view class="rent-ad-left">
						<text>现在预定，立享夏季特惠8折</text>
						<text>夏季特惠机不可失，马上预定 8月30日-8月31日的住宿，锁定限时好价</text>
					</view>
					<view class="rent-ad-right">
						<image class="rent-ad-right-image" src="http://p1362.bvimg.com/10465/d1d1b66036068f27.png"
							mode=""></image>
					</view>
				</navigator>
			</view>
			<view class="rent-preview">
				<view class="rent-preview-title">
					房源预览
				</view>
				<view class="rent-preview-center">
					<view class="previewItem">
						<image class="previewItem-Image" src="http://p1362.bvimg.com/10465/ea3505b3dc95802f.png"
							mode=""></image>
						{{houseInfo.RoomInfo}}间卧室
					</view>
					<view class="previewItem">
						<image class="previewItem-Image" src="http://p1362.bvimg.com/10465/ee2089ba216841af.png"
							mode=""></image>
						{{houseInfo.RoomInfo}}张床
					</view>
					<view class="previewItem">
						<image class="previewItem-Image" src="http://p1362.bvimg.com/10465/7166f07443a73d00.png"
							mode=""></image>
						{{houseInfo.RoomInfo*2}}个房客
					</view>
				</view>
			</view>
			<view class="rent-hostWords">
				<view class="rent-hostWords-title">
					房源描述
				</view>
				<view class="rent-hostWords-content">
					<uni-collapse>
						<uni-collapse-item title="致可爱的你:    雾Woo在用心做好每一个房间，大到地面吊顶设计，小到灯....">
							<view class="content">
								<text class="rent-hostWords-content-text">{{additionalInfo.description}}</text>
							</view>
						</uni-collapse-item>
					</uni-collapse>
				</view>
			</view>
			<view class="rent-hostOwner">
				<view class="rent-hostOwner-title">
					房东介绍
				</view>
				<view class="rent-hostOwner-top">
					<view class="rent-hostOwner-top-image">
						<image class="rent-hostOwner-image" :src="additionalInfo.hostImage[houseInfo.index]" mode=""></image>
					</view>
					<view class="rent-hostOwner-top-right">
						<view class="rent-hostOwner-top-right-top">
							<view class="rent-hostOwner-top-right-nicekname">
								{{additionalInfo.hostNickname[houseInfo.index]}}
							</view>
							<view class="rent-hostOwner-top-right-evaluate">
								超赞房东
							</view>
						</view>
						<view class="rent-hostOwner-top-right-bottom">
							已核验身份
						</view>
					</view>
				</view>
				<view class="rent-hostOwner-center">
					<view class="rent-hostOwner-center-text">
						超赞房东经验丰富、评分很高，致力于为房客提供优质的住宿体验。
					</view>
					<view class="rent-hostOwner-center-right">
						<image class="rent-hostOwner-center-image"
							src="http://p1362.bvimg.com/10465/5f61d0c830620373.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="rent-bottom">
				<view class="rent-bottom-price">
					<view class="rent-bottom-price-top">
						<text>￥{{houseInfo.price}}</text>
						<text style="">￥{{houseInfo.price+375}}</text>
						<text> /月</text>
					</view>
					<view class="star">
						⭐⭐⭐⭐⭐ 11
					</view>
					<view class="rent-bottom-price-bottom">
						<view class="rent-bottom-price-bottom-jianmian">
							已减 ￥375
						</view>
						<view class="rent-bottom-price-bottom-detail">
							价格明细
						</view>
					</view>
				</view>
				<view class="rent-bottom-contact" @click="callHost()">预约看房</view>
				<view class="rent-bottom-contact" @click="callHost()">联系房东</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				houseInfo: {},
				additionalInfo: {
					label1: '超赞房东',
					label2: '5.0分 · 11条评论',
					description: [
						"致可爱的你:    雾Woo在用心做好每一个房间，大到地面吊顶设计，小到灯光亮度调节，我们希望能够尽我们的努力为可爱的你带来一个相对舒适的居住环境，能够为你的重庆之旅增添一分色彩。我们欢迎你居住过后能为我们在评论区留下你真实的居住体验和宝贵的意见及建议，我们也希望能通过大家的体验让我们的房间和服务不断地优化完善。        祝可爱的你重庆之旅愉快！位置:房屋位于重庆市中心位置，出行特别方便距离解放碑步行街1公里距离网红洪崖洞景区" +
						"1.4公里距离网红李子坝轻轨站3公里（轻轨6站直达）距离长江索道1.3公里距离十八梯传统风貌区100米距离山城巷传统风貌区100米距离轻轨1.2号线较场口站200米距离公交站50米周边有各大商场，银行，娱乐场所。房屋楼下有各种重庆美食，火锅，小面，烤鱼，江湖菜配置:房屋床单为每客每日更换，干净整洁，均为9成新以上特密床单屋内配置100英寸1080P全高清GIMI极米无屏电视，搭载Harman/Kardon哈曼卡顿原装音箱，为你带来卧室里的影院和音乐会现场感受"
					],
					hostNickname: [
						'Lemon',
						'游觅民宿',
						'莫雨民宿',
						'亦非',
						'刘浩',
						'管家',
						'LittleLion',
					],
					hostImage: [
						'http://p1362.bvimg.com/10465/f820643ce376c33c.jpg',
						'http://p1362.bvimg.com/10465/33480984caf9342e.jpg',
						'http://p1362.bvimg.com/10465/4dbcd200d3aa2d00.jpg',
						'http://p1362.bvimg.com/10465/6de29a054bb84057.jpg',
						'http://p1362.bvimg.com/10465/a0d047f5de7fceef.jpg',
						'http://p1362.bvimg.com/10465/69f88aa3c11fcbee.jpg',
						'http://p1362.bvimg.com/10465/b33328f09b1f4618.jpg'
					]
				},
			}
		},
		methods: {
			callHost() {
				uni.makePhoneCall({
					phoneNumber: '17858407426' //仅为示例
				});
			},
		},
		onLoad(options) {
			let that = this;
			var data = JSON.parse(options.houseInfo); // 字符串转对象
			that.houseInfo = data;
			console.log(that.houseInfo)
		},

	}
</script>

<style lang="scss">
	@import '@/common/iconfont.css';
	@import '@/common/uni-nvue.scss';

	page {
		background: #f5f4f8;
	}

	.rentTop {
		width: 100%;
		height: 374rpx;

		.swiper {
			width: 100%;
			height: 100%;
		}

		.rentTop-image {
			width: 100%;
			height: 100%;
		}
	}

	.rent-description,
	.rent-ad,
	.rent-preview,
	.rent-hostWords {
		background: #FFFFFF;
		margin: 4rpx 0;
		padding: 10rpx 20rpx;

		.rent-desc-location {
			font-size: 28rpx;
			color: #aa00ff;
		}

		.rent-desc-des {
			.rent-desc-des-text {
				line-height: 58rpx;
				font-size: 38rpx;
				font-weight: 500;
			}
		}

		.rent-desc-label-top,
		.rent-desc-label-bottom {
			margin-top: 14rpx;
			display: flex;
			align-items: center;

			.rent-desc-text,
			.rent-desc-textFixed1,
			.rent-desc-textFixed2 {
				font-size: 24rpx;
				padding: 10rpx 20rpx;
				margin: 0 12rpx;
				background: #e3e3e3;
				border-radius: 6rpx;
			}

			.rent-desc-textFixed1 {
				background: #EAF8E8;
				color: #416426;
			}

			.rent-desc-textFixed2 {
				background: #F5F2E6;
				color: #7a6d4b;
			}
		}
	}

	.rent-desc-location text:nth-child(2) {
		margin: 0 6rpx;
	}

	.rent-ad-content {
		margin: 40rpx 10rpx;
		display: flex;
		font-size: 30rpx;

		.rent-ad-left {
			width: 640rpx;
		}

		.rent-ad-right {
			width: 90rpx;
			// height: 90rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.rent-ad-right-image {
			width: 100%;
			height: 90rpx
		}
	}

	.rent-ad-left text:nth-child(1) {
		font-weight: bold;
		margin-right: 10rpx;
	}

	.rent-preview {
		.rent-preview-title {
			margin: 20rpx;
			font-size: 36rpx;
			font-weight: bold;
		}

		.rent-preview-center {
			margin: 20rpx;
			display: flex;

			.previewItem {
				margin: 20rpx 30rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				color: #404140;
			}

			.previewItem-Image {
				height: 70rpx;
				width: 70rpx;
				margin-bottom: 10rpx;
			}
		}
	}

	.rent-hostWords {
		.rent-hostWords-title {
			margin: 20rpx;
			font-size: 36rpx;
			font-weight: bold;
		}

		.rent-hostWords-content {
			margin-top: 20rpx;
			margin: 0 20rpx;
		}

		.rent-hostWords-content-text {
			line-height: 40rpx;
		}
	}

	.rent-hostOwner {
		background: #FFFFFF;
		margin: 4rpx 0;
		padding: 10rpx 20rpx;

		.rent-hostOwner-title {
			margin: 20rpx;
			font-size: 36rpx;
			font-weight: bold;
		}

		.rent-hostOwner-top {
			margin: 20rpx;
			display: flex;

			.rent-hostOwner-top-image {
				width: 100rpx;
				// height: 80rpx;
				overflow: hidden;
				display: flex;
				justify-content: center;
				align-items: center;

				.rent-hostOwner-image {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50rpx;
				}
			}

			.rent-hostOwner-top-right {
				margin: 30rpx 20rpx;

				.rent-hostOwner-top-right-top {
					display: flex;

					.rent-hostOwner-top-right-nicekname {
						font-size: 34rpx;
					}

					.rent-hostOwner-top-right-evaluate {
						margin-left: 20rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						padding: 6rpx;
						background: #B14900;
						color: white;
						font-size: 20rpx;
						font-weight: bold;
						border-radius: 10rpx;
					}
				}

				.rent-hostOwner-top-right-bottom {
					margin-top: 10rpx;
					font-size: 26rpx;
				}
			}
		}

		.rent-hostOwner-center {
			margin: 0 20rpx;
			color: #707170;
			font-size: 30rpx;
			display: flex;

			.rent-hostOwner-center-text {
				width: 600rpx;
				display: flex;
				align-items: center;
			}

			.rent-hostOwner-center-right {
				width: 80rpx;
				margin-left: 20rpx;

				.rent-hostOwner-center-image {
					width: 80rpx;
					height: 80rpx;
				}
			}
		}

		.rent-hostOwner-contact {
			font-size: 30rpx;
			color: #4CD964;
			margin: 20rpx;
		}
	}

	.rent-bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		height: 120rpx;
		background: white;
		width: 100vw;
		padding: 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;

		.rent-bottom-price {
			.rent-bottom-price-top {}

			.rent-bottom-price-bottom {
				display: flex;

				.rent-bottom-price-bottom-jianmian {
					color: #d60000;
					padding: 4rpx;
					font-size: 26rpx;
					margin: 10rpx 0;
					background: rgba(202, 153, 153, 0.2);
				}
				.rent-bottom-price-bottom-detail{
					padding: 4rpx;
					font-size: 26rpx;
					margin: 10rpx 0;
					color: #1b6461;
				}
			}
		}
	}

	.rent-bottom-price-top text:nth-child(1) {
		font-weight: bold;
	}

	.rent-bottom-price-top text:nth-child(2) {
		text-decoration: line-through;
		font-size: 26rpx;
	}
	.rent-bottom-contact{
		margin-left: 20rpx;
		font-size: 38rpx;
		font-weight: bold;
		color: white;
		background: #36db2a;
		border-radius: 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 90rpx;
		width: 200rpx;
	}
</style>
