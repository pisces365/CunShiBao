<!-- 土地承包的主页 -->
<template>
	<view>
		<view class="top">	
			<view>
				<image class="topImage" src="http://p1362.bvimg.com/10465/4b51c243435f7bbc.png" mode="widthFix"></image>
			</view>
			<navigation :titles="titles" @setItem="ItemSetFunc"></navigation>
		</view>
		<view style="height: 420rpx;"></view>
		<contractPublicity v-show="getTitle0()" :publicity="contractPublicity"></contractPublicity>
		<information v-show="getTitle1()" :info="latestInfo"></information> 

	</view>
</template>

<script>
	import navigation from '@/component/policyInterpretation/navigation/navigation.vue'
	import contractPublicity from '@/componentB/landContract/contractPublicity/contractPublicity.vue'
	import information from '@/component/policyInterpretation/information/information.vue'
	export default {
		components: { 
			navigation,
			information,
			contractPublicity 
		},
		data() {
			return {
				titles:[
						  {
							id:0,
							name:"承包公示",
							isActive:true
						  },
						  {
							id:1,
							name:"我要承包",
							isActive:false
						  },
						  {
						  	id:2,
						  	name:"我要出租",
						  	isActive:false
						  }
					   ],
				
				contractPublicity:[
					{
						title:"承包公示信息1",
						date:"9"+"月"+"24"+"日",
						contractInfo:"公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息"
					},
					{
						title:"承包公示信息2",
						date:"9"+"月"+"24"+"日",
						contractInfo:"公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息公示信息"
					}
				],
					   
				latestInfo:[//具体信息
					{
						title:"土地出租信息1",
						source:"中国政府门户网",
						date:"9"+"月"+"24"+"日",
						reading:"13.5"+"万",
						like:"105",
						url:"../../pagesA/policy/policyDetails/policyDetails"
					},
					{ 
						title:"土地出租信息2",
						source:"中国政府门户网",
						date:"9"+"月"+"24"+"日",
						reading:"13.5"+"万",
						like:"105",
						url:"../../pagesA/policy/policyDetails/policyDetails"
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
	@import url("../../common/common_layout.css"); 
	page {
		min-height: 100%;
		background-color: #f3f2f2;
	}
</style>

