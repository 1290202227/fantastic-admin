
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";import{l as t,H as s,S as a,P as o,u as n,i as r,k as i,T as l,r as d,m,n as p,s as g,U as c,q as u,V as f,X as y,L as h,h as _}from"./vendor.1e0be253.js";import{g as b}from"./index.e4e8dab3.js";const v={},$={class:"copyright"},k=["href"],w={key:1},x=a(" All Rights Reserved ");var C=e(v,[["render",function(e,n){return t(),s("footer",$,[a(" Copyright © "+o(e.$store.state.settings.copyrightDates)+" ",1),e.$store.state.settings.copyrightWebsite?(t(),s("a",{key:0,href:e.$store.state.settings.copyrightWebsite,target:"_blank",rel:"noopener"},o(e.$store.state.settings.copyrightCompany)+",",9,k)):(t(),s("span",w,o(e.$store.state.settings.copyrightCompany)+",",1)),x])}],["__scopeId","data-v-0ea1883c"]]);var I=e({setup(e){const{proxy:v}=_(),$=n(),k=r(),w=i((()=>b())),x=l("generateI18nTitle");function C(e){v.$i18n.locale=e,$.commit("settings/setDefaultLang",e),k.meta.title&&$.commit("settings/setTitle",x(k.meta.i18n,k.meta.title))}return(e,n)=>{const r=d("el-dropdown-item"),i=d("el-dropdown-menu"),l=d("el-dropdown");return e.$store.state.settings.enableI18n?(t(),m(l,{key:0,class:"language-container",size:"medium",onCommand:C},{dropdown:p((()=>[g(i,null,{default:p((()=>[(t(!0),s(f,null,c(u(w),((s,n)=>(t(),m(r,{key:n,disabled:e.$store.state.settings.defaultLang===s.name,command:s.name},{default:p((()=>[a(o(s.labelName),1)])),_:2},1032,["disabled","command"])))),128))])),_:1})])),default:p((()=>[y(e.$slots,"default",{},void 0,!0)])),_:3})):h("v-if",!0)}}},[["__scopeId","data-v-6a30540e"]]);export{I as _,C as a};
