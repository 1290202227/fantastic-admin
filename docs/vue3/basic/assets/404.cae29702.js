
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as u}from"./index.f59efe4d.js";import{C as d,D as l,a4 as p,o as i,r as v,b as f,F as m,g as s,G as t,f as h,K as x,L as g,Q as I,M as w}from"./vendor.2f16a3e8.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const a=o=>(x("data-v-1c7bf000"),o=o(),g(),o),y={class:"notfound"},B={class:"content"},k=a(()=>t("h1",null,"404",-1)),C=a(()=>t("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1)),S={setup(o){const c=d(),e=l({inter:null,countdown:5});p(()=>{clearInterval(e.value.inter)}),i(()=>{e.value.inter=setInterval(()=>{e.value.countdown--,e.value.countdown==0&&(clearInterval(e.value.inter),n())},1e3)});function n(){c.push("/")}return(j,N)=>{const _=u,r=v("el-button");return f(),m("div",y,[s(_,{name:"404"}),t("div",B,[k,C,s(r,{type:"primary",onClick:n},{default:h(()=>[I(w(e.value.countdown)+" \u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1})])])}}};var M=b(S,[["__scopeId","data-v-1c7bf000"]]);export{M as default};
