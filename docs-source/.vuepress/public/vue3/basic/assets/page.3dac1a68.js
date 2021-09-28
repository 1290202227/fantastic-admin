
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.afd122f8.js";import{_ as l}from"./index.2f66b5c7.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";import{r as t,a as o,n as i,t as n,x as s,q as p,F as m}from"./vendor.8d92a282.js";const d={name:"KeepAliveExamplePage",beforeRouteEnter(e,l,a){a((e=>{e.$store.commit("keepAlive/add",e.$options.name)}))},beforeRouteLeave(e,l,a){this.openKeepAlive&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(e.name)||this.$store.commit("keepAlive/remove","KeepAliveExamplePage"),a()},props:{},data:()=>({openKeepAlive:!1,num:1}),created(){},mounted(){},methods:{go(e){let l;switch(e){case 1:l="keepAliveExampleDetail";break;case 2:l="keepAliveExampleNestedDetail"}this.$router.push({name:l})}}},r={class:"block"},u={class:"block"},c={class:"block"},v=m("进入同级路由页面"),f=m("进入下级路由页面");var x=a(d,[["render",function(a,m,d,x,A,k){const b=e,_=t("el-switch"),h=t("el-input-number"),E=t("el-button"),g=l;return o(),i("div",null,[n(b,{title:"页面缓存",content:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现，该方法目前仅支持在 Options API 中实现。"}),n(g,null,{default:s((()=>[p("div",r,[n(_,{modelValue:A.openKeepAlive,"onUpdate:modelValue":m[0]||(m[0]=e=>A.openKeepAlive=e),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),p("div",u,[n(h,{modelValue:A.num,"onUpdate:modelValue":m[1]||(m[1]=e=>A.num=e)},null,8,["modelValue"])]),p("div",c,[n(E,{onClick:m[2]||(m[2]=e=>k.go(1))},{default:s((()=>[v])),_:1}),n(E,{onClick:m[3]||(m[3]=e=>k.go(2))},{default:s((()=>[f])),_:1})])])),_:1})])}],["__scopeId","data-v-54db3a96"]]);export{x as default};
