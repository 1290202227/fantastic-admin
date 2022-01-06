
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as a}from"./index.6da96519.js";import{r as l,z as r,ah as c,o as d,k as i,a5 as u,a7 as m}from"./vendor.ab59999c.js";const _={setup(p){const e=l({isBottom:!0});r(()=>{o(),window.addEventListener("scroll",o)}),c(()=>{window.removeEventListener("scroll",o)});function o(){var t=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight||document.body.clientHeight,s=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(t+n)>=s?e.value.isBottom=!0:e.value.isBottom=!1}return(t,n)=>(d(),i("div",{class:m(["actionbar",{shadow:!e.value.isBottom}]),"data-fixed-calc-width":""},[u(t.$slots,"default",{},void 0,!0)],2))}};var h=a(_,[["__scopeId","data-v-bb598bd4"]]);export{h as _};
