
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as d}from"./index.d582d8b9.js";import{_ as i}from"./index.74c77f42.js";import p from"./alert.d884e5ab.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,b as c,G as v,g as e,f as a}from"./vendor.0ce66e7d.js";const f={components:{Alert:p},data(){return{value:!0,value1:!0,value2:!0,value3:!1}}};function V(x,l,g,b,o,j){const r=s("Alert"),m=i,n=s("el-switch"),u=d;return c(),v("div",null,[e(r),e(m,{title:"\u5F00\u5173"}),e(u,{title:"\u57FA\u7840\u7528\u6CD5",class:"demo"},{default:a(()=>[e(n,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=t=>o.value=t),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])]),_:1}),e(u,{title:"\u6587\u5B57\u63CF\u8FF0",class:"demo"},{default:a(()=>[e(n,{modelValue:o.value1,"onUpdate:modelValue":l[1]||(l[1]=t=>o.value1=t),"active-text":"\u6309\u6708\u4ED8\u8D39","inactive-text":"\u6309\u5E74\u4ED8\u8D39"},null,8,["modelValue"])]),_:1}),e(u,{title:"\u7981\u7528\u72B6\u6001",class:"demo"},{default:a(()=>[e(n,{modelValue:o.value2,"onUpdate:modelValue":l[2]||(l[2]=t=>o.value2=t),disabled:"",style:{"margin-right":"10px"}},null,8,["modelValue"]),e(n,{modelValue:o.value3,"onUpdate:modelValue":l[3]||(l[3]=t=>o.value3=t),disabled:""},null,8,["modelValue"])]),_:1})])}var C=_(f,[["render",V]]);export{C as default};