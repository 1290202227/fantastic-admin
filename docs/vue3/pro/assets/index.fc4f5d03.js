
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{a as e}from"./index.9c2de28b.js";import{$ as a,k as l,r as o,l as s,J as d,s as p,q as t,a9 as n}from"./vendor.7707186e.js";const u={props:{modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(u,{emit:m}){const r=u,i=a({options:e,props:{value:"code",label:"name"}}),c=l({get:()=>{const a=[];if(3===r.modelValue.length){const[l,o,s]=r.modelValue;e.map((e=>{e.name===l&&(a.push(e.code),e.children.map((e=>{e.name===o&&(a.push(e.code),e.children.map((e=>{e.name===s&&a.push(e.code)})))})))}))}return a},set:a=>{if(a){let[l,o,s]=a;e.map((e=>{e.code===l&&(l=e.name,e.children.map((e=>{e.code===o&&(o=e.name,e.children.map((e=>{e.code===s&&(s=e.name)})))})))})),m("update:modelValue",[l,o,s])}else m("update:modelValue",[])}});return(e,a)=>{const l=o("el-cascader");return s(),d("div",null,[p(l,{modelValue:t(c),"onUpdate:modelValue":a[0]||(a[0]=e=>n(c)?c.value=e:null),options:i.value.options,props:i.value.props,size:u.size,disabled:u.disabled,clearable:"",filterable:""},null,8,["modelValue","options","props","size","disabled"])])}},__scopeId:"data-v-38de14e2"};export{u as _};
