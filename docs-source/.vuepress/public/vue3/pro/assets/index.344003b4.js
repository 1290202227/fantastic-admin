
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(o,t,a)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a;import d from"./index.e1be7a64.js";import{_ as n}from"./plugin-vue_export-helper.5a098b48.js";import{h as u,k as i,r as p,l as c,H as m,m as f,n as y,q as b,a9 as v,L as g,s as V,a8 as _,I as j,S as k}from"./vendor.1e0be253.js";const w=k("取 消"),O=k("确 定"),x={class:"buttons"},P=k("取 消"),h=k("确 定");var C,I,S=n({props:(C=((e,o)=>{for(var t in o||(o={}))l.call(o,t)&&s(e,t,o[t]);if(a)for(var t of a(o))r.call(o,t)&&s(e,t,o[t]);return e})({},d.props),I={modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},o(C,t(I))),emits:["update:modelValue","success"],setup(e,{emit:o}){const t=e,{proxy:a}=u();let l=i({get:function(){return t.modelValue},set:function(e){o("update:modelValue",e)}});const r=i((()=>""==t.id?"新增职位":"编辑职位"));function s(){a.$refs.form.submit((()=>{o("success"),n()}))}function n(){l.value=!1}return(e,o)=>{const a=p("el-button"),u=p("el-dialog"),i=p("el-drawer");return c(),m("div",null,["dialog"===t.mode?(c(),f(u,{key:0,modelValue:b(l),"onUpdate:modelValue":o[0]||(o[0]=e=>v(l)?l.value=e:l=e),title:b(r),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:y((()=>[V(a,{onClick:n},{default:y((()=>[w])),_:1}),V(a,{type:"primary",onClick:s},{default:y((()=>[O])),_:1})])),default:y((()=>[V(d,_({ref:(e,o)=>{o.form=e}},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===t.mode?(c(),f(i,{key:1,modelValue:b(l),"onUpdate:modelValue":o[1]||(o[1]=e=>v(l)?l.value=e:l=e),title:b(r),size:"600px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:y((()=>[V(d,_({ref:(e,o)=>{o.form=e}},e.$props,{class:"form-container"}),null,16),j("div",x,[V(a,{onClick:n},{default:y((()=>[P])),_:1}),V(a,{type:"primary",onClick:s},{default:y((()=>[h])),_:1})])])),_:1},8,["modelValue","title"])):g("v-if",!0)])}}},[["__scopeId","data-v-69713aa4"]]);export{S as default};
