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
							<image class="rentTop-image" :src="Item" mode="aspectFill" :class="Index==swiperCurrent?'active':''">
							</image>
						</view>

					</swiper-item>
				</swiper>
			</view>
			<!-- <scroll-view scroll-y="true" class="rent-center"> -->
				<view class="rent-description">
					<view class="" style="display: flex; float: right; margin-top: 10rpx; width: 260rpx;">
						<view class="g-image" style="flex:2;">
							<image class="one-image" src="https://app-file.beitaichufang.com/img/H5/web/banner/banner21.jpg" mode="aspectFill"></image>
						</view>
						<view class="" style="flex:3; font-size: 28rpx; vertical-align: middle;">
							<view class="" style="font-size: 28rpx;">
								马晓峰
							</view>
							<view class="" style="font-size: 24rpx; margin-top: 10rpx; color: #A6A6A6;">
								发布于杭州
							</view>
						</view>
					</view>
					<view>
						<view class="" style="margin-bottom: 10rpx;">
							<text class="price-now">￥{{goodsInfo.price_now}}</text>
							<text class="price-before">￥{{goodsInfo.price_before}}</text>
							<text class="discount">已减￥{{goodsInfo.discount}}</text>
						</view>
						<view class="">
							<text class="goods-name">{{goodsInfo.name}}</text><br>
							<text class="brand-and-condition" style="margin-left: 0 !important;">{{goodsInfo.condition}}</text>
							<text class="brand-and-condition">|</text>
							<text class="brand-and-condition">{{goodsInfo.brand}}</text>
						</view>
					</view>
					<view class="rent-desc-label-bottom">
						<view class="rent-desc-text" v-for="(item,index) in houseInfo.label" :key="index">
							{{item}}
						</view>
					</view>

				</view>
				
				<view class="rent-readMe">
					<view class="rent-readMe-title">
						商品介绍
					</view>
					<view class="introduce-to-goods">
						<view class="text">
							-足力健老人鞋男鞋节气休闲鞋爸爸健步鞋中老年耐磨休闲运动鞋
						</view>
						<view class="text">
							-黑色（男款） 42
						</view>
					</view>
				</view>
			<!-- </scroll-view> -->
			<view class="bottom-bar">
				<view style="height: 0rpx;">
					
				</view>
				<view class="release-button">
					<view class="operation">
						<button>评论</button>
						<button v-if="!isLike" @click="like">收藏</button>
						<button v-if="isLike" @click="like">已收藏</button>
						<button open-type="share">分享</button>
					</view>
					<button class="r-button2" @click="toVote">我要购买</button>
				</view>	
				<!-- <view style="height: 30rpx;">
					
				</view> -->
			</view>
		</view>

	</view>
</template>

