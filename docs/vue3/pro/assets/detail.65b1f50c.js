
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.9fbc5cc3.js";import{_ as a}from"./index.c535d87f.js";import{_ as t}from"./index.f073fbaf.js";import{ai as r,u as o,r as s,l,H as n,s as i,n as m,S as u,h as d}from"./vendor.e59ac5d6.js";import f from"./index.276d7b65.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";const c=u("返 回"),b=u("提 交"),_=u("取 消"),g=r({name:"PagesExampleFormModeDetail"});var x=p(Object.assign(g,{setup:function(r){const{proxy:u}=d(),p=o();function g(){u.$refs.form.submit((()=>{u.$eventBus.emit("get-data-list"),j()}))}function x(){j()}function j(){p.state.settings.enableTabbar&&!p.state.settings.enableMergeTabbar?u.$tabbar.close({name:"pagesExampleGeneralFormModeList"}):u.$router.push({name:"pagesExampleGeneralFormModeList"})}return(r,o)=>{const u=s("el-button"),d=e,p=s("el-col"),v=s("el-row"),$=a,M=t;return l(),n("div",null,[i(d,{title:"pagesExampleGeneralFormModeCreate"==r.$route.name?"新增":"编辑"},{default:m((()=>[i(u,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:j},{default:m((()=>[c])),_:1})])),_:1},8,["title"]),i($,null,{default:m((()=>[i(v,null,{default:m((()=>[i(p,{md:24,lg:16},{default:m((()=>[i(f,{id:r.$route.params.id,ref:(e,a)=>{a.form=e}},null,8,["id"])])),_:1})])),_:1})])),_:1}),i(M,null,{default:m((()=>[i(u,{type:"primary",onClick:g},{default:m((()=>[b])),_:1}),i(u,{onClick:x},{default:m((()=>[_])),_:1})])),_:1})])}}}),[["__scopeId","data-v-1597d4b8"]]);export{x as default};
