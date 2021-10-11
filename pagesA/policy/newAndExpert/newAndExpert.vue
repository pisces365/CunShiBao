<!-- 政策解读的主页 -->
<template>
	<view>
		<view class="top">
			<view>
				<image class="topImage" src="http://p1362.bvimg.com/10465/6f9eb56b92010ff7.png" mode="widthFix"></image>
			</view>
			<navigation :titles="titles" @setItem="ItemSetFunc"></navigation>
		</view>
		<view style="height: 420rpx;"></view>
		<information v-show="getTitle0()" :info="latestPolicy"></information>
		<information v-show="getTitle1()" :info="expertInterpretation"></information>
	</view>
</template>

<script>
	import navigation from '@/component/policyInterpretation/navigation/navigation.vue'
	import information from '@/component/policyInterpretation/information/information.vue'
	export default {
		components: {
			navigation,
			information
		},
		onShow() {
			this.latestPolicy = [ //具体信息
					{
						title: "辽宁省康平县：稻蟹共生促发展 一田两用助增收",
						source: "康平融媒号",
						date: "2021年08月24日",
						reading: "8,496",
						like: "6,318",
						url: "../../News?newsID=2"
					},
					{
						title: "农业农村部要求分区分类精准施策确保秋粮丰收",
						source: "新华网",
						date: "2021年08月19日",
						reading: "54,047",
						like: "2,215",
						url: "../../News?newsID=1"
					},

					{
						title: "关于公开征集文化强国建设意见建议的公告",
						source: "学习强国",
						date: "2021年08月03日",
						reading: "7,672",
						like: "6,006",
						url: "../../News?newsID=4"
					},
					{
						title: "关于公开征集文化强国建设意见建议的公告",
						source: "人民日报",
						date: "2021年08月03日",
						reading: "32万",
						like: "808,737",
						url: "../../News?newsID=5"
					},
					{
						title: "以乡村全面振兴助力农业农村现代化",
						source: "经济日报",
						date: "2021年05月12日",
						reading: "21,567",
						like: "1,754",
						url: "../../News?newsID=3"
					}
				];
			this.expertInterpretation=[ //具体信息
				{
					title: "打赢脱贫攻坚战  稳住“三农”压舱石——专家解读2020年中央一号文件",
					source: "人民网",
					date: "2020年02月07日",
					reading: "32,313",
					like: "1,571",
					url: "../../News?newsID=6"
				},
				{
					title: "三农专家顾益康：坚持统筹城乡发展是浙江经济发展的重要经验",
					source: "新华社",
					date: "2018年11月18日",
					reading: "1,457",
					like: "343",
					url: "../../News?newsID=7"
				}
			];
			let news = uni.getStorageSync('news');
			for(var j=0;j<this.latestPolicy.length;++j)
			{
				
				this.latestPolicy[j].url += '&doyoulike=false';
				this.expertInterpretation[j].url += '&doyoulike=false';
			}
			if(news == "")
			{
				
				return;
			}
			let news_array = news.split('#%%#');
			for(var i=0;i<news_array.length;++i)
			{
				let temp = JSON.parse(news_array[i]);
				// console.log(temp);
				for(var j=0;j<news_array.length;++j)
				{
					if(temp.title.titleContent == this.latestPolicy[j].title)
					{
						this.latestPolicy[j].url += '&doyoulike=true';
						
						continue;
					}
					if(temp.title.titleContent == this.expertInterpretation[j].title)
					{
						
						this.expertInterpretation[j].url += '&doyoulike=true'
						continue;
					}
				}
				// title: "辽宁省康平县：稻蟹共生促发展 一田两用助增收",
				// source: "康平融媒号",
				// date: "2021年08月24日",
				// reading: "8,496",
				// like: "6,318",
				// url: "../../News?newsID=2"
			}
		},
		data() {
			return {
				titles: [{
						id: 0,
						name: "最新政策",
						isActive: true
					},
					{
						id: 1,
						name: "专家解读",
						isActive: false
					}
				],

				latestPolicy: [ //具体信息
					{
						title: "辽宁省康平县：稻蟹共生促发展 一田两用助增收",
						source: "康平融媒号",
						date: "2021年08月24日",
						reading: "8,496",
						like: "6,318",
						url: "../../News?newsID=2"
					},
					{
						title: "农业农村部要求分区分类精准施策确保秋粮丰收",
						source: "新华网",
						date: "2021年08月19日",
						reading: "54,047",
						like: "2,215",
						url: "../../News?newsID=1"
					},

					{
						title: "关于公开征集文化强国建设意见建议的公告",
						source: "学习强国",
						date: "2021年08月03日",
						reading: "7,672",
						like: "6,006",
						url: "../../News?newsID=4"
					},
					{
						title: "关于公开征集文化强国建设意见建议的公告",
						source: "人民日报",
						date: "2021年08月03日",
						reading: "32万",
						like: "808,737",
						url: "../../News?newsID=5"
					},
					{
						title: "以乡村全面振兴助力农业农村现代化",
						source: "经济日报",
						date: "2021年05月12日",
						reading: "21,567",
						like: "1,754",
						url: "../../News?newsID=3"
					}
				],

				expertInterpretation: [ //具体信息
					{
						title: "打赢脱贫攻坚战  稳住“三农”压舱石——专家解读2020年中央一号文件",
						source: "人民网",
						date: "2020年02月07日",
						reading: "32,313",
						like: "1,571",
						url: "../../News?newsID=6"
					},
					{
						title: "三农专家顾益康：坚持统筹城乡发展是浙江经济发展的重要经验",
						source: "新华社",
						date: "2018年11月18日",
						reading: "1,457",
						like: "343",
						url: "../../News?newsID=7"
					}
				],
			}
		},
		methods: {
			ItemSetFunc(index) {
				for (var i = 0; i < this.titles.length; ++i) {
					this.titles[i].isActive = false;
				}
				this.titles[index].isActive = true;
			},
			getTitle0() {
				return this.titles[0].isActive;
			},
			getTitle1() {
				return this.titles[1].isActive;
			}
		}
	}
</script>

<style>
	.topImage {
		border-radius: 20rpx;
		margin: 30rpx;
		margin-bottom: 0;
		display: block;
		width: 690rpx;
	}

	.top {
		box-shadow: 0rpx 10rpx 30rpx #dcdddc;
		background-color: white;
		z-index: 100;
		float: left;
		width: 100%;
		position: fixed;
	}

	page {
		min-height: 100%;
		background-color: #f3f2f2;
	}
</style>
