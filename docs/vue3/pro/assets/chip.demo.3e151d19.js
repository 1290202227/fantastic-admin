
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.ffbd20e5.js";import{H as a,I as l,l as s,J as t,K as o,X as n,S as d,Y as i,r as u,s as f,n as c,m as r,R as p}from"./vendor.7707186e.js";import{_}from"./index.f03e52fd.js";import{i as m}from"./logo.3c3b2e9b.js";a("data-v-1575b7f6");const y={class:"content"},v=[o("i",{class:"el-icon-close"},null,-1)];l();const h={props:{type:{type:String,default:""},closable:{type:Boolean,default:!1}},emits:["close"],setup:(e,{emit:a})=>(l,u)=>(s(),t("div",{class:i(["chip",[e.type?`chip--${e.type}`:""]])},[o("div",y,[n(l.$slots,"default",{},void 0,!0),e.closable?(s(),t("span",{key:0,class:"closable",onClick:u[0]||(u[0]=e=>a("close"))},v)):d("v-if",!0)])],2)),__scopeId:"data-v-1575b7f6"},b={data:()=>({isShow:!0,avatar:m}),methods:{handleClose(){this.isShow=!1}}},g=p(" 基础纸片 "),C=p("Fa"),S=p(" 头像文字 "),j=p(" 头像图标 "),w=p(" 头像图片 "),k=p(" 关闭按钮 "),x=p(" Primary "),I=p(" Success "),$=p(" Info "),B=p(" Waning "),D=p(" Danger ");b.render=function(a,l,o,n,i,p){const m=e,y=h,v=u("el-avatar"),b=_;return s(),t("div",null,[f(m,{title:"纸片",content:"Chip"}),f(b,null,{default:c((()=>[f(y,null,{default:c((()=>[g])),_:1}),f(y,null,{default:c((()=>[f(v,null,{default:c((()=>[C])),_:1}),S])),_:1}),f(y,null,{default:c((()=>[f(v,{icon:"el-icon-user-solid"}),j])),_:1}),f(y,null,{default:c((()=>[f(v,{src:i.avatar},null,8,["src"]),w])),_:1}),i.isShow?(s(),r(y,{key:0,closable:"",onClose:p.handleClose},{default:c((()=>[k])),_:1},8,["onClose"])):d("v-if",!0)])),_:1}),f(b,null,{default:c((()=>[f(y,{type:"primary"},{default:c((()=>[x])),_:1}),f(y,{type:"success"},{default:c((()=>[I])),_:1}),f(y,{type:"info"},{default:c((()=>[$])),_:1}),f(y,{type:"warning"},{default:c((()=>[B])),_:1}),f(y,{type:"danger"},{default:c((()=>[D])),_:1})])),_:1})])};export{b as default};
