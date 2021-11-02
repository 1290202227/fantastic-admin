
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as d}from"./index.0f29c4cc.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";import{r as p,l as u,L as h,s,M as e,n as m,R as v,S as f,X as b,T as g}from"./vendor.cb7139c2.js";const x={beforeRouteLeave(t,a,o){clearInterval(this.inter),o()},data(){return{inter:null,countdown:5}},mounted(){this.$store.state.settings.enableTabbar&&this.$store.dispatch("tabbar/remove",this.$route.meta.activeMenu||this.$route.fullPath),this.inter=setInterval(()=>{this.countdown--,this.countdown==0&&(clearInterval(this.inter),this.goBack())},1e3)},methods:{goBack(){this.$router.push("/")}}},n=t=>(v("data-v-79782c7a"),t=t(),f(),t),k={class:"notfound"},I={class:"content"},$=n(()=>e("h1",null,"404",-1)),w=n(()=>e("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1));function B(t,a,o,y,c,r){const i=d,_=p("el-button");return u(),h("div",k,[s(i,{name:"404"}),e("div",I,[$,w,s(_,{type:"primary",onClick:r.goBack},{default:m(()=>[b(g(c.countdown)+"\u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1},8,["onClick"])])])}var N=l(x,[["render",B],["__scopeId","data-v-79782c7a"]]);export{N as default};
