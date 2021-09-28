
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";import{G as a,a as t,n as r,H as s,I as o,J as i,q as n}from"./vendor.8d92a282.js";const l=["xlink:href"];var p=e({props:{name:{type:String,required:!0},flip:{type:String,validator:e=>["","horizontal","vertical","both"].includes(e),default:""},rotate:{type:Number,validator:e=>e>=0&&e<=360,default:0}},setup(e){const p=e,d=a((()=>{let e=[];if(""!=p.flip)switch(p.flip){case"horizontal":e.push("rotateY(180deg)");break;case"vertical":e.push("rotateX(180deg)");break;case"both":e.push("rotateX(180deg)"),e.push("rotateY(180deg)")}return 0!=p.rotate&&e.push(`rotate(${p.rotate}deg)`),`transform: ${e.join(" ")};`}));return(a,p)=>0===e.name.indexOf("el-icon-")||0===e.name.indexOf("ri-")?(t(),r("i",{key:0,class:s(["svg-icon",e.name]),style:o(i(d))},null,6)):(t(),r("svg",{key:1,class:"svg-icon",style:o(i(d)),"aria-hidden":"true"},[n("use",{"xlink:href":`#icon-${e.name}`},null,8,l)],4))}},[["__scopeId","data-v-74aba96a"]]);export{p as _};
