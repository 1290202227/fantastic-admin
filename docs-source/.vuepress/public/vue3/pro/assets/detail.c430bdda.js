
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as b}from"./index.7b29bb33.js";import{_ as g}from"./index.f14483a3.js";import{_ as x}from"./index.341e7229.js";import v from"./index.f7460f8a.js";import{_ as C,u as j}from"./index.6da96519.js";import{j as $,A as _,k as h,D as e,C as t,o as k,a0 as r,G as D}from"./vendor.ab59999c.js";const y=r("\u8FD4 \u56DE"),w=r("\u63D0 \u4EA4"),B=r("\u53D6 \u6D88"),E=$({name:"PagesExampleDepartmentJobDetail"}),S=Object.assign(E,{setup(z){const{proxy:n}=D(),l=j();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function m(){o()}function o(){l.enableTabbar&&!l.enableMergeTabbar?n.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):n.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(a,G)=>{const s=_("el-button"),c=x,p=_("el-col"),u=_("el-row"),d=g,f=b;return k(),h("div",null,[e(c,{title:a.$route.name=="routerName"?"\u65B0\u589E\u804C\u4F4D":"\u7F16\u8F91\u804C\u4F4D"},{default:t(()=>[e(s,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:o},{default:t(()=>[y]),_:1})]),_:1},8,["title"]),e(d,null,{default:t(()=>[e(u,null,{default:t(()=>[e(p,{md:24,lg:16},{default:t(()=>[e(v,{id:a.$route.params.id,ref:"form","department-id":a.$route.params.department_id},null,8,["id","department-id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(s,{type:"primary",size:"large",onClick:i},{default:t(()=>[w]),_:1}),e(s,{size:"large",onClick:m},{default:t(()=>[B]),_:1})]),_:1})])}}});var F=C(S,[["__scopeId","data-v-419aaeee"]]);export{F as default};
