
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.9fbc5cc3.js";import{_ as a}from"./index.412bec49.js";import{_ as r}from"./index.c535d87f.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";import{r as o,l as t,H as m,s as u,n as d,S as s}from"./vendor.e59ac5d6.js";import"./index.e7a764ff.js";const n={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}},i=s("提交");var f=l(n,[["render",function(l,s,n,f,p,c){const _=e,b=a,F=r,x=o("el-form-item"),j=o("el-button"),v=o("el-form");return t(),m("div",null,[u(_,{title:"省市区联动",content:"CascaderArea"}),u(F,null,{default:d((()=>[u(b,{modelValue:p.area,"onUpdate:modelValue":s[0]||(s[0]=e=>p.area=e)},null,8,["modelValue"])])),_:1}),u(F,{title:"表单验证"},{default:d((()=>[u(v,{ref:"ruleForm",model:p.ruleForm,rules:p.rules},{default:d((()=>[u(x,{label:"地区",prop:"area"},{default:d((()=>[u(b,{modelValue:p.ruleForm.area,"onUpdate:modelValue":s[1]||(s[1]=e=>p.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),u(x,null,{default:d((()=>[u(j,{type:"primary",onClick:c.submitForm},{default:d((()=>[i])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])}],["__scopeId","data-v-4e8ef6b2"]]);export{f as default};
