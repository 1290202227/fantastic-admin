
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./index.0d16c6a6.js";import{r as x,z as $,A as l,ay as b,X as h,o as y,j as C,D as s,C as i,G as D}from"./vendor.0c4fd540.js";const U={props:{id:{type:[Number,String],default:""}},setup(m,{expose:n}){const d=m,{proxy:t}=D(),e=x({loading:!1,form:{id:d.id,title:""},rules:{title:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898",trigger:"blur"}]}});$(()=>{e.value.form.id!=""&&u()});function u(){e.value.loading=!0,t.$api.get("pages_example/form_mode/detail",{baseURL:"/mock/",params:{id:e.value.form.id}}).then(o=>{e.value.loading=!1,e.value.form.title=o.data.title})}return n({submit(o){e.value.form.id==""?t.$refs.form.validate(a=>{a&&t.$api.post("pages_example/form_mode/create",e.value.form,{baseURL:"/mock/"}).then(()=>{t.$message.success({message:"\u6A21\u62DF\u65B0\u589E\u6210\u529F",center:!0}),o&&o()})}):t.$refs.form.validate(a=>{a&&t.$api.post("pages_example/form_mode/edit",e.value.form,{baseURL:"/mock/"}).then(()=>{t.$message.success({message:"\u6A21\u62DF\u7F16\u8F91\u6210\u529F",center:!0}),o&&o()})})}}),(o,a)=>{const f=l("el-input"),p=l("el-form-item"),_=l("el-form"),c=b("loading");return h((y(),C("div",null,[s(_,{ref:(r,v)=>{v.form=r},model:e.value.form,rules:e.value.rules,"label-width":"120px","label-suffix":"\uFF1A"},{default:i(()=>[s(p,{label:"\u6807\u9898",prop:"title"},{default:i(()=>[s(f,{modelValue:e.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=r=>e.value.form.title=r),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])],512)),[[c,e.value.loading]])}}};var w=g(U,[["__scopeId","data-v-4250de77"]]);export{w as default};
