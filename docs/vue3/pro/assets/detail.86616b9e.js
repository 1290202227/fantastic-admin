
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.7038a98f.js";import{_ as C}from"./index.5b1f41b8.js";import{_ as v}from"./index.3f87d51d.js";import{i as j,s as h,A as s,o as $,j as k,D as e,C as t,a0 as _,G as y}from"./vendor.0c4fd540.js";import E from"./index.332e15ba.js";import{_ as F}from"./index.0d16c6a6.js";const M=_("\u8FD4 \u56DE"),w=_("\u63D0 \u4EA4"),B=_("\u53D6 \u6D88"),G=j({name:"PagesExampleFormModeDetail"});function D(I){const{proxy:o}=y(),r=h();function i(){o.$refs.form.submit(()=>{o.$eventBus.emit("get-data-list"),n()})}function c(){n()}function n(){r.state.settings.enableTabbar&&!r.state.settings.enableMergeTabbar?o.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):o.$router.push({name:"pagesExampleGeneralFormModeList"})}return(l,L)=>{const a=s("el-button"),m=v,d=s("el-col"),p=s("el-row"),u=C,f=x;return $(),k("div",null,[e(m,{title:l.$route.name=="pagesExampleGeneralFormModeCreate"?"\u65B0\u589E":"\u7F16\u8F91"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:n},{default:t(()=>[M]),_:1})]),_:1},8,["title"]),e(u,null,{default:t(()=>[e(p,null,{default:t(()=>[e(d,{md:24,lg:16},{default:t(()=>[e(E,{id:l.$route.params.id,ref:(g,b)=>{b.form=g}},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",onClick:i},{default:t(()=>[w]),_:1}),e(a,{onClick:c},{default:t(()=>[B]),_:1})]),_:1})])}}const T=Object.assign(G,{setup:D});var P=F(T,[["__scopeId","data-v-705e0c97"]]);export{P as default};
