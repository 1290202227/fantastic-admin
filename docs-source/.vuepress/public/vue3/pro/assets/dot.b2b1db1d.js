
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as t}from"./index.c1f75aed.js";import{_ as e}from"./index.29752973.js";import{r as a,o,z as s,i as n,w as d,A as i,F as r,I as l}from"./vendor.b5a7373b.js";const u={methods:{change(){this.$store.commit("menuBadge/switchDot")}}},c=l("切换");u.render=function(l,u,m,f,g,h){const b=t,p=a("el-button"),x=e;return o(),s("div",null,[n(b,{title:"点标记",content:"搭配 Vuex 可实现动态设置"}),n(x,null,{default:d((()=>[i("div",null,"当前 badge 值："+r(l.$store.state.menuBadge.dot),1),n(p,{onClick:h.change},{default:d((()=>[c])),_:1},8,["onClick"])])),_:1})])};export{u as default};
