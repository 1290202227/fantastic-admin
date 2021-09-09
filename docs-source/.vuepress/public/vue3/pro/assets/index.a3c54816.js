
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{H as e,I as a,k as t,l as s,J as r,Y as o,Z as i,q as n,K as l}from"./vendor.7707186e.js";e("data-v-19c3e522");const c=["xlink:href"];a();const d={props:{name:{type:String,required:!0},flip:{type:String,validator:e=>["","horizontal","vertical","both"].includes(e),default:""},rotate:{type:Number,validator:e=>e>=0&&e<=360,default:0}},setup(e){const a=e,d=t((()=>{let e=[];if(""!=a.flip)switch(a.flip){case"horizontal":e.push("rotateY(180deg)");break;case"vertical":e.push("rotateX(180deg)");break;case"both":e.push("rotateX(180deg)"),e.push("rotateY(180deg)")}return 0!=a.rotate&&e.push(`rotate(${a.rotate}deg)`),`transform: ${e.join(" ")};`}));return(a,t)=>0===e.name.indexOf("el-icon-")||0===e.name.indexOf("ri-")?(s(),r("i",{key:0,class:o(["svg-icon",e.name]),style:i(n(d))},null,6)):(s(),r("svg",{key:1,class:"svg-icon",style:i(n(d)),"aria-hidden":"true"},[l("use",{"xlink:href":`#icon-${e.name}`},null,8,c)],4))},__scopeId:"data-v-19c3e522"};export{d as _};
