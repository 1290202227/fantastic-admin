
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.281722fb.js";import{_ as t}from"./index.46bcf552.js";import{r as s,n as a,J as n,q as o,l as d,K as l,O as r,R as i}from"./vendor.3dac1dfd.js";const c={methods:{change(){this.$store.commit("menuBadge/setText","热门"==this.$store.state.menuBadge.text?"促销":"热门")},clear(){this.$store.commit("menuBadge/setText")}}},m=i("切换"),u=i("清空");c.render=function(i,c,f,x,g,h){const _=e,b=s("el-button"),k=t;return a(),n("div",null,[o(_,{title:"文字标记",content:"搭配 Vuex 可实现动态设置。请控制文字展示长度，避免导航标记覆盖导航标题"}),o(k,null,{default:d((()=>[l("div",null,"当前 badge 值：'"+r(i.$store.state.menuBadge.text)+"'",1),o(b,{onClick:h.change},{default:d((()=>[m])),_:1},8,["onClick"]),o(b,{onClick:h.clear},{default:d((()=>[u])),_:1},8,["onClick"])])),_:1})])};export{c as default};
