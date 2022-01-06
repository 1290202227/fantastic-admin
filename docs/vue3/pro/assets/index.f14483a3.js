
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as p}from"./index.6da96519.js";import{r as u,A as l,o as a,k as o,Z as d,m as s,a5 as f,D as n,C as m,a7 as v,F as y}from"./vendor.ab59999c.js";const g={key:0,class:"title-container"},h={props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const t=u(e.collaspe);function c(){t.value=!1}return(i,k)=>{const r=l("el-icon-arrow-down"),_=l("el-icon");return a(),o("div",{class:v({"page-main":!0,"is-collaspe":t.value}),style:y({height:t.value?e.height:""})},[e.title?(a(),o("div",g,d(e.title),1)):s("v-if",!0),f(i.$slots,"default",{},void 0,!0),t.value?(a(),o("div",{key:1,class:"collaspe",title:"\u5C55\u5F00",onClick:c},[n(_,null,{default:m(()=>[n(r)]),_:1})])):s("v-if",!0)],6)}}};var S=p(h,[["__scopeId","data-v-1559cb8c"]]);export{S as _};
