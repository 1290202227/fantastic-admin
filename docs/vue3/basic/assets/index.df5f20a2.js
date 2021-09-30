
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as o}from"./plugin-vue_export-helper.5a098b48.js";import{L as e,o as t,V as s,a,n,a0 as c,I as l}from"./vendor.e08917c3.js";var d=o({setup(o){const d=e({isBottom:!0});function i(){var o=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight||document.body.clientHeight,t=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(o+e)>=t?d.value.isBottom=!0:d.value.isBottom=!1}return t((()=>{i(),window.addEventListener("scroll",i)})),s((()=>{window.removeEventListener("scroll",i)})),(o,e)=>(a(),n("div",{class:l(["actionbar",{shadow:!d.value.isBottom}]),"data-fixed-calc-width":""},[c(o.$slots,"default",{},void 0,!0)],2))}},[["__scopeId","data-v-1c654bbf"]]);export{d as _};
