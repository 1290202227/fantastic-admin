
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.04ed891a.js";import{_ as v}from"./index.cdfcc854.js";import{_ as h}from"./index.f8704b32.js";import{am as j,u as y,r as s,l as C,L as $,s as e,n as t,X as _,h as k}from"./vendor.cb7139c2.js";import D from"./index.4e53976c.js";import{_ as E}from"./plugin-vue_export-helper.5a098b48.js";import"./index.4c64f514.js";import"./index.0d70e74b.js";import"./index.d49f5bc3.js";const S=_("\u8FD4 \u56DE"),w=_("\u63D0 \u4EA4"),B=_("\u53D6 \u6D88"),L=j({name:"PagesExampleDeliveryDetail"});function T(N){const{proxy:o}=k(),i=y();function r(){o.$refs.form.submit(()=>{o.$eventBus.emit("get-data-list"),n()})}function c(){n()}function n(){i.state.settings.enableTabbar&&!i.state.settings.enableMergeTabbar?o.$tabbar.close({name:"pagesExampleShopDeliveryList"}):o.$router.push({name:"pagesExampleShopDeliveryList"})}return(l,V)=>{const a=s("el-button"),p=h,m=s("el-col"),u=s("el-row"),d=v,f=x;return C(),$("div",null,[e(p,{title:l.$route.name=="pagesExampleShopDeliveryCreate"?"\u65B0\u589E\u8FD0\u8D39\u6A21\u7248":"\u7F16\u8F91\u8FD0\u8D39\u6A21\u7248"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:n},{default:t(()=>[S]),_:1})]),_:1},8,["title"]),e(d,null,{default:t(()=>[e(u,null,{default:t(()=>[e(m,{md:24,lg:16},{default:t(()=>[e(D,{id:l.$route.params.id,ref:(b,g)=>{g.form=b}},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",onClick:r},{default:t(()=>[w]),_:1}),e(a,{onClick:c},{default:t(()=>[B]),_:1})]),_:1})])}}const I=Object.assign(L,{setup:T});var H=E(I,[["__scopeId","data-v-c25327d0"]]);export{H as default};
