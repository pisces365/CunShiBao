<template>
	<view class="ques">
		<view class="quesType">
			<view class="quesType-title">
				问题类型
			</view>
			<view class="quesType-array">
				<view class="quesType-item" v-for="(item,index) in typeArray" :key="index"
					@click="quesTypeChange(index)"
					:style="typeIndex==index?'background: #74A0D1;color:white':'background:#efeaea;color:#6AA0F8'">
					{{item}}
				</view>
			</view>

		</view>
		<view class="quesContent">
			<view class="Con-item">
				<view class="title">
					<text>*</text>
					<text>标题</text>
				</view>
				<view class="title-input">
					<input type="text" :value="quesInfo.title" placeholder="请填写标题" @input="inputTitle" />
				</view>
			</view>
			<view class="cross-line">

			</view>
			<view class="Con-detail">
				<view class="Con-detail-top">
					<view class="title">
						<text>*</text>
						<text>内容</text>
					</view>
					<view class="title-input">
						<input type="text" value="" disabled="true" placeholder="请描述您的问题,以便我们及时处理" />
					</view>
				</view>

				<view class="title-textarea">
					<textarea v-model="quesInfo.content" @input="inputContent" />
				</view>
			</view>
			<view class="uploadImg">
				<view class="Con-item">
					<view class="title">
						<text>*</text>
						<text>图片</text>
					</view>
					<view class="title-input">
						<input type="text" value="" placeholder="请添加图片以便我们及时了解情况" disabled="" />
					</view>
				</view>
				<view class="ImageSquares">
					<view v-for="(itemImg ,index) in imageList" :key="index">
						<view class="item">
							<image class="item-image" :src="itemImg" mode="scaleToFill"
								@click="previewImageChosen(index)">
							</image>
							<!-- 移除图片的按钮  -->
							<image class="deleteImg" src="@/static/image/delImg.png" @click="btnDeleteImg(index)"
								mode="widthFix" v-if="!ifDisabled"></image>
						</view>
					</view>
					<!-- 添加图片图标 -->
					<view class="item" @tap="btnAddImgs()" v-if="!ifDisabled&&imageList.length<=3">
						<image class="item-image" src="@/static/image/upload.png" mode="scaleToFill">
						</image>
					</view>
				</view>
			</view>
			<view class="Con-contact">
				<view class="Con-item">
					<view class="title">
						<text>*</text>
						<text>联系人</text>
					</view>
					<view class="title-input">
						<input type="number" :value="quesInfo.name" placeholder="联系人姓名" @input="inputName" />
					</view>

				</view>
				<view class="cross-line">
				</view>
				<view class="Con-item">
					<view class="title">
						<text>*</text>
						<text>联系方式</text>
					</view>
					<view class="title-input">
						<input type="number" :value="quesInfo.phone" placeholder="联系方式" @input="inputPhone"
							maxlength="11" />
					</view>
				</view>
			</view>
			<view class="submit" @click="submit">
				<button class="button">提交</button>
			</view>
		</view>
	</view>
</template>

