
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";import{l as e,H as i,I as a,P as c,L as l,X as r,M as t,O as o}from"./vendor.e59ac5d6.js";const n=s=>(t("data-v-110b2f79"),s=s(),o(),s),d={class:"result"},u={key:0,class:"icon icon-success"},v=[n((()=>a("i",{class:"el-icon-success"},null,-1)))],p={key:1,class:"icon icon-warning"},y=[n((()=>a("i",{class:"el-icon-warning"},null,-1)))],f={key:2,class:"icon icon-error"},g=[n((()=>a("i",{class:"el-icon-error"},null,-1)))],k={key:3,class:"desc"},x={key:4,class:"extra"},_={key:5,class:"actions"};var m=s({props:{type:{type:String,validator:s=>["success","warning","error"].includes(s),required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},setup:s=>(t,o)=>(e(),i("div",d,["success"===s.type?(e(),i("div",u,v)):"warning"===s.type?(e(),i("div",p,y)):(e(),i("div",f,g)),a("h1",null,c(s.title),1),s.desc?(e(),i("div",k,c(s.desc),1)):l("v-if",!0),t.$slots.extra?(e(),i("div",x,[r(t.$slots,"extra",{},void 0,!0)])):l("v-if",!0),t.$slots.default?(e(),i("div",_,[r(t.$slots,"default",{},void 0,!0)])):l("v-if",!0)]))},[["__scopeId","data-v-110b2f79"]]);export{m as _};
