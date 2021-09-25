<template>
	<view class="release">
		<view class="repair-border ">
			<view class="repair-item">
				<view class="repair-text r-name iconfont repair_after iconfont">
					名称 
				</view>
				<view class="repair-input ">
					<input type="text" class="uni-input" name="roomNum" placeholder="宝贝名称" />					
				</view>
			</view>
		</view>
		<view class="repair-border">
			<view class="repair-item r6">
				<view class="repair-text r-discribe iconfont">
					分类
				</view>
			</view>
			<view class="repair-item r7" >
				<view class="repair-input release-category" style="margin-left: 100rpx">
					<view class="category-text">
						类别
					</view>
					<scroll-view class="release-scroll" scroll-x="true" scroll-left="0" show-scrollbar="true">
						<view v-for="(item , index) in category" :key="index" :class="item.selected?'buttonSelected':''" @click="changeCategoryButtonColor('category',index)">
							{{item.name}}
						</view>
					</scroll-view>
				</view>
			</view>
			<view class="repair-item r7" >
				<view class="repair-input release-category" style="margin-left: 100rpx">
					<view class="category-text">
						品牌
					</view>
					<scroll-view class="release-scroll" scroll-x="true" scroll-left="0" show-scrollbar="true">
						<view v-for="(item , index) in brand" :key="index" :class="item.selected?'buttonSelected':''" @click="changeCategoryButtonColor('brand',index)">
							{{item.name}}
						</view>
					</scroll-view>
				</view>
			</view>
			<view class="repair-item r7" >
				<view class="repair-input release-category" style="margin-left: 100rpx">
					<view class="category-text">
						品质
					</view>
					<scroll-view class="release-scroll" scroll-x="true" scroll-left="0" show-scrollbar="true">
						<view v-for="(item , index) in quality" :key="index" :class="item.selected?'buttonSelected':''" @click="changeCategoryButtonColor('quality',index)">
							{{item.name}}
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<view class="repair-border ">
			<view class="repair-item">
				<view class="repair-text r-address iconfont repair_after iconfont">
					价格 
				</view>
			</view>
			<view class="repair-item r7" >
				<view class="repair-input release-category" style="margin-left: 100rpx">
					<view class="category-text">
						报价
					</view>
					<view class="repair-input ">
						<input type="number" class="uni-input" name="roomNum" placeholder="宝贝卖出价" />					
					</view>
				</view>
			</view>
			<view class="repair-item r7" >
				<view class="repair-input release-category" style="margin-left: 100rpx">
					<view class="category-text">
						原价
					</view>
					<view class="repair-input ">
						<input type="number" class="uni-input" name="roomNum" placeholder="宝贝原价" />					
					</view>
				</view>
			</view>
			<view class="repair-item r7" >
				<view class="repair-input release-category" style="margin-left: 100rpx">
					<view class="category-text">
						运费
					</view>
					<view class="repair-input " >
						<input  type="number" class="uni-input" name="roomNum" placeholder="运输宝贝花费" />					
						<radio-group class="uni-input">
							<label><radio value="r1" checked="true" />包邮</label>
							<label style="margin: 0 8rpx;"></label>
							<label><radio value="r2" />以实际距离估算</label>
						</radio-group>
					</view>
				</view>
			</view>
		</view>
		<view class="repair-border">
			<view class="repair-item r6">
				<view class="repair-text r-discribe iconfont">
					简介
				</view>
			</view>
			<view class="repair-item r7" >
				<view class="repair-input" style="margin-left: 100rpx">
					<textarea class="uni-input"  placeholder="每个宝贝都需要介绍自己" style="float: right; width: 100%;"/>
				</view>
			</view>
		</view>	
		<view class="repair-border">
			<view class="repair-item r8">
				<view class="repair-text r-photo iconfont">
					照片/视频
				</view>
			</view>
			<view class="repair-item r9">
				<view class="repair-input repair-input-image" style="margin-left: 90rpx;">
		
					<view v-for="(item , index) in imgArr" :key="index" style="position: relative;">
						<image src="http://p1362.bvimg.com/10465/811d84ee9403038c.png" mode="aspectFit" @click="deleteImg(index)"  style="position: absolute; top:-10rpx; right: -10rpx; z-index: 100; width: 35rpx; height: 35rpx;"></image>
						<image :src="item" mode="aspectFill" class="uni-input repair-image" style="padding: 0;" ></image>
					</view>
					<view v-if="get_imgArrLength()" class="repair-image add-image" @click="chooseImg">
						
					</view>
				</view>
			</view>
			<view class="repair-item">
				<view class="repair-input "  style="margin-left: 100rpx;">
					<view class="uni-input" style="margin: 0; padding: 0;">
						<text class="release-address" @click="chooseLocation">{{repair_address_main}}</text> 
					</view>
				</view>
			</view>
		</view>
		<view style="height: 116rpx;">
			
		</view>
		<view class="bottom-bar">
			<view style="height: 0rpx;">
				
			</view>
			<view class="release-button">
				<button class="r-button1" @click="goBack">取 消</button>
				<button class="r-button2" @click="goBack">发 布</button>
			</view>	
			<!-- <view style="height: 30rpx;">
				
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				price:"0.00",
				repair_address_main:"地点：请选择",
				imgArr:[],
				category:[
					{
						id:0,
						selected:false,
						name:"电子"
					},
					{
						id:1,
						selected:false,
						name:"毛绒"
					},
					{
						id:2,
						selected:false,
						name:"智能产品设备"
					},
					{
						id:3,
						selected:false,
						name:"金属制品"
					}],
				brand:[
					{
						selected:false,
						name:"雅达利"
					},
					{
						selected:false,
						name:"苹果"
					},
					{
						selected:false,
						name:"东方树叶"
					},
					{
						selected:false,
						name:"迪卡侬"
					},
					{
						selected:false,
						name:"布鲁托"
					}],
				quality:[
					{
						selected:false,
						name:"棉柔"
					},
					{
						selected:false,
						name:"丝滑"
					},
					{
						selected:false,
						name:"大自然的感觉"
					},
					{
						selected:false,
						name:"凉爽"
					}]
			}
		},
		methods: {
			get_imgArrLength() {
				// console.log(this.imgArr.length);
				if(this.imgArr.length >= 4) 
				{
					return false;
				}
				else 
				{
					return true;
				}
			},
			chooseImg () {
				uni.chooseImage({
					count: 4-this.imgArr.length,
					success:res=>{
						this.imgArr = this.imgArr.concat(res.tempFilePaths);
					}
				})
			},
			
			deleteImg(index){
				this.imgArr.splice(index,1);
			},
			chooseLocation(e) {
				let thisObj = this;
				uni.chooseLocation({
					success: function(res) {
						// console.log('位置名称：' + res.name);
						// console.log('详细地址：' + res.address);
						// console.log('纬度：' + res.latitude);
						// console.log('经度：' + res.longitude);
						thisObj.repair_address_main = "地点："+res.address;
					}
				})
			},
			changeCategoryButtonColor(obj,index) {
				switch(obj)
				{
					case 'category':
					{
						// for(var c of this.category)
						// {
						// 	c.selected = false;
						// }
						// console.log(this.category);
						for(var c=0;c<this.category.length;++c)
						{
							this.category[c].selected = false;
						}
						this.category[index].selected = true;
						break;
					}
					case 'brand':
					{
						for(var c=0;c<this.brand.length;++c)
						{
							this.brand[c].selected = false;
						}
						this.brand[index].selected = true;
						break;
					}
					case 'quality':
					{
						for(var c=0;c<this.quality.length;++c)
						{
							this.quality[c].selected = false;
						}
						this.quality[index].selected = true;
						break;
					}
				}
			},
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>
	@import url("../../common/iconfont.css");
	
	button::after { border: none }
	
	.buttonSelected {
		background-color: #4ECF68 !important;
		color: white !important;
	}
	
	.release {
		background-color: #f3f2f2;
	}
	
	.repair-border {
		background-color: white;
		/* margin-top: 30rpx; */
		margin-bottom: 30rpx;
	}
	
	.repair-item {
		
		display: flex;
		padding: 20rpx 0rpx;
		margin: 0 30rpx;
		background-color: white;
		
	}
	
	.repair-text {
		flex: 2;
		font-size: 32rpx !important;
		line-height: 60rpx;
		padding-left: 90rpx;
		display: flex;
		align-items: center;
	}
	
	.release-category {
		display: flex;
	}
	
	.category-text {		
		font-size: 32rpx !important;
		line-height: 60rpx;
		/* flex: 1; */
		align-items: center;
		/* padding-left: 30rpx; */
		width: 100rpx;
	}
	
	.release-scroll {
		flex: 6;
		align-items: center;
		line-height: 60rpx;
		white-space: nowrap;
		overflow: hidden;
		width: 400rpx;
	}
	
	.release-scroll view {
		display: inline-block;
		border-radius: 30rpx;
		background-color: rgb(229,229,234);
		padding: 2rpx 16rpx;
		margin:0 10rpx;
		color: rgb(184, 184, 184);
		margin-bottom: 5rpx;	
		font-size: 32rpx !important;
	}
	
	.repair-input {
		flex: 4;
	}
	
	.repair-input .uni-input {
		/* border: 0.5px solid #A6A7A6; */
		border-radius: 12rpx;
		padding: 10rpx;
		font-size: 32rpx;
		color: #A6A7A6;
		line-height: 40rpx;
		/* margin-right: 20rpx; */
	}
	
	.repair-input-image view {
		display: inline-block;
		margin-right: 30rpx;
		/* margin-bottom: 30rpx; */
	}
	
	.repair-image {
		height: 120rpx;
		width: 120rpx;
		border-radius: 30rpx !important;
	}
	
	.add-image {
		background-color: #c4c5c4;
		background-image: url(http://p1362.bvimg.com/10465/b00e7542e59400d2.png);
		background-repeat: no-repeat;
		background-size: 60rpx;
		background-position: center;
		/* border: 1px solid #A6A7A6; */
	}
	
	.release-address {
		background-color: #e3e3e3;
		border-radius: 40rpx;
		padding: 10rpx 20rpx;
		/* color: #6e6e6e; */
	}
	
	.r-name {
		/* content: '\ea10'; */
		background-image: url(http://p1362.bvimg.com/10465/af3203382499a6be.png);
		background-repeat: no-repeat;
		background-size: 50rpx;
		background-position: 0 center;
		
	}
	
	.r-address {
		/* content: '\ec8b'; */
		background-image: url(http://p1362.bvimg.com/10465/6998bab980ed4b8a.png);
		background-repeat: no-repeat;
		background-size: 50rpx;
		background-position: 0 center;
	}
	
	.r-discribe {
		/* content: '\e613'; */
		background-image: url(http://p1362.bvimg.com/10465/a88d8388cc9b6b24.png);
		background-repeat: no-repeat;
		background-size: 50rpx;
		background-position: 0 center;
	}
	
	.r-photo {
		/* content: '\e616'; */
		background-image: url(http://p1362.bvimg.com/10465/90715e2cf30dc31a.png);
		background-repeat: no-repeat;
		background-size: 50rpx;
		background-position: 0 center;
	}
	
	.release-button {
		display: flex;
	}
	
	.release-button button {
		width: 100%;
		border-radius: 50rpx;
		margin:0 30rpx;
		font-size: 32rpx;
	}
	
	.release-button .r-button1 {
		background-color: #e3e3e3;
		color: white;
	}
	
	.release-button .r-button2 {
		background-color: rgba(78,207,104,1);
		color: white;
	}
	
	.release-button .r-button1:active {
		background-color: rgba(227,227,227,0.8);
	}
	
	.release-button .r-button2:active {
		background-color: rgba(78,207,104,0.8);
	}  
	
	.bottom-bar {
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		padding: 20rpx 30rpx;
		box-shadow: 0rpx 10rpx 30rpx #dcdddc;
		z-index: 100;
		background-color: white;
	}
</style>
