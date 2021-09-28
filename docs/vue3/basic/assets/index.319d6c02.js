
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as o}from"./plugin-vue_export-helper.5a098b48.js";import{K as t,o as e,U as s,a,n,$ as d,H as l}from"./vendor.8d92a282.js";var c=o({setup(o){const c=t({isBottom:!0});function i(){var o=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.clientHeight||document.body.clientHeight,e=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(o+t)>=e?c.value.isBottom=!0:c.value.isBottom=!1}return e((()=>{i(),window.addEventListener("scroll",i)})),s((()=>{window.removeEventListener("scroll",i)})),(o,t)=>(a(),n("div",{class:l(["actionbar",{shadow:!c.value.isBottom}]),"data-fixed-calc-width":""},[d(o.$slots,"default",{},void 0,!0)],2))}},[["__scopeId","data-v-1c654bbf"]]);export{c as _};
