<template>
	<view>
		<view class="policy" @click="clikeOthers()">
			<view class="policy-title">
				<view class="policy-title-content">
					{{articleElement[NewsID].title.titleContent}}
				</view>
				<view class="policy-title-subtitle">
					<text class="policy-title-subtitle-source">{{articleElement[NewsID].title.artileSource}}</text>
					<text class="policy-title-subtitle-time">{{articleElement[NewsID].title.releaseTime}}</text>
				</view>
			</view>
			<view class="policy-content">
				<view class="policy-content-part" v-for="(item,index) in articleElement[NewsID].content" :key="index">
					{{item.part}}
				</view>
			</view>
			<view class="policy-editor">
				责任编辑 {{articleElement[NewsID].editorCharge}}
			</view>
			<view class="policy-readAndLike">
				<view class="policy-read">
					<text class="policy-read-title">阅读</text>
					<text class="policy-read-number"> {{articleElement[NewsID].data_reading}}</text>
				</view>
				<view class="policy-like">
					<text class="policy-like-title">点赞</text>
					<text class="policy-like-number">{{articleElement[NewsID].data_like}}</text>
					<image
						:src="doyoulike=='true'?'../../../static/image/like-active.png':'../../../static/image/like.png'"
						@click="likeArticle()"></image>
				</view>
			</view>
			<navigator class="policy-recommended" url="../pagesA/policy/newAndExpert/newAndExpert">
				进入<text>综合频道</text>查看更多内容
				<text class="iconfont icon-a-LeftArrow-copy"></text>
			</navigator>
			<view class="policy-viewpoint">
				<view class="policy-viewpoint-title">
					<view class="policy-viewpoint-title-left">
						<view class="policy-viewpoint-title-left-line">

						</view>
					</view>
					<view class="policy-viewpoint-title-right">
						观点
					</view>
				</view>
				<view class="policy-viewpoint-NoContent" v-if="commentContent.length==0">
					<view class="policy-viewpoint-NoContent-image">
						<text class="iconfont icon-shafaA"></text>
					</view>
					<view class="policy-viewpoint-NoContent-text">
						暂无观点 快来发表观点
					</view>
				</view>
				<view class="policy-viewpoint-content" v-if="commentContent.length>0">
					<view class="policy-viewpoint-content-left">
						<image :src="avatarUrl" mode="aspectFit"></image>
					</view>
					<view class="policy-viewpoint-content-right">
						<view class="viewpoint-top">
							<view class="viewPoint-peopleName">
								{{nickName}}
							</view>
							<view class="viewPoint-like">
								<text>0</text>
								<text class="iconfont icon-dianzan2"></text>
							</view>
						</view>
						<view class="viewpoint-bottom">
							<view class="viewpoint-bottom-content">
								<text>{{commentContent}}</text>
							</view>
							<view class="viewpoint-bottom-timeAndReply">
								<text>刚刚</text>
							</view>
						</view>
						<view class="cross-line"></view>
					</view>

				</view>
			</view>

		</view>
		<view class='footer'>
			<view class="footer-container">
				<view class="footer-sayYourWords" @click="ClikeInput()">
					<input type="text" v-model="inputContext" @input="inputData"
						:placeholder="ifClickInput==false?'欢迎发表你的观点':'好的观点将会优先展示'" />
				</view>
				<view class="footer-iconChanged" v-if="ifClickInput===false">
					<view class="footer-commit" @click="ToSpecifiedLocation()">
						<text class="iconfont icon-pinglun1 footerIcon"></text>
					</view>
					<view class="footer-shoucang" @click="collection">
						<text :class="!articleElement[NewsID].doyoulike?'iconfont icon-shoucang11 footerIcon':'iconfont footerIcon icon-bg-collection'"></text>
					</view>
					<view class="footer-zhuanfa">
						<text class="iconfont icon-zhuanfa footerIcon"></text>
					</view>
				</view>
				<view class="footer-send" v-if="ifClickInput===true" @click="publishedView">
					<text :style="{color:publishColor}">发布</text>
				</view>
			</view>
		</view>

	</view>
</template>


