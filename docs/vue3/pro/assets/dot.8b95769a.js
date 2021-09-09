
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.ffbd20e5.js";import{_ as t}from"./index.f03e52fd.js";import{r as s,l as n,J as o,s as a,n as d,K as r,O as i,R as l}from"./vendor.7707186e.js";const u={methods:{change(){this.$store.commit("menuBadge/switchDot")}}},f=l("切换");u.render=function(l,u,m,c,g,h){const p=e,x=s("el-button"),_=t;return n(),o("div",null,[a(p,{title:"点标记",content:"搭配 Vuex 可实现动态设置"}),a(_,null,{default:d((()=>[r("div",null,"当前 badge 值："+i(l.$store.state.menuBadge.dot),1),a(x,{onClick:h.change},{default:d((()=>[f])),_:1},8,["onClick"])])),_:1})])};export{u as default};
