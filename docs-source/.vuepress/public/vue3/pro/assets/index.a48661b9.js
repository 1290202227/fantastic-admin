
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";import{$ as c,l as a,H as s,P as r,L as l,X as p,Y as d,Z as u,M as _,O as v,I as f}from"./vendor.5a8f5a39.js";const h=e=>(_("data-v-d5a7e6e8"),e=e(),v(),e),m={key:0,class:"title-container"},g=h(()=>f("i",{class:"el-icon-arrow-down"},null,-1)),y=[g],S={props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const t=c(e.collaspe);function o(){t.value=!1}return(n,x)=>(a(),s("div",{class:d({"page-main":!0,"is-collaspe":t.value}),style:u({height:t.value?e.height:""})},[e.title?(a(),s("div",m,r(e.title),1)):l("v-if",!0),p(n.$slots,"default",{},void 0,!0),t.value?(a(),s("div",{key:1,class:"collaspe",title:"\u5C55\u5F00",onClick:o},y)):l("v-if",!0)],6))}};var C=i(S,[["__scopeId","data-v-d5a7e6e8"]]);export{C as _};
