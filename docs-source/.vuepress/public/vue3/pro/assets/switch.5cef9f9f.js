
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d7acb132.js";import{_ as l}from"./index.6d456c03.js";import a from"./alert.fe02bd6f.js";import{_ as t}from"./plugin-vue_export-helper.5a098b48.js";import{r as o,l as u,H as d,s as m,n as r}from"./vendor.1e0be253.js";var s=t({components:{Alert:a},data:()=>({value:!0,value1:!0,value2:!0,value3:!1})},[["render",function(a,t,s,i,n,v){const c=o("Alert"),p=e,f=o("el-switch"),V=l;return u(),d("div",null,[m(c),m(p,{title:"开关"}),m(V,{title:"基础用法",class:"demo"},{default:r((()=>[m(f,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])),_:1}),m(V,{title:"文字描述",class:"demo"},{default:r((()=>[m(f,{modelValue:n.value1,"onUpdate:modelValue":t[1]||(t[1]=e=>n.value1=e),"active-text":"按月付费","inactive-text":"按年付费"},null,8,["modelValue"])])),_:1}),m(V,{title:"禁用状态",class:"demo"},{default:r((()=>[m(f,{modelValue:n.value2,"onUpdate:modelValue":t[2]||(t[2]=e=>n.value2=e),disabled:"",style:{"margin-right":"10px"}},null,8,["modelValue"]),m(f,{modelValue:n.value3,"onUpdate:modelValue":t[3]||(t[3]=e=>n.value3=e),disabled:""},null,8,["modelValue"])])),_:1})])}]]);export{s as default};
