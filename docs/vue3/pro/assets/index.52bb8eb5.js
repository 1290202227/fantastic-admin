
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{a as r}from"./index.3f3a0e66.js";import{_ as c}from"./plugin-vue_export-helper.5a098b48.js";import{P as f,l as _,r as v,m as V,Q as b,t as h,s as y,ag as g}from"./vendor.3faf3917.js";const x={props:{modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(n,{emit:m}){const u=n,i=f({options:r,props:{value:"code",label:"name"}}),p=_({get:()=>{const e=[];if(u.modelValue.length===3){const[a,o,l]=u.modelValue;r.map(s=>{s.name===a&&(e.push(s.code),s.children.map(d=>{d.name===o&&(e.push(d.code),d.children.map(t=>{t.name===l&&e.push(t.code)}))}))})}return e},set:e=>{if(e){let[a,o,l]=e;r.map(s=>{s.code===a&&(a=s.name,s.children.map(d=>{d.code===o&&(o=d.name,d.children.map(t=>{t.code===l&&(l=t.name)}))}))}),m("update:modelValue",[a,o,l])}else m("update:modelValue",[])}});return(e,a)=>{const o=v("el-cascader");return V(),b("div",null,[h(o,{modelValue:y(p),"onUpdate:modelValue":a[0]||(a[0]=l=>g(p)?p.value=l:null),options:i.value.options,props:i.value.props,size:n.size,disabled:n.disabled,clearable:"",filterable:""},null,8,["modelValue","options","props","size","disabled"])])}}};var j=c(x,[["__scopeId","data-v-38de14e2"]]);export{j as _};
