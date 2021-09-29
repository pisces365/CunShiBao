<template>
	<view>
		<view class="rentOrder">
			<view class="top">
				<view class="houseDes">
					<view class="houseDes-left">
						<image :src="houseInfo.pictureUrl[0]" mode=""></image>
					</view>
					<view class="houseDes-right">
						<view class="houseDes-right-top">
							<text>{{houseInfo.type}}</text>
							<text>{{'|'}}</text>
							<text class="noWarp">{{ houseInfo.desc}}</text>
						</view>
						<view class="houseDes-right-center">
							押一付三 {{' · '+houseInfo.bedroomAmount+'室 '}}·{{houseInfo.area+'m · 南北'}}
						</view>
						<view class="houseDes-right-bottom">
							{{houseInfo.price}}元/月
						</view>
					</view>
				</view>
				<view class="cross-line">
				</view>
				<view class="rentOwner">
					<view class="rentOwner-image">
						<image :src="houseInfo.hostRoughVo.avatarUrl" mode=""></image>
					</view>
					<view class="rentOwner-info">
						<view class="rentOwner-info-left">
							<view class="rentOwner-info-name">
								<text class="hostName">{{houseInfo.hostRoughVo.name}}</text> <text
									class="hostDsc">优质房东</text>
							</view>
							<view class="rentOwner-info-address">
								{{houseInfo.location}}
							</view>
						</view>

					</view>
				</view>

			</view>
			<view class="cross-line">

			</view>
			<view class="date-info">
				<view class="date-info-top">
					<view class="address">
						选择看房时间
					</view>
					<view class="date">
						<view class="datePicker">
							<picker mode="date" :start="getDate('start')" :end="getDate('end')" @change="selectDate">
								<view class="date-screen">{{dateTime==''?'日期选择':dateTime}}</view>
							</picker>
						</view>
					</view>
				</view>
				

				<view class="cross-line">
				</view>
				<view class="time-select">
					<view class="time-detail" v-for="(item,index) in detailList" :key="index" @click="timeSelect(index)"
						:style="currentIndex==index?'background-color: #2abffe;':''">
						<text class="time-text" :style="currentIndex==index?'color: #fff;':''">{{item.title}}</text>
					</view>
				</view>
			</view>
			<view class="date-info">
				<view class="item">
					<view class="item-title">入住时间</view>
					<view class="date">
						<picker class="picker date" mode="date" :value="date_begin" :start="startDate_begin"
							:end="endDate_begin" @change="bindDateChange_begin">
							<view class="dateTime">{{ date_begin }}</view>
						</picker>
					</view>
				</view>
				<view class="cross-newline">

				</view>
				<view class="item">
					<view class="item-title">离开时间</view>
					<view class="date">
						<picker class="picker date" mode="date" :value="date_end" :start="startDate_end"
							:end="endDate_end" @change="bindDateChange_end">
							<view class="dateTime">{{ date_end }}</view>
						</picker>
					</view>
				</view>

			</view>

		</view>
		<view class="button" @click="submit">
			<view class="button-content">
				立即预约
			</view>
		</view>
	</view>
</template>

<script>
	import {
		houseOrderAdd,
		addRenterInfo
	} from '../../../common/api.js'
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			});
			const endDate = this.getDate({
				format: true
			});
			return {
				date_begin: currentDate,
				date_end: endDate,
				houseInfo: {
					inviteTime: '',
				},
				dateTime: '',
				currentDate: new Date().toISOString().slice(0, 10),
				currentIndex: -1,
				beginTime: '',
				endTime: '',
				detailList: [{
						'title': '08:00-09:00',
						'value': 't1'
					},
					{
						'title': '09:00-10:00',
						'value': 't2'
					},
					{
						'title': '10:00-11:00',
						'value': 't3'
					},
					{
						'title': '11:00-12:00',
						'value': 't4'
					},
					{
						'title': '14:00-15:00',
						'value': 't5'
					},
					{
						'title': '15:00-16:00',
						'value': 't6'
					},
					{
						'title': '16:00-17:00',
						'value': 't7'
					},
					{
						'title': '17:00-18:00',
						'value': 't8'
					}, {
						'title': '18:00-19:00',
						'value': 't9'
					}, {
						'title': '19:00-20:00',
						'value': 't10'
					}, {
						'title': '21:00-22:00',
						'value': 't11'
					}
				],

			}
		},
		computed: {
			startDate_begin() {
				return this.getDate('start');
			},
			endDate_begin() {
				return this.getDate('end');
			},
			startDate_end() {
				return this.getDate('start');
			},
			endDate_end() {
				return this.getDate('end');
			}
		},
		methods: {
			//处理日期选择组件的日期数据
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
			timeSelect(tindex) {
				this.currentIndex = tindex;
				// console.log(this.currentIndex);
			},
			//选择日期，获取选择结果
			selectDate(e) {
				let _this = this
				_this.dateTime = e.target.value
			},
			submit() {
				let _this = this
				let userId = uni.getStorageSync('userId');
				if (_this.dateTime == '') {
					uni.showToast({
						title: '请选择看房时间',
						icon: 'none',
						duration: 2000
					})
				} else if (_this.currentIndex == -1) {
					uni.showToast({
						title: '请选择看房日期',
						icon: 'none',
						duration: 2000
					})
				} else {
					var addRenterData = {
						"beginTime": _this.date_begin,
						"endTime": _this.date_end
					}
					if (Date.parse(_this.date_begin) < Date.parse(_this.date_end)) {
						addRenterInfo(addRenterData).then((res) => {
							if (res.code == "200") {
								console.log('租客信息添加成功', res);
								_this.houseInfo.inviteTime = res.time;
								var data = {
									"hostId": _this.houseInfo.id,
									"orderTime": _this.dateTime + " " + _this.detailList[_this.currentIndex]
										.title + ":00",
									"rentId": userId
								}
								houseOrderAdd(data).then((res) => {
									if (res.code == "200") {
										uni.showToast({
											title: '预约成功',
											icon: 'success',
											duration: 2000
										})
										this.timer = setInterval(() => {
											let _this = this;
											var houseInfo = JSON.stringify(_this
											.houseInfo); // 这里转换成 字符串
											uni.redirectTo({
												url: '../rent_orderDetail/rent_orderDetail?houseInfo=' +
													houseInfo
											})
										}, 1000)
									}
								})
							}
						})

					} else {
						uni.showToast({
							title: '离开时间请至少迟于入住时间一至两天',
							icon: 'none',
							duration: 2000
						})
					}

				}
			},
			// 选择时间 日期
			bindDateChange_begin: function(e) {
				this.date_begin = e.target.value;
			},
			bindDateChange_end: function(e) {
				this.date_end = e.target.value;
			},

		},
		onLoad(options) {
			let that = this;
			var data = JSON.parse(options.houseInfo); // 字符串转对象
			that.houseInfo = data;
			console.log(that.houseInfo)
		},
		beforeDestroy() {
			if (this.timer) {
				clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
			}
		}
	}
