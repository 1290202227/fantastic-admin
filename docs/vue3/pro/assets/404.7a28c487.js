
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./index.183dbc98.js";import{w as p,U as v,r as f,al as m,A as b,B as h,l as S,F as n,m as o,D as x,s as g,t as w,o as I,$ as B,Y as y}from"./vendor.b17bec21.js";import{_ as k,u as j,c as C}from"./index.0f7a313d.js";const c=t=>(g("data-v-8621f4a8"),t=t(),w(),t),N={class:"notfound"},R={class:"content"},T=c(()=>o("h1",null,"404",-1)),V=c(()=>o("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1)),D={setup(t){const a=p(),r=v(),_=j(),u=C(),e=f({inter:null,countdown:5});m(()=>{clearInterval(e.value.inter)}),b(()=>{_.enableTabbar&&u.remove(a.meta.activeMenu||a.fullPath),e.value.inter=setInterval(()=>{e.value.countdown--,e.value.countdown==0&&(clearInterval(e.value.inter),s())},1e3)});function s(){r.push("/")}return(M,A)=>{const l=i,d=h("el-button");return I(),S("div",N,[n(l,{name:"404"}),o("div",R,[T,V,n(d,{type:"primary",onClick:s},{default:x(()=>[B(y(e.value.countdown)+" \u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1})])])}}};var P=k(D,[["__scopeId","data-v-8621f4a8"]]);export{P as default};
