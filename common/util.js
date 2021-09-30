const baseUrl = '';
const nowTime = Date.now || function() {
	return new Date().getTime();
};
var app = getApp();
export default {
	baseUrl,
	nowTime,
	//获取openID
	calculateTimeDiff: function(endTime) {
		let _this = this
		endTime = Date.parse(endTime)
		let currentTime = Date.now();
		// console.log(currentTime)
		// console.log(endTime);
		let timeDiff = endTime-currentTime;
		// console.log(timeDiff);
		let secondDiff =  Math.floor((endTime - currentTime) / 1000);
		let minuteDiff = Math.floor(secondDiff / 60);
		let hourDiff = Math.floor(minuteDiff / 60);
		let dayDiff = Math.floor(hourDiff / 24);
		hourDiff = Math.floor(hourDiff % 24);
		minuteDiff = Math.floor(minuteDiff % 60);
		secondDiff = Math.floor(secondDiff % 60);
		let timeLag = {
			dayDiff: dayDiff,
			hourDiff: hourDiff,
			minuteDiff: minuteDiff,
			secondDiff: secondDiff
		}
		return timeLag
	},
	
	//是否为空
	isNullOrEmpty: function(value) {
		return (value === null || value === '' || value === undefined) ? true : false;
	},

	//是否为手机号	
	isMobile: function(value) {
		return /^(?:13\d|14\d|15\d|16\d|17\d|18\d|19\d)\d{5}(\d{3}|\*{3})$/.test(value);
	},
	//是否包含座机地址
	isLandline: function(value) {
		return /0\d{2,3}-\d{7,8}|\(?0\d{2,3}[)-]?\d{7,8}|\(?0\d{2,3}[)-]*\d{7,8}/.test(value)
	},
	//金额，只允许保留两位小数
	isFloat: function(value) {
		return /^([0-9]*[.]?[0-9])[0-9]{0,1}$/.test(value);
	},
	//是否全为数字
	isNum: function(value) {
		return /^[0-9]+$/.test(value);
	},
	//是否包含中文字符
	isCharacter: function(value) {
		return /[\u4e00-\u9fa5]/.test(value)
	},
	//是否包含Url地址
	isUrl: function(value) {
		return /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/.test(value)
	},
	//是否包含空白行
	isUrl: function(value) {
		return /\s/.test(value)
	},
	//是否包含Email地址
	isEmail: function(value) {
		return /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(value)
	},
	//去空格
	trim: function(value) {
		return value.replace(/(^\s*)|(\s*$)/g, "");
	},
	//密码为8~20位数字和字母组合
	checkPwd: function(value) {
		return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/.test(value);
	},
	//格式手机号码
	formatNum: function(num) {
		if (regextool.isMobile(num)) {
			num = num.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
		}
		return num;
	},
	isCardNo: function(num) {
		if (isNaN(num)) {
			// alert("输入的身份证号不是数字！");
			return false;
		}
		var len = num.length;
		if (len < 15 || len > 18) {
			// alert("输入的身份证号码长度不正确定！应为15位或18位");
			return false;
		}
		var re15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
		var re18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;
		var res = (re15.test(num) || re18.test(num));
		if (res == false) {
			// alert("输入的身份证号格式不正确！");
			return false;
		}
		return true;
	},
	isChines: function(source) {
		var regex = /^[\u4E00-\u9FA5]+$/;
		return regex.test(source);
	},
	handleOptions(options) {
		console.log(options);
		if(options.query) {
			return options.query
		} else {
			return {}
		}
	}
}
