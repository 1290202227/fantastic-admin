
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.ffbd20e5.js";import{_ as t}from"./index.f03e52fd.js";import{r as s,l as a,J as n,s as o,n as l,K as r,O as d,R as i}from"./vendor.7707186e.js";const m={methods:{change(){this.$store.commit("menuBadge/setText","热门"==this.$store.state.menuBadge.text?"促销":"热门")},clear(){this.$store.commit("menuBadge/setText")}}},u=i("切换"),c=i("清空");m.render=function(i,m,f,x,g,h){const _=e,k=s("el-button"),p=t;return a(),n("div",null,[o(_,{title:"文字标记",content:"搭配 Vuex 可实现动态设置。请控制文字展示长度，避免导航标记覆盖导航标题"}),o(p,null,{default:l((()=>[r("div",null,"当前 badge 值：'"+d(i.$store.state.menuBadge.text)+"'",1),o(k,{onClick:h.change},{default:l((()=>[u])),_:1},8,["onClick"]),o(k,{onClick:h.clear},{default:l((()=>[c])),_:1},8,["onClick"])])),_:1})])};export{m as default};
