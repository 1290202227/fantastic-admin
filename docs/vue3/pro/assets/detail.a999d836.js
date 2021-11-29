
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.2f083736.js";import{_ as v}from"./index.19b0f213.js";import{_ as C}from"./index.d01cde30.js";import{i as $,s as j,A as _,o as h,j as k,D as e,C as t,$ as r,F as D}from"./vendor.9a04353b.js";import y from"./index.af048626.js";import{_ as w}from"./index.7ec46dd3.js";const B=r("\u8FD4 \u56DE"),E=r("\u63D0 \u4EA4"),N=r("\u53D6 \u6D88"),T=$({name:"PagesExampleDepartmentJobDetail"});function F(I){const{proxy:n}=D(),i=j();function l(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function c(){o()}function o(){i.state.settings.enableTabbar&&!i.state.settings.enableMergeTabbar?n.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):n.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,L)=>{const s=_("el-button"),m=C,d=_("el-col"),p=_("el-row"),u=v,f=x;return h(),k("div",null,[e(m,{title:a.$route.name=="routerName"?"\u65B0\u589E\u804C\u4F4D":"\u7F16\u8F91\u804C\u4F4D"},{default:t(()=>[e(s,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:o},{default:t(()=>[B]),_:1})]),_:1},8,["title"]),e(u,null,{default:t(()=>[e(p,null,{default:t(()=>[e(d,{md:24,lg:16},{default:t(()=>[e(y,{id:a.$route.params.id,ref:(b,g)=>{g.form=b},"department-id":a.$route.params.department_id},null,8,["id","department-id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(s,{type:"primary",onClick:l},{default:t(()=>[E]),_:1}),e(s,{onClick:c},{default:t(()=>[N]),_:1})]),_:1})])}}const G=Object.assign(T,{setup:F});var O=w(G,[["__scopeId","data-v-1c493d51"]]);export{O as default};
