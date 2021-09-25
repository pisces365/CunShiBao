<!-- 维修中心的主页 -->
<template>
	<view>		
		<view class="top">	
			<view>
				<image class="topImage" src="http://p1362.bvimg.com/10465/518d95f0952dc833.png" mode="widthFix"></image>
			</view>
			<navigation  :titles="titles" @setItem="ItemSetFunc"></navigation>
		</view>
		<view style="height: 420rpx;"></view>
		<workOrderIntroduce v-show="getTitle0()" :intro="allIntro"></workOrderIntroduce>
		<iWannaRepair v-show="getTitle1()"></iWannaRepair>	
		<workOrderIntroduce v-show="getTitle2()" :intro="myIntro"></workOrderIntroduce>
	</view>
</template>

<script>
	import navigation from '../../component/policyInterpretation/navigation/navigation.vue'
	import workOrderIntroduce from '../../componentB/maintenanceCenter/workOrderIntroduce/workOrderIntroduce.vue'
	import iWannaRepair from '../../componentB/maintenanceCenter/iWannaRepair/iWannaRepair.vue'
	export default {
		components: { 
			navigation,
			workOrderIntroduce,
			iWannaRepair
		},
		data() {
			return {
				titles:[
						  {
							id:0,
							name:"报修广场",
							isActive:true
						  },
						  {
							id:1,
							name:"我要报修",
							isActive:false
						  },
						  {
						  	id:2,
						  	name:"我的报修",
						  	isActive:false
						  },
						  {
						  	id:3,
						  	name:"我的工单",
						  	isActive:false
						  }
					   ],
				
				allIntro:[
					{
						date:"09"+"-"+"29",
						num:"20190606",
						person:"赵芳舟",
						condition:"已派工",
						bool_condition:true,
						pic_url:"http://p1362.bvimg.com/10465/c3a9c337f395eaf7.png",
						campus:"屏峰校区",
						building:"家和西苑13号",
						roomNo:"701",
						Info:"寝室阳台关不上，厕所门掉了，灯时而闪，床塌了，地砖裂了，电风扇没风扇，空调坏了，墙皮没了"
					},
					{
						date:"08"+"-"+"28",
						num:"20180606",
						person:"雷军",
						condition:"待派工",
						bool_condition:false,
						pic_url:"http://p1362.bvimg.com/10465/c3a9c337f395eaf7.png",
						campus:"屏峰校区",
						building:"家和西苑树屋",
						roomNo:"000",
						Info:"寝室阳台关不上，厕所门掉了，灯时而闪，床塌了，地砖裂了，电风扇没风扇，空调坏了，墙皮没了"
					}
				],
				myIntro:[
					{
						date:"09"+"-"+"29",
						num:"20190606",
						person:"赵芳舟",
						condition:"已派工",
						bool_condition:true,
						pic_url:"http://p1362.bvimg.com/10465/c3a9c337f395eaf7.png",
						campus:"屏峰校区",
						building:"家和西苑13号",
						roomNo:"701",
						Info:"寝室阳台关不上，厕所门掉了，灯时而闪，床塌了，地砖裂了，电风扇没风扇，空调坏了，墙皮没了"
					}
				]
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
			  ,
			  getTitle2() {
			  		return this.titles[2].isActive;
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

