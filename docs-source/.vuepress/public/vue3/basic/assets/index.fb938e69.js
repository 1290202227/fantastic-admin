
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{n as a,q as e,K as s,a as t,s as l,B as i,A as o,_ as c,H as n,I as p,t as d}from"./vendor.505a4e11.js";a("data-v-060ec472");const v={key:0,class:"title-container"},r=[d("i",{class:"el-icon-arrow-down"},null,-1)];e();const u={props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(a){const e=s(a.collaspe);function d(){e.value=!1}return(s,u)=>(t(),l("div",{class:n({"page-main":!0,"is-collaspe":e.value}),style:p({height:e.value?a.height:""})},[a.title?(t(),l("div",v,i(a.title),1)):o("v-if",!0),c(s.$slots,"default",{},void 0,!0),e.value?(t(),l("div",{key:1,class:"collaspe",title:"展开",onClick:d},r)):o("v-if",!0)],6))},__scopeId:"data-v-060ec472"};export{u as _};
