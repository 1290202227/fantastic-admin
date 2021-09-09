
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as t}from"./index.2e087ece.js";import{n as e,q as n,r as s,a,s as o,y as c,t as r,z as d,F as i,A as l}from"./vendor.ebf75cd4.js";const u={beforeRouteLeave(t,e,n){clearInterval(this.inter),n()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}};e("data-v-0bbc7b0e");const h={class:"notfound"},v={class:"content"},b=r("h1",null,"404",-1),f=r("div",{class:"desc"},"抱歉，你访问的页面不存在",-1);n(),u.render=function(e,n,u,m,p,k){const w=t,I=s("el-button");return a(),o("div",h,[c(w,{name:"404"}),r("div",v,[b,f,c(I,{type:"primary",onClick:k.goBack},{default:d((()=>[i(l(p.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])},u.__scopeId="data-v-0bbc7b0e";export{u as default};
