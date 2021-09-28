
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d7acb132.js";import{_ as s}from"./index.6d456c03.js";import{_ as t}from"./plugin-vue_export-helper.5a098b48.js";import{r as n,l as o,H as u,s as a,n as i,I as r,P as m,S as l}from"./vendor.1e0be253.js";const d={methods:{plus(){this.$store.commit("menuBadge/setNumber",this.$store.state.menuBadge.number+1)},minus(){this.$store.commit("menuBadge/setNumber",this.$store.state.menuBadge.number-1)}}},c=l("1"),p=l("1");var b=t(d,[["render",function(t,l,d,b,f,g){const _=e,h=n("el-button"),v=s;return o(),u("div",null,[a(_,{title:"数字标记",content:"搭配 Vuex 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),a(v,null,{default:i((()=>[r("div",null,"当前 badge 值："+m(t.$store.state.menuBadge.number),1),a(h,{icon:"el-icon-plus",onClick:g.plus},{default:i((()=>[c])),_:1},8,["onClick"]),a(h,{icon:"el-icon-minus",onClick:g.minus},{default:i((()=>[p])),_:1},8,["onClick"])])),_:1})])}]]);export{b as default};
