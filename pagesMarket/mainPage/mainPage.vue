<template>
	<view>
		<view>
			<view class="top" style="background-color: white;">
				<view>
					<image class="topImage" src="http://p1362.bvimg.com/10465/5981e6676b65372d.png" mode="widthFix"></image>
				</view>
				<navigation :titles="titles" @setItem="ItemSetFunc"></navigation>
				<view style="padding: 10rpx 0;"></view>
				<view style="background-color: white;">
					<input class="search" type="text" placeholder="搜索"/>
				</view>
				<view style="padding: 10rpx 0;"></view>
			</view>
			
			<view class="index" style="
			padding-bottom: 30rpx;
			border-bottom-left-radius: 30rpx;
			border-bottom-right-radius: 30rpx;
			background-color: white;
			box-shadow: 0rpx 30rpx 30rpx #dcdddc;">
				
				<view style="display: flex;">
					<navigator url="../release/release" class="icon">
						<image class="sh-image" src="http://p1362.bvimg.com/10465/9dc9cf65d237ca76.png"  mode=""></image>
						<view class="title">
							我要发布
						</view>
						<view class="discribe">
							闲置售卖
						</view>
					</navigator>
					<navigator url="../iWant/iWant" class="icon">
						<image class="sh-image" src="http://p1362.bvimg.com/10465/4507149c1b281961.png"  mode=""></image>
						<view class="title">
							我想要的
						</view>
						<view class="discribe">
							你的心声
						</view>
					</navigator>
					<navigator url="../donate/donate" class="icon">
						<image class="sh-image" src="http://p1362.bvimg.com/10465/7615adde370e63c0.png"  mode=""></image>
						<view class="title">
							我要捐赠
						</view>
						<view class="discribe">
							物有所归
						</view>
					</navigator>
					<navigator url="../managePage/managePage" class="icon">
						<image class="sh-image" src="http://p1362.bvimg.com/10465/bdd1706b7e82c4b4.png"  mode=""></image>
						<view class="title">
							二手管理
						</view>
						<view class="discribe">
							我的宝贝
						</view>
					</navigator>
				</view>
			</view>
			<view class="index sh">
				<view class="index-VillageParty">
					<view class="index-VillageParty-title">
						<view class="index-VillageParty-title-image">
							<!-- <image src="http://p1362.bvimg.com/10465/5f6f4059cd36c002.png" lazy-load="true" mode=""></image> -->
						</view>
						<view class="index-VillageParty-title-text tk">
							<text class="new-sh" style="background-color: rgb(255,174,174);">最</text>
							<text class="new-sh" style="background-color: rgb(176,225,255);">新</text>
							<text class="new-sh" style="background-color: rgb(255,225,176);">二</text>
							<text class="new-sh" style="background-color: rgb(255,174,174);">手</text>
						</view>
					</view>
					
				</view>
				<view class="secondHandItems">
					<view class="secondHandItem" >
							<navigator url="../../pagesMarket/buy/buy" >
								<viewx>
									<image class="secondHandImage" src="http://p1362.bvimg.com/10465/007027ee5b250fa6.jpg"  style="width: 340rpx;" mode="aspectFill"></image>
								</viewx>
								<view>
									<text class="goods-name">二手商品名称</text>
								</view>
								<view class="">
									<text class="brand-and-condition">品质</text>
									<text class="brand-and-condition">|</text>
									<text class="brand-and-condition">品牌</text>
								</view>
								<view class="" style="margin-bottom: 10rpx;">
									<text class="price-now">￥1288</text>
									<text class="price-before">￥1500</text>
									<text class="discount">已减￥375</text>
								</view>
							</navigator>
							<navigator url="../../pagesMarket/buy/buy">
								<viewx>
									<image class="secondHandImage" src="http://p1362.bvimg.com/10465/16896eec50403428.jpg"  style="width: 340rpx;" mode="aspectFill"></image>
								</viewx>
								<view>
									<text class="goods-name">二手商品名称</text>
								</view>
								<view class="">
									<text class="brand-and-condition">品质</text>
									<text class="brand-and-condition">|</text>
									<text class="brand-and-condition">品牌</text>
								</view>
								<view class="" style="margin-bottom: 10rpx;">
									<text class="price-now">￥1288</text>
									<text class="price-before">￥1500</text>
									<text class="discount">已减￥375</text>
								</view>
							</navigator>
							<navigator url="../../pagesMarket/buy/buy">
								<viewx>
									<image class="secondHandImage" src="http://p1362.bvimg.com/10465/6edd3f88e3493b9c.jpg"  style="width: 340rpx;" mode="aspectFill"></image>
								</viewx>
								<view>
									<text class="goods-name">二手商品名称</text>
								</view>
								<view class="">
									<text class="brand-and-condition">品质</text>
									<text class="brand-and-condition">|</text>
									<text class="brand-and-condition">品牌</text>
								</view>
								<view class="" style="margin-bottom: 10rpx;">
									<text class="price-now">￥1288</text>
									<text class="price-before">￥1500</text>
									<text class="discount">已减￥375</text>
								</view>
							</navigator>
						</view>
						<view class="secondHandItem">
							<viewx>
								<image src="http://p1362.bvimg.com/10465/515b3af70f8568ab.png"  style="width: 340rpx; height: 200rpx; border-radius: 20rpx;"></image>
							</viewx>
							<navigator url="../../pagesMarket/buy/buy" >
								<viewx>
									<image class="secondHandImage" src="http://p1362.bvimg.com/10465/bb8fd74d8aef0caf.png"  style="width: 340rpx;" mode="aspectFill"></image>
								</viewx>
								<view>
									<text class="goods-name">二手商品名称</text>
								</view>
								<view class="">
									<text class="brand-and-condition">品质</text>
									<text class="brand-and-condition">|</text>
									<text class="brand-and-condition">品牌</text>
								</view>
								<view class="" style="margin-bottom: 10rpx;">
									<text class="price-now">￥1288</text>
									<text class="price-before">￥1500</text>
									<text class="discount">已减￥375</text>
								</view>
							</navigator>
							<navigator url="../../pagesMarket/buy/buy" >
								<viewx>
									<image class="secondHandImage" src="http://p1362.bvimg.com/10465/1f1f04d7af08b655.png"  style="width: 340rpx;" mode="aspectFill"></image>
								</viewx>
								<view>
									<text class="goods-name">二手商品名称</text>
								</view>
								<view class="">
									<text class="brand-and-condition">品质</text>
									<text class="brand-and-condition">|</text>
									<text class="brand-and-condition">品牌</text>
								</view>
								<view class="" style="margin-bottom: 10rpx;">
									<text class="price-now">￥1288</text>
									<text class="price-before">￥1500</text>
									<text class="discount">已减￥375</text>
								</view>
							</navigator>
							<navigator url="../../pagesMarket/buy/buy" >
								<viewx>
									<image class="secondHandImage" src="http://p1362.bvimg.com/10465/252a23a1d7b10b5b.jpg"  style="width: 340rpx;" mode="aspectFill"></image>
								</viewx>
								<view>
									<text class="goods-name">二手商品名称</text>
								</view>
								<view class="">
									<text class="brand-and-condition">品质</text>
									<text class="brand-and-condition">|</text>
									<text class="brand-and-condition">品牌</text>
								</view>
								<view class="" style="margin-bottom: 10rpx;">
									<text class="price-now">￥1288</text>
									<text class="price-before">￥1500</text>
									<text class="discount">已减￥375</text>
								</view>
							</navigator>
						</view>
					
				</view>
				<view style="font-size: 28rpx; color: #A6A6A6; margin:20rpx 0">
					再多也木有咯……
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screenWidth: "",
				title: 'Hello',
				ifLoading: false,
				VillageParty: {
					VillagePartyTitle: [
						"我要发布", "我想要的", "我要捐赠", "二手管理"
					],
					VillagePartyDescripetion: [
						"发布你的宝贝",
						"让世界聆听你的心声",
						"每个宝贝都有用武之地",
						"管理我的二手商品"
					],
					VillagePartyTitleImageUrl: [
						"http://p1362.bvimg.com/10465/7f4763358d4dada6.png",
						"http://p1362.bvimg.com/10465/71814c662f242be1.png",
						"http://p1362.bvimg.com/10465/4cc0018e009ece23.png",
						"http://p1362.bvimg.com/10465/950715978bdf8348.png"
					]
				}
			}
		},
		onLoad() {
			this.ifLoading = true;
					uni.getSystemInfo({
					    success: function (res) {
					        // console.log(res.screenHeight); //屏幕高度  注意这里获得的高度宽度都是px 需要转换rpx
					        // console.log(res.windowWidth);  //可使用窗口宽度
					        // console.log(res.windowHeight); //可使用窗口高度
					        console.log(res.screenWidth); //屏幕宽度
							// var rpx=(res.screenHeight * (750 / res.windowWidth))  //将px 转换rpx
							// console.log(rpx)
							this.screenWidth = res.screenWidth / 2 + ""; 
							
							console.log(this.screenWidth);
					    }
					});
				},

		methods: {
			toDetails() {
				uni.navigateTo({
					url: ("../../pagesA/News?newsID=0")
				})
			},
			goToVillageHead_Mail() {
				uni.navigateTo({
					url: '../../pagesA/VillageHead_Email/IWannaWrite/IWannaWrite'
				})
			}
		}
	}
