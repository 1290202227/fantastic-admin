
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./index.96603fff.js";import{_ as c}from"./index.d1dc7e72.js";import V from"./alert.e09f7712.js";import{_ as k}from"./index.0f7a313d.js";import{B as b,l as t,F as u,D as n,o as a,a3 as d,a2 as p,C as m}from"./vendor.b17bec21.js";const x={components:{Alert:V},data(){return{options1:[{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E"},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D"}],value1:"",options2:[{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976",disabled:!0},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E"},{value:"\u9009\u98794",label:"\u9F99\u987B\u9762"},{value:"\u9009\u98795",label:"\u5317\u4EAC\u70E4\u9E2D"}],value2:"",value3:[]}}};function y(U,o,g,j,e,B){const _=b("Alert"),f=c,r=b("el-option"),s=b("el-select"),v=i;return a(),t("div",null,[u(_),u(f,{title:"\u9009\u62E9\u5668"}),u(v,{title:"\u57FA\u7840\u7528\u6CD5",class:"demo"},{default:n(()=>[u(s,{modelValue:e.value1,"onUpdate:modelValue":o[0]||(o[0]=l=>e.value1=l),placeholder:"\u8BF7\u9009\u62E9"},{default:n(()=>[(a(!0),t(d,null,p(e.options1,l=>(a(),m(r,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(v,{title:"\u6709\u7981\u7528\u9009\u9879",class:"demo"},{default:n(()=>[u(s,{modelValue:e.value2,"onUpdate:modelValue":o[1]||(o[1]=l=>e.value2=l),placeholder:"\u8BF7\u9009\u62E9"},{default:n(()=>[(a(!0),t(d,null,p(e.options2,l=>(a(),m(r,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(v,{title:"\u7981\u7528\u72B6\u6001",class:"demo"},{default:n(()=>[u(s,{modelValue:e.value1,"onUpdate:modelValue":o[2]||(o[2]=l=>e.value1=l),disabled:"",placeholder:"\u8BF7\u9009\u62E9"},{default:n(()=>[(a(!0),t(d,null,p(e.options1,l=>(a(),m(r,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(v,{title:"\u53EF\u6E05\u7A7A\u5355\u9009",class:"demo"},{default:n(()=>[u(s,{modelValue:e.value1,"onUpdate:modelValue":o[3]||(o[3]=l=>e.value1=l),clearable:"",placeholder:"\u8BF7\u9009\u62E9"},{default:n(()=>[(a(!0),t(d,null,p(e.options1,l=>(a(),m(r,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(v,{title:"\u57FA\u7840\u591A\u9009",class:"demo"},{default:n(()=>[u(s,{modelValue:e.value3,"onUpdate:modelValue":o[4]||(o[4]=l=>e.value3=l),multiple:"",placeholder:"\u8BF7\u9009\u62E9"},{default:n(()=>[(a(!0),t(d,null,p(e.options1,l=>(a(),m(r,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(v,{title:"\u53EF\u641C\u7D22",class:"demo"},{default:n(()=>[u(s,{modelValue:e.value1,"onUpdate:modelValue":o[5]||(o[5]=l=>e.value1=l),filterable:"",placeholder:"\u8BF7\u9009\u62E9"},{default:n(()=>[(a(!0),t(d,null,p(e.options1,l=>(a(),m(r,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})])}var E=k(x,[["render",y]]);export{E as default};