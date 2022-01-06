
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as c}from"./index.f14483a3.js";import{_ as f}from"./index.7f10f1d7.js";import{_ as x}from"./index.341e7229.js";import{_ as g}from"./index.6da96519.js";import{A as n,k as v,D as e,C as r,o as F,a0 as V}from"./vendor.ab59999c.js";const b={name:"ComponentExampleArea",props:{},data(){return{area:["\u6D59\u6C5F\u7701","\u676D\u5DDE\u5E02","\u897F\u6E56\u533A"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"\u8BF7\u9009\u62E9\u5730\u533A",trigger:"change"}]}}},created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate(l=>{l&&alert("\u63D0\u4EA4\u6210\u529F")})}}},C=V("\u63D0\u4EA4");function y(l,a,j,k,o,u){const d=x,_=f,m=c,s=n("el-form-item"),p=n("el-button"),i=n("el-form");return F(),v("div",null,[e(d,{title:"\u7701\u5E02\u533A\u8054\u52A8",content:"CascaderArea"}),e(m,null,{default:r(()=>[e(_,{modelValue:o.area,"onUpdate:modelValue":a[0]||(a[0]=t=>o.area=t)},null,8,["modelValue"])]),_:1}),e(m,{title:"\u8868\u5355\u9A8C\u8BC1"},{default:r(()=>[e(i,{ref:"ruleForm",model:o.ruleForm,rules:o.rules},{default:r(()=>[e(s,{label:"\u5730\u533A",prop:"area"},{default:r(()=>[e(_,{modelValue:o.ruleForm.area,"onUpdate:modelValue":a[1]||(a[1]=t=>o.ruleForm.area=t)},null,8,["modelValue"])]),_:1}),e(s,null,{default:r(()=>[e(p,{type:"primary",onClick:u.submitForm},{default:r(()=>[C]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])]),_:1})])}var U=g(b,[["render",y],["__scopeId","data-v-9bde5082"]]);export{U as default};
