
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{$ as e,k as l,r as a,l as t,H as i,J as d,K as n,m as o,n as s,s as u,L as r,V as p,U as c,S as f,P as m,I as y,q as _,M as v,O as b,h as k}from"./vendor.1e0be253.js";import{a as h}from"./index.e4e8dab3.js";import{_ as g}from"./plugin-vue_export-helper.5a098b48.js";const w=e=>(v("data-v-43ced942"),e=e(),b(),e),V={key:0},x=f("编 辑"),L={key:0},C={key:0},U={key:0},z={key:0},$=f("删 除"),j=w((()=>y("span",null,null,-1))),R={key:0,style:{padding:"10px"}},I=f("新增一条运费模版"),O=f("为指定地区设置运费模版"),q={class:"filter"},A=f("全部"),B=f("华北地区"),H=f("东北地区"),J=f("华东地区"),K=f("华中地区"),M=f("华南地区"),N=f("西南地区"),P=f("西北地区"),S=f("自治区"),D=f("直辖市"),E=f("确 定");var F=g({props:{readonly:{type:Boolean,default:!1},data:{type:Array,default:function(){return[]}},type:{type:Number,default:1}},emits:["update:data"],setup(v,{emit:b}){const g=v,{proxy:w}=k(),F=e({index:"",visible:!1,filter:"",checkList:[],disableList:[]}),G=l((()=>{let e;switch(F.value.filter){case"":e=h;break;case"autonomousRegion":e=h.filter((e=>e.autonomousRegion));break;case"provinceLevelCity":e=h.filter((e=>e.provinceLevelCity));break;default:e=h.filter((e=>e.region==F.value.filter))}return e}));function Q(){F.value.index="",F.value.checkList=[],F.value.disableList=W(),F.value.visible=!0}function T(e){let l="";for(const a in h)h[a].code===e&&(l=h[a].name);return l}function W(e){let l=[];for(let a=0;a<g.data.length;a++)e!==a&&(l=l.concat(g.data[a].list));return l}return(e,l)=>{const k=a("el-tag"),h=a("el-col"),X=a("el-button"),Y=a("el-row"),Z=a("el-table-column"),ee=a("el-input"),le=a("el-table"),ae=a("el-radio-button"),te=a("el-radio-group"),ie=a("el-checkbox"),de=a("el-checkbox-group"),ne=a("el-dialog");return t(),i("div",null,[v.readonly&&0==v.data.length?r("v-if",!0):d((t(),o(le,{key:0,data:v.data,border:"",class:"freight"},{empty:s((()=>[j])),append:s((()=>[v.readonly?r("v-if",!0):(t(),i("div",R,[u(X,{type:"primary",size:"small",plain:"",style:{width:"100%"},onClick:Q},{default:s((()=>[I])),_:1})]))])),default:s((()=>[u(Z,{label:"运送到"},{default:s((e=>[v.readonly?(t(),i("div",V,[(t(!0),i(p,null,c(e.row.list,((e,l)=>(t(),o(k,{key:l,type:"info"},{default:s((()=>[f(m(T(e)),1)])),_:2},1024)))),128))])):(t(),o(Y,{key:1,type:"flex",align:"middle"},{default:s((()=>[u(h,null,{default:s((()=>[(t(!0),i(p,null,c(e.row.list,((l,a)=>(t(),o(k,{key:a,"disable-transitions":!0,type:"info",closable:"",onClose:a=>function(e,l){let a=g.data;a[e].list.splice(a[e].list.indexOf(l),1),0===a[e].list.length&&a.splice(e,1),b("update:data",a)}(e.$index,l)},{default:s((()=>[f(m(T(l)),1)])),_:2},1032,["onClose"])))),128))])),_:2},1024),u(h,{style:{width:"100px","text-align":"right"}},{default:s((()=>[u(X,{size:"small",plain:"",onClick:l=>{return a=e.$index,F.value.index=a,F.value.checkList=g.data[a].list,F.value.disableList=W(a),void(F.value.visible=!0);var a}},{default:s((()=>[x])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024))])),_:1}),u(Z,{label:1==v.type?"首件数（件）":"首重量（kg）",width:"150",align:"center"},{default:s((e=>[v.readonly?(t(),i("span",L,m(e.row.first_step),1)):(t(),o(ee,{key:1,modelValue:e.row.first_step,"onUpdate:modelValue":l=>e.row.first_step=l,size:"small"},null,8,["modelValue","onUpdate:modelValue"]))])),_:1},8,["label"]),u(Z,{label:"首费（元）",width:"150",align:"center"},{default:s((e=>[v.readonly?(t(),i("span",C,m(e.row.first_price),1)):(t(),o(ee,{key:1,modelValue:e.row.first_price,"onUpdate:modelValue":l=>e.row.first_price=l,size:"small"},null,8,["modelValue","onUpdate:modelValue"]))])),_:1}),u(Z,{label:1==v.type?"续件数（件）":"续重量（kg）",width:"150",align:"center"},{default:s((e=>[v.readonly?(t(),i("span",U,m(e.row.continued_step),1)):(t(),o(ee,{key:1,modelValue:e.row.continued_step,"onUpdate:modelValue":l=>e.row.continued_step=l,size:"small"},null,8,["modelValue","onUpdate:modelValue"]))])),_:1},8,["label"]),u(Z,{label:"续费（元）",width:"150",align:"center"},{default:s((e=>[v.readonly?(t(),i("span",z,m(e.row.continued_price),1)):(t(),o(ee,{key:1,modelValue:e.row.continued_price,"onUpdate:modelValue":l=>e.row.continued_price=l,size:"small"},null,8,["modelValue","onUpdate:modelValue"]))])),_:1}),v.readonly?r("v-if",!0):(t(),o(Z,{key:0,label:"操作",width:"100",align:"center"},{default:s((e=>[u(X,{type:"danger",size:"small",plain:"",onClick:l=>function(e){let l=g.data;l.splice(e,1),b("update:data",l)}(e.$index)},{default:s((()=>[$])),_:2},1032,["onClick"])])),_:1}))])),_:1},8,["data"])),[[n,0!=v.data.length]]),v.readonly?r("v-if",!0):d((t(),o(X,{key:1,type:"primary",size:"small",plain:"",onClick:Q},{default:s((()=>[O])),_:1},512)),[[n,0==v.data.length]]),u(ne,{modelValue:F.value.visible,"onUpdate:modelValue":l[3]||(l[3]=e=>F.value.visible=e),title:"选择地区",width:"800px",class:"freight-dialog","append-to-body":"",onClosed:l[4]||(l[4]=e=>F.value.filter="")},{footer:s((()=>[u(X,{type:"primary",onClick:l[2]||(l[2]=e=>function(e){if(0===F.value.checkList.length)w.$message({message:"请勾选区域",type:"warning"});else{let l=g.data;""!==e?l[e].list=F.value.checkList:l.push({list:F.value.checkList,first_step:"",first_price:"",continued_step:"",continued_price:""}),b("update:data",l),F.value.visible=!1}}(F.value.index))},{default:s((()=>[E])),_:1})])),default:s((()=>[y("div",q,[u(te,{modelValue:F.value.filter,"onUpdate:modelValue":l[0]||(l[0]=e=>F.value.filter=e),size:"small"},{default:s((()=>[u(ae,{label:""},{default:s((()=>[A])),_:1}),u(ae,{label:"north"},{default:s((()=>[B])),_:1}),u(ae,{label:"northeast"},{default:s((()=>[H])),_:1}),u(ae,{label:"east"},{default:s((()=>[J])),_:1}),u(ae,{label:"central"},{default:s((()=>[K])),_:1}),u(ae,{label:"south"},{default:s((()=>[M])),_:1}),u(ae,{label:"southwest"},{default:s((()=>[N])),_:1}),u(ae,{label:"northwest"},{default:s((()=>[P])),_:1}),u(ae,{label:"autonomousRegion"},{default:s((()=>[S])),_:1}),u(ae,{label:"provinceLevelCity"},{default:s((()=>[D])),_:1})])),_:1},8,["modelValue"])]),u(de,{modelValue:F.value.checkList,"onUpdate:modelValue":l[1]||(l[1]=e=>F.value.checkList=e),style:{"margin-left":"50px"}},{default:s((()=>[u(Y,null,{default:s((()=>[(t(!0),i(p,null,c(_(G),((e,l)=>(t(),o(h,{key:l,span:6},{default:s((()=>[u(ie,{label:e.code,disabled:F.value.disableList.includes(e.code)},{default:s((()=>[f(m(e.name),1)])),_:2},1032,["label","disabled"])])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])}}},[["__scopeId","data-v-43ced942"]]);export{F as default};
