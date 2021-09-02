
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as a}from"./index.8d81384c.js";import{x as e,y as r,r as t,o,h as s,w as n,I as d,F as c,A as i,J as l,P as u}from"./vendor.b5a7373b.js";const f={name:"ColorfulCard",props:{colorFrom:{type:String,default:"#843cf6"},colorTo:{type:String,default:"#759bff"},header:{type:String,default:""},num:{type:Number,default:0},tip:{type:String,default:""},icon:{type:String,default:""}}};e("data-v-2b979c62");const p={class:"num"},m={class:"tip"};r(),f.render=function(e,r,f,y,g,b){const v=a,h=t("el-card");return o(),s(h,{shadow:"hover",class:"mini-card",style:u({background:`linear-gradient(50deg, ${f.colorFrom}, ${f.colorTo})`})},{header:n((()=>[d(c(f.header),1)])),default:n((()=>[i("div",p,c(f.num),1),i("div",m,c(f.tip),1),f.icon?(o(),s(v,{key:0,name:f.icon,rotate:20},null,8,["name"])):l("v-if",!0)])),_:1},8,["style"])},f.__scopeId="data-v-2b979c62";export{f as _};
