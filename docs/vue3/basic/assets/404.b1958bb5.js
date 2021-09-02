
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as t}from"./index.e25e8707.js";import{r as e,k as a,n,l as s,q as o,t as r,u as c,o as i,A as d,x as l}from"./vendor.e2e92bee.js";const u={beforeRouteLeave(t,e,a){clearInterval(this.inter),a()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}};r("data-v-31afb51c");const h={class:"notfound"},v={class:"content"},f=s("h1",null,"404",-1),m=s("div",{class:"desc"},"抱歉，你访问的页面不存在",-1);c(),u.render=function(r,c,u,p,k,b){const w=t,I=e("el-button");return i(),a("div",h,[n(w,{name:"404"}),s("div",v,[f,m,n(I,{type:"primary",onClick:b.goBack},{default:o((()=>[d(l(k.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])},u.__scopeId="data-v-31afb51c";export{u as default};
