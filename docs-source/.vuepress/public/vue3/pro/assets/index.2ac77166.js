
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./index.f5876f78.js";import{r as x,z as b,A as l,ay as $,V as h,o as j,j as y,D as s,C as n,F as I}from"./vendor.399b4c48.js";const V={props:{id:{type:[Number,String],default:""},departmentId:{type:[Number,String],default:""}},setup(m,{expose:d}){const i=m,{proxy:t}=I(),e=x({loading:!1,form:{id:i.id,department_id:i.departmentId,title:""},rules:{title:[{required:!0,message:"\u8BF7\u8F93\u5165\u804C\u4F4D\u540D\u79F0",trigger:"blur"}]}});b(()=>{e.value.form.id!=""&&u()});function u(){e.value.loading=!0,t.$api.get("pages_example/job/detail",{baseURL:"/mock/",params:{id:e.value.form.id,department_id:e.value.form.department_id}}).then(a=>{e.value.loading=!1,e.value.form.title=a.data.title})}return d({submit(a){e.value.form.id==""?t.$refs.form.validate(o=>{o&&t.$api.post("pages_example/job/create",e.value.form,{baseURL:"/mock/"}).then(()=>{t.$message.success({message:"\u6A21\u62DF\u65B0\u589E\u6210\u529F",center:!0}),a&&a()})}):t.$refs.form.validate(o=>{o&&t.$api.post("pages_example/job/edit",e.value.form,{baseURL:"/mock/"}).then(()=>{t.$message.success({message:"\u6A21\u62DF\u7F16\u8F91\u6210\u529F",center:!0}),a&&a()})})}}),(a,o)=>{const f=l("el-input"),p=l("el-form-item"),_=l("el-form"),c=$("loading");return h((j(),y("div",null,[s(_,{ref:(r,v)=>{v.form=r},model:e.value.form,rules:e.value.rules,"label-width":"120px","label-suffix":"\uFF1A"},{default:n(()=>[s(p,{label:"\u804C\u4F4D",prop:"title"},{default:n(()=>[s(f,{modelValue:e.value.form.title,"onUpdate:modelValue":o[0]||(o[0]=r=>e.value.form.title=r),placeholder:"\u8BF7\u8F93\u5165\u804C\u4F4D\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])],512)),[[c,e.value.loading]])}}};var U=g(V,[["__scopeId","data-v-f149ad34"]]);export{U as default};
