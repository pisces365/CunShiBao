(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/mine"],{"0939":function(e,n,t){},"0ae5":function(e,n,t){"use strict";(function(e){t("c85f");a(t("66fd"));var n=a(t("402c"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},3708:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{avatarUrl:"",city:"",country:"",gender:"",language:"",nickName:"",province:"",residentialAddress:"",identify:"村民",IfFillIn:"未填写",ifLoading:!1,userInfomation:{}}},methods:{makeCall:function(){e.makePhoneCall({phoneNumber:"17858407426"})},toAgreement:function(){e.navigateTo({url:"user/user-agree"})},getUserInfo:function(){var n=this;e.getStorageSync("userInfo")?(console.log("已有缓存，直接进入"),e.getStorage({key:"userInfo",success:function(e){n.userInfomation=e.data,n.avatarUrl=e.data.avatarUrl,n.city=e.data.city,n.country=e.data.country,n.gender=e.data.gender,n.language=e.data.language,n.nickName=e.data.nickName,n.province=e.data.province,console.log("获取成功",e)}})):e.getUserProfile({desc:"获取你的名称、头像、地区",success:function(n){"getUserProfile:ok"===n.errMsg?(console.log(n),e.setStorageSync("encryptedData",n.encryptedData),e.setStorageSync("iv",n.iv),e.setStorageSync("rawData",n.rawData),e.setStorageSync("signature",n.signature),e.setStorageSync("securityStatus",1),e.setStorageSync("userInfo",n.userInfo)):e.showToast({title:"授权失败",icon:"error"})},fail:function(e){console.log("userInfo-err",JSON.stringify(e))}})}},onLoad:function(){this.ifLoading=!0}};n.default=t}).call(this,t("543d")["default"])},"402c":function(e,n,t){"use strict";t.r(n);var a=t("6aa1"),r=t("4150");for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);t("6a7a");var c,u=t("f0c5"),i=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);n["default"]=i.exports},4150:function(e,n,t){"use strict";t.r(n);var a=t("3708"),r=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=r.a},"6a7a":function(e,n,t){"use strict";var a=t("0939"),r=t.n(a);r.a},"6aa1":function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return a}));var r=function(){var e=this,n=e.$createElement;e._self._c},o=[]}},[["0ae5","common/runtime","common/vendor"]]]);