
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{H as e,I as a,k as t,r as l,l as s,J as n,s as d,n as c,q as o,a9 as i,O as r,S as u,X as h,R as g}from"./vendor.7707186e.js";e("data-v-300b105e");const f={class:"batch-action-bar"},m=g("当页全选"),p={key:0,class:"tips"};a();const b={props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(e,{emit:a}){const g=e,b=t({get:function(){let e=!1;return 0!=g.data.length&&g.data.length==g.selectionData.length&&(e=!0),e},set:function(e){a(e?"check-all":"check-null")}}),v=t((()=>{let e=!1;return g.selectionData.length>0&&g.selectionData.length<g.data.length&&(e=!0),e}));return(a,t)=>{const g=l("el-checkbox"),k=l("el-form");return s(),n("div",f,[d(g,{modelValue:o(b),"onUpdate:modelValue":t[0]||(t[0]=e=>i(b)?b.value=e:null),indeterminate:o(v),disabled:!e.data.length},{default:c((()=>[m])),_:1},8,["modelValue","indeterminate","disabled"]),e.selectionData.length?(s(),n("div",p,"已选 "+r(e.selectionData.length)+" 项",1)):u("v-if",!0),d(k,{disabled:!e.selectionData.length},{default:c((()=>[h(a.$slots,"default",{},void 0,!0)])),_:3},8,["disabled"])])}},__scopeId:"data-v-300b105e"};export{b as _};
