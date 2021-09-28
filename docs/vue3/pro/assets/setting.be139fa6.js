
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.10d8711c.js";import{_ as l}from"./index.6d456c03.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";import{r as t,l as s,H as d,L as o,s as i,n,I as r,M as m,O as u,S as c}from"./vendor.1e0be253.js";const f={name:"PersonalSetting",beforeRouteLeave(e,l,a){["personalEditPassword"].includes(e.name)&&this.$store.commit("keepAlive/add","PersonalSetting"),a()},props:{},data:()=>({form:{headimg:"",mobile:"",name:"",qq:"",wechat:""}}),created(){},mounted(){},methods:{handleSuccess(e){""==e.error?this.form.headimg=e.data.path:this.$message.warning(e.error)},editPassword(){this.$router.push({name:"personalEditPassword"})}}},p=e=>(m("data-v-3e808351"),e=e(),u(),e),h=p((()=>r("h2",null,"基本设置",-1))),v=c("保存"),_=p((()=>r("h2",null,"安全设置",-1))),b={class:"setting-list"},g={class:"item"},V=p((()=>r("div",{class:"content"},[r("div",{class:"title"},"账户密码"),r("div",{class:"desc"},"当前密码强度：强")],-1))),w={class:"action"},x=c("修改"),S={class:"item"},y=p((()=>r("div",{class:"content"},[r("div",{class:"title"},"密保手机"),r("div",{class:"desc"},"已绑定手机：187****3441")],-1))),q={class:"action"},P=c("修改"),U={class:"item"},j=p((()=>r("div",{class:"content"},[r("div",{class:"title"},"备用邮箱"),r("div",{class:"desc"},"当前未绑定备用邮箱")],-1))),k={class:"action"},Q=c("绑定");var O=a(f,[["render",function(a,m,u,c,f,p){const O=t("el-input"),$=t("el-form-item"),C=t("el-button"),E=t("el-form"),I=t("el-col"),L=e,A=t("el-row"),D=t("el-tab-pane"),H=t("el-tabs"),K=l;return s(),d("div",null,[o(" 页面：Setting "),i(K,null,{default:n((()=>[i(H,{"tab-position":"left",style:{height:"600px"}},{default:n((()=>[i(D,{label:"基本设置",class:"basic"},{default:n((()=>[h,i(A,{gutter:20},{default:n((()=>[i(I,{span:16},{default:n((()=>[i(E,{ref:"form",model:f.form,"label-width":"120px","label-suffix":"："},{default:n((()=>[i($,{label:"名 称"},{default:n((()=>[i(O,{modelValue:f.form.name,"onUpdate:modelValue":m[0]||(m[0]=e=>f.form.name=e),placeholder:"请输入你的名称"},null,8,["modelValue"])])),_:1}),i($,{label:"手机号"},{default:n((()=>[i(O,{modelValue:f.form.mobile,"onUpdate:modelValue":m[1]||(m[1]=e=>f.form.mobile=e),placeholder:"请输入你的手机号"},null,8,["modelValue"])])),_:1}),i($,{label:"QQ 号"},{default:n((()=>[i(O,{modelValue:f.form.qq,"onUpdate:modelValue":m[2]||(m[2]=e=>f.form.qq=e),placeholder:"请输入你的 QQ 号"},null,8,["modelValue"])])),_:1}),i($,{label:"微信号"},{default:n((()=>[i(O,{modelValue:f.form.wechat,"onUpdate:modelValue":m[3]||(m[3]=e=>f.form.wechat=e),placeholder:"请输入你的微信号"},null,8,["modelValue"])])),_:1}),i($,null,{default:n((()=>[i(C,{type:"primary"},{default:n((()=>[v])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),i(I,{span:8},{default:n((()=>[i(L,{url:f.form.headimg,"onUpdate:url":m[4]||(m[4]=e=>f.form.headimg=e),action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKD628431923530324"},notip:"",class:"headimg-upload",onOnSuccess:p.handleSuccess},null,8,["url","onOnSuccess"])])),_:1})])),_:1})])),_:1}),i(D,{label:"安全设置",class:"security"},{default:n((()=>[_,r("div",b,[r("div",g,[V,r("div",w,[i(C,{type:"text",onClick:p.editPassword},{default:n((()=>[x])),_:1},8,["onClick"])])]),r("div",S,[y,r("div",q,[i(C,{type:"text"},{default:n((()=>[P])),_:1})])]),r("div",U,[j,r("div",k,[i(C,{type:"text"},{default:n((()=>[Q])),_:1})])])])])),_:1})])),_:1})])),_:1})])}],["__scopeId","data-v-3e808351"]]);export{O as default};
