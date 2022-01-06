
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as v}from"./index.6da96519.js";import{r as g,z as x,A as r,az as b,X as $,o as h,k as y,D as l,C as s,G as C}from"./vendor.ab59999c.js";const D={props:{id:{type:[Number,String],default:""}},setup(i,{expose:m}){const n=i,{proxy:t}=C(),e=g({loading:!1,form:{id:n.id,title:""},rules:{title:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898",trigger:"blur"}]}});x(()=>{e.value.form.id!=""&&d()});function d(){e.value.loading=!0,t.$api.get("pages_example/form_mode/detail",{baseURL:"/mock/",params:{id:e.value.form.id}}).then(o=>{e.value.loading=!1,e.value.form.title=o.data.title})}return m({submit(o){e.value.form.id==""?t.$refs.form.validate(a=>{a&&t.$api.post("pages_example/form_mode/create",e.value.form,{baseURL:"/mock/"}).then(()=>{t.$message.success({message:"\u6A21\u62DF\u65B0\u589E\u6210\u529F",center:!0}),o&&o()})}):t.$refs.form.validate(a=>{a&&t.$api.post("pages_example/form_mode/edit",e.value.form,{baseURL:"/mock/"}).then(()=>{t.$message.success({message:"\u6A21\u62DF\u7F16\u8F91\u6210\u529F",center:!0}),o&&o()})})}}),(o,a)=>{const u=r("el-input"),f=r("el-form-item"),p=r("el-form"),_=b("loading");return $((h(),y("div",null,[l(p,{ref:"form",model:e.value.form,rules:e.value.rules,"label-width":"120px","label-suffix":"\uFF1A"},{default:s(()=>[l(f,{label:"\u6807\u9898",prop:"title"},{default:s(()=>[l(u,{modelValue:e.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=c=>e.value.form.title=c),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[_,e.value.loading]])}}};var k=v(D,[["__scopeId","data-v-4250de77"]]);export{k as default};
