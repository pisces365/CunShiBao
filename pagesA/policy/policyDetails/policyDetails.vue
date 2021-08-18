<!-- 文章内容点击详情页 -->
<template>
	<view>
		<view class="policy">
			<view class="policy-title">
				<view class="policy-title-content">
					{{title.titleContent}}
				</view>
				<view class="policy-title-subtitle">
					<text class="policy-title-subtitle-source">{{title.artileSource}}</text>
					<text class="policy-title-subtitle-time">{{title.releaseTime}}</text>
				</view>
			</view>
			<view class="policy-video">
				<!-- <video id="myVideo"
					src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
					@error="videoErrorCallback" controls autoplay="false">
				</video> -->
			</view>
			<view class="policy-content">
				<view class="policy-content-part" v-for="(item,index) in content" :key="index">
					{{item.part}}
				</view>
			</view>
			<view class="policy-editor">
				责任编辑 {{editorCharge}}
			</view>
			<view class="policy-readAndLike">
				<view class="policy-read">
					<text class="policy-read-title">阅读</text>
					<text class="policy-read-number"> {{data_reading}}</text>
				</view>
				<view class="policy-like">
					<text class="policy-like-title">点赞</text>
					<text class="policy-like-number">{{data_like}}</text>
					<image
						:src="doyoulike=='true'?'../../../static/image/like-active.png':'../../../static/image/like.png'"
						@click="likeArticle()"></image>
				</view>
			</view>
			<!-- <navigator class="policy-recommended">
				进入习近平文汇频道查看更多内容
			</navigator> -->
			<view class="policy-viewpoint">
				<view class="policy-viewpoint-title">
					<view class="policy-viewpoint-title-left">
						<view class="policy-viewpoint-title-left-line">

						</view>
					</view>
					<view class="policy-viewpoint-title-right">
						观点
					</view>
				</view>
				<view class="policy-viewpoint-content" v-for="(item,index) in viewPoint">
					<view class="policy-viewpoint-content-left">
						<image :src=item.headPortraitUrl mode=""></image>
					</view>
					<view class="policy-viewpoint-content-right">
						<view class="viewpoint-top">
							<view class="viewPoint-peopleName">
								{{item.peopleName}}
							</view>
							<view class="viewPoint-like">
								<text>{{item.likeNumber | formatCount}}</text>
								<text class="iconfont icon-dianzan2"></text>
							</view>
						</view>
						<view class="viewpoint-bottom">
							<view class="viewpoint-bottom-content">
								{{item.content}}
							</view>
							<view class="viewpoint-bottom-reply" v-if="item.replyNumber>0">
								<view class="viewpoint-bottom-body" v-for="(replys,index1) in item.reply" :key="index1">
									<view class="reply-name">
										{{replys.peopleName}}
									</view>
									<view class="reply-identify" v-if="item.peopleName==replys.peopleName">
										博主
									</view>
									<view class="reply-content">
										{{replys.content}}
									</view>
								</view>
							</view>
							<view class="viewpoint-bottom-timeAndReply">
								<text>{{item.TimeToRelease}}</text>
								<text>·</text>
								<text @click="replyView()">回复</text>
							</view>
						</view>
					</view>
					<view class="cross-line">

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
				doyoulike: 'false',
				videoSrc: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
				firstPic: 'http://p1362.bvimg.com/10465/a6176167fb9af239.jpg',
				title: {
					titleContent: '习近平2021年7月6日在中国共产党与世界政党领导人峰会上的主旨讲话',
					artileSource: '学习强国学习平台',
					releaseTime: '2021年07月07日'
				},
				content: [{
						part: '女士们，先生们，朋友们：很高兴在中国共产党成立100周年之际，同来自160多个国家的500多个政党和政治组织等领导人、逾万名政党和各界代表共聚“云端”，探讨“为人民谋幸福与政党的责任”这个重大命题。这段时间，170多个国家的600多个政党和政治组织等就中国共产党成立100周年发来1500多封贺电贺信，表达对中国共产党的友好情谊和美好祝愿.我谨代表中国共产党，向大家表示衷心的感谢！'
					},
					{
						part: '今天，人类社会再次面临何去何从的历史当口，是敌视对立还是相互尊重？是封闭脱钩还是开放合作？是零和博弈还是互利共赢？选择就在我们手中，责任就在我们肩上。'
					}
				],
				editorCharge: '张菁菁',
				data_reading: '6548879',
				data_like: '131952',
				viewPoint: [{
						peopleName: '周雪琼',
						headPortraitUrl: '',
						content: "为人民过上健康幸福的生活而努力！",
						likeNumber: "123456",
						TimeToRelease: '6小时',
						replyNumber: '0',
						reply: [{
							peopleName: '陈婕定',
							headPortraitUrl: '',
							content: "你说得对！",
							likeNumber: "123",
							TimeToRelease: '5小时'
						}, {
							peopleName: '平民4',
							headPortraitUrl: '',
							content: "你说得对，我比你字多！",
							likeNumber: "321",
							TimeToRelease: '5小时'
						}]
					},
					{
						peopleName: '马到成功',
						content: "一个队伍经常是不大整齐的，所以就要常常喊看齐，向左看齐，向右看齐，向中看齐。我们要向中央基准看齐，向大会基准看齐。看齐是原则，有偏差是实际生活，有了偏差，就喊看齐",
						likeNumber: "321456",
						TimeToRelease: '4小时'
					}
				]

			}
		},
		methods: {
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			likeArticle() {
				if (this.doyoulike == 'true') {
					this.doyoulike = 'false';
					this.data_like--;
				} else {
					this.doyoulike = 'true';
					this.data_like++;
				}

			}
		}
	}
