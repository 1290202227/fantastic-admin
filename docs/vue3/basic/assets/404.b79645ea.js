
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as d}from"./index.72e584a2.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";import{r as l,a as u,x as h,C as n,y as t,D as m,K as v,L as f,M as b,F as x}from"./vendor.62ab41f5.js";const g={beforeRouteLeave(e,a,o){clearInterval(this.inter),o()},data(){return{inter:null,countdown:5}},mounted(){this.inter=setInterval(()=>{this.countdown--,this.countdown==0&&(clearInterval(this.inter),this.goBack())},1e3)},methods:{goBack(){this.$router.push("/")}}},s=e=>(v("data-v-0bbc7b0e"),e=e(),f(),e),k={class:"notfound"},I={class:"content"},w=s(()=>t("h1",null,"404",-1)),y=s(()=>t("div",{class:"desc"},"\u62B1\u6B49\uFF0C\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",-1));function B(e,a,o,C,c,r){const _=d,i=l("el-button");return u(),h("div",k,[n(_,{name:"404"}),t("div",I,[w,y,n(i,{type:"primary",onClick:r.goBack},{default:m(()=>[b(x(c.countdown)+"\u79D2\u540E\uFF0C\u8FD4\u56DE\u9996\u9875",1)]),_:1},8,["onClick"])])])}var V=p(g,[["render",B],["__scopeId","data-v-0bbc7b0e"]]);export{V as default};
