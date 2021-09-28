
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";import{$ as a,o as l,r,am as s,J as o,l as t,H as m,s as u,n as i,h as d}from"./vendor.1e0be253.js";var p=e({props:{id:{type:[Number,String],default:""}},setup(e,{expose:p}){const f=e,{proxy:n}=d(),v=a({loading:!1,form:{id:f.id,title:""},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}]}});return l((()=>{""!=v.value.form.id&&(v.value.loading=!0,n.$api.get("pages_example/form_mode/detail",{baseURL:"/mock/",params:{id:v.value.form.id}}).then((e=>{v.value.loading=!1,v.value.form.title=e.data.title})))})),p({submit(e){""==v.value.form.id?n.$refs.form.validate((a=>{a&&n.$api.post("pages_example/form_mode/create",v.value.form,{baseURL:"/mock/"}).then((()=>{n.$message.success({message:"模拟新增成功",center:!0}),e&&e()}))})):n.$refs.form.validate((a=>{a&&n.$api.post("pages_example/form_mode/edit",v.value.form,{baseURL:"/mock/"}).then((()=>{n.$message.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const l=r("el-input"),d=r("el-form-item"),p=r("el-form"),f=s("loading");return o((t(),m("div",null,[u(p,{ref:(e,a)=>{a.form=e},model:v.value.form,rules:v.value.rules,"label-width":"120px","label-suffix":"："},{default:i((()=>[u(d,{label:"标题",prop:"title"},{default:i((()=>[u(l,{modelValue:v.value.form.title,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value.form.title=e),placeholder:"请输入标题"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])],512)),[[f,v.value.loading]])}}},[["__scopeId","data-v-3cfe42e7"]]);export{p as default};
