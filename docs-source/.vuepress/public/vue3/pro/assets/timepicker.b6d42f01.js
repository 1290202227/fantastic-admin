
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d7acb132.js";import{_ as l}from"./index.6d456c03.js";import d from"./alert.fe02bd6f.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";import{r as t,l as s,H as o,s as i,n as r}from"./vendor.1e0be253.js";const n=(e,l)=>{const d=[];for(let a=e;a<=l;a++)d.push(a);return d};var m=a({components:{Alert:d},data:()=>({value:"",value1:new Date(2016,9,10,18,40),startTime:"",endTime:""}),methods:{disabledHours:()=>n(0,16).concat(n(19,23)),disabledMinutes:e=>17===e?n(0,29):18===e?n(31,59):void 0,disabledSeconds(e,l){if(18===e&&30===l)return n(1,59)}}},[["render",function(d,a,n,m,u,p){const c=t("Alert"),b=e,f=t("el-time-select"),V=l,v=t("el-time-picker");return s(),o("div",null,[i(c),i(b,{title:"时间选择器"}),i(V,{title:"固定时间点",class:"demo"},{default:r((()=>[i(f,{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=e=>u.value=e),start:"08:30",step:"00:15",end:"18:30",placeholder:"选择时间"},null,8,["modelValue"])])),_:1}),i(V,{title:"任意时间点",class:"demo"},{default:r((()=>[i(v,{modelValue:u.value1,"onUpdate:modelValue":a[1]||(a[1]=e=>u.value1=e),"disabled-hours":p.disabledHours,"disabled-minutes":p.disabledMinutes,"disabled-seconds":p.disabledSeconds,placeholder:"任意时间点"},null,8,["modelValue","disabled-hours","disabled-minutes","disabled-seconds"])])),_:1}),i(V,{title:"固定时间范围",class:"demo"},{default:r((()=>[i(f,{modelValue:u.startTime,"onUpdate:modelValue":a[2]||(a[2]=e=>u.startTime=e),placeholder:"起始时间",start:"08:30",step:"00:15",end:"18:30",style:{"margin-right":"10px"}},null,8,["modelValue"]),i(f,{modelValue:u.endTime,"onUpdate:modelValue":a[3]||(a[3]=e=>u.endTime=e),placeholder:"结束时间",start:"08:30",step:"00:15",end:"18:30","min-time":u.startTime},null,8,["modelValue","min-time"])])),_:1})])}]]);export{m as default};
