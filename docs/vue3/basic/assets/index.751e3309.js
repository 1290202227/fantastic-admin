
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.1ee7394a.js";import{_ as o}from"./index.e2b18078.js";import{r as t,k as n,n as s,q as i,o as a,A as r}from"./vendor.e2e92bee.js";const l={methods:{getPermission(){this.$store.dispatch("user/getPermissions").then((e=>{this.$notify({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:e.map((e=>`<p>${e}</p>`)).join("")})}))},open(e){window.open(e,"top")}}},c=r("Mock.js 官网"),m=r("测试：获取用户权限");l.render=function(r,l,d,p,u,f){const k=t("el-button"),j=e,g=o;return a(),n("div",null,[s(j,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:i((()=>[s(k,{icon:"el-icon-link",onClick:l[0]||(l[0]=e=>f.open("http://mockjs.com/"))},{default:i((()=>[c])),_:1})])),_:1}),s(g,null,{default:i((()=>[s(k,{onClick:f.getPermission},{default:i((()=>[m])),_:1},8,["onClick"])])),_:1})])};export{l as default};
