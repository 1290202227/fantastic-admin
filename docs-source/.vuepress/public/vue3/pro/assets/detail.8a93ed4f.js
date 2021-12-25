
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.d4f7f5cf.js";import{_ as v}from"./index.3be8bba6.js";import{_ as C}from"./index.dec9a165.js";import{i as j,s as $,A as _,o as h,j as k,D as e,C as t,a0 as r,G as D}from"./vendor.0c4fd540.js";import y from"./index.b12e5763.js";import{_ as w}from"./index.fd3dd73e.js";const B=r("\u8FD4 \u56DE"),E=r("\u63D0 \u4EA4"),G=r("\u53D6 \u6D88"),N=j({name:"PagesExampleDepartmentJobDetail"});function T(L){const{proxy:n}=D(),i=$();function l(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function c(){o()}function o(){i.state.settings.enableTabbar&&!i.state.settings.enableMergeTabbar?n.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):n.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,S)=>{const s=_("el-button"),m=C,d=_("el-col"),p=_("el-row"),u=v,f=x;return h(),k("div",null,[e(m,{title:a.$route.name=="routerName"?"\u65B0\u589E\u804C\u4F4D":"\u7F16\u8F91\u804C\u4F4D"},{default:t(()=>[e(s,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:o},{default:t(()=>[B]),_:1})]),_:1},8,["title"]),e(u,null,{default:t(()=>[e(p,null,{default:t(()=>[e(d,{md:24,lg:16},{default:t(()=>[e(y,{id:a.$route.params.id,ref:(b,g)=>{g.form=b},"department-id":a.$route.params.department_id},null,8,["id","department-id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(s,{type:"primary",onClick:l},{default:t(()=>[E]),_:1}),e(s,{onClick:c},{default:t(()=>[G]),_:1})]),_:1})])}}const I=Object.assign(N,{setup:T});var O=w(I,[["__scopeId","data-v-1c493d51"]]);export{O as default};
