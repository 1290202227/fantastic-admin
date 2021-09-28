
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d7acb132.js";import{_ as l}from"./index.6d456c03.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";import{r as t,l as o,H as i,s,n,I as p,S as m}from"./vendor.1e0be253.js";const d={name:"KeepAliveExamplePage",beforeRouteEnter(e,l,a){a((e=>{e.$store.commit("keepAlive/add",e.$options.name)}))},beforeRouteLeave(e,l,a){this.openKeepAlive&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(e.name)||this.$store.commit("keepAlive/remove","KeepAliveExamplePage"),a()},props:{},data:()=>({openKeepAlive:!1,num:1}),created(){},mounted(){},methods:{go(e){let l;switch(e){case 1:l="keepAliveExampleDetail";break;case 2:l="keepAliveExampleNestedDetail"}this.$router.push({name:l})}}},r={class:"block"},u={class:"block"},c={class:"block"},v=m("进入同级路由页面"),A=m("进入下级路由页面");var b=a(d,[["render",function(a,m,d,b,k,x){const f=e,_=t("el-switch"),h=t("el-input-number"),E=t("el-button"),g=l;return o(),i("div",null,[s(f,{title:"页面缓存",content:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现，该方法目前仅支持在 Options API 中实现。"}),s(g,null,{default:n((()=>[p("div",r,[s(_,{modelValue:k.openKeepAlive,"onUpdate:modelValue":m[0]||(m[0]=e=>k.openKeepAlive=e),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),p("div",u,[s(h,{modelValue:k.num,"onUpdate:modelValue":m[1]||(m[1]=e=>k.num=e)},null,8,["modelValue"])]),p("div",c,[s(E,{onClick:m[2]||(m[2]=e=>x.go(1))},{default:n((()=>[v])),_:1}),s(E,{onClick:m[3]||(m[3]=e=>x.go(2))},{default:n((()=>[A])),_:1})])])),_:1})])}],["__scopeId","data-v-54db3a96"]]);export{b as default};
