<template>
	<view class="release">
		<view class="repair-border" style="display: flex;">
			<view class="goods-img">
				<image src="https://app-file.beitaichufang.com/img/H5/web/banner/banner21.jpg" mode="aspectFill"></image>
			</view>
			<view class="goods-detail">
				<view class="repair-item r1" style="margin-left: 0;">
					<view class="repair-text r-name iconfont">
						<text>品牌 · 名称 · 类别</text>
					</view>
				</view>
				<view class="repair-item" style="margin: 0; padding-top: 0; margin-bottom: 20rpx;">
					<navigator url="../select/select" class="repair-input" style="position: relative; margin-left: 90rpx;" >
						<view class="" style="position: relative; left: 0; right: 0; margin-right: 0;">
							<text class="goods-name iconfont" style="font-size: 34rpx;">{{goods_name}}</text> 
							<text class=""></text>
						</view>
					</navigator>
				</view>
			</view>			
		</view>

		<view class="repair-border ">
			<view class="repair-item">
				<view class="repair-text r-address iconfont repair_after iconfont">
					期望价格 
				</view>
				<view class="repair-input ">
					<input type="number" class="uni-input" name="roomNum" placeholder="捐多少呢" />					
				</view>
			</view>
		</view>
		<view class="repair-border">
			<view class="repair-item r6">
				<view class="repair-text r-discribe iconfont">
					特殊需求
				</view>
			</view>
			<view class="repair-item r7" >
				<view class="repair-input" style="margin-left: 100rpx">
					<textarea class="uni-input"  placeholder="每个宝贝都需要介绍自己" style="float: right; width: 100%;"/>
				</view>
			</view>
		</view>	
		<view class="repair-border ">
			<view class="repair-item r3 ">
				<view class="repair-text r-address iconfont repair_after iconfont">
					我的地址
				</view>
				<view class="repair-input" style="position: relative;" @click="chooseLocation">
					<view class="uni-input  "  id="repair-address-main" style="position: relative; left: 0; right: 0; margin-right: 0;">
						<text>{{repair_address_main}}</text> 
						<text class=""></text>
					</view>
				</view>
			</view>
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
				goods_name: "点击选择商品",
				imgArr:[],
				donateType:["图书","衣服"],
				donateIndex:0,
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
		onShow() {
			var that = this
			uni.$on('text',function(data){
							console.log(data);
							that.goods_name = data;
						})
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
			bindPickerChange(e) {
				this.donateIndex = e.target.value;
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
			}
			,
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
	
	.goods-name:after {
		content: "\e608";
	}
	
	.goods-img {
		margin-top: 30rpx;
		margin-left: 30rpx;
		width: 120rpx;
		height: 120rpx;
		flex: 2;
		border-radius: 40rpx;
		
	}
	.goods-img image {
		width: 120rpx;
		height: 120rpx;
		border-radius: 40rpx;
		box-shadow: 0rpx 10rpx 20rpx #cdcecd;
	}
	
	.goods-detail {
		margin-top: 4rpx;
		margin-left: 0;
		flex: 7;
	}
	
	.buttonSelected {
		background-color: #4ECF68 !important;
	}
	
	.release {
		background-color: #f3f2f2;
	}
	
	.repair-border {
		background-color: white;
		margin-top: 30rpx;
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
		flex: 1;
		align-items: center;
		padding-left: 30rpx;
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
		border-radius: 20rpx;
		background-color: #a6a6a6;
		padding: 2rpx 4rpx;
		margin:0 10rpx;
		color: white;
		margin-bottom: 5rpx;
		
		
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
		background-color: rgba(161,191,86,1);
		color: white;
	}
	
	.release-button .r-button1:active {
		background-color: rgba(227,227,227,0.8);
	}
	
	.release-button .r-button2:active {
		background-color: rgba(161,191,86,0.8);
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
