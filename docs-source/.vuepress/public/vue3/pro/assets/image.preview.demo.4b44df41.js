
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as h}from"./index.f14483a3.js";import{_ as f}from"./index.c17c74eb.js";import{_ as d}from"./index.6da96519.js";import{x as l,A as v,o as u,B as w,C as r,l as s,D as t,F as x,u as m,k as y}from"./vendor.ab59999c.js";import{_ as $}from"./index.341e7229.js";const b={class:"image-slot"},j={props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(n){const e=n,a=l(()=>typeof e.width=="string"?e.width:`${e.width}px`),_=l(()=>typeof e.height=="string"?e.height:`${e.height}px`);return(g,c)=>{const i=f,o=v("el-image");return u(),w(o,{src:n.src,fit:"cover",style:x(`width:${m(a)};height:${m(_)};`),"preview-src-list":[n.src]},{error:r(()=>[s("div",b,[t(i,{name:"image-load-fail"})])]),_:1},8,["src","style","preview-src-list"])}}};var B=d(j,[["__scopeId","data-v-318badd8"]]);const k={props:{},data(){return{}},computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};function N(n,e,a,_,g,c){const i=$,o=B,p=h;return u(),y("div",null,[t(i,{title:"\u56FE\u7247\u9884\u89C8",content:"ImagePreview"}),t(p,null,{default:r(()=>[s("div",null,[t(o,{src:`https://hooray.${c.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])]),_:1}),t(p,{title:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6"},{default:r(()=>[s("div",null,[t(o,{src:"http://www.baidu.com",width:"100px",height:"100px"})])]),_:1})])}var q=d(k,[["render",N],["__scopeId","data-v-8976f8fc"]]);export{q as default};
