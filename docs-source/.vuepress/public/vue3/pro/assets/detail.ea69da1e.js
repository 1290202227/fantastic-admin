
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as b}from"./index.ebf37102.js";import{_ as v}from"./index.cc6d1ed1.js";import{_ as h}from"./index.a912659c.js";import{M as j,u as y,r as s,m as C,Q as $,t as e,q as t,Y as _,i as k}from"./vendor.4daee5e9.js";import D from"./index.e8cd3445.js";import{_ as E}from"./plugin-vue_export-helper.5a098b48.js";import"./index.8d47f8ef.js";import"./index.18f2a5fe.js";import"./index.27e8e05b.js";const S=_("\u8FD4 \u56DE"),w=_("\u63D0 \u4EA4"),B=_("\u53D6 \u6D88"),T=j({name:"PagesExampleDeliveryDetail"});function I(M){const{proxy:o}=k(),i=y();function l(){o.$refs.form.submit(()=>{o.$eventBus.emit("get-data-list"),n()})}function c(){n()}function n(){i.state.settings.enableTabbar&&!i.state.settings.enableMergeTabbar?o.$tabbar.close({name:"pagesExampleShopDeliveryList"}):o.$router.push({name:"pagesExampleShopDeliveryList"})}return(r,N)=>{const a=s("el-button"),p=h,m=s("el-col"),u=s("el-row"),d=v,f=b;return C(),$("div",null,[e(p,{title:r.$route.name=="pagesExampleShopDeliveryCreate"?"\u65B0\u589E\u8FD0\u8D39\u6A21\u7248":"\u7F16\u8F91\u8FD0\u8D39\u6A21\u7248"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:n},{default:t(()=>[S]),_:1})]),_:1},8,["title"]),e(d,null,{default:t(()=>[e(u,null,{default:t(()=>[e(m,{md:24,lg:16},{default:t(()=>[e(D,{id:r.$route.params.id,ref:(g,x)=>{x.form=g}},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",onClick:l},{default:t(()=>[w]),_:1}),e(a,{onClick:c},{default:t(()=>[B]),_:1})]),_:1})])}}const L=Object.assign(T,{setup:I});var G=E(L,[["__scopeId","data-v-c25327d0"]]);export{G as default};
