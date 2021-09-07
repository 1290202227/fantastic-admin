
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{K as o,o as t,U as e,a as s,s as c,_ as n,H as a}from"./vendor.505a4e11.js";const d={setup(d){const l=o({isBottom:!0});function i(){var o=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.clientHeight||document.body.clientHeight,e=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(o+t)>=e?l.value.isBottom=!0:l.value.isBottom=!1}return t((()=>{i(),window.addEventListener("scroll",i)})),e((()=>{window.removeEventListener("scroll",i)})),(o,t)=>(s(),c("div",{class:a(["actionbar",{shadow:!l.value.isBottom}]),"data-fixed-calc-width":""},[n(o.$slots,"default",{},void 0,!0)],2))},__scopeId:"data-v-9169fcc2"};export{d as _};
