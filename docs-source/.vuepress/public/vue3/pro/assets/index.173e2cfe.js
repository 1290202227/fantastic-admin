
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{H as e,I as a,$ as o,w as s,r as t,l,J as n,X as c,s as i,n as r,R as u,O as d,S as v}from"./vendor.7707186e.js";e("data-v-987c3476");const f={class:"search-container"},p={key:0,class:"more"};a();const m={props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(e,{emit:a}){const m=e,g=o(!m.unfold);function y(){g.value=!g.value,a("toggle",g.value)}return s((()=>m.unfold),(()=>y()),{immediate:!0}),(a,o)=>{const s=t("el-button");return l(),n("div",f,[c(a.$slots,"default",{},void 0,!0),e.showMore?(l(),n("div",p,[i(s,{type:"text",size:"small",icon:g.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:y},{default:r((()=>[u(d(g.value?"收起":"展开"),1)])),_:1},8,["icon"])])):v("v-if",!0)])}},__scopeId:"data-v-987c3476"};export{m as _};
