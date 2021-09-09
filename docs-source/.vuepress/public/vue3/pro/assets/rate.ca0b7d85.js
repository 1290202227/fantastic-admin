
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.ffbd20e5.js";import{_ as l}from"./index.f03e52fd.js";import a from"./alert.ccf4f325.js";import{r as t,l as o,J as u,s as d,n as s}from"./vendor.7707186e.js";const m={components:{Alert:a},data:()=>({value1:null,value2:null,value3:3.7})};m.render=function(a,m,r,n,f,i){const c=t("Alert"),v=e,p=t("el-rate"),V=l;return o(),u("div",null,[d(c),d(v,{title:"评分"}),d(V,{title:"基础用法",class:"demo"},{default:s((()=>[d(p,{modelValue:f.value1,"onUpdate:modelValue":m[0]||(m[0]=e=>f.value1=e)},null,8,["modelValue"])])),_:1}),d(V,{title:"辅助文字",class:"demo"},{default:s((()=>[d(p,{modelValue:f.value2,"onUpdate:modelValue":m[1]||(m[1]=e=>f.value2=e),"show-text":"",texts:["极差","差","一般","好","极好"]},null,8,["modelValue"])])),_:1}),d(V,{title:"只读",class:"demo"},{default:s((()=>[d(p,{modelValue:f.value3,"onUpdate:modelValue":m[2]||(m[2]=e=>f.value3=e),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])])),_:1})])};export{m as default};
