
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as r}from"./index.3e3f69e0.js";import{_ as c}from"./index.fce7b427.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";import{r as p,m as l,Q as m,t as e,q as t,R as d,U as u,Y as f}from"./vendor.3faf3917.js";const g={methods:{change(){this.$store.commit("menuBadge/switchDot")}}},h=f("\u5207\u6362");function x(o,v,$,b,B,n){const a=c,s=p("el-button"),_=r;return l(),m("div",null,[e(a,{title:"\u70B9\u6807\u8BB0",content:"\u642D\u914D Vuex \u53EF\u5B9E\u73B0\u52A8\u6001\u8BBE\u7F6E"}),e(_,null,{default:t(()=>[d("div",null,"\u5F53\u524D badge \u503C\uFF1A"+u(o.$store.state.menuBadge.dot),1),e(s,{onClick:n.change},{default:t(()=>[h]),_:1},8,["onClick"])]),_:1})])}var N=i(g,[["render",x]]);export{N as default};