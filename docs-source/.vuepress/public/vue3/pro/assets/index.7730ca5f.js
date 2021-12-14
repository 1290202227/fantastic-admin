
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as c,a as r}from"./index.fd3dd73e.js";import{r as f,x as _,A as V,o as v,j as y,D as b,u as h,ag as x}from"./vendor.0c4fd540.js";const g={props:{modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:u}){const m=t,i=f({options:r,props:{value:"code",label:"name"}}),p=_({get:()=>{const e=[];if(m.modelValue.length===3){const[a,o,l]=m.modelValue;r.map(d=>{d.name===a&&(e.push(d.code),d.children.map(s=>{s.name===o&&(e.push(s.code),s.children.map(n=>{n.name===l&&e.push(n.code)}))}))})}return e},set:e=>{if(e){let[a,o,l]=e;r.map(d=>{d.code===a&&(a=d.name,d.children.map(s=>{s.code===o&&(o=s.name,s.children.map(n=>{n.code===l&&(l=n.name)}))}))}),u("update:modelValue",[a,o,l])}else u("update:modelValue",[])}});return(e,a)=>{const o=V("el-cascader");return v(),y("div",null,[b(o,{modelValue:h(p),"onUpdate:modelValue":a[0]||(a[0]=l=>x(p)?p.value=l:null),options:i.value.options,props:i.value.props,size:t.size,disabled:t.disabled,clearable:"",filterable:""},null,8,["modelValue","options","props","size","disabled"])])}}};var N=c(g,[["__scopeId","data-v-508f6864"]]);export{N as _};
