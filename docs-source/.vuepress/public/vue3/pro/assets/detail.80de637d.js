
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.9fbc5cc3.js";import{_ as a}from"./index.c535d87f.js";import{_ as t}from"./index.f073fbaf.js";import{ai as s,u as i,r,l,H as n,s as o,n as f,S as u,h as m}from"./vendor.e59ac5d6.js";import d from"./index.fa806abd.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";import"./index.412bec49.js";import"./index.e7a764ff.js";import"./index.1eae09bb.js";const c=u("返 回"),b=u("提 交"),_=u("取 消"),x=s({name:"PagesExampleDeliveryDetail"});var g=p(Object.assign(x,{setup:function(s){const{proxy:u}=m(),p=i();function x(){u.$refs.form.submit((()=>{u.$eventBus.emit("get-data-list"),j()}))}function g(){j()}function j(){p.state.settings.enableTabbar&&!p.state.settings.enableMergeTabbar?u.$tabbar.close({name:"pagesExampleShopDeliveryList"}):u.$router.push({name:"pagesExampleShopDeliveryList"})}return(s,i)=>{const u=r("el-button"),m=e,p=r("el-col"),v=r("el-row"),y=a,h=t;return l(),n("div",null,[o(m,{title:"pagesExampleShopDeliveryCreate"==s.$route.name?"新增运费模版":"编辑运费模版"},{default:f((()=>[o(u,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:j},{default:f((()=>[c])),_:1})])),_:1},8,["title"]),o(y,null,{default:f((()=>[o(v,null,{default:f((()=>[o(p,{md:24,lg:16},{default:f((()=>[o(d,{id:s.$route.params.id,ref:(e,a)=>{a.form=e}},null,8,["id"])])),_:1})])),_:1})])),_:1}),o(h,null,{default:f((()=>[o(u,{type:"primary",onClick:x},{default:f((()=>[b])),_:1}),o(u,{onClick:g},{default:f((()=>[_])),_:1})])),_:1})])}}}),[["__scopeId","data-v-c5de91c6"]]);export{g as default};
