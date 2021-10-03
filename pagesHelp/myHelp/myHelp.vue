<template>
	<view>
		<view class="main">
			<block v-for="(item , index) in data" :key="index">
				<navigator url="../../pagesA/News?newsID=0" class="my-item">
					<view class="my-item-title">
						{{item.reason}}-{{item.property}}
					</view>
					<view class="my-item-time">
						{{item.applyTime}}
					</view>
					<view class="my-item-text">
						{{item.problemDesc}}
					</view>
				</navigator>
			</block>
			<view class="none">
				再多也木有咯……
			</view>
		</view>
	</view>
	
</template>

<script>
	import {
		getList
	} from '@/common/accurate-support-api.js'
	export default {
		data() {
			return {
				data:{}
			}
		},
		onLoad() {
			let _this = this
			uni.showLoading({
				title: '加载帮扶信息..'
			})
			let data = {}
			getList(data).then((res) => {
				if (res.code == "200") {
					// console.log(res.data);
					_this.data = res.data;
					for(var i=0;i<_this.data.length;++i)
					{
						_this.data[i].applyTime = _this.data[i].applyTime.replace("T"," ").substr(0,19);
						// console.log(_this.data[i].applyTime);
					}
					uni.hideLoading();
				}
				else{
					uni.hideLoading();
					uni.showToast({
					title: '获取失败',
					duration: 2000,
					icon: 'error'
					});
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style>
	page {
		background-color: rgb(243, 243, 243);
	}
	
	.main {
		padding-left: 20rpx;
		padding-right: 20rpx;
		padding-top: 30rpx;
	}
	
	.my-item {
		background-color: white;
		padding: 20rpx 30rpx;
		margin-bottom: 30rpx;
		border-radius: 10rpx;
	}
	
	.my-item-title {
		font-size: 30rpx;
	}
	.my-item-time {
		font-size: 26rpx;
		color: #A6A6A6;
		margin: 20rpx 0;
	}
	.my-item-text {
		font-size: 28rpx;
	}
	
	.none {
		color: #A6A6A6;
		font-size: 28rpx;
		text-align: center;
		padding-bottom: 30rpx;
	}
</style>
