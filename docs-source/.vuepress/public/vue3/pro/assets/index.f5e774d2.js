
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
var I=Object.defineProperty,R=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var g=(t,o,e)=>o in t?I(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,v=(t,o)=>{for(var e in o||(o={}))U.call(o,e)&&g(t,e,o[e]);if(x)for(var e of x(o))q.call(o,e)&&g(t,e,o[e]);return t},k=(t,o)=>R(t,S(o));import i from"./index.64415375.js";import{_ as z}from"./plugin-vue_export-helper.5a098b48.js";import{i as D,l as C,r as _,m as y,Q as E,n as w,q as a,s as u,ag as j,Z as M,t as n,af as h,R as P,Y as c}from"./vendor.3faf3917.js";import"./index.52bb8eb5.js";import"./index.3f3a0e66.js";import"./index.4b5a21d7.js";const Q=c("\u53D6 \u6D88"),T=c("\u786E \u5B9A"),Y={class:"buttons"},Z=c("\u53D6 \u6D88"),A=c("\u786E \u5B9A"),G={props:k(v({},i.props),{modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:t=>["dialog","drawer"].includes(t)}}),emits:["update:modelValue","success"],setup(t,{emit:o}){const e=t,{proxy:B}=D();console.log(e);let l=C({get:function(){return e.modelValue},set:function(p){o("update:modelValue",p)}});const V=C(()=>e.id==""?"\u65B0\u589E\u8FD0\u8D39\u6A21\u677F":"\u7F16\u8F91\u8FD0\u8D39\u6A21\u677F");function b(){B.$refs.form.submit(()=>{o("success"),m()})}function m(){l.value=!1}return(p,r)=>{const d=_("el-button"),N=_("el-dialog"),F=_("el-drawer");return y(),E("div",null,[e.mode==="dialog"?(y(),w(N,{key:0,modelValue:u(l),"onUpdate:modelValue":r[0]||(r[0]=s=>j(l)?l.value=s:l=s),title:u(V),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:a(()=>[n(d,{onClick:m},{default:a(()=>[Q]),_:1}),n(d,{type:"primary",onClick:b},{default:a(()=>[T]),_:1})]),default:a(()=>[n(i,h({ref:(s,f)=>{f.form=s}},p.$props),null,16)]),_:1},8,["modelValue","title"])):e.mode==="drawer"?(y(),w(F,{key:1,modelValue:u(l),"onUpdate:modelValue":r[1]||(r[1]=s=>j(l)?l.value=s:l=s),title:u(V),size:"600px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:a(()=>[n(i,h({ref:(s,f)=>{f.form=s}},i.props,{class:"form-container"}),null,16),P("div",Y,[n(d,{onClick:m},{default:a(()=>[Z]),_:1}),n(d,{type:"primary",onClick:b},{default:a(()=>[A]),_:1})])]),_:1},8,["modelValue","title"])):M("v-if",!0)])}}};var $=z(G,[["__scopeId","data-v-0fd7b75b"]]);export{$ as default};