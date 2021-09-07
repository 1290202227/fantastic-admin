
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.407496b8.js";import{_ as l}from"./index.fb938e69.js";import a from"./alert.3c72a7cb.js";import{r as t,a as o,s as u,y as s,z as d}from"./vendor.505a4e11.js";const m={components:{Alert:a},data:()=>({value1:null,value2:null,value3:3.7})};m.render=function(a,m,r,n,i,c){const f=t("Alert"),v=e,p=t("el-rate"),V=l;return o(),u("div",null,[s(f),s(v,{title:"评分"}),s(V,{title:"基础用法",class:"demo"},{default:d((()=>[s(p,{modelValue:i.value1,"onUpdate:modelValue":m[0]||(m[0]=e=>i.value1=e)},null,8,["modelValue"])])),_:1}),s(V,{title:"辅助文字",class:"demo"},{default:d((()=>[s(p,{modelValue:i.value2,"onUpdate:modelValue":m[1]||(m[1]=e=>i.value2=e),"show-text":"",texts:["极差","差","一般","好","极好"]},null,8,["modelValue"])])),_:1}),s(V,{title:"只读",class:"demo"},{default:d((()=>[s(p,{modelValue:i.value3,"onUpdate:modelValue":m[2]||(m[2]=e=>i.value3=e),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])])),_:1})])};export{m as default};
