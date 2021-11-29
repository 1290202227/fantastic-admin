
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as p,g as C}from"./index.7ec46dd3.js";import{o as s,j as n,$ as i,Y as o,s as b,t as k,x as w,a1 as I,A as d,B as u,C as a,D as x,a2 as j,u as B,a3 as D,a4 as L,l as N,F as T}from"./vendor.9a04353b.js";const R={},S={class:"copyright"},V=["href"],A={key:1},E=i(" All Rights Reserved ");function F(e,l){return s(),n("footer",S,[i(" Copyright \xA9 "+o(e.$store.state.settings.copyrightDates)+" ",1),e.$store.state.settings.copyrightWebsite?(s(),n("a",{key:0,href:e.$store.state.settings.copyrightWebsite,target:"_blank",rel:"noopener"},o(e.$store.state.settings.copyrightCompany)+",",9,V)):(s(),n("span",A,o(e.$store.state.settings.copyrightCompany)+",",1)),E])}var G=p(R,[["render",F],["__scopeId","data-v-e07971a8"]]);const W={setup(e){const{proxy:l}=T(),c=b(),r=k(),m=w(()=>C()),g=I("generateI18nTitle");function f(t){l.$i18n.locale=t,c.commit("settings/setDefaultLang",t),r.meta.title&&c.commit("settings/setTitle",g(r.meta.i18n,r.meta.title))}return(t,z)=>{const y=d("el-dropdown-item"),h=d("el-dropdown-menu"),v=d("el-dropdown");return t.$store.state.settings.enableI18n?(s(),u(v,{key:0,class:"language-container",size:"medium",onCommand:f},{dropdown:a(()=>[x(h,null,{default:a(()=>[(s(!0),n(D,null,j(B(m),(_,$)=>(s(),u(y,{key:$,disabled:t.$store.state.settings.defaultLang===_.name,command:_.name},{default:a(()=>[i(o(_.labelName),1)]),_:2},1032,["disabled","command"]))),128))]),_:1})]),default:a(()=>[L(t.$slots,"default",{},void 0,!0)]),_:3})):N("v-if",!0)}}};var H=p(W,[["__scopeId","data-v-6a30540e"]]);export{H as _,G as a};
