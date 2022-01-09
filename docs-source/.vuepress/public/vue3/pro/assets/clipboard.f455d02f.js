
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as $}from"./index.96603fff.js";import{_ as j}from"./index.d1dc7e72.js";import{r as i,aC as w,z as y,B as r,l as _,F as o,D as t,k as c,q as B,o as m,$ as f,H as N}from"./vendor.b17bec21.js";import"./index.0f7a313d.js";const U=f("VueUse \u5B98\u7F51 useClipboard"),q={key:0},z=f("\u590D\u5236"),S={setup(D){const{proxy:v}=N(),l=i(""),a=i(""),{text:C,copy:V,copied:x,isSupported:b}=w();y(x,s=>{s&&v.$message.success(`\u590D\u5236\u6210\u529F\uFF1A${C.value}`)});function g(s){window.open(s,"top")}return(s,e)=>{const u=r("el-button"),k=j,p=r("el-input"),d=$;return m(),_("div",null,[o(k,{title:"\u526A\u8D34\u677F"},{default:t(()=>[o(u,{icon:"el-icon-link",onClick:e[0]||(e[0]=n=>g("https://vueuse.org/core/useClipboard/"))},{default:t(()=>[U]),_:1})]),_:1}),c(b)?(m(),_("div",q,[o(d,{title:"\u8F93\u5165\u5185\u5BB9\uFF0C\u5E76\u70B9\u51FB\u590D\u5236\u6309\u94AE"},{default:t(()=>[o(p,{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=n=>l.value=n)},{append:t(()=>[o(u,{onClick:e[1]||(e[1]=n=>c(V)(l.value))},{default:t(()=>[z]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(d,{title:"\u590D\u5236\u6210\u529F\u540E\u53EF\u5728\u8FD9\u7C98\u8D34\u6D4B\u8BD5"},{default:t(()=>[o(p,{modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=n=>a.value=n)},null,8,["modelValue"])]),_:1})])):B("v-if",!0)])}}};export{S as default};
