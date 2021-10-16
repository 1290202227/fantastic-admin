
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.2f96f609.js";import{_ as v}from"./index.85eeb4f0.js";import{_ as h}from"./index.b9fde9b9.js";import{ak as j,u as y,r as s,l as C,J as k,s as e,n as t,U as _,h as $}from"./vendor.66600095.js";import D from"./index.03b62a04.js";import{_ as E}from"./plugin-vue_export-helper.5a098b48.js";import"./index.1b87561c.js";import"./index.70c27c36.js";import"./index.b9ce1d87.js";const S=_("\u8FD4 \u56DE"),w=_("\u63D0 \u4EA4"),B=_("\u53D6 \u6D88"),T=j({name:"PagesExampleDeliveryDetail"});function I(N){const{proxy:o}=$(),i=y();function r(){o.$refs.form.submit(()=>{o.$eventBus.emit("get-data-list"),n()})}function c(){n()}function n(){i.state.settings.enableTabbar&&!i.state.settings.enableMergeTabbar?o.$tabbar.close({name:"pagesExampleShopDeliveryList"}):o.$router.push({name:"pagesExampleShopDeliveryList"})}return(l,V)=>{const a=s("el-button"),p=x,m=s("el-col"),u=s("el-row"),d=v,f=h;return C(),k("div",null,[e(p,{title:l.$route.name=="pagesExampleShopDeliveryCreate"?"\u65B0\u589E\u8FD0\u8D39\u6A21\u7248":"\u7F16\u8F91\u8FD0\u8D39\u6A21\u7248"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:n},{default:t(()=>[S]),_:1})]),_:1},8,["title"]),e(d,null,{default:t(()=>[e(u,null,{default:t(()=>[e(m,{md:24,lg:16},{default:t(()=>[e(D,{id:l.$route.params.id,ref:(b,g)=>{g.form=b}},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",onClick:r},{default:t(()=>[w]),_:1}),e(a,{onClick:c},{default:t(()=>[B]),_:1})]),_:1})])}}const L=Object.assign(T,{setup:I});var G=E(L,[["__scopeId","data-v-c25327d0"]]);export{G as default};
