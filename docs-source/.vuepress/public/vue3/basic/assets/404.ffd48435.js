
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as u}from"./index.14a5008b.js";import{D as d,F as l,a5 as p,o as i,r as v,b as f,G as m,g as a,H as t,f as h,L as b,M as x,Q as g,N as I}from"./vendor.0ce66e7d.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";const s=o=>(b("data-v-3bfb37ca"),o=o(),x(),o),y={class:"notfound"},B={class:"content"},k=s(()=>t("h1",null,"404",-1)),N=s(()=>t("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1)),S={setup(o){const c=d(),e=l({inter:null,countdown:5});p(()=>{clearInterval(e.value.inter)}),i(()=>{e.value.inter=setInterval(()=>{e.value.countdown--,e.value.countdown==0&&(clearInterval(e.value.inter),n())},1e3)});function n(){c.push("/")}return(j,C)=>{const _=u,r=v("el-button");return f(),m("div",y,[a(_,{name:"404"}),t("div",B,[k,N,a(r,{type:"primary",onClick:n},{default:h(()=>[g(I(e.value.countdown)+" \u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1})])])}}};var M=w(S,[["__scopeId","data-v-3bfb37ca"]]);export{M as default};
