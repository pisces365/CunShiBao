<template>
	<view>
		<view class="policy" @click="clikeOthers()">
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
				<video id="myVideo"
					src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
					@error="videoErrorCallback" controls autoplay="false">
				</video>
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
						<image :src='item.headPortraitUrl' mode="aspectFit"></image>
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
							<ygc-comment ref="ygcComment" :placeholder="'发布评论'" @pubComment="pubComment"></ygc-comment>
							<view class="viewpoint-bottom-timeAndReply">
								<text>{{item.TimeToRelease}}</text>
								<text>·</text>
								<text @click="replyView()">回复</text>
							</view>
							<view class="viewpoint-bottom-reply" v-if="item.replyNumber>0">
								<view class="viewpoint-bottom-body" v-for="(replys,index1) in item.reply" :key="index1">
									<view class="viewpoint-bottom-body-left">
										<image :src="replys.headPortraitUrl" mode=""></image>
									</view>
									<view class="viewpoint-bottom-body-right">
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
							</view>
							<view class="viewpoint-bottom-reply" v-if="commentContent.length>0">
								<view class="viewpoint-bottom-body">
									<view class="viewpoint-bottom-body-left">
										<image src="../../../static/image/user_default.png" mode=""></image>
									</view>
									<view class="viewpoint-bottom-body-right">
										<view class="reply-name">
											马晓峰
										</view>
										<view class="reply-content">
											<text>{{commentContent}}</text>
										</view>

									</view>
								</view>
							</view>

						</view>
						<view class="cross-line">

						</view>
					</view>

				</view>
			</view>

		</view>
		<view class='footer'>
			<view class="footer-container">
				<view class="footer-sayYourWords" @click="ClikeInput()">
					<input type="text" value="" :placeholder="ifClickInput==false?'欢迎发表你的观点':'好的观点将会优先展示'" />
				</view>
				<view class="footer-iconChanged" v-if="ifClickInput===false">
					<view class="footer-commit" @click="ToSpecifiedLocation()">
						<text class="iconfont icon-pinglun1 footerIcon"></text>
					</view>
					<view class="footer-shoucang">
						<text class="iconfont icon-shoucang11 footerIcon"></text>
					</view>
					<view class="footer-zhuanfa">
						<text class="iconfont icon-zhuanfa footerIcon"></text>
					</view>
				</view>
				<view class="footer-send" v-if="ifClickInput===true">
					<text>发布</text>
				</view>
			</view>
		</view>
		
	</view>
</template>


