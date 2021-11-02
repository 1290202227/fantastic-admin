
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";import{l as s,L as n,X as i,T as o,u as b,i as k,k as C,Y as w,r as c,m as u,n as a,s as I,Z as x,q as L,$ as T,a0 as j,Q as N,h as B}from"./vendor.cb7139c2.js";import{g as D}from"./index.0d70e74b.js";const R={},S={class:"copyright"},V=["href"],E={key:1},W=i(" All Rights Reserved ");function q(e,l){return s(),n("footer",S,[i(" Copyright \xA9 "+o(e.$store.state.settings.copyrightDates)+" ",1),e.$store.state.settings.copyrightWebsite?(s(),n("a",{key:0,href:e.$store.state.settings.copyrightWebsite,target:"_blank",rel:"noopener"},o(e.$store.state.settings.copyrightCompany)+",",9,V)):(s(),n("span",E,o(e.$store.state.settings.copyrightCompany)+",",1)),W])}var Y=p(R,[["render",q],["__scopeId","data-v-e07971a8"]]);const z={setup(e){const{proxy:l}=B(),d=b(),r=k(),m=C(()=>D()),g=w("generateI18nTitle");function f(t){l.$i18n.locale=t,d.commit("settings/setDefaultLang",t),r.meta.title&&d.commit("settings/setTitle",g(r.meta.i18n,r.meta.title))}return(t,A)=>{const h=c("el-dropdown-item"),y=c("el-dropdown-menu"),v=c("el-dropdown");return t.$store.state.settings.enableI18n?(s(),u(v,{key:0,class:"language-container",size:"medium",onCommand:f},{dropdown:a(()=>[I(y,null,{default:a(()=>[(s(!0),n(T,null,x(L(m),(_,$)=>(s(),u(h,{key:$,disabled:t.$store.state.settings.defaultLang===_.name,command:_.name},{default:a(()=>[i(o(_.labelName),1)]),_:2},1032,["disabled","command"]))),128))]),_:1})]),default:a(()=>[j(t.$slots,"default",{},void 0,!0)]),_:3})):N("v-if",!0)}}};var Z=p(z,[["__scopeId","data-v-cb1a0ac8"]]);export{Z as _,Y as a};
