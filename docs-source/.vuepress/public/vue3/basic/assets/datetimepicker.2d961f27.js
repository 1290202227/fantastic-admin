
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.afd122f8.js";import{_ as a}from"./index.2f66b5c7.js";import l from"./alert.cf2b47b5.js";import{_ as t}from"./plugin-vue_export-helper.5a098b48.js";import{r as d,a as o,n as r,t as u,x as n,q as m}from"./vendor.8d92a282.js";const s={components:{Alert:l},data:()=>({value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""})},i=m("div",null,"起始日期时刻为 12:00:00，结束日期时刻为 08:00:00",-1);var p=t(s,[["render",function(l,t,m,s,p,f){const c=d("Alert"),v=e,V=d("el-date-picker"),h=a;return o(),r("div",null,[u(c),u(v,{title:"日期时间选择器"}),u(h,{title:"日期和时间点",class:"demo"},{default:n((()=>[u(V,{modelValue:p.value1,"onUpdate:modelValue":t[0]||(t[0]=e=>p.value1=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),u(h,{title:"日期和时间范围",class:"demo"},{default:n((()=>[u(V,{modelValue:p.value2,"onUpdate:modelValue":t[1]||(t[1]=e=>p.value2=e),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),u(h,{title:"默认的起始与结束时刻",class:"demo"},{default:n((()=>[i,u(V,{modelValue:p.value3,"onUpdate:modelValue":t[2]||(t[2]=e=>p.value3=e),type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])])),_:1})])}]]);export{p as default};
