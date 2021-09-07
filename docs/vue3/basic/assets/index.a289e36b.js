
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{n as e,q as a,G as t,a as s,s as r,H as o,I as n,J as i,t as l}from"./vendor.505a4e11.js";e("data-v-31a16236");const d=["xlink:href"];a();const c={props:{name:{type:String,required:!0},flip:{type:String,validator:e=>["","horizontal","vertical","both"].includes(e),default:""},rotate:{type:Number,validator:e=>e>=0&&e<=360,default:0}},setup(e){const a=e,c=t((()=>{let e=[];if(""!=a.flip)switch(a.flip){case"horizontal":e.push("rotateY(180deg)");break;case"vertical":e.push("rotateX(180deg)");break;case"both":e.push("rotateX(180deg)"),e.push("rotateY(180deg)")}return 0!=a.rotate&&e.push(`rotate(${a.rotate}deg)`),`transform: ${e.join(" ")};`}));return(a,t)=>0===e.name.indexOf("el-icon-")||0===e.name.indexOf("ri-")?(s(),r("i",{key:0,class:o(["svg-icon",e.name]),style:n(i(c))},null,6)):(s(),r("svg",{key:1,class:"svg-icon",style:n(i(c)),"aria-hidden":"true"},[l("use",{"xlink:href":`#icon-${e.name}`},null,8,d)],4))},__scopeId:"data-v-31a16236"};export{c as _};
