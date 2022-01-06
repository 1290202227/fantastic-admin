
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as p}from"./index.f14483a3.js";import{_ as d}from"./index.341e7229.js";import _ from"./alert.be8e8641.js";import{_ as i}from"./index.6da96519.js";import{A as r,k as c,D as e,C as s,o as f}from"./vendor.ab59999c.js";const v={components:{Alert:_},data(){return{value1:null,value2:null,value3:3.7}}};function x(V,l,j,g,o,A){const u=r("Alert"),m=d,n=r("el-rate"),a=p;return f(),c("div",null,[e(u),e(m,{title:"\u8BC4\u5206"}),e(a,{title:"\u57FA\u7840\u7528\u6CD5",class:"demo"},{default:s(()=>[e(n,{modelValue:o.value1,"onUpdate:modelValue":l[0]||(l[0]=t=>o.value1=t)},null,8,["modelValue"])]),_:1}),e(a,{title:"\u8F85\u52A9\u6587\u5B57",class:"demo"},{default:s(()=>[e(n,{modelValue:o.value2,"onUpdate:modelValue":l[1]||(l[1]=t=>o.value2=t),"show-text":"",texts:["\u6781\u5DEE","\u5DEE","\u4E00\u822C","\u597D","\u6781\u597D"]},null,8,["modelValue"])]),_:1}),e(a,{title:"\u53EA\u8BFB",class:"demo"},{default:s(()=>[e(n,{modelValue:o.value3,"onUpdate:modelValue":l[2]||(l[2]=t=>o.value3=t),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])]),_:1})])}var B=i(v,[["render",x]]);export{B as default};
