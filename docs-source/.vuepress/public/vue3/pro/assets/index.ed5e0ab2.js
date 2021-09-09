
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{$ as o,o as t,aa as e,l as s,J as d,X as n,Y as a}from"./vendor.7707186e.js";const c={setup(c){const l=o({isBottom:!0});function i(){var o=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.clientHeight||document.body.clientHeight,e=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(o+t)>=e?l.value.isBottom=!0:l.value.isBottom=!1}return t((()=>{i(),window.addEventListener("scroll",i)})),e((()=>{window.removeEventListener("scroll",i)})),(o,t)=>(s(),d("div",{class:a(["actionbar",{shadow:!l.value.isBottom}]),"data-fixed-calc-width":""},[n(o.$slots,"default",{},void 0,!0)],2))},__scopeId:"data-v-bb598bd4"};export{c as _};
