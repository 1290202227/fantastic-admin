
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as d}from"./index.8a8e6ff2.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";import{r as p,l as u,I as h,s,J as t,n as m,O as v,P as f,T as b,Q as g}from"./vendor.626824a3.js";const x={beforeRouteLeave(e,a,o){clearInterval(this.inter),o()},data(){return{inter:null,countdown:5}},mounted(){this.$store.state.settings.enableTabbar&&this.$store.dispatch("tabbar/remove",this.$route.meta.activeMenu||this.$route.fullPath),this.inter=setInterval(()=>{this.countdown--,this.countdown==0&&(clearInterval(this.inter),this.goBack())},1e3)},methods:{goBack(){this.$router.push("/")}}},n=e=>(v("data-v-bd4e8688"),e=e(),f(),e),I={class:"notfound"},k={class:"content"},$=n(()=>t("h1",null,"404",-1)),w=n(()=>t("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1));function B(e,a,o,y,r,c){const i=d,_=p("el-button");return u(),h("div",I,[s(i,{name:"404"}),t("div",k,[$,w,s(_,{type:"primary",onClick:c.goBack},{default:m(()=>[b(g(r.countdown)+"\u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1},8,["onClick"])])])}var N=l(x,[["render",B],["__scopeId","data-v-bd4e8688"]]);export{N as default};
