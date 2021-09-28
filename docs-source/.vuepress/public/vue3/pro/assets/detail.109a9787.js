
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d7acb132.js";import{_ as a}from"./index.6d456c03.js";import{_ as t}from"./index.d703bfe5.js";import{ai as s,u as i,r,l,H as n,s as o,n as u,S as d,h as m}from"./vendor.1e0be253.js";import p from"./index.f15c1a72.js";import{_ as f}from"./plugin-vue_export-helper.5a098b48.js";import"./index.1e91b0e8.js";import"./index.e4e8dab3.js";import"./index.2753bf19.js";const c=d("返 回"),b=d("提 交"),_=d("取 消"),x=s({name:"PagesExampleDeliveryDetail"});var g=f(Object.assign(x,{setup:function(s){const{proxy:d}=m(),f=i();function x(){d.$refs.form.submit((()=>{d.$eventBus.emit("get-data-list"),j()}))}function g(){j()}function j(){f.state.settings.enableTabbar&&!f.state.settings.enableMergeTabbar?d.$tabbar.close({name:"pagesExampleShopDeliveryList"}):d.$router.push({name:"pagesExampleShopDeliveryList"})}return(s,i)=>{const d=r("el-button"),m=e,f=r("el-col"),v=r("el-row"),y=a,h=t;return l(),n("div",null,[o(m,{title:"pagesExampleShopDeliveryCreate"==s.$route.name?"新增运费模版":"编辑运费模版"},{default:u((()=>[o(d,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:j},{default:u((()=>[c])),_:1})])),_:1},8,["title"]),o(y,null,{default:u((()=>[o(v,null,{default:u((()=>[o(f,{md:24,lg:16},{default:u((()=>[o(p,{id:s.$route.params.id,ref:(e,a)=>{a.form=e}},null,8,["id"])])),_:1})])),_:1})])),_:1}),o(h,null,{default:u((()=>[o(d,{type:"primary",onClick:x},{default:u((()=>[b])),_:1}),o(d,{onClick:g},{default:u((()=>[_])),_:1})])),_:1})])}}}),[["__scopeId","data-v-c5de91c6"]]);export{g as default};
