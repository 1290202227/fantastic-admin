
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.9fbc5cc3.js";import{_ as l}from"./index.c535d87f.js";import a from"./alert.9ebac125.js";import{_ as m}from"./plugin-vue_export-helper.5a098b48.js";import{r as u,l as o,H as n,s as t,n as d}from"./vendor.e59ac5d6.js";var s=m({components:{Alert:a},data:()=>({num:1,num2:1,num3:5,num4:1,num5:1})},[["render",function(a,m,s,r,i,p){const c=u("Alert"),V=e,f=u("el-input-number"),_=l;return o(),n("div",null,[t(c),t(V,{title:"计数器"}),t(_,{title:"基础用法",class:"demo"},{default:d((()=>[t(f,{modelValue:i.num,"onUpdate:modelValue":m[0]||(m[0]=e=>i.num=e),min:1,max:10,label:"描述文字"},null,8,["modelValue"])])),_:1}),t(_,{title:"禁用状态",class:"demo"},{default:d((()=>[t(f,{modelValue:i.num2,"onUpdate:modelValue":m[1]||(m[1]=e=>i.num2=e),disabled:!0},null,8,["modelValue"])])),_:1}),t(_,{title:"步数",class:"demo"},{default:d((()=>[t(f,{modelValue:i.num3,"onUpdate:modelValue":m[2]||(m[2]=e=>i.num3=e),step:2},null,8,["modelValue"])])),_:1}),t(_,{title:"精度",class:"demo"},{default:d((()=>[t(f,{modelValue:i.num4,"onUpdate:modelValue":m[3]||(m[3]=e=>i.num4=e),precision:2,step:.1,max:10},null,8,["modelValue","step"])])),_:1}),t(_,{title:"按钮位置",class:"demo"},{default:d((()=>[t(f,{modelValue:i.num5,"onUpdate:modelValue":m[4]||(m[4]=e=>i.num5=e),"controls-position":"right",min:1,max:10},null,8,["modelValue"])])),_:1})])}]]);export{s as default};
