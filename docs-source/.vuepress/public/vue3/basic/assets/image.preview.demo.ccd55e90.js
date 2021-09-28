
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as t}from"./index.afd122f8.js";import{_ as e}from"./index.461fabd7.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";import{G as r,r as a,a as s,c as o,x as d,q as n,t as c,I as l,J as p,n as h}from"./vendor.8d92a282.js";import{_ as u}from"./index.2f66b5c7.js";const g={class:"image-slot"};var f=i({props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const i=t,h=r((()=>"string"==typeof i.width?i.width:`${i.width}px`)),u=r((()=>"string"==typeof i.height?i.height:`${i.height}px`));return(i,r)=>{const f=e,m=a("el-image");return s(),o(m,{src:t.src,fit:"cover",style:l(`width:${p(h)};height:${p(u)};`),"preview-src-list":[t.src]},{error:d((()=>[n("div",g,[c(f,{name:"image-load-fail"})])])),_:1},8,["src","style","preview-src-list"])}}},[["__scopeId","data-v-6ac2dcda"]]);var m=i({props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}},[["render",function(e,i,r,a,o,l){const p=t,g=f,m=u;return s(),h("div",null,[c(p,{title:"图片预览",content:"ImagePreview"}),c(m,null,{default:d((()=>[n("div",null,[c(g,{src:`https://hooray.${l.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])])),_:1}),c(m,{title:"图片加载失败时"},{default:d((()=>[n("div",null,[c(g,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}],["__scopeId","data-v-8976f8fc"]]);export{m as default};
