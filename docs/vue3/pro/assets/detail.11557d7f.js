
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.ba382bc1.js";import{_ as v}from"./index.8e3c05d1.js";import{_ as h}from"./index.19ab101a.js";import{aj as j,u as C,r as s,l as $,I as k,s as e,n as t,T as _,h as y}from"./vendor.1c754356.js";import D from"./index.f8624f89.js";import{_ as w}from"./plugin-vue_export-helper.5a098b48.js";const B=_("\u8FD4 \u56DE"),E=_("\u63D0 \u4EA4"),T=_("\u53D6 \u6D88"),I=j({name:"PagesExampleDepartmentDetail"});function N(L){const{proxy:n}=y(),r=C();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function c(){o()}function o(){r.state.settings.enableTabbar&&!r.state.settings.enableMergeTabbar?n.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):n.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(l,S)=>{const a=s("el-button"),m=x,p=s("el-col"),u=s("el-row"),d=v,f=h;return $(),k("div",null,[e(m,{title:l.$route.name=="routerName"?"\u65B0\u589E\u90E8\u95E8":"\u7F16\u8F91\u90E8\u95E8"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:o},{default:t(()=>[B]),_:1})]),_:1},8,["title"]),e(d,null,{default:t(()=>[e(u,null,{default:t(()=>[e(p,{md:24,lg:16},{default:t(()=>[e(D,{id:l.$route.params.id,ref:(b,g)=>{g.form=b}},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",onClick:i},{default:t(()=>[E]),_:1}),e(a,{onClick:c},{default:t(()=>[T]),_:1})]),_:1})])}}const G=Object.assign(I,{setup:N});var q=w(G,[["__scopeId","data-v-533f53c2"]]);export{q as default};
