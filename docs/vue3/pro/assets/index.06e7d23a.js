
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./index.c17c74eb.js";import{_ as d}from"./index.6da96519.js";import{A as l,o,B as a,C as n,a0 as _,Z as t,l as r,m,F as u}from"./vendor.ab59999c.js";const f={class:"num"},p={class:"tip"},g={props:{colorFrom:{type:String,default:"#843cf6"},colorTo:{type:String,default:"#759bff"},header:{type:String,default:""},num:{type:Number,default:0},tip:{type:String,default:""},icon:{type:String,default:""}},setup(e){return(y,v)=>{const c=i,s=l("el-card");return o(),a(s,{shadow:"hover",class:"mini-card",style:u({background:`linear-gradient(50deg, ${e.colorFrom}, ${e.colorTo})`})},{header:n(()=>[_(t(e.header),1)]),default:n(()=>[r("div",f,t(e.num),1),r("div",p,t(e.tip),1),e.icon?(o(),a(c,{key:0,name:e.icon,rotate:20},null,8,["name"])):m("v-if",!0)]),_:1},8,["style"])}}};var b=d(g,[["__scopeId","data-v-60b3af78"]]);export{b as _};
