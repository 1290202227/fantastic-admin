
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as y}from"./index.afb4da48.js";import{_ as h}from"./plugin-vue_export-helper.5a098b48.js";import{r as d,m as l,Q as r,R as g,a4 as b,t as e,q as t,Z as v,a7 as x,n as C,Y as o}from"./vendor.2da94371.js";import{_ as $}from"./index.4b1af9fd.js";import{i as k}from"./logo.3c3b2e9b.js";const S={class:"content"},j={props:{type:{type:String,default:""},closable:{type:Boolean,default:!1}},emits:["close"],setup(s,{emit:u}){return(p,_)=>{const a=d("el-icon-close-bold"),c=d("el-icon");return l(),r("div",{class:x(["chip",[s.type?`chip--${s.type}`:""]])},[g("div",S,[b(p.$slots,"default",{},void 0,!0),s.closable?(l(),r("span",{key:0,class:"closable",onClick:_[0]||(_[0]=f=>u("close"))},[e(c,null,{default:t(()=>[e(a)]),_:1})])):v("v-if",!0)])],2)}}};var w=h(j,[["__scopeId","data-v-61ebdbc9"]]);const B={data(){return{isShow:!0,avatar:k}},methods:{handleClose(){this.isShow=!1}}},N=o(" \u57FA\u7840\u7EB8\u7247 "),V=o("Fa"),I=o(" \u5934\u50CF\u6587\u5B57 "),q=o(" \u5934\u50CF\u56FE\u6807 "),z=o(" \u5934\u50CF\u56FE\u7247 "),D=o(" \u5173\u95ED\u6309\u94AE "),E=o(" Primary "),F=o(" Success "),P=o(" Info "),Q=o(" Waning "),R=o(" Danger ");function T(s,u,p,_,a,c){const f=$,n=w,i=d("el-avatar"),m=y;return l(),r("div",null,[e(f,{title:"\u7EB8\u7247",content:"Chip"}),e(m,null,{default:t(()=>[e(n,null,{default:t(()=>[N]),_:1}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[V]),_:1}),I]),_:1}),e(n,null,{default:t(()=>[e(i,{icon:"el-icon-user-filled"}),q]),_:1}),e(n,null,{default:t(()=>[e(i,{src:a.avatar},null,8,["src"]),z]),_:1}),a.isShow?(l(),C(n,{key:0,closable:"",onClose:c.handleClose},{default:t(()=>[D]),_:1},8,["onClose"])):v("v-if",!0)]),_:1}),e(m,null,{default:t(()=>[e(n,{type:"primary"},{default:t(()=>[E]),_:1}),e(n,{type:"success"},{default:t(()=>[F]),_:1}),e(n,{type:"info"},{default:t(()=>[P]),_:1}),e(n,{type:"warning"},{default:t(()=>[Q]),_:1}),e(n,{type:"danger"},{default:t(()=>[R]),_:1})]),_:1})])}var H=h(B,[["render",T]]);export{H as default};