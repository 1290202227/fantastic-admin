
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{H as a,I as e,$ as o,w as t,r as s,n as l,J as n,X as c,q as d,l as i,R as r,O as u,S as v}from"./vendor.3dac1dfd.js";a("data-v-77a3c230");const f={class:"search-container"},p={key:0,class:"more"};e();const m={props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(a,{emit:e}){const m=a,g=o(!m.unfold);function y(){g.value=!g.value,e("toggle",g.value)}return t((()=>m.unfold),(()=>y()),{immediate:!0}),(e,o)=>{const t=s("el-button");return l(),n("div",f,[c(e.$slots,"default",{},void 0,!0),a.showMore?(l(),n("div",p,[d(t,{type:"text",size:"small",icon:g.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:y},{default:i((()=>[r(u(g.value?"收起":"展开"),1)])),_:1},8,["icon"])])):v("v-if",!0)])}},__scopeId:"data-v-77a3c230"};export{m as _};
