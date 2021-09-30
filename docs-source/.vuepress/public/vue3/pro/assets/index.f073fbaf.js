
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as o}from"./plugin-vue_export-helper.5a098b48.js";import{$ as e,o as t,aa as s,l as a,H as l,X as c,Y as d}from"./vendor.e59ac5d6.js";var n=o({setup(o){const n=e({isBottom:!0});function i(){var o=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight||document.body.clientHeight,t=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(o+e)>=t?n.value.isBottom=!0:n.value.isBottom=!1}return t((()=>{i(),window.addEventListener("scroll",i)})),s((()=>{window.removeEventListener("scroll",i)})),(o,e)=>(a(),l("div",{class:d(["actionbar",{shadow:!n.value.isBottom}]),"data-fixed-calc-width":""},[c(o.$slots,"default",{},void 0,!0)],2))}},[["__scopeId","data-v-1c654bbf"]]);export{n as _};
