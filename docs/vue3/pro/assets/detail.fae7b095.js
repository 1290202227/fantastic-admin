
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./index.a6c6c034.js";import{_ as b}from"./index.96603fff.js";import{_ as x}from"./index.d1dc7e72.js";import v from"./index.e6f7ad15.js";import{_ as C,u as j}from"./index.0f7a313d.js";import{j as $,B as s,l as h,F as e,D as o,o as k,$ as _,H as F}from"./vendor.b17bec21.js";const y=_("\u8FD4 \u56DE"),B=_("\u63D0 \u4EA4"),E=_("\u53D6 \u6D88"),M=$({name:"PagesExampleFormModeDetail"}),w=Object.assign(M,{setup(S){const{proxy:t}=F(),l=j();function i(){t.$refs.form.submit(()=>{t.$eventBus.emit("get-data-list"),n()})}function c(){n()}function n(){l.enableTabbar&&!l.enableMergeTabbar?t.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):t.$router.push({name:"pagesExampleGeneralFormModeList"})}return(r,z)=>{const a=s("el-button"),m=x,d=s("el-col"),u=s("el-row"),p=b,f=g;return k(),h("div",null,[e(m,{title:r.$route.name=="pagesExampleGeneralFormModeCreate"?"\u65B0\u589E":"\u7F16\u8F91"},{default:o(()=>[e(a,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:n},{default:o(()=>[y]),_:1})]),_:1},8,["title"]),e(p,null,{default:o(()=>[e(u,null,{default:o(()=>[e(d,{md:24,lg:16},{default:o(()=>[e(v,{id:r.$route.params.id,ref:"form"},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:o(()=>[e(a,{type:"primary",size:"large",onClick:i},{default:o(()=>[B]),_:1}),e(a,{size:"large",onClick:c},{default:o(()=>[E]),_:1})]),_:1})])}}});var V=C(w,[["__scopeId","data-v-93b87e7c"]]);export{V as default};
