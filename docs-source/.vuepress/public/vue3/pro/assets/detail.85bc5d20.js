
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.7038a98f.js";import{_ as v}from"./index.5b1f41b8.js";import{_ as C}from"./index.3f87d51d.js";import{i as j,s as $,A as _,o as h,j as k,D as e,C as t,a0 as r,G as D}from"./vendor.0c4fd540.js";import y from"./index.03048780.js";import{_ as w}from"./index.0d16c6a6.js";const B=r("\u8FD4 \u56DE"),E=r("\u63D0 \u4EA4"),G=r("\u53D6 \u6D88"),N=j({name:"PagesExampleDepartmentJobDetail"});function T(L){const{proxy:n}=D(),i=$();function l(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function m(){o()}function o(){i.state.settings.enableTabbar&&!i.state.settings.enableMergeTabbar?n.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):n.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,S)=>{const s=_("el-button"),c=C,p=_("el-col"),d=_("el-row"),u=v,f=x;return h(),k("div",null,[e(c,{title:a.$route.name=="routerName"?"\u65B0\u589E\u804C\u4F4D":"\u7F16\u8F91\u804C\u4F4D"},{default:t(()=>[e(s,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:o},{default:t(()=>[B]),_:1})]),_:1},8,["title"]),e(u,null,{default:t(()=>[e(d,null,{default:t(()=>[e(p,{md:24,lg:16},{default:t(()=>[e(y,{id:a.$route.params.id,ref:(b,g)=>{g.form=b},"department-id":a.$route.params.department_id},null,8,["id","department-id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(s,{type:"primary",onClick:l},{default:t(()=>[E]),_:1}),e(s,{onClick:m},{default:t(()=>[G]),_:1})]),_:1})])}}const I=Object.assign(N,{setup:T});var O=w(I,[["__scopeId","data-v-6ae6f668"]]);export{O as default};
