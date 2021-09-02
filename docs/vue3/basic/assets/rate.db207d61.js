
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.1ee7394a.js";import{_ as l}from"./index.e2b18078.js";import a from"./alert.6f9123e2.js";import{r as t,k as o,n as u,q as d,o as s}from"./vendor.e2e92bee.js";const m={components:{Alert:a},data:()=>({value1:null,value2:null,value3:3.7})};m.render=function(a,m,r,n,i,f){const v=t("Alert"),c=e,p=t("el-rate"),V=l;return s(),o("div",null,[u(v),u(c,{title:"评分"}),u(V,{title:"基础用法",class:"demo"},{default:d((()=>[u(p,{modelValue:i.value1,"onUpdate:modelValue":m[0]||(m[0]=e=>i.value1=e)},null,8,["modelValue"])])),_:1}),u(V,{title:"辅助文字",class:"demo"},{default:d((()=>[u(p,{modelValue:i.value2,"onUpdate:modelValue":m[1]||(m[1]=e=>i.value2=e),"show-text":"",texts:["极差","差","一般","好","极好"]},null,8,["modelValue"])])),_:1}),u(V,{title:"只读",class:"demo"},{default:d((()=>[u(p,{modelValue:i.value3,"onUpdate:modelValue":m[2]||(m[2]=e=>i.value3=e),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])])),_:1})])};export{m as default};
