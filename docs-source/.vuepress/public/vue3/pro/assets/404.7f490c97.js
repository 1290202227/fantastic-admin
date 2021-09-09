
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as t}from"./index.a3c54816.js";import{H as a,I as e,r as s,l as n,J as o,s as r,K as i,n as c,R as d,O as l}from"./vendor.7707186e.js";const u={beforeRouteLeave(t,a,e){clearInterval(this.inter),e()},data:()=>({inter:null,countdown:5}),mounted(){this.$store.state.settings.enableTabbar&&this.$store.dispatch("tabbar/remove",this.$route.meta.activeMenu||this.$route.fullPath),this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}};a("data-v-79782c7a");const h={class:"notfound"},v={class:"content"},m=i("h1",null,"404",-1),f=i("div",{class:"desc"},"抱歉，你访问的页面不存在",-1);e(),u.render=function(a,e,u,p,b,k){const I=t,$=s("el-button");return n(),o("div",h,[r(I,{name:"404"}),i("div",v,[m,f,r($,{type:"primary",onClick:k.goBack},{default:c((()=>[d(l(b.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])},u.__scopeId="data-v-79782c7a";export{u as default};
