
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.ffbd20e5.js";import{_ as l}from"./index.f03e52fd.js";import{H as a,I as t,r as o,l as i,J as n,s,n as p,K as d,R as m}from"./vendor.7707186e.js";const u={name:"KeepAliveExamplePage",beforeRouteEnter(e,l,a){a((e=>{e.$store.commit("keepAlive/add",e.$options.name)}))},beforeRouteLeave(e,l,a){this.openKeepAlive&&["keepAliveExampleDetail","keepAliveExampleDetail2","keepAliveExampleDetail3"].includes(e.name)||this.$store.commit("keepAlive/remove","KeepAliveExamplePage"),a()},props:{},data:()=>({openKeepAlive:!1,num:1}),created(){},mounted(){},methods:{go(e){let l;switch(e){case 1:l="keepAliveExampleDetail";break;case 2:l="keepAliveExampleDetail2";break;case 3:l="keepAliveExampleDetail3"}this.$router.push({name:l})}}};a("data-v-d15018b2");const c={class:"block"},r={class:"block"},v={class:"block"},k=m("进入同级路由页面"),f=m("进入下级路由页面"),A=m("进入下下级路由页面");t(),u.render=function(a,t,m,u,x,b){const E=e,_=o("el-switch"),h=o("el-input-number"),K=o("el-button"),g=l;return i(),n("div",null,[s(E,{title:"页面缓存",content:"页面缓存只支持跳转至同级或下级路由，跳转上级路由则无法缓存，建议结合路由配置文件加深理解。"}),s(g,null,{default:p((()=>[d("div",c,[s(_,{modelValue:x.openKeepAlive,"onUpdate:modelValue":t[0]||(t[0]=e=>x.openKeepAlive=e),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),d("div",r,[s(h,{modelValue:x.num,"onUpdate:modelValue":t[1]||(t[1]=e=>x.num=e)},null,8,["modelValue"])]),d("div",v,[s(K,{onClick:t[2]||(t[2]=e=>b.go(1))},{default:p((()=>[k])),_:1}),s(K,{onClick:t[3]||(t[3]=e=>b.go(2))},{default:p((()=>[f])),_:1}),s(K,{onClick:t[4]||(t[4]=e=>b.go(3))},{default:p((()=>[A])),_:1})])])),_:1})])},u.__scopeId="data-v-d15018b2";export{u as default};
