
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.6f334b18.js";import{_ as v}from"./index.a48661b9.js";import{_ as h}from"./index.1f4f1a78.js";import{ai as C,u as j,r as s,l as $,H as k,s as e,n as t,S as _,h as y}from"./vendor.5a8f5a39.js";import D from"./index.8f337d05.js";import{_ as w}from"./plugin-vue_export-helper.5a098b48.js";const B=_("\u8FD4 \u56DE"),E=_("\u63D0 \u4EA4"),N=_("\u53D6 \u6D88"),S=C({name:"PagesExampleDepartmentDetail"});function T(I){const{proxy:n}=y(),r=j();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function c(){o()}function o(){r.state.settings.enableTabbar&&!r.state.settings.enableMergeTabbar?n.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):n.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(l,L)=>{const a=s("el-button"),m=x,p=s("el-col"),u=s("el-row"),d=v,f=h;return $(),k("div",null,[e(m,{title:l.$route.name=="routerName"?"\u65B0\u589E\u90E8\u95E8":"\u7F16\u8F91\u90E8\u95E8"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:o},{default:t(()=>[B]),_:1})]),_:1},8,["title"]),e(d,null,{default:t(()=>[e(u,null,{default:t(()=>[e(p,{md:24,lg:16},{default:t(()=>[e(D,{id:l.$route.params.id,ref:(g,b)=>{b.form=g}},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",onClick:i},{default:t(()=>[E]),_:1}),e(a,{onClick:c},{default:t(()=>[N]),_:1})]),_:1})])}}const G=Object.assign(S,{setup:T});var P=w(G,[["__scopeId","data-v-5a3e761f"]]);export{P as default};
