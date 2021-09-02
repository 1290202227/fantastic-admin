
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.c1f75aed.js";import{_ as t}from"./index.29752973.js";import{r as s,o as n,z as o,i,w as u,A as a,F as m,I as r}from"./vendor.b5a7373b.js";const l={methods:{plus(){this.$store.commit("menuBadge/setNumber",this.$store.state.menuBadge.number+1)},minus(){this.$store.commit("menuBadge/setNumber",this.$store.state.menuBadge.number-1)}}},d=r("1"),c=r("1");l.render=function(r,l,b,f,p,g){const h=e,B=s("el-button"),$=t;return n(),o("div",null,[i(h,{title:"数字标记",content:"搭配 Vuex 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),i($,null,{default:u((()=>[a("div",null,"当前 badge 值："+m(r.$store.state.menuBadge.number),1),i(B,{icon:"el-icon-plus",onClick:g.plus},{default:u((()=>[d])),_:1},8,["onClick"]),i(B,{icon:"el-icon-minus",onClick:g.minus},{default:u((()=>[c])),_:1},8,["onClick"])])),_:1})])};export{l as default};
