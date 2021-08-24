<!-- 新闻文章界面 内容带有多张图片 -->
<template>
	<view>
		<view class="policy" @click="clikeOthers()">
			<view class="policy-title">
				<view class="policy-title-content">
					{{articleElement[NewsID].title.titleContent}}
				</view>
				<view class="policy-title-subtitle">
					<text class="policy-title-subtitle-source">{{articleElement[NewsID].title.artileSource}}</text>
					<text class="policy-title-subtitle-time">{{articleElement[NewsID].title.releaseTime}}</text>
				</view>
			</view>
			<view class="policy-content">
				<view class="policy-content-part" v-for="(item,index) in articleElement[NewsID].content" :key="index">
					{{item.part}}
				</view>
			</view>
			<view class="policy-editor">
				责任编辑 {{articleElement[NewsID].editorCharge}}
			</view>
			<view class="policy-readAndLike">
				<view class="policy-read">
					<text class="policy-read-title">阅读</text>
					<text class="policy-read-number"> {{articleElement[NewsID].data_reading}}</text>
				</view>
				<view class="policy-like">
					<text class="policy-like-title">点赞</text>
					<text class="policy-like-number">{{articleElement[NewsID].data_like}}</text>
					<image
						:src="doyoulike=='true'?'../../../static/image/like-active.png':'../../../static/image/like.png'"
						@click="likeArticle()"></image>
				</view>
			</view>
			<navigator class="policy-recommended" url="../pagesA/policy/newAndExpert/newAndExpert">
				进入<text>综合频道</text>查看更多内容
				<text class="iconfont icon-a-LeftArrow-copy"></text>
			</navigator>
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
				<view class="policy-viewpoint-NoContent" v-if="commentContent.length==0">
					<view class="policy-viewpoint-NoContent-image">
						<text class="iconfont icon-shafaA"></text>
					</view>
					<view class="policy-viewpoint-NoContent-text">
						暂无观点 快来发表观点
					</view>
				</view>
				<view class="policy-viewpoint-content" v-if="commentContent.length>0">
					<view class="policy-viewpoint-content-left">
						<image :src="avatarUrl" mode="aspectFit"></image>
					</view>
					<view class="policy-viewpoint-content-right">
						<view class="viewpoint-top">
							<view class="viewPoint-peopleName">
								{{nickName}}
							</view>
							<view class="viewPoint-like">
								<text>0</text>
								<text class="iconfont icon-dianzan2"></text>
							</view>
						</view>
						<view class="viewpoint-bottom">
							<view class="viewpoint-bottom-content">
								<text>{{commentContent}}</text>
							</view>
							<view class="viewpoint-bottom-timeAndReply">
								<text>刚刚</text>
							</view>
						</view>
						<view class="cross-line"></view>
					</view>

				</view>
			</view>

		</view>
		<view class='footer'>
			<view class="footer-container">
				<view class="footer-sayYourWords" @click="ClikeInput()">
					<input type="text" v-model="inputContext" @input="inputData"
						:placeholder="ifClickInput==false?'欢迎发表你的观点':'好的观点将会优先展示'" />
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
				<view class="footer-send" v-if="ifClickInput===true" @click="publishedView">
					<text>发布</text>
				</view>
			</view>
		</view>

	</view>
</template>


