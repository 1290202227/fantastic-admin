
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as d}from"./index.f14483a3.js";import{_ as i}from"./index.341e7229.js";import a from"./alert.be8e8641.js";import{_}from"./index.6da96519.js";import{A as s,k as f,D as e,C as u,o as V}from"./vendor.ab59999c.js";const c={components:{Alert:a},data(){return{num:1,num2:1,num3:5,num4:1,num5:1}}};function x(b,n,g,j,l,U){const r=s("Alert"),p=i,m=s("el-input-number"),t=d;return V(),f("div",null,[e(r),e(p,{title:"\u8BA1\u6570\u5668"}),e(t,{title:"\u57FA\u7840\u7528\u6CD5",class:"demo"},{default:u(()=>[e(m,{modelValue:l.num,"onUpdate:modelValue":n[0]||(n[0]=o=>l.num=o),min:1,max:10,label:"\u63CF\u8FF0\u6587\u5B57"},null,8,["modelValue"])]),_:1}),e(t,{title:"\u7981\u7528\u72B6\u6001",class:"demo"},{default:u(()=>[e(m,{modelValue:l.num2,"onUpdate:modelValue":n[1]||(n[1]=o=>l.num2=o),disabled:!0},null,8,["modelValue"])]),_:1}),e(t,{title:"\u6B65\u6570",class:"demo"},{default:u(()=>[e(m,{modelValue:l.num3,"onUpdate:modelValue":n[2]||(n[2]=o=>l.num3=o),step:2},null,8,["modelValue"])]),_:1}),e(t,{title:"\u7CBE\u5EA6",class:"demo"},{default:u(()=>[e(m,{modelValue:l.num4,"onUpdate:modelValue":n[3]||(n[3]=o=>l.num4=o),precision:2,step:.1,max:10},null,8,["modelValue","step"])]),_:1}),e(t,{title:"\u6309\u94AE\u4F4D\u7F6E",class:"demo"},{default:u(()=>[e(m,{modelValue:l.num5,"onUpdate:modelValue":n[4]||(n[4]=o=>l.num5=o),"controls-position":"right",min:1,max:10},null,8,["modelValue"])]),_:1})])}var w=_(c,[["render",x]]);export{w as default};
