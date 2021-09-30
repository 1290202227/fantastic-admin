
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";import{k as a,r as t,l,H as s,s as n,n as d,q as o,a9 as c,P as i,L as r,X as u,S as h}from"./vendor.e59ac5d6.js";const p={class:"batch-action-bar"},g=h("当页全选"),m={key:0,class:"tips"};var f=e({props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(e,{emit:h}){const f=e,b=a({get:function(){let e=!1;return 0!=f.data.length&&f.data.length==f.selectionData.length&&(e=!0),e},set:function(e){h(e?"check-all":"check-null")}}),v=a((()=>{let e=!1;return f.selectionData.length>0&&f.selectionData.length<f.data.length&&(e=!0),e}));return(a,h)=>{const f=t("el-checkbox"),k=t("el-form");return l(),s("div",p,[n(f,{modelValue:o(b),"onUpdate:modelValue":h[0]||(h[0]=e=>c(b)?b.value=e:null),indeterminate:o(v),disabled:!e.data.length},{default:d((()=>[g])),_:1},8,["modelValue","indeterminate","disabled"]),e.selectionData.length?(l(),s("div",m,"已选 "+i(e.selectionData.length)+" 项",1)):r("v-if",!0),n(k,{disabled:!e.selectionData.length},{default:d((()=>[u(a.$slots,"default",{},void 0,!0)])),_:3},8,["disabled"])])}}},[["__scopeId","data-v-9d2c1ba8"]]);export{f as _};
