<template>
	<view class="release">
		<view class="repair-border" style="margin-top: 0;">
			<view class="repair-item r1">
				<view class="repair-text r-name iconfont">
					<text>姓名</text>
				</view>
				<view class="repair-input">
					<input class="uni-input" name="name" placeholder="姓名" />
				</view>
			</view>
		</view>
		<view class="repair-border">
			<view class="repair-item r2">
				<view class="repair-text r-phone iconfont">
					电话
				</view>
				<view class="repair-input">
					<input class="uni-input" name="phone" placeholder="电话" />
				</view>
			</view>
		</view>
		<view class="repair-border" style="margin-bottom: 0;">
			<view class="repair-item r5">
				<view class="repair-text r-roomNum iconfont repair_after iconfont">
					户籍
				</view>
				<view class="repair-input">
					<!-- <picker mode="multiSelector" class="uni-input" @change="bindPickerChange" @columnchange="bindIndexChange" :range="problemType" style="position: relative;">
						<label class="">{{problemType[0][typeIndex]}}-{{problemItems1[typeIndex][typeItems1]}}-{{problemItems2[typeIndex][typeItems2]}}</label>
					</picker> -->
					<RegionPicker class="uni-input2" @change="onChangeRegion"></RegionPicker>
				</view>
			</view>
		</view>
		<view class="repair-border" style="margin-top: 0; border-top: 1px solid #EAE9E9;">
			<view class="repair-item ">
				<view class="repair-text iconfont">
					
				</view>
				<view class="repair-input ">
					<input class="uni-input" name="roomNum" placeholder="详细地址,如:1号楼1单元101" />					
				</view>
			</view>
		</view>
		<view class="repair-border ">
			<view class="repair-item">
				<view class="repair-text r-address iconfont repair_after iconfont">
					家庭人数
				</view>
				<view class="repair-input ">
					<input type="number" class="uni-input" name="roomNum" placeholder="成员数量" />					
				</view>
			</view>
		</view>
		<view class="repair-border">
			<view class="repair-item r5">
				<view class="repair-text r-type iconfont repair_after iconfont">
					村户属性
				</view>
				<view class="repair-input">
					<picker mode="selector" class="uni-input" @change="Change" :value="id" :range="CountryType" style="position: relative;">
						<label class="">{{CountryType[id]}}</label>
					</picker>
				</view>
			</view>
		</view>
		<view class="repair-border">
			<view class="repair-item r1">
				<view class="repair-text r-reason iconfont">
					<text>致贫原因</text>
				</view>
				<view class="repair-input">
					<input class="uni-input" name="name" placeholder="原因" />
				</view>
			</view>
		</view>
		<view class="repair-border">
			<view class="repair-item r6">
				<view class="repair-text r-discribe iconfont">
					问题描述
				</view>
			</view>
			<view class="repair-item r7" >
				<view class="repair-input" style="margin-left: 100rpx">
					<textarea class="uni-input"  placeholder="详细描述遇到的问题" style="float: right; width: 100%;"/>
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
			<view style="height: 150rpx;">
				
			</view>
		</view>
		<view class="bottom-bar">
			<view style="height: 0rpx;">
				
			</view>
			<view class="release-button">
				<button class="r-button1" @click="goBack">取 消</button>
				<button class="r-button2" @click="goBack">提 交</button>
			</view>	
			
		</view>
	</view>
</template>

<script>
	import RegionPicker from '@/components/regionPicker.vue'
	export default {
		components: {
			RegionPicker
		},
		data() {
			return {
				price:"0.00",
				repair_address_main:"地点：请选择",
				goods_name: "点击选择商品",
				imgArr:[],
				donateType:["图书","衣服"],
				donateIndex:0,
				repair_address_main:"请选择",
				problemType:[
					['请选择 省份','天津','浙江','江苏','北京'],
					['市'],
					['区']
				],
				problemItems1:[
					['市'],
					['市','xx1','xx2','xx3'],
					['市','xx4','xx7','xx32'],
					['市','xx5','xx头','xx22'],
					['市','xx6','xx9','xx23']
				],
				problemItems2:[
					['区'],
					['区','水龙头','洁具','照明'],
					['区','瓷砖','床柜','门窗'],
					['区','固定电话','摄像头','网线'],
					['区','绿化养护','花卉布置','园林工程']
				],
				typeIndex:0,
				typeItems1:0,
				typeItems2:0,
				CountryType:
					['一般贫困户','特别贫困户','低保家庭'],
				id:0,
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
			onChangeRegion(region) {
				// console.log('选择的省市区数据：', region);
				var _this = this;
				_this.province = region[0].name;
				_this.city = region[1].name;
				_this.district = region[2].name;
			},
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
			Change(e) {
				this.id = e.detail.value;
			},
			bindIndexChange(e) {
				if(e.detail.column == 0)
				{
					let index = e.detail.value;
					// console.log(index);
					this.problemType[1].splice(0,this.problemType[1].length);
					this.problemType[1] = this.problemType[1].concat(this.problemItems1[index]);
					this.problemType[2].splice(0,this.problemItems1[1].length);
					this.problemType[2] = this.problemType[2].concat(this.problemItems2[index]);
					// console.log(this.problemType[1]);
					this.$forceUpdate();
				}
				if(e.detail.column == 1)
				{
					let index = e.detail.value;
					// console.log(index);
					this.problemType[2].splice(0,this.problemItems1[1].length);
					this.problemType[2] = this.problemType[2].concat(this.problemItems2[index]);
					// console.log(this.problemType[1]);
					this.$forceUpdate();
				}
			},
			
			bindPickerChange(e) {
				this.typeIndex = e.target.value[0];
				this.typeItems1 = e.target.value[1];
				this.typeItems2 = e.target.value[2];
				// const indexValue = this.problemType[0][this.typeIndex];
				// const itemsValue = this.problemType[1][this.typeItems];
				// console.log(value);
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
	.r-reason {
		background-image: url(http://p1362.bvimg.com/10465/0d0b12320e753c2a.png);
		background-repeat: no-repeat;
		background-size: 50rpx;
		background-position: 0 center;
	}
	.r-type {
		/* content: '\e610'; */
		background-image: url(http://p1362.bvimg.com/10465/efdc50502a431203.png);
		background-repeat: no-repeat;
		background-size: 50rpx;
		background-position: 0 center;
	}
	.r-roomNum {
		/* content: '\e627'; */
		background-image: url(http://p1362.bvimg.com/10465/c9b337ad416bb8d2.png);
		background-repeat: no-repeat;
		background-size: 50rpx;
		background-position: 0 center;
	}
	.r-phone {
		/* content: '\efe5'; */
		background-image: url(http://p1362.bvimg.com/10465/ab867bab013a07e6.png);
		background-repeat: no-repeat;
		background-size: 50rpx;
		background-position: 0 center;
	}
	
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
	
	.uni-input2 {
		/* border: 0.5px solid #A6A7A6; */
		border-radius: 12rpx;
		padding: 1rpx;
		/* padding-bottom: 2rpx; */
		font-size: 32rpx;
		color: #A6A7A6;
		/* line-height: 44rpx; */
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
		background-color: rgba(95,123,249,1);
		color: white;
	}
	
	.release-button .r-button1:active {
		background-color: rgba(227,227,227,0.8);
	}
	
	.release-button .r-button2:active {
		background-color: rgba(95,123,249,0.8);
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
