
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./index.ec04b431.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";import{r as d,m as o,n as a,q as n,Y as _,U as t,R as r,Z as u,a6 as m}from"./vendor.2da94371.js";const p={class:"num"},f={class:"tip"},g={props:{colorFrom:{type:String,default:"#843cf6"},colorTo:{type:String,default:"#759bff"},header:{type:String,default:""},num:{type:Number,default:0},tip:{type:String,default:""},icon:{type:String,default:""}},setup(e){return(v,y)=>{const c=i,s=d("el-card");return o(),a(s,{shadow:"hover",class:"mini-card",style:m({background:`linear-gradient(50deg, ${e.colorFrom}, ${e.colorTo})`})},{header:n(()=>[_(t(e.header),1)]),default:n(()=>[r("div",p,t(e.num),1),r("div",f,t(e.tip),1),e.icon?(o(),a(c,{key:0,name:e.icon,rotate:20},null,8,["name"])):u("v-if",!0)]),_:1},8,["style"])}}};var b=l(g,[["__scopeId","data-v-60b3af78"]]);export{b as _};