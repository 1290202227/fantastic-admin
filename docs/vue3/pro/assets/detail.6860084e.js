
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.b433d819.js";import{_ as v}from"./index.064dddb5.js";import{_ as h}from"./index.7b6e6fa3.js";import{i as j,s as C,A as s,o as y,j as $,D as e,C as t,$ as _,F as D}from"./vendor.399b4c48.js";import k from"./index.8a7402e6.js";import{_ as E}from"./index.87b6d29a.js";import"./index.6d41133a.js";import"./index.e8695672.js";const S=_("\u8FD4 \u56DE"),w=_("\u63D0 \u4EA4"),B=_("\u53D6 \u6D88"),T=j({name:"PagesExampleDeliveryDetail"});function F(L){const{proxy:o}=D(),i=C();function r(){o.$refs.form.submit(()=>{o.$eventBus.emit("get-data-list"),n()})}function c(){n()}function n(){i.state.settings.enableTabbar&&!i.state.settings.enableMergeTabbar?o.$tabbar.close({name:"pagesExampleShopDeliveryList"}):o.$router.push({name:"pagesExampleShopDeliveryList"})}return(l,N)=>{const a=s("el-button"),p=h,d=s("el-col"),m=s("el-row"),u=v,f=x;return y(),$("div",null,[e(p,{title:l.$route.name=="pagesExampleShopDeliveryCreate"?"\u65B0\u589E\u8FD0\u8D39\u6A21\u7248":"\u7F16\u8F91\u8FD0\u8D39\u6A21\u7248"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:n},{default:t(()=>[S]),_:1})]),_:1},8,["title"]),e(u,null,{default:t(()=>[e(m,null,{default:t(()=>[e(d,{md:24,lg:16},{default:t(()=>[e(k,{id:l.$route.params.id,ref:(b,g)=>{g.form=b}},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",onClick:r},{default:t(()=>[w]),_:1}),e(a,{onClick:c},{default:t(()=>[B]),_:1})]),_:1})])}}const I=Object.assign(T,{setup:F});var H=E(I,[["__scopeId","data-v-c5de91c6"]]);export{H as default};