<script>
	import {goodsInfoItems} from "@/common/Market.js"
	export default {
		data() {
			return {
				id:0,
				isLike:false,
				goodsInfo:
					{
						img:"http://p1362.bvimg.com/10465/007027ee5b250fa6.jpg",
						name:"HLA海澜之家毛衣",
						condition:"长袖 标准型",
						brand:"海澜之家",
						price_now:"139",
						price_before:"150",
						discount:"11",
					},
				share:{
				    title:'二手商品详情',
				    path:'/pagesMarket/secondHandDetails/secondHandDetails',
				    imageUrl:'',
				    desc:'',
				    content:''
				},
				swiperCurrent: 0,
				houseInfo: {
						index: 0,
						images: [
							'http://p1362.bvimg.com/10465/dadb7710bab66b03.jpg',
							'http://p1362.bvimg.com/10465/9311eaf0f8f5998c.jpg',
							'http://p1362.bvimg.com/10465/b08a00e34fc03eb4.jpg',
							'http://p1362.bvimg.com/10465/0926d8cf12e38c14.jpg',
							'http://p1362.bvimg.com/10465/0926d8cf12e38c14.jpg'
						],
						type: '整租',
						description: '暗黑工业风Loft投影双床房 / 步行至解放碑洪崖洞 / 下楼即达地铁站 / 免费寄存行李',
						locationStreet: '解放碑洪崖洞',
						locationDetail: '怡景花城',
						label: ['轻薄', '软弹', '透气', '防滑'],
						price: 4500,
						RoomInfo: '3',
						hourseAream: '58.70',
						distance:'2.4'
					},
			}
		},
		
		onShareAppMessage(res) {
		        return {
		            title:this.share.title,
		            path:this.share.path,
		            imageUrl:this.share.imageUrl,
		            desc:this.share.desc,
		            content:this.share.content,
		            success(res){
		                uni.showToast({
		                    title:'分享成功'
		                })
		            },
		            fail(res){
		                uni.showToast({
		                    title:'分享失败',
		                    icon:'none'
		                })
		            }
		        }
		    },
		methods: {
			like() {
				if(this.isLike == false)
				{
					this.isLike = true;
					let goods_list = uni.getStorageSync('market_goods');
					goods_list += ","+this.id;
					uni.setStorageSync('market_goods',goods_list);
					console.log(goods_list);
				}
				else
				{
					this.isLike = false;
					let goods_list = uni.getStorageSync('market_goods');
					let goods_array = goods_list.split(",");
					for(var i=0;i<goods_array.length;++i)
					{
						if(this.id != goods_array[i])
						{
							
						}
						else
						{
							goods_list = goods_list.replace(","+this.id, "")
							break;
						}
					}
					uni.setStorageSync('market_goods',goods_list);
					console.log(goods_list);
				}
			},
			makeAnAppointment() {
				uni.makePhoneCall({
					phoneNumber: '0571-88628854' //仅为示例
				});
			},
			DueToHousing() {
				uni.navigateTo({
					url: '../../phoneRegistration/phoneRegistration'
				})
			},
			swiperChange(e) {
				this.swiperCurrent = e.detail.current;
				// console.log(this.swiperCurrent)
			}

		},
		onLoad(options) {
			this.id = options.id;
			console.log(options.id);
			this.goodsInfo = goodsInfoItems.globalRoaming[this.id];
			console.log(goodsInfoItems.globalRoaming[this.id]);
			
			this.isLike = false;
			let goods_list = uni.getStorageSync('market_goods');
			let goods_array = goods_list.split(",");
			for(var i=0;i<goods_array.length;++i)
			{
				if(this.id != goods_array[i])
				{
					
				}
				else
				{
					this.isLike = true;
					break;
				}
			}
		}
		

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
				// border-radius: 20rpx;
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

	.one-image {
		width: 80rpx;
		height: 80rpx;
		display: inline-block;
		border-radius: 40rpx;
		box-shadow: 10rpx 10rpx 20rpx #dcdddc;
	}

	.price-now {
		font-size: 32rpx;
		color: rgb(243, 153, 18);
	}
	.price-before {
		margin-left: 14rpx;
		color: rgb(243, 153, 18);
		font-size: 24rpx;
		text-decoration: line-through;
	}
	.discount {
		margin-left: 14rpx;
		color: rgb(243, 153, 18);
		background-color: rgba(243, 153, 18,0.1);
		font-size: 24rpx;
		padding: 6rpx;
	}
	.goods-name {
		font-weight: bold;
		margin-right: 14rpx;
	}
	.brand-and-condition {
		font-size: 24rpx;
		color: #A6A6A6;
		margin:0 8rpx;
	}

	.rent-center {
		height: 1040rpx;



	}
	
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
			color: rgba(161,191,86,1);
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
		font-size: 32rpx;
		font-weight: bold;
	}
	
	.introduce-to-goods {
		margin: 20rpx;
	}
	
	.text {
		margin: 10rpx 0;
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
	.rent-readMe-part-right-text{
		margin-top: 10rpx;
	}
	
	.release-button {
		display: flex;
		position: relative;
	}
	
	
	.operation {
		height: 90rpx;
	}
	
	button::after { border: none }
	
	.operation button {
		display: inline-block;
		margin:14rpx 0;
		color: #93A663;
		font-size: 28rpx;
		background-color: white;
	}
	
	.release-button .r-button2 {
		position: absolute;
		right: 0;
		background-color: rgba(161,191,86,1);
		color: white;
	}
	
	.release-button .r-button2:active {
		background-color: rgba(161,191,86,0.8);
	} 
	 
	.bottom-bar {
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		padding: 20rpx 30rpx;
		box-shadow: 0rpx 10rpx 30rpx #dcdddc;
		z-index: 100;
		background-color: white;
	}
</style>
