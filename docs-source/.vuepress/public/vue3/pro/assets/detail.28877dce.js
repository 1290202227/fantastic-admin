
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.9fbc5cc3.js";import{_ as a}from"./index.c535d87f.js";import{_ as t}from"./index.f073fbaf.js";import{ai as r,u as n,r as s,l,H as o,s as i,n as u,S as f,h as m}from"./vendor.e59ac5d6.js";import d from"./index.b19184db.js";import{_ as c}from"./plugin-vue_export-helper.5a098b48.js";const p=f("返 回"),b=f("提 交"),_=f("取 消"),g=r({name:"PagesExampleManagerDetail"});var x=c(Object.assign(g,{setup:function(r){const{proxy:f}=m(),c=n();function g(){f.$refs.form.submit((()=>{f.$eventBus.emit("get-data-list"),j()}))}function x(){j()}function j(){c.state.settings.enableTabbar&&!c.state.settings.enableMergeTabbar?f.$tabbar.close({name:"pagesExampleGeneralManagerList"}):f.$router.push({name:"pagesExampleGeneralManagerList"})}return(r,n)=>{const f=s("el-button"),m=e,c=s("el-col"),v=s("el-row"),$=a,M=t;return l(),o("div",null,[i(m,{title:"routerName"==r.$route.name?"新增管理员":"编辑管理员"},{default:u((()=>[i(f,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:j},{default:u((()=>[p])),_:1})])),_:1},8,["title"]),i($,null,{default:u((()=>[i(v,null,{default:u((()=>[i(c,{md:24,lg:16},{default:u((()=>[i(d,{id:r.$route.params.id,ref:(e,a)=>{a.form=e}},null,8,["id"])])),_:1})])),_:1})])),_:1}),i(M,null,{default:u((()=>[i(f,{type:"primary",onClick:g},{default:u((()=>[b])),_:1}),i(f,{onClick:x},{default:u((()=>[_])),_:1})])),_:1})])}}}),[["__scopeId","data-v-a7d26a4c"]]);export{x as default};
