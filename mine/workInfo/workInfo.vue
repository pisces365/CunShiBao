<template>
	<view>
		<view class="personInfo">
			<view class="otherInfo">
				<view class="otherInfo-item">
					<view class="otherInfo-item-left">
						单位名称
					</view>
					<view class="otherInfo-item-right">
						<input class="uni-input" type="text" :value="companyName" placeholder="请输入" @input="inputCompanyName" />
					</view>
				</view>
				<view class="cross-line">
				</view>
				<view class="otherInfo-item">
					<view class="otherInfo-item-left">
						职业
					</view>
					<view class="otherInfo-item-right">
						<!-- 请选择 > -->
						<picker @change="pickercareer" :value="index_career" :range="array_career">
							<view class="uni-input" v-if="index_career==0" style="color: #878887;">{{array_career[index_career]}}</view>
							<view class="uni-input" v-else>{{array_career[index_career]}}</view>
						</picker>
					</view>
				</view>
				<view class="cross-line">
				</view>
				<view class="otherInfo-item">
					<view class="otherInfo-item-left">
						教育程度
					</view>
					<view class="otherInfo-item-right">
						<!-- 请选择 > -->
						<picker @change="pickerEducation" :value="index_education" :range="array_education">
							<view class="uni-input" v-if="index_education==0" style="color: #878887;">{{array_education[index_education]}}</view>
							<view class="uni-input" v-else>{{array_education[index_education]}}</view>
						</picker>
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
	export default {
		onLoad() {},
		data() {
			return {
				companyName: '',
				idNo: '',
				nation: '',
				dateTime: '',
				index_career: 0,
				array_career: ['请选择', '国家机关、党群组织、企业、事业单位负责人','专业技术人员','办事人员和有关人员'
				,'商业、服务业人员、农、林、牧、渔、水利业生产人员、企事业单位','生产、运输设备操作人员及有关人员','军人',
				 '不便分类的其他从业人员'],
				 index_education: 0,
				 array_education: ['请选择','无学历','小学','初中','高中','本科','专职','研究生','博士生','博士后']
			}
		},
		methods: {
			pickercareer(e) {
				let _this = this
				_this.index_career = e.detail.value
			},
			pickerEducation(e){
				let _this = this
				_this.index_education = e.detail.value
			},
			inputCompanyName(e) {
				this.companyName = e.detail.value
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
