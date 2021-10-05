<template>
	<view>
		<indexCommon v-if="mainPage==1"></indexCommon>
		<indexOld v-if="mainPage==2"></indexOld>
	</view>
</template>

<script>
	import indexCommon from '@/component/index/index.vue'
	import indexOld from '@/component/index_old/index_old.vue'
	export default {
		components: {
			indexCommon,
			indexOld
		},
		data() {
			return {
				mainPage:1
			}
		},
		onShow() {
			this.mainPage = uni.getStorageSync('mainPage');
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
