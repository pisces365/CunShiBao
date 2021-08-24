<template name="workOrderIntroduce">
	<view>
		<view class="news" v-for="(item , index) in intro" :key="index">
			<navigator url="../../pagesB/maintenanceDetails/maintenanceDetails" class="navw">
				<view class="main">
					<view class="intro-main">
						<text class="intro-information">[{{item.date}}] {{item.num}} {{item.person}}</text> 
						<text :class="[item.bool_condition?'intro-condition':'intro-condition intro-yellow-condition']">{{item.condition}}</text>
					</view>
					<view class="intro-details">
						<view class="intro-pic-border"> 
							<image :src="item.pic_url" mode="widthFix" class="intro-picture"></image>
							<!-- http://p1362.bvimg.com/10465/c3a9c337f395eaf7.png -->
						</view>
						<view class="intro-context-border">
							<view class="iconfont intro-address">
								{{item.campus}}·{{item.building}}·{{item.roomNo}}
							</view>
							<view class="intro-info">
								{{item.Info}}
							</view>
						</view>
					</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:["intro"],
		methods: {
			
		}
	}
</script>

<style>
	@import url("../../../common/iconfont.css");
	
	.news {
		background-color: white;
	}
	
	.navw {
		display: flex;
		padding: 34rpx 0;
		margin: 0 30rpx;
		border-bottom: 0.24rpx solid #eae9e9;
	}
	
	
	.main {
		position: relative;
		flex:1;	
	}
	
	.intro-main {
		position: relative;
	}
	
	.intro-details {
		margin-top: 30rpx;
		display: flex;
	}
	
	.intro-title {
		font-size: 32rpx; 
	}
	
	.intro-condition {
		position: absolute;
		font-size: 24rpx;
		right: 0;
		color: white;
		background-color: #4ecf68;
		padding: 5rpx;
		border-radius: 10rpx;
		box-shadow: 10rpx 10rpx 20rpx #dbdcdb;
	}
	
	.intro-yellow-condition {
		background-color: #fcbd03 !important;
	}
	
	.intro-pic-border {
		flex: 1;
	}
	
	.intro-picture {
		
		width: 110rpx;
		box-shadow: 5rpx 5rpx 20rpx #dbdcdb;
	}
	
	.intro-context-border {
		flex: 4;
	}
	
	.intro-info {
		font-size: 12px;
		word-break: break-word; /* 不允许单词内换行 */
		text-overflow: ellipsis; /* 超出部分为省略号 */
		color: #A6A7A6;
		display: -webkit-box; /* 设置为伸缩盒 */
		-webkit-box-orient: vertical; /* 子元素排列方式 */
		-webkit-line-clamp: 2; /* 显示行数 */
		overflow: hidden; /* 超出部分隐藏 */
	}
	
	.intro-address {
		font-size: 24rpx;
		color: #939493;
		font-weight: bold;
		margin-bottom: 10rpx;
	}
	
	.intro-address:before {
		content: '\e60e';
	}
	
	.intro-information {
		font-size: 32rpx;
	}
</style>
