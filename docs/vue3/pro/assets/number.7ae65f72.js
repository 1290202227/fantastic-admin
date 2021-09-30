
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.9fbc5cc3.js";import{_ as s}from"./index.c535d87f.js";import{_ as t}from"./plugin-vue_export-helper.5a098b48.js";import{r as n,l as o,H as u,s as a,n as i,I as r,P as m,S as l}from"./vendor.e59ac5d6.js";const c={methods:{plus(){this.$store.commit("menuBadge/setNumber",this.$store.state.menuBadge.number+1)},minus(){this.$store.commit("menuBadge/setNumber",this.$store.state.menuBadge.number-1)}}},d=l("1"),f=l("1");var p=t(c,[["render",function(t,l,c,p,b,g){const _=e,h=n("el-button"),v=s;return o(),u("div",null,[a(_,{title:"数字标记",content:"搭配 Vuex 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),a(v,null,{default:i((()=>[r("div",null,"当前 badge 值："+m(t.$store.state.menuBadge.number),1),a(h,{icon:"el-icon-plus",onClick:g.plus},{default:i((()=>[d])),_:1},8,["onClick"]),a(h,{icon:"el-icon-minus",onClick:g.minus},{default:i((()=>[f])),_:1},8,["onClick"])])),_:1})])}]]);export{p as default};
