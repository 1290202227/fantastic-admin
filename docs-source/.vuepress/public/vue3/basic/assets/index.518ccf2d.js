
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{K as o,o as t,U as e,a as s,s as d,$ as c,H as n}from"./vendor.ebf75cd4.js";const a={setup(a){const l=o({isBottom:!0});function i(){var o=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.clientHeight||document.body.clientHeight,e=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(o+t)>=e?l.value.isBottom=!0:l.value.isBottom=!1}return t((()=>{i(),window.addEventListener("scroll",i)})),e((()=>{window.removeEventListener("scroll",i)})),(o,t)=>(s(),d("div",{class:n(["actionbar",{shadow:!l.value.isBottom}]),"data-fixed-calc-width":""},[c(o.$slots,"default",{},void 0,!0)],2))},__scopeId:"data-v-bb598bd4"};export{a as _};
