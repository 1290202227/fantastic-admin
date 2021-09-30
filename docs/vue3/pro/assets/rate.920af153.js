
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.9fbc5cc3.js";import{_ as l}from"./index.c535d87f.js";import a from"./alert.9ebac125.js";import{_ as t}from"./plugin-vue_export-helper.5a098b48.js";import{r as o,l as u,H as d,s,n as r}from"./vendor.e59ac5d6.js";var m=t({components:{Alert:a},data:()=>({value1:null,value2:null,value3:3.7})},[["render",function(a,t,m,n,c,i){const f=o("Alert"),p=e,v=o("el-rate"),V=l;return u(),d("div",null,[s(f),s(p,{title:"评分"}),s(V,{title:"基础用法",class:"demo"},{default:r((()=>[s(v,{modelValue:c.value1,"onUpdate:modelValue":t[0]||(t[0]=e=>c.value1=e)},null,8,["modelValue"])])),_:1}),s(V,{title:"辅助文字",class:"demo"},{default:r((()=>[s(v,{modelValue:c.value2,"onUpdate:modelValue":t[1]||(t[1]=e=>c.value2=e),"show-text":"",texts:["极差","差","一般","好","极好"]},null,8,["modelValue"])])),_:1}),s(V,{title:"只读",class:"demo"},{default:r((()=>[s(v,{modelValue:c.value3,"onUpdate:modelValue":t[2]||(t[2]=e=>c.value3=e),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])])),_:1})])}]]);export{m as default};
