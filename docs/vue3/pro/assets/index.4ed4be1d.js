
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as V}from"./plugin-vue_export-helper.5a098b48.js";import{$ as h,o as $,r as d,am as U,J as y,l as k,H as w,s as l,n as r,S as i,h as L}from"./vendor.5a8f5a39.js";const R=i("\u4FDD\u5BC6"),q=i("\u7537"),C=i("\u5973"),D={props:{id:{type:[Number,String],default:""}},setup(p,{expose:f}){const _=p,{proxy:u}=L(),e=h({loading:!1,form:{id:_.id,account:"",name:"",mobile:"",sex:"2"},rules:{account:[{required:!0,message:"\u8BF7\u8F93\u5165\u5E10\u53F7",trigger:"blur"}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:"blur"}],mobile:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",trigger:"blur"},{validator:(o,a,s)=>{let m={key:"mobile",value:a};e.value.form.id!=""&&(m.id=e.value.form.id),u.$api.get("pages_example/manager/check",{baseURL:"/mock/",params:m}).then(n=>{n.data.exist?s(new Error("\u624B\u673A\u53F7\u5DF2\u5B58\u5728")):s()})},trigger:"blur"}]}});$(()=>{e.value.form.id!=""&&c()});function c(){e.value.loading=!0,u.$api.get("pages_example/manager/detail",{baseURL:"/mock/",params:{id:e.value.form.id}}).then(o=>{e.value.loading=!1,e.value.form.account=o.data.account,e.value.form.name=o.data.name,e.value.form.mobile=o.data.mobile})}return f({submit(o){e.value.form.id==""?u.$refs.form.validate(a=>{a&&u.$api.post("pages_example/manager/create",e.value.form,{baseURL:"/mock/"}).then(()=>{u.$message.success({message:"\u6A21\u62DF\u65B0\u589E\u6210\u529F",center:!0}),o&&o()})}):u.$refs.form.validate(a=>{a&&u.$api.post("pages_example/manager/edit",e.value.form,{baseURL:"/mock/"}).then(()=>{u.$message.success({message:"\u6A21\u62DF\u7F16\u8F91\u6210\u529F",center:!0}),o&&o()})})}}),(o,a)=>{const s=d("el-input"),m=d("el-form-item"),n=d("el-radio-button"),v=d("el-radio-group"),g=d("el-form"),b=U("loading");return y((k(),w("div",null,[l(g,{ref:(t,x)=>{x.form=t},model:e.value.form,rules:e.value.rules,"label-width":"120px","label-suffix":"\uFF1A"},{default:r(()=>[l(m,{label:"\u5E10\u53F7",prop:"account"},{default:r(()=>[l(s,{modelValue:e.value.form.account,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value.form.account=t),placeholder:"\u8BF7\u8F93\u5165\u5E10\u53F7"},null,8,["modelValue"])]),_:1}),l(m,{label:"\u59D3\u540D",prop:"name"},{default:r(()=>[l(s,{modelValue:e.value.form.name,"onUpdate:modelValue":a[1]||(a[1]=t=>e.value.form.name=t),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},null,8,["modelValue"])]),_:1}),l(m,{label:"\u624B\u673A\u53F7",prop:"mobile"},{default:r(()=>[l(s,{modelValue:e.value.form.mobile,"onUpdate:modelValue":a[2]||(a[2]=t=>e.value.form.mobile=t),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},null,8,["modelValue"])]),_:1}),l(m,{label:"\u6027\u522B",prop:"sex"},{default:r(()=>[l(v,{modelValue:e.value.form.sex,"onUpdate:modelValue":a[3]||(a[3]=t=>e.value.form.sex=t),size:"small"},{default:r(()=>[l(n,{label:"2"},{default:r(()=>[R]),_:1}),l(n,{label:"1"},{default:r(()=>[q]),_:1}),l(n,{label:"0"},{default:r(()=>[C]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])],512)),[[b,e.value.loading]])}}};var j=V(D,[["__scopeId","data-v-62367b84"]]);export{j as default};
