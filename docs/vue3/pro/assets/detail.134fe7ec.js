
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as u}from"./index.7b29bb33.js";import{_ as d}from"./index.f14483a3.js";import{_ as f}from"./index.341e7229.js";import g from"./index.74620f66.js";import{_ as b,u as x}from"./index.6da96519.js";import{j as v,A as h,k as j,D as e,C as t,o as C,a0 as s,G as y}from"./vendor.ab59999c.js";import"./index.7f10f1d7.js";import"./index.87d3e11f.js";const k=s("\u8FD4 \u56DE"),D=s("\u63D0 \u4EA4"),S=s("\u53D6 \u6D88"),$=v({name:"PagesExampleDeliveryDetail"}),E=Object.assign($,{setup(B){const{proxy:o}=y(),i=x();function _(){o.$refs.form.submit(()=>{o.$eventBus.emit("get-data-list"),n()})}function l(){n()}function n(){i.enableTabbar&&!i.enableMergeTabbar?o.$tabbar.close({name:"pagesExampleShopDeliveryList"}):o.$router.push({name:"pagesExampleShopDeliveryList"})}return(r,z)=>{const a=h("el-button"),p=f,c=d,m=u;return C(),j("div",null,[e(p,{title:r.$route.name=="pagesExampleShopDeliveryCreate"?"\u65B0\u589E\u8FD0\u8D39\u6A21\u7248":"\u7F16\u8F91\u8FD0\u8D39\u6A21\u7248"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:n},{default:t(()=>[k]),_:1})]),_:1},8,["title"]),e(c,null,{default:t(()=>[e(g,{id:r.$route.params.id,ref:"form"},null,8,["id"])]),_:1}),e(m,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:_},{default:t(()=>[D]),_:1}),e(a,{size:"large",onClick:l},{default:t(()=>[S]),_:1})]),_:1})])}}});var G=b(E,[["__scopeId","data-v-72f6a91f"]]);export{G as default};
