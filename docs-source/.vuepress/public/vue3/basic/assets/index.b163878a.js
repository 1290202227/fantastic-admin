
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{o,k as t,L as e,B as n}from"./vendor.e2e92bee.js";const d={name:"FixedActionBar",data:()=>({isBottom:!0}),mounted(){this.onScroll(),window.addEventListener("scroll",this.onScroll)},unmounted(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll(){var o=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.clientHeight||document.body.clientHeight,e=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(o+t)>=e?this.isBottom=!0:this.isBottom=!1}}};d.render=function(d,s,c,l,i,r){return o(),t("div",{class:n({actionbar:!0,shadow:!i.isBottom}),"data-fixed-calc-width":""},[e(d.$slots,"default",{},void 0,!0)],2)},d.__scopeId="data-v-241bb509";export{d as _};
