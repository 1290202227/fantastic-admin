
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as x}from"./index.cc6d1ed1.js";import{_ as g}from"./index.26b51eff.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";import{l as y,m as _,Q as u,U as c,Z as d,R as o,t as e,s as f,a7 as h,r as m,q as s}from"./vendor.4daee5e9.js";import{_ as $}from"./index.a912659c.js";const w={key:0,class:"prefix"},b={class:"text"},j={key:1,class:"suffix"},S={props:{value:{type:String,required:!0},type:{type:String,validator:n=>["up","down"].includes(n),default:"up"},prefix:{type:String,default:""},suffix:{type:String,default:""},reverse:{type:Boolean,default:!1}},setup(n){const i=n,l=y(()=>{let t=i.type==="up";return i.reverse&&(t=!t),t});return(t,r)=>{const a=g;return _(),u("div",{class:h(`trend ${f(l)?"up":"down"}`)},[n.prefix?(_(),u("span",w,c(n.prefix),1)):d("v-if",!0),o("span",b,c(n.value),1),n.suffix?(_(),u("span",j,c(n.suffix),1)):d("v-if",!0),e(a,{name:`${f(l)?"el-icon-caret-top":"el-icon-caret-bottom"}`},null,8,["name"])],2)}}};var k=p(S,[["__scopeId","data-v-5e8531b1"]]);const B={},C=o("p",null,"Trend",-1),N=o("p",{style:{"margin-bottom":"0"}},"\u6807\u8BB0\u4E0A\u5347\u548C\u4E0B\u964D\u8D8B\u52BF\u3002\u901A\u5E38\u7528\u7EFF\u8272\u4EE3\u8868\u201C\u597D\u201D\uFF0C\u7EA2\u8272\u4EE3\u8868\u201C\u4E0D\u597D\u201D\uFF0C\u80A1\u7968\u6DA8\u8DCC\u573A\u666F\u9664\u5916",-1);function U(n,i){const l=$,t=k,r=x,a=m("el-col"),v=m("el-row");return _(),u("div",null,[e(l,{title:"\u8D8B\u52BF\u7B26\u53F7"},{content:s(()=>[C,N]),_:1}),e(v,{gutter:20,style:{margin:"0 10px"}},{default:s(()=>[e(a,{md:8},{default:s(()=>[e(r,{title:"\u57FA\u7840\u7528\u6CD5",style:{margin:"0"}},{default:s(()=>[o("p",null,[e(t,{value:"12.3"})]),o("p",null,[e(t,{value:"12.3",type:"down"})])]),_:1})]),_:1}),e(a,{md:8},{default:s(()=>[e(r,{title:"\u989C\u8272\u53CD\u8F6C",style:{margin:"0"}},{default:s(()=>[o("p",null,[e(t,{value:"12.3",reverse:""})]),o("p",null,[e(t,{value:"12.3",type:"down",reverse:""})])]),_:1})]),_:1}),e(a,{md:8},{default:s(()=>[e(r,{title:"\u524D\u7F00\u540E\u7F00",style:{margin:"0"}},{default:s(()=>[o("p",null,[e(t,{value:"12.3",prefix:"$"})]),o("p",null,[e(t,{value:"12.3",suffix:"%"})])]),_:1})]),_:1})]),_:1})])}var I=p(B,[["render",U]]);export{I as default};
