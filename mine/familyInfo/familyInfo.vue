<template>
	<view>
		<view class="personInfo">
			<view class="otherInfo">
				<view class="otherInfo-item">
					<view class="otherInfo-item-left">
						户籍地址
					</view>
					<view class="otherInfo-item-right">
						<RegionPicker class="regionPicker" @change="onChangeRegion"></RegionPicker>
					</view>
				</view>
				<view class="cross-line">
				</view>
				<view class="otherInfo-item">
					<view class="otherInfo-item-left">
						详细地址
					</view>
					<view class="otherInfo-item-right">
						<input class="uni-input" type="text" :value="addressDetail" placeholder="请输入" @input="inputAddressDetail" />
					</view>
				</view>
				<view class="cross-line">
				</view>
				<view class="otherInfo-item">
					<view class="otherInfo-item-left">
						是否是户主
					</view>
					<view class="otherInfo-item-right">
					<radio-group name="">
						<label>
							<radio :value="1" /><text>是</text>
						</label>
						<label>
							<radio :value="2" /><text>否</text>
						</label>
					</radio-group>
					</view>
				</view>
			</view>
		</view>
		<view class="submit">
			<button type="primary">提交</button>
		</view>
	</view>
</template>

<script>
	import RegionPicker from '@/components/regionPicker.vue'
	export default {
		components: {
			RegionPicker
		},
		onLoad() {},
		data() {
			return {
				province:'',//省
				city:'',//城市
				district:'',//区县
				addressDetail: '',
			}
		},
		methods: {
			onChangeRegion(region) {
				// console.log('选择的省市区数据：', region);
				var _this = this;
				_this.province = region[0].name;
				_this.city = region[1].name;
				_this.district = region[2].name;
			},
			inputAddressDetail(e) {
				this.addressDetail = e.detail.value
			}
		}
	}
</script>

<style>
	page {
		background: #f7f8f7;
	}

	.otherInfo {
		padding: 20rpx;
		margin-top: 30rpx;
		background: white;
	}

	.cross-line {
		margin: 20rpx 0;
		width: 100%;
		background: #f0f1f0;
		height: 2rpx;
	}

	.otherInfo-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 24rpx;
		padding-right: 24rpx;
		height: 80rpx;
	}

	.black {
		color: #000000;
	}

	.uni-input {
		text-align: right;
	}

	.gray {
		color: #939493;
	}

	.submit {
		position: fixed;
		width: 100%;
		bottom: 0;
	}
</style>
