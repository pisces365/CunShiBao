<!-- 政策解读的主页 -->
<template>
	<view>
		<view class="top">		
			<view>
				<image class="topImage" src="http://b1137.bvimg.com/10453/1ac06e8ac644d104.png" mode="widthFix"></image>
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
		data() {
			return {
				titles:[
						  {
							id:0,
							name:"最新政策",
							isActive:true
						  },
						  {
							id:1,
							name:"专家解读",
							isActive:false
						  }
					   ],
					   
				latestPolicy:[//具体信息
					{
						title:"中华人民共和国土地管理法",
						source:"中国政府门户网",
						date:"9"+"月"+"24"+"日",
						reading:"13.5"+"万",
						like:"105",
						url:"https://www.baidu.com"
					},
					{ 
						title:"国务院全民健身",
						source:"中国政府门户网",
						date:"9"+"月"+"24"+"日",
						reading:"13.5"+"万",
						like:"105",
						url:"https://www.baidu.com"
					}
				],
					   
				expertInterpretation:[//具体信息
					{
						title:"数据更积极 向好有根基",
						source:"中国政府门户网",
						date:"9"+"月"+"24"+"日",
						reading:"13.5"+"万",
						like:"105",
						url:"https://www.baidu.com"
					},
					{ 
						title:"创业是更加积极的就业",
						source:"中国政府门户网",
						date:"9"+"月"+"24"+"日",
						reading:"13.5"+"万",
						like:"105",
						url:"https://www.baidu.com"
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
</style>
