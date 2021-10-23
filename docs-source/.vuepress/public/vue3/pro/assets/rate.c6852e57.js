
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as p}from"./index.b2fe0119.js";import{_}from"./index.4fbd32c6.js";import d from"./alert.812c211a.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";import{r,l as c,J as f,s as e,n as a}from"./vendor.9f126d3c.js";const v={components:{Alert:d},data(){return{value1:null,value2:null,value3:3.7}}};function x(V,l,g,j,o,b){const u=r("Alert"),m=_,n=r("el-rate"),s=p;return c(),f("div",null,[e(u),e(m,{title:"\u8BC4\u5206"}),e(s,{title:"\u57FA\u7840\u7528\u6CD5",class:"demo"},{default:a(()=>[e(n,{modelValue:o.value1,"onUpdate:modelValue":l[0]||(l[0]=t=>o.value1=t)},null,8,["modelValue"])]),_:1}),e(s,{title:"\u8F85\u52A9\u6587\u5B57",class:"demo"},{default:a(()=>[e(n,{modelValue:o.value2,"onUpdate:modelValue":l[1]||(l[1]=t=>o.value2=t),"show-text":"",texts:["\u6781\u5DEE","\u5DEE","\u4E00\u822C","\u597D","\u6781\u597D"]},null,8,["modelValue"])]),_:1}),e(s,{title:"\u53EA\u8BFB",class:"demo"},{default:a(()=>[e(n,{modelValue:o.value3,"onUpdate:modelValue":l[2]||(l[2]=t=>o.value3=t),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])]),_:1})])}var C=i(v,[["render",x]]);export{C as default};
