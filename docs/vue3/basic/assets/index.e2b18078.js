
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{t as a,u as e,o as l,k as s,x as t,s as o,L as c,B as i,D as n,l as p}from"./vendor.e2e92bee.js";const d={name:"PageMain",props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},data(){return{collaspeData:this.collaspe}},methods:{uncollaspe(){this.collaspeData=!1}}};a("data-v-1166c0ca");const r={key:0,class:"title-container"},u=[p("i",{class:"el-icon-arrow-down"},null,-1)];e(),d.render=function(a,e,p,d,h,v){return l(),s("div",{class:i({"page-main":!0,"is-collaspe":h.collaspeData}),style:n({height:h.collaspeData?p.height:""})},[p.title?(l(),s("div",r,t(p.title),1)):o("v-if",!0),c(a.$slots,"default",{},void 0,!0),h.collaspeData?(l(),s("div",{key:1,class:"collaspe",title:"展开",onClick:e[0]||(e[0]=(...a)=>v.uncollaspe&&v.uncollaspe(...a))},u)):o("v-if",!0)],6)},d.__scopeId="data-v-1166c0ca";export{d as _};
