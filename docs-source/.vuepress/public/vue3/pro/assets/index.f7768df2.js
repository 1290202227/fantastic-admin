
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as o}from"./index.c1f75aed.js";import{_ as s}from"./index.29752973.js";import{r as t,o as a,z as e,i as l,w as n,A as r,I as d}from"./vendor.b5a7373b.js";const i={methods:{close(){this.$tabbar.close("/dashboard")}}},c=r("p",null,"访问侧边栏导航里的任意路由，都会在标签栏里自动创建一个标签。",-1),u=r("p",null,"除了在标签栏里操作关闭标签，你也可以使用全局方法关闭当前页面的标签。但如果当前只有一个标签时，则无法关闭。",-1),f=d("关闭当前标签页");i.render=function(r,d,i,m,b,p){const _=o,h=t("el-button"),j=s;return a(),e("div",null,[l(_,{title:"标签栏",content:"功能类似于浏览器的标签栏，支持右键操作"}),l(j,null,{default:n((()=>[c,u,l(h,{onClick:p.close},{default:n((()=>[f])),_:1},8,["onClick"])])),_:1})])};export{i as default};
