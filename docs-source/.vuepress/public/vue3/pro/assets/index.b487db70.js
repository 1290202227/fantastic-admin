
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as s}from"./index.453fd9a9.js";import{_ as i}from"./index.fd3dd73e.js";import{A as l,o,B as a,C as n,a0 as _,Z as t,k as r,l as m,F as u}from"./vendor.0c4fd540.js";const f={class:"num"},p={class:"tip"},g={props:{colorFrom:{type:String,default:"#843cf6"},colorTo:{type:String,default:"#759bff"},header:{type:String,default:""},num:{type:Number,default:0},tip:{type:String,default:""},icon:{type:String,default:""}},setup(e){return(y,v)=>{const c=s,d=l("el-card");return o(),a(d,{shadow:"hover",class:"mini-card",style:u({background:`linear-gradient(50deg, ${e.colorFrom}, ${e.colorTo})`})},{header:n(()=>[_(t(e.header),1)]),default:n(()=>[r("div",f,t(e.num),1),r("div",p,t(e.tip),1),e.icon?(o(),a(c,{key:0,name:e.icon,rotate:20},null,8,["name"])):m("v-if",!0)]),_:1},8,["style"])}}};var k=i(g,[["__scopeId","data-v-63c3dded"]]);export{k as _};
