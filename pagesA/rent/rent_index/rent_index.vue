<!-- 房屋租赁首页 -->
<template>
	<view class="rent">
		<view class="rent-top">
			<view class="rent-title">
				<image class="rent-title-image" src="http://p1362.bvimg.com/10465/3e9316ff79bf409e.png" mode=""></image>
			</view>
			<view class="rent-classify">
				<view class="rent-classify-Area rent-classify-Part">
					<picker class="content-inputText" mode="selector" :range="AreaArray" @change="AreaPicker">
						<view class="uni-input">{{AreaArray[info.AreaIndex]}}</view>
						<text class="iconfont icon-arrow-down-copy"></text>
					</picker>
				</view>
				<view class=" vertical-line"></view>
				<view class="rent-classify-Price rent-classify-Part">
					<picker class=" content-inputText" mode="selector" :range="rentTypeArray" @change="rentTypePicker">
						<view class="uni-input">{{rentTypeArray[info.rentTypeIndex]}}</view>
						<text class="iconfont icon-arrow-down-copy"></text>
					</picker>
				</view>
				<view class=" vertical-line"></view>
				<view class="rent-classify-Price rent-classify-Part">
					<picker class=" content-inputText" mode="selector" :range="PriceArray" @change="PricePicker">
						<view class="uni-input">{{PriceArray[info.PriceIndex]}}</view>
						<text class="iconfont icon-arrow-down-copy"></text>
					</picker>
				</view>

				<view class=" vertical-line"></view>
				<view class=" rent-classify-Part uni-input rent-classify-Location" @click="clickNestest">
					距离最近
				</view>
			</view>
		</view>
		<scroll-view scroll-y="true" class="rent-bottom" v-if="houseList.length!=0">
			<view class="houseInfo" v-for="(item,index) in houseList" :key="index" @click="handleToDetail(item.id)">
				<view class="houseInfo-top">
					<view class="houseInfo-left">
						<image class="houseInfo-left-image" :src="item.pictureUrl[0]" mode=""></image>
					</view>
					<view class="houseInfo-right">
						<view class="houseInfo-right-type">
							<text>{{item.type}}</text>
							<text class=" iconfont icon-weibiaoti"></text>
							<text>{{item.desc}}</text>
						</view>
						<view class="houseInfo-right-label">
							<view class="houseInfo-label" v-for="(labelItem,labelIndex) in item.label"
								:key="labelIndex">
								{{labelItem}}
							</view>
						</view>
						<view class="houseInfo-right-location">
							<text>{{item.location}}</text>
							<!-- 					<text class=" iconfont icon-weibiaoti"></text>
							<text>{{item.locationDetail}}</text> -->
							<text>，距我 {{item.distance}} km</text>
						</view>

						<view class="houseInfo-right-info_Based">
							<text class="price">￥{{item.price}}</text>
							<text> /月</text>
							<text v-if="item.RoomInfo==1">一室</text>
							<text v-else-if="item.RoomInfo==2">二室</text>
							<text v-else-if="item.RoomInfo==3">三室</text>
							<text v-else-if="item.RoomInfo==4">四室</text>
							<text>{{item.area}}</text>
							<text>m</text>
							<text>2</text>
						</view>
					</view>
				</view>
				<view class="cross-line"></view>
			</view>
		</scroll-view>
		<view class="noHouse" v-if="houseList.length==0">
			<view class="noHouse-image">
				<image src="http://p1362.bvimg.com/10465/cd215e8891103c48.png" mode=""></image>
			</view>
			<view class="noHouse-tip">
				该村庄没有民宿信息噢，去别的地方看看吧
			</view>
		</view>
	</view>
</template>

