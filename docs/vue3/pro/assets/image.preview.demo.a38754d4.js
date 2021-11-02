
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as h}from"./index.cdfcc854.js";import{_ as f}from"./index.0f29c4cc.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";import{k as l,r as v,l as u,m as w,n as r,M as s,s as t,a2 as x,q as m,L as y}from"./vendor.cb7139c2.js";import{_ as $}from"./index.f8704b32.js";const b={class:"image-slot"},j={props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(n){const e=n,_=l(()=>typeof e.width=="string"?e.width:`${e.width}px`),a=l(()=>typeof e.height=="string"?e.height:`${e.height}px`);return(g,c)=>{const i=f,o=v("el-image");return u(),w(o,{src:n.src,fit:"cover",style:x(`width:${m(_)};height:${m(a)};`),"preview-src-list":[n.src]},{error:r(()=>[s("div",b,[t(i,{name:"image-load-fail"})])]),_:1},8,["src","style","preview-src-list"])}}};var k=d(j,[["__scopeId","data-v-318badd8"]]);const B={props:{},data(){return{}},computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};function N(n,e,_,a,g,c){const i=$,o=k,p=h;return u(),y("div",null,[t(i,{title:"\u56FE\u7247\u9884\u89C8",content:"ImagePreview"}),t(p,null,{default:r(()=>[s("div",null,[t(o,{src:`https://hooray.${c.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])]),_:1}),t(p,{title:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6"},{default:r(()=>[s("div",null,[t(o,{src:"http://www.baidu.com",width:"100px",height:"100px"})])]),_:1})])}var V=d(B,[["render",N],["__scopeId","data-v-8976f8fc"]]);export{V as default};
