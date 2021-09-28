
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d7acb132.js";import{_ as a}from"./index.1e91b0e8.js";import{_ as r}from"./index.6d456c03.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";import{r as o,l as t,H as m,s as u,n as d,S as s}from"./vendor.1e0be253.js";import"./index.e4e8dab3.js";const n={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}},i=s("提交");var p=l(n,[["render",function(l,s,n,p,f,_){const c=e,b=a,F=r,x=o("el-form-item"),j=o("el-button"),v=o("el-form");return t(),m("div",null,[u(c,{title:"省市区联动",content:"CascaderArea"}),u(F,null,{default:d((()=>[u(b,{modelValue:f.area,"onUpdate:modelValue":s[0]||(s[0]=e=>f.area=e)},null,8,["modelValue"])])),_:1}),u(F,{title:"表单验证"},{default:d((()=>[u(v,{ref:"ruleForm",model:f.ruleForm,rules:f.rules},{default:d((()=>[u(x,{label:"地区",prop:"area"},{default:d((()=>[u(b,{modelValue:f.ruleForm.area,"onUpdate:modelValue":s[1]||(s[1]=e=>f.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),u(x,null,{default:d((()=>[u(j,{type:"primary",onClick:_.submitForm},{default:d((()=>[i])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])}],["__scopeId","data-v-4e8ef6b2"]]);export{p as default};
