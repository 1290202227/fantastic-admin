
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.b5dc30d5.js";import{_ as C}from"./index.ac124bbf.js";import{_ as v}from"./index.e7f84b3a.js";import{i as j,s as $,A as s,o as h,j as k,D as e,C as t,$ as _,F}from"./vendor.399b4c48.js";import y from"./index.f8e793c7.js";import{_ as E}from"./index.a6a9d62e.js";const M=_("\u8FD4 \u56DE"),w=_("\u63D0 \u4EA4"),B=_("\u53D6 \u6D88"),D=j({name:"PagesExampleFormModeDetail"});function G(I){const{proxy:o}=F(),r=$();function i(){o.$refs.form.submit(()=>{o.$eventBus.emit("get-data-list"),n()})}function c(){n()}function n(){r.state.settings.enableTabbar&&!r.state.settings.enableMergeTabbar?o.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):o.$router.push({name:"pagesExampleGeneralFormModeList"})}return(l,L)=>{const a=s("el-button"),m=v,d=s("el-col"),p=s("el-row"),u=C,f=x;return h(),k("div",null,[e(m,{title:l.$route.name=="pagesExampleGeneralFormModeCreate"?"\u65B0\u589E":"\u7F16\u8F91"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:n},{default:t(()=>[M]),_:1})]),_:1},8,["title"]),e(u,null,{default:t(()=>[e(p,null,{default:t(()=>[e(d,{md:24,lg:16},{default:t(()=>[e(y,{id:l.$route.params.id,ref:(b,g)=>{g.form=b}},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",onClick:i},{default:t(()=>[w]),_:1}),e(a,{onClick:c},{default:t(()=>[B]),_:1})]),_:1})])}}const T=Object.assign(D,{setup:G});var P=E(T,[["__scopeId","data-v-705e0c97"]]);export{P as default};
