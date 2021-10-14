
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";import{a0 as a,o as r,ab as c,l as d,I as i,Y as u,Z as m}from"./vendor.626824a3.js";const _={setup(p){const e=a({isBottom:!0});r(()=>{o(),window.addEventListener("scroll",o)}),c(()=>{window.removeEventListener("scroll",o)});function o(){var t=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight||document.body.clientHeight,l=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(t+n)>=l?e.value.isBottom=!0:e.value.isBottom=!1}return(t,n)=>(d(),i("div",{class:m(["actionbar",{shadow:!e.value.isBottom}]),"data-fixed-calc-width":""},[u(t.$slots,"default",{},void 0,!0)],2))}};var h=s(_,[["__scopeId","data-v-1c654bbf"]]);export{h as _};
