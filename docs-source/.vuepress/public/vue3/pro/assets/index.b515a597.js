
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{H as e,I as a,j as t,r as l,n as s,J as n,q as d,l as c,m as o,a9 as i,O as r,S as u,X as h,R as f}from"./vendor.3dac1dfd.js";e("data-v-e2dc6d6e");const g={class:"batch-action-bar"},m=f("当页全选"),p={key:0,class:"tips"};a();const v={props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(e,{emit:a}){const f=e,v=t({get:function(){let e=!1;return 0!=f.data.length&&f.data.length==f.selectionData.length&&(e=!0),e},set:function(e){a(e?"check-all":"check-null")}}),b=t((()=>{let e=!1;return f.selectionData.length>0&&f.selectionData.length<f.data.length&&(e=!0),e}));return(a,t)=>{const f=l("el-checkbox"),D=l("el-form");return s(),n("div",g,[d(f,{modelValue:o(v),"onUpdate:modelValue":t[0]||(t[0]=e=>i(v)?v.value=e:null),indeterminate:o(b),disabled:!e.data.length},{default:c((()=>[m])),_:1},8,["modelValue","indeterminate","disabled"]),e.selectionData.length?(s(),n("div",p,"已选 "+r(e.selectionData.length)+" 项",1)):u("v-if",!0),d(D,{disabled:!e.selectionData.length},{default:c((()=>[h(a.$slots,"default",{},void 0,!0)])),_:3},8,["disabled"])])}},__scopeId:"data-v-e2dc6d6e"};export{v as _};
