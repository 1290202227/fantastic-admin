
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./index.0f7a313d.js";import{r as _,z as d,B as u,o as s,l as n,a4 as f,F as p,D as m,$ as v,Y as g,q as h}from"./vendor.b17bec21.js";const x={class:"search-container"},y={key:0,class:"more"},b={props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(o,{emit:l}){const t=o,e=_(!t.unfold);d(()=>t.unfold,()=>a(),{immediate:!0});function a(){e.value=!e.value,l("toggle",e.value)}return(r,B)=>{const c=u("el-button");return s(),n("div",x,[f(r.$slots,"default",{},void 0,!0),o.showMore?(s(),n("div",y,[p(c,{type:"text",size:"small",icon:e.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:a},{default:m(()=>[v(g(e.value?"\u6536\u8D77":"\u5C55\u5F00"),1)]),_:1},8,["icon"])])):h("v-if",!0)])}}};var C=i(b,[["__scopeId","data-v-fbe6e7f8"]]);export{C as _};
