
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as m}from"./index.6f334b18.js";import{_ as u}from"./index.a48661b9.js";import{_}from"./plugin-vue_export-helper.5a098b48.js";import{r as c,l,H as p,s as e,n as t,I as d,P as f,S as s}from"./vendor.5a8f5a39.js";const b={methods:{plus(){this.$store.commit("menuBadge/setNumber",this.$store.state.menuBadge.number+1)},minus(){this.$store.commit("menuBadge/setNumber",this.$store.state.menuBadge.number-1)}}},g=s("1"),h=s("1");function x(a,B,$,k,v,n){const r=m,o=c("el-button"),i=u;return l(),p("div",null,[e(r,{title:"\u6570\u5B57\u6807\u8BB0",content:"\u642D\u914D Vuex \u53EF\u5B9E\u73B0\u52A8\u6001\u8BBE\u7F6E\u3002\u8BF7\u63A7\u5236\u6570\u5B57\u5C55\u793A\u957F\u5EA6\uFF0C\u907F\u514D\u5BFC\u822A\u6807\u8BB0\u8986\u76D6\u5BFC\u822A\u6807\u9898\uFF0C\u4E3A 0 \u65F6\u5219\u9690\u85CF"}),e(i,null,{default:t(()=>[d("div",null,"\u5F53\u524D badge \u503C\uFF1A"+f(a.$store.state.menuBadge.number),1),e(o,{icon:"el-icon-plus",onClick:n.plus},{default:t(()=>[g]),_:1},8,["onClick"]),e(o,{icon:"el-icon-minus",onClick:n.minus},{default:t(()=>[h]),_:1},8,["onClick"])]),_:1})])}var S=_(b,[["render",x]]);export{S as default};
