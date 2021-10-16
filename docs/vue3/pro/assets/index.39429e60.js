
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";import{a1 as _,w as i,r as d,l as s,J as n,Z as p,s as f,n as m,U as v,R as g,O as h}from"./vendor.66600095.js";const x={class:"search-container"},y={key:0,class:"more"},w={props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(t,{emit:l}){const o=t,e=_(!o.unfold);i(()=>o.unfold,()=>a(),{immediate:!0});function a(){e.value=!e.value,l("toggle",e.value)}return(r,b)=>{const c=d("el-button");return s(),n("div",x,[p(r.$slots,"default",{},void 0,!0),t.showMore?(s(),n("div",y,[f(c,{type:"text",size:"small",icon:e.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:a},{default:m(()=>[v(g(e.value?"\u6536\u8D77":"\u5C55\u5F00"),1)]),_:1},8,["icon"])])):h("v-if",!0)])}}};var C=u(w,[["__scopeId","data-v-987c3476"]]);export{C as _};
