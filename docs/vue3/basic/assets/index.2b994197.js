
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_}from"./plugin-vue_export-helper.5a098b48.js";import{v as u,r as o,a,x as l,F as d,J as s,a3 as v,C as n,D as f,T as m,S as g}from"./vendor.24e2c579.js";const h={key:0,class:"title-container"},y={props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const t=u(e.collaspe);function c(){t.value=!1}return(i,C)=>{const r=o("el-icon-arrow-down"),p=o("el-icon");return a(),l("div",{class:m({"page-main":!0,"is-collaspe":t.value}),style:g({height:t.value?e.height:""})},[e.title?(a(),l("div",h,d(e.title),1)):s("v-if",!0),v(i.$slots,"default",{},void 0,!0),t.value?(a(),l("div",{key:1,class:"collaspe",title:"\u5C55\u5F00",onClick:c},[n(p,null,{default:f(()=>[n(r)]),_:1})])):s("v-if",!0)],6)}}};var w=_(y,[["__scopeId","data-v-1559cb8c"]]);export{w as _};
