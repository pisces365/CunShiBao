<template>
	<view>
		<view class="policy" @click="clikeOthers()">
			<view class="policy-title">
				<view class="policy-title-content">
					{{articals[id].title.titleContent}}
				</view>
				<view class="policy-title-subtitle">
					<text class="policy-title-subtitle-source">{{articals[id].title.artileSource}}</text>
					<text class="policy-title-subtitle-time">{{articals[id].title.releaseTime}}</text>
				</view>
			</view>
			<view class="policy-video">
				<video id="myVideo"
					:src="articals[id].videoSrc"
					@error="videoErrorCallback" controls autoplay="false">
				</video>
			</view>
			<view class="policy-content">
				<view class="policy-content-part" v-for="(item,index) in articals[id].content" :key="index">
					{{item.part}}
				</view>
			</view>
			<view class="policy-editor">
				责任编辑 {{articals[id].editorCharge}}
			</view>
			<view class="policy-readAndLike">
				<view class="policy-read">
					<text class="policy-read-title">阅读</text>
					<text class="policy-read-number"> {{articals[id].data_reading}}</text>
				</view>
				<view class="policy-like">
					<text class="policy-like-title">点赞</text>
					<text class="policy-like-number">{{articals[id].data_like}}</text>
					<image
						:src="articals[id].doyoulike=='true'?'../../../static/image/like-active.png':'../../../static/image/like.png'"
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
				<view class="policy-viewpoint-content" v-for="(item,index) in articals[id].viewPoint">
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
						</view>
						<view class="cross-line"></view>
					</view>
				</view>
				<view class="policy-viewpoint-content" v-if="articals[id].commentContent.length>0">
					<view class="policy-viewpoint-content-left">
						<image src="../../../static/image/user_default.png" mode="aspectFit"></image>
					</view>
					<view class="policy-viewpoint-content-right">
						<view class="viewpoint-top">
							<view class="viewPoint-peopleName">
								马晓峰
							</view>
							<view class="viewPoint-like">
								<text>0</text>
								<text class="iconfont icon-dianzan2"></text>
							</view>
						</view>
						<view class="viewpoint-bottom">
							<view class="viewpoint-bottom-content">
								<text>{{articals[id].commentContent}}</text>
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
					<input type="text" v-model="articals[id].inputContext" @input="inputData" focus
						:placeholder="articals[id].ifClickInput==false?'欢迎发表你的观点':'好的观点将会优先展示'" />
				</view>
				<view class="footer-iconChanged" v-if="articals[id].ifClickInput===false">
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
				<view class="footer-send" v-if="articals[id].ifClickInput===true" @click="publishedView">
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
				id:0,
				articals:[
				{
					commentContent: '',
					inputContext: '',
					ifClickInput: false,
					doyoulike: 'false',
					videoSrc: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
					firstPic: 'http://p1362.bvimg.com/10465/a6176167fb9af239.jpg',
					title: {
						titleContent: '精心做好换届选举“后半篇”',
						artileSource: '村换届选举委员会',
						releaseTime: '2021年12月23日'
					},
					content: [{
							part:'目前，村（社区）“两委”换届工作在紧锣密鼓的开展。本次换届选举具有诸多关键性，要为下一个五年也是“十四五”规划的五年打好基础，要为巩固脱贫成果推动乡村振兴打好基础，要为从全面建成小康社会到建设社会主义现代化国家打好基础。因此，不仅要抓好换届选举，还要做好换届选举的“后半篇”文章。'
						},
						{
							part:'坚持和加强党的全面领导，做好班子建设工作。“两委”班子，讲政治是第一条。班子新成，要把政治建设放在首位，把好党内政治生活的责任关，高质量落实“三会一课”、民主生活会、组织生活会、民主评议党员等制度。常态抓组织学习，常态锤炼党性，提高政治能力，增强对党忠诚、为党分忧的意识，引导班子成员树立正确的权力观和事业观。班子要干事，本领是关键。选出了班子，要抓好能力建设，提升村（社区）干部队伍专业化、年轻化、知识化水平。多形式加强廉政教育，筑牢防腐拒变防线，树立“不敢腐、不能腐、不想腐”的思想自觉和行动自觉，涵养风清气正的基层政治生态。'						
						},
						{
							part:'长存风险意识和问题意识，抓好班子运行管理。要规范民主决策制度，严格落实“四议两公开”、民主集中制，健全工作机制，凡是涉及群众切身利益的事情都要集体决策。涉及重大事项、财政支出等问题，严格落实“三务”公开、四议两公开制度。建立健全村（社区）“两委”班子任期目标管理和考核评价机制，注重从是否坚决贯彻落实上级决策部署上看政治态度，注重从是否获得群众支持、赢得群众满意上看宗旨意识，注重从是否带动群众增收致富、提升基层治理水平上看工作能力。对成效突出的优秀干部要大力宣传表彰。'						
						},
						{
							part:'以工作实绩回应党和人民，推动班子干事创业。选举任命只是第一步，新班子要让组织放心、群众满意，关键是要能扛起责任，落实好各级党委的各项决策部署，干出一番事业，造福人民群众。发展方面，要引领村干部队伍干事创业，壮大村集体经济，带动村民致富，推动乡村振兴。治理方面，要紧盯治理体系和治理能力现代化这一长远目标，鼓励创先争优，提升智慧化治理水平，以高质量的基层治理提升人民群众的幸福感、获得感和安全感，为高质量发展打好基层基础。'						
						},
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
						TimeToRelease: '6小时', //现在距发布的时间间隔，
						DateToRelease: '8月23日', //TimeToRelease 超过12小时则为发布日期
						replyNumber: '2', //回复的数量
					}, {
						IdBelongToArticle: 'D10000', //所属文章编号
						viewpointId: 'D100004', //评论的编号
						IdBelongToViewPoint: 'D10001', //该评论隶属于哪条评论，0代表不属于某评论
						peopleName: '陈婕定',
						headPortraitUrl: 'http://p1362.bvimg.com/10465/07bce6259ac1e2b8.jpg',
						content: "你说得对！",
						likeNumber: "123",
						TimeToRelease: '5小时',
						DateToRelease: '8月23日', //TimeToRelease 超过12小时则为发布日期
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
						DateToRelease: '8月23日', //TimeToRelease 超过12小时则为发布日期
						replyNumber: '0', //回复的数量
					}, {
						IdBelongToArticle: 'D10000', //所属文章编号
						viewpointId: 'D100002', //评论的编号 主键
						IdBelongToViewPoint: 'D100004', //该评论隶属于哪条评论，0代表不属于某评论
						peopleName: '马到成功',
						content: "一个队伍经常是不大整齐的，所以就要常常喊看齐，向左看齐，向右看齐，向中看齐。我们要向中央基准看齐，向大会基准看齐。看齐是原则，有偏差是实际生活，有了偏差，就喊看齐",
						likeNumber: "112345",
						TimeToRelease: '4小时',
						headPortraitUrl: 'http://p1362.bvimg.com/10465/a61cef977dc06b42.jpg',
						DateToRelease: '8月23日', //TimeToRelease 超过12小时则为发布日期
						replyNumber: '0', //回复的数量
					}, {
						IdBelongToArticle: 'D10000', //所属文章编号
						viewpointId: 'D100003', //评论的编号
						IdBelongToViewPoint: '0', //该评论隶属于哪条评论，0代表不属于某评论
						peopleName: '吴干事',
						content: "从古至今,医师的使命都是治病救人、救死扶伤。 把医师比作“白衣天使”,不仅蕴涵着人们对医师的期望和要求,也承载着社会赋予医师的神圣使命。 人类社会无论尊卑，都离不开医务人员的本职",
						likeNumber: "98234",
						TimeToRelease: '3小时',
						DateToRelease: '8月23日', //TimeToRelease 超过12小时则为发布日期
						headPortraitUrl: 'http://p1362.bvimg.com/10465/926e05346203527e.jpg',
						replyNumber: '2', //回复的数量
					}]
				},
				{
					commentContent: '',
					inputContext: '',
					ifClickInput: false,
					doyoulike: 'false',
					videoSrc: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
					firstPic: 'http://p1362.bvimg.com/10465/a6176167fb9af239.jpg',
					title: {
						titleContent: '“三心”聚力 做好换届选举',
						artileSource: '村换届选举委员会',
						releaseTime: '2021年03月14日'
					},
					content: [{
							part: '“桑榆不言老，夕阳释余晖”，如何做好换届选举离职村（社区）干部思想工作，让他们继续为村（社区）发展贡献自己的力量，是做好村（社区）换届选举后半篇文章的关键，也是促进基层治理、社会和谐的关键。'						
						},
						{
							part: '一是宽心卸包袱。由于新时代、新要求，在村（社区）换届选举工作中，很多能力出众的干部不得不离开工作了几十年的工作岗位，心理难免会失落，甚至对政策的不理解，此时就要从政策解读、发展要求、时代需要等多方面做好工作，让他们宽心，放下心中的包袱。'						
						},
						{
							part: '二是舒心促团结。从政策解读到慰问走访，发放纪念品等，进一步强化对离职干部的心理疏导；从关心关怀、党性教育、肯定奉献等方面进一步提高离职干部获得感、荣誉感，促进团结。'						
						},
						{
							part: '三是顺心讲奉献。离职干部大多奉献了几十年，离职后最关心的是以后的生活是否有保障，习惯了的工作节奏如何调整，如何才能让他们过的顺心是做好换届后半篇文章的关键。要从生活关心、待遇政策覆盖、释放余晖舞台搭建等方面进行统筹考虑安排，让他们在离职后也能顺心生活，热心奉献。'						
						},
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
						TimeToRelease: '6小时', //现在距发布的时间间隔，
						DateToRelease: '8月23日', //TimeToRelease 超过12小时则为发布日期
						replyNumber: '2', //回复的数量
					}, {
						IdBelongToArticle: 'D10000', //所属文章编号
						viewpointId: 'D100004', //评论的编号
						IdBelongToViewPoint: 'D10001', //该评论隶属于哪条评论，0代表不属于某评论
						peopleName: '陈婕定',
						headPortraitUrl: 'http://p1362.bvimg.com/10465/07bce6259ac1e2b8.jpg',
						content: "你说得对！",
						likeNumber: "123",
						TimeToRelease: '5小时',
						DateToRelease: '8月23日', //TimeToRelease 超过12小时则为发布日期
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
						DateToRelease: '8月23日', //TimeToRelease 超过12小时则为发布日期
						replyNumber: '0', //回复的数量
					}, {
						IdBelongToArticle: 'D10000', //所属文章编号
						viewpointId: 'D100002', //评论的编号 主键
						IdBelongToViewPoint: 'D100004', //该评论隶属于哪条评论，0代表不属于某评论
						peopleName: '马到成功',
						content: "一个队伍经常是不大整齐的，所以就要常常喊看齐，向左看齐，向右看齐，向中看齐。我们要向中央基准看齐，向大会基准看齐。看齐是原则，有偏差是实际生活，有了偏差，就喊看齐",
						likeNumber: "112345",
						TimeToRelease: '4小时',
						headPortraitUrl: 'http://p1362.bvimg.com/10465/a61cef977dc06b42.jpg',
						DateToRelease: '8月23日', //TimeToRelease 超过12小时则为发布日期
						replyNumber: '0', //回复的数量
					}, {
						IdBelongToArticle: 'D10000', //所属文章编号
						viewpointId: 'D100003', //评论的编号
						IdBelongToViewPoint: '0', //该评论隶属于哪条评论，0代表不属于某评论
						peopleName: '吴干事',
						content: "从古至今,医师的使命都是治病救人、救死扶伤。 把医师比作“白衣天使”,不仅蕴涵着人们对医师的期望和要求,也承载着社会赋予医师的神圣使命。 人类社会无论尊卑，都离不开医务人员的本职",
						likeNumber: "98234",
						TimeToRelease: '3小时',
						DateToRelease: '8月23日', //TimeToRelease 超过12小时则为发布日期
						headPortraitUrl: 'http://p1362.bvimg.com/10465/926e05346203527e.jpg',
						replyNumber: '2', //回复的数量
					}]
				},
				]
				

			}

		},
		onLoad(options) {
			this.id = options.id;
			console.log(options.id)
		},
		methods: {

			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			likeArticle() {
				if (this.articals[id].doyoulike == 'true') {
					this.articals[id].doyoulike = 'false';
					this.articals[id].data_like--;
				} else {
					this.articals[id].doyoulike = 'true';
					this.articals[id].data_like++;
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
				this.articals[id].ifClickInput = true;

			},
			clikeOthers() {
				this.articals[id].ifClickInput = false;
			},
			inputData(e) {
				console.log(e.detail)
				this.articals[id].inputContext = e.detail.value;
			},
			publishedView(e) {
				this.articals[id].commentContent = this.inputContext;
				this.articals[id].inputContext = ''
				console.log(this.articals[id].commentContent)
				uni.showToast({
					title: '发布成功',
					duration: 1000
				});


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
