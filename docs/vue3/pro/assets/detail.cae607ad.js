
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.722b29b6.js";import{_ as v}from"./index.afb4da48.js";import{_ as h}from"./index.4b1af9fd.js";import{M as C,u as $,r as _,m as j,Q as k,t as e,q as t,Y as r,i as y}from"./vendor.2da94371.js";import D from"./index.1d9d6638.js";import{_ as w}from"./plugin-vue_export-helper.5a098b48.js";const B=r("\u8FD4 \u56DE"),E=r("\u63D0 \u4EA4"),N=r("\u53D6 \u6D88"),T=C({name:"PagesExampleDepartmentJobDetail"});function G(L){const{proxy:n}=y(),l=$();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function m(){o()}function o(){l.state.settings.enableTabbar&&!l.state.settings.enableMergeTabbar?n.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):n.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,M)=>{const s=_("el-button"),p=h,c=_("el-col"),u=_("el-row"),d=v,f=x;return j(),k("div",null,[e(p,{title:a.$route.name=="routerName"?"\u65B0\u589E\u804C\u4F4D":"\u7F16\u8F91\u804C\u4F4D"},{default:t(()=>[e(s,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:o},{default:t(()=>[B]),_:1})]),_:1},8,["title"]),e(d,null,{default:t(()=>[e(u,null,{default:t(()=>[e(c,{md:24,lg:16},{default:t(()=>[e(D,{id:a.$route.params.id,ref:(b,g)=>{g.form=b},"department-id":a.$route.params.department_id},null,8,["id","department-id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(s,{type:"primary",onClick:i},{default:t(()=>[E]),_:1}),e(s,{onClick:m},{default:t(()=>[N]),_:1})]),_:1})])}}const I=Object.assign(T,{setup:G});var O=w(I,[["__scopeId","data-v-6ae6f668"]]);export{O as default};
