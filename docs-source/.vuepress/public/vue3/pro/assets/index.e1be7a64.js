
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";import{$ as a,o as l,r as t,am as r,J as s,l as o,H as m,s as d,n as i,h as u}from"./vendor.1e0be253.js";var p=e({props:{id:{type:[Number,String],default:""},departmentId:{type:[Number,String],default:""}},setup(e,{expose:p}){const f=e,{proxy:n}=u(),v=a({loading:!1,form:{id:f.id,department_id:f.departmentId,title:""},rules:{title:[{required:!0,message:"请输入职位名称",trigger:"blur"}]}});return l((()=>{""!=v.value.form.id&&(v.value.loading=!0,n.$api.get("pages_example/job/detail",{baseURL:"/mock/",params:{id:v.value.form.id,department_id:v.value.form.department_id}}).then((e=>{v.value.loading=!1,v.value.form.title=e.data.title})))})),p({submit(e){""==v.value.form.id?n.$refs.form.validate((a=>{a&&n.$api.post("pages_example/job/create",v.value.form,{baseURL:"/mock/"}).then((()=>{n.$message.success({message:"模拟新增成功",center:!0}),e&&e()}))})):n.$refs.form.validate((a=>{a&&n.$api.post("pages_example/job/edit",v.value.form,{baseURL:"/mock/"}).then((()=>{n.$message.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const l=t("el-input"),u=t("el-form-item"),p=t("el-form"),f=r("loading");return s((o(),m("div",null,[d(p,{ref:(e,a)=>{a.form=e},model:v.value.form,rules:v.value.rules,"label-width":"120px","label-suffix":"："},{default:i((()=>[d(u,{label:"职位",prop:"title"},{default:i((()=>[d(l,{modelValue:v.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value.form.title=e),placeholder:"请输入职位名称"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])],512)),[[f,v.value.loading]])}}},[["__scopeId","data-v-f149ad34"]]);export{p as default};
