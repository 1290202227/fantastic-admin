
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{x as e,y as o,r as t,o as s,z as a,M as i,i as l,w as n,I as d,F as r,J as c}from"./vendor.b5a7373b.js";const f={name:"SearchBar",props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],data(){return{isUnfold:!this.unfold}},watch:{unfold:{handler(){this.toggle()},immediate:!0}},methods:{toggle(){this.isUnfold=!this.isUnfold,this.$emit("toggle",this.isUnfold)}}};e("data-v-ebefc0e2");const h={class:"search-container"},m={key:0,class:"more"};o(),f.render=function(e,o,f,u,g,p){const v=t("el-button");return s(),a("div",h,[i(e.$slots,"default",{},void 0,!0),f.showMore?(s(),a("div",m,[l(v,{type:"text",size:"small",icon:g.isUnfold?"el-icon-caret-top":"el-icon-caret-bottom",onClick:p.toggle},{default:n((()=>[d(r(g.isUnfold?"收起":"展开"),1)])),_:1},8,["icon","onClick"])])):c("v-if",!0)])},f.__scopeId="data-v-ebefc0e2";export{f as _};
