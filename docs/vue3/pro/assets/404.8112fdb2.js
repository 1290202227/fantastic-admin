
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as d}from"./index.484cca4c.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";import{r as p,l as u,H as h,s,I as e,n as m,M as v,O as f,S as b,P as g}from"./vendor.5a8f5a39.js";const x={beforeRouteLeave(t,a,o){clearInterval(this.inter),o()},data(){return{inter:null,countdown:5}},mounted(){this.$store.state.settings.enableTabbar&&this.$store.dispatch("tabbar/remove",this.$route.meta.activeMenu||this.$route.fullPath),this.inter=setInterval(()=>{this.countdown--,this.countdown==0&&(clearInterval(this.inter),this.goBack())},1e3)},methods:{goBack(){this.$router.push("/")}}},n=t=>(v("data-v-bd4e8688"),t=t(),f(),t),I={class:"notfound"},k={class:"content"},$=n(()=>e("h1",null,"404",-1)),w=n(()=>e("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1));function B(t,a,o,y,r,c){const i=d,_=p("el-button");return u(),h("div",I,[s(i,{name:"404"}),e("div",k,[$,w,s(_,{type:"primary",onClick:c.goBack},{default:m(()=>[b(g(r.countdown)+"\u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1},8,["onClick"])])])}var N=l(x,[["render",B],["__scopeId","data-v-bd4e8688"]]);export{N as default};
