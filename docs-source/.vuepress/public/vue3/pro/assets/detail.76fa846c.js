
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.28bfda19.js";import{_ as v}from"./index.3e3f69e0.js";import{_ as C}from"./index.fce7b427.js";import{M as h,u as j,r as s,m as $,Q as k,t as e,q as t,Y as _,i as M}from"./vendor.3faf3917.js";import y from"./index.835da78a.js";import{_ as E}from"./plugin-vue_export-helper.5a098b48.js";const F=_("\u8FD4 \u56DE"),w=_("\u63D0 \u4EA4"),B=_("\u53D6 \u6D88"),G=h({name:"PagesExampleFormModeDetail"});function T(I){const{proxy:o}=M(),r=j();function i(){o.$refs.form.submit(()=>{o.$eventBus.emit("get-data-list"),n()})}function c(){n()}function n(){r.state.settings.enableTabbar&&!r.state.settings.enableMergeTabbar?o.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):o.$router.push({name:"pagesExampleGeneralFormModeList"})}return(l,L)=>{const a=s("el-button"),m=C,p=s("el-col"),u=s("el-row"),d=v,f=x;return $(),k("div",null,[e(m,{title:l.$route.name=="pagesExampleGeneralFormModeCreate"?"\u65B0\u589E":"\u7F16\u8F91"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:n},{default:t(()=>[F]),_:1})]),_:1},8,["title"]),e(d,null,{default:t(()=>[e(u,null,{default:t(()=>[e(p,{md:24,lg:16},{default:t(()=>[e(y,{id:l.$route.params.id,ref:(g,b)=>{b.form=g}},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",onClick:i},{default:t(()=>[w]),_:1}),e(a,{onClick:c},{default:t(()=>[B]),_:1})]),_:1})])}}const D=Object.assign(G,{setup:T});var P=E(D,[["__scopeId","data-v-705e0c97"]]);export{P as default};