</script>

<style>
	@import url("@/common/iconfont.css");

	.policy {
		margin: 30rpx;

	}

	.policy-title {}

	.policy-title-content {}

	.policy-title-subtitle {
		margin-top: 20rpx;
	}

	.policy-title-subtitle-source {
		font-size: 20rpx;
		color: #928383;
	}

	.policy-title-subtitle-time {
		color: #928383;
		font-size: 20rpx;
		margin-left: 40rpx;
	}

	.policy-content {
		margin-top: 30rpx;

	}

	.policy-content-part {
		margin-top: 20rpx;
		font-size: 30rpx;
		line-height: 44rpx;
	}

	.policy-video {
		margin-top: 20rpx;
		width: 690rpx;
		height: 300rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.policy-editor {
		margin-top: 20rpx;
		font-size: 20rpx;
		color: #9D9D9D;
	}

	.policy-readAndLike {
		margin-top: 30rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.policy-read {
		margin-right: 40rpx;
	}

	.policy-like,
	.policy-read {
		height: 40rpx;
		width: 270rpx;
		background: #F5F5F7;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.policy-read-title,
	.policy-like-title {
		font-size: 24rpx;
		color: #4f5154;
	}

	.policy-read-number,
	.policy-like-number {
		margin-left: 8rpx;
		font-size: 28rpx;
	}

	.policy-like {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.policy-like image {
		margin-left: 30rpx;
		width: 34rpx;
		height: 34rpx;
	}

	.policy-viewpoint-title-left {

		width: 20rpx;
		height: 50rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.policy-viewpoint-title-left-line {
		width: 8rpx;
		height: 30rpx;
		background: red;
	}

	.policy-viewpoint-title {
		margin-top: 30rpx;
		height: 50rpx;
		display: flex;
		flex-direction: row;
	}

	.policy-viewpoint-title-right {
		flex: 1;
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		height: 50rpx;
		font-size: 36rpx;
	}

	.policy-viewpoint-content {
		margin-top: 24rpx;
		display: flex;
		flex-direction: row;
	}

	.policy-viewpoint-content-left {
		margin-top: 16rpx;
		width: 60rpx;
		height: 60rpx;
		background: gray;
		border-radius: 60rpx;
		overflow: hidden;
	}

	.policy-viewpoint-content-right {
		flex: 1;
		margin: 10rpx 0 0 20rpx;
	}

	.viewpoint-top {
		display: flex;
		flex: 1;
		flex-direction: row;
		position: relative;
	}

	.viewPoint-peopleName {
		color: #e2c54e;
		font-size: 32rpx;
	}
	.viewPoint-like text:nth-child(1){
		position: absolute;
		right: 50rpx;
		font-size: 20rpx;
		
	}
	.viewPoint-like text:nth-child(2){
		position: absolute;
		right: 20rpx;
		font-size: 20rpx;
		
	}
	.viewpoint-bottom-content{
		margin-top: 20rpx;
		font-size: 34rpx;
	}
	.viewpoint-bottom-timeAndReply{
		margin-top: 20rpx;
		font-size: 26rpx;
	}
	.viewpoint-bottom-timeAndReply text:nth-child(1){
		color: #808080;
	}
	.viewpoint-bottom-timeAndReply text:nth-child(2){
		margin-left: 6rpx;
	}
	.viewpoint-bottom-timeAndReply text:nth-child(3){
		margin-left: 6rpx;
	}
</style>
