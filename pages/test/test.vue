<template class="comment-page">
	<div class="comment-component">
		<div class="comment-write" :style="{bottom: inputWrapHeight}">
			<div class="comment-send">
				<span class="content-num">剩余{{ calcNums }}字</span>
				<div class="send-btn" @click="sendComment">发送</div>
			</div>
			<div class="comment-input">
				<textarea :maxlength="maxlength" placeholder-style="color:#9796A9" :placeholder="`好观点将会被优先展示`"
					@focus="inputFocus" @keyboardheightchange="keyboardheightchange" @blur="inputBlur"
					hold-keyboard="true" auto-blur="true" adjust-position="false" show-confirm-bar="false"
					ref="inputRef" fixed="true" :focus="focus" :disabled="disabled" @input="inputChange" />
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
				// inputWrapHeight_init:'0rpx',
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
				this.machineHeight = (screenHeight - windowHeight) / 2; // 虚位高度
				let dp = screenWidth / screenHeight;
				if (e) {
					let {
						height
					} = e.detail; // 获取键盘高度
					if (height) this.inputWrapHeight = `${(height) * dp*0.50}rpx`;
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
			const info = wx.getSystemInfoSync();
			console.log(info);
			if (info) this.platform = info.platform;
			this.systemInfo = info;
		}
	};
</script>
<style lang="scss" scoped>
	.comment-component {
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
			background: #fff;
			display: flex;
			flex-direction: column;

			.comment-input {
				// width: 335rpx;
				width: calc(100% - 60rpx);
				height: 80rpx;
				background: #f7f8fa;
				margin: 20rpx auto 30rpx auto;

				textarea {
					width: 100%;
					height: 100%;
					padding: 10rpx;
					font-size: 30rpx;
					font-weight: 400;
					color: #333;
				}
			}

			.comment-send {
				margin-top: 20rpx;
				padding: 0 30rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;

				.content-num {
					font-size: 24rpx;
					font-weight: 400;
					color: #b4b2c0;
				}

				.send-btn {
					width: 60rpx;
					height: 100%;
					font-size: 28rpx;
					font-weight: 400;
					color: #b4b2c0;
				}
			}
		}
	}
</style>
