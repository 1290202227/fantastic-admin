
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_}from"./index.fd3dd73e.js";import{r as p,A as l,o as a,j as o,Z as u,l as s,a5 as f,D as n,C as v,a7 as m,F as y}from"./vendor.0c4fd540.js";const g={key:0,class:"title-container"},h={props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const t=p(e.collaspe);function i(){t.value=!1}return(c,x)=>{const r=l("el-icon-arrow-down"),d=l("el-icon");return a(),o("div",{class:m({"page-main":!0,"is-collaspe":t.value}),style:y({height:t.value?e.height:""})},[e.title?(a(),o("div",g,u(e.title),1)):s("v-if",!0),f(c.$slots,"default",{},void 0,!0),t.value?(a(),o("div",{key:1,class:"collaspe",title:"\u5C55\u5F00",onClick:i},[n(d,null,{default:v(()=>[n(r)]),_:1})])):s("v-if",!0)],6)}}};var S=_(h,[["__scopeId","data-v-947eb2b8"]]);export{S as _};
