
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d7acb132.js";import{_ as t}from"./index.6d456c03.js";import{_ as a}from"./index.d703bfe5.js";import{ai as r,u as n,r as s,l,H as i,s as o,n as m,S as u,h as d}from"./vendor.1e0be253.js";import p from"./index.e1be7a64.js";import{_ as f}from"./plugin-vue_export-helper.5a098b48.js";const c=u("返 回"),b=u("提 交"),_=u("取 消"),g=r({name:"PagesExampleDepartmentJobDetail"});var x=f(Object.assign(g,{setup:function(r){const{proxy:u}=d(),f=n();function g(){u.$refs.form.submit((()=>{u.$eventBus.emit("get-data-list"),j()}))}function x(){j()}function j(){f.state.settings.enableTabbar&&!f.state.settings.enableMergeTabbar?u.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):u.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(r,n)=>{const u=s("el-button"),d=e,f=s("el-col"),$=s("el-row"),v=t,D=a;return l(),i("div",null,[o(d,{title:"routerName"==r.$route.name?"新增职位":"编辑职位"},{default:m((()=>[o(u,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:j},{default:m((()=>[c])),_:1})])),_:1},8,["title"]),o(v,null,{default:m((()=>[o($,null,{default:m((()=>[o(f,{md:24,lg:16},{default:m((()=>[o(p,{id:r.$route.params.id,ref:(e,t)=>{t.form=e},"department-id":r.$route.params.department_id},null,8,["id","department-id"])])),_:1})])),_:1})])),_:1}),o(D,null,{default:m((()=>[o(u,{type:"primary",onClick:g},{default:m((()=>[b])),_:1}),o(u,{onClick:x},{default:m((()=>[_])),_:1})])),_:1})])}}}),[["__scopeId","data-v-1c493d51"]]);export{x as default};
