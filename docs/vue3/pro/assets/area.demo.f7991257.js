
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./index.96603fff.js";import{_ as f}from"./index.b4d27e90.js";import{_ as x}from"./index.d1dc7e72.js";import{_ as g}from"./index.0f7a313d.js";import{B as n,l as b,F as e,D as r,o as v,$ as F}from"./vendor.b17bec21.js";const V={name:"ComponentExampleArea",props:{},data(){return{area:["\u6D59\u6C5F\u7701","\u676D\u5DDE\u5E02","\u897F\u6E56\u533A"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"\u8BF7\u9009\u62E9\u5730\u533A",trigger:"change"}]}}},created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate(l=>{l&&alert("\u63D0\u4EA4\u6210\u529F")})}}},y=F("\u63D0\u4EA4");function C(l,t,j,k,o,u){const d=x,_=f,m=i,s=n("el-form-item"),p=n("el-button"),c=n("el-form");return v(),b("div",null,[e(d,{title:"\u7701\u5E02\u533A\u8054\u52A8",content:"CascaderArea"}),e(m,null,{default:r(()=>[e(_,{modelValue:o.area,"onUpdate:modelValue":t[0]||(t[0]=a=>o.area=a)},null,8,["modelValue"])]),_:1}),e(m,{title:"\u8868\u5355\u9A8C\u8BC1"},{default:r(()=>[e(c,{ref:"ruleForm",model:o.ruleForm,rules:o.rules},{default:r(()=>[e(s,{label:"\u5730\u533A",prop:"area"},{default:r(()=>[e(_,{modelValue:o.ruleForm.area,"onUpdate:modelValue":t[1]||(t[1]=a=>o.ruleForm.area=a)},null,8,["modelValue"])]),_:1}),e(s,null,{default:r(()=>[e(p,{type:"primary",onClick:u.submitForm},{default:r(()=>[y]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])]),_:1})])}var U=g(V,[["render",C],["__scopeId","data-v-4e8ef6b2"]]);export{U as default};
