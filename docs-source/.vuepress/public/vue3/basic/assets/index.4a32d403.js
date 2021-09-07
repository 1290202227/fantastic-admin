
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as o}from"./index.407496b8.js";import{_ as e}from"./index.fb938e69.js";import{r as t,a as s,s as n,y as i,z as a,F as r}from"./vendor.505a4e11.js";const l={methods:{getPermission(){this.$store.dispatch("user/getPermissions").then((o=>{this.$notify({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:o.map((o=>`<p>${o}</p>`)).join("")})}))},open(o){window.open(o,"top")}}},c=r("Mock.js 官网"),m=r("测试：获取用户权限");l.render=function(r,l,d,p,u,f){const k=t("el-button"),j=o,g=e;return s(),n("div",null,[i(j,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:a((()=>[i(k,{icon:"el-icon-link",onClick:l[0]||(l[0]=o=>f.open("http://mockjs.com/"))},{default:a((()=>[c])),_:1})])),_:1}),i(g,null,{default:a((()=>[i(k,{onClick:f.getPermission},{default:a((()=>[m])),_:1},8,["onClick"])])),_:1})])};export{l as default};