<script>
	import ygcComment from '@/components/ygc-comment/ygc-comment.vue';
	export default {
		components: {
			ygcComment
		},
		data() {
			return {
				commentContent: '',
				ifClickInput: false,
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
					},
					{
						part: '把握新发展阶段、贯彻新发展理念、构建新发展格局，是以习近平同志为核心的党中央统筹中华民族伟大复兴战略全局和世界百年未有之大变局，与时俱进提升我国经济发展水平、塑造我国国际经济合作和竞争新优势作出的重大战略判断和战略抉择。习近平同志对把握新发展阶段、贯彻新发展理念、构建新发展格局的重大意义、丰富内涵和实践要求等进行了深刻阐述，明确了我国发展的历史方位、现代化建设的指导原则、经济现代化的路径选择，反映了我们党对我国经济发展规律的新认识，丰富和发展了中国特色社会主义政治经济学。习近平同志关于把握新发展阶段、贯彻新发展理念、构建新发展格局的重要论述，是习近平新时代中国特色社会主义思想的重要组成部分，对于推动我国经济社会高质量发展'

					}
				],
				editorCharge: '张菁菁',
				data_reading: '6548879',
				data_like: '131952',
				viewPoint: [{
						IdBelongToArticle: 'D10000', //所属文章编号
						viewpointId: 'D100001', //评论的编号
						IdBelongToViewPoint: '0', //该评论隶属于哪条评论，0代表不属于某评论
						peopleName: '周雪琼', //该评论发布者的名称
						headPortraitUrl: 'http://p1362.bvimg.com/10465/f055218fcab03c86.jpg', //评论发布者的头像
						content: "为人民过上健康幸福的生活而努力！", //评论的内容
						likeNumber: "123456", //点赞的数量
						TimeToRelease: '6小时', //现在距发布的时间间隔
						replyNumber: '2', //回复的数量
						reply: [{
							IdBelongToArticle: 'D10000', //所属文章编号
							viewpointId: 'D100004', //评论的编号
							IdBelongToViewPoint: 'D10001', //该评论隶属于哪条评论，0代表不属于某评论
							peopleName: '陈婕定',
							headPortraitUrl: 'http://p1362.bvimg.com/10465/07bce6259ac1e2b8.jpg',
							content: "你说得对！",
							likeNumber: "123",
							TimeToRelease: '5小时',
							replyNumber: '0', //回复的数量
						}, {
							IdBelongToArticle: 'D10000', //所属文章编号
							viewpointId: 'D100004', //评论的编号
							IdBelongToViewPoint: 'D10001', //该评论隶属于哪条评论，0代表不属于某评论
							peopleName: '刘康',
							headPortraitUrl: 'http://p1362.bvimg.com/10465/54c1d2c3b9aee237.jpg',
							content: "国家安康，人民幸福",
							likeNumber: "321",
							TimeToRelease: '2小时',
							replyNumber: '0', //回复的数量
						}]
					},
					{
						IdBelongToArticle: 'D10000', //所属文章编号
						viewpointId: 'D100002', //评论的编号
						IdBelongToViewPoint: '0', //该评论隶属于哪条评论，0代表不属于某评论
						peopleName: '马到成功',
						content: "一个队伍经常是不大整齐的，所以就要常常喊看齐，向左看齐，向右看齐，向中看齐。我们要向中央基准看齐，向大会基准看齐。看齐是原则，有偏差是实际生活，有了偏差，就喊看齐",
						likeNumber: "112345",
						TimeToRelease: '4小时',
						headPortraitUrl: 'http://p1362.bvimg.com/10465/a61cef977dc06b42.jpg',
						replyNumber: '0', //回复的数量
					},
					{
						IdBelongToArticle: 'D10000', //所属文章编号
						viewpointId: 'D100003', //评论的编号
						IdBelongToViewPoint: '0', //该评论隶属于哪条评论，0代表不属于某评论
						peopleName: '吴干事',
						content: "从古至今,医师的使命都是治病救人、救死扶伤。 把医师比作“白衣天使”,不仅蕴涵着人们对医师的期望和要求,也承载着社会赋予医师的神圣使命。 人类社会无论尊卑，都离不开医务人员的本职",
						likeNumber: "98234",
						TimeToRelease: '3小时',
						headPortraitUrl: 'http://p1362.bvimg.com/10465/926e05346203527e.jpg',
						replyNumber: '2', //回复的数量
					}
				]

			}

		},
		onload(){},
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
			},
			ToSpecifiedLocation() {
				uni.createSelectorQuery().select('.policy-title').boundingClientRect(data => {
					uni.createSelectorQuery().select('.policy-viewpoint-content').boundingClientRect(res => {
						console.log(data)
						console.log(res)
						console.log(res.top - data.top - 10)
						uni.pageScrollTo({
							scrollTop: res.top - data.top - 10
						})
					}).exec()
				}).exec()

			},
			ClikeInput() {
				this.ifClickInput = true;

			},
			clikeOthers() {
				this.ifClickInput = false;
			}
		}
	};
</script>

