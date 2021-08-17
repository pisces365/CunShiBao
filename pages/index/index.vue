<template>
	<view class="index">
		<swiper class="index-swiper" indicator-dots="true" autoplay="true" interval="3000" circular="true"
			indicator-active-color="#f7f7f7" indicator-color="rgba(145, 145, 145, 0.7)">
			<swiper-item v-for="(item , index) in homeSlide" :key="index">
				<view class="index-swiper-image">
					<image :src="item" mode="aspectFit"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="index-blog">
			<view class="index-blog-left">
				<image src="http://p1362.bvimg.com/10465/7d1de6bb8f0e7dfd.png" mode=""></image>
			</view>
			<view class="index-blog-center">
				<view class="index-blog-center-line">

				</view>
			</view>
			<view class="index-blog-right">
				<view class="index-blog-right-top">
					<text>三农数据洞察</text>
				</view>
				<view class="index-blog-right-bottom">
					<text>2021年夏季粮食产量数据新报告，劳动最光荣！</text>
				</view>
				<view class="index-blog-right-icon">
					<text class="icon-xiangyou iconfont"></text>
				</view>
			</view>
		</view>
		<view class="index-VillageParty">
			<view class="index-VillageParty-title">
				<view class="index-VillageParty-title-image">
					<image src="http://p1362.bvimg.com/10465/5f6f4059cd36c002.png" mode=""></image>
				</view>
				<view class="index-VillageParty-title-text">
					<text>村务党建</text>
				</view>
			</view>
			<view class="index-VillageParty-content">
				<view class="index-VillageParty-content-onePart">
					<navigator url="../../subPackages/policy/newAndExpert/newAndExpert" class="index-VillageParty-content-onePart-left">
						<view  class="funcion-top">
							<text>{{VillageParty.VillagePartyTitle[0]}}</text>
						</view>
						<view class="funcion-bottom">
							<text>{{VillageParty.VillagePartyDescripetion[0]}}</text>
						</view>
						<view class="function-image">
							<image :src="VillageParty.VillagePartyTitleImageUrl[0]" mode=""></image>
						</view>
					</navigator>
					<navigator url="../../subPackages/election/infoAndVote/infoAndVote" class="index-VillageParty-content-onePart-left">
						<view class="funcion-top">
							<text>{{VillageParty.VillagePartyTitle[1]}}</text>
						</view>
						<view class="funcion-bottom">
							<text>{{VillageParty.VillagePartyDescripetion[1]}}</text>
						</view>
						<view class="function-image">
							<image :src="VillageParty.VillagePartyTitleImageUrl[1]" mode=""></image>
						</view>
					</navigator>
				</view>
				<view class="index-VillageParty-content-onePart">
					<view class="index-VillageParty-content-onePart-left">
						<view class="funcion-top">
							<text>{{VillageParty.VillagePartyTitle[2]}}</text>
						</view>
						<view class="funcion-bottom">
							<text>{{VillageParty.VillagePartyDescripetion[2]}}</text>
						</view>
						<view class="function-image">
							<image :src="VillageParty.VillagePartyTitleImageUrl[2]" mode=""></image>
						</view>
					</view>
					<view class="index-VillageParty-content-onePart-left">
						<view class="funcion-top">
							<text>{{VillageParty.VillagePartyTitle[3]}}</text>
						</view>
						<view class="funcion-bottom">
							<text>{{VillageParty.VillagePartyDescripetion[3]}}</text>
						</view>
						<view class="function-image">
							<image :src="VillageParty.VillagePartyTitleImageUrl[3]" mode=""></image>
						</view>
					</view>
				</view>
				<view class="index-VillageParty-content-onePart">
					<view class="index-VillageParty-content-onePart-left">
						<view class="funcion-top">
							<text>{{VillageParty.VillagePartyTitle[4]}}</text>
						</view>
						<view class="funcion-bottom">
							<text>{{VillageParty.VillagePartyDescripetion[4]}}</text>
						</view>
						<view class="function-image">
							<image :src="VillageParty.VillagePartyTitleImageUrl[4]" mode=""></image>
						</view>
					</view>
					<view class="index-VillageParty-content-onePart-left">
						<view class="funcion-top">
							<text>{{VillageParty.VillagePartyTitle[5]}}</text>
						</view>
						<view class="funcion-bottom">
							<text>{{VillageParty.VillagePartyDescripetion[5]}}</text>
						</view>
						<view class="function-image">
							<image :src="VillageParty.VillagePartyTitleImageUrl[5]" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="index-ServieceToPeople">
			<view class="index-ServieceToPeople-title">
				<view class="index-VillageParty-title-image">
					<image src="http://p1362.bvimg.com/10465/e1e8ef9ddb3bb0d5.png" mode=""></image>
				</view>
				<view class="index-VillageParty-title-text">
					<text>民生服务</text>
				</view>
			</view>
			<view class="index-ServieceToPeople-content">
				<view class="index-VillageParty-content-onePart">
					<view class="index-VillageParty-content-onePart-left">
						<view class="funcion-top">
							<text>{{VillageParty.VillagePartyTitle[6]}}</text>
						</view>
						<view class="funcion-bottom">
							<text>{{VillageParty.VillagePartyDescripetion[6]}}</text>
						</view>
						<view class="function-image">
							<image :src="VillageParty.VillagePartyTitleImageUrl[6]" mode=""></image>
						</view>
					</view>
					<view class="index-VillageParty-content-onePart-left">
						<view class="funcion-top">
							<text>{{VillageParty.VillagePartyTitle[7]}}</text>
						</view>
						<view class="funcion-bottom">
							<text>{{VillageParty.VillagePartyDescripetion[7]}}</text>
						</view>
						<view class="function-image">
							<image :src="VillageParty.VillagePartyTitleImageUrl[7]" mode=""></image>
						</view>
					</view>
				</view>
				<view class="index-VillageParty-content-onePart">
					<view class="index-VillageParty-content-onePart-left">
						<view class="funcion-top">
							<text>{{VillageParty.VillagePartyTitle[8]}}</text>
						</view>
						<view class="funcion-bottom">
							<text>{{VillageParty.VillagePartyDescripetion[8]}}</text>
						</view>
						<view class="function-image">
							<image :src="VillageParty.VillagePartyTitleImageUrl[8]" mode=""></image>
						</view>
					</view>
					<view class="index-VillageParty-content-onePart-left">
						<view class="funcion-top">
							<text>{{VillageParty.VillagePartyTitle[9]}}</text>
						</view>
						<view class="funcion-bottom">
							<text>{{VillageParty.VillagePartyDescripetion[9]}}</text>
						</view>
						<view class="function-image">
							<image :src="VillageParty.VillagePartyTitleImageUrl[9]" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="index-polling">
			<view class="index-polling-title">
				<view class="index-polling-title-image">
					<image src="http://p1362.bvimg.com/10465/48c9cea3fa41b180.png" mode=""></image>
				</view>
				<view class="index-polling-title-text">
					<text>安全巡检</text>
				</view>
			</view>
			<view class="index-polling-content">
				<view class="index-polling-content-onePart">
					<view class="index-VillageParty-content-onePart-left">
						<view class="funcion-top">
							<text>{{VillageParty.VillagePartyTitle[10]}}</text>
						</view>
						<view class="funcion-bottom">
							<text>{{VillageParty.VillagePartyDescripetion[10]}}</text>
						</view>
						<view class="function-image">
							<image :src="VillageParty.VillagePartyTitleImageUrl[10]" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				homeSlide: [
					'http://p1362.bvimg.com/10465/ebe9ee53eacd9d82.png',
					'http://p1362.bvimg.com/10465/df28479dd7b9666a.png',
					'http://p1362.bvimg.com/10465/c8c87017129ce8b6.png'
				], // 定义值接收轮播图数据
				VillageParty: {
					VillagePartyTitle: [
						"政策解读", "换届选举", "土地承包", "脱贫致富", "乡村规划", "村长信箱",
						"村民办事", "村务监督", "精准帮扶", "乡村快递", "我要报修"
					],
					VillagePartyDescripetion: [
						"最新的乡村政策资讯",
						"选举新一届乡村干部",
						"乡村土地承包事务",
						"脱贫致富幸福生活",
						"最新乡村规划资讯",
						"村长信箱倾听心声",
						"乡村办事大厅",
						"权力透明制度公开",
						"因地制宜 分类指导",
						"村村通快递",
						"有事我来帮"
					],
					VillagePartyTitleImageUrl: [
						"http://p1362.bvimg.com/10465/7f4763358d4dada6.png",
						"http://p1362.bvimg.com/10465/71814c662f242be1.png",
						"http://p1362.bvimg.com/10465/4cc0018e009ece23.png",
						"http://p1362.bvimg.com/10465/b039ac741e77de7b.gif",
						"http://p1362.bvimg.com/10465/470d5a8fd3df6ad2.png",
						"http://p1362.bvimg.com/10465/950715978bdf8348.png",
						"http://p1362.bvimg.com/10465/796400e28e3cbab2.png",
						"http://p1362.bvimg.com/10465/3c309d7aa4bac16e.png",
						"http://p1362.bvimg.com/10465/ffdf9a711b41a235.png",
						"http://p1362.bvimg.com/10465/fe79bc86a6854375.png",
						"http://p1362.bvimg.com/10465/b3d8800d3950de8a.png",
					]
				}

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	@import url("../../common/iconfont.css");

	page {
		background-image: url('http://p1362.bvimg.com/10465/cec1b7d96cf7acf2.png');
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
		width: 670rpx;
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
		height: 500rpx;
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
