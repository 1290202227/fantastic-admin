
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as m}from"./index.3e3f69e0.js";import{_ as u}from"./index.fce7b427.js";import i from"./alert.c49d25d3.js";import{_}from"./plugin-vue_export-helper.5a098b48.js";import{r as d,m as c,Q as f,t as e,q as r,R as v}from"./vendor.3faf3917.js";const V={components:{Alert:i},data(){return{value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""}}},g=v("div",null,"\u8D77\u59CB\u65E5\u671F\u65F6\u523B\u4E3A 12:00:00\uFF0C\u7ED3\u675F\u65E5\u671F\u65F6\u523B\u4E3A 08:00:00",-1);function x(h,t,j,k,l,w){const p=d("Alert"),s=u,a=d("el-date-picker"),n=m;return c(),f("div",null,[e(p),e(s,{title:"\u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668"}),e(n,{title:"\u65E5\u671F\u548C\u65F6\u95F4\u70B9",class:"demo"},{default:r(()=>[e(a,{modelValue:l.value1,"onUpdate:modelValue":t[0]||(t[0]=o=>l.value1=o),type:"datetime",placeholder:"\u9009\u62E9\u65E5\u671F\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),e(n,{title:"\u65E5\u671F\u548C\u65F6\u95F4\u8303\u56F4",class:"demo"},{default:r(()=>[e(a,{modelValue:l.value2,"onUpdate:modelValue":t[1]||(t[1]=o=>l.value2=o),type:"datetimerange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue"])]),_:1}),e(n,{title:"\u9ED8\u8BA4\u7684\u8D77\u59CB\u4E0E\u7ED3\u675F\u65F6\u523B",class:"demo"},{default:r(()=>[g,e(a,{modelValue:l.value3,"onUpdate:modelValue":t[2]||(t[2]=o=>l.value3=o),type:"datetimerange",align:"right","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])]),_:1})])}var b=_(V,[["render",x]]);export{b as default};