
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as h}from"./index.5f221687.js";import{_ as x}from"./index.d96988fa.js";import g from"./alert.5127d460.js";import{_ as U}from"./plugin-vue_export-helper.5a098b48.js";import{r,a as c,q as m,x as l,y as d,R as i,S as p,H as u,c as _,D as k}from"./vendor.a7ae286b.js";const C=["\u4E0A\u6D77","\u5317\u4EAC","\u5E7F\u5DDE","\u6DF1\u5733"],j={components:{Alert:g},data(){return{checked:!0,checked1:!1,checked2:!0,checkList:["\u9009\u4E2D\u4E14\u7981\u7528","\u590D\u9009\u6846 A"],checkedCities:["\u4E0A\u6D77","\u5317\u4EAC"],cities:C,checkboxGroup1:["\u4E0A\u6D77"],checked3:!0,checked4:!1}}},v=u("\u5907\u9009\u9879"),A=u("\u5907\u9009\u98791"),B=u("\u5907\u9009\u9879");function L(G,t,D,N,o,S){const b=r("Alert"),f=x,s=r("el-checkbox"),n=h,a=r("el-checkbox-group"),V=r("el-checkbox-button");return c(),m("div",null,[l(b),l(f,{title:"\u591A\u9009\u6846"}),l(n,{title:"\u57FA\u7840\u7528\u6CD5",class:"demo"},{default:d(()=>[l(s,{modelValue:o.checked,"onUpdate:modelValue":t[0]||(t[0]=e=>o.checked=e)},{default:d(()=>[v]),_:1},8,["modelValue"])]),_:1}),l(n,{title:"\u7981\u7528\u72B6\u6001",class:"demo"},{default:d(()=>[l(s,{modelValue:o.checked1,"onUpdate:modelValue":t[1]||(t[1]=e=>o.checked1=e),disabled:""},{default:d(()=>[A]),_:1},8,["modelValue"]),l(s,{modelValue:o.checked2,"onUpdate:modelValue":t[2]||(t[2]=e=>o.checked2=e),disabled:""},{default:d(()=>[B]),_:1},8,["modelValue"])]),_:1}),l(n,{title:"\u591A\u9009\u6846\u7EC4",class:"demo"},{default:d(()=>[l(a,{modelValue:o.checkList,"onUpdate:modelValue":t[3]||(t[3]=e=>o.checkList=e)},{default:d(()=>[l(s,{label:"\u590D\u9009\u6846 A"}),l(s,{label:"\u590D\u9009\u6846 B"}),l(s,{label:"\u590D\u9009\u6846 C"}),l(s,{label:"\u7981\u7528",disabled:""}),l(s,{label:"\u9009\u4E2D\u4E14\u7981\u7528",disabled:""})]),_:1},8,["modelValue"])]),_:1}),l(n,{title:"\u53EF\u9009\u9879\u76EE\u6570\u91CF\u7684\u9650\u5236",class:"demo"},{default:d(()=>[l(a,{modelValue:o.checkedCities,"onUpdate:modelValue":t[4]||(t[4]=e=>o.checkedCities=e),min:1,max:2},{default:d(()=>[(c(!0),m(i,null,p(o.cities,e=>(c(),_(s,{key:e,label:e},{default:d(()=>[u(k(e),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(n,{title:"\u6309\u94AE\u6837\u5F0F",class:"demo"},{default:d(()=>[l(a,{modelValue:o.checkboxGroup1,"onUpdate:modelValue":t[5]||(t[5]=e=>o.checkboxGroup1=e)},{default:d(()=>[(c(!0),m(i,null,p(o.cities,e=>(c(),_(V,{key:e,label:e},{default:d(()=>[u(k(e),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(n,{title:"\u5E26\u6709\u8FB9\u6846",class:"demo"},{default:d(()=>[l(s,{modelValue:o.checked3,"onUpdate:modelValue":t[6]||(t[6]=e=>o.checked3=e),label:"\u5907\u9009\u98791",border:""},null,8,["modelValue"]),l(s,{modelValue:o.checked4,"onUpdate:modelValue":t[7]||(t[7]=e=>o.checked4=e),label:"\u5907\u9009\u98792",border:""},null,8,["modelValue"])]),_:1})])}var H=U(j,[["render",L]]);export{H as default};