</script>

<style>
	page {
		background: #f0f1f0;
	}

	.rentOrder {
		padding: 0 10rpx;

	}

	.top {
		padding: 10rpx;
		background: white;
		border-radius: 20rpx;
	}

	.bottom {
		margin-top: 10rpx;
		padding: 10rpx;
		background: white;
	}

	.houseDes {
		display: flex;

	}

	.houseDes-left {
		width: 140rpx;
		height: 120rpx;
	}

	.houseDes-left image {
		width: 100%;
		height: 100%;
	}

	.houseDes-right {
		width: 520rpx;
		margin-left: 20rpx;
	}

	.houseDes-right-top {
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.houseDes-right-top text {
		margin-right: 10rpx;
	}

	.cross-line {
		margin: 10rpx 0;
		width: 100%;
		background: #e4e5e4;
		height: 2rpx;

	}

	.cross-newline {
		margin: 20rpx 0;
		width: 100%;
		background: #e4e5e4;
		height: 2rpx;
	}

	.rentOwner {
		display: flex;
		padding: 10rpx;
	}

	.rentOwner-image {
		border-radius: 50rpx;
		overflow: hidden;
		width: 100rpx;
		height: 100rpx;
	}

	.rentOwner-image image {
		width: 100%;
		height: 100%;
	}

	.rentOwner-info {
		margin-left: 20rpx;
		font-size: 28rpx;
	}

	.houseDes-right-center {
		font-size: 28rpx;
		color: #999999;
	}

	.houseDes-right-bottom {
		font-size: 28rpx;
		color: #999999;
	}

	.rentOwner-info-address {
		margin: 20rpx 0 10rpx 0;
		color: #959695;
	}

	.address {
		font-size: 34rpx;
		// margin-bottom: 25rpx;
		color: #3b3b3b;
	}

	.arrow {
		font-size: 24rpx;
		float: right;
	}

	.date {
		font-size: 34rpx;
	}

	.cover-view {
		display: flex;
		border-bottom: 1rpx solid #ddd;
		// padding-bottom: 14rpx;
	}

	.time-text {
		padding: 18rpx;
		width: 100%;
		height: 100%;
		text-align: center;
		font-size: 26rpx;
		color: #666;
	}

	.time-detail {
		display: flex;
		flex-direction: column;
		margin: 10rpx 15rpx;
		background-color: #eee;
		border-radius: 24rpx;
		justify-content: center;
		align-items: center;
	}

	.date-info {
		margin-top: 10rpx;
		padding: 24rpx;
		background-color: #fff;
		border-radius: 16rpx;
		margin-bottom: 16rpx;
		
	}
	.date-info-top{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.time-select {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
		padding: 20rpx 20rpx 20rpx 20rpx;
		width: 100%;
	}

	.datePicker {
		margin: 10rpx 20rpx;
		color: #8A8E93;
	}

	.date-title {
		margin: 10rpx 20rpx;
		color: #616467;
	}

	.hostDsc {
		margin-left: 30rpx;
		background: #FCB409;
		color: white;
		font-size: 26rpx;
		font-weight: bold;
		padding: 6rpx 10rpx;
		border-radius: 10rpx;
	}

	.hostName {
		margin-top: 10rpx;
	}

	.button {
		margin: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 0;
		width: 100vw;
		height: 70rpx;


	}

	.button-content {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		width: 100%;
		height: 70rpx;
		padding: 20rpx;
		font-size: 44rpx;
		color: white;
		background: #2abffe;
		font-weight: bold;
	}

	.item {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.dateTime {
		color: #8C8D8C;
	}
</style>
