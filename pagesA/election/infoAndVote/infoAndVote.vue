<!-- 换届选举的主页 -->
<template>
	<view>
		<view class="top">
			<view>
				<image class="topImage" src="http://p1362.bvimg.com/10465/5981e6676b65372d.png" mode="widthFix"></image>
			</view>
			<navigation :titles="titles" @setItem="ItemSetFunc"></navigation>
		</view>
		<view style="height: 420rpx;"></view>
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
						title:"精心做好换届选举“后半篇”",
						source:"村换届选举委员会",
						date:"12"+"月"+"23"+"日",
						reading:"13.5"+"万",
						like:"105",
						url:"../../policy/policyDetails/policyDetails?id=0"
					},
					{ 
						title:"“三心”聚力 做好换届选举",
						source:"村换届选举委员会",
						date:"3"+"月"+"14"+"日",
						reading:"13.5"+"万",
						like:"105",
						url:"../../policy/policyDetails/policyDetails?id=1"
					}
				],
					   
				person:[//具体信息
					{
						
						pic_url:"http://p1362.bvimg.com/10465/a61cef977dc06b42.jpg",
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
						pic_url:"http://p1362.bvimg.com/10465/926e05346203527e.jpg",
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
	@import url("../../../common/common_layout.css"); 
	page {
		min-height: 100%;
		background-color: #f3f2f2;
	}
</style>

