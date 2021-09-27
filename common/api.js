import {
	baseUrl
} from './config.js'
//发送手机验证码到对应手机上
export function sendSmsCode(data) {
	return new Promise(function(reslove, reject) {
		uni.request({
			url: `${baseUrl}/sms/send`,
			method: 'POST',
			data: data,
			success: res => {
				let result = res.data;
				console.log('发送手机验证码', res);
				reslove(result);
			},
			fail: () => {},
			complete: () => {

			}
		})
	})
}
//用户填写的校验码进行手机绑定验证
export function phoneBind(data) {
	return new Promise(function(reslove, reject) {
		var token = uni.getStorageSync('token');
		uni.request({
			url: `${baseUrl}/bind/phone`,
			header: {
				"authorization": token
			},
			method: 'POST',
			data: data,
			success: res => {
				let result = res.data;
				console.log('手机绑定验证', res);
				reslove(result);
			},
			fail: () => {},
			complete: () => {}
		})
	})
}
//微信用户登录
export function wechatLogin(data) {
	return new Promise(function(reslove, reject) {
		uni.request({
			url: `${baseUrl}/login/wechat`,
			method: 'POST',
			data: data,
			success: res => {
				let result = res.data;
				console.log('微信用户登录', res);
				uni.setStorageSync('token', res.data.data.token)
				uni.setStorageSync('userId', res.data.data.userVo.id)
				reslove(result);
			},
			fail: () => {},
			complete: () => {}
		})
	})
}
//根据可选条件获取房屋出租粗略信息列表
export function houseList(data) {
	return new Promise(function(reslove, reject) {
		uni.request({
			url: `${baseUrl}/houseRent/roughList`,
			method: 'GET',
			data: data,
			success: res => {
				let result = res.data;
				console.log('房屋信息列表', result);
				reslove(result);
			},
			fail: () => {},
			complete: () => {}
		})
	})
}
//根据id获取房屋详细信息
export function houseDetail(id) {
	return new Promise(function(reslove, reject) {
		uni.request({
			url: `${baseUrl}/houseRent/detail/` + id,
			method: 'GET',
			success: res => {
				let result = res.data;
				console.log('房屋具体信息', result);
				reslove(result);
			},
			fail: () => {},
			complete: () => {}
		})
	})
}
//添加房屋预约信息
export function houseOrderAdd(id) {
	return new Promise(function(reslove, reject) {
		uni.request({
			url: `${baseUrl}/houseRent/order/add`,
			method: 'POST',
			success: res => {
				let result = res.data;
				console.log('增加预约信息', result);
				reslove(result);
			},
			fail: () => {},
			complete: () => {}
		})
	})
}
//获取所有村庄信息
export function allVillegeInfo(data) {
	return new Promise(function(reslove, reject) {
		uni.request({
			url: `${baseUrl}/api/getVillageInfoFuzzySearch`,
			method: 'POST',
			data: data,
			success: res => {
				let result = res.data;
				console.log('获取所有村庄信息', result);
				reslove(result);
			},
			fail: () => {},
			complete: () => {}
		})
	})
}