<script>
	export default {
		data() {
			return {
				NewsID: '',
				commentContent: '',
				nickName: '',
				avatarUrl: '',
				inputContext: '',
				ifClickInput: false,
				doyoulike: 'false',
				articleElement: [{
					title: {
						titleContent: '国家黑土地保护工程实施方案（2021—2025年）',
						artileSource: '农民日报',
						releaseTime: '2021年07月30日'
					},
					content: [{
							part: '为贯彻落实习近平总书记关于保护好黑土地这一“耕地中的大熊猫”重要指示批示精神，按照中央经济工作会议、中央农村工作会议以及中央一号文件关于实施国家黑土地保护工程等相关要求，近日，经国务院同意，农业农村部、国家发展和改革委员会、财政部、水利部、科学技术部、中国科学院、国家林业和草原局7部门联合印发《国家黑土地保护工程实施方案（2021—2025年）》（以下简称《实施方案》）。《实施方案》明确黑土地保护原则、目标和内容，提出“十四五”期间将完成1亿亩黑土地保护任务，黑土耕地质量明显提升，土壤有机质含量平均提高10％以上。'
						},
						{
							part: '《实施方案》强调，实施国家黑土地保护工程要坚持保护优先、用养结合，促进黑土地在利用中保护、在保护中利用。要坚持因地制宜、分类施策，实施差异化治理。要坚持政策协同、实行综合治理。要坚持示范引领、加强技术支撑。要坚持政府引导、带动社会参与，形成黑土地保护建设长效机制。'
						},
						{
							part: '《实施方案》提出，“十四五”期间完成1亿亩黑土地保护任务，其中标准化示范面积1800万亩。完成建设高标准农田5000万亩，治理大中型侵蚀沟7000条。实施多种模式保护性耕作5亿亩次，每年1亿亩全覆盖。有机肥还田1亿亩，每年2000万亩。方案实施后，耕地质量明显提升，旱地耕作层达到30厘米以上、水田耕作层达到20厘米至25厘米，土壤有机质含量平均提高10％以上。'
						},
						{
							part: '《实施方案》明确了国家黑土地保护工程实施内容和分区实施重点。在内容上，着重实施土壤侵蚀治理、农田基础设施建设、肥沃耕作层培育、耕地质量监测评价等措施，解决黑土耕地出现的“变薄、变瘦、变硬”问题。在区域上，松嫩平原北部的中厚黑土区以保育培肥为主；松嫩平原南部、三江平原、辽河平原的浅薄黑土区以培育增肥为主；大兴安岭东南麓、长白山—辽东丘陵的水土流失区以固土保肥为主；三江平原和松嫩平原西部的障碍土壤区以改良培肥为主。'
						},
						{
							part: '下一步，7部门将以《实施方案》为基础，加强顶层设计，建立健全黑土地保护利用技术模式和长效机制。一是将强化政策统筹，加强东北四省（区）已有项目统筹、行业内相关资金整合和行业间相关资金统筹的衔接配合。二是强化多方协同，共同推进黑土地保护利用的机制。三是强化规模化示范带动，推进黑土地保护与高效农业、品牌农业发展的有机结合，提高黑土地保护利用综合效益，调动农民积极主动实施相关措施。'
						}
					],
					editorCharge: '贾勤缘',
					data_reading: '80211',
					data_like: '3982'
				}], 
			}

		},
		methods: {
			getUserInfo() {
				let that = this;
				uni.getStorage({
					key: 'userInfo',
					success(res) {
						that.userInfomation = res.data;
						that.avatarUrl = res.data.avatarUrl;
						that.nickName = res.data.nickName;
						console.log('获取成功', res);
					}
				})
			},
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
					uni.createSelectorQuery().select('.policy-viewpoint-title-right').boundingClientRect(res => {
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
			},
			inputData(e) {
				this.inputContext = e.detail.value;
			},
			publishedView(e) {
				if (this.inputContext.length > 0) {
					this.commentContent = this.inputContext;
					uni.showToast({
						title: '发布成功',
						duration: 1000
					});
				} else {
					uni.showModal({
						content: '请输入您的观点'
					});
				}
				this.inputContext = ''
			}

		},
		onLoad(options) {
			this.getUserInfo();
			uni.showLoading({
				title: '加载中...'
			})
			this.NewsID = options.newsID;
			uni.hideLoading()
		},
		
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

	.policy-viewpoint-NoContent-image {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 30rpx;
	}

	.policy-viewpoint-NoContent-image text {
		font-size: 150rpx;
		color: #E6E7E6;
	}

	.policy-viewpoint-NoContent-text {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #d4d5d4;
		font-size: 30rpx;
		margin-top: 40rpx;
	}

	.policy-viewpoint {
		margin-top: 40rpx;
	}

	.policy-recommended {
		margin-top: 50rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.policy-recommended text:nth-child(1) {
		color: #f40101;
	}

	.policy-recommended text:nth-child(2) {
		color: #b4aeae;
		position: absolute;
		top: 8rpx;
		right: 100rpx;
	}
</style>
