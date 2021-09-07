
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.407496b8.js";import{_ as l}from"./index.fb938e69.js";import a from"./alert.3c72a7cb.js";import{r as t,a as o,s as u,y as d,z as s}from"./vendor.505a4e11.js";const m={components:{Alert:a},data:()=>({value:!0,value1:!0,value2:!0,value3:!1})};m.render=function(a,m,i,n,r,v){const c=t("Alert"),f=e,V=t("el-switch"),p=l;return o(),u("div",null,[d(c),d(f,{title:"开关"}),d(p,{title:"基础用法",class:"demo"},{default:s((()=>[d(V,{modelValue:r.value,"onUpdate:modelValue":m[0]||(m[0]=e=>r.value=e),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])),_:1}),d(p,{title:"文字描述",class:"demo"},{default:s((()=>[d(V,{modelValue:r.value1,"onUpdate:modelValue":m[1]||(m[1]=e=>r.value1=e),"active-text":"按月付费","inactive-text":"按年付费"},null,8,["modelValue"])])),_:1}),d(p,{title:"禁用状态",class:"demo"},{default:s((()=>[d(V,{modelValue:r.value2,"onUpdate:modelValue":m[2]||(m[2]=e=>r.value2=e),disabled:"",style:{"margin-right":"10px"}},null,8,["modelValue"]),d(V,{modelValue:r.value3,"onUpdate:modelValue":m[3]||(m[3]=e=>r.value3=e),disabled:""},null,8,["modelValue"])])),_:1})])};export{m as default};
