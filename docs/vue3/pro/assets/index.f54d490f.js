
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
var D=Object.defineProperty,I=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var k=(t,o,e)=>o in t?D(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,v=(t,o)=>{for(var e in o||(o={}))U.call(o,e)&&k(t,e,o[e]);if(g)for(var e of g(o))z.call(o,e)&&k(t,e,o[e]);return t},b=(t,o)=>I(t,S(o));import i from"./index.951371df.js";import{_ as A}from"./index.f5876f78.js";import{x as C,A as _,j as E,B as w,C as a,u as c,ag as j,l as M,o as y,D as d,af as B,k as P,$ as u,F as R}from"./vendor.399b4c48.js";import"./index.38bb13be.js";import"./index.5a3949c5.js";const T=u("\u53D6 \u6D88"),$=u("\u786E \u5B9A"),q={class:"buttons"},G=u("\u53D6 \u6D88"),H=u("\u786E \u5B9A"),J={props:b(v({},i.props),{modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:t=>["dialog","drawer"].includes(t)}}),emits:["update:modelValue","success"],setup(t,{emit:o}){const e=t,{proxy:h}=R();console.log(e);let l=C({get:function(){return e.modelValue},set:function(p){o("update:modelValue",p)}});const V=C(()=>e.id==""?"\u65B0\u589E\u8FD0\u8D39\u6A21\u677F":"\u7F16\u8F91\u8FD0\u8D39\u6A21\u677F");function x(){h.$refs.form.submit(()=>{o("success"),m()})}function m(){l.value=!1}return(p,n)=>{const r=_("el-button"),N=_("el-dialog"),F=_("el-drawer");return y(),E("div",null,[e.mode==="dialog"?(y(),w(N,{key:0,modelValue:c(l),"onUpdate:modelValue":n[0]||(n[0]=s=>j(l)?l.value=s:l=s),title:c(V),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:a(()=>[d(r,{onClick:m},{default:a(()=>[T]),_:1}),d(r,{type:"primary",onClick:x},{default:a(()=>[$]),_:1})]),default:a(()=>[d(i,B({ref:(s,f)=>{f.form=s}},p.$props),null,16)]),_:1},8,["modelValue","title"])):e.mode==="drawer"?(y(),w(F,{key:1,modelValue:c(l),"onUpdate:modelValue":n[1]||(n[1]=s=>j(l)?l.value=s:l=s),title:c(V),size:"600px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:a(()=>[d(i,B({ref:(s,f)=>{f.form=s}},i.props,{class:"form-container"}),null,16),P("div",q,[d(r,{onClick:m},{default:a(()=>[G]),_:1}),d(r,{type:"primary",onClick:x},{default:a(()=>[H]),_:1})])]),_:1},8,["modelValue","title"])):M("v-if",!0)])}}};var Y=A(J,[["__scopeId","data-v-176231df"]]);export{Y as default};
