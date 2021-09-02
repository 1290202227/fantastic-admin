
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{a as e}from"./index.13e5accc.js";import{r as a,o as l,z as o,i as d}from"./vendor.b5a7373b.js";const s={name:"CascaderArea",props:{modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],data:()=>({options:e,props:{value:"code",label:"name"}}),computed:{myValue:{get:function(){const a=[];if(3===this.modelValue.length){const[l,o,d]=this.modelValue;e.map((e=>{e.name===l&&(a.push(e.code),e.children.map((e=>{e.name===o&&(a.push(e.code),e.children.map((e=>{e.name===d&&a.push(e.code)})))})))}))}return a},set:function(a){if(a){let[l,o,d]=a;e.map((e=>{e.code===l&&(l=e.name,e.children.map((e=>{e.code===o&&(o=e.name,e.children.map((e=>{e.code===d&&(d=e.name)})))})))})),this.$emit("update:modelValue",[l,o,d])}else this.$emit("update:modelValue",[])}}}};s.render=function(e,s,t,n,i,p){const m=a("el-cascader");return l(),o("div",null,[d(m,{modelValue:p.myValue,"onUpdate:modelValue":s[0]||(s[0]=e=>p.myValue=e),options:i.options,props:i.props,size:t.size,disabled:t.disabled,clearable:"",filterable:""},null,8,["modelValue","options","props","size","disabled"])])},s.__scopeId="data-v-f07e7b8c";export{s as _};
