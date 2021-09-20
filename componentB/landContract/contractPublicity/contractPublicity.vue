<template name="contractPublicity">
	<view>
		<view class="news" v-for="(item , index) in publicity" :key="index">
			<navigator url="" class="navp">
				<view class="main">
					<view class="publicity-main">
						<text class="publicity-title">{{item.title}}</text> 
						<text class="publicity-date">{{item.date}}</text>
					</view>
					<view class="publicity-info">
						{{item.contractInfo}}
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
		props:["publicity"],
		methods: {
			
		}
	}
</script>

<style>
	.news {
		background-color: white;

	}
	
	.navp {
		display: flex;
		padding: 30rpx 0;
		margin: 0 30rpx;
		border-bottom: 0.24rpx solid #eae9e9;
	}
	
	
	.main {
		position: relative;
		flex:1;	
	}
	
	.publicity-title {
		font-size: 32rpx;
	}
	
	.publicity-date {
		position: absolute;
		font-size: 24rpx;
		right: 0;
		color: #A6A7A6;
	}
	
	.publicity-info {
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
