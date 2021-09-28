
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d7acb132.js";import{_ as t}from"./index.6d456c03.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";import{r as a,l as n,H as o,s as r,n as l,I as i,P as d,S as m}from"./vendor.1e0be253.js";const u={methods:{change(){this.$store.commit("menuBadge/setText","热门"==this.$store.state.menuBadge.text?"促销":"热门")},clear(){this.$store.commit("menuBadge/setText")}}},c=m("切换"),f=m("清空");var x=s(u,[["render",function(s,m,u,x,g,p){const h=e,_=a("el-button"),b=t;return n(),o("div",null,[r(h,{title:"文字标记",content:"搭配 Vuex 可实现动态设置。请控制文字展示长度，避免导航标记覆盖导航标题"}),r(b,null,{default:l((()=>[i("div",null,"当前 badge 值：'"+d(s.$store.state.menuBadge.text)+"'",1),r(_,{onClick:p.change},{default:l((()=>[c])),_:1},8,["onClick"]),r(_,{onClick:p.clear},{default:l((()=>[f])),_:1},8,["onClick"])])),_:1})])}]]);export{x as default};
