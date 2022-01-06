
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./index.6da96519.js";import{r as _,y as d,A as u,o as s,k as n,a5 as p,D as f,C as m,a0 as v,Z as g,m as h}from"./vendor.ab59999c.js";const x={class:"search-container"},y={key:0,class:"more"},k={props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(o,{emit:l}){const t=o,e=_(!t.unfold);d(()=>t.unfold,()=>a(),{immediate:!0});function a(){e.value=!e.value,l("toggle",e.value)}return(c,C)=>{const r=u("el-button");return s(),n("div",x,[p(c.$slots,"default",{},void 0,!0),o.showMore?(s(),n("div",y,[f(r,{type:"text",size:"small",icon:e.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:a},{default:m(()=>[v(g(e.value?"\u6536\u8D77":"\u5C55\u5F00"),1)]),_:1},8,["icon"])])):h("v-if",!0)])}}};var B=i(k,[["__scopeId","data-v-987c3476"]]);export{B as _};
