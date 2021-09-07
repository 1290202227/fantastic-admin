
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as t}from"./index.281722fb.js";import{_ as e}from"./index.46bcf552.js";import{r as n,n as s,J as a,q as o,l as d,K as r,O as i,R as l}from"./vendor.3dac1dfd.js";const c={methods:{change(){this.$store.commit("menuBadge/switchDot")}}},u=l("切换");c.render=function(l,c,m,f,g,h){const b=t,p=n("el-button"),x=e;return s(),a("div",null,[o(b,{title:"点标记",content:"搭配 Vuex 可实现动态设置"}),o(x,null,{default:d((()=>[r("div",null,"当前 badge 值："+i(l.$store.state.menuBadge.dot),1),o(p,{onClick:h.change},{default:d((()=>[u])),_:1},8,["onClick"])])),_:1})])};export{c as default};
