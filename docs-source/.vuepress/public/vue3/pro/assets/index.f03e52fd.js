
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{H as e,I as a,$ as s,l as t,J as l,O as i,S as o,X as c,Y as n,Z as p,K as d}from"./vendor.7707186e.js";e("data-v-151ceb67");const v={key:0,class:"title-container"},r=[d("i",{class:"el-icon-arrow-down"},null,-1)];a();const u={props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const a=s(e.collaspe);function d(){a.value=!1}return(s,u)=>(t(),l("div",{class:n({"page-main":!0,"is-collaspe":a.value}),style:p({height:a.value?e.height:""})},[e.title?(t(),l("div",v,i(e.title),1)):o("v-if",!0),c(s.$slots,"default",{},void 0,!0),a.value?(t(),l("div",{key:1,class:"collaspe",title:"展开",onClick:d},r)):o("v-if",!0)],6))},__scopeId:"data-v-151ceb67"};export{u as _};