<script>
	import {
		houseList,
		allVillegeInfo
	} from '@/common/api.js'
	export default {
		onLoad() {
			let _this = this
			uni.showLoading({
				title: '加载民宿列表..'
			})
			let data = {}
			houseList(data).then((res) => {
				if (res.code == "200") {
					// 选择版本
					_this.houseList = res.data;
					for (var i = 0; i < _this.houseList.length; i++) {
						_this.houseList[i].pictureUrl = _this.houseList[i].pictureUrl.split(',')
						_this.houseList[i].label = _this.houseList[i].tag.split(' ');
						switch (_this.houseList[i].type) {
							case 1:
								_this.houseList[i].type = '整租'
								break;
							case 2:
								_this.houseList[i].type = '合租'
								break;
							case 3:
								_this.houseList[i].type = '长租'
								break;
							case 4:
								_this.houseList[i].type = '短租'
								break;
						}
					}
					uni.hideLoading();
				}
			})
			var data1 = {
				"additionalProp1": "string",
				"additionalProp2": "string",
				"additionalProp3": "string"
			}
			allVillegeInfo(data1).then((res) => {
				_this.villegeInfo = res;
				_this.villegeInfo = _this.villegeInfo.splice(1, 8)
				for (var i = 0; i < _this.villegeInfo.length; i++) {
					_this.AreaArray = _this.AreaArray.concat(_this.villegeInfo[i].v_name);
				}
				console.log(_this.villegeInfo);
			})
		},
		data() {
			return {
				houseList: [],
				villageId: '', //村庄id
				maxPrice: '', //最高价格
				minPrice: '', //最低价格
				ifNestest: 0, //是否选择最近距离排序 0:不就近排序 1就近排序
				info: {
					AreaIndex: 0,
					PriceIndex: 0,
					rentTypeIndex: 0
				},
				villegeInfo: [],
				AreaArray: ['地区分类'],
				PriceArray: ['价格区间', '1k以下', '1k-1.5k', '1.5k-2k', '2k-2.5k', '2.5k-3k', '3k-3.5k',
					'3.5k-4k', '4k以上'
				],
				rentTypeArray: ['出租类型', '整租', '合租', '长租', '短租'],
			}
		},
		methods: {
			AreaPicker(e) {
				let _this = this;
				_this.info.AreaIndex = e.detail.value
				_this.AreaArray[0] = '全部村庄'
				//表示选择全部
				if (_this.info.AreaIndex == 0) {
					let data = {}
					if (_this.info.rentTypeIndex == 0) {
						data = {
							maxPrice: _this.maxPrice,
							minPrice: _this.minPrice,
							closest: _this.ifNestest,
						}
					} else {
						data = {
							maxPrice: _this.maxPrice,
							minPrice: _this.minPrice,
							closest: _this.ifNestest,
							type: _this.rentTypeArray[_this.info.rentTypeIndex]
						}
					}
					houseList(data).then((res) => {
						if (res.code == "200") {
							// 选择版本
							_this.houseList = res.data;
							for (var i = 0; i < _this.houseList.length; i++) {
								_this.houseList[i].pictureUrl = _this.houseList[i].pictureUrl.split(',')
								_this.houseList[i].label = _this.houseList[i].tag.split(' ');
								switch (_this.houseList[i].type) {
									case 1:
										_this.houseList[i].type = '整租'
										break;
									case 2:
										_this.houseList[i].type = '合租'
										break;
									case 3:
										_this.houseList[i].type = '长租'
										break;
									case 4:
										_this.houseList[i].type = '短租'
										break;
								}
							}
						}
					})
				} else {
					//当前所选择的村庄的下标
					var villegeIndex = parseInt(_this.info.AreaIndex) - 1
					//当前所选择的村庄的id
					_this.villageId = _this.villegeInfo[villegeIndex].v_id
					let data = {}
					if (_this.info.rentTypeIndex == 0) {
						data = {
							villageId: _this.villageId,
							maxPrice: _this.maxPrice,
							minPrice: _this.minPrice,
							closest: _this.ifNestest,
						}
					} else {
						data = {
							villageId: _this.villageId,
							maxPrice: _this.maxPrice,
							minPrice: _this.minPrice,
							closest: _this.ifNestest,
							type: _this.rentTypeArray[_this.info.rentTypeIndex]
						}
					}
					houseList(data).then((res) => {
						if (res.code == "200") {
							// 选择版本
							_this.houseList = res.data;
							for (var i = 0; i < _this.houseList.length; i++) {
								_this.houseList[i].pictureUrl = _this.houseList[i].pictureUrl.split(',')
								_this.houseList[i].label = _this.houseList[i].tag.split(' ');
								switch (_this.houseList[i].type) {
									case 1:
										_this.houseList[i].type = '整租'
										break;
									case 2:
										_this.houseList[i].type = '合租'
										break;
									case 3:
										_this.houseList[i].type = '长租'
										break;
									case 4:
										_this.houseList[i].type = '短租'
										break;
								}
							}
						}
					})
				}

			},
			PricePicker(e) {
				let _this = this
				_this.info.PriceIndex = e.detail.value
				console.log(_this.info.PriceIndex);
				switch (_this.info.PriceIndex) {
					case '0':
						_this.minPrice = ''
						_this.minPrice = ''
						break;
					case '1':
						_this.minPrice = 0
						_this.maxPrice = 1000
						break;
					case '2':
						_this.minPrice = 1000
						_this.maxPrice = 1500
						break;
					case '3':
						_this.minPrice = 1500
						_this.maxPrice = 2000
						break;
					case '4':
						_this.minPrice = 2000
						_this.maxPrice = 2500
						break;
					case '5':
						_this.minPrice = 2500
						_this.maxPrice = 3000
						break;
					case '6':
						_this.minPrice = 3000
						_this.maxPrice = 3500
						break;
					case '7':
						_this.minPrice = 3500
						_this.minPrice = 4000
						break;
					case '8':
						_this.minPrice = 4000
						break;
					default:
						_this.minPrice = ''
						_this.minPrice = ''
						break;

				}
				let data = {}
				if (_this.info.rentTypeIndex == 0) {
					data = {
						villageId: _this.villageId,
						maxPrice: _this.maxPrice,
						minPrice: _this.minPrice,
						closest: _this.ifNestest,
					}
				} else {
					data = {
						villageId: _this.villageId,
						maxPrice: _this.maxPrice,
						minPrice: _this.minPrice,
						closest: _this.ifNestest,
						type: _this.rentTypeArray[_this.info.rentTypeIndex]
					}
				}
				houseList(data).then((res) => {
					if (res.code == "200") {
						// 选择版本
						_this.houseList = res.data;
						for (var i = 0; i < _this.houseList.length; i++) {
							_this.houseList[i].pictureUrl = _this.houseList[i].pictureUrl.split(',')
							_this.houseList[i].label = _this.houseList[i].tag.split(' ');
							switch (_this.houseList[i].type) {
								case 1:
									_this.houseList[i].type = '整租'
									break;
								case 2:
									_this.houseList[i].type = '合租'
									break;
								case 3:
									_this.houseList[i].type = '长租'
									break;
								case 4:
									_this.houseList[i].type = '短租'
									break;
							}
						}
					}
				})
			},
			rentTypePicker(e) {
				let _this = this
				let data = {}
				_this.info.rentTypeIndex = e.detail.value;
				if (_this.info.rentTypeIndex == 0) {
					data = {
						villageId: _this.villageId,
						maxPrice: _this.maxPrice,
						minPrice: _this.minPrice,
						closest: _this.ifNestest,
					}
				} else {
					data = {
						villageId: _this.villageId,
						maxPrice: _this.maxPrice,
						minPrice: _this.minPrice,
						closest: _this.ifNestest,
						type: _this.rentTypeArray[_this.info.rentTypeIndex]
					}
				}
				houseList(data).then((res) => {
					if (res.code == "200") {
						// 选择版本
						_this.houseList = res.data;
						for (var i = 0; i < _this.houseList.length; i++) {
							_this.houseList[i].pictureUrl = _this.houseList[i].pictureUrl.split(',')
							_this.houseList[i].label = _this.houseList[i].tag.split(' ');
							switch (_this.houseList[i].type) {
								case 1:
									_this.houseList[i].type = '整租'
									break;
								case 2:
									_this.houseList[i].type = '合租'
									break;
								case 3:
									_this.houseList[i].type = '长租'
									break;
								case 4:
									_this.houseList[i].type = '短租'
									break;
							}
						}
					}
				})
			},
			handleToDetail(id) {
				uni.navigateTo({
					url: '../rent_content/rent_content?houseId=' + id
				})
			},
			clickNestest() {
				let _this = this
				if (_this.ifNestest == 0) {
					_this.ifNestest = 1
				} else {
					_this.ifNestest = 0
				}
				let data = {}
				if (_this.info.rentTypeIndex == 0) {
					data = {
						villageId: _this.villageId,
						maxPrice: _this.maxPrice,
						minPrice: _this.minPrice,
						closest: _this.ifNestest,
					}
				} else {
					data = {
						villageId: _this.villageId,
						maxPrice: _this.maxPrice,
						minPrice: _this.minPrice,
						closest: _this.ifNestest,
						type: _this.rentTypeArray[_this.info.rentTypeIndex]
					}
				}
				houseList(data).then((res) => {
					if (res.code == "200") {
						// 选择版本
						_this.houseList = res.data;
						for (var i = 0; i < _this.houseList.length; i++) {
							_this.houseList[i].pictureUrl = _this.houseList[i].pictureUrl.split(',')
							_this.houseList[i].label = _this.houseList[i].tag.split(' ');
							switch (_this.houseList[i].type) {
								case 1:
									_this.houseList[i].type = '整租'
									break;
								case 2:
									_this.houseList[i].type = '合租'
									break;
								case 3:
									_this.houseList[i].type = '长租'
									break;
								case 4:
									_this.houseList[i].type = '短租'
									break;
							}
						}
					}
				})
			}

		}
	}
