(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesMarket/release/release"],{"48d6":function(e,t,n){"use strict";n.r(t);var a=n("6cdf"),c=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=c.a},6631:function(e,t,n){"use strict";n.r(t);var a=n("d171"),c=n("48d6");for(var r in c)"default"!==r&&function(e){n.d(t,e,(function(){return c[e]}))}(r);n("6cc9");var i,s=n("f0c5"),o=Object(s["a"])(c["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);t["default"]=o.exports},"6cc9":function(e,t,n){"use strict";var a=n("d073"),c=n.n(a);c.a},"6cdf":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{price:"0.00",repair_address_main:"地点：请选择",imgArr:[],category:[{id:0,selected:!1,name:"电子"},{id:1,selected:!1,name:"毛绒"},{id:2,selected:!1,name:"智能产品设备"},{id:3,selected:!1,name:"金属制品"}],brand:[{selected:!1,name:"雅达利"},{selected:!1,name:"苹果"},{selected:!1,name:"东方树叶"},{selected:!1,name:"迪卡侬"},{selected:!1,name:"布鲁托"}],quality:[{selected:!1,name:"棉柔"},{selected:!1,name:"丝滑"},{selected:!1,name:"大自然的感觉"},{selected:!1,name:"凉爽"}]}},methods:{get_imgArrLength:function(){return!(this.imgArr.length>=4)},chooseImg:function(){var t=this;e.chooseImage({count:4-this.imgArr.length,success:function(e){t.imgArr=t.imgArr.concat(e.tempFilePaths)}})},deleteImg:function(e){this.imgArr.splice(e,1)},chooseLocation:function(t){var n=this;e.chooseLocation({success:function(e){n.repair_address_main="地点："+e.address}})},changeCategoryButtonColor:function(e,t){switch(e){case"category":for(var n=0;n<this.category.length;++n)this.category[n].selected=!1;this.category[t].selected=!0;break;case"brand":for(n=0;n<this.brand.length;++n)this.brand[n].selected=!1;this.brand[t].selected=!0;break;case"quality":for(n=0;n<this.quality.length;++n)this.quality[n].selected=!1;this.quality[t].selected=!0;break}},goBack:function(){e.navigateBack({delta:1})}}};t.default=n}).call(this,n("543d")["default"])},9530:function(e,t,n){"use strict";(function(e){n("c85f");a(n("66fd"));var t=a(n("6631"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},d073:function(e,t,n){},d171:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var c=function(){var e=this,t=e.$createElement,n=(e._self._c,e.get_imgArrLength());e.$mp.data=Object.assign({},{$root:{m0:n}})},r=[]}},[["9530","common/runtime","common/vendor"]]]);