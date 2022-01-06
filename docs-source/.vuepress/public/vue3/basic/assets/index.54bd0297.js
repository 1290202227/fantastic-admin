
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{D as u,r as o,b as a,F as l,M as d,J as n,a3 as f,g as s,f as v,T as m,n as g}from"./vendor.2f16a3e8.js";const h={key:0,class:"title-container"},y={props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const t=u(e.collaspe);function i(){t.value=!1}return(r,C)=>{const c=o("el-icon-arrow-down"),p=o("el-icon");return a(),l("div",{class:m({"page-main":!0,"is-collaspe":t.value}),style:g({height:t.value?e.height:""})},[e.title?(a(),l("div",h,d(e.title),1)):n("v-if",!0),f(r.$slots,"default",{},void 0,!0),t.value?(a(),l("div",{key:1,class:"collaspe",title:"\u5C55\u5F00",onClick:i},[s(p,null,{default:v(()=>[s(c)]),_:1})])):n("v-if",!0)],6)}}};var S=_(y,[["__scopeId","data-v-947eb2b8"]]);export{S as _};
