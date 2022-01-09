
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as b}from"./index.a6c6c034.js";import{_ as g}from"./index.96603fff.js";import{_ as x}from"./index.d1dc7e72.js";import v from"./index.9159baf1.js";import{_ as $,u as j}from"./index.0f7a313d.js";import{j as C,B as _,l as h,F as e,D as t,o as k,$ as r,H as D}from"./vendor.b17bec21.js";const y=r("\u8FD4 \u56DE"),B=r("\u63D0 \u4EA4"),w=r("\u53D6 \u6D88"),E=C({name:"PagesExampleDepartmentJobDetail"}),S=Object.assign(E,{setup(z){const{proxy:n}=D(),l=j();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function c(){o()}function o(){l.enableTabbar&&!l.enableMergeTabbar?n.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):n.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,N)=>{const s=_("el-button"),m=x,p=_("el-col"),d=_("el-row"),u=g,f=b;return k(),h("div",null,[e(m,{title:a.$route.name=="routerName"?"\u65B0\u589E\u804C\u4F4D":"\u7F16\u8F91\u804C\u4F4D"},{default:t(()=>[e(s,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:o},{default:t(()=>[y]),_:1})]),_:1},8,["title"]),e(u,null,{default:t(()=>[e(d,null,{default:t(()=>[e(p,{md:24,lg:16},{default:t(()=>[e(v,{id:a.$route.params.id,ref:"form","department-id":a.$route.params.department_id},null,8,["id","department-id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(s,{type:"primary",size:"large",onClick:i},{default:t(()=>[B]),_:1}),e(s,{size:"large",onClick:c},{default:t(()=>[w]),_:1})]),_:1})])}}});var H=$(S,[["__scopeId","data-v-4424fbef"]]);export{H as default};
