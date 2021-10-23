
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";import{l as s,J as t,K as c,R as r,O as i,Z as d,P as l,Q as _}from"./vendor.9f126d3c.js";const n=e=>(l("data-v-110b2f79"),e=e(),_(),e),u={class:"result"},p={key:0,class:"icon icon-success"},v=n(()=>c("i",{class:"el-icon-success"},null,-1)),h=[v],f={key:1,class:"icon icon-warning"},y=n(()=>c("i",{class:"el-icon-warning"},null,-1)),g=[y],m={key:2,class:"icon icon-error"},k=n(()=>c("i",{class:"el-icon-error"},null,-1)),S=[k],w={key:3,class:"desc"},x={key:4,class:"extra"},I={key:5,class:"actions"},$={props:{type:{type:String,validator:e=>["success","warning","error"].includes(e),required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},setup(e){return(o,b)=>(s(),t("div",u,[e.type==="success"?(s(),t("div",p,h)):e.type==="warning"?(s(),t("div",f,g)):(s(),t("div",m,S)),c("h1",null,r(e.title),1),e.desc?(s(),t("div",w,r(e.desc),1)):i("v-if",!0),o.$slots.extra?(s(),t("div",x,[d(o.$slots,"extra",{},void 0,!0)])):i("v-if",!0),o.$slots.default?(s(),t("div",I,[d(o.$slots,"default",{},void 0,!0)])):i("v-if",!0)]))}};var q=a($,[["__scopeId","data-v-110b2f79"]]);export{q as _};
