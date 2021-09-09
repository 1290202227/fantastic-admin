
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as s}from"./index.ffbd20e5.js";import{_ as e}from"./index.f03e52fd.js";import{r as o,l as t,J as l,s as n,n as a,K as r,R as d}from"./vendor.7707186e.js";const f={methods:{close(){this.$tabbar.close("/dashboard")}}},i=r("p",null,"访问侧边栏导航里的任意路由，都会在标签栏里自动创建一个标签。",-1),u=r("p",null,"除了在标签栏里操作关闭标签，你也可以使用全局方法关闭当前页面的标签。但如果当前只有一个标签时，则无法关闭。",-1),c=d("关闭当前标签页");f.render=function(r,d,f,m,p,b){const _=s,h=o("el-button"),j=e;return t(),l("div",null,[n(_,{title:"标签栏",content:"功能类似于浏览器的标签栏，支持右键操作"}),n(j,null,{default:a((()=>[i,u,n(h,{onClick:b.close},{default:a((()=>[c])),_:1},8,["onClick"])])),_:1})])};export{f as default};
