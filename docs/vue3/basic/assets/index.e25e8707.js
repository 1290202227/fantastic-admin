
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{t as e,u as t,o as a,k as r,B as s,l as o,D as n}from"./vendor.e2e92bee.js";const i={name:"SvgIcon",props:{name:{type:String,required:!0},flip:{type:String,validator:e=>["","horizontal","vertical","both"].includes(e),default:""},rotate:{type:Number,validator:e=>e>=0&&e<=360,default:0}},computed:{transformStyle(){let e=[];if(""!=this.flip)switch(this.flip){case"horizontal":e.push("rotateY(180deg)");break;case"vertical":e.push("rotateX(180deg)");break;case"both":e.push("rotateX(180deg)"),e.push("rotateY(180deg)")}return 0!=this.rotate&&e.push(`rotate(${this.rotate}deg)`),`transform: ${e.join(" ")};`}}};e("data-v-7e068982");const l=["xlink:href"];t(),i.render=function(e,t,i,d,u,c){return 0===i.name.indexOf("el-icon-")?(a(),r("i",{key:0,class:s(i.name)},null,2)):(a(),r("svg",{key:1,class:"svg-icon",style:n(c.transformStyle),"aria-hidden":"true"},[o("use",{"xlink:href":`#icon-${i.name}`},null,8,l)],4))},i.__scopeId="data-v-7e068982";export{i as _};
