
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as d}from"./index.0d16c6a6.js";import{r as i,y as _,A as u,o as s,j as n,a5 as p,D as f,C as m,a0 as v,Z as g,l as h}from"./vendor.0c4fd540.js";const x={class:"search-container"},y={key:0,class:"more"},C={props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(o,{emit:l}){const t=o,e=i(!t.unfold);_(()=>t.unfold,()=>a(),{immediate:!0});function a(){e.value=!e.value,l("toggle",e.value)}return(c,k)=>{const r=u("el-button");return s(),n("div",x,[p(c.$slots,"default",{},void 0,!0),o.showMore?(s(),n("div",y,[f(r,{type:"text",size:"small",icon:e.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:a},{default:m(()=>[v(g(e.value?"\u6536\u8D77":"\u5C55\u5F00"),1)]),_:1},8,["icon"])])):h("v-if",!0)])}}};var b=d(C,[["__scopeId","data-v-987c3476"]]);export{b as _};
