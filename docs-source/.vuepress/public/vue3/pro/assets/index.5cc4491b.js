
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
var S=Object.defineProperty,F=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var g=(t,e,o)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,x=(t,e)=>{for(var o in e||(e={}))q.call(e,o)&&g(t,o,e[o]);if(k)for(var o of k(e))z.call(e,o)&&g(t,o,e[o]);return t},C=(t,e)=>F(t,U(e));import _ from"./index.8f337d05.js";import{_ as D}from"./plugin-vue_export-helper.5a098b48.js";import{h as E,k as b,r as f,l as y,H,m as w,n as s,q as i,a9 as h,L,s as r,a8 as B,I as M,S as c}from"./vendor.5a8f5a39.js";const P=c("\u53D6 \u6D88"),R=c("\u786E \u5B9A"),T={class:"buttons"},$=c("\u53D6 \u6D88"),A=c("\u786E \u5B9A"),G={props:C(x({},_.props),{modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:t=>["dialog","drawer"].includes(t)}}),emits:["update:modelValue","success"],setup(t,{emit:e}){const o=t,{proxy:N}=E();let l=b({get:function(){return o.modelValue},set:function(d){e("update:modelValue",d)}});const V=b(()=>o.id==""?"\u65B0\u589E\u90E8\u95E8":"\u7F16\u8F91\u90E8\u95E8");function v(){N.$refs.form.submit(()=>{e("success"),m()})}function m(){l.value=!1}return(d,n)=>{const u=f("el-button"),j=f("el-dialog"),I=f("el-drawer");return y(),H("div",null,[o.mode==="dialog"?(y(),w(j,{key:0,modelValue:i(l),"onUpdate:modelValue":n[0]||(n[0]=a=>h(l)?l.value=a:l=a),title:i(V),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:s(()=>[r(u,{onClick:m},{default:s(()=>[P]),_:1}),r(u,{type:"primary",onClick:v},{default:s(()=>[R]),_:1})]),default:s(()=>[r(_,B({ref:(a,p)=>{p.form=a}},d.$props),null,16)]),_:1},8,["modelValue","title"])):o.mode==="drawer"?(y(),w(I,{key:1,modelValue:i(l),"onUpdate:modelValue":n[1]||(n[1]=a=>h(l)?l.value=a:l=a),title:i(V),size:"600px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:s(()=>[r(_,B({ref:(a,p)=>{p.form=a}},d.$props,{class:"form-container"}),null,16),M("div",T,[r(u,{onClick:m},{default:s(()=>[$]),_:1}),r(u,{type:"primary",onClick:v},{default:s(()=>[A]),_:1})])]),_:1},8,["modelValue","title"])):L("v-if",!0)])}}};var W=D(G,[["__scopeId","data-v-59a80d56"]]);export{W as default};
