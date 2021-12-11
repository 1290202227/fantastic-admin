
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.7038a98f.js";import{_ as v}from"./index.5b1f41b8.js";import{_ as h}from"./index.3f87d51d.js";import{i as j,s as C,A as s,o as y,j as D,D as e,C as t,a0 as _,G as $}from"./vendor.0c4fd540.js";import k from"./index.735ed8c2.js";import{_ as E}from"./index.0d16c6a6.js";import"./index.0708eb88.js";import"./index.887be2c8.js";const S=_("\u8FD4 \u56DE"),w=_("\u63D0 \u4EA4"),B=_("\u53D6 \u6D88"),T=j({name:"PagesExampleDeliveryDetail"});function I(N){const{proxy:o}=$(),i=C();function r(){o.$refs.form.submit(()=>{o.$eventBus.emit("get-data-list"),n()})}function c(){n()}function n(){i.state.settings.enableTabbar&&!i.state.settings.enableMergeTabbar?o.$tabbar.close({name:"pagesExampleShopDeliveryList"}):o.$router.push({name:"pagesExampleShopDeliveryList"})}return(l,V)=>{const a=s("el-button"),p=h,m=s("el-col"),d=s("el-row"),u=v,f=x;return y(),D("div",null,[e(p,{title:l.$route.name=="pagesExampleShopDeliveryCreate"?"\u65B0\u589E\u8FD0\u8D39\u6A21\u7248":"\u7F16\u8F91\u8FD0\u8D39\u6A21\u7248"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:n},{default:t(()=>[S]),_:1})]),_:1},8,["title"]),e(u,null,{default:t(()=>[e(d,null,{default:t(()=>[e(m,{md:24,lg:16},{default:t(()=>[e(k,{id:l.$route.params.id,ref:(b,g)=>{g.form=b}},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",onClick:r},{default:t(()=>[w]),_:1}),e(a,{onClick:c},{default:t(()=>[B]),_:1})]),_:1})])}}const L=Object.assign(T,{setup:I});var H=E(L,[["__scopeId","data-v-c25327d0"]]);export{H as default};
