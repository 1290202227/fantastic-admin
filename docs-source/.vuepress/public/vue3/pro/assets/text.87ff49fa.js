
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as r}from"./index.38ee8e38.js";import{_ as i}from"./index.5eccff10.js";import{_ as l}from"./index.4eab8609.js";import{A as m,j as d,D as e,C as t,o as u,k as p,Y as f,$ as s}from"./vendor.399b4c48.js";const x={methods:{change(){this.$store.commit("menuBadge/setText",this.$store.state.menuBadge.text=="\u70ED\u95E8"?"\u4FC3\u9500":"\u70ED\u95E8")},clear(){this.$store.commit("menuBadge/setText")}}},g=s("\u5207\u6362"),h=s("\u6E05\u7A7A");function $(a,k,B,C,b,o){const c=i,n=m("el-button"),_=r;return u(),d("div",null,[e(c,{title:"\u6587\u5B57\u6807\u8BB0",content:"\u642D\u914D Vuex \u53EF\u5B9E\u73B0\u52A8\u6001\u8BBE\u7F6E\u3002\u8BF7\u63A7\u5236\u6587\u5B57\u5C55\u793A\u957F\u5EA6\uFF0C\u907F\u514D\u5BFC\u822A\u6807\u8BB0\u8986\u76D6\u5BFC\u822A\u6807\u9898"}),e(_,null,{default:t(()=>[p("div",null,"\u5F53\u524D badge \u503C\uFF1A'"+f(a.$store.state.menuBadge.text)+"'",1),e(n,{onClick:o.change},{default:t(()=>[g]),_:1},8,["onClick"]),e(n,{onClick:o.clear},{default:t(()=>[h]),_:1},8,["onClick"])]),_:1})])}var T=l(x,[["render",$]]);export{T as default};
