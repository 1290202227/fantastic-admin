
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as t}from"./index.c1f75aed.js";import{_ as a}from"./index.29752973.js";import{r as e,o as s,z as i,i as n,w as o,I as l,F as m,A as r}from"./vendor.b5a7373b.js";const u={methods:{toggle(){this.$store.state.settings.mainPageMaximizeStatus?this.$mainPageMaximize(!1):this.$mainPageMaximize(!0)}}},d=r("p",null,"专业版可通过双击标签页，或在标签页上右键并选择“最大化”进入。",-1),g=r("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1);u.render=function(r,u,f,c,x,p){const z=t,h=e("el-button"),M=a;return s(),i("div",null,[n(z,{title:"主页面最大化",content:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),n(M,null,{default:o((()=>[d,g,n(h,{onClick:p.toggle},{default:o((()=>[l(m(r.$store.state.settings.mainPageMaximizeStatus?"退出":"开启")+"最大化",1)])),_:1},8,["onClick"])])),_:1})])};export{u as default};
