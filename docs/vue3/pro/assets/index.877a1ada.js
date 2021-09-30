
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as o}from"./index.9fbc5cc3.js";import{_ as e}from"./index.c535d87f.js";import{_ as t}from"./plugin-vue_export-helper.5a098b48.js";import{r as s,l as n,H as i,s as r,n as a,S as c}from"./vendor.e59ac5d6.js";const l={methods:{getPermission(){this.$store.dispatch("user/getPermissions").then((o=>{this.$notify({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:o.map((o=>`<p>${o}</p>`)).join("")})}))},open(o){window.open(o,"top")}}},m=c("Mock.js 官网"),p=c("测试：获取用户权限");var d=t(l,[["render",function(t,c,l,d,u,f){const k=s("el-button"),j=o,_=e;return n(),i("div",null,[r(j,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:a((()=>[r(k,{icon:"el-icon-link",onClick:c[0]||(c[0]=o=>f.open("http://mockjs.com/"))},{default:a((()=>[m])),_:1})])),_:1}),r(_,null,{default:a((()=>[r(k,{onClick:f.getPermission},{default:a((()=>[p])),_:1},8,["onClick"])])),_:1})])}]]);export{d as default};
