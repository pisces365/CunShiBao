import {
	baseUrl
} from './config.js'
//村民精准帮扶申报
export function postApply(data) {
	return new Promise(function(reslove, reject) {
		var token = uni.getStorageSync('token');
		uni.request({
			url: `${baseUrl}/accurateSupport/apply`,
			header: {
				"authorization": token
			},
			method: 'POST',
			data: data,
			success: res => {
				let result = res.data;
				console.log('村民精准帮扶申报', res);
				reslove(result);
			},
			fail: () => {},
			complete: () => {

			}
		})
	})
}

//根据申请表id获取精准帮扶申请详细信息
export function getApply(applyId) {
	return new Promise(function(reslove, reject) {
		uni.request({
			url: `${baseUrl}/accurateSupport/apply/` + applyId,
			method: 'GET',
			success: res => {
				let result = res.data;
				console.log('精准帮扶申请详细信息', result);
				reslove(result);
			},
			fail: () => {},
			complete: () => {}
		})
	})
}

//获取精准帮扶粗略信息列表
export function getList(data) {
	return new Promise(function(reslove, reject) {
		uni.request({
			url: `${baseUrl}/accurateSupport/apply/list`,
			method: 'GET',
			data: data,
			success: res => {
				let result = res.data;
				console.log('精准帮扶粗略信息列表', result);
				reslove(result);
			},
			fail: () => {},
			complete: () => {}
		})
	})
}

//上传精准帮扶走访报告
export function postVisitReport(data) {
	return new Promise(function(reslove, reject) {
		var token = uni.getStorageSync('token');
		uni.request({
			url: `${baseUrl}/accurateSupport/survey/add`,
			header: {
				"authorization": token
			},
			method: 'POST',
			data: data,
			success: res => {
				let result = res.data;
				console.log('走访报告', res);
				reslove(result);
			},
			fail: () => {},
			complete: () => {

			}
		})
	})
}