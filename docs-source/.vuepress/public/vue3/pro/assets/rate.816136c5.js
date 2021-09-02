
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.c1f75aed.js";import{_ as l}from"./index.29752973.js";import a from"./alert.8957d579.js";import{r as t,o,z as u,i as d,w as s}from"./vendor.b5a7373b.js";const m={components:{Alert:a},data:()=>({value1:null,value2:null,value3:3.7})};m.render=function(a,m,r,n,i,f){const v=t("Alert"),c=e,p=t("el-rate"),V=l;return o(),u("div",null,[d(v),d(c,{title:"评分"}),d(V,{title:"基础用法",class:"demo"},{default:s((()=>[d(p,{modelValue:i.value1,"onUpdate:modelValue":m[0]||(m[0]=e=>i.value1=e)},null,8,["modelValue"])])),_:1}),d(V,{title:"辅助文字",class:"demo"},{default:s((()=>[d(p,{modelValue:i.value2,"onUpdate:modelValue":m[1]||(m[1]=e=>i.value2=e),"show-text":"",texts:["极差","差","一般","好","极好"]},null,8,["modelValue"])])),_:1}),d(V,{title:"只读",class:"demo"},{default:s((()=>[d(p,{modelValue:i.value3,"onUpdate:modelValue":m[2]||(m[2]=e=>i.value3=e),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])])),_:1})])};export{m as default};
