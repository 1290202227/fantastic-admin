
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as d,r as m,a as n,c as l,D as p,R as f,S as o,G as s,x as c,T as _,y as h}from"./vendor.5c97c969.js";const y=["xlink:href"],v={props:{name:{type:String,required:!0},flip:{type:String,validator(e){return["","horizontal","vertical","both"].includes(e)},default:""},rotate:{type:Number,validator(e){return e>=0&&e<=360},default:0}},setup(e){const a=e,r=d(()=>{let t=[];if(a.flip!="")switch(a.flip){case"horizontal":t.push("rotateY(180deg)");break;case"vertical":t.push("rotateX(180deg)");break;case"both":t.push("rotateX(180deg)"),t.push("rotateY(180deg)");break}return a.rotate!=0&&t.push(`rotate(${a.rotate}deg)`),`transform: ${t.join(" ")};`});return(t,g)=>{const i=m("el-icon");return e.name.indexOf("el-icon-")===0||e.name.indexOf("ElIcon")===0?(n(),l(i,{key:0,class:"svg-icon",style:o(s(r))},{default:p(()=>[(n(),l(f(e.name)))]),_:1},8,["style"])):e.name.indexOf("ri-")===0?(n(),c("i",{key:1,class:_(["svg-icon",e.name]),style:o(s(r))},null,6)):(n(),c("svg",{key:2,class:"svg-icon",style:o(s(r)),"aria-hidden":"true"},[h("use",{"xlink:href":`#icon-${e.name}`},null,8,y)],4))}}};var b=u(v,[["__scopeId","data-v-bca93872"]]);export{b as _};
