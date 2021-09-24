<template>
	<view>
		<navigator class="IAmRenter" url="../rent_index/rent_index">
			我是租客
		</navigator>
		<navigator class="IAmHost" url="../host_qualification/host_qualification">
			我是户主
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.IAmRenter{
		margin: 30rpx;
		margin-top: 50rpx;
		border-radius: 20rpx;
		height: 130rpx;
		background: #FF7425;
		color: white;
		font-size: 50rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
	}
	.IAmHost{
		margin: 30rpx;
		border-radius: 20rpx;
		height: 130rpx;
		background: #23C890;
		color: white;
		font-size: 50rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
	}
</style>
