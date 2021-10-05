<template>
	<view>
		<view class="top">
			<view>
				<image class="topImage" src="http://p1362.bvimg.com/10465/b9c3700c55d6549a.png" mode="widthFix"></image>
			</view>
			<navigation :titles="titles" @setItem="ItemSetFunc"></navigation>
			<view class="IWanna-write-noshow" @click="backToMyLetter"></view>
		</view>
		<view style="height: 420rpx;margin-bottom: 10rpx;"></view>
		<information v-show="getTitle0()" :info="EmailOutline"></information>
		<view class="IWanna-write" v-show="getTitle1()">
			<view class="IWanna-write-myLetter" >
				<MyLetter :info="LetterOfMine"></MyLetter>
				<view class="IWanna-write-myLetter-click back-img" @click="clickMail">
					<!-- <text class="iconfont icon-shuxin"></text> -->
					<view class="IWanna-write-myLetter-click-text back-img-text">我要写信</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navigation from '@/component/policyInterpretation/navigation/navigation.vue'
	import information from '@/component/policyInterpretation/information/information.vue'
	import MyLetter from '@/component/policyInterpretation/information/information_noLike.vue'
	export default {
		components: {
			navigation,
			information,
			MyLetter
		},
		data() {
			return {
				ifOpened: '1',
				ifAnonymity: '1',
				ifClickWriting: false,
				opened: 'letterOpened',
				existingNumber: 0, //备注当前字数
				MaxLen: 800, //备注最多字数 
				ArticleBody: "", //正文内容
				ArticleTitle: "", //正文标题
				titles: [{
						id: 0,
						name: "信件公示",
						isActive: true
					},
					{
						id: 1,
						name: "我的信件",
						isActive: false
					}
				],
				EmailOutline: [ //具体信息
					{
						title: "关于新变户籍问题",
						source: "村事宝",
						date: "2021年09月16日",
						reading: "14,603",
						like: "6,318",
						url: "../../News?newsID=9"
					},
					{
						title: "副村长是否享有随意处置村民私有财产的特权？",
						source: "村事宝",
						date: "2021年9月15日",
						reading: "14,603",
						like: "6,318",
						url: "../../News?newsID=10"
					},
					{
						title: "农村居住环境急待改善",
						source: "村事宝",
						date: "2021年9月13日",
						reading: "14,603",
						like: "6,318",
						url: "../../News?newsID=11"
					}
				],
				LetterOfMine: [{
					title: "关于老人坐公交车要扫码",
					source: "村事宝",
					date: "2021年09月13日",
					url: "../../News?newsID=12"
				}, {
					title: "甘北沿河班车何时再开",
					source: "村事宝",
					date: "2021年08月24日",
					url: "../../News?newsID=13"
				}]
			}
		},
		methods: {
			ItemSetFunc(index) {
				for (var i = 0; i < this.titles.length; ++i) {
					this.titles[i].isActive = false;
				}
				this.titles[index].isActive = true;
			},
			getTitle0() {
				return this.titles[0].isActive;
			},
			getTitle1() {
				return this.titles[1].isActive;
			},
			changeIfOpen(e) {
				this.ifOpened = e;
			},
			changeIfAnonymity(e) {
				this.ifAnonymity = e;
			},
			clickMail() {
				console.log(111);
				this.ifClickWriting = true;
				uni.navigateTo({
				    url: '../write_mail/write_mail'
				});
			},
			//字数改变触发事件 
			inputTextArea(e) {
				this.ArticleBody = e.detail.value;
				this.existingNumber = this.MaxLen - e.detail.value.length;
			},
		}
	}
</script>