<script>
	export default {
		data() {
			return {
				publishColor:'#b8b8b8',
				NewsID: '',
				commentContent: '',
				nickName: '',
				avatarUrl: '',
				inputContext: '',
				ifClickInput: false,
				doyoulike: 'false',
				articleElement: [{
					title: {
						titleContent: '国家黑土地保护工程实施方案（2021—2025年）',
						artileSource: '农民日报',
						releaseTime: '2021年07月30日'
					},
					content: [{
							part: '为贯彻落实习近平总书记关于保护好黑土地这一“耕地中的大熊猫”重要指示批示精神，按照中央经济工作会议、中央农村工作会议以及中央一号文件关于实施国家黑土地保护工程等相关要求，近日，经国务院同意，农业农村部、国家发展和改革委员会、财政部、水利部、科学技术部、中国科学院、国家林业和草原局7部门联合印发《国家黑土地保护工程实施方案（2021—2025年）》（以下简称《实施方案》）。《实施方案》明确黑土地保护原则、目标和内容，提出“十四五”期间将完成1亿亩黑土地保护任务，黑土耕地质量明显提升，土壤有机质含量平均提高10％以上。'
						},
						{
							part: '《实施方案》强调，实施国家黑土地保护工程要坚持保护优先、用养结合，促进黑土地在利用中保护、在保护中利用。要坚持因地制宜、分类施策，实施差异化治理。要坚持政策协同、实行综合治理。要坚持示范引领、加强技术支撑。要坚持政府引导、带动社会参与，形成黑土地保护建设长效机制。'
						},
						{
							part: '《实施方案》提出，“十四五”期间完成1亿亩黑土地保护任务，其中标准化示范面积1800万亩。完成建设高标准农田5000万亩，治理大中型侵蚀沟7000条。实施多种模式保护性耕作5亿亩次，每年1亿亩全覆盖。有机肥还田1亿亩，每年2000万亩。方案实施后，耕地质量明显提升，旱地耕作层达到30厘米以上、水田耕作层达到20厘米至25厘米，土壤有机质含量平均提高10％以上。'
						},
						{
							part: '《实施方案》明确了国家黑土地保护工程实施内容和分区实施重点。在内容上，着重实施土壤侵蚀治理、农田基础设施建设、肥沃耕作层培育、耕地质量监测评价等措施，解决黑土耕地出现的“变薄、变瘦、变硬”问题。在区域上，松嫩平原北部的中厚黑土区以保育培肥为主；松嫩平原南部、三江平原、辽河平原的浅薄黑土区以培育增肥为主；大兴安岭东南麓、长白山—辽东丘陵的水土流失区以固土保肥为主；三江平原和松嫩平原西部的障碍土壤区以改良培肥为主。'
						},
						{
							part: '下一步，7部门将以《实施方案》为基础，加强顶层设计，建立健全黑土地保护利用技术模式和长效机制。一是将强化政策统筹，加强东北四省（区）已有项目统筹、行业内相关资金整合和行业间相关资金统筹的衔接配合。二是强化多方协同，共同推进黑土地保护利用的机制。三是强化规模化示范带动，推进黑土地保护与高效农业、品牌农业发展的有机结合，提高黑土地保护利用综合效益，调动农民积极主动实施相关措施。'
						}
					],
					editorCharge: '贾勤缘',
					data_reading: '80211',
					data_like: '3982',
					doyoulike: false
				}, {
					title: {
						titleContent: '农业农村部要求分区分类精准施策确保秋粮丰收',
						artileSource: '新华网',
						releaseTime: '2021年08月19日'
					},
					content: [{
							part: '目前距离秋粮大面积收获还有一个半月时间。农业农村部17日要求，各级农业农村部门始终绷紧防灾减灾这根弦，分区分类精准施策，落实落细田管措施，确保全年粮食产量保持在1.3万亿斤以上。'
						},
						{
							part: '这是记者17日从农业农村部了解到的消息。'
						},
						{
							part: '据气象部门预计，8月至9月全国气候状况偏差，区域性暴雨洪涝和干旱偏重，登陆台风偏多，可能有北上台风，极端天气事件多发重发。'
						},
						{
							part: '农业农村部要求，各级农业农村部门要把灾情估计得更充分一些，分区分类精准施策，包片包村蹲点指导，用足用好政策资金，落实落细田管措施：'
						},
						{
							part: '——东北地区要在防范嫩江等沿江内涝和局部阶段性秋旱的基础上，重点防好早霜。要以抢积温、促早熟、促增产为重点，在秋粮灌浆期增施叶面肥、杀菌剂、生长调节剂，提高灌浆效率，增加粒重，确保安全成熟。'
						},
						{
							part: '——黄淮海地区重点抓好灾后恢复生产。绝收地块要抢抓农时，尽快改种补种生育期短、有市场需求的作物。受灾地块要抓好后期田管，通过追肥、喷施诱抗素、杀虫杀菌剂等措施，促进作物尽快恢复生长。蓄滞洪区要抢排积水、整地散墒。同时，抓紧组织修复水毁农田水利设施，及时推动做好灾后保险理赔工作。'
						},
						{
							part: '——南方稻区重点防秋旱、台风和寒露风。要科学控水施肥，增施分蘖肥促快发，喷施叶面肥促早熟，提高水稻单产。'
						},
						{
							part: '——西北地区受旱面积已达1930多万亩，要抓住时机，趁墒追肥，喷施抗旱剂，促进作物恢复生长。农业农村部督导组、专家指导组将持续联系调度，帮助地方解决实际困难。'
						},
						{
							part: '在盯紧气象灾害、做好“龙口夺粮”的同时，农业农村部要求各地加密监测预警，分类分区抓好病虫害防控。目前秋粮病虫防控形势不容乐观，各地要加密网格化监测，及时发布预警信息，备足药剂药械，适时组织联防联控、统防统治。'
						}
					],
					editorCharge: '汪霁月',
					data_reading: '54047',
					data_like: '2215',
					doyoulike: false
				}, {
					title: {
						titleContent: '辽宁省康平县：稻蟹共生促发展 一田两用助增收',
						artileSource: '康平融媒号',
						releaseTime: '2021年08月24日'
					},
					content: [{
							part: '全面推进乡村振兴，重点在“振”，目标在“兴”。近年来，辽宁省康平县张强镇官宝窝堡村积极探索增收致富新途径，大力发展水稻和螃蟹共生的农业发展模式。蟹田稻，稻田蟹，蟹为稻提质，稻为蟹添“香”。植物和水产间，在最自然的状态下实现了利益最大化，这就是绿色生态农业最简单的发展法则。'
						},
						{
							part: '每年的8月份是稻子收获、螃蟹上市的季节，康平县张强镇官宝窝堡村又将迎来双丰收。'
						},
						{
							part: '据村民介绍，官宝窝堡村日照充足，全年日照时间为2867小时，无霜期150天，大米生长周期可达155天至170天，周边50公里范围内没有重工业企业，环境优质无污染。采用内蒙古散都水库富锶泉水灌溉，这赋予了官宝大米丰富的营养和筋弹的口感。盐碱地种植，使得官宝大米米粒更加晶莹、口感更加软糯。种植时通过沈阳农业大学团队的指导培训，科学田间管理，“两无化”种植更是赋予了官宝大米健康的品质。目前，官宝大米已成为国标一级优质大米，保留营养胚芽，含多种人体所需微量元素，食味值超过85%。'
						},
						{
							part: '2018年，官宝窝堡村“两委”成员牵头、党员带头，成立了官宝农业服务中心。该中心以“支部+公司+农户”模式，大力发展水稻种植、加工与销售产业链条。该中心配有先进的现代化水稻加工流水线和全自动包装流水线，有17道加工程序，精细化加工程度较高，保留大米胚芽，锁住大米营养成分，并配有完备的仓储车间和成品车间。服务中心生产注册的“哈拉沁屯”绿色品牌大米，更是品质优良、享誉辽北，获得国家有机大米的认证。2020年，官宝大米进行了线上和线下相结合的销售方式，让大米远销全国各地。'
						},
						{
							part: '“稻田+”产业模式是农业供给侧结构性改革和稻田经济的创新模式，也是张强镇官宝窝堡村实行了五年的创新经济发展模式之一。在这片长势良好的稻田内，有很多个头喜人的河蟹“横行霸道”地在田埂游走，一派“稻花香里说丰年”的好景象。'
						},
						{
							part: '螃蟹能清除稻田中的杂草，吃掉部分害虫，改善水质，促进水稻生长；稻田绿色无污染的水质环境，又为稻田蟹生长提供一个阴凉、安全的生长环境。再过一个月左右，鲜肥味美的螃蟹就将上市了，每年都颇受欢迎。眼前这片“双丰收”的景象预示了官宝窝堡村运行的“稻蟹共生”“一水两用、一地双收”的立体化种养项目在今年也将取得丰硕成果。（作者单位：康平县融媒体中心）'
						}
					],
					editorCharge: '唐可',
					data_reading: '149603',
					data_like: '6318',
					doyoulike: false
				}, {
					title: {
						titleContent: '以乡村全面振兴助力农业农村现代化',
						artileSource: '经济日报',
						releaseTime: '2021 年 05 月 12 日'
					},
					content: [{
							part: '没有农业农村的现代化，就没有国家的现代化。没有乡村的振兴，就没有中华民族的伟大复兴。实施乡村振兴战略是实现农业农村现代化的必然选择。当前，我国已开启全面建设社会主义现代化国家新征程，“三农”工作转入全面推进乡村振兴、加快农业农村现代化新阶段。今年的中央一号文件强调，要坚持把解决好“三农”问题作为全党工作重中之重，把全面推进乡村振兴作为实现中华民族伟大复兴的一项重大任务，举全党全社会之力加快农业农村现代化，让广大农民过上更加美好的生活。这为我们以乡村全面振兴助力农业农村现代化指明了方向和路径。'
						},
						{
							part: '重农固本是安民之基、治国之要。实现农业农村现代化，是国家现代化的重要组成部分，也是国家现代化的重要标志。要看到，实施乡村振兴战略，农业农村现代化是总目标，而要实现这个总目标，就是要坚持农业现代化和农村现代化一体设计、一并推进，实现农业大国向农业强国跨越。在现代化进程中，城的比重上升、乡的比重下降，是客观规律。但无论工业化、城镇化发展到哪一步，农业都要发展，乡村都不会消亡，城乡将长期共生并存，这也是客观规律。对于我们这样拥有14亿人口的大国来说，把解决好“三农”问题作为全党工作重中之重，坚持优先发展，以乡村全面振兴助力农业农村现代化，既是遵循经济发展客观规律的必然之举，也是着眼实现社会主义现代化远景目标的大势所趋。'
						},
						{
							part: '还要看到，全面建设社会主义现代化国家，最广泛最深厚的基础在农村，最大的潜力和后劲也在农村。巩固拓展脱贫攻坚成果同乡村振兴有效衔接，是解决不平衡不充分发展的有效途径，也是实现农业农村现代化的重要措施。眼下，我国脱贫攻坚战取得了全面胜利，完成了消除绝对贫困的艰巨任务。但是，脱贫摘帽不是终点，而是新生活、新奋斗的起点。要做好脱贫攻坚同乡村振兴有效衔接，接续推动脱贫摘帽地区乡村全面振兴，促进经济社会发展和群众生活改善，让脱贫群众过上更加美好的生活，逐步走上共同富裕的道路。这是从根本上解决好“三农”问题的关键之举。'
						},
						{
							part: '农业农村农民问题是关系国计民生的根本性问题。“十四五”时期是全面建设社会主义现代化国家开局起步的重要时期，也是推动乡村全面振兴的关键期，更是调整我国城乡关系和推进农业农村现代化的历史窗口期。对标“十四五”时期“农业基础更加稳固”的目标、对标2035年基本实现农业现代化的远景目标，我国农业农村发展还存在不少约束条件，补齐现代化道路上的这一短板，需要我们坚持农业农村优先发展，通过处理好工农关系、城乡关系，走中国特色社会主义乡村振兴道路，全面实施乡村振兴战略，加快农业农村现代化。'
						},
						{
							part: '第一，坚持统筹推进，实现巩固拓展脱贫攻坚成果同乡村振兴有效衔接。虽然现行标准下脱贫任务已经完成，但仍需不断巩固脱贫攻坚成果。要充分认识做好巩固拓展脱贫攻坚成果同乡村振兴有效衔接的重要性紧迫性，将建立防止返贫长效机制纳入实施乡村振兴战略统筹安排、一体推进、常态实施，既要巩固拓展脱贫攻坚成果，为乡村振兴做好铺垫，又要解决好农民最关心最直接最现实的利益问题，着力提高保障和改善民生水平。在接续推进中，要合理把握调整节奏、力度、时限，提升诸多资源的利用效率，提高包括低收入人口在内的全体农民群众的获得感、幸福感、安全感，更好增进民生福祉、实现农业农村现代化。'
						},
						{
							part: '第二，抓好产业振兴，提升农业整体质量和竞争力。农业是关乎百姓饭碗和亿万农民生计的民生产业。抓好产业振兴、推动产业兴旺，是保障重要农产品安全的战略举措，也是解决农村一切问题的前提。要把高质量发展贯穿始终，牢守国家粮食安全底线，推动农业提质增效，加快农业现代化。'
						},
						{
							part: '一方面，要加强顶层设计，适应确保国计民生要求，健全农业支持保护制度，以保障国家粮食安全为底线稳住耕地，确保粮食供给不出问题；另一方面，要围绕“巩固、增强、提升、畅通”把农业供给侧结构性改革往深里做、往细里做，推动农产品供给在确保“有”的基础上向“好”转变，着力构建现代农业产业体系、生产体系、经营体系。此外，还要完善利益联结机制，提升农业综合生产能力，增加农民收入，激发乡村蕴含的发展潜力，为加快农业农村现代化注入强劲动力.'
						},
						{
							part: '第四，找准重点发力，加快推进城乡融合发展。城乡融合发展是实施乡村振兴战略、推进农业农村现代化的有效途径。无论是做好乡村振兴这篇大文章，还是加快农业农村现代化，都不能就乡村论乡村，必须走城乡融合发展之路。在这一过程中，要强化统筹谋划和顶层设计，深化农业农村改革，破除城乡要素市场化配置体制机制障碍，加快打通城乡要素平等交换、双向流动的制度性通道；要发挥国家城乡融合发展试验区、农村改革试验区示范带动作用，充分实现乡村资源要素内在价值，通过挖掘乡村多种功能，改变农村要素单向流出格局，增强农业农村发展活力；要把县域作为城乡融合发展的重要切入点，健全城乡基础设施统一规划、统一建设、统一管护机制，推进城乡基本公共服务标准统一、制度并轨，实现城乡平衡充分发展。'
						}
					],
					editorCharge: '刘文涛',
					data_reading: '20182',
					data_like: '175',
					doyoulike: false
				}, {
					title: {
						titleContent: '关于公开征集国家“十四五”文化改革发展规划意见建议的公告',
						artileSource: '“学习强国”学习平台',
						releaseTime: '2021 年 04 月 07 日'
					},
					content: [{
							part: '文化兴国运兴，文化强民族强。“十四五”时期是我国开启全面建设社会主义现代化国家新征程的第一个五年，也是推进社会主义文化强国建设的关键时期。为进一步把国家“十四五”规划《纲要》对文化建设的任务部署落到实处，根据党中央、国务院要求，中央宣传部正在编制国家“十四五”文化改革发展规划。'
						},
						{
							part: '为切实把社会期盼、群众智慧、专家意见、基层经验充分吸收到规划中，我部自即日起至4月20日止，征集社会各界对“十四五”时期文化改革发展的意见建议。社会公众可以将意见建议发送至电子邮箱：whgh@wenming.cn。我们将认真梳理，并在编制国家“十四五”文化改革发展规划时研究吸纳。'
						},
						{
							part: '衷心感谢您的关心、支持和参与！'
						},
						{
							part: '中央宣传部办公厅'
						}
					],
					editorCharge: '贺艳花',
					data_reading: '7996672',
					data_like: '322006',
					doyoulike: false
				}, {
					title: {
						titleContent: '关于公开征集文化强国建设意见建议的公告',
						artileSource: '人民日报',
						releaseTime: '2021 年 08 月 03 日'
					},
					content: [{
							part: '意见建议的公告'
						},
						{
							part: '党的十九届五中全会提出到2035年建成文化强国，标定了当前和今后一个时期我国文化建设的总目标、总任务、总指引。为扎实推进文化强国建设，把社会期盼、群众智慧、专家意见、基层经验充分汇聚起来，中央文化体制改革和发展工作领导小组办公室自即日起至8月31日止，征集社会各界意见建议。社会公众可以将意见建议发送至电子邮箱'
						},
						{
							part: 'whqg@wenming.cn'
						},
						{
							part: '衷心感谢您的关心、支持和参与！'
						},
						{
							part: '中央文化体制改革和发展工作领导小组办公室'
						}
					],
					editorCharge: '张玙蕗',
					data_reading: '32,423,156',
					data_like: '808737',
					doyoulike: false
				}, {
					title: {
						titleContent: '以乡村全面振兴助力农业农村现代化',
						artileSource: '经济日报',
						releaseTime: '2021 年 05 月 12 日'
					},
					content: [{
							part: '没有农业农村的现代化，就没有国家的现代化。没有乡村的振兴，就没有中华民族的伟大复兴。实施乡村振兴战略是实现农业农村现代化的必然选择。当前，我国已开启全面建设社会主义现代化国家新征程，“三农”工作转入全面推进乡村振兴、加快农业农村现代化新阶段。今年的中央一号文件强调，要坚持把解决好“三农”问题作为全党工作重中之重，把全面推进乡村振兴作为实现中华民族伟大复兴的一项重大任务，举全党全社会之力加快农业农村现代化，让广大农民过上更加美好的生活。这为我们以乡村全面振兴助力农业农村现代化指明了方向和路径。'
						},
						{
							part: '重农固本是安民之基、治国之要。实现农业农村现代化，是国家现代化的重要组成部分，也是国家现代化的重要标志。要看到，实施乡村振兴战略，农业农村现代化是总目标，而要实现这个总目标，就是要坚持农业现代化和农村现代化一体设计、一并推进，实现农业大国向农业强国跨越。在现代化进程中，城的比重上升、乡的比重下降，是客观规律。但无论工业化、城镇化发展到哪一步，农业都要发展，乡村都不会消亡，城乡将长期共生并存，这也是客观规律。对于我们这样拥有14亿人口的大国来说，把解决好“三农”问题作为全党工作重中之重，坚持优先发展，以乡村全面振兴助力农业农村现代化，既是遵循经济发展客观规律的必然之举，也是着眼实现社会主义现代化远景目标的大势所趋。'
						},
						{
							part: '还要看到，全面建设社会主义现代化国家，最广泛最深厚的基础在农村，最大的潜力和后劲也在农村。巩固拓展脱贫攻坚成果同乡村振兴有效衔接，是解决不平衡不充分发展的有效途径，也是实现农业农村现代化的重要措施。眼下，我国脱贫攻坚战取得了全面胜利，完成了消除绝对贫困的艰巨任务。但是，脱贫摘帽不是终点，而是新生活、新奋斗的起点。要做好脱贫攻坚同乡村振兴有效衔接，接续推动脱贫摘帽地区乡村全面振兴，促进经济社会发展和群众生活改善，让脱贫群众过上更加美好的生活，逐步走上共同富裕的道路。这是从根本上解决好“三农”问题的关键之举。'
						},
						{
							part: '农业农村农民问题是关系国计民生的根本性问题。“十四五”时期是全面建设社会主义现代化国家开局起步的重要时期，也是推动乡村全面振兴的关键期，更是调整我国城乡关系和推进农业农村现代化的历史窗口期。对标“十四五”时期“农业基础更加稳固”的目标、对标2035年基本实现农业现代化的远景目标，我国农业农村发展还存在不少约束条件，补齐现代化道路上的这一短板，需要我们坚持农业农村优先发展，通过处理好工农关系、城乡关系，走中国特色社会主义乡村振兴道路，全面实施乡村振兴战略，加快农业农村现代化。'
						},
						{
							part: '第一，坚持统筹推进，实现巩固拓展脱贫攻坚成果同乡村振兴有效衔接。虽然现行标准下脱贫任务已经完成，但仍需不断巩固脱贫攻坚成果。要充分认识做好巩固拓展脱贫攻坚成果同乡村振兴有效衔接的重要性紧迫性，将建立防止返贫长效机制纳入实施乡村振兴战略统筹安排、一体推进、常态实施，既要巩固拓展脱贫攻坚成果，为乡村振兴做好铺垫，又要解决好农民最关心最直接最现实的利益问题，着力提高保障和改善民生水平。在接续推进中，要合理把握调整节奏、力度、时限，提升诸多资源的利用效率，提高包括低收入人口在内的全体农民群众的获得感、幸福感、安全感，更好增进民生福祉、实现农业农村现代化。'
						},
						{
							part: '第二，抓好产业振兴，提升农业整体质量和竞争力。农业是关乎百姓饭碗和亿万农民生计的民生产业。抓好产业振兴、推动产业兴旺，是保障重要农产品安全的战略举措，也是解决农村一切问题的前提。要把高质量发展贯穿始终，牢守国家粮食安全底线，推动农业提质增效，加快农业现代化。'
						},
						{
							part: '一方面，要加强顶层设计，适应确保国计民生要求，健全农业支持保护制度，以保障国家粮食安全为底线稳住耕地，确保粮食供给不出问题；另一方面，要围绕“巩固、增强、提升、畅通”把农业供给侧结构性改革往深里做、往细里做，推动农产品供给在确保“有”的基础上向“好”转变，着力构建现代农业产业体系、生产体系、经营体系。此外，还要完善利益联结机制，提升农业综合生产能力，增加农民收入，激发乡村蕴含的发展潜力，为加快农业农村现代化注入强劲动力.'
						},
						{
							part: '第四，找准重点发力，加快推进城乡融合发展。城乡融合发展是实施乡村振兴战略、推进农业农村现代化的有效途径。无论是做好乡村振兴这篇大文章，还是加快农业农村现代化，都不能就乡村论乡村，必须走城乡融合发展之路。在这一过程中，要强化统筹谋划和顶层设计，深化农业农村改革，破除城乡要素市场化配置体制机制障碍，加快打通城乡要素平等交换、双向流动的制度性通道；要发挥国家城乡融合发展试验区、农村改革试验区示范带动作用，充分实现乡村资源要素内在价值，通过挖掘乡村多种功能，改变农村要素单向流出格局，增强农业农村发展活力；要把县域作为城乡融合发展的重要切入点，健全城乡基础设施统一规划、统一建设、统一管护机制，推进城乡基本公共服务标准统一、制度并轨，实现城乡平衡充分发展。'
						}
					],
					editorCharge: '刘文涛',
					data_reading: '20182',
					data_like: '175',
					doyoulike: false
				}, {
					title: {
						titleContent: '2月5日，新华社受权对外发布《中共中央 国务院关于抓好“三农”领域重点工作确保如期实现全面小康的意见》',
						artileSource: '人民网',
						releaseTime: '2020-02-07'
					},
					content: [{
							part: '今年中央一号文件以习近平新时代中国特色社会主义思想为指导，全面贯彻党的十九大和十九届二中、三中、四中全会精神，贯彻落实中央经济工作会议精神，对“三农”工作作出了全面部署。'
						},
						{
							part: '今年中央一号文件明确了工作重点，对标对表全面建成小康社会目标，集中力量完成打赢脱贫攻坚战和补上全面小康“三农”领域突出短板两大重点任务；今年中央一号文件强化了政策举措，针对基层干部群众反映强烈的问题和工作落实中存在的薄弱环节，有的放矢、精准施策，提出了一些含金量高、可操作性强的政策举措，进一步强化了补短板的政策支撑保障；今年中央一号文件强调了抓好落实。围绕补上影响脱贫攻坚质量和全面小康成色、到2020年必须补上的突出短板，逐项抓好落实，确保如期完成。'
						},
						{
							part: '社会各界对今年中央一号文件非常关注，部分专家学者还从多个角度进行了解读分析。'
						},
						{
							part: '从2004年起至今，中共中央 国务院连续下发了17个指导“三农”工作的中央一号文件。在不同的年代背景下，中央一号文件各有侧重，但都聚焦保护农民利益、尊重农民的民主权利、不断解放和发展社会生产力，具有连续性与稳定性。'
						},
						{
							part: '中央农办主任、农业农村部部长韩长赋在分析一号文件出台意义时表示，2020年是全面建成小康社会目标实现之年，是全面打赢脱贫攻坚战收官之年。习近平总书记的重要指示，为做好2020年“三农”工作指明了方向、提供了根本遵循。韩长赋还表示，完成文件提出的两大目标任务，脱贫攻坚还有一些最后的堡垒必须攻克，全面小康“三农”领域还有一些突出的短板必须补上。'
						},
						{
							part: '攻克堡垒 坚决打赢脱贫攻坚战'
						},
						{
							part: '在今年的中央一号文件中，坚决打赢脱贫攻坚战位于五大重点内容的首要位置。'
						},
						{
							part: '中央一号文件明确提出，要全面完成脱贫任务，巩固脱贫成果防止返贫，保持脱贫攻坚政策总体稳定，研究建立解决相对贫困的长效机制。今年的脱贫攻坚工作，一方面要完成剩余266万建档立卡贫困人口脱贫和52个贫困县摘帽的任务，另一方面要防止近200万已脱贫人口返贫和近300万边缘人口致贫，巩固好9300多万人的脱贫成果。'
						},
						{
							part: '农业农村部发展规划司司长魏百刚认为，产业扶贫不仅是稳定脱贫的根本之策，也是巩固脱贫成果防止返贫的关键措施。贯彻落实中央一号文件精神，必须以习近平总书记关于扶贫工作的重要论述为基本遵循，坚持目标导向和问题导向，在资源配置和工作布局上突出产业扶贫这个重点，聚焦“三区三州”等深度贫困地区，围绕产销对接、龙头带动、科技服务等关键环节，加强统筹协调，加大倾斜支持，强化措施落实，进一步提升扶贫产业发展水平，防范产业扶贫风险，为贫困地区脱贫攻坚和乡村振兴提供重要支撑。'
						},
						{
							part: '中央一号文件的发布意味着今年“三农”工作的目标任务已定，让我们坚持以习近平新时代中国特色社会主义思想为指导，锐意进取，埋头苦干，为决胜全面建成小康社会，要打赢脱贫攻坚战、完成十三五规划、实现民族复兴征程上的第一个百年目标而作出应有的贡献，共同开启全面建设社会主义现代化国家的新征程。'
						}
					],
					editorCharge: '王珂园 常雪梅',
					data_reading: '32313',
					data_like: '1571',
					doyoulike: false
				}, {
					title: {
						titleContent: '“城乡发展协调省份”浙江是如何炼成的——“三农”专家顾益康访谈录',
						artileSource: '新华社',
						releaseTime: '2018 年 11 月 18 日'
					},
					content: [{
							part: '新华社杭州11月18日电 城乡居民收入比2.05，全国各省（区）最低，全省基本公共服务均等化实现度91.6%，2015年全面消除家庭人均年收入4600元以下贫困现象……作为全国城乡发展协调的省份之一，浙江是如何炼成的？记者对此采访浙江省政府咨询委员会专家、被称为“超级农民”的顾益康教授。'
						},
						{
							part: '坚持走统筹城乡发展的路子'
						},
						{
							part: '顾益康认为，改革开放以来，以乡镇企业为代表的浙江民营经济异军崛起、长足发展，一部分先富起来的农民开始向城市集聚，一部分先富起来的农村率先城镇化，城乡发展差距也逐渐拉开。'
						},
						{
							part: '2003年7月，浙江省委提出实施“八八战略”，从浙江已经到了工业反哺农业、城市带动农村的发展阶段实际出发，明确统筹城乡经济社会发展，加快推进城乡一体化。2004年，浙江省制定实施《浙江省统筹城乡发展、推进城乡一体化纲要》，以“六个城乡统筹发展”来引领浙江城乡一体化。'
						},
						{
							part: '开创农村人居环境整治和美丽乡村建设的新征程，有效缩小了城乡发展差距。'
						},
						{
							part: '2003年以来，浙江省久久为功、扎实推进“千村示范、万村整治”工程，造就了万千美丽乡村，取得了显著成效。期间，浙江省累计有2.7万个建制村完成村庄整治建设，占全省建制村总数的97%；74%的农户厕所污水、厨房污水、洗涤污水得到有效治理；生活垃圾集中收集、有效处理的建制村全覆盖，41%的建制村实施生活垃圾分类处理。'
						},
						{
							part: '如今行走在浙江城乡之间，美丽公路串起“美丽乡村创建先进县示范县”“整乡整镇美丽乡村”“精品村”“美丽庭院”，城市文明与乡村风情深度融合，呈现一幅全景式美丽画卷。'
						},
						{
							part: '城乡关联发展下的“乡村三变”'
						},
						{
							part: '顾益康认为，回顾浙江40年改革开放的历程，实际上是一条从“自发的”到“自觉的”统筹城乡发展的路子。在这条路子的引领下，浙江城市与乡村的发展经历了三个相互关联的阶段，乡村形态功能不断演变。'
						},
						{
							part: '——乡村裂变：20世纪80年代初农村实行包产到户的改革，使农业集体化经营体制转变为充满活力的家庭经营体制，浙江乡镇企业、民营经济由此开始迅速发展。延续20多年的农村工业化，促进农民分工、分业、分化，一部分农民、农村先富起来，同时，农业边缘化、农民老龄化、农村空心化等“三农”问题也开始出现。'
						},
						{
							part: '——乡村蝶变：浙江省以“八八战略”为统领，从2003年开始推进以“千村示范、万村整治”工程为抓手的农村人居环境综合整治，以及统筹城乡的基础设施建设，到2008年又提出把美丽乡村建设作为深化“千村示范、万村整治”工程的新目标、新方向。十五年久久为功，带来浙江广大农村地区面貌巨大变化，城乡渐显弥合之势。'
						},
						{
							part: '——乡村聚变：党的十八大以来，东部发达地区率先进入后工业化、后城市化时代和生态文明新时代，城乡关系出现新变化，城乡经济社会、产城空间、生产生活生态等全面融合发展。浙江乡村生态、人文优势凸显，吸引城里人、年轻人到乡村旅游、投资、创业，资源要素逐步向乡村集聚。'
						},
						{
							part: '农产品共享集散平台、生态循环种养系统综合服务商、LED灯植物工厂……近期举行的乡村创业创新大赛上，浙江农业新业态百花齐放。既有田园牧歌，又贴近都市生活的浙江现代乡村，正成为年轻人干事创业的新热土。'
						},
						{
							part: '“这需要进一步解放思想。”顾益康认为，要从城乡是一个生产共同体、消费共同体、投资共同体、社会共同体、生态共同体的新认识，探索推动城乡户籍制度、土地制度、财产制度、产权制度、公共服务制度、社会治理制度等系列改革，促进人才、资本、技术、文化等要素自由流动、优化组合，形成城乡互联互通新局面。（记者方问禹 陶虹 屈凌燕）'
						}
					],
					editorCharge: '方燕',
					data_reading: '1,457',
					data_like: '175',
					doyoulike: false
				}, {
					title: {
						titleContent: '关于新变户籍问题',
						artileSource: '村事宝',
						releaseTime: '2021 年 09 月 16 日'
					},
					content: [{
							part: '你好，县上撤乡并村已经多年，老百姓的户籍还是原来的地址，系统里也查不到老的地址，以现在的异地办理身份证为例，礼泉的身份证在异地根本无法办理补办手续，因为系统根本差不到老地址，只能回愿籍办理，这要让老百姓多跑多少冤枉路？这样的情况还要再持续几十年？'
						}
					],
					editorCharge: '马晓峰',
					data_reading: '14,603',
					data_like: '6318',
					doyoulike: false
				}, {
					title: {
						titleContent: '副村长是否享有随意处置村民私有财产的特权？',
						artileSource: '骏马镇',
						releaseTime: '2021 年 9 月 15 日'
					},
					content: [ {
						part: '县长您好： 2021年9月15日，骏马乡坡底村村长以整治卫生为由，未经村民同意也未与村民进行协商，私自砍伐村民树木。村民对此副村长提出问题:正在生长的树如何算污染环境？副村长语气嚣张答：我就这样干了，有本事你去告！'
						},
						{
							part: '对此，我有以下问题向您咨询，烦请您答疑：1.是否副村长作为村干部就可以随意处置村民私有财产？2.副村长如此嚣张威胁村民，是否是贵政府部门认真筛选出的优秀人才？'
						},
						{
							part: '3.根据《卫生管理条例法》、《环境资源保护法》规定，均未有村委会有执法权力可进行卫生管理，同时根据国家十四五规划明确将保护生态作为重要思想，坡底村村委会缘何认为生长的树木会破坏卫生环境，这是上级政府的受益还是坡底村村委会的滥用权力？4.以上问题若非贵政府部门意见，还望您多关注基层人民生活，同时能够积极处理此问题，能给出满意的答复。 以上，请您审阅。'
						}
					],
					editorCharge: '马晓峰',
					data_reading: '14,603',
					data_like: '6318',
					doyoulike: false
				}, {
					title: {
						titleContent: '农村居住环境急待改善',
						artileSource: '村事宝',
						releaseTime: '2021 年 09 月 13 日'
					},
					content: [{
							part: '尊敬的县领导： 您好！ 我来自礼泉县阡东镇东桃堡村，居住东桃堡村最南边那条大街（原老支书姜兴平家附近）。 近年来，随着乡村振兴，村上个体养殖户增多，东桃堡村最南边那条大街（原老支书姜兴平家附近）空气污染较为严重，长年蚊蝇环绕，臭味刺鼻，对长年居住此地的村民身体健康造成一定影响。'
						},
						{
							part: '敬请相关部门来我村实地核察，指导养殖户（条件允许的话给予养殖户进行长期“远程+”模式培训，预防过段时间同样的环境污染死灰复燃）在做好养殖产业的同时，尽最大降低大气污染，还长居此地周边群众一个优良，清新，健康的居住环境。谢谢！！！'
						}
					],
					editorCharge: '马晓峰',
					data_reading: '14,603',
					data_like: '6318',
					doyoulike: false
				}, {
					title: {
						titleContent: '关于老人坐公交车要扫码',
						artileSource: '村事宝',
						releaseTime: '2021 年 09 月 13 日'
					},
					content: [{
							part: '领导你好！我是咱礼泉的一位公民，小学马上开学了，家里大多数都是老人接送孩子，老人腿脚都不方便，需要来回坐公交车，但是公交车司机说老人必须扫二维码才能坐车，但是老人大多数都没念过书，用的都是老人机，让老人用智能手机扫码更是不现实；'
						},
						{
							part: '设立公交车就是为了大家方便，现在反而成为了老人们的思想负担了。希望领导给出更好的建议或方法，让孩子和老人们的出行得到便利，谢谢了。'
						}
					],
					editorCharge: '马晓峰',
					data_reading: '14,603',
					data_like: '6318',
					doyoulike: false
				}, {
					title: {
						titleContent: '甘北沿河班车何时再开',
						artileSource: '村事宝',
						releaseTime: '2021 年 08 月 24 日'
					},
					content: [{
							part: '尊敬的领导，你们好！赵镇甘河以北从尧都出发经段胡村、上寨、温家河、甘北一线到县城的班车已停运多年，沿线群众出行受到影响，尤其是老幼等特殊群体前往县城极为不便。虽然有些村的公交站亭早已建好，却迟迟不见通车，请问何时班车能够恢复？谢谢。'
						}
					],
					editorCharge: '马晓峰',
					data_reading: '14,603',
					data_like: '6318',
					doyoulike: false
				}],

			}

		},
		methods: {
			getUserInfo() {
				let that = this;
				uni.getStorage({
					key: 'userInfo',
					success(res) {
						that.userInfomation = res.data;
						that.avatarUrl = res.data.avatarUrl;
						that.nickName = res.data.nickName;
						console.log('获取成功', res);
					}
				})
			},
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			likeArticle() {
				if (this.doyoulike == 'true') {
					this.doyoulike = 'false';
					this.data_like--;
				} else {
					this.doyoulike = 'true';
					this.data_like++;
				}
			},
			ToSpecifiedLocation() {
				uni.createSelectorQuery().select('.policy-title').boundingClientRect(data => {
					uni.createSelectorQuery().select('.policy-viewpoint-title-right').boundingClientRect(res => {
						uni.pageScrollTo({
							scrollTop: res.top - data.top - 10
						})
					}).exec()
				}).exec()

			},
			ClikeInput() {
				this.ifClickInput = true;

			},
			clikeOthers() {
				this.ifClickInput = false;
				this.publishColor = '#b8b8b8'
			},
			inputData(e) {
				this.inputContext = e.detail.value;
				if(this.inputContext.length>0){
					this.publishColor = '#dd1a1a';
				}else{
					this.publishColor = '#b8b8b8';
				}
			},
			publishedView(e) {
				if (this.inputContext.length > 1) {
					this.commentContent = this.inputContext;
					uni.showToast({
						title: '发布成功',
						duration: 1000
					});
				} else {
					uni.showModal({
						content: '请输入您的观点'
					});
				}
				this.inputContext = '';
				this.publishColor = '#b8b8b8'
			},
			collection()
			{
				console.log(this.articleElement[this.NewsID].doyoulike);
				if(this.articleElement[this.NewsID].doyoulike == false)
				{
					console.log("up");
					this.articleElement[this.NewsID].doyoulike = true;
					let news = uni.getStorageSync('news');
					this.articleElement[this.NewsID].NewsID = this.NewsID;
					let next = JSON.stringify(this.articleElement[this.NewsID]);
					if(news == "")
					{
						uni.setStorageSync('news', next);
					}
					else{
						uni.setStorageSync('news', news+'#%%#'+next);
					}
					console.log(news+','+next);
				}
				else{
					console.log("down");
					this.articleElement[this.NewsID].doyoulike = false;
					let news = uni.getStorageSync('news');
					if(news == "")
					{
						return;
					}
					let news_array = news.split('#%%#');
					let new_news = "";
					for(var i=0;i<news_array.length;++i)
					{
						let temp = JSON.parse(news_array[i]);
						
						if(temp.NewsID != this.NewsID)
						{
							if(new_news == "")
							{
								new_news = news_array[i];
							}
							else
							{
								new_news = new_news + '#%%#' + news_array[i];
							}
						}
					}
					uni.setStorageSync('news', new_news);
				}
			}
			

		},
		onLoad(options) {
			this.getUserInfo();
			uni.showLoading({
				title: '加载中...'
			})
			this.NewsID = options.newsID;
			if(options.doyoulike == 'false')
			{this.articleElement[this.NewsID].doyoulike = false;}
			else
			{this.articleElement[this.NewsID].doyoulike = true;}
			console.log(this.articleElement[this.NewsID].doyoulike)
			uni.hideLoading()
		}
	};
