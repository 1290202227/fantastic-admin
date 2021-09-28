
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.afd122f8.js";import{_ as l}from"./index.2f66b5c7.js";import{_ as a}from"./index.319d6c02.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";import{r as o,a as t,n as m,t as u,x as r,q as f,F as n}from"./vendor.8d92a282.js";const p={data:()=>({form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}})},V=f("p",null,"FixedActionBar",-1),s=f("p",{style:{"margin-bottom":"0"}},"避免因页面过长导致操作按钮需要滚动到页面底部才能操作，例如表单页",-1),i=n("-"),b=n("-"),_=n("-"),c=n("立即创建"),y=n("取消");var h=d(p,[["render",function(d,f,n,p,h,U){const g=e,v=o("el-input"),x=o("el-form-item"),w=o("el-option"),j=o("el-select"),k=o("el-date-picker"),F=o("el-col"),q=o("el-time-picker"),A=o("el-switch"),B=o("el-checkbox"),z=o("el-checkbox-group"),C=o("el-radio"),D=o("el-radio-group"),E=o("el-form"),G=o("el-row"),H=l,I=o("el-button"),J=a;return t(),m("div",null,[u(g,{title:"固定底部操作栏",content:"避免因页面过长导致操作按钮需要滚动到页面底部才能操作，例如表单页"},{content:r((()=>[V,s])),_:1}),u(H,null,{default:r((()=>[u(G,null,{default:r((()=>[u(F,{md:24,lg:12},{default:r((()=>[u(E,{ref:"form",model:h.form,"label-width":"120px"},{default:r((()=>[u(x,{label:"活动名称"},{default:r((()=>[u(v,{modelValue:h.form.name,"onUpdate:modelValue":f[0]||(f[0]=e=>h.form.name=e)},null,8,["modelValue"])])),_:1}),u(x,{label:"活动区域"},{default:r((()=>[u(j,{modelValue:h.form.region,"onUpdate:modelValue":f[1]||(f[1]=e=>h.form.region=e),placeholder:"请选择活动区域"},{default:r((()=>[u(w,{label:"区域一",value:"shanghai"}),u(w,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),u(x,{label:"活动时间"},{default:r((()=>[u(F,{span:11},{default:r((()=>[u(k,{modelValue:h.form.date1,"onUpdate:modelValue":f[2]||(f[2]=e=>h.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),u(F,{class:"line",span:2},{default:r((()=>[i])),_:1}),u(F,{span:11},{default:r((()=>[u(q,{modelValue:h.form.date2,"onUpdate:modelValue":f[3]||(f[3]=e=>h.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),u(x,{label:"即时配送"},{default:r((()=>[u(A,{modelValue:h.form.delivery,"onUpdate:modelValue":f[4]||(f[4]=e=>h.form.delivery=e)},null,8,["modelValue"])])),_:1}),u(x,{label:"活动性质"},{default:r((()=>[u(z,{modelValue:h.form.type,"onUpdate:modelValue":f[5]||(f[5]=e=>h.form.type=e)},{default:r((()=>[u(B,{label:"美食/餐厅线上活动",name:"type"}),u(B,{label:"地推活动",name:"type"}),u(B,{label:"线下主题活动",name:"type"}),u(B,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),u(x,{label:"特殊资源"},{default:r((()=>[u(D,{modelValue:h.form.resource,"onUpdate:modelValue":f[6]||(f[6]=e=>h.form.resource=e)},{default:r((()=>[u(C,{label:"线上品牌商赞助"}),u(C,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),u(x,{label:"活动形式"},{default:r((()=>[u(v,{modelValue:h.form.desc,"onUpdate:modelValue":f[7]||(f[7]=e=>h.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),u(x,{label:"活动名称"},{default:r((()=>[u(v,{modelValue:h.form.name,"onUpdate:modelValue":f[8]||(f[8]=e=>h.form.name=e)},null,8,["modelValue"])])),_:1}),u(x,{label:"活动区域"},{default:r((()=>[u(j,{modelValue:h.form.region,"onUpdate:modelValue":f[9]||(f[9]=e=>h.form.region=e),placeholder:"请选择活动区域"},{default:r((()=>[u(w,{label:"区域一",value:"shanghai"}),u(w,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),u(x,{label:"活动时间"},{default:r((()=>[u(F,{span:11},{default:r((()=>[u(k,{modelValue:h.form.date1,"onUpdate:modelValue":f[10]||(f[10]=e=>h.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),u(F,{class:"line",span:2},{default:r((()=>[b])),_:1}),u(F,{span:11},{default:r((()=>[u(q,{modelValue:h.form.date2,"onUpdate:modelValue":f[11]||(f[11]=e=>h.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),u(x,{label:"即时配送"},{default:r((()=>[u(A,{modelValue:h.form.delivery,"onUpdate:modelValue":f[12]||(f[12]=e=>h.form.delivery=e)},null,8,["modelValue"])])),_:1}),u(x,{label:"活动性质"},{default:r((()=>[u(z,{modelValue:h.form.type,"onUpdate:modelValue":f[13]||(f[13]=e=>h.form.type=e)},{default:r((()=>[u(B,{label:"美食/餐厅线上活动",name:"type"}),u(B,{label:"地推活动",name:"type"}),u(B,{label:"线下主题活动",name:"type"}),u(B,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),u(x,{label:"特殊资源"},{default:r((()=>[u(D,{modelValue:h.form.resource,"onUpdate:modelValue":f[14]||(f[14]=e=>h.form.resource=e)},{default:r((()=>[u(C,{label:"线上品牌商赞助"}),u(C,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),u(x,{label:"活动形式"},{default:r((()=>[u(v,{modelValue:h.form.desc,"onUpdate:modelValue":f[15]||(f[15]=e=>h.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),u(x,{label:"活动名称"},{default:r((()=>[u(v,{modelValue:h.form.name,"onUpdate:modelValue":f[16]||(f[16]=e=>h.form.name=e)},null,8,["modelValue"])])),_:1}),u(x,{label:"活动区域"},{default:r((()=>[u(j,{modelValue:h.form.region,"onUpdate:modelValue":f[17]||(f[17]=e=>h.form.region=e),placeholder:"请选择活动区域"},{default:r((()=>[u(w,{label:"区域一",value:"shanghai"}),u(w,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),u(x,{label:"活动时间"},{default:r((()=>[u(F,{span:11},{default:r((()=>[u(k,{modelValue:h.form.date1,"onUpdate:modelValue":f[18]||(f[18]=e=>h.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),u(F,{class:"line",span:2},{default:r((()=>[_])),_:1}),u(F,{span:11},{default:r((()=>[u(q,{modelValue:h.form.date2,"onUpdate:modelValue":f[19]||(f[19]=e=>h.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),u(x,{label:"即时配送"},{default:r((()=>[u(A,{modelValue:h.form.delivery,"onUpdate:modelValue":f[20]||(f[20]=e=>h.form.delivery=e)},null,8,["modelValue"])])),_:1}),u(x,{label:"活动性质"},{default:r((()=>[u(z,{modelValue:h.form.type,"onUpdate:modelValue":f[21]||(f[21]=e=>h.form.type=e)},{default:r((()=>[u(B,{label:"美食/餐厅线上活动",name:"type"}),u(B,{label:"地推活动",name:"type"}),u(B,{label:"线下主题活动",name:"type"}),u(B,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),u(x,{label:"特殊资源"},{default:r((()=>[u(D,{modelValue:h.form.resource,"onUpdate:modelValue":f[22]||(f[22]=e=>h.form.resource=e)},{default:r((()=>[u(C,{label:"线上品牌商赞助"}),u(C,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),u(x,{label:"活动形式"},{default:r((()=>[u(v,{modelValue:h.form.desc,"onUpdate:modelValue":f[23]||(f[23]=e=>h.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1}),u(J,null,{default:r((()=>[u(I,{type:"primary"},{default:r((()=>[c])),_:1}),u(I,null,{default:r((()=>[y])),_:1})])),_:1})])}]]);export{h as default};
