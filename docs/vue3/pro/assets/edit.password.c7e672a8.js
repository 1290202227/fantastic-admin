
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as j}from"./index.a6c6c034.js";import{_ as k}from"./index.96603fff.js";import{_ as C}from"./index.d1dc7e72.js";import{j as P,w as U,U as q,r as _,B as r,l as R,F as e,D as s,o as $,$ as B,H as E}from"./vendor.b17bec21.js";import{a as S}from"./index.0f7a313d.js";const N=B("\u63D0\u4EA4"),z=P({name:"PersonalEditPassword"}),A=Object.assign(z,{setup(D){const c=U(),i=q(),{proxy:p}=E(),m=S(),f=(n,t,a)=>{t!==o.value.newpassword?a(new Error("\u8BF7\u786E\u8BA4\u65B0\u5BC6\u7801")):a()},o=_({password:"",newpassword:"",checkpassword:""}),w=_({password:[{required:!0,message:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801",trigger:"blur"}],newpassword:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",trigger:"blur"},{min:6,max:18,trigger:"blur",message:"\u5BC6\u7801\u957F\u5EA6\u4E3A6\u523018\u4F4D"}],checkpassword:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",trigger:"blur"},{validator:f}]});function g(){p.$refs.formRef.validate(n=>{n&&m.editPassword(o.value).then(()=>{p.$message({type:"success",message:"\u6A21\u62DF\u4FEE\u6539\u6210\u529F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"}),m.logout().then(()=>{i.push({name:"login",query:{redirect:c.fullPath}})})}).catch(()=>{})})}return(n,t)=>{const a=C,u=r("el-input"),d=r("el-form-item"),v=r("el-form"),b=r("el-col"),h=r("el-row"),x=k,V=r("el-button"),y=j;return $(),R("div",null,[e(a,{title:"\u4FEE\u6539\u5BC6\u7801",content:"\u5B9A\u671F\u4FEE\u6539\u5BC6\u7801\u53EF\u4EE5\u63D0\u9AD8\u5E10\u53F7\u5B89\u5168\u6027\u5662~"}),e(x,null,{default:s(()=>[e(h,null,{default:s(()=>[e(b,{md:24,lg:12},{default:s(()=>[e(v,{ref:"formRef",model:o.value,rules:w.value,"label-width":"120px"},{default:s(()=>[e(d,{label:"\u539F\u5BC6\u7801",prop:"password"},{default:s(()=>[e(u,{modelValue:o.value.password,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value.password=l),type:"password",placeholder:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u65B0\u5BC6\u7801",prop:"newpassword"},{default:s(()=>[e(u,{modelValue:o.value.newpassword,"onUpdate:modelValue":t[1]||(t[1]=l=>o.value.newpassword=l),type:"password",placeholder:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u786E\u8BA4\u65B0\u5BC6\u7801",prop:"checkpassword"},{default:s(()=>[e(u,{modelValue:o.value.checkpassword,"onUpdate:modelValue":t[2]||(t[2]=l=>o.value.checkpassword=l),type:"password",placeholder:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})]),_:1}),e(y,null,{default:s(()=>[e(V,{type:"primary",size:"large",onClick:g},{default:s(()=>[N]),_:1})]),_:1})])}}});export{A as default};