</script>

<style>
	
	@import url("../../common/iconfont.css");

	page {
		background-color: #efefef;
	}
	.tk {
		margin:0 auto;
	}
	.sh {
		background-image: url(http://p1362.bvimg.com/10465/2e34886d83fd8dbe.png);
		background-repeat: no-repeat;
		background-size: 900rpx;
		background-position: center 50rpx;
	}
	.new-sh {
		display: inline-block;
		padding: 10rpx 14rpx;
		border-radius: 100rpx;
		color: white;
		margin:40rpx 0;
		margin-bottom: 70rpx;
	}
	
	.secondHandItems navigator {
		background-color: #fff;
		border-radius: 20rpx;
		padding-bottom: 10rpx;
		margin-bottom: 20rpx;
	}
	.secondHandItems navigator view {
		margin-left: 10rpx;
		
	}
	
	.sh-image {
		width: 120rpx;
		height: 120rpx;
		display: inline-block;
		margin: 0 auto;
	}
	.title {
		font-size: 30rpx;
		text-align: center;
	}
	.discribe {
		font-size: 28rpx;
		color: #A6A6A6;
		text-align: center;
	}
	.icon {
		flex: 1;
		margin: 0 30rpx;
	}
	.search {
		padding: 14rpx 20rpx;
		margin:0rpx 30rpx;
		background-color: rgb(243, 243, 243);
		border-radius: 20rpx;
		font-size: 28rpx;
		/* width: 100%; */
	}



	.secondHandItems {
		display: flex;
	}
	.secondHandItem {
		flex: 1;
		margin: 10rpx;
	}
	.secondHandImage {
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		width: 100%;
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
		margin:0 8rpx;
	}
	
	.topImage {
		border-radius: 40rpx;
		margin:30rpx;
		margin-top: 0;
		margin-bottom: 0;
		display: block;	
		width: 690rpx;
		box-shadow: 0rpx 10rpx 30rpx #eeefee;
	}
	
	.top {
		padding-top: 30rpx;
		 /* box-shadow: 0rpx 10rpx 30rpx #dcdddc; */
		 /* background-color: white; */
		 z-index: 100; 
		 /* float: left; */
		 width: 100%; 
		 /* position: fixed; */
	}

	.index {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.index-swiper {
		height: 360rpx;
		width: 670rpx;
		margin: 24rpx 0 16rpx 0;
		border-radius: 20rpx;
		overflow: hidden;
	}

	.index-swiper-image image {
		height: 360rpx;
		width: 720rpx;
	}

	.index-blog {
		background: white;
		border-radius: 20rpx;
		margin: 10rpx 10rpx;
		margin-bottom: 10rpx;
		width: 670rpx;
		height: 120rpx;
		display: flex;
		flex-direction: row;
	}

	.index-blog-left {
		margin-left: 20rpx;
		width: 120rpx;
	}

	.index-blog-left image {
		width: 118rpx;
		height: 118rpx;
	}

	.index-blog-center-line {
		background: rgba(0, 0, 0, .3);
		height: 66rpx;
		width: 4rpx;
	}

	.index-blog-center {
		height: 100%;
		width: 4rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 10rpx;
	}

	.index-blog-right {
		margin: 14rpx 16rpx 14rpx 14rpx;
		margin-left: 20rpx;
		display: flex;
		flex-direction: column;
		position: relative;
		flex: 1;

	}

	.index-blog-right-top {}

	.index-blog-right-top text {
		font-size: 26rpx;
		color: #3f3f3f;
	}

	.index-blog-right-bottom {
		position: absolute;
		top: 40rpx;
	}

	.index-blog-right-bottom text {
		font-size: 22rpx;
		color: #B8B9B8;


	}

	.index-blog-right-icon {
		position: absolute;
		top: 20rpx;
		right: 0rpx;
	}

	.index-blog-right-icon text {
		color: #00aa7f;
		font-size: 44rpx;
	}

	.index-VillageParty {
		width: 670rpx;
		/* height: 500rpx; */
		margin: 10rpx;
		/* background: green; */
	}

	.index-ServieceToPeople {
		margin-top: 10rpx;
		width: 670rpx;
		height: 480;
	}

	.index-VillageParty-title,
	.index-ServieceToPeople-title,
	.index-polling-title {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.index-VillageParty-title-image image,
	.index-polling-title-image image {
		height: 100rpx;
		width: 100rpx;
	}

	.index-VillageParty-title text {
		margin-left: 14rpx;
		font-size: 34rpx;
	}

	.index-VillageParty-content-onePart {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		margin-bottom: 20rpx;

	}

	.index-VillageParty-content-onePart-left {
		width: 300rpx;
		height: 114rpx;
		background: white;
		border-radius: 20rpx;
		margin: 0 16rpx;
		position: relative;
	}
	.index-VillageParty-content-onePart-noShow {
		width: 300rpx;
		height: 114rpx;
		/* background: white; */
		border-radius: 20rpx;
		margin: 0 16rpx;
		position: relative;
	}

	.funcion-top {
		padding: 10rpx 0 4rpx 20rpx;
	}

	.funcion-top text {
		font-size: 30rpx;
		color: #3f3f3f;
	}

	.funcion-bottom {
		position: absolute;
		top: 44rpx;
		padding: 0 0 4rpx 20rpx;
	}

	.funcion-bottom text {
		font-size: 20rpx;
		color: #B3B4B3;
	}

	.function-image {
		position: absolute;
		height: 114rpx;
		width: 114rpx;
		top: 0;
		right: 8rpx;
	}

	.function-image image {
		width: 100%;
		height: 100%;
	}

	.index-polling {
		width: 670rpx;
		height: 240rpx;
	}
</style>
