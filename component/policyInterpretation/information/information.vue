<!-- 政策解读每条信息简介 -->
<template>
	<view>
		<view class="news" v-for="(item , index) in info" :key="index">
			<navigator :url="item.url" class="nav">
				<view class="title">
					{{item.title}}
				</view>
				<view class="null">
					
				</view> 
				<view class="bottom-infomation">
					<text class="source">
						{{item.source}}
					</text>
					<text class="date">
						{{item.date}}
					</text>
					<text class="reading">
						阅读 {{item.reading}}
					</text>
					<text class="like"> 
						赞 {{item.like}}
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
		
		border-bottom: 1px solid #A6A7A6;
	}
	
	.nav {
		padding: 30rpx;
	}
	
	.title {
		font-size: 14px;
		/* font-weight: bold; */
	}
	
	.null {
		padding:35rpx 0rpx;
	}
	
	
	
	.bottom-infomation {
		display: flex;
		font-size: 12px;
		color: #A6A7A6;
	}
	.source {
		flex: 1.5;
	}
	.date {
		flex: 1.8;

	}
	.reading {
		flex: 1.1;
	}
	.like {
		flex: 0.6;
	}
</style>
