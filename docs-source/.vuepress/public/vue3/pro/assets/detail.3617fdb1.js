
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.c7126dcb.js";import{_ as v}from"./index.761e72da.js";import{_ as h}from"./index.d075170b.js";import{K as j,u as y,r as s,m as C,O as $,t as e,q as t,V as _,i as k}from"./vendor.22bd9123.js";import D from"./index.15aca2b9.js";import{_ as E}from"./plugin-vue_export-helper.5a098b48.js";import"./index.bde6221d.js";import"./index.38d93228.js";import"./index.825d3c3e.js";const S=_("\u8FD4 \u56DE"),w=_("\u63D0 \u4EA4"),B=_("\u53D6 \u6D88"),T=j({name:"PagesExampleDeliveryDetail"});function V(L){const{proxy:o}=k(),i=y();function l(){o.$refs.form.submit(()=>{o.$eventBus.emit("get-data-list"),n()})}function c(){n()}function n(){i.state.settings.enableTabbar&&!i.state.settings.enableMergeTabbar?o.$tabbar.close({name:"pagesExampleShopDeliveryList"}):o.$router.push({name:"pagesExampleShopDeliveryList"})}return(r,N)=>{const a=s("el-button"),p=h,d=s("el-col"),m=s("el-row"),u=v,f=x;return C(),$("div",null,[e(p,{title:r.$route.name=="pagesExampleShopDeliveryCreate"?"\u65B0\u589E\u8FD0\u8D39\u6A21\u7248":"\u7F16\u8F91\u8FD0\u8D39\u6A21\u7248"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:n},{default:t(()=>[S]),_:1})]),_:1},8,["title"]),e(u,null,{default:t(()=>[e(m,null,{default:t(()=>[e(d,{md:24,lg:16},{default:t(()=>[e(D,{id:r.$route.params.id,ref:(b,g)=>{g.form=b}},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",onClick:l},{default:t(()=>[w]),_:1}),e(a,{onClick:c},{default:t(()=>[B]),_:1})]),_:1})])}}const I=Object.assign(T,{setup:V});var H=E(I,[["__scopeId","data-v-c25327d0"]]);export{H as default};
