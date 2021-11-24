
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as a}from"./index.02bab77b.js";import{_ as d}from"./index.10cae236.js";import i from"./alert.1b4ee25b.js";import{_}from"./plugin-vue_export-helper.5a098b48.js";import{r as s,a as V,x as f,C as e,D as u}from"./vendor.5c97c969.js";const c={components:{Alert:i},data(){return{num:1,num2:1,num3:5,num4:1,num5:1}}};function b(x,l,g,j,n,v){const r=s("Alert"),p=d,m=s("el-input-number"),t=a;return V(),f("div",null,[e(r),e(p,{title:"\u8BA1\u6570\u5668"}),e(t,{title:"\u57FA\u7840\u7528\u6CD5",class:"demo"},{default:u(()=>[e(m,{modelValue:n.num,"onUpdate:modelValue":l[0]||(l[0]=o=>n.num=o),min:1,max:10,label:"\u63CF\u8FF0\u6587\u5B57"},null,8,["modelValue"])]),_:1}),e(t,{title:"\u7981\u7528\u72B6\u6001",class:"demo"},{default:u(()=>[e(m,{modelValue:n.num2,"onUpdate:modelValue":l[1]||(l[1]=o=>n.num2=o),disabled:!0},null,8,["modelValue"])]),_:1}),e(t,{title:"\u6B65\u6570",class:"demo"},{default:u(()=>[e(m,{modelValue:n.num3,"onUpdate:modelValue":l[2]||(l[2]=o=>n.num3=o),step:2},null,8,["modelValue"])]),_:1}),e(t,{title:"\u7CBE\u5EA6",class:"demo"},{default:u(()=>[e(m,{modelValue:n.num4,"onUpdate:modelValue":l[3]||(l[3]=o=>n.num4=o),precision:2,step:.1,max:10},null,8,["modelValue","step"])]),_:1}),e(t,{title:"\u6309\u94AE\u4F4D\u7F6E",class:"demo"},{default:u(()=>[e(m,{modelValue:n.num5,"onUpdate:modelValue":l[4]||(l[4]=o=>n.num5=o),"controls-position":"right",min:1,max:10},null,8,["modelValue"])]),_:1})])}var w=_(c,[["render",b]]);export{w as default};
