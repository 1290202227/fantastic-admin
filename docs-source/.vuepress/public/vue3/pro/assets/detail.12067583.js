
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./index.7b29bb33.js";import{_ as b}from"./index.f14483a3.js";import{_ as x}from"./index.341e7229.js";import v from"./index.9f6c709a.js";import{_ as C,u as j}from"./index.6da96519.js";import{j as h,A as s,k,D as e,C as t,o as $,a0 as _,G as y}from"./vendor.ab59999c.js";const w=_("\u8FD4 \u56DE"),B=_("\u63D0 \u4EA4"),E=_("\u53D6 \u6D88"),M=h({name:"PagesExampleManagerDetail"}),S=Object.assign(M,{setup(z){const{proxy:n}=y(),r=j();function i(){n.$refs.form.submit(()=>{n.$eventBus.emit("get-data-list"),o()})}function c(){o()}function o(){r.enableTabbar&&!r.enableMergeTabbar?n.$tabbar.close({name:"pagesExampleGeneralManagerList"}):n.$router.push({name:"pagesExampleGeneralManagerList"})}return(l,D)=>{const a=s("el-button"),u=x,m=s("el-col"),p=s("el-row"),d=b,f=g;return $(),k("div",null,[e(u,{title:l.$route.name=="routerName"?"\u65B0\u589E\u7BA1\u7406\u5458":"\u7F16\u8F91\u7BA1\u7406\u5458"},{default:t(()=>[e(a,{icon:"el-icon-arrow-left",size:"default",round:"",onClick:o},{default:t(()=>[w]),_:1})]),_:1},8,["title"]),e(d,null,{default:t(()=>[e(p,null,{default:t(()=>[e(m,{md:24,lg:16},{default:t(()=>[e(v,{id:l.$route.params.id,ref:"form"},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:i},{default:t(()=>[B]),_:1}),e(a,{size:"large",onClick:c},{default:t(()=>[E]),_:1})]),_:1})])}}});var A=C(S,[["__scopeId","data-v-2b69d561"]]);export{A as default};
