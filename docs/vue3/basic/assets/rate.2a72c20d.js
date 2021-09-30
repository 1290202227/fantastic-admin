
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.0c00e5b3.js";import{_ as l}from"./index.3fc04fb2.js";import a from"./alert.3c47ba1f.js";import{_ as t}from"./plugin-vue_export-helper.5a098b48.js";import{r as o,a as u,n as s,t as d,x as r}from"./vendor.e08917c3.js";var m=t({components:{Alert:a},data:()=>({value1:null,value2:null,value3:3.7})},[["render",function(a,t,m,n,f,i){const p=o("Alert"),v=e,c=o("el-rate"),V=l;return u(),s("div",null,[d(p),d(v,{title:"评分"}),d(V,{title:"基础用法",class:"demo"},{default:r((()=>[d(c,{modelValue:f.value1,"onUpdate:modelValue":t[0]||(t[0]=e=>f.value1=e)},null,8,["modelValue"])])),_:1}),d(V,{title:"辅助文字",class:"demo"},{default:r((()=>[d(c,{modelValue:f.value2,"onUpdate:modelValue":t[1]||(t[1]=e=>f.value2=e),"show-text":"",texts:["极差","差","一般","好","极好"]},null,8,["modelValue"])])),_:1}),d(V,{title:"只读",class:"demo"},{default:r((()=>[d(c,{modelValue:f.value3,"onUpdate:modelValue":t[2]||(t[2]=e=>f.value3=e),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])])),_:1})])}]]);export{m as default};
