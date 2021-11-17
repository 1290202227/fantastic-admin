
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";import{m as s,Q as n,Y as i,U as o,u as b,j as C,l as k,a1 as w,r as l,n as u,q as a,t as I,a2 as j,s as x,a3 as L,a4 as N,Z as T,i as B}from"./vendor.3faf3917.js";import{g as D}from"./index.3f3a0e66.js";const R={},S={class:"copyright"},V=["href"],E={key:1},W=i(" All Rights Reserved ");function q(e,c){return s(),n("footer",S,[i(" Copyright \xA9 "+o(e.$store.state.settings.copyrightDates)+" ",1),e.$store.state.settings.copyrightWebsite?(s(),n("a",{key:0,href:e.$store.state.settings.copyrightWebsite,target:"_blank",rel:"noopener"},o(e.$store.state.settings.copyrightCompany)+",",9,V)):(s(),n("span",E,o(e.$store.state.settings.copyrightCompany)+",",1)),W])}var Y=p(R,[["render",q],["__scopeId","data-v-e07971a8"]]);const z={setup(e){const{proxy:c}=B(),d=b(),r=C(),m=k(()=>D()),g=w("generateI18nTitle");function f(t){c.$i18n.locale=t,d.commit("settings/setDefaultLang",t),r.meta.title&&d.commit("settings/setTitle",g(r.meta.i18n,r.meta.title))}return(t,A)=>{const y=l("el-dropdown-item"),h=l("el-dropdown-menu"),v=l("el-dropdown");return t.$store.state.settings.enableI18n?(s(),u(v,{key:0,class:"language-container",size:"medium",onCommand:f},{dropdown:a(()=>[I(h,null,{default:a(()=>[(s(!0),n(L,null,j(x(m),(_,$)=>(s(),u(y,{key:$,disabled:t.$store.state.settings.defaultLang===_.name,command:_.name},{default:a(()=>[i(o(_.labelName),1)]),_:2},1032,["disabled","command"]))),128))]),_:1})]),default:a(()=>[N(t.$slots,"default",{},void 0,!0)]),_:3})):T("v-if",!0)}}};var Z=p(z,[["__scopeId","data-v-cb1a0ac8"]]);export{Z as _,Y as a};
