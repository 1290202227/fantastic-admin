
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as l}from"./index.0f7a313d.js";import{r as a,A as c,ai as r,o as d,l as i,a4 as u,a6 as m}from"./vendor.b17bec21.js";const _={setup(p){const e=a({isBottom:!0});c(()=>{o(),window.addEventListener("scroll",o)}),r(()=>{window.removeEventListener("scroll",o)});function o(){var t=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight||document.body.clientHeight,s=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(t+n)>=s?e.value.isBottom=!0:e.value.isBottom=!1}return(t,n)=>(d(),i("div",{class:m(["actionbar",{shadow:!e.value.isBottom}]),"data-fixed-calc-width":""},[u(t.$slots,"default",{},void 0,!0)],2))}};var h=l(_,[["__scopeId","data-v-1c654bbf"]]);export{h as _};