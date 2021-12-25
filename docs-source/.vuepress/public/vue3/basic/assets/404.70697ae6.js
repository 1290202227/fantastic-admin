
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as i}from"./index.471d56bb.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,a as u,B as h,G as n,C as t,H as m,M as v,O as f,P as g,I as x}from"./vendor.cfa85e2d.js";const I={beforeRouteLeave(e,c,o){clearInterval(this.inter),o()},data(){return{inter:null,countdown:5}},mounted(){this.inter=setInterval(()=>{this.countdown--,this.countdown==0&&(clearInterval(this.inter),this.goBack())},1e3)},methods:{goBack(){this.$router.push("/")}}},s=e=>(v("data-v-31afb51c"),e=e(),f(),e),b={class:"notfound"},k={class:"content"},B=s(()=>t("h1",null,"404",-1)),w=s(()=>t("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1));function y(e,c,o,C,a,r){const _=i,d=l("el-button");return u(),h("div",b,[n(_,{name:"404"}),t("div",k,[B,w,n(d,{type:"primary",onClick:r.goBack},{default:m(()=>[g(x(a.countdown)+"\u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1},8,["onClick"])])])}var V=p(I,[["render",y],["__scopeId","data-v-31afb51c"]]);export{V as default};
