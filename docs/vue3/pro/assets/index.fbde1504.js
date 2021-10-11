
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";import{l as s,I as n,T as i,Q as o,u as b,i as k,k as C,U as w,r as c,m as u,n as a,s as I,V as x,q as T,X as j,Y as L,M as N,h as V}from"./vendor.1c754356.js";import{g as B}from"./index.895879d0.js";const D={},R={class:"copyright"},S=["href"],E={key:1},W=i(" All Rights Reserved ");function q(e,l){return s(),n("footer",R,[i(" Copyright \xA9 "+o(e.$store.state.settings.copyrightDates)+" ",1),e.$store.state.settings.copyrightWebsite?(s(),n("a",{key:0,href:e.$store.state.settings.copyrightWebsite,target:"_blank",rel:"noopener"},o(e.$store.state.settings.copyrightCompany)+",",9,S)):(s(),n("span",E,o(e.$store.state.settings.copyrightCompany)+",",1)),W])}var U=p(D,[["render",q],["__scopeId","data-v-ec25e5d6"]]);const z={setup(e){const{proxy:l}=V(),d=b(),r=k(),m=C(()=>B()),g=w("generateI18nTitle");function f(t){l.$i18n.locale=t,d.commit("settings/setDefaultLang",t),r.meta.title&&d.commit("settings/setTitle",g(r.meta.i18n,r.meta.title))}return(t,A)=>{const h=c("el-dropdown-item"),y=c("el-dropdown-menu"),v=c("el-dropdown");return t.$store.state.settings.enableI18n?(s(),u(v,{key:0,class:"language-container",size:"medium",onCommand:f},{dropdown:a(()=>[I(y,null,{default:a(()=>[(s(!0),n(j,null,x(T(m),(_,$)=>(s(),u(h,{key:$,disabled:t.$store.state.settings.defaultLang===_.name,command:_.name},{default:a(()=>[i(o(_.labelName),1)]),_:2},1032,["disabled","command"]))),128))]),_:1})]),default:a(()=>[L(t.$slots,"default",{},void 0,!0)]),_:3})):N("v-if",!0)}}};var X=p(z,[["__scopeId","data-v-cb1a0ac8"]]);export{X as _,U as a};
