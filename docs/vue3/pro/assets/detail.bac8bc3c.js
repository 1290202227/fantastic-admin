
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.d4f7f5cf.js";import{_ as v}from"./index.3be8bba6.js";import{_ as C}from"./index.dec9a165.js";import{i as j,s as h,A as s,o as $,j as k,D as e,C as t,a0 as _,G as D}from"./vendor.0c4fd540.js";import y from"./index.84254f12.js";import{_ as w}from"./index.fd3dd73e.js";const B=_("\u8FD4 \u56DE"),E=_("\u63D0 \u4EA4"),G=_("\u53D6 \u6D88"),N=j({name:"PagesExampleDepartmentDetail"});function T(L){const{proxy:n}=D(),r=h();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function c(){o()}function o(){r.state.settings.enableTabbar&&!r.state.settings.enableMergeTabbar?n.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):n.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(l,S)=>{const a=s("el-button"),m=C,p=s("el-col"),u=s("el-row"),d=v,f=x;return $(),k("div",null,[e(m,{title:l.$route.name=="routerName"?"\u65B0\u589E\u90E8\u95E8":"\u7F16\u8F91\u90E8\u95E8"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:o},{default:t(()=>[B]),_:1})]),_:1},8,["title"]),e(d,null,{default:t(()=>[e(u,null,{default:t(()=>[e(p,{md:24,lg:16},{default:t(()=>[e(y,{id:l.$route.params.id,ref:(b,g)=>{g.form=b}},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",onClick:i},{default:t(()=>[E]),_:1}),e(a,{onClick:c},{default:t(()=>[G]),_:1})]),_:1})])}}const I=Object.assign(N,{setup:T});var P=w(I,[["__scopeId","data-v-5a3e761f"]]);export{P as default};
