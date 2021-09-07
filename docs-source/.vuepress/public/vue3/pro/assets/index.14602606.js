
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{H as s,I as e,n as a,J as c,K as i,O as l,S as t,X as n}from"./vendor.3dac1dfd.js";s("data-v-a233dec6");const r={class:"result"},d={key:0,class:"icon icon-success"},o=[i("i",{class:"el-icon-success"},null,-1)],u={key:1,class:"icon icon-warning"},v=[i("i",{class:"el-icon-warning"},null,-1)],p={key:2,class:"icon icon-error"},y=[i("i",{class:"el-icon-error"},null,-1)],f={key:3,class:"desc"},g={key:4,class:"extra"},k={key:5,class:"actions"};e();const w={props:{type:{type:String,validator:s=>["success","warning","error"].includes(s),required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},setup:s=>(e,w)=>(a(),c("div",r,["success"===s.type?(a(),c("div",d,o)):"warning"===s.type?(a(),c("div",u,v)):(a(),c("div",p,y)),i("h1",null,l(s.title),1),s.desc?(a(),c("div",f,l(s.desc),1)):t("v-if",!0),e.$slots.extra?(a(),c("div",g,[n(e.$slots,"extra",{},void 0,!0)])):t("v-if",!0),e.$slots.default?(a(),c("div",k,[n(e.$slots,"default",{},void 0,!0)])):t("v-if",!0)])),__scopeId:"data-v-a233dec6"};export{w as _};
