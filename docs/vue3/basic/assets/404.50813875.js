
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as t}from"./index.3057af96.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";import{r as e,a as n,n as s,t as o,q as r,x as c,A as i,B as d,G as l,C as u}from"./vendor.e08917c3.js";const v={beforeRouteLeave(t,a,e){clearInterval(this.inter),e()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}},f=t=>(i("data-v-31afb51c"),t=t(),d(),t),h={class:"notfound"},p={class:"content"},m=f((()=>r("h1",null,"404",-1))),_=f((()=>r("div",{class:"desc"},"抱歉，你访问的页面不存在",-1)));var b=a(v,[["render",function(a,i,d,v,f,b){const k=t,g=e("el-button");return n(),s("div",h,[o(k,{name:"404"}),r("div",p,[m,_,o(g,{type:"primary",onClick:b.goBack},{default:c((()=>[l(u(f.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])}],["__scopeId","data-v-31afb51c"]]);export{b as default};
