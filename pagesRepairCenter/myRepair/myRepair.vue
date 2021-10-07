<template>
	<view>
		<view style="margin:0 30rpx;">
		<workOrderIntroduce  :intro="myIntro"></workOrderIntroduce>
		</view>
	</view>
</template>

<script>
	import workOrderIntroduce from '../../componentB/maintenanceCenter/workOrderIntroduce/workOrderIntroduce.vue'
	export default {
		components: {
			workOrderIntroduce,
		},
		data() {
			return {
				myIntro: [{
					date: "09" + "-" + "29",
					num: "20190606",
					person: "赵芳舟",
					condition: "已派工",
					bool_condition: true,
					pic_url: "http://p1362.bvimg.com/10465/c3a9c337f395eaf7.png",
					campus: "屏峰校区",
					building: "家和西苑13号",
					roomNo: "701",
					Info: "寝室阳台关不上，厕所门掉了，灯时而闪，床塌了，地砖裂了，电风扇没风扇，空调坏了，墙皮没了"
				}]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page {
		background-color: rgb(243, 243, 243);
	}
</style>
