
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./index.7b29bb33.js";import{_ as b}from"./index.f14483a3.js";import{_ as x}from"./index.341e7229.js";import C from"./index.2aae1033.js";import{_ as v,u as j}from"./index.6da96519.js";import{j as h,A as s,k,D as e,C as o,o as $,a0 as _,G as y}from"./vendor.ab59999c.js";const E=_("\u8FD4 \u56DE"),F=_("\u63D0 \u4EA4"),M=_("\u53D6 \u6D88"),w=h({name:"PagesExampleFormModeDetail"}),B=Object.assign(w,{setup(G){const{proxy:t}=y(),l=j();function i(){t.$refs.form.submit(()=>{t.$eventBus.emit("get-data-list"),n()})}function c(){n()}function n(){l.enableTabbar&&!l.enableMergeTabbar?t.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):t.$router.push({name:"pagesExampleGeneralFormModeList"})}return(r,S)=>{const a=s("el-button"),m=x,u=s("el-col"),d=s("el-row"),p=b,f=g;return $(),k("div",null,[e(m,{title:r.$route.name=="pagesExampleGeneralFormModeCreate"?"\u65B0\u589E":"\u7F16\u8F91"},{default:o(()=>[e(a,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:n},{default:o(()=>[E]),_:1})]),_:1},8,["title"]),e(p,null,{default:o(()=>[e(d,null,{default:o(()=>[e(u,{md:24,lg:16},{default:o(()=>[e(C,{id:r.$route.params.id,ref:"form"},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:o(()=>[e(a,{type:"primary",size:"large",onClick:i},{default:o(()=>[F]),_:1}),e(a,{size:"large",onClick:c},{default:o(()=>[M]),_:1})]),_:1})])}}});var V=v(B,[["__scopeId","data-v-f1085a96"]]);export{V as default};