</script>

<style lang="scss">
	@import url("@/common/iconfont.css");

	page {
		width: 100%;
		height: 100%;
	}

	.icon-bg-collection:before {
	  content: "\e647";
	}

	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100rpx;
		background-color: rgba(255, 255, 255, .9);
	}

	.footer-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.footer-iconChanged {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.footer-send {
		// right: 50rpx;
		margin-left: 100rpx;
		color: #515356;
		background-color: rgba(255, 255, 255, .9);

	}

	.footer-send text {
		float: right;
		font-weight: 450;
		font-size: 30rpx;
	}

	.footer-sayYourWords {
		width: 380rpx;
		height: 60rpx;
		margin-left: 30rpx;
		border-radius: 10rpx;
		background: #ececec;
		padding-left: 30rpx;
		font-size: 30rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		color: #515356;

	}

	.footerIcon {
		flex: 1;
		font-size: 38rpx;
		margin-left: 40rpx;
	}

	.footer-commit {
		margin-left: 30rpx;
	}

	.policy {
		margin: 30rpx 50rpx 110rpx 50rpx;
	}

	.policy-title-content {
		font-weight: bold;
		font-size: 44rpx;
	}

	.policy-title-subtitle {
		margin-top: 30rpx;
	}

	.policy-title-subtitle-source {
		font-size: 26rpx;
		color: #928383;
	}

	.policy-title-subtitle-time {
		color: #928383;
		font-size: 26rpx;
		margin-left: 40rpx;
	}

	.policy-content {
		margin-top: 34rpx;

	}

	.policy-content-part {
		margin-top: 20rpx;
		font-size: 36rpx;
		line-height: 60rpx;
	}

	.policy-video {
		margin-top: 40rpx;
		width: 100%;
		height: 320rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.policy-editor {
		margin-top: 30rpx;
		font-size: 28rpx;
		color: #9D9D9D;
	}

	.policy-readAndLike {
		margin-top: 32rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.policy-read {
		margin-right: 40rpx;
	}

	.policy-like,
	.policy-read {
		height: 40rpx;
		width: 270rpx;
		background: #f8f8f9;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.policy-read-title,
	.policy-like-title {
		font-size: 30rpx;
		color: #4f5154;
	}

	.policy-read-number,
	.policy-like-number {
		margin-left: 8rpx;
		font-size: 28rpx;
	}

	.policy-like {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.policy-like image {
		margin-left: 30rpx;
		width: 34rpx;
		height: 34rpx;
	}

	.policy-viewpoint-title-left {

		width: 20rpx;
		height: 50rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.policy-viewpoint-title-left-line {
		width: 8rpx;
		height: 30rpx;
		background: red;
	}

	.policy-viewpoint-title {
		margin-top: 30rpx;
		height: 50rpx;
		display: flex;
		flex-direction: row;
	}

	.policy-viewpoint-title-right {
		flex: 1;
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		height: 50rpx;
		font-size: 36rpx;
	}

	.policy-viewpoint-content {
		margin-top: 24rpx;
		display: flex;
		flex-direction: row;
	}

	.viewpoint-bottom-body {
		margin-top: 24rpx;
		display: flex;
		flex-direction: row;
	}

	.viewpoint-bottom-body-left {
		margin-top: 16rpx;
		width: 60rpx;
		height: 60rpx;
		border-radius: 60rpx;
		overflow: hidden;
	}

	.viewpoint-bottom-body-left image {
		width: 100%;
		height: 100%;
	}

	.reply-name {
		font-size: 34rpx;
		color: #e2c54e;
	}

	.reply-content {
		margin-top: 10rpx;
		height: 40rpx;
		font-size: 32rpx;
		margin-bottom: 20rpx;
		display: flex;
		align-items: center;
	}

	.policy-viewpoint-content-left {
		margin-top: 16rpx;
		width: 60rpx;
		height: 60rpx;
		border-radius: 60rpx;
		overflow: hidden;
	}

	.policy-viewpoint-content-left image {
		width: 100%;
		height: 100%;
	}

	.viewpoint-bottom-body-right {
		flex: 1;
		margin: 10rpx 0 0 20rpx;
	}

	.policy-viewpoint-content-right {
		flex: 1;
		margin: 10rpx 0 0 30rpx;
	}

	.viewpoint-top {
		display: flex;
		flex: 1;
		flex-direction: row;
		position: relative;
	}

	.viewPoint-peopleName {
		color: #e2c54e;
		font-size: 34rpx;
	}

	.viewPoint-like {
		display: flex;
		align-items: center;
	}

	.viewPoint-like text:nth-child(1) {
		position: absolute;
		right: 50rpx;
		font-size: 24rpx;

	}

	.viewPoint-like text:nth-child(2) {
		position: absolute;
		right: 20rpx;
		font-size: 20rpx;

	}

	.viewpoint-bottom-content {
		margin-top: 20rpx;
		font-size: 34rpx;
	}

	.viewpoint-bottom-timeAndReply {
		margin-top: 20rpx;
		font-size: 26rpx;
		position: relative;
	}

	.viewpoint-bottom-timeAndReply text:nth-child(1) {
		color: #808080;
	}

	.viewpoint-bottom-timeAndReply text:nth-child(2) {
		margin-left: 6rpx;
	}

	.policy-viewpoint-NoContent-image {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 30rpx;
	}

	.policy-viewpoint-NoContent-image text {
		font-size: 150rpx;
		color: #E6E7E6;
	}

	.policy-viewpoint-NoContent-text {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #d4d5d4;
		font-size: 30rpx;
		margin-top: 40rpx;
	}

	.policy-viewpoint {
		margin-top: 40rpx;
	}

	.policy-recommended {
		margin-top: 50rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.policy-recommended text:nth-child(1) {
		color: #f40101;
	}

	.policy-recommended text:nth-child(2) {
		color: #b4aeae;
		position: absolute;
		top: 8rpx;
		right: 100rpx;
	}
</style>
