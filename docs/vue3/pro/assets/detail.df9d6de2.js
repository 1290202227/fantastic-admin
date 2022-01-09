
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as m}from"./index.a6c6c034.js";import{_ as u}from"./index.96603fff.js";import{_ as f}from"./index.d1dc7e72.js";import g from"./index.c816f3e7.js";import{_ as b,u as x}from"./index.0f7a313d.js";import{j as v,B as h,l as j,F as e,D as t,o as y,$ as s,H as C}from"./vendor.b17bec21.js";import"./index.b4d27e90.js";import"./index.60625f2a.js";const $=s("\u8FD4 \u56DE"),D=s("\u63D0 \u4EA4"),S=s("\u53D6 \u6D88"),k=v({name:"PagesExampleDeliveryDetail"}),B=Object.assign(k,{setup(E){const{proxy:o}=C(),i=x();function _(){o.$refs.form.submit(()=>{o.$eventBus.emit("get-data-list"),n()})}function l(){n()}function n(){i.enableTabbar&&!i.enableMergeTabbar?o.$tabbar.close({name:"pagesExampleShopDeliveryList"}):o.$router.push({name:"pagesExampleShopDeliveryList"})}return(r,z)=>{const a=h("el-button"),c=f,p=u,d=m;return y(),j("div",null,[e(c,{title:r.$route.name=="pagesExampleShopDeliveryCreate"?"\u65B0\u589E\u8FD0\u8D39\u6A21\u7248":"\u7F16\u8F91\u8FD0\u8D39\u6A21\u7248"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:n},{default:t(()=>[$]),_:1})]),_:1},8,["title"]),e(p,null,{default:t(()=>[e(g,{id:r.$route.params.id,ref:"form"},null,8,["id"])]),_:1}),e(d,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:_},{default:t(()=>[D]),_:1}),e(a,{size:"large",onClick:l},{default:t(()=>[S]),_:1})]),_:1})])}}});var M=b(B,[["__scopeId","data-v-e1d8ff80"]]);export{M as default};
