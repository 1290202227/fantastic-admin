
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as o}from"./index.d0cc88c3.js";import{_ as e}from"./index.34d43001.js";import{r as t,a as s,s as n,y as i,z as a,F as c}from"./vendor.ebf75cd4.js";const r={methods:{getPermission(){this.$store.dispatch("user/getPermissions").then((o=>{this.$notify({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:o.map((o=>`<p>${o}</p>`)).join("")})}))},open(o){window.open(o,"top")}}},l=c("Mock.js 官网"),d=c("测试：获取用户权限");r.render=function(c,r,m,p,u,f){const k=t("el-button"),j=o,g=e;return s(),n("div",null,[i(j,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:a((()=>[i(k,{icon:"el-icon-link",onClick:r[0]||(r[0]=o=>f.open("http://mockjs.com/"))},{default:a((()=>[l])),_:1})])),_:1}),i(g,null,{default:a((()=>[i(k,{onClick:f.getPermission},{default:a((()=>[d])),_:1},8,["onClick"])])),_:1})])};export{r as default};
