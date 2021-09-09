
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.ffbd20e5.js";import{_ as l}from"./index.f03e52fd.js";import a from"./alert.ccf4f325.js";import{r as t,l as o,J as d,s as u,n as s}from"./vendor.7707186e.js";const m={components:{Alert:a},data:()=>({value:!0,value1:!0,value2:!0,value3:!1})};m.render=function(a,m,n,i,r,v){const c=t("Alert"),f=e,V=t("el-switch"),p=l;return o(),d("div",null,[u(c),u(f,{title:"开关"}),u(p,{title:"基础用法",class:"demo"},{default:s((()=>[u(V,{modelValue:r.value,"onUpdate:modelValue":m[0]||(m[0]=e=>r.value=e),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])),_:1}),u(p,{title:"文字描述",class:"demo"},{default:s((()=>[u(V,{modelValue:r.value1,"onUpdate:modelValue":m[1]||(m[1]=e=>r.value1=e),"active-text":"按月付费","inactive-text":"按年付费"},null,8,["modelValue"])])),_:1}),u(p,{title:"禁用状态",class:"demo"},{default:s((()=>[u(V,{modelValue:r.value2,"onUpdate:modelValue":m[2]||(m[2]=e=>r.value2=e),disabled:"",style:{"margin-right":"10px"}},null,8,["modelValue"]),u(V,{modelValue:r.value3,"onUpdate:modelValue":m[3]||(m[3]=e=>r.value3=e),disabled:""},null,8,["modelValue"])])),_:1})])};export{m as default};
