
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d7acb132.js";import{_ as t}from"./index.6d456c03.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";import{r as a,l as o,H as n,s as r,n as d,I as i,P as l,S as u}from"./vendor.1e0be253.js";const m={methods:{change(){this.$store.commit("menuBadge/switchDot")}}},c=u("切换");var f=s(m,[["render",function(s,u,m,f,p,g){const h=e,_=a("el-button"),b=t;return o(),n("div",null,[r(h,{title:"点标记",content:"搭配 Vuex 可实现动态设置"}),r(b,null,{default:d((()=>[i("div",null,"当前 badge 值："+l(s.$store.state.menuBadge.dot),1),r(_,{onClick:g.change},{default:d((()=>[c])),_:1},8,["onClick"])])),_:1})])}]]);export{f as default};
