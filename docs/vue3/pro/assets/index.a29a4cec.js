
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as s}from"./index.281722fb.js";import{_ as o}from"./index.46bcf552.js";import{r as t,n as l,J as n,q as a,l as e,K as r,R as d}from"./vendor.3dac1dfd.js";const c={methods:{close(){this.$tabbar.close("/dashboard")}}},i=r("p",null,"访问侧边栏导航里的任意路由，都会在标签栏里自动创建一个标签。",-1),f=r("p",null,"除了在标签栏里操作关闭标签，你也可以使用全局方法关闭当前页面的标签。但如果当前只有一个标签时，则无法关闭。",-1),u=d("关闭当前标签页");c.render=function(r,d,c,m,b,p){const _=s,h=t("el-button"),j=o;return l(),n("div",null,[a(_,{title:"标签栏",content:"功能类似于浏览器的标签栏，支持右键操作"}),a(j,null,{default:e((()=>[i,f,a(h,{onClick:p.close},{default:e((()=>[u])),_:1},8,["onClick"])])),_:1})])};export{c as default};
