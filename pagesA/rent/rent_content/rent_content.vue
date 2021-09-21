<!-- 房源详情 -->
<template>
	<view>
		<view class="rent">
			<view class="rentTop">
				<swiper class="swiper" indicator-dots="true" indicator-color="#9d9d9d" indicator-active-color="#FFFFFF"
					autoplay="true" circular="true" interval="3000" duration="500" previous-margin="80rpx"
					next-margin="80rpx" :current="swiperCurrent" @change="swiperChange">
					<swiper-item v-for="(Item , Index) in houseInfo.images" :key="Index">
						<view class="rentTop-item">
							<image class="rentTop-image" :src="Item" mode="" :class="Index==swiperCurrent?'active':''">
							</image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<scroll-view scroll-y="true" class="rent-center">
				<view class="rent-description">
					<view class="rent-desc-location">
						<text> {{houseInfo.locationStreet}}</text>
						<text>·</text>
						<text> {{houseInfo.locationDetail}}</text>
						<text>| {{houseInfo.type}}</text>
						<text>| 距我 {{houseInfo.distance}}km</text>
					</view>
					<view class="rent-desc-des">
						<text class="rent-desc-des-text">{{houseInfo.description}}</text>
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
							<image class="previewItem-Image" src="http://p1362.bvimg.com/10465/b941d24f1fa6aaa0.png"
								mode=""></image>
							1 间客厅
						</view>
						<view class="previewItem">
							<image class="previewItem-Image" src="http://p1362.bvimg.com/10465/68d499ac8241be3b.png"
								mode=""></image>
							{{houseInfo.RoomInfo}} 间卧室
						</view>
						<view class="previewItem">
							<image class="previewItem-Image" src="http://p1362.bvimg.com/10465/072d265e15481414.png"
								mode=""></image>
							{{houseInfo.RoomInfo}} 张床
						</view>
						<view class="previewItem">
							<image class="previewItem-Image" src="http://p1362.bvimg.com/10465/ee2089ba216841af.png"
								mode=""></image>
							{{houseInfo.RoomInfo-1}} 间卫生间
						</view>
						<view class="previewItem">
							<image class="previewItem-Image" src="http://p1362.bvimg.com/10465/65a8df1a24a4d2b1.png"
								mode=""></image>
							{{houseInfo.RoomInfo*2-1}} 位房客
						</view>
					</view>
				</view>
				<view class="rent-hostWords">
					<view class="rent-hostWords-title">
						房源介绍
					</view>
					<view class="rent-hostWords-content">
						<uni-collapse>
							<uni-collapse-item title="这是一套精致轻奢的现代装修风格为主的温馨小屋，在这里享受高速WIFI带给您的一路畅通无阻精致">
								<view class="content">
									<view class="rent-hostWords-content-text"
										v-for="(item,index) in additionalInfo.description" :key="index">
										{{item}}
									</view>
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
							<image class="rent-hostOwner-image" :src="additionalInfo.hostImage[houseInfo.index]"
								mode="">
							</image>
						</view>
						<view class="rent-hostOwner-top-right">
							<view class="rent-hostOwner-top-right-left">
								<view class="rent-hostOwner-top-right-top">
									<view class="rent-hostOwner-top-right-nicekname">
										{{additionalInfo.hostNickname[houseInfo.index]}}
									</view>
								</view>
								<view class="rent-hostOwner-top-right-bottom">
									已核验身份
								</view>
							</view>
							<view class="rent-hostOwner-top-right-right">
								<view class="contact-left">
									<image class="contact-image" src="http://p1362.bvimg.com/10465/65a8df1a24a4d2b1.png"
										mode=""></image>
								</view>
								<view class="contact-right">
									联系房东
								</view>
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
				<view class="rent-infrastructure">
					<view class="rent-infrastructure-title">
						设施服务
					</view>
					<view class="rent-infrastructure-part">
						<view class="rent-infrastructure-part-left">
							<view class="left-icon">
								<text class="iconfont icon-ruzhu"></text>
							</view>
							<view class="left-text">
								入住服务
							</view>
						</view>
						<view class="rent-infrastructure-part-right">
							<view class="top">
								<view class="top-left">
									<text class="iconfont icon-dui"></text>
									<text>电梯</text>
								</view>
								<view class="top-right">
									<text class="iconfont icon-dui"></text>
									<text>可预订长期住宿</text>
								</view>
							</view>
							<view class="bottom">
								<view class="bottom-left">
									<text class="iconfont icon-dui"></text>
									<text>独立入口</text>
								</view>
								<view class="bottom-right">
									<text class="iconfont icon-dui"></text>
									<text>付费停车位</text>
								</view>
							</view>
						</view>

					</view>
					<view class="cross-line"></view>
					<view class="rent-infrastructure-part">
						<view class="rent-infrastructure-part-left">
							<view class="left-icon">
								<text class="iconfont icon-WIFI"></text>
							</view>
							<view class="left-text">
								基础设施
							</view>
						</view>
						<view class="rent-infrastructure-part-right">
							<view class="top">
								<view class="top-left">
									<text class="iconfont icon-dui"></text>
									<text>空调</text>
								</view>
								<view class="top-right">
									<text class="iconfont icon-dui"></text>
									<text>洗衣机</text>
								</view>
							</view>
							<view class="bottom">
								<view class="bottom-left">
									<text class="iconfont icon-dui"></text>
									<text>无线网络</text>
								</view>
								<view class="bottom-right">
									<text class="iconfont icon-dui"></text>
									<text>暖气</text>
								</view>
							</view>
						</view>
					</view>
					<view class="cross-line"></view>
					<view class="rent-infrastructure-part">
						<view class="rent-infrastructure-part-left">
							<view class="left-icon">
								<text class="iconfont icon-yugang"></text>
							</view>
							<view class="left-text">
								洗浴设施
							</view>
						</view>
						<view class="rent-infrastructure-part-right">
							<view class="top">
								<view class="top-left">
									<text class="iconfont icon-dui"></text>
									<text>洗发水</text>
								</view>
								<view class="top-right">
									<text class="iconfont icon-dui"></text>
									<text>吹风机</text>
								</view>
							</view>
							<view class="bottom">
								<view class="bottom-left">
									<text class="iconfont icon-dui"></text>
									<text>热水</text>
								</view>
								<view class="bottom-right">
									<text class="iconfont icon-dui"></text>
									<text>沐浴露</text>
								</view>
							</view>
						</view>

					</view>
					<view class="cross-line"></view>
					<view class="rent-infrastructure-part">
						<view class="rent-infrastructure-part-left">
							<view class="left-icon">
								<text class="iconfont icon-chufang"></text>
							</view>
							<view class="left-text">
								厨房用品
							</view>
						</view>
						<view class="rent-infrastructure-part-right">
							<view class="top">
								<view class="top-left">
									<text class="iconfont icon-dui"></text>
									<text>冰箱</text>
								</view>
								<view class="top-right">
									<text class="iconfont icon-dui"></text>
									<text>热水壶</text>
								</view>
							</view>
						</view>

					</view>
					<view class="cross-line"></view>
				</view>
				<view class="rent-readMe">
					<view class="rent-readMe-title">
						订房须知
					</view>
					<view class="rent-readMe-part" v-for="(item,index) in additionalInfo.readMe" :key="index">
						<view class="rent-readMe-part-left">
							{{item.title}}
						</view>
						<view class="rent-readMe-part-right">
							<view class="rent-readMe-part-right-text" v-for="(textItem,indexIndex) in item.content"
								:key="indexIndex">
								{{textItem}}
							</view>
						</view>

					</view>
				</view>
			</scroll-view>
			<view class="rent-bottom">
				<view class="rent-bottom-price">
					<view class="rent-bottom-price-top">
						<text>￥{{houseInfo.price}}</text>
						<text style="">￥{{houseInfo.price+375}}</text>
						<text> /月</text>
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
				<view class="rent-bottom-contact" @click=" toRentOrder()">预约看房</view>
				<view class="rent-bottom-contact" @click="DueToHousing()">预定房源</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperCurrent: 0,
				houseInfo: {},
				additionalInfo: {
					label1: '超赞房东',
					label2: '5.0分 · 11条评论',
					description: [
						"Hello，你所浏览的房源是一套一室一厨一卫的精装公寓我们有一张1.8x2m大床，可供2人居住",
						"这是一套以轻奢的现代装修风格为主的温馨小屋",
						"在这里，享受高速WIFI带给您的一路畅通无阻。",
						"房源地理位置非常优越：",
						"我们的房子紧靠「人民北路」地铁站，",
						"离「金牛万达商圈、文殊院景区」步行10分钟内，",
						"离「春熙路」地铁4个站，",
						"离「火车北站」地铁1个站，",
						"离「机场专线」步行两分钟，",
						"可方便快捷的到达各个景点。",
						"房间设备：",
						"『高速WIFI、高清投影、空调、冰箱、洗衣机、电梯、电热水器、门禁、电热水壶、沙发、衣架』",
						"卫浴配置：",
						"『手纸、淋浴、盥洗池、一次性牙刷、毛巾、浴巾、电吹风、洗发水、沐浴露、漱口杯、凉拖』",
						"房门配有智能密码锁，方便您进出；",
						"苛刻的卫生标准是我们一直以来所强调的，在这里，我们会有专业的保洁阿姨为房间提供【清洁】及【消毒】，您可以安心入住。",
						"我们的房子麻雀虽小五脏俱全，希望能让您感受到家的温暖和舒适。"

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
					],
					readMe: [{
						title: '房屋守则',
						content: [
							'不允许举办派对和活动', '不允许携带宠物'
						]
					}, {
						title: '取消政策',
						content: [
							'添加入住退房日期后，可查看取消政策详情'
						]
					}, {
						title: '安全须知',
						content: [
							'在新冠肺炎疫情期间，我们要求所有房东和房客查看并遵守爱彼迎的社交距离准则和其他新冠肺炎疫情相关准则。',
							'未报告装有一氧化碳报警器', '已配备烟雾报警器'

						]
					}, {
						title: '安全预订',
						content: [
							'为了保护您的账号隐私及付款安全，请勿妄信第三方预订代理提供的折扣或礼金券，也不要在爱彼迎网站或App之外汇款或沟通。 查看详情'
						]
					}, {
						title: '发票须知',
						content: [
							'房东将自行提供发票（非爱彼迎提供的发票），请让房东开具发票。'
						]
					}]
				},
			}
		},
		methods: {
			// makeAnAppointment() {
			// 	uni.makePhoneCall({
			// 		phoneNumber: '0571-88628854' //仅为示例
			// 	});
			// },
			toRentOrder() {
				let _this = this;
				var houseInfo = JSON.stringify(_this.houseInfo); // 这里转换成 字符串
				uni.navigateTo({
					url: '../rentOrder/rentOrder?houseInfo=' + houseInfo
				})
			},
			DueToHousing() {
				uni.navigateTo({
					url: '../phoneRegistration/phoneRegistration'
				})
			},
			swiperChange(e) {
				this.swiperCurrent = e.detail.current;
				// console.log(this.swiperCurrent)
			}

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
		height: 350rpx;
		margin-bottom: 10rpx;

		.swiper {
			width: 100%;
			height: 100%;
		}

		.rentTop-item {
			margin: 0 30rpx;

			.rentTop-image {
				position: absolute;
				margin-top: 30upx;
				width: 100%;
				height: 80%;
				z-index: 5;
				opacity: 0.7;
				top: 5%;
				// transform: translateY(-50%);
				box-shadow: 0px 4upx 15upx 0px rgba(153, 153, 153, 0.24);

			}

			.active {
				background: #FFFFFF;
				opacity: 1;
				z-index: 10;
				height: 95%;
				top: -3%;
				transition: all .1s ease-in 0s;
				transform: translateY(0);
			}
		}

	}

	.rent-center {
		height: 1040rpx;

		.rent-description,
		.rent-ad,
		.rent-preview,
		.rent-hostWords {
			background: #FFFFFF;
			margin: 14rpx 0;
			padding: 10rpx 20rpx;

			.rent-desc-location {
				margin: 10rpx 0;
				font-size: 28rpx;
				color: #8E8E9B;
			}

			.rent-desc-des {
				.rent-desc-des-text {
					line-height: 54rpx;
					font-size: 34rpx;
					font-weight: 500;
				}
			}

			.rent-desc-label-top,
			.rent-desc-label-bottom {
				margin-top: 14rpx;
				display: flex;
				align-items: center;

				.rent-desc-text {
					display: flex;
					justify-content: center;
					align-items: center;
					margin: 4rpx 12rpx;
					padding: 0rpx 6rpx;
					margin-left: 4rpx;
					font-size: 26rpx;
					color: #A1BF56;
					border: 2rpx solid #A1BF56;
					border-radius: 10rpx;
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

	}

	.rent-desc-location text:nth-child(2) {
		margin: 0 6rpx;
	}

	.rent-desc-location text:nth-child(3) {
		margin: 0 6rpx;
	}

	.rent-desc-location text:nth-child(4) {
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
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				color: #404140;
				font-size: 26rpx;
			}

			.previewItem-Image {
				height: 60rpx;
				width: 60rpx;
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
				display: flex;
				flex: 1;
				position: relative;

				.rent-hostOwner-top-right-left {

					.rent-hostOwner-top-right-top {
						display: flex;

						.rent-hostOwner-top-right-nicekname {
							font-size: 34rpx;
						}
					}

					.rent-hostOwner-top-right-bottom {
						margin-top: 10rpx;
						font-size: 26rpx;
					}
				}

				.rent-hostOwner-top-right-right {
					position: absolute;
					right: 0;
					top: 4rpx;
					border: 2rpx solid #93A663;
					border-radius: 10rpx;
					padding: 4rpx 10rpx;
					display: flex;
					align-items: center;
					justify-content: center;

					.contact-left {
						width: 50rpx;
						height: 60rpx;

						.contact-image {
							color: #93A663;
							height: 100%;
							width: 100%;
						}
					}

					.contact-right {
						margin-left: 10rpx;
						font-size: 30rpx;
						color: #93A663;
					}
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
					width: 70rpx;
					height: 70rpx;
				}
			}
		}

		.rent-hostOwner-contact {
			font-size: 30rpx;
			color: #4CD964;
			margin: 20rpx;
		}
	}

	.rent-infrastructure {
		margin-top: 20rpx;
		background: #FFFFFF;
		margin: 4rpx 0;
		padding: 10rpx 10rpx;
		// margin-bottom: 140rpx;

		.rent-infrastructure-title {
			margin: 20rpx;
			font-size: 36rpx;
			font-weight: bold;
		}

		.rent-infrastructure-part {
			margin: 20rpx;
			display: flex;

			.rent-infrastructure-part-left {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.left-icon {
					width: 60rpx;
					height: 60rpx;
					display: flex;
					justify-content: center;
					align-items: center;

					.icon-yugang {
						left: 0;
						font-size: 60rpx;
						color: #53b144;
					}

				}

				.left-text {
					margin-top: 10rpx;
					color: #000000;
				}
			}

			.rent-infrastructure-part-right {
				display: flex;
				flex: 1;
				margin-top: 10rpx;
				margin-left: 50rpx;
				width: 490rpx;

				.top {
					flex: 1;

					.top-left {}

					.top-right {
						margin-top: 20rpx;
					}

				}

				.bottom {
					flex: 1;

					.bottom-right {
						margin-top: 20rpx;
					}
				}
			}
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
					color: #e7b02e;
					padding: 4rpx;
					font-size: 26rpx;
					margin: 10rpx 0;
					background: #FEEFD1;
				}

				.rent-bottom-price-bottom-detail {
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
		color: #f48b01;
	}

	.rent-bottom-price-top text:nth-child(3) {
		font-size: 26rpx;
		color: #FF9502;
	}

	.rent-bottom-price-top text:nth-child(2) {
		text-decoration: line-through;
		font-size: 26rpx;
		color: #FF9502;
	}

	.rent-bottom-contact {
		margin-top: 20rpx;
		margin-left: 20rpx;
		font-size: 36rpx;
		font-weight: bold;
		color: white;
		background: #35cc27;
		border-radius: 6rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 74rpx;
		width: 180rpx;
	}

	.icon-dui {
		margin-right: 8rpx;
		color: #30b94b;
	}

	.cross-line {
		width: 100%;
		height: 2rpx;
		background: #f3f4f3;
	}

	.icon-ruzhu,
	.icon-chufang,
	.icon-WIFI {
		font-size: 60rpx;
		color: #53b144;
	}

	.rent-readMe {
		margin-top: 20rpx;
		background: #FFFFFF;
		margin: 4rpx 0;
		padding: 10rpx 10rpx;
	}

	.rent-readMe-title {
		margin: 20rpx;
		font-size: 36rpx;
		font-weight: bold;
	}

	.rent-readMe-part {
		display: flex;
		margin: 20rpx;
	}

	.rent-readMe-part-left {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
		// font-weight: bold;
		width: 120rpx;

	}

	.rent-readMe-part-right {
		margin: 10rpx 20rpx 10rpx 40rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1;
	}

	.rent-readMe-part-right-text {
		margin-top: 10rpx;
	}
</style>