<style>
	@import url("../../../common/iconfont.css");
	@import url("../../../common/common_layout.css"); 

	/* .topImage {
		width: 100%;
		height: 100%;

	}

	.top {
		box-shadow: 0rpx 10rpx 30rpx #dcdddc;
		background-color: white;
		z-index: 100;
		float: left;
		width: 100%;
		position: fixed;
	} */

	.back-img { 
		background-image: url(http://p1362.bvimg.com/10465/71891679f8612389.png);
		background-position: 40rpx -0rpx;
		background-size: 120rpx;
		background-repeat: no-repeat;
		/* box-shadow: 0rpx 10rpx 30rpx #dcdddc; */
	}
	
	.back-img-text {
		display: block;
		margin-top: 120rpx !important;
	}

	.cross-line {
		margin: 10rpx 20rpx;
		height: 2rpx;
		background: #DCDDDC;
	}

	page {
		background: #fcfcfc;
	}

	.IWanna-write-ifOpen {
		margin-top: 40rpx;
		margin-left: 30rpx;
		height: 50rpx;
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.IWanna-write-ifAnonymity-top {
		margin-top: 40rpx;
		margin-left: 30rpx;
		height: 50rpx;
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.IWanna-write-letter {
		margin: 10rpx 30rpx 10rpx 30rpx;
	}

	.IWanna-write-ifOpen-left,
	.IWanna-write-ifAnonymity-left {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 200rpx;
		height: 100%;
	}

	.IWanna-write-letter-title {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.IWanna-write-ifOpen-left image,
	.IWanna-write-ifAnonymity-left image,
	.IWanna-write-letter-title image {
		width: 50rpx;
		height: 50rpx;
	}

	.IWanna-write-ifOpen-left text,
	.IWanna-write-ifAnonymity-left text,
	.IWanna-write-letter-title text {
		margin-left: 10rpx;
		text-align: center;
		line-height: 50px;
		/*设置line-height与父级元素的height相等*/
	}

	.IWanna-write-ifOpen-right,
	.IWanna-write-ifAnonymity-right {
		flex: 1;
		position: absolute;
		right: 20rpx;

	}

	.IWanna-write-ifOpen-right text,
	.IWanna-write-ifAnonymity-right text {
		font-size: 30rpx;
		margin-right: 10rpx;
	}

	.IWanna-write-letter-content {
		margin: 20rpx 10rpx;
		height: 600rpx;
		-moz-box-shadow: inset 0 0 10px #CCC;
		-webkit-box-shadow: inset 0 0 10px #CCC;
		box-shadow: inset 0 0 10px #CCC;
		position: relative;
	}

	.IWanna-write-letter-NumberTip {
		position: absolute;
		bottom: 4rpx;
		right: 4rpx;
		font-size: 28rpx;
		color: #C2C3C2;
	}

	.IWanna-write-letter-content textarea {
		padding: 10rpx;
		height: 550rpx;
		width: 100%;
		color: #333333;
	}

	.IWanna-write-submit {
		margin: 10rpx;
		margin-top: 130rpx;
		margin-bottom: 80rpx;
		height: 120rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.IWanna-write-letter-content-back {
		font-size: 40rpx;
		text-align: center;
		position: absolute;
		left: 20rpx;
		bottom: 20rpx;
	}

	.IWanna-write-submit button {
		width: 320rpx;
		height: 80rpx;
		background-color: #4ECF68;
		border-radius: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32rpx;
		color: white;
	}

	.IWanna-write-linkman,
	.IWanna-write-phone {
		display: flex;
		flex-direction: row;
		margin: 34rpx 40rpx;
		font-size: 30rpx;
	}

	.IWanna-write-myLetter-click {
		width: 200rpx;
		height: 200rpx;
		position: fixed;
		right: 6px;
		bottom: 30px;
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
	}

	.IWanna-write-myLetter-click text {
		font-size: 80rpx;
		font-weight: 600;
		color: #ea9400;
	}

	.IWanna-write-myLetter-click-text {
		margin-top: 6rpx;
		font-size: 28rpx;
		color: #737473;
	}

	.IWanna-write-letter-headline input {
		text-align: center;
		font-size: 36rpx;
		color: #3F3F3F;
		font-weight: 500;
	}
</style>
