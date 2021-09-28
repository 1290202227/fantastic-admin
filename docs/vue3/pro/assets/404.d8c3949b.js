
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as t}from"./index.bf374722.js";import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";import{r as a,l as s,H as o,s as n,I as r,n as i,M as d,O as l,S as c,P as u}from"./vendor.1e0be253.js";const h={beforeRouteLeave(t,e,a){clearInterval(this.inter),a()},data:()=>({inter:null,countdown:5}),mounted(){this.$store.state.settings.enableTabbar&&this.$store.dispatch("tabbar/remove",this.$route.meta.activeMenu||this.$route.fullPath),this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}},v=t=>(d("data-v-bd4e8688"),t=t(),l(),t),b={class:"notfound"},m={class:"content"},p=v((()=>r("h1",null,"404",-1))),f=v((()=>r("div",{class:"desc"},"抱歉，你访问的页面不存在",-1)));var _=e(h,[["render",function(e,d,l,h,v,_){const g=t,k=a("el-button");return s(),o("div",b,[n(g,{name:"404"}),r("div",m,[p,f,n(k,{type:"primary",onClick:_.goBack},{default:i((()=>[c(u(v.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])}],["__scopeId","data-v-bd4e8688"]]);export{_ as default};
