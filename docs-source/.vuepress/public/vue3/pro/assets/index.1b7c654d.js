
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
var F=Object.defineProperty,I=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var g=(t,e,o)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,x=(t,e)=>{for(var o in e||(e={}))U.call(e,o)&&g(t,o,e[o]);if(v)for(var o of v(e))z.call(e,o)&&g(t,o,e[o]);return t},C=(t,e)=>I(t,S(e));import f from"./index.f16953da.js";import{_ as A}from"./index.fd3dd73e.js";import{x as b,A as _,j as E,B as w,C as s,u,ag as B,l as G,o as y,D as d,af as h,k as M,a0 as c,G as P}from"./vendor.0c4fd540.js";const R=c("\u53D6 \u6D88"),T=c("\u786E \u5B9A"),$={class:"buttons"},q=c("\u53D6 \u6D88"),H=c("\u786E \u5B9A"),J={props:C(x({},f.props),{modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:t=>["dialog","drawer"].includes(t)}}),emits:["update:modelValue","success"],setup(t,{emit:e}){const o=t,{proxy:j}=P();let l=b({get:function(){return o.modelValue},set:function(n){e("update:modelValue",n)}});const V=b(()=>o.id==""?"\u65B0\u589E":"\u7F16\u8F91");function k(){j.$refs.form.submit(()=>{e("success"),m()})}function m(){l.value=!1}return(n,r)=>{const i=_("el-button"),N=_("el-dialog"),D=_("el-drawer");return y(),E("div",null,[o.mode==="dialog"?(y(),w(N,{key:0,modelValue:u(l),"onUpdate:modelValue":r[0]||(r[0]=a=>B(l)?l.value=a:l=a),title:u(V),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:s(()=>[d(i,{onClick:m},{default:s(()=>[R]),_:1}),d(i,{type:"primary",onClick:k},{default:s(()=>[T]),_:1})]),default:s(()=>[d(f,h({ref:(a,p)=>{p.form=a}},n.$props),null,16)]),_:1},8,["modelValue","title"])):o.mode==="drawer"?(y(),w(D,{key:1,modelValue:u(l),"onUpdate:modelValue":r[1]||(r[1]=a=>B(l)?l.value=a:l=a),title:u(V),size:"600px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:s(()=>[d(f,h({ref:(a,p)=>{p.form=a}},n.$props,{class:"form-container"}),null,16),M("div",$,[d(i,{onClick:m},{default:s(()=>[q]),_:1}),d(i,{type:"primary",onClick:k},{default:s(()=>[H]),_:1})])]),_:1},8,["modelValue","title"])):G("v-if",!0)])}}};var W=A(J,[["__scopeId","data-v-6f71636a"]]);export{W as default};
