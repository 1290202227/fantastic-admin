
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";import{l as s,J as n,U as i,R as o,u as b,i as k,k as C,V as w,r as l,m as u,n as a,s as I,X as x,q as j,Y as L,Z as N,O as R,h as T}from"./vendor.66600095.js";import{g as V}from"./index.7e0312eb.js";const B={},D={class:"copyright"},S=["href"],E={key:1},W=i(" All Rights Reserved ");function q(e,c){return s(),n("footer",D,[i(" Copyright \xA9 "+o(e.$store.state.settings.copyrightDates)+" ",1),e.$store.state.settings.copyrightWebsite?(s(),n("a",{key:0,href:e.$store.state.settings.copyrightWebsite,target:"_blank",rel:"noopener"},o(e.$store.state.settings.copyrightCompany)+",",9,S)):(s(),n("span",E,o(e.$store.state.settings.copyrightCompany)+",",1)),W])}var U=p(B,[["render",q],["__scopeId","data-v-0ea1883c"]]);const z={setup(e){const{proxy:c}=T(),d=b(),r=k(),m=C(()=>V()),g=w("generateI18nTitle");function f(t){c.$i18n.locale=t,d.commit("settings/setDefaultLang",t),r.meta.title&&d.commit("settings/setTitle",g(r.meta.i18n,r.meta.title))}return(t,A)=>{const h=l("el-dropdown-item"),y=l("el-dropdown-menu"),v=l("el-dropdown");return t.$store.state.settings.enableI18n?(s(),u(v,{key:0,class:"language-container",size:"medium",onCommand:f},{dropdown:a(()=>[I(y,null,{default:a(()=>[(s(!0),n(L,null,x(j(m),(_,$)=>(s(),u(h,{key:$,disabled:t.$store.state.settings.defaultLang===_.name,command:_.name},{default:a(()=>[i(o(_.labelName),1)]),_:2},1032,["disabled","command"]))),128))]),_:1})]),default:a(()=>[N(t.$slots,"default",{},void 0,!0)]),_:3})):R("v-if",!0)}}};var X=p(z,[["__scopeId","data-v-6a30540e"]]);export{X as _,U as a};
