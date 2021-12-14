
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as p,g as C}from"./index.fd3dd73e.js";import{o as s,j as n,a0 as d,Z as o,s as k,t as w,x as b,a2 as I,A as i,B as u,C as a,D as x,a3 as j,u as B,a4 as D,a5 as L,l as N,G as T}from"./vendor.0c4fd540.js";const R={},S={class:"copyright"},V=["href"],A={key:1},E=d(" All Rights Reserved ");function W(e,l){return s(),n("footer",S,[d(" Copyright \xA9 "+o(e.$store.state.settings.copyrightDates)+" ",1),e.$store.state.settings.copyrightWebsite?(s(),n("a",{key:0,href:e.$store.state.settings.copyrightWebsite,target:"_blank",rel:"noopener"},o(e.$store.state.settings.copyrightCompany)+",",9,V)):(s(),n("span",A,o(e.$store.state.settings.copyrightCompany)+",",1)),E])}var q=p(R,[["render",W],["__scopeId","data-v-e07971a8"]]);const z={setup(e){const{proxy:l}=T(),c=k(),r=w(),m=b(()=>C()),g=I("generateI18nTitle");function f(t){l.$i18n.locale=t,c.commit("settings/setDefaultLang",t),r.meta.title&&c.commit("settings/setTitle",g(r.meta.i18n,r.meta.title))}return(t,F)=>{const y=i("el-dropdown-item"),h=i("el-dropdown-menu"),v=i("el-dropdown");return t.$store.state.settings.enableI18n?(s(),u(v,{key:0,class:"language-container",size:"medium",onCommand:f},{dropdown:a(()=>[x(h,null,{default:a(()=>[(s(!0),n(D,null,j(B(m),(_,$)=>(s(),u(y,{key:$,disabled:t.$store.state.settings.defaultLang===_.name,command:_.name},{default:a(()=>[d(o(_.labelName),1)]),_:2},1032,["disabled","command"]))),128))]),_:1})]),default:a(()=>[L(t.$slots,"default",{},void 0,!0)]),_:3})):N("v-if",!0)}}};var H=p(z,[["__scopeId","data-v-6a30540e"]]);export{H as _,q as a};
