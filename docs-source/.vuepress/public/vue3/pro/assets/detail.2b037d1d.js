
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.9fbc5cc3.js";import{_ as t}from"./index.c535d87f.js";import{_ as a}from"./index.f073fbaf.js";import{ai as r,u as n,r as s,l,H as i,s as o,n as m,S as u,h as d}from"./vendor.e59ac5d6.js";import f from"./index.943f7c3d.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";const c=u("返 回"),_=u("提 交"),b=u("取 消"),g=r({name:"PagesExampleDepartmentJobDetail"});var x=p(Object.assign(g,{setup:function(r){const{proxy:u}=d(),p=n();function g(){u.$refs.form.submit((()=>{u.$eventBus.emit("get-data-list"),j()}))}function x(){j()}function j(){p.state.settings.enableTabbar&&!p.state.settings.enableMergeTabbar?u.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):u.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(r,n)=>{const u=s("el-button"),d=e,p=s("el-col"),$=s("el-row"),v=t,D=a;return l(),i("div",null,[o(d,{title:"routerName"==r.$route.name?"新增职位":"编辑职位"},{default:m((()=>[o(u,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:j},{default:m((()=>[c])),_:1})])),_:1},8,["title"]),o(v,null,{default:m((()=>[o($,null,{default:m((()=>[o(p,{md:24,lg:16},{default:m((()=>[o(f,{id:r.$route.params.id,ref:(e,t)=>{t.form=e},"department-id":r.$route.params.department_id},null,8,["id","department-id"])])),_:1})])),_:1})])),_:1}),o(D,null,{default:m((()=>[o(u,{type:"primary",onClick:g},{default:m((()=>[_])),_:1}),o(u,{onClick:x},{default:m((()=>[b])),_:1})])),_:1})])}}}),[["__scopeId","data-v-1c493d51"]]);export{x as default};
