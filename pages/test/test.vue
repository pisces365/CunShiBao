<!-- <template>
	<view class="content" @click="inputContent()">
		<view class="input-text" id="input-text" :style="{top:ifClicked?'100vh':'0vh'}">
			<view class="input-text-top">
				<view class="cancel">
					取消
				</view>
				<view class="publishContent">
					发送
				</view>
			</view>
			<view class="input-text-bottom">
				<textarea value="" placeholder='好观点将会被优先展示' />
			</view>
		</view>
	</view>

</template>

<script>
	export default {

		data() {
			return {
				ifClicked: true,
				Keyboard: 0, // 键盘高度
			}
		},
		onLoad() {},
		methods: {
			inputContent() {
				this.ifClicked = false
			}
		}
	}
</script>

<style>
	.content {
		height: 100vh;
		width: 100vw;
	}

	.input-text {
		width: 100%;
		height: 150rpx;
		position: absolute;
	}

	.input-text-top {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		height: 60rpx;
		position: relative;
		color: #dadada;
	}

	.publishContent {
		width: 100rpx;
		position: absolute;
		right: 0rpx;
	}

	.cancel {
		margin-left: 40rpx;
		width: 100rpx;
	}

	.input-text-bottom {
		margin: 8rpx 40rpx;
		padding: 8rpx 10rpx;
		height: 110rpx;
		background: #f0f0f0;
	}

	.textarea {
		height: 110rpx;
		width: 100%;
	}
</style>
 -->
<template class="comment-page">
	<div class="comment-component">
		<div class="comment-write" :style="{bottom: inputWrapHeight}">
			<div class="comment-input">
				<textarea :maxlength="maxlength" placeholder-style="color:#9796A9" :placeholder="`评论一下…`"
					@focus="inputFocus" @keyboardheightchange="keyboardheightchange" @blur="inputBlur"
					hold-keyboard="true" auto-blur="true" adjust-position="false" show-confirm-bar="false"
					ref="inputRef" fixed="true" :focus="focus" :disabled="disabled" @input="inputChange" />
			</div>
			<div class="comment-send">
				<span class="content-num">剩余{{ calcNums }}字</span>
				<div class="send-btn" @click="sendComment">发送</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				maxlength: 100,
				focus: false,
				inputWrapHeight: '0rpx',
				disabled: false,
				calcNums: 100,
				platform: 'android',
				systemInfo: {},
				Keyboard: 0, // 键盘高度
				targetNode: null,
				machineHeight: 0
			};
		},
		methods: {
			inputChange(e) {
				if (!e.detail) return;
				this.calcNums = this.maxlength - e.detail.value.length;
			},
			sendComment() {
				this.focus = false;
			},
			inputFocus(e) {
				let that = this;
				let {
					screenHeight,
					screenWidth,
					statusBarHeight,
					windowHeight
				} = this.systemInfo;
				this.machineHeight = screenHeight - windowHeight; // 虚位高度
				let dp = screenWidth / screenHeight;
				if (e) {
					let {
						height
					} = e.detail; // 获取键盘高度
					if (height) this.inputWrapHeight = `${(height) * dp}rpx`;
				}
			},
			inputBlur() {
				this.inputWrapHeight = 0;
			},

			keyboardheightchange(e) {
				console.log(e);
			},

			show() {},
			hide() {},
			calcMaskHeight() {
				let that = this;
				let targetNode = uni.createSelectorQuery().select('.comment-component'); // 获取某个元素
				targetNode
					.boundingClientRect(function(data) {
						// console.log(data.height.toFixed(2)); // 获取元素宽度
						that.inputWrapHeight = data.height;
					})
					.exec();
			}
		},
		mounted() {
			let that = this;
			// this.calcMaskHeight();

			const info = wx.getSystemInfoSync();
			console.log(info);
			if (info) this.platform = info.platform;
			this.systemInfo = info;
		}
	};
</script>
<style lang="scss" scoped>
	.comment-component {
		font-family: PingFang-SC-Regular, PingFang-SC;
		background: transparent;
		background: rgba(0, 0, 0, 0.8);
		z-index: 99999;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		.comment-write {
			position: absolute;
			bottom: 0;
			width: 100vw;
			height: 160rpx;
			background: #fff;
			display: flex;
			flex-direction: column;

			.comment-input {
				// width: 335rpx;
				width: calc(100% - 80rpx);
				height: 80rpx;
				background: #f7f8fa;
				margin: 30rpx auto;

				textarea {
					width: 100%;
					height: 100%;
					padding: 10rpx;
					font-size: 14rpx;
					font-weight: 400;
					color: #333;
				}
			}

			.comment-send {
				padding: 0 20rpx;
				height: 60rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;

				.content-num {
					font-size: 12rpx;
					font-weight: 400;
					color: #b4b2c0;
				}

				.send-btn {
					cursor: pointer;
					width: 65rpx;
					height: 30rpx;
					background: #000000;
					border-radius: 2rpx;
					font-size: 14rpx;
					font-weight: 400;
					color: #ffffff;
				}
			}
		}
	}
</style>
