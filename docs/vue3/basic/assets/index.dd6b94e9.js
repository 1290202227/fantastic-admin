
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as o}from"./index.afd122f8.js";import{_ as e}from"./index.2f66b5c7.js";import{_ as t}from"./plugin-vue_export-helper.5a098b48.js";import{r as s,a as n,n as i,t as a,x as r,F as l}from"./vendor.8d92a282.js";const c={methods:{getPermission(){this.$store.dispatch("user/getPermissions").then((o=>{this.$notify({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:o.map((o=>`<p>${o}</p>`)).join("")})}))},open(o){window.open(o,"top")}}},m=l("Mock.js 官网"),p=l("测试：获取用户权限");var d=t(c,[["render",function(t,l,c,d,f,u){const k=s("el-button"),j=o,_=e;return n(),i("div",null,[a(j,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:r((()=>[a(k,{icon:"el-icon-link",onClick:l[0]||(l[0]=o=>u.open("http://mockjs.com/"))},{default:r((()=>[m])),_:1})])),_:1}),a(_,null,{default:r((()=>[a(k,{onClick:u.getPermission},{default:r((()=>[p])),_:1},8,["onClick"])])),_:1})])}]]);export{d as default};
