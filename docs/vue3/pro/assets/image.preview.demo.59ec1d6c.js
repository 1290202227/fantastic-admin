
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as t}from"./index.9fbc5cc3.js";import{_ as e}from"./index.5a1a2157.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";import{k as r,r as s,l as a,m as o,n,I as d,s as c,Z as l,q as p,H as h}from"./vendor.e59ac5d6.js";import{_ as u}from"./index.c535d87f.js";const g={class:"image-slot"};var m=i({props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const i=t,h=r((()=>"string"==typeof i.width?i.width:`${i.width}px`)),u=r((()=>"string"==typeof i.height?i.height:`${i.height}px`));return(i,r)=>{const m=e,f=s("el-image");return a(),o(f,{src:t.src,fit:"cover",style:l(`width:${p(h)};height:${p(u)};`),"preview-src-list":[t.src]},{error:n((()=>[d("div",g,[c(m,{name:"image-load-fail"})])])),_:1},8,["src","style","preview-src-list"])}}},[["__scopeId","data-v-6ac2dcda"]]);var f=i({props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}},[["render",function(e,i,r,s,o,l){const p=t,g=m,f=u;return a(),h("div",null,[c(p,{title:"图片预览",content:"ImagePreview"}),c(f,null,{default:n((()=>[d("div",null,[c(g,{src:`https://hooray.${l.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])])),_:1}),c(f,{title:"图片加载失败时"},{default:n((()=>[d("div",null,[c(g,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}],["__scopeId","data-v-8976f8fc"]]);export{f as default};
