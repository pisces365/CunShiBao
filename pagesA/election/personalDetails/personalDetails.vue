<template>
	<view id="page">
		<view class="float-back" v-show="showFloatWindow">
			<view class="float-window">
				<view class="iconfont close" @click="toVote()">
					
				</view>
				<view class="success">
					投票成功!
				</view>
				<view class="submit" @click="submit()">
					确定
				</view>
			</view>
		</view>
		
		<view class="detail">
			<view>
				<image :src="person.pic_url" mode="widthFix" class="personal-picture"></image>
			</view>
			<view class="main">
				<view class="personal-item">
					姓名：{{person.name}}
				</view>
				<view class="personal-item">
					性别：{{person.sex}}
				</view>
				<view class="personal-item">
					年龄：{{person.age}}
				</view>
				<view class="personal-item">
					政治面貌：{{person.political}}
				</view>
				<view class="personal-item">
					竞选职务：{{person.duties}}
				</view>
			</view>
			<view class="vote">
				{{person.vote}}票
			</view>
		</view>
		<view class="more">
			<view class="more-title" id="brief_introduction">
				个人简历
			</view>
			<view class="more-detail">
				{{person.brief_introduction}}
			</view>
		</view>
		<view class="more">
			<view class="more-title" id="plan">
				工作规划
			</view>
			<view class="more-detail">
				{{person.plan}}
			</view>
		</view>
		
		
		<view class="null">
			
		</view>
		<view class="vote-border" @click="toVote()">
			<view class="I-Wanna-Vote">
				我要投票
			</view>
		</view>		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				person:{},
				showFloatWindow:false
			}
		},
		methods: {
			toVote() {
				this.showFloatWindow = !this.showFloatWindow;
			}
			,
			submit() {
				// 上传数据（待写）
				
				// 退回上一页
				uni.navigateBack();
			}
		},
		onLoad(option) {
			const person = JSON.parse(decodeURIComponent(option.person));
			// console.log(person);
			this.person = person;
		}
	}
</script>

<style>
	@import url("../../../common/iconfont.css");
	/*  */
	.float-back {
		float: left;
		z-index: 100;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(110,110,110,0.6);
		
	}
	
	.float-window {
		position: relative;
		height: 200rpx;
		width: 300rpx;
		padding: 20rpx;
		background-color: #ffffff;
		border-radius: 26rpx;
		margin:0 auto;
		top: 30%;
	}
	
	.float-window .close {
		position: absolute;
		right: 20rpx;
	}
	
	.float-window .close:before {
		content: "\e628";
	}
	
	.success {
		text-align: center;
		margin-top: 60rpx;
		font-size: 14px;
		margin-bottom: 40rpx;
	}
	
	.submit {
		margin: 0 auto;
		text-align: center;
		line-height: 56rpx;
		width: 100rpx;
		height: 56rpx;
		border-radius: 14rpx;
		font-size: 12px;
		background-color: #a4adb3;
		color: white;
	}
	
	/*  */
	#page {
		margin: 50rpx 70rpx;
	}
	
	.detail {
		display: flex;
		font-size: 14px;
	}
	
	.personal-picture {
		flex: 2;
		width: 200rpx;
		box-shadow: 0 0 20rpx #A6A7A6;
	}
	
	.main {
		flex: 3;
		margin-left: 40rpx;
	}
	
	.main .personal-item {
		margin:6px 0;
	}
	
	.vote {
		flex: 1;
		color: #b14900;
		font-weight: bold;
		font-size: 18px;
	}
	
	
	
	/*  */
	.more {
		margin-top: 30rpx;
	}
	
	.more .more-title {
		
		background-size: contain;
		background-repeat: no-repeat;
		font-size: 14px;
		height: 50rpx;
		padding-left: 60rpx;
		line-height: 50rpx;
	}
	
	.more #brief_introduction {
		background-image: url(http://b1137.bvimg.com/10453/4fb1f0f8543fb300.png);
	}
	
	.more #plan {
		background-image: url(http://b1137.bvimg.com/10453/d81dddb9d782d65c.png);
	}
	
	.more .more-detail {
		margin-top: 10rpx;
		font-size: 12px;
		color: #A6A7A6;
	}
	
	
	/*  */
	.null {
		height: 30rpx;
	}
	
	.vote-border {
		display: block;
		margin: 0 auto;
		width: 200rpx;
		
		padding: 10rpx;
		
		border-radius: 20rpx;
		background-color: #a1bf56;
	}
	
	.I-Wanna-Vote {
		
		background-image: url(http://b1137.bvimg.com/10453/cb9e47eb1f91b834.png);
		background-size: contain;
		background-repeat: no-repeat;
		
		font-size: 14px;
		height: 60rpx;
		padding-left: 76rpx;
		line-height: 60rpx;
		color: white;
		
	}
	
</style>
