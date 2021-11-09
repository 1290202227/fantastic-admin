
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.c7126dcb.js";import{_ as v}from"./index.761e72da.js";import{_ as h}from"./index.d075170b.js";import{K as C,u as j,r as s,m as $,O as k,t as e,q as t,V as _,i as y}from"./vendor.22bd9123.js";import w from"./index.ae8b2f48.js";import{_ as B}from"./plugin-vue_export-helper.5a098b48.js";const E=_("\u8FD4 \u56DE"),M=_("\u63D0 \u4EA4"),N=_("\u53D6 \u6D88"),T=C({name:"PagesExampleManagerDetail"});function V(G){const{proxy:n}=y(),r=j();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function c(){o()}function o(){r.state.settings.enableTabbar&&!r.state.settings.enableMergeTabbar?n.$tabbar.close({name:"pagesExampleGeneralManagerList"}):n.$router.push({name:"pagesExampleGeneralManagerList"})}return(l,I)=>{const a=s("el-button"),u=h,m=s("el-col"),p=s("el-row"),d=v,f=x;return $(),k("div",null,[e(u,{title:l.$route.name=="routerName"?"\u65B0\u589E\u7BA1\u7406\u5458":"\u7F16\u8F91\u7BA1\u7406\u5458"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:o},{default:t(()=>[E]),_:1})]),_:1},8,["title"]),e(d,null,{default:t(()=>[e(p,null,{default:t(()=>[e(m,{md:24,lg:16},{default:t(()=>[e(w,{id:l.$route.params.id,ref:(g,b)=>{b.form=g}},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",onClick:i},{default:t(()=>[M]),_:1}),e(a,{onClick:c},{default:t(()=>[N]),_:1})]),_:1})])}}const D=Object.assign(T,{setup:V});var K=B(D,[["__scopeId","data-v-08f049ef"]]);export{K as default};
