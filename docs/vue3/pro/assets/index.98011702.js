
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./plugin-vue_export-helper.5a098b48.js";import{k as o,r as c,l as d,H as r,s as i,n as u,q as _,a9 as v,P as k,L as b,X as x,S as y}from"./vendor.5a8f5a39.js";const D={class:"batch-action-bar"},V=y("\u5F53\u9875\u5168\u9009"),A={key:0,class:"tips"},C={props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(a,{emit:n}){const t=a,l=o({get:function(){let e=!1;return t.data.length!=0&&t.data.length==t.selectionData.length&&(e=!0),e},set:function(e){n(e?"check-all":"check-null")}}),f=o(()=>{let e=!1;return t.selectionData.length>0&&t.selectionData.length<t.data.length&&(e=!0),e});return(e,s)=>{const h=c("el-checkbox"),m=c("el-form");return d(),r("div",D,[i(h,{modelValue:_(l),"onUpdate:modelValue":s[0]||(s[0]=p=>v(l)?l.value=p:null),indeterminate:_(f),disabled:!a.data.length},{default:u(()=>[V]),_:1},8,["modelValue","indeterminate","disabled"]),a.selectionData.length?(d(),r("div",A,"\u5DF2\u9009 "+k(a.selectionData.length)+" \u9879",1)):b("v-if",!0),i(m,{disabled:!a.selectionData.length},{default:u(()=>[x(e.$slots,"default",{},void 0,!0)]),_:3},8,["disabled"])])}}};var j=g(C,[["__scopeId","data-v-9d2c1ba8"]]);export{j as _};
