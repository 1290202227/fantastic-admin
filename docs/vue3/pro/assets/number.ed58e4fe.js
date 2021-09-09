
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.ffbd20e5.js";import{_ as s}from"./index.f03e52fd.js";import{r as t,l as n,J as o,s as u,n as i,K as a,O as m,R as r}from"./vendor.7707186e.js";const l={methods:{plus(){this.$store.commit("menuBadge/setNumber",this.$store.state.menuBadge.number+1)},minus(){this.$store.commit("menuBadge/setNumber",this.$store.state.menuBadge.number-1)}}},d=r("1"),c=r("1");l.render=function(r,l,f,b,p,g){const h=e,B=t("el-button"),$=s;return n(),o("div",null,[u(h,{title:"数字标记",content:"搭配 Vuex 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),u($,null,{default:i((()=>[a("div",null,"当前 badge 值："+m(r.$store.state.menuBadge.number),1),u(B,{icon:"el-icon-plus",onClick:g.plus},{default:i((()=>[d])),_:1},8,["onClick"]),u(B,{icon:"el-icon-minus",onClick:g.minus},{default:i((()=>[c])),_:1},8,["onClick"])])),_:1})])};export{l as default};
