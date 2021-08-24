<template>
	<view>
		<view class="top">
			<view>
				<image class="topImage" src="http://p1362.bvimg.com/10465/b9c3700c55d6549a.png" mode="widthFix"></image>
			</view>
			<navigation :titles="titles" @setItem="ItemSetFunc"></navigation>
		</view>
		<view style="height: 420rpx;margin-bottom: 10rpx;"></view>
		<information v-show="getTitle0()" :info="EmailOutline"></information>
		<view class="IWanna-write" v-show="getTitle1()">
			<view class="IWanna-write-ifOpen">
				<view class="IWanna-write-ifOpen-left">
					<image v-if="ifOpened==true" src="http://p1362.bvimg.com/10465/39ea698296ea4db0.png" mode="">
					</image>
					<image v-else src="http://p1362.bvimg.com/10465/f1313d8804ca1e09.png" mode=""></image>
					<text>是否公开</text>
				</view>
				<view class="IWanna-write-ifOpen-right">
					<text>公开</text>
					<radio class="radio" value="1" :checked="ifOpened==='1'" color="#FE7837" @click="changeIfOpen('1')">
					</radio>
					<text>不公开</text>
					<radio class="radio" value="2" :checked="ifOpened==='2'" color="#FE7837" @click="changeIfOpen('2')">
					</radio>
				</view>
			</view>
			<view class="cross-line"></view>
			<view class="IWanna-write-ifAnonymity">
				<view class="IWanna-write-ifAnonymity-top">
					<view class="IWanna-write-ifAnonymity-left">
						<image src="http://p1362.bvimg.com/10465/a910089553e1af85.png" mode="">
						</image>
						<text>是否匿名</text>
					</view>
					<view class="IWanna-write-ifAnonymity-right">
						<text>匿名</text>
						<radio class="radio" value="1" :checked="ifAnonymity==='1'" color="#FE7837"
							@click="changeIfAnonymity('1')">
						</radio>
						<text>不匿名</text>
						<radio class="radio" value="2" :checked="ifAnonymity==='2'" color="#FE7837"
							@click="changeIfAnonymity('2')">
						</radio>
					</view>
				</view>
				<view class="IWanna-write-ifAnonymity-bottom">
					<view class="IWanna-write-linkman" v-if="ifAnonymity=='2'">
						联系人姓名：
						<input type="text" value="" placeholder="请填写您的姓名" maxlength="10" />
					</view>
					<view class="IWanna-write-phone" v-if="ifAnonymity=='2'">
						联系人电话：
						<input type="text" value="" placeholder="请填写您的电话号码" maxlength="11" />
					</view>
				</view>
			</view>

			<view class="cross-line"></view>
			<view class="IWanna-write-letter">
				<view class="IWanna-write-letter-title">
					<image src="http://p1362.bvimg.com/10465/88eba4332b79c8b8.png" mode="">
					</image>
					<text>信件内容</text>
				</view>
				<view class="IWanna-write-letter-content">
					<textarea value="" placeholder="请输入您的信件内容" />
				</view>
			</view>
			<view class="IWanna-write-submit">
				<button type="default" @click="submitMail">提交信件</button>
			</view>
		</view>
	</view>
</template>

<script>
	import navigation from '@/component/policyInterpretation/navigation/navigation.vue'
	import information from '@/component/policyInterpretation/information/information.vue'
	export default {
		components: {
			navigation,
			information
		},
		data() {
			return {
				ifOpened: '1',
				ifAnonymity: '1',
				opened: 'letterOpened',
				titles: [{
						id: 0,
						name: "信件公示",
						isActive: true
					},
					{
						id: 1,
						name: "我要写信",
						isActive: false
					}
				],
				EmailOutline: [ //具体信息
					{
						title: "老沈村长给村头小刚娃的一封回信",
						source: "村事宝",
						date: "2021 年08 月 24 日",
						reading: "14,603",
						like: "6,318",
						url: "../../News?newsID=9"
					}
				]
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
			submitMail() {
				uni.showModal({
					title: '提示',
					content: '您确定要提交信件给村长书记吗',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>

<style>
	.topImage {
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
		margin-top: 10rpx;
		margin-left: 30rpx;
		height: 700rpx;
		width: 100%;
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
		height: 700rpx;
	}

	.IWanna-write-submit {
		margin: 10rpx;
		width: 100%;
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.IWanna-write-submit button {
		width: 300rpx;
		height: 70rpx;
		background-color: #4ECF68;
		border-radius: 30rpx;
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
		margin: 20rpx 40rpx;
		font-size: 30rpx;
	}
</style>
