
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{H as s,I as e,l as i,J as a,K as c,O as l,S as t,X as r}from"./vendor.7707186e.js";s("data-v-e38da876");const n={class:"result"},o={key:0,class:"icon icon-success"},d=[c("i",{class:"el-icon-success"},null,-1)],u={key:1,class:"icon icon-warning"},v=[c("i",{class:"el-icon-warning"},null,-1)],p={key:2,class:"icon icon-error"},y=[c("i",{class:"el-icon-error"},null,-1)],f={key:3,class:"desc"},g={key:4,class:"extra"},k={key:5,class:"actions"};e();const w={props:{type:{type:String,validator:s=>["success","warning","error"].includes(s),required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},setup:s=>(e,w)=>(i(),a("div",n,["success"===s.type?(i(),a("div",o,d)):"warning"===s.type?(i(),a("div",u,v)):(i(),a("div",p,y)),c("h1",null,l(s.title),1),s.desc?(i(),a("div",f,l(s.desc),1)):t("v-if",!0),e.$slots.extra?(i(),a("div",g,[r(e.$slots,"extra",{},void 0,!0)])):t("v-if",!0),e.$slots.default?(i(),a("div",k,[r(e.$slots,"default",{},void 0,!0)])):t("v-if",!0)])),__scopeId:"data-v-e38da876"};export{w as _};
