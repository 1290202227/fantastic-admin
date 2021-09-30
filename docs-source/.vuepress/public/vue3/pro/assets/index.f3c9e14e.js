
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";import{$ as o,w as a,r as t,l as s,H as l,X as n,s as r,n as i,S as u,P as c,L as d}from"./vendor.e59ac5d6.js";const p={class:"search-container"},f={key:0,class:"more"};var v=e({props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(e,{emit:v}){const m=e,_=o(!m.unfold);function g(){_.value=!_.value,v("toggle",_.value)}return a((()=>m.unfold),(()=>g()),{immediate:!0}),(o,a)=>{const v=t("el-button");return s(),l("div",p,[n(o.$slots,"default",{},void 0,!0),e.showMore?(s(),l("div",f,[r(v,{type:"text",size:"small",icon:_.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:g},{default:i((()=>[u(c(_.value?"收起":"展开"),1)])),_:1},8,["icon"])])):d("v-if",!0)])}}},[["__scopeId","data-v-fbe6e7f8"]]);export{v as _};
