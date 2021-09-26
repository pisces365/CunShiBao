<template>
	<view>
		<view class="personInfo">
			<view class="otherInfo">
				<view class="otherInfo-item">
					<view class="otherInfo-item-left">
						真实姓名
					</view>
					<view class="otherInfo-item-right">
						<input class="uni-input" type="text" :value="name" placeholder="请输入" @input="inputName" />
					</view>
				</view>
				<view class="cross-line">
				</view>
				<view class="otherInfo-item">
					<view class="otherInfo-item-left">
						身份证号
					</view>
					<view class="otherInfo-item-right">
						<input class="uni-input" type="text" :value="idNo" placeholder="请输入" @input="inputIdNo" />
					</view>
				</view>
				<view class="cross-line">
				</view>
				<view class="otherInfo-item">
					<view class="otherInfo-item-left">
						民族
					</view>
					<view class="otherInfo-item-right">
						<input class="uni-input" type="text" :value="nation" placeholder="请输入" @input="inputNation" />
					</view>
				</view>
				<view class="cross-line">
				</view>
				<view class="otherInfo-item">
					<view class="otherInfo-item-left">
						性别
					</view>
					<view class="otherInfo-item-right">
						<!-- 请选择 > -->
						<picker @change="pickerSex" :value="index_Sex" :range="array_Sex">
							<view class="uni-input" v-if="index_Sex==0" style="color: #878887;">{{array_Sex[index_Sex]}}</view>
							<view class="uni-input" v-else>{{array_Sex[index_Sex]}}</view>
						</picker>
					</view>
				</view>
				<view class="cross-line">
				</view>
				<view class="otherInfo-item">
					<view class="otherInfo-item-left">
						出生日期
					</view>
					<view class="otherInfo-item-right">
						<!-- 请选择 > -->
						<picker mode="date" :start="getDate('start')" :end="getDate('end')" @change="selectDate">
							<view class="date-screen" v-if="dateTime==''" style="color: #878887;">选择日期</view>
							<view class="date-screen" v-else>{{dateTime}}</view>
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
				name: '',
				idNo: '',
				nation: '',
				dateTime: '',
				index_Sex: 0,
				array_Sex: ['请选择', '男', '女']
			}
		},
		methods: {
			getDate(type) {

				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type == 'start') {
					year = year - 5; //设置年份区间
				} else if (type == 'end') {
					year = year + 5;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			pickerSex(e) {
				let _this = this
				_this.index_Sex = e.detail.value
			},
			selectDate(e) {
				let _this = this
				_this.dateTime = e.target.value
			},
			inputName(e) {
				this.name = e.detail.value
			},
			inputNation(e) {
				this.nation = e.detail.value
			},
			inputIdNo(e) {
				this.idNo = e.detail.value
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
