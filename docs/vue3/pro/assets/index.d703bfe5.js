
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";import{$ as o,o as t,aa as s,l as a,H as l,X as n,Y as c}from"./vendor.1e0be253.js";var d=e({setup(e){const d=o({isBottom:!0});function i(){var e=document.documentElement.scrollTop||document.body.scrollTop,o=document.documentElement.clientHeight||document.body.clientHeight,t=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(e+o)>=t?d.value.isBottom=!0:d.value.isBottom=!1}return t((()=>{i(),window.addEventListener("scroll",i)})),s((()=>{window.removeEventListener("scroll",i)})),(e,o)=>(a(),l("div",{class:c(["actionbar",{shadow:!d.value.isBottom}]),"data-fixed-calc-width":""},[n(e.$slots,"default",{},void 0,!0)],2))}},[["__scopeId","data-v-1c654bbf"]]);export{d as _};
