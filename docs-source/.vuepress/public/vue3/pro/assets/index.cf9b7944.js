
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
var D=Object.defineProperty,I=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var g=(t,e,o)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,x=(t,e)=>{for(var o in e||(e={}))U.call(e,o)&&g(t,o,e[o]);if(v)for(var o of v(e))$.call(e,o)&&g(t,o,e[o]);return t},C=(t,e)=>I(t,S(e));import f from"./index.f8e793c7.js";import{_ as z}from"./index.a6a9d62e.js";import{x as b,A as _,j as A,B as w,C as s,u as i,ag as B,l as E,o as y,D as d,af as h,k as M,$ as u,F as P}from"./vendor.399b4c48.js";const R=u("\u53D6 \u6D88"),T=u("\u786E \u5B9A"),q={class:"buttons"},G=u("\u53D6 \u6D88"),H=u("\u786E \u5B9A"),J={props:C(x({},f.props),{modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:t=>["dialog","drawer"].includes(t)}}),emits:["update:modelValue","success"],setup(t,{emit:e}){const o=t,{proxy:j}=P();let a=b({get:function(){return o.modelValue},set:function(n){e("update:modelValue",n)}});const V=b(()=>o.id==""?"\u65B0\u589E":"\u7F16\u8F91");function k(){j.$refs.form.submit(()=>{e("success"),m()})}function m(){a.value=!1}return(n,r)=>{const c=_("el-button"),N=_("el-dialog"),F=_("el-drawer");return y(),A("div",null,[o.mode==="dialog"?(y(),w(N,{key:0,modelValue:i(a),"onUpdate:modelValue":r[0]||(r[0]=l=>B(a)?a.value=l:a=l),title:i(V),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:s(()=>[d(c,{onClick:m},{default:s(()=>[R]),_:1}),d(c,{type:"primary",onClick:k},{default:s(()=>[T]),_:1})]),default:s(()=>[d(f,h({ref:(l,p)=>{p.form=l}},n.$props),null,16)]),_:1},8,["modelValue","title"])):o.mode==="drawer"?(y(),w(F,{key:1,modelValue:i(a),"onUpdate:modelValue":r[1]||(r[1]=l=>B(a)?a.value=l:a=l),title:i(V),size:"600px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:s(()=>[d(f,h({ref:(l,p)=>{p.form=l}},n.$props,{class:"form-container"}),null,16),M("div",q,[d(c,{onClick:m},{default:s(()=>[G]),_:1}),d(c,{type:"primary",onClick:k},{default:s(()=>[H]),_:1})])]),_:1},8,["modelValue","title"])):E("v-if",!0)])}}};var W=z(J,[["__scopeId","data-v-262aa0af"]]);export{W as default};
