
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as h}from"./index.d582d8b9.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,b as s,G as o,g as e,f as t,H as r,N as m,K as u,a4 as v,Q as a}from"./vendor.0ce66e7d.js";import{_ as g}from"./index.74c77f42.js";const x={class:"result"},$={key:0,class:"icon icon-success"},k={key:1,class:"icon icon-warning"},w={key:2,class:"icon icon-error"},b={key:3,class:"desc"},N={key:4,class:"extra"},S={key:5,class:"actions"},j={props:{type:{type:String,validator:n=>["success","warning","error"].includes(n),required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},setup(n){return(l,f)=>{const _=i("el-icon-success-filled"),c=i("el-icon"),d=i("el-icon-warning-filled"),y=i("el-icon-circle-close-filled");return s(),o("div",x,[n.type==="success"?(s(),o("div",$,[e(c,null,{default:t(()=>[e(_)]),_:1})])):n.type==="warning"?(s(),o("div",k,[e(c,null,{default:t(()=>[e(d)]),_:1})])):(s(),o("div",w,[e(c,null,{default:t(()=>[e(y)]),_:1})])),r("h1",null,m(n.title),1),n.desc?(s(),o("div",b,m(n.desc),1)):u("v-if",!0),l.$slots.extra?(s(),o("div",N,[v(l.$slots,"extra",{},void 0,!0)])):u("v-if",!0),l.$slots.default?(s(),o("div",S,[v(l.$slots,"default",{},void 0,!0)])):u("v-if",!0)])}}};var V=p(j,[["__scopeId","data-v-cef7b02c"]]);const B={},C=a("\u8FD4\u56DE\u5217\u8868"),q=a("\u6253\u5370"),D=r("div",null,"\u60A8\u63D0\u4EA4\u7684\u5185\u5BB9\u6709\u5982\u4E0B\u9519\u8BEF\uFF1A",-1),E=r("div",null,[a(" \u60A8\u7684\u8D26\u6237\u5DF2\u88AB\u51BB\u7ED3 "),r("a",{href:"###"},"\u6253\u5370")],-1),G=a("\u8FD4\u56DE\u4FEE\u6539");function H(n,l){const f=g,_=i("el-button"),c=V,d=h;return s(),o("div",null,[e(f,{title:"\u5904\u7406\u7ED3\u679C",content:"Result"}),e(d,null,{default:t(()=>[e(c,{type:"success",title:"\u63D0\u4EA4\u6210\u529F",desc:"\u63D0\u4EA4\u7ED3\u679C\u9875\u7528\u4E8E\u53CD\u9988\u4E00\u7CFB\u5217\u64CD\u4F5C\u4EFB\u52A1\u7684\u5904\u7406\u7ED3\u679C\u3002"},{default:t(()=>[e(_,{type:"primary"},{default:t(()=>[C]),_:1}),e(_,null,{default:t(()=>[q]),_:1})]),_:1})]),_:1}),e(d,null,{default:t(()=>[e(c,{type:"error",title:"\u63D0\u4EA4\u5931\u8D25",desc:"\u7070\u8272\u989D\u5916\u533A\u57DF\u53EF\u4EE5\u663E\u793A\u4E00\u4E9B\u8865\u5145\u7684\u4FE1\u606F\u3002\u8BF7\u6838\u5BF9\u5E76\u4FEE\u6539\u4EE5\u4E0B\u4FE1\u606F\u540E\uFF0C\u518D\u91CD\u65B0\u63D0\u4EA4\u3002"},{extra:t(()=>[D,E]),default:t(()=>[e(_,{type:"primary"},{default:t(()=>[G]),_:1})]),_:1})]),_:1})])}var T=p(B,[["render",H]]);export{T as default};
