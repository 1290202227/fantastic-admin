
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as y}from"./index.761e72da.js";import{_ as h}from"./plugin-vue_export-helper.5a098b48.js";import{r as d,m as a,O as r,P as g,a2 as b,t as e,q as t,X as v,a5 as x,n as C,V as o}from"./vendor.22bd9123.js";import{_ as $}from"./index.d075170b.js";import{i as k}from"./logo.3c3b2e9b.js";const S={class:"content"},j={props:{type:{type:String,default:""},closable:{type:Boolean,default:!1}},emits:["close"],setup(s,{emit:u}){return(p,_)=>{const l=d("el-icon-close-bold"),c=d("el-icon");return a(),r("div",{class:x(["chip",[s.type?`chip--${s.type}`:""]])},[g("div",S,[b(p.$slots,"default",{},void 0,!0),s.closable?(a(),r("span",{key:0,class:"closable",onClick:_[0]||(_[0]=f=>u("close"))},[e(c,null,{default:t(()=>[e(l)]),_:1})])):v("v-if",!0)])],2)}}};var w=h(j,[["__scopeId","data-v-61ebdbc9"]]);const B={data(){return{isShow:!0,avatar:k}},methods:{handleClose(){this.isShow=!1}}},V=o(" \u57FA\u7840\u7EB8\u7247 "),N=o("Fa"),I=o(" \u5934\u50CF\u6587\u5B57 "),P=o(" \u5934\u50CF\u56FE\u6807 "),q=o(" \u5934\u50CF\u56FE\u7247 "),z=o(" \u5173\u95ED\u6309\u94AE "),D=o(" Primary "),E=o(" Success "),F=o(" Info "),O=o(" Waning "),T=o(" Danger ");function W(s,u,p,_,l,c){const f=$,n=w,i=d("el-avatar"),m=y;return a(),r("div",null,[e(f,{title:"\u7EB8\u7247",content:"Chip"}),e(m,null,{default:t(()=>[e(n,null,{default:t(()=>[V]),_:1}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[N]),_:1}),I]),_:1}),e(n,null,{default:t(()=>[e(i,{icon:"el-icon-user-filled"}),P]),_:1}),e(n,null,{default:t(()=>[e(i,{src:l.avatar},null,8,["src"]),q]),_:1}),l.isShow?(a(),C(n,{key:0,closable:"",onClose:c.handleClose},{default:t(()=>[z]),_:1},8,["onClose"])):v("v-if",!0)]),_:1}),e(m,null,{default:t(()=>[e(n,{type:"primary"},{default:t(()=>[D]),_:1}),e(n,{type:"success"},{default:t(()=>[E]),_:1}),e(n,{type:"info"},{default:t(()=>[F]),_:1}),e(n,{type:"warning"},{default:t(()=>[O]),_:1}),e(n,{type:"danger"},{default:t(()=>[T]),_:1})]),_:1})])}var K=h(B,[["render",W]]);export{K as default};
