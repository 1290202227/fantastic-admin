
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{n as a,q as e,K as s,a as t,s as l,A as i,D as o,$ as c,H as n,I as d,t as p}from"./vendor.ebf75cd4.js";a("data-v-151ceb67");const v={key:0,class:"title-container"},r=[p("i",{class:"el-icon-arrow-down"},null,-1)];e();const u={props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(a){const e=s(a.collaspe);function p(){e.value=!1}return(s,u)=>(t(),l("div",{class:n({"page-main":!0,"is-collaspe":e.value}),style:d({height:e.value?a.height:""})},[a.title?(t(),l("div",v,i(a.title),1)):o("v-if",!0),c(s.$slots,"default",{},void 0,!0),e.value?(t(),l("div",{key:1,class:"collaspe",title:"展开",onClick:p},r)):o("v-if",!0)],6))},__scopeId:"data-v-151ceb67"};export{u as _};
