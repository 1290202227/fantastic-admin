
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.c1f75aed.js";import{_ as t}from"./index.29752973.js";import{r as a,o as s,z as n,i as o,w as i,A as r,F as l,I as d}from"./vendor.b5a7373b.js";const c={methods:{change(){this.$store.commit("menuBadge/setText","热门"==this.$store.state.menuBadge.text?"促销":"热门")},clear(){this.$store.commit("menuBadge/setText")}}},m=d("切换"),u=d("清空");c.render=function(d,c,f,x,g,h){const _=e,b=a("el-button"),k=t;return s(),n("div",null,[o(_,{title:"文字标记",content:"搭配 Vuex 可实现动态设置。请控制文字展示长度，避免导航标记覆盖导航标题"}),o(k,null,{default:i((()=>[r("div",null,"当前 badge 值：'"+l(d.$store.state.menuBadge.text)+"'",1),o(b,{onClick:h.change},{default:i((()=>[m])),_:1},8,["onClick"]),o(b,{onClick:h.clear},{default:i((()=>[u])),_:1},8,["onClick"])])),_:1})])};export{c as default};
