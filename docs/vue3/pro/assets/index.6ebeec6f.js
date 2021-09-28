
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as t}from"./index.d7acb132.js";import{_ as e}from"./index.6d456c03.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";import{r as s,l as i,H as n,s as o,n as l,S as r,P as m,I as u}from"./vendor.1e0be253.js";const d={methods:{toggle(){this.$store.state.settings.mainPageMaximizeStatus?this.$mainPageMaximize(!1):this.$mainPageMaximize(!0)}}},g=u("p",null,"专业版可通过双击标签页，或在标签页上右键并选择“最大化”进入。",-1),p=u("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1);var c=a(d,[["render",function(a,u,d,c,f,x){const _=t,h=s("el-button"),P=e;return i(),n("div",null,[o(_,{title:"主页面最大化",content:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),o(P,null,{default:l((()=>[g,p,o(h,{onClick:x.toggle},{default:l((()=>[r(m(a.$store.state.settings.mainPageMaximizeStatus?"退出":"开启")+"最大化",1)])),_:1},8,["onClick"])])),_:1})])}]]);export{c as default};
