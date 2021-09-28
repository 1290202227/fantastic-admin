
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as t}from"./index.461fabd7.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";import{r as e,a as n,n as s,t as o,q as r,x as i,z as c,A as d,F as l,B as u}from"./vendor.8d92a282.js";const v={beforeRouteLeave(t,a,e){clearInterval(this.inter),e()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}},f=t=>(c("data-v-31afb51c"),t=t(),d(),t),h={class:"notfound"},p={class:"content"},m=f((()=>r("h1",null,"404",-1))),b=f((()=>r("div",{class:"desc"},"抱歉，你访问的页面不存在",-1)));var _=a(v,[["render",function(a,c,d,v,f,_){const k=t,g=e("el-button");return n(),s("div",h,[o(k,{name:"404"}),r("div",p,[m,b,o(g,{type:"primary",onClick:_.goBack},{default:i((()=>[l(u(f.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])}],["__scopeId","data-v-31afb51c"]]);export{_ as default};
