
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{x as e,y as t,o as a,z as r,O as s,P as o,A as n}from"./vendor.b5a7373b.js";const i={name:"SvgIcon",props:{name:{type:String,required:!0},flip:{type:String,validator:e=>["","horizontal","vertical","both"].includes(e),default:""},rotate:{type:Number,validator:e=>e>=0&&e<=360,default:0}},computed:{transformStyle(){let e=[];if(""!=this.flip)switch(this.flip){case"horizontal":e.push("rotateY(180deg)");break;case"vertical":e.push("rotateX(180deg)");break;case"both":e.push("rotateX(180deg)"),e.push("rotateY(180deg)")}return 0!=this.rotate&&e.push(`rotate(${this.rotate}deg)`),`transform: ${e.join(" ")};`}}};e("data-v-34ff3cbc");const l=["xlink:href"];t(),i.render=function(e,t,i,c,d,f){return 0===i.name.indexOf("el-icon-")||0===i.name.indexOf("ri-")?(a(),r("i",{key:0,class:s(["svg-icon",i.name]),style:o(f.transformStyle)},null,6)):(a(),r("svg",{key:1,class:"svg-icon",style:o(f.transformStyle),"aria-hidden":"true"},[n("use",{"xlink:href":`#icon-${i.name}`},null,8,l)],4))},i.__scopeId="data-v-34ff3cbc";export{i as _};
