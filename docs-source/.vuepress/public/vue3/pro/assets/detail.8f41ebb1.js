
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d7acb132.js";import{_ as t}from"./index.6d456c03.js";import{_ as a}from"./index.d703bfe5.js";import{ai as r,u as n,r as s,l,H as o,s as i,n as u,S as m,h as d}from"./vendor.1e0be253.js";import f from"./index.77209619.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";const c=m("返 回"),b=m("提 交"),_=m("取 消"),g=r({name:"PagesExampleDepartmentDetail"});var x=p(Object.assign(g,{setup:function(r){const{proxy:m}=d(),p=n();function g(){m.$refs.form.submit((()=>{m.$eventBus.emit("get-data-list"),j()}))}function x(){j()}function j(){p.state.settings.enableTabbar&&!p.state.settings.enableMergeTabbar?m.$tabbar.close({name:"pagesExampleGeneralDepartmentList"}):m.$router.push({name:"pagesExampleGeneralDepartmentList"})}return(r,n)=>{const m=s("el-button"),d=e,p=s("el-col"),v=s("el-row"),$=t,D=a;return l(),o("div",null,[i(d,{title:"routerName"==r.$route.name?"新增部门":"编辑部门"},{default:u((()=>[i(m,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:j},{default:u((()=>[c])),_:1})])),_:1},8,["title"]),i($,null,{default:u((()=>[i(v,null,{default:u((()=>[i(p,{md:24,lg:16},{default:u((()=>[i(f,{id:r.$route.params.id,ref:(e,t)=>{t.form=e}},null,8,["id"])])),_:1})])),_:1})])),_:1}),i(D,null,{default:u((()=>[i(m,{type:"primary",onClick:g},{default:u((()=>[b])),_:1}),i(m,{onClick:x},{default:u((()=>[_])),_:1})])),_:1})])}}}),[["__scopeId","data-v-5a3e761f"]]);export{x as default};
