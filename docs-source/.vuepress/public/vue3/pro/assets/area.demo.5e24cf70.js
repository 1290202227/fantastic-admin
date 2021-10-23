
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as c}from"./index.b2fe0119.js";import{_ as f}from"./index.98e17859.js";import{_ as x}from"./index.4fbd32c6.js";import{_ as g}from"./plugin-vue_export-helper.5a098b48.js";import{r as a,l as b,J as v,s as e,n as r,U as F}from"./vendor.9f126d3c.js";import"./index.be8d4237.js";const V={name:"ComponentExampleArea",props:{},data(){return{area:["\u6D59\u6C5F\u7701","\u676D\u5DDE\u5E02","\u897F\u6E56\u533A"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"\u8BF7\u9009\u62E9\u5730\u533A",trigger:"change"}]}}},created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate(l=>{l&&alert("\u63D0\u4EA4\u6210\u529F")})}}},j=F("\u63D0\u4EA4");function y(l,t,C,h,o,u){const p=x,_=f,m=c,s=a("el-form-item"),d=a("el-button"),i=a("el-form");return b(),v("div",null,[e(p,{title:"\u7701\u5E02\u533A\u8054\u52A8",content:"CascaderArea"}),e(m,null,{default:r(()=>[e(_,{modelValue:o.area,"onUpdate:modelValue":t[0]||(t[0]=n=>o.area=n)},null,8,["modelValue"])]),_:1}),e(m,{title:"\u8868\u5355\u9A8C\u8BC1"},{default:r(()=>[e(i,{ref:"ruleForm",model:o.ruleForm,rules:o.rules},{default:r(()=>[e(s,{label:"\u5730\u533A",prop:"area"},{default:r(()=>[e(_,{modelValue:o.ruleForm.area,"onUpdate:modelValue":t[1]||(t[1]=n=>o.ruleForm.area=n)},null,8,["modelValue"])]),_:1}),e(s,null,{default:r(()=>[e(d,{type:"primary",onClick:u.submitForm},{default:r(()=>[j]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])]),_:1})])}var q=g(V,[["render",y],["__scopeId","data-v-4e8ef6b2"]]);export{q as default};
