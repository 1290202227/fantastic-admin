
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{$ as o,o as t,aa as e,n as s,J as c,X as d,Y as n}from"./vendor.3dac1dfd.js";const a={setup(a){const l=o({isBottom:!0});function i(){var o=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.clientHeight||document.body.clientHeight,e=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(o+t)>=e?l.value.isBottom=!0:l.value.isBottom=!1}return t((()=>{i(),window.addEventListener("scroll",i)})),e((()=>{window.removeEventListener("scroll",i)})),(o,t)=>(s(),c("div",{class:n(["actionbar",{shadow:!l.value.isBottom}]),"data-fixed-calc-width":""},[d(o.$slots,"default",{},void 0,!0)],2))},__scopeId:"data-v-9169fcc2"};export{a as _};
