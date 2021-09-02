
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{x as e,y as t,r as a,o as l,z as s,i as n,w as i,F as c,J as d,M as o,I as h}from"./vendor.b5a7373b.js";const r={name:"BatchActionBar",props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],data:()=>({}),computed:{checkAll:{get:function(){let e=!1;return 0!=this.data.length&&this.data.length==this.selectionData.length&&(e=!0),e},set:function(e){e?this.$emit("check-all"):this.$emit("check-null")}},isIndeterminate(){let e=!1;return this.selectionData.length>0&&this.selectionData.length<this.data.length&&(e=!0),e}},created(){},mounted(){},methods:{}};e("data-v-ab93105c");const u={class:"batch-action-bar"},m=h("当页全选"),b={key:0,class:"tips"};t(),r.render=function(e,t,h,r,f,g){const p=a("el-checkbox"),k=a("el-form");return l(),s("div",u,[n(p,{modelValue:g.checkAll,"onUpdate:modelValue":t[0]||(t[0]=e=>g.checkAll=e),indeterminate:g.isIndeterminate,disabled:!h.data.length},{default:i((()=>[m])),_:1},8,["modelValue","indeterminate","disabled"]),h.selectionData.length?(l(),s("div",b,"已选 "+c(h.selectionData.length)+" 项",1)):d("v-if",!0),n(k,{disabled:!h.selectionData.length},{default:i((()=>[o(e.$slots,"default",{},void 0,!0)])),_:3},8,["disabled"])])},r.__scopeId="data-v-ab93105c";export{r as _};
