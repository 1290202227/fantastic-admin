
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as t}from"./index.281722fb.js";import{_ as a}from"./index.46bcf552.js";import{r as e,n as s,J as i,q as n,l as o,R as l,O as m,K as r}from"./vendor.3dac1dfd.js";const d={methods:{toggle(){this.$store.state.settings.mainPageMaximizeStatus?this.$mainPageMaximize(!1):this.$mainPageMaximize(!0)}}},u=r("p",null,"专业版可通过双击标签页，或在标签页上右键并选择“最大化”进入。",-1),f=r("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1);d.render=function(r,d,g,c,x,p){const h=t,z=e("el-button"),M=a;return s(),i("div",null,[n(h,{title:"主页面最大化",content:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),n(M,null,{default:o((()=>[u,f,n(z,{onClick:p.toggle},{default:o((()=>[l(m(r.$store.state.settings.mainPageMaximizeStatus?"退出":"开启")+"最大化",1)])),_:1},8,["onClick"])])),_:1})])};export{d as default};
