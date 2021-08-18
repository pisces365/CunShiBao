<!-- 换届选举的主页 -->
<template>
	<view>
		<view>
			<image class="topImage" src="http://b1137.bvimg.com/10453/2c8db019f4c78ad6.png" mode="widthFix"></image>
		</view>
		<navigation :titles="titles" @setItem="ItemSetFunc"></navigation>
		<information v-show="getTitle0()" :info="latestInfo"></information> 
		<personalProfile v-show="getTitle1()" :person="person"></personalProfile> 
	</view>
</template>

<script>
	import navigation from '@/component/policyInterpretation/navigation/navigation.vue'
	import personalProfile from '@/component/election/personalProfile/personalProfile.vue'
	import information from '@/component/policyInterpretation/information/information.vue'
	export default {
		components: { 
			navigation,
			information,
			personalProfile 
		},
		data() {
			return {
				titles:[
						  {
							id:0,
							name:"最新资讯",
							isActive:true
						  },
						  {
							id:1,
							name:"我要投票",
							isActive:false
						  }
					   ],
					   
				latestInfo:[//具体信息
					{
						title:"马尾区召开村级组织换届选举工作推进会",
						source:"中国政府门户网",
						date:"9"+"月"+"24"+"日",
						reading:"13.5"+"万",
						like:"105",
						url:"https://www.baidu.com"
					},
					{ 
						title:"大地乡多搓并举做好村级换届选举工作",
						source:"中国政府门户网",
						date:"9"+"月"+"24"+"日",
						reading:"13.5"+"万",
						like:"105",
						url:"https://www.baidu.com"
					}
				],
					   
				person:[//具体信息
					{
						
						pic_url:"http://b1137.bvimg.com/10453/7326eea62c412fe8.jpg",
						name:"赵芳舟",
						sex:"男",
						age:"28",
						political:"中共党员",
						duties:"村支书",
						vote:"18",
						brief_introduction:"个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介",
						plan:"工作规划工作规划工作规划工作规划工作规划工作规划工作规划工作规划工作规划工作规划工作规划工作规划工作规划工作规划"
					},
					{ 
						pic_url:"http://b1137.bvimg.com/10453/d21bc989b999da41.jpg",
						name:"雷军",
						sex:"女",
						age:"37",
						political:"中共党员",
						duties:"村支书",
						vote:"18",
						brief_introduction:"个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介",
						plan:"工作规划工作规划工作规划工作规划工作规划工作规划工作规划工作规划工作规划工作规划工作规划工作规划工作规划工作规划"					
					} 
				],	   
			}
		},
		methods: {
			  ItemSetFunc(index){				
					for(var i=0;i<this.titles.length;++i)
					{
						this.titles[i].isActive = false;
					}
					this.titles[index].isActive = true;
			  }
			  ,
			  getTitle0() {
				    return this.titles[0].isActive;
			  }
			  ,
			  getTitle1() {
					return this.titles[1].isActive;
			  }
		}
	}
</script>

<style>
	.topImage {
		display: flex;
		width: 750rpx;
	}
</style>

