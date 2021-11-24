
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.b5dc30d5.js";import{_ as v}from"./index.ac124bbf.js";import{_ as C}from"./index.e7f84b3a.js";import{i as j,s as $,A as s,o as h,j as k,D as e,C as t,$ as _,F as y}from"./vendor.399b4c48.js";import w from"./index.e5a03cc2.js";import{_ as B}from"./index.a6a9d62e.js";const E=_("\u8FD4 \u56DE"),M=_("\u63D0 \u4EA4"),D=_("\u53D6 \u6D88"),N=j({name:"PagesExampleManagerDetail"});function T(G){const{proxy:n}=y(),r=$();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function c(){o()}function o(){r.state.settings.enableTabbar&&!r.state.settings.enableMergeTabbar?n.$tabbar.close({name:"pagesExampleGeneralManagerList"}):n.$router.push({name:"pagesExampleGeneralManagerList"})}return(l,I)=>{const a=s("el-button"),m=C,u=s("el-col"),p=s("el-row"),d=v,f=x;return h(),k("div",null,[e(m,{title:l.$route.name=="routerName"?"\u65B0\u589E\u7BA1\u7406\u5458":"\u7F16\u8F91\u7BA1\u7406\u5458"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:o},{default:t(()=>[E]),_:1})]),_:1},8,["title"]),e(d,null,{default:t(()=>[e(p,null,{default:t(()=>[e(u,{md:24,lg:16},{default:t(()=>[e(w,{id:l.$route.params.id,ref:(g,b)=>{b.form=g}},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",onClick:i},{default:t(()=>[M]),_:1}),e(a,{onClick:c},{default:t(()=>[D]),_:1})]),_:1})])}}const F=Object.assign(N,{setup:T});var P=B(F,[["__scopeId","data-v-08f049ef"]]);export{P as default};
