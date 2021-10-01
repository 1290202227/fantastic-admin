
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./index.484cca4c.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";import{r as d,l as a,m as o,n,S as _,P as t,I as r,L as u,Z as m}from"./vendor.5a8f5a39.js";const p={class:"num"},f={class:"tip"},g={props:{colorFrom:{type:String,default:"#843cf6"},colorTo:{type:String,default:"#759bff"},header:{type:String,default:""},num:{type:Number,default:0},tip:{type:String,default:""},icon:{type:String,default:""}},setup(e){return(v,y)=>{const c=i,s=d("el-card");return a(),o(s,{shadow:"hover",class:"mini-card",style:m({background:`linear-gradient(50deg, ${e.colorFrom}, ${e.colorTo})`})},{header:n(()=>[_(t(e.header),1)]),default:n(()=>[r("div",p,t(e.num),1),r("div",f,t(e.tip),1),e.icon?(a(),o(c,{key:0,name:e.icon,rotate:20},null,8,["name"])):u("v-if",!0)]),_:1},8,["style"])}}};var b=l(g,[["__scopeId","data-v-35c54a03"]]);export{b as _};
