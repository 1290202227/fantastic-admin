
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
var I=Object.defineProperty,P=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var g=(t,e,o)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,k=(t,e)=>{for(var o in e||(e={}))U.call(e,o)&&g(t,o,e[o]);if(b)for(var o of b(e))q.call(e,o)&&g(t,o,e[o]);return t},x=(t,e)=>P(t,S(e));import _ from"./index.ae8b2f48.js";import{_ as z}from"./plugin-vue_export-helper.5a098b48.js";import{i as D,l as C,r as f,m as V,O as E,n as w,q as s,s as u,ae as h,X as M,t as r,ad as B,P as O,V as c}from"./vendor.22bd9123.js";const R=c("\u53D6 \u6D88"),T=c("\u786E \u5B9A"),X={class:"buttons"},$=c("\u53D6 \u6D88"),A=c("\u786E \u5B9A"),G={props:x(k({},_.props),{modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:t=>["dialog","drawer"].includes(t)}}),emits:["update:modelValue","success"],setup(t,{emit:e}){const o=t,{proxy:N}=D();let l=C({get:function(){return o.modelValue},set:function(d){e("update:modelValue",d)}});const y=C(()=>o.id==""?"\u65B0\u589E\u7BA1\u7406\u5458":"\u7F16\u8F91\u7BA1\u7406\u5458");function v(){N.$refs.form.submit(()=>{e("success"),m()})}function m(){l.value=!1}return(d,n)=>{const i=f("el-button"),j=f("el-dialog"),F=f("el-drawer");return V(),E("div",null,[o.mode==="dialog"?(V(),w(j,{key:0,modelValue:u(l),"onUpdate:modelValue":n[0]||(n[0]=a=>h(l)?l.value=a:l=a),title:u(y),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:s(()=>[r(i,{onClick:m},{default:s(()=>[R]),_:1}),r(i,{type:"primary",onClick:v},{default:s(()=>[T]),_:1})]),default:s(()=>[r(_,B({ref:(a,p)=>{p.form=a}},d.$props),null,16)]),_:1},8,["modelValue","title"])):o.mode==="drawer"?(V(),w(F,{key:1,modelValue:u(l),"onUpdate:modelValue":n[1]||(n[1]=a=>h(l)?l.value=a:l=a),title:u(y),size:"600px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:s(()=>[r(_,B({ref:(a,p)=>{p.form=a}},d.$props,{class:"form-container"}),null,16),O("div",X,[r(i,{onClick:m},{default:s(()=>[$]),_:1}),r(i,{type:"primary",onClick:v},{default:s(()=>[A]),_:1})])]),_:1},8,["modelValue","title"])):M("v-if",!0)])}}};var Q=z(G,[["__scopeId","data-v-0febab60"]]);export{Q as default};
