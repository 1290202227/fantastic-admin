
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as l}from"./index.d7acb132.js";import{_ as e}from"./index.8daf54f1.js";import{_ as a}from"./index.6d456c03.js";import{_ as t}from"./plugin-vue_export-helper.5a098b48.js";import{r as i,l as s,H as n,s as d,n as o,I as c,V as u,U as r,P as f,M as p,O as m,S as b}from"./vendor.1e0be253.js";import"./index.bf374722.js";const v={data:()=>({diff:[{basic:["3 套页面布局","1 款主题风格","6 个侧边栏导航配置项","支持外链导航","支持全方位权限验证","10+ 个基础组件","支持 Mock 数据","团队代码规范","需保留作者版权信息"],pro:["20 套页面布局","6 款主题风格","10 个侧边栏导航配置项","支持外链导航","支持内嵌导航","支持 Tab 标签栏","支持全方位权限验证","10+ 个基础组件","提供扩展组件","支持国际化","支持 Mock 数据","支持错误日志上报","支持文件自动生成","提供业务应用静态页面（长期扩充）","团队代码规范","可自定义版权信息","提供一对一技术支持"]}],type:1}),computed:{locationOrigin:()=>location.origin,titlePrefix(){let l=[];switch(this.type){case 1:l=["今天","昨天"];break;case 2:l=["本周","上周"];break;case 3:l=["本月","上月"];break;case 4:l=["今年","去年"]}return l}},methods:{open(l){window.open(l,"top")},onIconClick(l){this.$message({message:`你点击了：${l}`,type:"info"})}}},_=l=>(p("data-v-2a6abcc8"),l=l(),m(),l),g=_((()=>c("div",null,[c("div",{style:{"margin-bottom":"5px"}},[b("这是一款"),c("b",{style:{"text-emphasis-style":"'❤'"}},"开箱即用"),b("的中后台框架，同时它也经历过数十个真实项目的技术沉淀，确保框架在开发中可落地、可使用、可维护")]),c("div",null,"注：在作者就职的公司，本框架已在电商、直播、OA、ERP等多个不同领域的中后台系统中应用并稳定运行")],-1))),y=b("开发文档"),x=b("代码仓库"),h={class:"fa-info"},k=["src"],C=_((()=>c("h1",null,"Fantastic-admin",-1))),V=[_((()=>c("i",{class:"el-icon-star-off"},null,-1))),_((()=>c("div",{class:"title"},"收藏",-1)))],P=[_((()=>c("i",{class:"el-icon-bell"},null,-1))),_((()=>c("div",{class:"title"},"通知",-1)))],w=[_((()=>c("i",{class:"el-icon-picture-outline"},null,-1))),_((()=>c("div",{class:"title"},"图集",-1)))],I=[_((()=>c("i",{class:"el-icon-camera"},null,-1))),_((()=>c("div",{class:"title"},"拍照",-1)))],O=[_((()=>c("i",{class:"el-icon-video-camera"},null,-1))),_((()=>c("div",{class:"title"},"视频",-1)))],U=[_((()=>c("i",{class:"el-icon-goods"},null,-1))),_((()=>c("div",{class:"title"},"购物",-1)))],j=_((()=>c("div",{class:"question"},[c("ol",{class:"answer"},[c("li",null,[c("span",null,"没有前端开发人员的小型公司。"),b("据了解，有些小型公司没有前端开发人员，而这些公司在开发中后台系统的时候，直接要求后端开发人员来进行开发工作。所以借助 Vue 的易学习易上手特性，再加上本框架的加持，可以让后端开发人员能在短时间内转型成为全栈开发。")]),c("li",null,[c("span",null,"前端开发人员不足的中小型公司。"),b("根据招聘网站统计，几乎所有公司都缺前端，其中有很大一部分中小型公司标配只有1-2名前端开发人员，而这些公司在开发中后台系统的时候，如果能有一套现成的中后台框架系统，不仅能提高项目开发效率，同时还大大减轻前端开发人员工作压力。")]),c("li",null,[c("span",null,"项目型公司。"),b("特点为项目多，周期短，甲方对页面布局和主题风格有绝对话语权，而通过专业版提供的 20 套页面布局和 6 款主题风格（共计 120 种）可应对绝大部分甲方需求，并且可自定义扩展主题风格的样式，实现高度定制化。")]),c("li",null,[c("span",null,"产品型公司。"),b("产品型公司最担心的就是产品开发中代码不可控的因素，本框架除了提供完善的开发文档和代码注释外，针对专业版用户还提供一对一的技术支持，确保开发人员尽可能理解整套框架源码的方方面面，为产品保驾护航。")]),c("li",null,[c("span",null,"接私活的个人开发者。"),b("手里有一套可高度定制化的中后台框架，什么项目都不用担心啦~")])])],-1))),$=_((()=>c("div",{class:"question"},[c("ol",{class:"answer"},[c("li",null,[c("span",null,"作者拥有10年+的前后端开发经验。"),b("部分框架的作者由于天然缺少后端开发经验，可能会在设计框架的时候，很少或者没有考虑后端的实现逻辑，导致框架在实际使用中，业务场景无法落地，开发人员得通过修改源码自行实现业务。")]),c("li",null,[c("span",null,"经历过数十个真实项目的打磨。"),b("没用在真实业务场景中使用过的框架都是纸飞机，哪怕它提供的演示功能特别华丽。而本框架在作者就职的公司，已经稳定应用在电商、直播、OA、CRM、ERP等多个不同领域的中后台系统中。")]),c("li",null,[c("span",null,"丰富的组件库。"),b("除了支持 ElementUI 自带的组件外，框架还扩充了部分业务组件，以及第三方插件。借助以往的项目经验，提供最佳实践方案，方便开发人员直接使用。")]),c("li",null,[c("span",null,"持续更新的业务应用静态页面。"),b("通过项目积累，沉淀出数十个业务应用的静态页面，做到开发人员拿来即可使用，极大提升开发效率的同时，还省去了产品和设计人员的工作。")]),c("li",null,[c("span",null,"长期维护。"),b("无论是免费的基础版，还是付费的专业版，均提供长期维护。区别在于基础版侧重于稳定性维护，主要在修复 bug ，不定期增加新特性；专业版侧重于新特性开发，在确保稳定的基础上，会长期深挖中后台系统框架，持续产出可落地的特性或开发规范。")])])],-1))),z={class:"header"},M=b(" 访客数据魔方 "),E=_((()=>c("div",{class:"today"},"123",-1))),R={class:"sub-title"},q=_((()=>c("div",{class:"yesterday"},"123",-1))),A={class:"sub-title"},F=_((()=>c("div",{class:"contrast"},"12",-1))),H=_((()=>c("div",{class:"sub-title"},"对比",-1))),S=_((()=>c("div",{class:"today"},"123",-1))),T={class:"sub-title"},B=_((()=>c("div",{class:"yesterday"},"123",-1))),D={class:"sub-title"},G=_((()=>c("div",{class:"contrast"},"12",-1))),J=_((()=>c("div",{class:"sub-title"},"对比",-1))),K={class:"header"},L=b(" 下载数据魔方 "),N=_((()=>c("div",{class:"today"},"123",-1))),Q={class:"sub-title"},W=_((()=>c("div",{class:"yesterday"},"123",-1))),X={class:"sub-title"},Y=_((()=>c("div",{class:"contrast"},"12",-1))),Z=_((()=>c("div",{class:"sub-title"},"对比",-1))),ll={class:"header"},el=b(" 销售数据魔方 "),al=_((()=>c("div",{class:"today"},"123",-1))),tl={class:"sub-title"},il=_((()=>c("div",{class:"yesterday"},"123",-1))),sl={class:"sub-title"},nl=_((()=>c("div",{class:"contrast"},"12",-1))),dl=_((()=>c("div",{class:"sub-title"},"对比",-1)));var ol=t(v,[["render",function(t,p,m,b,v,_){const ol=i("el-button"),cl=i("el-button-group"),ul=l,rl=e,fl=i("el-col"),pl=i("el-row"),ml=i("el-table-column"),bl=i("el-table"),vl=a,_l=i("el-option"),gl=i("el-select"),yl=i("el-card");return s(),n("div",null,[d(ul,{title:"欢迎使用 Fantastic-admin（专业版）"},{content:o((()=>[g])),default:o((()=>[d(cl,{style:{"margin-right":"10px"}},{default:o((()=>[d(ol,{type:"success",plain:"",icon:"ri-file-text-line",onClick:p[0]||(p[0]=l=>_.open(`https://hooray.${_.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin`))},{default:o((()=>[y])),_:1}),d(ol,{type:"primary",icon:"ri-code-s-slash-line",onClick:p[1]||(p[1]=l=>_.open(`https://${_.locationOrigin.includes("gitee")?"gitee":"github"}.com/hooray/fantastic-admin`))},{default:o((()=>[x])),_:1})])),_:1})])),_:1}),d(pl,{gutter:20,style:{padding:"0 20px","margin-bottom":"20px"}},{default:o((()=>[d(fl,{md:6},{default:o((()=>[d(rl,{header:"开发文档",num:123,tip:"较上周上升50%",icon:"ri-book-read-line"})])),_:1}),d(fl,{md:6},{default:o((()=>[d(rl,{"color-from":"#fbaaa2","color-to":"#fc5286",header:"基础组件",num:12323,tip:"较上周上升50%",icon:"sidebar-element"})])),_:1}),d(fl,{md:6},{default:o((()=>[d(rl,{"color-from":"#ff763b","color-to":"#ffc480",header:"扩展组件",num:123,tip:"较上周上升50%",icon:"sidebar-component"})])),_:1}),d(fl,{md:6},{default:o((()=>[d(rl,{"color-from":"#6a8eff","color-to":"#0e4cfd",header:"业务应用页面",num:123,tip:"较上周上升50%",icon:"ri-pages-line"})])),_:1})])),_:1}),d(pl,{gutter:20,style:{margin:"0 10px"}},{default:o((()=>[d(fl,{lg:8},{default:o((()=>[d(vl,{title:"框架信息",style:{margin:"0 0 20px 0"}},{default:o((()=>[c("div",h,[c("img",{src:`https://hooray.${_.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,style:{width:"150px"}},null,8,k),C,d(bl,{data:v.diff,"row-key":"prop",size:"mini",border:"",stripe:""},{default:o((()=>[d(ml,{label:"基础版",align:"center"},{default:o((l=>[(s(!0),n(u,null,r(l.row.basic,((l,e)=>(s(),n("div",{key:e},f(l),1)))),128))])),_:1}),d(ml,{label:"专业版",align:"center"},{default:o((l=>[(s(!0),n(u,null,r(l.row.pro,((l,e)=>(s(),n("div",{key:e},f(l),1)))),128))])),_:1})])),_:1},8,["data"])])])),_:1})])),_:1}),d(fl,{lg:16},{default:o((()=>[d(pl,{gutter:20,style:{margin:"0 -10px 20px -10px"}},{default:o((()=>[d(fl,{md:4},{default:o((()=>[c("div",{class:"icon-box icon-box-1",onClick:p[2]||(p[2]=l=>_.onIconClick("收藏"))},V)])),_:1}),d(fl,{md:4},{default:o((()=>[c("div",{class:"icon-box icon-box-2",onClick:p[3]||(p[3]=l=>_.onIconClick("通知"))},P)])),_:1}),d(fl,{md:4},{default:o((()=>[c("div",{class:"icon-box icon-box-3",onClick:p[4]||(p[4]=l=>_.onIconClick("图集"))},w)])),_:1}),d(fl,{md:4},{default:o((()=>[c("div",{class:"icon-box icon-box-4",onClick:p[5]||(p[5]=l=>_.onIconClick("拍照"))},I)])),_:1}),d(fl,{md:4},{default:o((()=>[c("div",{class:"icon-box icon-box-5",onClick:p[6]||(p[6]=l=>_.onIconClick("视频"))},O)])),_:1}),d(fl,{md:4},{default:o((()=>[c("div",{class:"icon-box icon-box-6",onClick:p[7]||(p[7]=l=>_.onIconClick("购物"))},U)])),_:1})])),_:1}),d(vl,{title:"应用场景",style:{margin:"0 0 20px 0"}},{default:o((()=>[j])),_:1}),d(vl,{title:"优势",style:{margin:"0"}},{default:o((()=>[$])),_:1})])),_:1})])),_:1}),d(vl,null,{default:o((()=>[d(pl,{gutter:20},{default:o((()=>[d(fl,{md:8},{default:o((()=>[d(yl,{shadow:"hover",class:"cube-card"},{header:o((()=>[c("div",z,[M,d(gl,{modelValue:v.type,"onUpdate:modelValue":p[8]||(p[8]=l=>v.type=l),size:"mini",placeholder:"请选择"},{default:o((()=>[d(_l,{label:"今天 - 昨天",value:1}),d(_l,{label:"本周 - 上周",value:2}),d(_l,{label:"本月 - 上月",value:3}),d(_l,{label:"今年 - 去年",value:4})])),_:1},8,["modelValue"])])])),default:o((()=>[d(pl,{gutter:10},{default:o((()=>[d(fl,{span:10},{default:o((()=>[E,c("div",R,f(_.titlePrefix[0])+"访问量（单位：PV）",1)])),_:1}),d(fl,{span:10},{default:o((()=>[q,c("div",A,f(_.titlePrefix[1])+"访问量（单位：PV）",1)])),_:1}),d(fl,{span:4},{default:o((()=>[F,H])),_:1})])),_:1}),d(pl,{gutter:10},{default:o((()=>[d(fl,{span:10},{default:o((()=>[S,c("div",T,f(_.titlePrefix[0])+"访问量（单位：UV）",1)])),_:1}),d(fl,{span:10},{default:o((()=>[B,c("div",D,f(_.titlePrefix[1])+"访问量（单位：UV）",1)])),_:1}),d(fl,{span:4},{default:o((()=>[G,J])),_:1})])),_:1})])),_:1})])),_:1}),d(fl,{md:8},{default:o((()=>[d(yl,{shadow:"hover",class:"cube-card"},{header:o((()=>[c("div",K,[L,d(gl,{modelValue:v.type,"onUpdate:modelValue":p[9]||(p[9]=l=>v.type=l),size:"mini",placeholder:"请选择"},{default:o((()=>[d(_l,{label:"今天 - 昨天",value:1}),d(_l,{label:"本周 - 上周",value:2}),d(_l,{label:"本月 - 上月",value:3}),d(_l,{label:"今年 - 去年",value:4})])),_:1},8,["modelValue"])])])),default:o((()=>[d(pl,{gutter:10},{default:o((()=>[d(fl,{span:10},{default:o((()=>[N,c("div",Q,f(_.titlePrefix[0])+"下载量（单位：次）",1)])),_:1}),d(fl,{span:10},{default:o((()=>[W,c("div",X,f(_.titlePrefix[1])+"下载量（单位：次）",1)])),_:1}),d(fl,{span:4},{default:o((()=>[Y,Z])),_:1})])),_:1})])),_:1})])),_:1}),d(fl,{md:8},{default:o((()=>[d(yl,{shadow:"hover",class:"cube-card"},{header:o((()=>[c("div",ll,[el,d(gl,{modelValue:v.type,"onUpdate:modelValue":p[10]||(p[10]=l=>v.type=l),size:"mini",placeholder:"请选择"},{default:o((()=>[d(_l,{label:"今天 - 昨天",value:1}),d(_l,{label:"本周 - 上周",value:2}),d(_l,{label:"本月 - 上月",value:3}),d(_l,{label:"今年 - 去年",value:4})])),_:1},8,["modelValue"])])])),default:o((()=>[d(pl,{gutter:10},{default:o((()=>[d(fl,{span:10},{default:o((()=>[al,c("div",tl,f(_.titlePrefix[0])+"销售总金额（单位：人民币）",1)])),_:1}),d(fl,{span:10},{default:o((()=>[il,c("div",sl,f(_.titlePrefix[1])+"销售总金额（单位：人民币）",1)])),_:1}),d(fl,{span:4},{default:o((()=>[nl,dl])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])}],["__scopeId","data-v-2a6abcc8"]]);export{ol as default};
