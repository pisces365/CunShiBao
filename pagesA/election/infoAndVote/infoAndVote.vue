<!-- 换届选举的主页 -->
<template>
	<view>
		<view class="top">
			<view>
				<image class="topImage" src="http://p1362.bvimg.com/10465/5981e6676b65372d.png" mode="widthFix"></image>
			</view>
			<navigation :titles="titles" @setItem="ItemSetFunc"></navigation>
		</view>
		<view style="height: 420rpx;"></view>
		<information v-show="getTitle0()" :info="latestInfo"></information> 
		<personalProfile v-show="getTitle1()" :person="person"></personalProfile> 
	</view>
</template>

<script>
	import navigation from '@/component/policyInterpretation/navigation/navigation.vue'
	import personalProfile from '@/component/election/personalProfile/personalProfile.vue'
	import information from '@/component/policyInterpretation/information/information.vue'
	export default {
		components: { 
			navigation,
			information,
			personalProfile 
		},
		data() {
			return {
				titles:[
						  {
							id:0,
							name:"最新资讯",
							isActive:true
						  },
						  {
							id:1,
							name:"我要投票",
							isActive:false
						  }
					   ],
					   
				latestInfo:[//具体信息
					{
						title:"精心做好换届选举“后半篇”",
						source:"村换届选举委员会",
						date:"12"+"月"+"23"+"日",
						reading:"13.5"+"万",
						like:"105",
						url:"../../policy/policyDetails/policyDetails?id=0"
					},
					{ 
						title:"“三心”聚力 做好换届选举",
						source:"村换届选举委员会",
						date:"3"+"月"+"14"+"日",
						reading:"13.5"+"万",
						like:"105",
						url:"../../policy/policyDetails/policyDetails?id=1"
					}
				],
					   
				person:[//具体信息
					{
						
						pic_url:"http://p1362.bvimg.com/10465/a61cef977dc06b42.jpg",
						name:"林招运",
						sex:"女",
						age:"28",
						political:"中共党员",
						duties:"村支书",
						vote:"18",
						brief_introduction:"我是来自山西省宁武县凤凰镇窑子坪村的党员曹保银。新时代、新契机！为了响应我党建设社会主义新农村的号召，我积极参加了村党支部书记的竞选活动。我叫林招运，初中文化，今年36岁，现任双溪村卫生站负责人。我属于生在新中国，长在红旗下的一代人。青春年少时，家境贫困，也曾打工。和许多人一样，心中时刻都作着一个脱贫致富的梦。这些年承蒙上级有关部门和村党支部、村委会的关心，尤其是咱们淳朴善良、厚道的父老乡亲的支持和帮助下，办起了一所合法规范的卫生站。",
						plan:"树立良好的思想品德。好学进取、主动向老干部学习，请教，充分听取广大群众意见。了解民情、体察***，不断完善调整提高自己。全村干部群众团结起来，思想上、认识上形成共识，行动上形成一致，营造一种***向上的氛围。按照法规、有序地开展工作，村干部身先士卒、一心为公，干部群众心往一处想，劲往一处使，共同把双溪村建设得更加美好。抓公开、打造透明村务。在村党支部的领导和监督下，推行并真正落实好以财务公开为主要内容的村务公开制度，用干部自身的清白，给百姓一个明白。"
					},
					{ 
						pic_url:"http://p1362.bvimg.com/10465/926e05346203527e.jpg",
						name:"李幼军",
						sex:"男",
						age:"37",
						political:"中共党员",
						duties:"村支书",
						vote:"18",
						brief_introduction:"1963年我出生在炉新村，二十多年前，曾经在本村务过农，当过村队会计，并成功地落实了农业生产承包责任制。1986年间协助炉新村委会兴建了红砖厂，负责并建立了财务账目。改革开放的良好机遇使我走上了从医的职业，我现在是一名国家执业医师，自己开设了医疗机构，我有自己的事业。今天我站在这里参加竞选，不为别的，目的是想和全体村民一起尽我的能力实实在在地把我们炉新村的发展建设共同搞好，把我们炉新村村民家家户户的生活水平共同提高，并达到共同富裕的目的。",
						plan:"在村党支部的领导监督下，在全体村民的支持和监督下，进一步地规范和完善村民自治组织的各项规章制度，推行并真正落实好以财务公开为主要内容的村务公开制度。一是要搞好财务管理和资金管理，建立四人签字报销制度，即经手人、群众代表、党员代表、主管负责人。二是要严格资金使用程序，杜绝先斩后奏、盲目乱花钱现象的发生，同时要定期公布村务帐目，给大家一个明白，用干部自身的清白，给村民一个明白。三是村委要定期或不定期召开全体村民大会，让更多的人参与到村务管理工作中来，有好的想法和建议须经村民大会多数表决通过，从而避免少数人说了算的不良现象，真正让村民当家做主，依法维护村民的各种合法权益。"					
					} 
				],	   
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
		}
	}
</script>

<style>
	@import url("../../../common/common_layout.css"); 
	page {
		min-height: 100%;
		background-color: #f3f2f2;
	}
</style>

