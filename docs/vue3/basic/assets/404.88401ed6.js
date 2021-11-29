
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./index.92c1dc8e.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,a as u,x as h,C as n,y as t,D as m,K as v,L as f,M as x,F as g}from"./vendor.5c97c969.js";const k={beforeRouteLeave(e,c,o){clearInterval(this.inter),o()},data(){return{inter:null,countdown:5}},mounted(){this.inter=setInterval(()=>{this.countdown--,this.countdown==0&&(clearInterval(this.inter),this.goBack())},1e3)},methods:{goBack(){this.$router.push("/")}}},s=e=>(v("data-v-31afb51c"),e=e(),f(),e),I={class:"notfound"},w={class:"content"},y=s(()=>t("h1",null,"404",-1)),B=s(()=>t("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1));function b(e,c,o,C,a,r){const _=i,d=l("el-button");return u(),h("div",I,[n(_,{name:"404"}),t("div",w,[y,B,n(d,{type:"primary",onClick:r.goBack},{default:m(()=>[x(g(a.countdown)+"\u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1},8,["onClick"])])])}var V=p(k,[["render",b],["__scopeId","data-v-31afb51c"]]);export{V as default};
