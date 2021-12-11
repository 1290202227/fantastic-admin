
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.7038a98f.js";import{_ as v}from"./index.5b1f41b8.js";import{_ as C}from"./index.3f87d51d.js";import{i as j,s as h,A as s,o as $,j as k,D as e,C as t,a0 as _,G as y}from"./vendor.0c4fd540.js";import w from"./index.b536a135.js";import{_ as B}from"./index.0d16c6a6.js";const E=_("\u8FD4 \u56DE"),M=_("\u63D0 \u4EA4"),D=_("\u53D6 \u6D88"),G=j({name:"PagesExampleManagerDetail"});function N(I){const{proxy:n}=y(),r=h();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function c(){o()}function o(){r.state.settings.enableTabbar&&!r.state.settings.enableMergeTabbar?n.$tabbar.close({name:"pagesExampleGeneralManagerList"}):n.$router.push({name:"pagesExampleGeneralManagerList"})}return(l,L)=>{const a=s("el-button"),m=C,u=s("el-col"),d=s("el-row"),p=v,f=x;return $(),k("div",null,[e(m,{title:l.$route.name=="routerName"?"\u65B0\u589E\u7BA1\u7406\u5458":"\u7F16\u8F91\u7BA1\u7406\u5458"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:o},{default:t(()=>[E]),_:1})]),_:1},8,["title"]),e(p,null,{default:t(()=>[e(d,null,{default:t(()=>[e(u,{md:24,lg:16},{default:t(()=>[e(w,{id:l.$route.params.id,ref:(g,b)=>{b.form=g}},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",onClick:i},{default:t(()=>[M]),_:1}),e(a,{onClick:c},{default:t(()=>[D]),_:1})]),_:1})])}}const T=Object.assign(G,{setup:N});var P=B(T,[["__scopeId","data-v-08f049ef"]]);export{P as default};
