
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{a as e}from"./index.15daa332.js";import{$ as a,j as l,r as d,n as o,J as s,q as p,m as t,a9 as n}from"./vendor.3dac1dfd.js";const m={props:{modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(m,{emit:u}){const r=m,i=a({options:e,props:{value:"code",label:"name"}}),c=l({get:()=>{const a=[];if(3===r.modelValue.length){const[l,d,o]=r.modelValue;e.map((e=>{e.name===l&&(a.push(e.code),e.children.map((e=>{e.name===d&&(a.push(e.code),e.children.map((e=>{e.name===o&&a.push(e.code)})))})))}))}return a},set:a=>{if(a){let[l,d,o]=a;e.map((e=>{e.code===l&&(l=e.name,e.children.map((e=>{e.code===d&&(d=e.name,e.children.map((e=>{e.code===o&&(o=e.name)})))})))})),u("update:modelValue",[l,d,o])}else u("update:modelValue",[])}});return(e,a)=>{const l=d("el-cascader");return o(),s("div",null,[p(l,{modelValue:t(c),"onUpdate:modelValue":a[0]||(a[0]=e=>n(c)?c.value=e:null),options:i.value.options,props:i.value.props,size:m.size,disabled:m.disabled,clearable:"",filterable:""},null,8,["modelValue","options","props","size","disabled"])])}},__scopeId:"data-v-ee3d0b70"};export{m as _};
