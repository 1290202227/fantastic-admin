
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as h}from"./index.f4a9c460.js";import{_ as f}from"./index.92c1dc8e.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as l,r as v,a as u,c as w,D as r,y as a,C as t,S as x,G as m,x as y}from"./vendor.5c97c969.js";import{_ as $}from"./index.492fb6ab.js";const b={class:"image-slot"},j={props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(n){const e=n,c=l(()=>typeof e.width=="string"?e.width:`${e.width}px`),s=l(()=>typeof e.height=="string"?e.height:`${e.height}px`);return(g,_)=>{const i=f,o=v("el-image");return u(),w(o,{src:n.src,fit:"cover",style:x(`width:${m(c)};height:${m(s)};`),"preview-src-list":[n.src]},{error:r(()=>[a("div",b,[t(i,{name:"image-load-fail"})])]),_:1},8,["src","style","preview-src-list"])}}};var S=d(j,[["__scopeId","data-v-6ac2dcda"]]);const B={props:{},data(){return{}},computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};function N(n,e,c,s,g,_){const i=$,o=S,p=h;return u(),y("div",null,[t(i,{title:"\u56FE\u7247\u9884\u89C8",content:"ImagePreview"}),t(p,null,{default:r(()=>[a("div",null,[t(o,{src:`https://hooray.${_.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])]),_:1}),t(p,{title:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6"},{default:r(()=>[a("div",null,[t(o,{src:"http://www.baidu.com",width:"100px",height:"100px"})])]),_:1})])}var q=d(B,[["render",N],["__scopeId","data-v-8976f8fc"]]);export{q as default};
