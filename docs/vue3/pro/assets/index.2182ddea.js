
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as v}from"./index.f5876f78.js";import{A as o,o as s,j as t,D as n,C as l,k as p,Y as a,l as r,a4 as d}from"./vendor.399b4c48.js";const y={class:"result"},m={key:0,class:"icon icon-success"},g={key:1,class:"icon icon-warning"},h={key:2,class:"icon icon-error"},k={key:3,class:"desc"},w={key:4,class:"extra"},x={key:5,class:"actions"},S={props:{type:{type:String,validator:e=>["success","warning","error"].includes(e),required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},setup(e){return(c,C)=>{const _=o("el-icon-success-filled"),i=o("el-icon"),u=o("el-icon-warning-filled"),f=o("el-icon-circle-close-filled");return s(),t("div",y,[e.type==="success"?(s(),t("div",m,[n(i,null,{default:l(()=>[n(_)]),_:1})])):e.type==="warning"?(s(),t("div",g,[n(i,null,{default:l(()=>[n(u)]),_:1})])):(s(),t("div",h,[n(i,null,{default:l(()=>[n(f)]),_:1})])),p("h1",null,a(e.title),1),e.desc?(s(),t("div",k,a(e.desc),1)):r("v-if",!0),c.$slots.extra?(s(),t("div",w,[d(c.$slots,"extra",{},void 0,!0)])):r("v-if",!0),c.$slots.default?(s(),t("div",x,[d(c.$slots,"default",{},void 0,!0)])):r("v-if",!0)])}}};var B=v(S,[["__scopeId","data-v-cef7b02c"]]);export{B as _};
