
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{x as s,y as e,o as c,z as i,A as a,F as t,J as l,M as n}from"./vendor.b5a7373b.js";const r={name:"Result",props:{type:{type:String,validator:s=>["success","warning","error"].includes(s),required:!0},title:{type:String,required:!0},desc:{type:String,default:""}}};s("data-v-1c0bd82c");const o={class:"result"},d={key:0,class:"icon icon-success"},u=[a("i",{class:"el-icon-success"},null,-1)],v={key:1,class:"icon icon-warning"},y=[a("i",{class:"el-icon-warning"},null,-1)],p={key:2,class:"icon icon-error"},f=[a("i",{class:"el-icon-error"},null,-1)],g={key:3,class:"desc"},k={key:4,class:"extra"},x={key:5,class:"actions"};e(),r.render=function(s,e,r,b,w,$){return c(),i("div",o,["success"===r.type?(c(),i("div",d,u)):"warning"===r.type?(c(),i("div",v,y)):(c(),i("div",p,f)),a("h1",null,t(r.title),1),r.desc?(c(),i("div",g,t(r.desc),1)):l("v-if",!0),s.$slots.extra?(c(),i("div",k,[n(s.$slots,"extra",{},void 0,!0)])):l("v-if",!0),s.$slots.default?(c(),i("div",x,[n(s.$slots,"default",{},void 0,!0)])):l("v-if",!0)])},r.__scopeId="data-v-1c0bd82c";export{r as _};
