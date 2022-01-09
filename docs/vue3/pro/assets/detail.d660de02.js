
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./index.a6c6c034.js";import{_ as b}from"./index.96603fff.js";import{_ as x}from"./index.d1dc7e72.js";import v from"./index.d5305fd6.js";import{_ as j,u as C}from"./index.0f7a313d.js";import{j as $,B as s,l as h,F as e,D as t,o as k,$ as _,H as D}from"./vendor.b17bec21.js";const y=_("\u8FD4 \u56DE"),B=_("\u63D0 \u4EA4"),w=_("\u53D6 \u6D88"),E=$({name:"PagesExampleDepartmentDetail"}),S=Object.assign(E,{setup(z){const{proxy:n}=D(),l=C();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function c(){o()}function o(){l.enableTabbar&&!l.enableMergeTabbar?n.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):n.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(r,N)=>{const a=s("el-button"),m=x,u=s("el-col"),p=s("el-row"),d=b,f=g;return k(),h("div",null,[e(m,{title:r.$route.name=="routerName"?"\u65B0\u589E\u90E8\u95E8":"\u7F16\u8F91\u90E8\u95E8"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:o},{default:t(()=>[y]),_:1})]),_:1},8,["title"]),e(d,null,{default:t(()=>[e(p,null,{default:t(()=>[e(u,{md:24,lg:16},{default:t(()=>[e(v,{id:r.$route.params.id,ref:"form"},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:i},{default:t(()=>[B]),_:1}),e(a,{size:"large",onClick:c},{default:t(()=>[w]),_:1})]),_:1})])}}});var H=j(S,[["__scopeId","data-v-367cf19a"]]);export{H as default};
