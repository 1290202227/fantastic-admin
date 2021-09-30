
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.9fbc5cc3.js";import{_ as t}from"./index.c535d87f.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";import{r as a,l as n,H as o,s as r,n as l,I as i,P as c,S as d}from"./vendor.e59ac5d6.js";const m={methods:{change(){this.$store.commit("menuBadge/setText","热门"==this.$store.state.menuBadge.text?"促销":"热门")},clear(){this.$store.commit("menuBadge/setText")}}},u=d("切换"),f=d("清空");var x=s(m,[["render",function(s,d,m,x,g,p){const h=e,_=a("el-button"),v=t;return n(),o("div",null,[r(h,{title:"文字标记",content:"搭配 Vuex 可实现动态设置。请控制文字展示长度，避免导航标记覆盖导航标题"}),r(v,null,{default:l((()=>[i("div",null,"当前 badge 值：'"+c(s.$store.state.menuBadge.text)+"'",1),r(_,{onClick:p.change},{default:l((()=>[u])),_:1},8,["onClick"]),r(_,{onClick:p.clear},{default:l((()=>[f])),_:1},8,["onClick"])])),_:1})])}]]);export{x as default};
