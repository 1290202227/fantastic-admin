
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as y}from"./index.6f334b18.js";import{_ as c}from"./plugin-vue_export-helper.5a098b48.js";import{k as g,l as r,H as u,P as p,L as d,I as n,Y as f,q as m,r as v,s as e,n as a}from"./vendor.5a8f5a39.js";import{_ as h}from"./index.a48661b9.js";const w={key:0,class:"prefix"},$={class:"text"},b={key:1,class:"suffix"},k={props:{value:{type:String,required:!0},type:{type:String,validator:s=>["up","down"].includes(s),default:"up"},prefix:{type:String,default:""},suffix:{type:String,default:""},reverse:{type:Boolean,default:!1}},setup(s){const _=s,l=g(()=>{let t=_.type==="up";return _.reverse&&(t=!t),t});return(t,o)=>(r(),u("div",{class:f(`trend ${m(l)?"up":"down"}`)},[s.prefix?(r(),u("span",w,p(s.prefix),1)):d("v-if",!0),n("span",$,p(s.value),1),s.suffix?(r(),u("span",b,p(s.suffix),1)):d("v-if",!0),n("i",{class:f(`${m(l)?"el-icon-caret-top":"el-icon-caret-bottom"}`)},null,2)],2))}};var S=c(k,[["__scopeId","data-v-d619bd30"]]);const j={},B=n("p",null,"Trend",-1),C=n("p",{style:{"margin-bottom":"0"}},"\u6807\u8BB0\u4E0A\u5347\u548C\u4E0B\u964D\u8D8B\u52BF\u3002\u901A\u5E38\u7528\u7EFF\u8272\u4EE3\u8868\u201C\u597D\u201D\uFF0C\u7EA2\u8272\u4EE3\u8868\u201C\u4E0D\u597D\u201D\uFF0C\u80A1\u7968\u6DA8\u8DCC\u573A\u666F\u9664\u5916",-1);function N(s,_){const l=y,t=S,o=h,i=v("el-col"),x=v("el-row");return r(),u("div",null,[e(l,{title:"\u8D8B\u52BF\u7B26\u53F7"},{content:a(()=>[B,C]),_:1}),e(x,{gutter:20,style:{margin:"0 10px"}},{default:a(()=>[e(i,{md:8},{default:a(()=>[e(o,{title:"\u57FA\u7840\u7528\u6CD5",style:{margin:"0"}},{default:a(()=>[n("p",null,[e(t,{value:"12.3"})]),n("p",null,[e(t,{value:"12.3",type:"down"})])]),_:1})]),_:1}),e(i,{md:8},{default:a(()=>[e(o,{title:"\u989C\u8272\u53CD\u8F6C",style:{margin:"0"}},{default:a(()=>[n("p",null,[e(t,{value:"12.3",reverse:""})]),n("p",null,[e(t,{value:"12.3",type:"down",reverse:""})])]),_:1})]),_:1}),e(i,{md:8},{default:a(()=>[e(o,{title:"\u524D\u7F00\u540E\u7F00",style:{margin:"0"}},{default:a(()=>[n("p",null,[e(t,{value:"12.3",prefix:"$"})]),n("p",null,[e(t,{value:"12.3",suffix:"%"})])]),_:1})]),_:1})]),_:1})])}var z=c(j,[["render",N]]);export{z as default};
