
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d0cc88c3.js";import{_ as l}from"./index.34d43001.js";import a from"./alert.8665eb23.js";import{r as t,a as o,s as u,y as d,z as s}from"./vendor.ebf75cd4.js";const m={components:{Alert:a},data:()=>({value1:null,value2:null,value3:3.7})};m.render=function(a,m,r,n,c,i){const f=t("Alert"),v=e,p=t("el-rate"),V=l;return o(),u("div",null,[d(f),d(v,{title:"评分"}),d(V,{title:"基础用法",class:"demo"},{default:s((()=>[d(p,{modelValue:c.value1,"onUpdate:modelValue":m[0]||(m[0]=e=>c.value1=e)},null,8,["modelValue"])])),_:1}),d(V,{title:"辅助文字",class:"demo"},{default:s((()=>[d(p,{modelValue:c.value2,"onUpdate:modelValue":m[1]||(m[1]=e=>c.value2=e),"show-text":"",texts:["极差","差","一般","好","极好"]},null,8,["modelValue"])])),_:1}),d(V,{title:"只读",class:"demo"},{default:s((()=>[d(p,{modelValue:c.value3,"onUpdate:modelValue":m[2]||(m[2]=e=>c.value3=e),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])])),_:1})])};export{m as default};
