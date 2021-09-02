
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as t}from"./index.8d81384c.js";import{x as e,y as a,r as s,o,z as n,i as r,A as i,w as c,I as d,F as l}from"./vendor.b5a7373b.js";const u={beforeRouteLeave(t,e,a){clearInterval(this.inter),a()},data:()=>({inter:null,countdown:5}),mounted(){this.$store.state.settings.enableTabbar&&this.$store.dispatch("tabbar/remove",this.$route.meta.activeMenu||this.$route.fullPath),this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}};e("data-v-bd4e8688");const h={class:"notfound"},v={class:"content"},b=i("h1",null,"404",-1),m=i("div",{class:"desc"},"抱歉，你访问的页面不存在",-1);a(),u.render=function(e,a,u,f,p,k){const w=t,I=s("el-button");return o(),n("div",h,[r(w,{name:"404"}),i("div",v,[b,m,r(I,{type:"primary",onClick:k.goBack},{default:c((()=>[d(l(p.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])},u.__scopeId="data-v-bd4e8688";export{u as default};
