<template>
	<view>
		<view class="news" v-for="(item , index) in person" :key="index">
			<navigator :url="'../../../pagesA/election/personalDetails/personalDetails?person='+encodeURIComponent(JSON.stringify(person[index]))" class="navi">
				<view>
					<image :src="item.pic_url" mode="widthFix" class="personal-picture"></image>
				</view>
				<view class="main">
					<view class="person-title">
						{{item.name}} {{item.sex}} {{item.age}}岁
					</view>
					<view class="person-info">
						{{item.brief_introduction}}
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
		props:["person"],
		methods: {
			
		}
	}
</script>

<style>
	.news {
		background-color: white;
	}
	
	.navi {
		display: flex;
		padding: 30rpx 0;
		margin: 0 30rpx;
		border-bottom: 0.24rpx solid #eae9e9;
	}
	
	.personal-picture {
		flex: 1;
		width: 120rpx;
		box-shadow: 0 0 20rpx #A6A7A6;
	}
	
	.main {
		flex: 4;
		margin-left: 30rpx;
	}
	
	.person-title {
		font-size: 32rpx;
	}
	
	.person-info {
		margin-top: 20rpx;
		font-size: 24rpx;
		word-break: break-word; /* 不允许单词内换行 */
		text-overflow: ellipsis; /* 超出部分为省略号 */
		color: #A6A7A6;
		display: -webkit-box; /* 设置为伸缩盒 */
		-webkit-box-orient: vertical; /* 子元素排列方式 */
		-webkit-line-clamp: 3; /* 显示行数 */
		overflow: hidden; /* 超出部分隐藏 */
	}
	
</style>