<style lang="scss">
	@import url("@/common/iconfont.css");

	page {
		width: 100%;
		height: 100%;
	}

	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100rpx;
		background-color: rgba(255, 255, 255, .9);
	}

	.footer-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.footer-iconChanged {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.footer-send {
		// right: 50rpx;
		margin-left: 100rpx;
		color: #515356;
		background-color: rgba(255, 255, 255, .9);

	}

	.footer-send text {
		float: right;
	}

	.footer-sayYourWords {
		width: 380rpx;
		height: 60rpx;
		margin-left: 30rpx;
		border-radius: 10rpx;
		background: #ececec;
		padding-left: 30rpx;
		font-size: 30rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		color: #515356;

	}

	.footerIcon {
		flex: 1;
		font-size: 38rpx;
		margin-left: 40rpx;
	}

	.footer-commit {
		margin-left: 30rpx;
	}

	.policy {
		margin: 30rpx 50rpx 110rpx 50rpx;
	}

	.policy-title-content {
		font-weight: bold;
		font-size: 44rpx;
	}

	.policy-title-subtitle {
		margin-top: 30rpx;
	}

	.policy-title-subtitle-source {
		font-size: 26rpx;
		color: #928383;
	}

	.policy-title-subtitle-time {
		color: #928383;
		font-size: 26rpx;
		margin-left: 40rpx;
	}

	.policy-content {
		margin-top: 34rpx;

	}

	.policy-content-part {
		margin-top: 20rpx;
		font-size: 36rpx;
		line-height: 60rpx;
	}

	.policy-video {
		margin-top: 40rpx;
		width: 100%;
		height: 320rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.policy-editor {
		margin-top: 30rpx;
		font-size: 28rpx;
		color: #9D9D9D;
	}

	.policy-readAndLike {
		margin-top: 32rpx;
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
		background: #f8f8f9;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.policy-read-title,
	.policy-like-title {
		font-size: 30rpx;
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

	.viewpoint-bottom-body {
		margin-top: 24rpx;
		display: flex;
		flex-direction: row;
	}

	.viewpoint-bottom-body-left {
		margin-top: 16rpx;
		width: 60rpx;
		height: 60rpx;
		border-radius: 60rpx;
		overflow: hidden;
	}

	.viewpoint-bottom-body-left image {
		width: 100%;
		height: 100%;
	}

	.reply-name {
		font-size: 34rpx;
		color: #e2c54e;
	}

	.reply-content {
		margin-top: 10rpx;
		height: 40rpx;
		font-size: 32rpx;
		margin-bottom: 20rpx;
		display: flex;
		align-items: center;
	}

	.policy-viewpoint-content-left {
		margin-top: 16rpx;
		width: 60rpx;
		height: 60rpx;
		border-radius: 60rpx;
		overflow: hidden;
	}

	.policy-viewpoint-content-left image {
		width: 100%;
		height: 100%;
	}

	.viewpoint-bottom-body-right {
		flex: 1;
		margin: 10rpx 0 0 20rpx;
	}

	.policy-viewpoint-content-right {
		flex: 1;
		margin: 10rpx 0 0 30rpx;
	}

	.viewpoint-top {
		display: flex;
		flex: 1;
		flex-direction: row;
		position: relative;
	}

	.viewPoint-peopleName {
		color: #e2c54e;
		font-size: 34rpx;
	}

	.viewPoint-like {
		display: flex;
		align-items: center;
	}

	.viewPoint-like text:nth-child(1) {
		position: absolute;
		right: 50rpx;
		font-size: 24rpx;

	}

	.viewPoint-like text:nth-child(2) {
		position: absolute;
		right: 20rpx;
		font-size: 20rpx;

	}

	.viewpoint-bottom-content {
		margin-top: 20rpx;
		font-size: 34rpx;
	}

	.viewpoint-bottom-timeAndReply {
		margin-top: 20rpx;
		font-size: 26rpx;
		position: relative;
	}

	.viewpoint-bottom-timeAndReply text:nth-child(1) {
		color: #808080;
	}

	.viewpoint-bottom-timeAndReply text:nth-child(2) {
		margin-left: 6rpx;
	}
</style>
