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
				console.log('发送手机验证码',res);
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
		uni.request({
			url: `${baseUrl}/bind/phone`,
			method: 'POST',
			data: data,
			success: res => {
				let result = res.data;
				console.log('手机绑定验证',res);
				reslove(result);
			},
			fail: () => {},
			complete: () => {
			}
		})
	})
}