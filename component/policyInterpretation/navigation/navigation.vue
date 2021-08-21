<!-- 政策解读的导航 -->
<template>
<view class="tabs" style="background-color: white;">
  <view class="tabs_title">
	 <view :class="'tabs_border tabs_border'+index" v-for="(item , index) in titles" :key="index">
	 	    <view  :class="[item.isActive ? 'title_item active':'title_item']" @click="hanldeItemTap(index)">
			{{item.name}}
			</view>
	 </view> 

  </view>
  <view class="tabs_content">
    <slot></slot>
  </view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:["titles"],
		methods: {
			    hanldeItemTap:function(index){
					this.$emit("setItem",index);
			    }
		}
	}
</script>

<style>
	.tabs{
		
	}
	.tabs_title{
	  display: flex;
	  /* padding-top: 30rpx;
	  padding-bottom: 30rpx; */
	  /* border-bottom: 1px solid #bbbbbb; */
	  /* height: 96rpx; */
	}
	.title_item{
	  height: 96rpx;
	  justify-content: center;
	  align-items: center;
	  /* margin-left: 25%;
	  margin-right: 25%; */
	  color: #A6A7A6;
	  font-size: 32rpx;
	  border-bottom: 2px solid transparent;
	  /* width: 112rpx; */
	  line-height: 96rpx;
	  margin:0 auto;
	}
	
	.tabs_border {
		/* padding-left: 8%;
		padding-right: 8%; */	
	}
	
	.tabs_border0 {
		flex: 1;
		display: flex;
		/* border-right: 1px solid #a6a7a6; */
	}
	
	.tabs_border1 {
		flex: 1;
		display: flex;
		/* border-left: 1px solid #a6a7a6; */
	}
	
	.tabs_border2 {
		flex: 1;
		display: flex;
		/* border-left: 1px solid #a6a7a6; */
	}
	
	.active{
	  color:#101010;
	  border-bottom: 8rpx solid #4ecf68;
	  color: #4ecf68;
	  /* font-weight: bold; */
	}
	.tabs_content{}
</style>
