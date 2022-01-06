
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as b}from"./index.7b29bb33.js";import{_ as g}from"./index.f14483a3.js";import{_ as x}from"./index.341e7229.js";import v from"./index.6980987c.js";import{_ as C,u as j}from"./index.6da96519.js";import{j as h,A as s,k,D as e,C as t,o as $,a0 as _,G as D}from"./vendor.ab59999c.js";const y=_("\u8FD4 \u56DE"),w=_("\u63D0 \u4EA4"),B=_("\u53D6 \u6D88"),E=h({name:"PagesExampleDepartmentDetail"}),S=Object.assign(E,{setup(z){const{proxy:n}=D(),r=j();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function c(){o()}function o(){r.enableTabbar&&!r.enableMergeTabbar?n.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):n.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(l,G)=>{const a=s("el-button"),m=x,u=s("el-col"),p=s("el-row"),d=g,f=b;return $(),k("div",null,[e(m,{title:l.$route.name=="routerName"?"\u65B0\u589E\u90E8\u95E8":"\u7F16\u8F91\u90E8\u95E8"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:o},{default:t(()=>[y]),_:1})]),_:1},8,["title"]),e(d,null,{default:t(()=>[e(p,null,{default:t(()=>[e(u,{md:24,lg:16},{default:t(()=>[e(v,{id:l.$route.params.id,ref:"form"},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:i},{default:t(()=>[w]),_:1}),e(a,{size:"large",onClick:c},{default:t(()=>[B]),_:1})]),_:1})])}}});var F=C(S,[["__scopeId","data-v-638ffb2a"]]);export{F as default};
