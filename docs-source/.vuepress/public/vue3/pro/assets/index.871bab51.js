
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";import{l as s,J as t,K as i,R as r,O as c,Z as a,P as l,Q as _}from"./vendor.66600095.js";const n=e=>(l("data-v-e38da876"),e=e(),_(),e),u={class:"result"},p={key:0,class:"icon icon-success"},v=n(()=>i("i",{class:"el-icon-success"},null,-1)),h=[v],y={key:1,class:"icon icon-warning"},f=n(()=>i("i",{class:"el-icon-warning"},null,-1)),g=[f],m={key:2,class:"icon icon-error"},k=n(()=>i("i",{class:"el-icon-error"},null,-1)),S=[k],w={key:3,class:"desc"},x={key:4,class:"extra"},I={key:5,class:"actions"},$={props:{type:{type:String,validator:e=>["success","warning","error"].includes(e),required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},setup(e){return(o,B)=>(s(),t("div",u,[e.type==="success"?(s(),t("div",p,h)):e.type==="warning"?(s(),t("div",y,g)):(s(),t("div",m,S)),i("h1",null,r(e.title),1),e.desc?(s(),t("div",w,r(e.desc),1)):c("v-if",!0),o.$slots.extra?(s(),t("div",x,[a(o.$slots,"extra",{},void 0,!0)])):c("v-if",!0),o.$slots.default?(s(),t("div",I,[a(o.$slots,"default",{},void 0,!0)])):c("v-if",!0)]))}};var N=d($,[["__scopeId","data-v-e38da876"]]);export{N as _};
