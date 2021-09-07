
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{H as a,I as e,$ as s,n as t,J as l,O as i,S as o,X as c,Y as n,Z as d,K as p}from"./vendor.3dac1dfd.js";a("data-v-060ec472");const v={key:0,class:"title-container"},r=[p("i",{class:"el-icon-arrow-down"},null,-1)];e();const u={props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(a){const e=s(a.collaspe);function p(){e.value=!1}return(s,u)=>(t(),l("div",{class:n({"page-main":!0,"is-collaspe":e.value}),style:d({height:e.value?a.height:""})},[a.title?(t(),l("div",v,i(a.title),1)):o("v-if",!0),c(s.$slots,"default",{},void 0,!0),e.value?(t(),l("div",{key:1,class:"collaspe",title:"展开",onClick:p},r)):o("v-if",!0)],6))},__scopeId:"data-v-060ec472"};export{u as _};
