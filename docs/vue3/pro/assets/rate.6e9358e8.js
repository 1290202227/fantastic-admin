
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d7acb132.js";import{_ as l}from"./index.6d456c03.js";import a from"./alert.fe02bd6f.js";import{_ as t}from"./plugin-vue_export-helper.5a098b48.js";import{r as o,l as u,H as d,s,n as r}from"./vendor.1e0be253.js";var m=t({components:{Alert:a},data:()=>({value1:null,value2:null,value3:3.7})},[["render",function(a,t,m,n,i,f){const p=o("Alert"),v=e,c=o("el-rate"),V=l;return u(),d("div",null,[s(p),s(v,{title:"评分"}),s(V,{title:"基础用法",class:"demo"},{default:r((()=>[s(c,{modelValue:i.value1,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value1=e)},null,8,["modelValue"])])),_:1}),s(V,{title:"辅助文字",class:"demo"},{default:r((()=>[s(c,{modelValue:i.value2,"onUpdate:modelValue":t[1]||(t[1]=e=>i.value2=e),"show-text":"",texts:["极差","差","一般","好","极好"]},null,8,["modelValue"])])),_:1}),s(V,{title:"只读",class:"demo"},{default:r((()=>[s(c,{modelValue:i.value3,"onUpdate:modelValue":t[2]||(t[2]=e=>i.value3=e),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])])),_:1})])}]]);export{m as default};
