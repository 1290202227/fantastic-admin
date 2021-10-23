
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.773bce2c.js";import{_ as v}from"./index.b2fe0119.js";import{_ as h}from"./index.4fbd32c6.js";import{ak as C,u as j,r as s,l as k,J as $,s as e,n as t,U as _,h as y}from"./vendor.9f126d3c.js";import E from"./index.a1f4aeba.js";import{_ as F}from"./plugin-vue_export-helper.5a098b48.js";const M=_("\u8FD4 \u56DE"),w=_("\u63D0 \u4EA4"),B=_("\u53D6 \u6D88"),G=C({name:"PagesExampleFormModeDetail"});function T(I){const{proxy:o}=y(),r=j();function i(){o.$refs.form.submit(()=>{o.$eventBus.emit("get-data-list"),n()})}function c(){n()}function n(){r.state.settings.enableTabbar&&!r.state.settings.enableMergeTabbar?o.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):o.$router.push({name:"pagesExampleGeneralFormModeList"})}return(l,L)=>{const a=s("el-button"),m=h,p=s("el-col"),u=s("el-row"),d=v,f=x;return k(),$("div",null,[e(m,{title:l.$route.name=="pagesExampleGeneralFormModeCreate"?"\u65B0\u589E":"\u7F16\u8F91"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:n},{default:t(()=>[M]),_:1})]),_:1},8,["title"]),e(d,null,{default:t(()=>[e(u,null,{default:t(()=>[e(p,{md:24,lg:16},{default:t(()=>[e(E,{id:l.$route.params.id,ref:(b,g)=>{g.form=b}},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",onClick:i},{default:t(()=>[w]),_:1}),e(a,{onClick:c},{default:t(()=>[B]),_:1})]),_:1})])}}const D=Object.assign(G,{setup:T});var P=F(D,[["__scopeId","data-v-1597d4b8"]]);export{P as default};