<script>
	import util from '@/common/util.js';
	export default {
		data() {
			return {
				quesInfo: {
					title: '',
					content: '',
					name: '',
					phone: ''
				},
				imageList: [], //显示的图片路径
				tempImgList: [], //本地的图片缓存路径
				typeIndex: 0,
				typeArray: ['环境卫生', '宅基地', '农房翻建', '道路规划', '土地征用', '纠纷调解']
			}
		},
		methods: {
			inputTitle(e) {
				this.quesInfo.title = e.detail.value
				// console.log(this.quesInfo.title);
			},
			inputContent(e) {
				this.quesInfo.content = e.detail.value;
				// console.log(this.quesInfo.content);
			},
			inputName(e) {
				this.quesInfo.name = e.detail.value;
				// console.log(this.quesInfo.name);
			},
			inputPhone(e) {
				this.quesInfo.phone = e.detail.value;
				// console.log(this.quesInfo.phone);
			},
			quesTypeChange(index) {
				this.typeIndex = index
			},
			previewImageChosen(index) {
				var _this = this
				uni.previewImage({
					current: index,
					urls: _this.imageList,
					indicator: "number"
				})

			},
			// 删除图片
			btnDeleteImg(index) {
				var _this = this
				uni.showModal({
					title: "删除",
					content: "是否删除该选中的图片！",
					confirmText: "删除",
					success(res) {
						if (res.confirm) { //删除
							_this.imageList.splice(index, 1); //小程序展示的图片列表
						}
					}
				})
			},
			btnAddImgs() {
				let _this = this
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						console.log(JSON.stringify(res.tempFilePaths));
						//对于上传营业执照照片
						_this.tempImgList = res.tempFilePaths
						_this.imageList = _this.imageList.concat(_this.tempImgList)
						// console.log('上传营业执照照片', _this.imageList);
						// const uploadTask = uni.uploadFile({
						// 	url: hospitalImgUploadUrl, //仅为示例，非真实的接口地址
						// 	filePath: _this.tempImgList[0],
						// 	name: 'file',
						// 	success: (uploadFileRes) => {
						// 		if (uploadFileRes.statusCode == 200) {
						// 			var imgUrl = JSON.parse(uploadFileRes.data).data.data;
						// 			_this.imageList_Server = _this
						// 				.imageList_Server.concat(imgUrl)
						// 			console.log('服务器1', _this.imageList_Server);
						// 		}
						// 	},
						// 	fail: (res) => {
						// 		console.log(res)
						// 	}
						// });

					},
					fail: function(res) {
						console.log(res);
					}
				});
			},
			submit() {
				let _this = this
				uni.showModal({
					title: "提交提示",
					content: "是否确认提交",
					success(res) {
						if (res.confirm) { //删除
							if (_this.quesInfo.title == '' || _this.quesInfo.phone == '' || _this.quesInfo
								.content == '' || _this.quesInfo.name == '') {
								uni.showToast({
									title: '请您将信息填写完整',
									icon: 'none',
									duration: 2000
								})
							} else if (!util.isMobile(_this.quesInfo.phone)) {
								uni.showToast({
									title: '填写联系方式不正确',
									icon: 'none',
									duration: 2000
								})
							} else {
								uni.showToast({
									title: '提交信息成功',
									icon: 'success',
									duration: 2000
								})
								setTimeout(function() {
									uni.navigateBack({
										delta: 1
									})

								}, 100);

							}

						}
					}
				})
			}
		}
	}
</script>

<style>
	.ques {
		padding: 20rpx;
	}

	.quesType-title {
		font-size: 38rpx;
	}

	.quesType-array {
		margin-top: 20rpx;
		display: flex;
		flex-wrap: wrap;
		margin-left: 20rpx;
	}

	.quesType-item {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 10rpx;
		padding: 6rpx 24rpx;
		width: 160rpx;
		height: 70rpx;
		color: white;
		border-radius: 50rpx;
	}

	.cross-line {
		margin: 14rpx 0;
		width: 100%;
		background: #f0f1f0;
		height: 2rpx;
	}

	.quesContent,
	.Con-contact {
		margin: 20rpx;
		margin-top: 50rpx;
	}

	.submit {
		margin-top: 50rpx;
	}

	.button {
		background: #74A0D1;
		color: white;
	}

	.Con-item,
	.Con-detail-top {
		display: flex;
	}

	.title {
		display: flex;
		margin-right: 30rpx;
	}

	.title text:nth-child(1) {
		color: red;
		font-size: 34rpx;
	}

	.title text:nth-child(2) {
		margin-left: 20rpx;
		font-size: 34rpx;
	}

	.title-input {
		flex: 1;
	}

	.title-textarea {
		margin-top: 40rpx;
		padding: 20rpx;
		height: 400rpx;
		width: 630rpx;
		border: 2rpx #dedfde solid;
	}

	/* 图片选择 start */
	.item-image {
		height: 150rpx;
		width: 150rpx;
	}

	.deleteImg {
		width: 34rpx;
		height: 34rpx;
		position: absolute;
		top: 0;
		right: 0;
	}

	.item {
		margin: 4rpx;
		position: relative;
	}

	.ImageSquares {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		height: 100%;
		align-items: center;
		flex-direction: row;
	}

	.uploadImg,
	.ImageSquares {
		margin-top: 30rpx;
	}
</style>
