
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.ffbd20e5.js";import{_ as o}from"./index.f03e52fd.js";import{r as t,l as s,J as n,s as i,n as r,R as a}from"./vendor.7707186e.js";const l={methods:{getPermission(){this.$store.dispatch("user/getPermissions").then((e=>{this.$notify({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:e.map((e=>`<p>${e}</p>`)).join("")})}))},open(e){window.open(e,"top")}}},c=a("Mock.js 官网"),d=a("测试：获取用户权限");l.render=function(a,l,m,f,p,u){const k=t("el-button"),j=e,g=o;return s(),n("div",null,[i(j,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:r((()=>[i(k,{icon:"el-icon-link",onClick:l[0]||(l[0]=e=>u.open("http://mockjs.com/"))},{default:r((()=>[c])),_:1})])),_:1}),i(g,null,{default:r((()=>[i(k,{onClick:u.getPermission},{default:r((()=>[d])),_:1},8,["onClick"])])),_:1})])};export{l as default};
