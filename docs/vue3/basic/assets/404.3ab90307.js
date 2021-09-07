
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as t}from"./index.a289e36b.js";import{n as a,q as e,r as n,a as s,s as o,y as r,t as c,z as i,F as d,B as l}from"./vendor.505a4e11.js";const u={beforeRouteLeave(t,a,e){clearInterval(this.inter),e()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}};a("data-v-0bbc7b0e");const h={class:"notfound"},v={class:"content"},b=c("h1",null,"404",-1),m=c("div",{class:"desc"},"抱歉，你访问的页面不存在",-1);e(),u.render=function(a,e,u,f,p,k){const w=t,B=n("el-button");return s(),o("div",h,[r(w,{name:"404"}),c("div",v,[b,m,r(B,{type:"primary",onClick:k.goBack},{default:i((()=>[d(l(p.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])},u.__scopeId="data-v-0bbc7b0e";export{u as default};