</script>

<style lang="scss">
	@import '@/common/iconfont.css';

	.rent {
		display: flex;
		flex-direction: column;
	}

	.rent-top {
		// padding: 20rpx 30rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);

		.rent-title {
			width: 100%;
			height: 300rpx;

			.rent-title-image {
				width: 100%;
				height: 100%;
			}

			.rent-title-search {

				background: #eeefee;
				border-radius: 10rpx;

				.swiper {
					height: 70rpx;
					display: flex;
					align-items: center;
					justify-content: center;

					.rent-title-search-content {
						.iconfont {
							margin-right: 16rpx;
							font-size: 40rpx;
						}

						width: 100%;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}
			}

			.rent-title-function {
				display: flex;
				flex-direction: row;
				margin-top: 20rpx;

				.functionPart {
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;

					.functionPart-image {
						width: 130rpx;
						height: 130rpx;

					}
				}

			}
		}

		.rent-classify {
			// box-shadow: 0 0 4rpx rgba(0, 0, 0, 0.15);
			margin: 20rpx 0;
			width: 100%;
			display: flex;
			flex-direction: row;

			.vertical-line {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 2rpx;
				margin-top: 10rpx;
				height: 30rpx;
				background: #C6C7C6;
			}

			.rent-classify-Part {
				display: flex;
				align-items: center;
				justify-content: center;
				flex: 1;

				.uni-input {
					display: inline-block;
					font-size: 28rpx;
				}

				.icon-arrow-down-copy {
					margin-left: 16rpx;
					font-size: 24rpx;
				}
			}
		}

	}

	.rent-bottom {
		height: 1100rpx;

		.houseInfo {
			margin: 10rpx 0;
			// height: 260rpx;

			.houseInfo-top {
				margin: 20rpx 0;
				width: 100%;
				display: flex;
				flex-direction: row;
			}

			.houseInfo-left {
				margin-left: 30rpx;
				width: 230rpx;
				// height: 220rpx;

				display: flex;
				align-items: center;
				justify-content: center;

				.houseInfo-left-image {
					width: 230rpx;
					height: 180rpx;
					border-radius: 14rpx;
					overflow: hidden;
				}
			}

			.houseInfo-right {
				margin: 0 28rpx;
				width: 500rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;

				.houseInfo-right-type {
					color: #343534;
					margin: 6rpx 0;
					width: 100%;
					display: -webkit-box;
					word-break: break-all;
					text-overflow: ellipsis;
					font-size: 30rpx; //自适应字体
					overflow: hidden;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1; //设置 需要显示的行数
					font-weight: bold;
				}

				.houseInfo-right-location {
					color: #7e7f7e;
					margin: 6rpx 0;
					font-size: 26rpx;
					width: 100%;
					overflow: hidden; //超出一行文字自动隐藏
					text-overflow: ellipsis; //文字隐藏后添加省略号
					white-space: nowrap; //强制不换行
				}

				.houseInfo-right-label {
					display: flex;
					overflow: hidden; //超出一行文字自动隐藏
					text-overflow: ellipsis; //文字隐藏后添加省略号
					white-space: nowrap; //强制不换行

					.houseInfo-label {
						display: flex;
						justify-content: center;
						align-items: center;
						margin: 4rpx 12rpx;
						padding: 0rpx 6rpx;
						margin-left: 0;
						font-size: 26rpx;
						color: #A1BF56;
						border: 2rpx solid #A1BF56;
						border-radius: 10rpx;
					}
				}

				.houseInfo-right-info_Based {
					position: relative;
					margin-top: 6rpx;
					color: #8b8c8b;
					font-size: 26rpx;

				}
			}
		}
	}


	#item1,
	#item2,
	#item3 {
		width: 100%;
		height: 100%;
		line-height: 70rpx;
		display: flex;
		align-items: center;
		vertical-align: center;
	}

	.houseInfo-right-info_Based text:nth-child(1) {
		font-size: 32rpx;
		color: #FF9502;
		font-weight: 600;
	}

	.houseInfo-right-info_Based text:nth-child(2) {
		margin-left: 6rpx;
		font-size: 28rpx;
		color: #FF9502;
	}

	.houseInfo-right-info_Based text:nth-child(3) {
		margin-left: 14rpx;
	}

	.houseInfo-right-info_Based text:nth-child(4) {
		margin-left: 6rpx;
	}

	.houseInfo-right-info_Based text:nth-child(5) {
		margin-left: 6rpx;
	}

	.houseInfo-right-info_Based text:nth-child(6) {
		font-size: 18rpx;
		position: absolute;
		top: 4rpx;
	}

	.rent-classify-Location {
		font-size: 28rpx;
	}

	.functionPart-description {
		font-size: 28rpx;
		color: #5d5e5d;
	}

	.cross-line {
		width: 100%;
		height: 2rpx;
		background: #DCDDDC;
		margin: 12rpx 0;
	}

	.noHouse {
		width: 100%;
		margin-top: 100rpx;
		height: 600rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.noHouse-image {
		width: 140rpx;
		height: 140rpx;
	}

	.noHouse-image image {
		width: 140rpx;
		height: 140rpx;
	}

	.noHouse-tip {
		margin-top: 20rpx;
		color: #8E8F8E;
		font-size: 28rpx;
	}
</style>
