
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./index.c17c74eb.js";import{t as p,V as v,r as f,ak as m,z as b,A as h,k as S,D as n,l as o,C as x,q as g,s as I,o as k,a0 as w,Z as y}from"./vendor.ab59999c.js";import{_ as B,u as C,c as V}from"./index.6da96519.js";const c=t=>(g("data-v-8621f4a8"),t=t(),I(),t),j={class:"notfound"},N={class:"content"},R=c(()=>o("h1",null,"404",-1)),T=c(()=>o("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1)),D={setup(t){const a=p(),r=v(),_=C(),u=V(),e=f({inter:null,countdown:5});m(()=>{clearInterval(e.value.inter)}),b(()=>{_.enableTabbar&&u.remove(a.meta.activeMenu||a.fullPath),e.value.inter=setInterval(()=>{e.value.countdown--,e.value.countdown==0&&(clearInterval(e.value.inter),s())},1e3)});function s(){r.push("/")}return(M,q)=>{const l=i,d=h("el-button");return k(),S("div",j,[n(l,{name:"404"}),o("div",N,[R,T,n(d,{type:"primary",onClick:s},{default:x(()=>[w(y(e.value.countdown)+" \u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1})])])}}};var L=B(D,[["__scopeId","data-v-8621f4a8"]]);export{L as default};
