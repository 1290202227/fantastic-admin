
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.b5dc30d5.js";import{_ as v}from"./index.ac124bbf.js";import{_ as C}from"./index.e7f84b3a.js";import{i as j,s as $,A as s,o as h,j as k,D as e,C as t,$ as _,F as D}from"./vendor.399b4c48.js";import y from"./index.cf3de801.js";import{_ as w}from"./index.a6a9d62e.js";const B=_("\u8FD4 \u56DE"),E=_("\u63D0 \u4EA4"),N=_("\u53D6 \u6D88"),T=j({name:"PagesExampleDepartmentDetail"});function F(I){const{proxy:n}=D(),r=$();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function c(){o()}function o(){r.state.settings.enableTabbar&&!r.state.settings.enableMergeTabbar?n.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):n.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(l,L)=>{const a=s("el-button"),m=C,p=s("el-col"),u=s("el-row"),d=v,f=x;return h(),k("div",null,[e(m,{title:l.$route.name=="routerName"?"\u65B0\u589E\u90E8\u95E8":"\u7F16\u8F91\u90E8\u95E8"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:o},{default:t(()=>[B]),_:1})]),_:1},8,["title"]),e(d,null,{default:t(()=>[e(u,null,{default:t(()=>[e(p,{md:24,lg:16},{default:t(()=>[e(y,{id:l.$route.params.id,ref:(b,g)=>{g.form=b}},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",onClick:i},{default:t(()=>[E]),_:1}),e(a,{onClick:c},{default:t(()=>[N]),_:1})]),_:1})])}}const G=Object.assign(T,{setup:F});var P=w(G,[["__scopeId","data-v-533f53c2"]]);export{P as default};
