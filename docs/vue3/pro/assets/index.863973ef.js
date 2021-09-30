
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as t}from"./index.9fbc5cc3.js";import{_ as e}from"./index.c535d87f.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";import{r as s,l as i,H as n,s as o,n as l,S as r,P as m,I as u}from"./vendor.e59ac5d6.js";const c={methods:{toggle(){this.$store.state.settings.mainPageMaximizeStatus?this.$mainPageMaximize(!1):this.$mainPageMaximize(!0)}}},d=u("p",null,"专业版可通过双击标签页，或在标签页上右键并选择“最大化”进入。",-1),g=u("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1);var f=a(c,[["render",function(a,u,c,f,p,x){const _=t,h=s("el-button"),P=e;return i(),n("div",null,[o(_,{title:"主页面最大化",content:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),o(P,null,{default:l((()=>[d,g,o(h,{onClick:x.toggle},{default:l((()=>[r(m(a.$store.state.settings.mainPageMaximizeStatus?"退出":"开启")+"最大化",1)])),_:1},8,["onClick"])])),_:1})])}]]);export{f as default};
