
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";import{m as s,O as n,V as i,S as o,u as b,j as C,l as k,$ as w,r as l,n as u,q as a,t as I,a0 as j,s as x,a1 as L,a2 as N,X as S,i as T}from"./vendor.22bd9123.js";import{g as V}from"./index.38d93228.js";const B={},D={class:"copyright"},R=["href"],E={key:1},W=i(" All Rights Reserved ");function q(e,d){return s(),n("footer",D,[i(" Copyright \xA9 "+o(e.$store.state.settings.copyrightDates)+" ",1),e.$store.state.settings.copyrightWebsite?(s(),n("a",{key:0,href:e.$store.state.settings.copyrightWebsite,target:"_blank",rel:"noopener"},o(e.$store.state.settings.copyrightCompany)+",",9,R)):(s(),n("span",E,o(e.$store.state.settings.copyrightCompany)+",",1)),W])}var G=p(B,[["render",q],["__scopeId","data-v-e07971a8"]]);const z={setup(e){const{proxy:d}=T(),c=b(),r=C(),m=k(()=>V()),g=w("generateI18nTitle");function f(t){d.$i18n.locale=t,c.commit("settings/setDefaultLang",t),r.meta.title&&c.commit("settings/setTitle",g(r.meta.i18n,r.meta.title))}return(t,A)=>{const y=l("el-dropdown-item"),h=l("el-dropdown-menu"),v=l("el-dropdown");return t.$store.state.settings.enableI18n?(s(),u(v,{key:0,class:"language-container",size:"medium",onCommand:f},{dropdown:a(()=>[I(h,null,{default:a(()=>[(s(!0),n(L,null,j(x(m),(_,$)=>(s(),u(y,{key:$,disabled:t.$store.state.settings.defaultLang===_.name,command:_.name},{default:a(()=>[i(o(_.labelName),1)]),_:2},1032,["disabled","command"]))),128))]),_:1})]),default:a(()=>[N(t.$slots,"default",{},void 0,!0)]),_:3})):S("v-if",!0)}}};var H=p(z,[["__scopeId","data-v-cb1a0ac8"]]);export{H as _,G as a};
