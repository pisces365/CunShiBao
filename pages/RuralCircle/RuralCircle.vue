<template>
	<view>
		<view class="ruralCicle">
			<view class="ruralCicle-content" v-for="(item,index) in ruralCicleContent" :key="index" @click="toDetail(item.index)">
				<view class="title">
					<view class="title-avatarUrl">
						<image :src="item.avatarUrl" mode=""></image>
					</view>
					<view class="title-nickName">
						{{item.nickName}}
					</view>
				</view>
				<view class="content">
					<view class="content-text">
						{{item.content}}
					</view>
					<view class="content-image">
						<image :src="item.img" mode=""></image>
					</view>
				</view>
				<view class="time">
					{{item.time}}
				</view>
				<view class="cross-line">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ruralCicleContent: [{
					index:0,
					avatarUrl: 'http://p1362.bvimg.com/10465/4f419b20aa6ef9ed.jpg',
					nickName: '安麒',
					title: '处理毛绒玩具',
					content: '闲置毛绒玩具一堆处理，可免费送，又想要的可以打我电话，当面交易',
					time: '2021-7-30 13:30:40',
					img: 'http://p1362.bvimg.com/10465/40212911f00f243c.jpg',
					phone: '13123456789'
				}, {
					index:1,
					avatarUrl: 'http://p1362.bvimg.com/10465/4467bab73422b770.jpg',
					nickName: '晓峰',
					title: '小程序村事宝团队开发招人',
					content: '如果你热爱编程，喜欢团队合作，那么就请你打我电话一起码出未来吧！',
					time: '2021-8-24 10:21:36',
					img: 'http://p1362.bvimg.com/10465/02b4044a40630082.jpg',
					phone: '17858407426'
				}, {
					index:2,
					avatarUrl: 'http://p1362.bvimg.com/10465/5f98911a39b19f73.jpg',
					nickName: '坤子哥',
					title: '出租房屋',
					content: '我家有4间空房出租，朝向很好，设施齐全，可以拎包入住，先到先得哦',
					time: '2021-8-26 18:35:20',
					img: 'http://p1362.bvimg.com/10465/6c676af84ec35c3a.jpg',
					phone: '17885256548'
				}, {
					index:3,
					avatarUrl: 'http://p1362.bvimg.com/10465/bd57ab22ae9a2958.jpg',
					nickName: '政瀚',
					title: '宠物领养',
					content: '乡村的各位圈友们，本人想领养一只狗狗，主要是为了提升小孩的爱心和和别人相处的能力，可以有偿领养',
					time: '2021-7-26 22:56:28',
					img: 'http://p1362.bvimg.com/10465/f09b796cb62f4850.jpg',
					phone: '13968083785'
				}, {
					index:4,
					avatarUrl: 'http://p1362.bvimg.com/10465/7425cbd11af312a6.jpg',
					nickName: '捷宁',
					title: '广场舞招募人啦',
					content: '咱们社区发展这么好，有一块儿空场地儿给俺们专门跳舞，一起约起来啊！',
					time: '2021-8-16 11:23:36',
					img: 'http://p1362.bvimg.com/10465/1b5faa1e9dfb44b3.jpg',
					phone: '13865428952'
				}]
			}
		},
		methods: {
			toDetail(index){
				let _this = this
				var info = JSON.stringify(_this.ruralCicleContent[index]); // 这里转换成 字符串
				uni.navigateTo({
					url: 'ruralCircleDetail?info='+info
				})
			}
		}
	}
</script>

<style>
	.ruralCicle {
		padding: 30rpx;
		padding-left: 40rpx;
	}

	.title {
		display: flex;
		align-items: center;
		/* justify-content: center; */
	}

	.title-avatarUrl {
		height: 70rpx;
		width: 70rpx;
		border-radius: 40rpx;
		overflow: hidden;
	}

	.title-avatarUrl image {
		width: 100%;
		height: 100%;
	}

	.title-nickName {
		margin-left: 30rpx;
		font-size: 32rpx;
	}

	.content {
		margin-top: 20rpx;
	}

	.content-image {
		margin-top: 20rpx;
		height: 200rpx;
		width: 260rpx;
		overflow: hidden;
	}

	.content-image image {
		width: 100%;
		height: 100%;
	}
	.time{
		margin-top: 20rpx;
		font-size: 28rpx;
		color: #737473;
	}
	.cross-line{
		margin: 20rpx 0;
		background: #DCDDDC;
		height: 2rpx;
		width: 100%;
	}
</style>
