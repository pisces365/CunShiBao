<template>
	<view>
		<view class="titleImg">
			<image src="http://p1362.bvimg.com/10465/3e9316ff79bf409e.png" mode=""></image>
		</view>
		<view class="content">
			<view class="content-title">
				房产信息
			</view>
			<view class="content-item">
				<view class="content-item-title">
					城市
				</view>
				<view class="content-item-part" @click="chooseCity">
					<text v-if="city==''">请选择 </text>
					<text v-else>{{city}}</text><text class="gray">></text>
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					详细地址
				</view>
				<view class="content-item-part">
					<uni-easyinput :inputBorder="false" v-model="cell" placeholder="请输入" />
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					户型
				</view>
				<view class="content-item-part">
					<picker mode="multiSelector" class="uni-input" @change="pickerCity" @columnchange="pickerCity_bind"
						:range="cityRange">
						<label class="">{{cityRange[0][typeIndex]}}{{problemItems[typeIndex][typeItems]}}<text
								class="gray">></text></label>
					</picker>
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					面积
				</view>
				<view class="content-item-part">
					<uni-easyinput :inputBorder="false" v-model="area" placeholder="请输入" />
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					楼层
				</view>
				<view class="content-item-part">
					<uni-easyinput :inputBorder="false" v-model="floor" placeholder="请输入" />
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					朝向
				</view>
				<view class="content-item-part">
					<picker @change="pickerChaoXiang" :value="index_chaoxiang" :range="array_chaoxiang">
						<view class="uni-input">{{array_chaoxiang[index_chaoxiang]}} <text class="gray">></text></view>
					</picker>

				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					装修
				</view>
				<view class="content-item-part">
					<picker @change="pickerZhuangxiu" :value="index_ZhuangXiu" :range="array_ZhuangXiu">
						<view class="uni-input">{{array_ZhuangXiu[index_ZhuangXiu]}} <text class="gray">></text></view>
					</picker>
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					房屋类型
				</view>
				<view class="content-item-part">
				<picker @change="pickerHouseType" :value="index_HouseType" :range="array_HouseType">
					<view class="uni-input">{{array_HouseType[index_HouseType]}} <text class="gray">></text></view>
				</picker>
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					电梯
				</view>
				<view class="content-item-part">
					<radio-group name="radioOfElevator">
						<label>
							<radio class="radio-style" :value="hasElevator" /><text>有</text>
						</label>
						<label>
							<radio class="radio-style" :value="noElevator" /><text>无</text>
						</label>
					</radio-group>
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					售价
				</view>
				<view class="content-item-part">
					<uni-easyinput :inputBorder="false" v-model="priceOfSale" placeholder="请输入 单位 : 万" />
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					照片
				</view>
				<view class="content-item-part">
					请选择<text>></text>
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					联系人
				</view>
				<view class="content-item-part">
					<uni-easyinput :inputBorder="false" v-model="contactPeople" placeholder="请输入姓氏" />
					<radio-group name="radioOfGender">
						<label>
							<radio class="radio-style" :value="man" /><text>先生</text>
						</label>
						<label>
							<radio class="radio-style" :value="lady" /><text>女士</text>
						</label>
					</radio-group>
				</view>
			</view>
			<view class="cross-line">
			</view>
			<view class="content-item">
				<view class="content-item-title">
					联系电话
				</view>
				<view class="content-item-part">
					<uni-easyinput :inputBorder="false" v-model="phone" placeholder="请输入" />
				</view>
			</view>
		</view>
		<view class="bottom">
			<label class="radio">
				<radio value="" class="radio-style" />
				<text class="bottom-tip">
					请确认你已阅读并接受《出售房源信息发布及交易服务协议》
				</text>
			</label>
			<view class="button" @tap="submit">
				提交
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				city: '',
				cell: '',
				area: '',
				floor: '',
				priceOfSale:'',
				contactPeople:'',
				phone:'',
				array_chaoxiang: ['请选择', '东', '西', '南', '北', '东南', '西南', '西北', '东北'],
				index_chaoxiang: 0,
				array_ZhuangXiu:['请选择', '毛坯', '简单装修', '精装修', '豪华装修'],
				index_ZhuangXiu:0,
				array_HouseType:['请选择', '普通住宅', '公寓', '别墅', '平房', '商住楼', '其他', '排屋'],
				index_HouseType:0,
				typeIndex: 0,
				typeItems: 0,
				cityRange: [
					['请选择', '1室', '2室', '3室', '4室', '5室', '6室', '7室', '8室', '9室'],
					['']
				],
				problemItems: [
					[''],
					['请选择厅卫', '0厅0卫', '0厅1卫', '1厅0卫', '1厅1卫', '1厅2卫', '2厅0卫', '2厅1卫', '2厅2卫', '3厅0卫', '3厅1卫', '3厅2卫'],
					['请选择厅卫', '0厅0卫', '0厅1卫', '1厅0卫', '1厅1卫', '1厅2卫', '2厅0卫', '2厅1卫', '2厅2卫', '3厅0卫', '3厅1卫', '3厅2卫'],
					['请选择厅卫', '0厅0卫', '0厅1卫', '1厅0卫', '1厅1卫', '1厅2卫', '2厅0卫', '2厅1卫', '2厅2卫', '3厅0卫', '3厅1卫', '3厅2卫'],
					['请选择厅卫', '0厅0卫', '0厅1卫', '1厅0卫', '1厅1卫', '1厅2卫', '2厅0卫', '2厅1卫', '2厅2卫', '3厅0卫', '3厅1卫', '3厅2卫'],
					['请选择厅卫', '0厅0卫', '0厅1卫', '1厅0卫', '1厅1卫', '1厅2卫', '2厅0卫', '2厅1卫', '2厅2卫', '3厅0卫', '3厅1卫', '3厅2卫'],
					['请选择厅卫', '0厅0卫', '0厅1卫', '1厅0卫', '1厅1卫', '1厅2卫', '2厅0卫', '2厅1卫', '2厅2卫', '3厅0卫', '3厅1卫', '3厅2卫'],
					['请选择厅卫', '0厅0卫', '0厅1卫', '1厅0卫', '1厅1卫', '1厅2卫', '2厅0卫', '2厅1卫', '2厅2卫', '3厅0卫', '3厅1卫', '3厅2卫'],
					['请选择厅卫', '0厅0卫', '0厅1卫', '1厅0卫', '1厅1卫', '1厅2卫', '2厅0卫', '2厅1卫', '2厅2卫', '3厅0卫', '3厅1卫', '3厅2卫'],
					['请选择厅卫', '0厅0卫', '0厅1卫', '1厅0卫', '1厅1卫', '1厅2卫', '2厅0卫', '2厅1卫', '2厅2卫', '3厅0卫', '3厅1卫', '3厅2卫'],
					['请选择厅卫', '0厅0卫', '0厅1卫', '1厅0卫', '1厅1卫', '1厅2卫', '2厅0卫', '2厅1卫', '2厅2卫', '3厅0卫', '3厅1卫', '3厅2卫'],
					['请选择厅卫', '0厅0卫', '0厅1卫', '1厅0卫', '1厅1卫', '1厅2卫', '2厅0卫', '2厅1卫', '2厅2卫', '3厅0卫', '3厅1卫', '3厅2卫'],
				],
			}
		},
		onLoad(options) {
			let _this = this
			if (options.cityInfo != null) {
				var cityInfo = JSON.parse(options.cityInfo)
				_this.city = cityInfo.cityName
				// console.log(_this.city);
			}
		},
		methods: {
			chooseCity() {
				uni.navigateTo({
					url: './citys/citys'
				})
			},
			submit() {
				uni.showToast({
					title: '请您将信息填写完整',
					icon: 'none',
					duration: 2000
				})
			},
			pickerCity(e) {
				this.typeIndex = e.target.value[0];
				this.typeItems = e.target.value[1];
				const indexValue = this.cityRange[0][this.typeIndex];
				const itemsValue = this.cityRange[1][this.typeItems];
				// console.log(value);
			},
			pickerCity_bind(e) {
				if (e.detail.column == 0) {
					let index = e.detail.value;
					// console.log(index);
					this.cityRange[1].splice(0, this.cityRange[1].length);
					this.cityRange[1] = this.cityRange[1].concat(this.problemItems[index]);
					// console.log(this.cityRange[1]);
					this.$forceUpdate();
				}
			},
			pickerChaoXiang(e) {
				let _this = this
				_this.index_chaoxiang = e.detail.value
			},
			pickerZhuangxiu(e){
				let _this = this
				_this.index_ZhuangXiu = e.detail.value
			},
			pickerHouseType(e){
				let _this = this
				_this.index_HouseType = e.detail.value
			}


		}
	}
</script>

<style>
	.titleImg {
		width: 100vw;
		height: 300rpx;
	}

	.titleImg image {
		width: 100%;
		height: 100%;
	}

	.content {
		margin: 20rpx;
		padding: 20rpx;
		margin-bottom: 220rpx;
	}

	.content-item {
		display: flex;
		justify-content: space-between;
	}

	.content-item-title {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.content-title {
		font-size: 40rpx;
		margin-bottom: 40rpx;
	}

	.content-item-part {
		width: 500rpx;
		text-align: right;
	}

	.cross-line {
		margin: 26rpx 0rpx;
		width: 100%;
		height: 2rpx;
		background: #F1F3F2;
	}

	.bottom {
		padding: 10rpx;
		padding-top: 14rpx;
		background: white;
		box-shadow: 0px -2rpx 2rpx #cacaca;
		position: fixed;
		bottom: 0;
		width: 100vw;
	}

	.bottom-tip {
		font-size: 26rpx;
	}

	.radio-style {
		transform: scale(0.8);
	}

	.button {
		margin: 20rpx;
		height: 70rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 34rpx;
		background: #00cb95;
		color: white;
	}

	.gray {
		margin-left: 10rpx;
		color: #939493;
	}
</style>
