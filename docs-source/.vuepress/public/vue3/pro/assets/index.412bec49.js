
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{a as e}from"./index.e7a764ff.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";import{$ as l,k as o,r as s,l as d,H as p,s as t,q as r,a9 as n}from"./vendor.e59ac5d6.js";var u=a({props:{modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{emit:u}){const m=a,i=l({options:e,props:{value:"code",label:"name"}}),c=o({get:()=>{const a=[];if(3===m.modelValue.length){const[l,o,s]=m.modelValue;e.map((e=>{e.name===l&&(a.push(e.code),e.children.map((e=>{e.name===o&&(a.push(e.code),e.children.map((e=>{e.name===s&&a.push(e.code)})))})))}))}return a},set:a=>{if(a){let[l,o,s]=a;e.map((e=>{e.code===l&&(l=e.name,e.children.map((e=>{e.code===o&&(o=e.name,e.children.map((e=>{e.code===s&&(s=e.name)})))})))})),u("update:modelValue",[l,o,s])}else u("update:modelValue",[])}});return(e,l)=>{const o=s("el-cascader");return d(),p("div",null,[t(o,{modelValue:r(c),"onUpdate:modelValue":l[0]||(l[0]=e=>n(c)?c.value=e:null),options:i.value.options,props:i.value.props,size:a.size,disabled:a.disabled,clearable:"",filterable:""},null,8,["modelValue","options","props","size","disabled"])])}}},[["__scopeId","data-v-508f6864"]]);export{u as _};
