<!-- 政策解读每条信息简介 -->
<template name="information">
	<view>
		<view class="news" v-for="(item , index) in info" :key="index">
			<navigator :url="item.url" class="nav">
				<view class="title">
					{{item.title}}
				</view>
				<view class="bottom-infomation">
					<text class="source">
						{{item.source}}
					</text>
					<text class="date">
						{{item.date}}
					</text>
					<text class="reading">
						<text>阅读 {{item.reading}}</text>
					</text>
					<text class="like"> 
						<text>赞 {{item.like}}</text>						
					</text>
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
		props:["info"],
		methods: {
			
		}
	}
</script>

<style>
	.news {
		background-color: white;		
	}
	
	.nav {
		padding: 30rpx 0;
		margin: 0 30rpx;
		border-bottom: 0.24rpx solid #eae9e9;
	}
	
	.title {
		margin:0 10rpx 10rpx 10rpx;
		font-size: 36rpx;
	}
	.bottom-infomation {
		margin-top: 30rpx;
		margin-left: 10rpx;
		font-size: 26rpx;
	}
	.source,.date{
		color: #939493;
		margin-right: 20rpx;
	}
	.reading,.like {
		float: right;
		margin-right: 20rpx;
	}
	/* .reading text {
		color: rgba(86,120,243,1);
		background-color: rgba(86,120,243,0.1);
		padding: 5rpx;
		border-radius: 5rpx;
		/* box-shadow: 10rpx 10rpx 20rpx #dbdcdb; */
	/* } 
	 */
	.like {
		flex: 0.6;
	}
	/* .like text {
		color: rgba(255,69,91,1);
		background-color: rgba(255,69,91,0.1);
		padding: 5rpx;
		border-radius: 5rpx;
		/* box-shadow: 10rpx 10rpx 20rpx #dbdcdb; */
	/* } 
	*/
	.reading text {
		color: rgb(109, 141, 173);
		background-color: rgba(109, 141, 173, 0.1);
		padding: 5rpx;
		border-radius: 5rpx;
		/* box-shadow: 10rpx 10rpx 20rpx #dbdcdb; */
		font-weight: 600;
	}
	.like text {
		color: rgb(158, 65, 46);
		background-color: rgba(158, 65, 46, 0.1);
		padding: 5rpx;
		border-radius: 5rpx;
		/* box-shadow: 10rpx 10rpx 20rpx #dbdcdb; */
		font-weight: 600;
	}
</style>
