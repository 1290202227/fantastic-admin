
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.ffbd20e5.js";import{_ as a}from"./index.fc4f5d03.js";import{_ as r}from"./index.f03e52fd.js";import{H as l,I as o,r as t,l as d,J as m,s,n as u,R as n}from"./vendor.7707186e.js";import"./index.9c2de28b.js";const i={name:"ComponentExampleArea",props:{},data:()=>({area:["浙江省","杭州市","西湖区"],ruleForm:{area:[]},rules:{area:[{type:"array",required:!0,message:"请选择地区",trigger:"change"}]}}),created(){},mounted(){},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{e&&alert("提交成功")}))}}};l("data-v-9bde5082");const f=n("提交");o(),i.render=function(l,o,n,i,p,c){const _=e,b=a,F=r,x=t("el-form-item"),V=t("el-button"),j=t("el-form");return d(),m("div",null,[s(_,{title:"省市区联动",content:"CascaderArea"}),s(F,null,{default:u((()=>[s(b,{modelValue:p.area,"onUpdate:modelValue":o[0]||(o[0]=e=>p.area=e)},null,8,["modelValue"])])),_:1}),s(F,{title:"表单验证"},{default:u((()=>[s(j,{ref:"ruleForm",model:p.ruleForm,rules:p.rules},{default:u((()=>[s(x,{label:"地区",prop:"area"},{default:u((()=>[s(b,{modelValue:p.ruleForm.area,"onUpdate:modelValue":o[1]||(o[1]=e=>p.ruleForm.area=e)},null,8,["modelValue"])])),_:1}),s(x,null,{default:u((()=>[s(V,{type:"primary",onClick:c.submitForm},{default:u((()=>[f])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])},i.__scopeId="data-v-9bde5082";export{i as default};
