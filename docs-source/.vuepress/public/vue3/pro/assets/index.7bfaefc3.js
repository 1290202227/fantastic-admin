
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as r}from"./index.5b1f41b8.js";import{_ as p}from"./index.3f87d51d.js";import{_ as d}from"./index.0d16c6a6.js";import{A as m,j as l,D as t,C as n,o as u,a0 as c}from"./vendor.0c4fd540.js";const f={methods:{getPermission(){this.$store.dispatch("user/getPermissions").then(e=>{this.$notify({title:"\u5F53\u524D\u7528\u6237\u6743\u9650",dangerouslyUseHTMLString:!0,message:e.map(o=>`<p>${o}</p>`).join("")})})},open(e){window.open(e,"top")}}},k=c("Mock.js \u5B98\u7F51"),g=c("\u6D4B\u8BD5\uFF1A\u83B7\u53D6\u7528\u6237\u6743\u9650");function x(e,o,h,j,$,s){const i=m("el-button"),_=p,a=r;return u(),l("div",null,[t(_,{title:"Mock",content:"\u901A\u8FC7\u62E6\u622A Ajax \u8BF7\u6C42\uFF0C\u8FD4\u56DE\u6A21\u62DF\u7684\u54CD\u5E94\u6570\u636E\uFF0C\u53EF\u4EE5\u8BA9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u72EC\u7ACB\u4E8E\u540E\u7AEF\u8FDB\u884C\u5F00\u53D1\uFF0C\u672C\u6F14\u793A\u7AD9\u7684\u767B\u5F55\u548C\u6743\u9650\u83B7\u53D6\u5C31\u662F\u901A\u8FC7 mock \u5B9E\u73B0\u7684\u3002\u66F4\u591A Mock \u8BED\u6CD5\u89C4\u5219\u8BF7\u67E5\u8BE2\u5B98\u65B9\u6587\u6863"},{default:n(()=>[t(i,{icon:"el-icon-link",onClick:o[0]||(o[0]=C=>s.open("http://mockjs.com/"))},{default:n(()=>[k]),_:1})]),_:1}),t(a,null,{default:n(()=>[t(i,{onClick:s.getPermission},{default:n(()=>[g]),_:1},8,["onClick"])]),_:1})])}var P=d(f,[["render",x]]);export{P as default};
