<template>
	<view>
		<view class="personInfo">
			<view class="otherInfo">
				<view class="otherInfo-item" >
					<view class="otherInfo-item-left">
						政治面貌
					</view>
					<view class="otherInfo-item-right">
						<!-- 请选择 > -->
						<picker @change="pickerStatus" :value="index_Status" :range="array_status">
							<view class="uni-input">{{array_status[index_status]}}</view>
						</picker>
					</view>
				</view>
				<view class="cross-line">
				
				</view>
				<view class="otherInfo-item" >
					<view class="otherInfo-item-left">
						入党时间
					</view>
					<view class="otherInfo-item-right">
						<!-- 请选择 > -->
						<picker mode="date" :start="getDate('start')" :end="getDate('end')" @change="selectDate">
							<view class="date-screen">{{dateTime==''?'日期选择':dateTime}}</view>
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
				dateTime: '',
				index_status:0,
				array_status:['请选择','群众','党员','村内党员','村支委党员']
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
			pickerStatus(e){
				let _this = this
				_this.index_status = e.detail.value
			},
			selectDate(e) {
				let _this = this
				_this.dateTime = e.target.value
			},
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

	.gray {
		color: #939493;
	}
	.submit{
		position: fixed;
		width: 100%;
		bottom: 0;
	}
</style>
