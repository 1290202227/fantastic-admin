
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.6da96519.js";import{r as V,z as U,A as d,az as $,X as h,o as k,k as y,D as o,C as t,a0 as i,G as w}from"./vendor.ab59999c.js";const C=i("\u4FDD\u5BC6"),D=i("\u7537"),L=i("\u5973"),R={props:{id:{type:[Number,String],default:""}},setup(f,{expose:p}){const _=f,{proxy:r}=w(),e=V({loading:!1,form:{id:_.id,account:"",name:"",mobile:"",sex:"2"},rules:{account:[{required:!0,message:"\u8BF7\u8F93\u5165\u5E10\u53F7",trigger:"blur"}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:"blur"}],mobile:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",trigger:"blur"},{validator:(l,a,s)=>{let u={key:"mobile",value:a};e.value.form.id!=""&&(u.id=e.value.form.id),r.$api.get("pages_example/manager/check",{baseURL:"/mock/",params:u}).then(n=>{n.data.exist?s(new Error("\u624B\u673A\u53F7\u5DF2\u5B58\u5728")):s()})},trigger:"blur"}]}});U(()=>{e.value.form.id!=""&&c()});function c(){e.value.loading=!0,r.$api.get("pages_example/manager/detail",{baseURL:"/mock/",params:{id:e.value.form.id}}).then(l=>{e.value.loading=!1,e.value.form.account=l.data.account,e.value.form.name=l.data.name,e.value.form.mobile=l.data.mobile})}return p({submit(l){e.value.form.id==""?r.$refs.form.validate(a=>{a&&r.$api.post("pages_example/manager/create",e.value.form,{baseURL:"/mock/"}).then(()=>{r.$message.success({message:"\u6A21\u62DF\u65B0\u589E\u6210\u529F",center:!0}),l&&l()})}):r.$refs.form.validate(a=>{a&&r.$api.post("pages_example/manager/edit",e.value.form,{baseURL:"/mock/"}).then(()=>{r.$message.success({message:"\u6A21\u62DF\u7F16\u8F91\u6210\u529F",center:!0}),l&&l()})})}}),(l,a)=>{const s=d("el-input"),u=d("el-form-item"),n=d("el-radio-button"),v=d("el-radio-group"),g=d("el-form"),b=$("loading");return h((k(),y("div",null,[o(g,{ref:"form",model:e.value.form,rules:e.value.rules,"label-width":"120px","label-suffix":"\uFF1A"},{default:t(()=>[o(u,{label:"\u5E10\u53F7",prop:"account"},{default:t(()=>[o(s,{modelValue:e.value.form.account,"onUpdate:modelValue":a[0]||(a[0]=m=>e.value.form.account=m),placeholder:"\u8BF7\u8F93\u5165\u5E10\u53F7"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u59D3\u540D",prop:"name"},{default:t(()=>[o(s,{modelValue:e.value.form.name,"onUpdate:modelValue":a[1]||(a[1]=m=>e.value.form.name=m),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u624B\u673A\u53F7",prop:"mobile"},{default:t(()=>[o(s,{modelValue:e.value.form.mobile,"onUpdate:modelValue":a[2]||(a[2]=m=>e.value.form.mobile=m),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u6027\u522B",prop:"sex"},{default:t(()=>[o(v,{modelValue:e.value.form.sex,"onUpdate:modelValue":a[3]||(a[3]=m=>e.value.form.sex=m)},{default:t(()=>[o(n,{label:"2"},{default:t(()=>[C]),_:1}),o(n,{label:"1"},{default:t(()=>[D]),_:1}),o(n,{label:"0"},{default:t(()=>[L]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[b,e.value.loading]])}}};var N=x(R,[["__scopeId","data-v-67bde721"]]);export{N as default};
