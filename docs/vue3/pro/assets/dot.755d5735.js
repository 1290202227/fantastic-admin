
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as c}from"./index.064dddb5.js";import{_ as r}from"./index.7b6e6fa3.js";import{_ as d}from"./index.87b6d29a.js";import{A as i,j as m,D as e,C as t,o as l,k as p,Y as u,$ as f}from"./vendor.399b4c48.js";const g={methods:{change(){this.$store.commit("menuBadge/switchDot")}}},h=f("\u5207\u6362");function x(o,b,$,j,k,n){const a=r,s=i("el-button"),_=c;return l(),m("div",null,[e(a,{title:"\u70B9\u6807\u8BB0",content:"\u642D\u914D Vuex \u53EF\u5B9E\u73B0\u52A8\u6001\u8BBE\u7F6E"}),e(_,null,{default:t(()=>[p("div",null,"\u5F53\u524D badge \u503C\uFF1A"+u(o.$store.state.menuBadge.dot),1),e(s,{onClick:n.change},{default:t(()=>[h]),_:1},8,["onClick"])]),_:1})])}var D=d(g,[["render",x]]);export{D as default};