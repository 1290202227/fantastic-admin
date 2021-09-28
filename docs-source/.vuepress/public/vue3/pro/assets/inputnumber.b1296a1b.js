
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d7acb132.js";import{_ as l}from"./index.6d456c03.js";import m from"./alert.fe02bd6f.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";import{r as u,l as o,H as n,s as t,n as d}from"./vendor.1e0be253.js";var s=a({components:{Alert:m},data:()=>({num:1,num2:1,num3:5,num4:1,num5:1})},[["render",function(m,a,s,r,i,p){const V=u("Alert"),f=e,c=u("el-input-number"),_=l;return o(),n("div",null,[t(V),t(f,{title:"计数器"}),t(_,{title:"基础用法",class:"demo"},{default:d((()=>[t(c,{modelValue:i.num,"onUpdate:modelValue":a[0]||(a[0]=e=>i.num=e),min:1,max:10,label:"描述文字"},null,8,["modelValue"])])),_:1}),t(_,{title:"禁用状态",class:"demo"},{default:d((()=>[t(c,{modelValue:i.num2,"onUpdate:modelValue":a[1]||(a[1]=e=>i.num2=e),disabled:!0},null,8,["modelValue"])])),_:1}),t(_,{title:"步数",class:"demo"},{default:d((()=>[t(c,{modelValue:i.num3,"onUpdate:modelValue":a[2]||(a[2]=e=>i.num3=e),step:2},null,8,["modelValue"])])),_:1}),t(_,{title:"精度",class:"demo"},{default:d((()=>[t(c,{modelValue:i.num4,"onUpdate:modelValue":a[3]||(a[3]=e=>i.num4=e),precision:2,step:.1,max:10},null,8,["modelValue","step"])])),_:1}),t(_,{title:"按钮位置",class:"demo"},{default:d((()=>[t(c,{modelValue:i.num5,"onUpdate:modelValue":a[4]||(a[4]=e=>i.num5=e),"controls-position":"right",min:1,max:10},null,8,["modelValue"])])),_:1})])}]]);export{s as default};
