var e=Object.defineProperty,l=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(l,t,a)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a,o=(e,l)=>{for(var t in l||(l={}))n.call(l,t)&&r(e,t,l[t]);if(a)for(var t of a(l))s.call(l,t)&&r(e,t,l[t]);return e},u=(e,a)=>l(e,t(a));"undefined"!=typeof require&&require;import{f as i,i as c,j as v,k as d,l as p,m as h,n as b,r as m,h as f,o as g,p as k,w as y,q as x,d as w,t as L,s as $,c as C,v as M,x as T,y as O,z as R,A as B,B as P,a as j,F as z,C as E,b as D,D as _,E as H,G as N,T as S,H as q,I as A,J as F,K as G,L as I,u as W,g as U,M as V,N as X,O as Y,e as J,P as K,Q,R as Z,S as ee,U as le,V as te,W as ae,X as ne}from"./app.08c37072.js";const se=["href","rel","target","aria-label"],re=i({inheritAttrs:!1});const oe=i(u(o({},re),{props:{item:{type:Object,required:!0}},setup:function(e){const l=e,t=c(),a=T(),{item:n}=v(l),s=d((()=>p(n.value.link))),r=d((()=>h(n.value.link)||b(n.value.link))),o=d((()=>{if(!r.value)return n.value.target?n.value.target:s.value?"_blank":void 0})),u=d((()=>"_blank"===o.value)),i=d((()=>!s.value&&!r.value&&!u.value)),O=d((()=>{if(!r.value)return n.value.rel?n.value.rel:u.value?"noopener noreferrer":void 0})),R=d((()=>n.value.ariaLabel||n.value.text)),B=d((()=>{const e=Object.keys(a.value.locales);return e.length?!e.some((e=>e===n.value.link)):"/"!==n.value.link})),P=d((()=>!!B.value&&t.path.startsWith(n.value.link))),j=d((()=>!!i.value&&(n.value.activeMatch?new RegExp(n.value.activeMatch).test(t.path):P.value)));return(e,l)=>{const t=m("RouterLink"),a=m("OutboundLink");return f(i)?(g(),k(t,$({key:0,class:["nav-link",{"router-link-active":f(j)}],to:f(n).link,"aria-label":f(R)},e.$attrs),{default:y((()=>[x(e.$slots,"before"),w(" "+L(f(n).text)+" ",1),x(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):(g(),C("a",$({key:1,class:"nav-link external",href:f(n).link,rel:f(O),target:f(o),"aria-label":f(R)},e.$attrs),[x(e.$slots,"before"),w(" "+L(f(n).text)+" ",1),f(u)?(g(),k(a,{key:0})):M("",!0),x(e.$slots,"after")],16,se))}}})),ue=["aria-labelledby"],ie={class:"hero"},ce=["src","alt"],ve={key:1,id:"main-title"},de={key:2,class:"description"},pe={key:3,class:"actions"},he={key:0,class:"features"},be={class:"theme-default-content custom"},me=["innerHTML"],fe=["textContent"],ge=i({setup(e){const l=O(),t=R(),a=d((()=>l.value.heroImage?B(l.value.heroImage):null)),n=d((()=>null===l.value.heroText?null:l.value.heroText||t.value.title||"Hello")),s=d((()=>l.value.heroAlt||n.value||"hero")),r=d((()=>null===l.value.tagline?null:l.value.tagline||t.value.description||"Welcome to your VuePress site")),o=d((()=>P(l.value.actions)?l.value.actions.map((({text:e,link:l,type:t="primary"})=>({text:e,link:l,type:t}))):[])),u=d((()=>P(l.value.features)?l.value.features:[])),i=d((()=>l.value.footer)),c=d((()=>l.value.footerHtml));return(e,l)=>{const t=m("Content");return g(),C("main",{class:"home","aria-labelledby":f(n)?"main-title":void 0},[j("header",ie,[f(a)?(g(),C("img",{key:0,src:f(a),alt:f(s)},null,8,ce)):M("",!0),f(n)?(g(),C("h1",ve,L(f(n)),1)):M("",!0),f(r)?(g(),C("p",de,L(f(r)),1)):M("",!0),f(o).length?(g(),C("p",pe,[(g(!0),C(z,null,E(f(o),(e=>(g(),k(oe,{key:e.text,class:_(["action-button",[e.type]]),item:e},null,8,["class","item"])))),128))])):M("",!0)]),f(u).length?(g(),C("div",he,[(g(!0),C(z,null,E(f(u),(e=>(g(),C("div",{key:e.title,class:"feature"},[j("h2",null,L(e.title),1),j("p",null,L(e.details),1)])))),128))])):M("",!0),j("div",be,[D(t)]),f(i)?(g(),C(z,{key:1},[f(c)?(g(),C("div",{key:0,class:"footer",innerHTML:f(i)},null,8,me)):(g(),C("div",{key:1,class:"footer",textContent:L(f(i))},null,8,fe))],64)):M("",!0)],8,ue)}}}),ke=e=>!p(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,ye={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},xe=i({setup(e){const l=e=>{e.style.height=e.scrollHeight+"px"},t=e=>{e.style.height=""};return(e,a)=>(g(),k(S,{name:"dropdown",onEnter:l,onAfterEnter:t,onBeforeLeave:l},{default:y((()=>[x(e.$slots,"default")])),_:3}))}}),we=["aria-label"],Le={class:"title"},$e=j("span",{class:"arrow down"},null,-1),Ce=["aria-label"],Me={class:"title"},Te={class:"nav-dropdown"},Oe={class:"dropdown-subtitle"},Re={key:1},Be={class:"dropdown-subitem-wrapper"},Pe=i({props:{item:{type:Object,required:!0}},setup(e){const l=e,{item:t}=v(l),a=d((()=>t.value.ariaLabel||t.value.text)),n=q(!1),s=c();A((()=>s.path),(()=>{n.value=!1}));const r=e=>{const l=0===e.detail;n.value=!!l&&!n.value},o=(e,l)=>l[l.length-1]===e;return(e,l)=>(g(),C("div",{class:_(["dropdown-wrapper",{open:n.value}])},[j("button",{class:"dropdown-title",type:"button","aria-label":f(a),onClick:r},[j("span",Le,L(f(t).text),1),$e],8,we),j("button",{class:"mobile-dropdown-title",type:"button","aria-label":f(a),onClick:l[0]||(l[0]=e=>n.value=!n.value)},[j("span",Me,L(f(t).text),1),j("span",{class:_(["arrow",n.value?"down":"right"])},null,2)],8,Ce),D(xe,null,{default:y((()=>[F(j("ul",Te,[(g(!0),C(z,null,E(f(t).children,((e,l)=>(g(),C("li",{key:e.link||l,class:"dropdown-item"},[e.children?(g(),C(z,{key:0},[j("h4",Oe,[e.link?(g(),k(oe,{key:0,item:e,onFocusout:l=>o(e,f(t).children)&&0===e.children.length&&(n.value=!1)},null,8,["item","onFocusout"])):(g(),C("span",Re,L(e.text),1))]),j("ul",Be,[(g(!0),C(z,null,E(e.children,(l=>(g(),C("li",{key:l.link,class:"dropdown-subitem"},[D(oe,{item:l,onFocusout:a=>o(l,e.children)&&o(e,f(t).children)&&(n.value=!1)},null,8,["item","onFocusout"])])))),128))])],64)):(g(),k(oe,{key:1,item:e,onFocusout:l=>o(e,f(t).children)&&(n.value=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[G,n.value]])])),_:1})],2))}}),je={key:0,class:"navbar-links"},ze=i({setup(e){const l=e=>V(e)?X(e):e.children?u(o({},e),{children:e.children.map(l)}):e,t=(()=>{const e=U();return d((()=>(e.value.navbar||[]).map(l)))})(),a=(()=>{const e=I(),l=W(),t=R(),a=U();return d((()=>{var n,s;const r=Object.keys(t.value.locales);if(r.length<2)return[];const o=e.currentRoute.value.path,u=e.currentRoute.value.fullPath;return[{text:null!=(n=a.value.selectLanguageText)?n:"unkown language",ariaLabel:null!=(s=a.value.selectLanguageAriaLabel)?s:"unkown language",children:r.map((n=>{var s,r,i,c,v,d;const p=null!=(r=null==(s=t.value.locales)?void 0:s[n])?r:{},h=null!=(c=null==(i=a.value.locales)?void 0:i[n])?c:{},b=`${p.lang}`,m=null!=(v=h.selectLanguageName)?v:b;let f;if(b===t.value.lang)f=u;else{const t=o.replace(l.value,n);f=e.getRoutes().some((e=>e.path===t))?t:null!=(d=h.home)?d:n}return{text:m,link:f}}))}]}))})(),n=(()=>{const e=U(),l=d((()=>e.value.repo)),t=d((()=>l.value?ke(l.value):null)),a=d((()=>l.value&&!p(l.value)?`https://github.com/${l.value}`:l.value)),n=d((()=>a.value?e.value.repoLabel?e.value.repoLabel:null===t.value?"Source":t.value:null));return d((()=>a.value&&n.value?[{text:n.value,link:a.value}]:[]))})(),s=d((()=>[...t.value,...a.value,...n.value]));return(e,l)=>f(s).length?(g(),C("nav",je,[(g(!0),C(z,null,E(f(s),(e=>(g(),C("div",{key:e.text,class:"navbar-links-item"},[e.children?(g(),k(Pe,{key:0,item:e},null,8,["item"])):(g(),k(oe,{key:1,item:e},null,8,["item"]))])))),128))])):M("",!0)}}),Ee=["title"],De={class:"icon",focusable:"false",viewBox:"0 0 32 32"},_e=[J('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)],He={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Ne=[j("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)],Se=i({setup(e){const l=U(),t=Y(),a=()=>{t.value=!t.value};return(e,n)=>(g(),C("button",{class:"toggle-dark-button",title:f(l).toggleDarkMode,onClick:a},[F((g(),C("svg",De,_e,512)),[[G,!f(t)]]),F((g(),C("svg",He,Ne,512)),[[G,f(t)]])],8,Ee))}}),qe=["title"],Ae=[j("div",{class:"icon","aria-hidden":"true"},[j("span"),j("span"),j("span")],-1)],Fe=i({emits:["toggle"],setup(e){const l=U();return(e,t)=>(g(),C("div",{class:"toggle-sidebar-button",title:f(l).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:t[0]||(t[0]=l=>e.$emit("toggle"))},Ae,8,qe))}}),Ge=["src","alt"],Ie=i({emits:["toggle-sidebar"],setup(e){const l=W(),t=R(),a=U(),n=Y(),s=q(null),r=q(null),o=d((()=>a.value.home||l.value)),u=d((()=>n.value&&void 0!==a.value.logoDark?a.value.logoDark:a.value.logo)),i=d((()=>t.value.title)),c=q(0),v=d((()=>c.value?{maxWidth:c.value+"px"}:{})),p=d((()=>a.value.darkMode));function h(e,l){var t,a,n;const s=null==(n=null==(a=null==(t=null==e?void 0:e.ownerDocument)?void 0:t.defaultView)?void 0:a.getComputedStyle(e,null))?void 0:n[l],r=Number.parseInt(s,10);return Number.isNaN(r)?0:r}return K((()=>{const e=h(s.value,"paddingLeft")+h(s.value,"paddingRight"),l=()=>{var l;window.innerWidth<=719?c.value=0:c.value=s.value.offsetWidth-e-((null==(l=r.value)?void 0:l.offsetWidth)||0)};l(),window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1)})),(e,l)=>{const t=m("RouterLink"),a=m("NavbarSearch");return g(),C("header",{ref:(e,l)=>{l.navbar=e,s.value=e},class:"navbar"},[D(Fe,{onToggle:l[0]||(l[0]=l=>e.$emit("toggle-sidebar"))}),j("span",{ref:(e,l)=>{l.siteBrand=e,r.value=e}},[D(t,{to:f(o)},{default:y((()=>[f(u)?(g(),C("img",{key:0,class:"logo",src:f(B)(f(u)),alt:f(i)},null,8,Ge)):M("",!0),f(i)?(g(),C("span",{key:1,class:_(["site-name",{"can-hide":f(u)}])},L(f(i)),3)):M("",!0)])),_:1},8,["to"])],512),j("div",{class:"navbar-links-wrapper",style:Q(f(v))},[x(e.$slots,"before"),D(ze,{class:"can-hide"}),x(e.$slots,"after"),f(p)?(g(),k(Se,{key:0})):M("",!0),D(a)],4)],512)}}}),We={class:"page-meta"},Ue={key:0,class:"meta-item edit-link"},Ve={key:1,class:"meta-item last-updated"},Xe={class:"meta-item-label"},Ye={class:"meta-item-info"},Je={key:2,class:"meta-item contributors"},Ke={class:"meta-item-label"},Qe={class:"meta-item-info"},Ze=["title"],el=w(", "),ll=i({setup(e){const l=U(),t=(()=>{const e=U(),l=Z(),t=O();return d((()=>{var a,n;if(!(null==(n=null!=(a=t.value.editLink)?a:e.value.editLink)||n))return null;const{repo:s,docsRepo:r=s,docsBranch:o="main",docsDir:u="",editLinkText:i}=e.value;if(!r)return null;const c=(({docsRepo:e,docsBranch:l,docsDir:t,filePathRelative:a,editLinkPattern:n})=>{const s=ke(e);let r;return n?r=n:null!==s&&(r=ye[s]),r?r.replace(/:repo/,p(e)?e:`https://github.com/${e}`).replace(/:branch/,l).replace(/:path/,H(`${N(t)}/${a}`)):null})({docsRepo:r,docsBranch:o,docsDir:u,filePathRelative:l.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return c?{text:null!=i?i:"Edit this page",link:c}:null}))})(),a=(()=>{const e=R(),l=U(),t=Z(),a=O();return d((()=>{var n,s,r,o;if(!(null==(s=null!=(n=a.value.lastUpdated)?n:l.value.lastUpdated)||s))return null;if(!(null==(r=t.value.git)?void 0:r.updatedTime))return null;return new Date(null==(o=t.value.git)?void 0:o.updatedTime).toLocaleString(e.value.lang)}))})(),n=(()=>{const e=U(),l=Z(),t=O();return d((()=>{var a,n,s,r;return(null==(n=null!=(a=t.value.contributors)?a:e.value.contributors)||n)&&null!=(r=null==(s=l.value.git)?void 0:s.contributors)?r:null}))})();return(e,s)=>(g(),C("footer",We,[f(t)?(g(),C("div",Ue,[D(oe,{class:"meta-item-label",item:f(t)},null,8,["item"])])):M("",!0),f(a)?(g(),C("div",Ve,[j("span",Xe,L(f(l).lastUpdatedText)+": ",1),j("span",Ye,L(f(a)),1)])):M("",!0),f(n)&&f(n).length?(g(),C("div",Je,[j("span",Ke,L(f(l).contributorsText)+": ",1),j("span",Qe,[(g(!0),C(z,null,E(f(n),((e,l)=>(g(),C(z,{key:l},[j("span",{class:"contributor",title:`email: ${e.email}`},L(e.name),9,Ze),l!==f(n).length-1?(g(),C(z,{key:0},[el],64)):M("",!0)],64)))),128))])])):M("",!0)]))}}),tl={key:0,class:"page-nav"},al={class:"inner"},nl={key:0,class:"prev"},sl=w(" ← "),rl={key:1,class:"next"},ol=w(" → "),ul=i({setup(e){const l=e=>!1===e?null:V(e)?X(e):!!le(e)&&e,t=(e,l,a)=>{const n=e.findIndex((e=>e.link===l));if(-1!==n){const l=e[n+a];return(null==l?void 0:l.link)?l:null}for(const s of e)if(s.children){const e=t(s.children,l,a);if(e)return e}return null},a=O(),n=ee(),s=c(),r=d((()=>{const e=l(a.value.prev);return!1!==e?e:t(n.value,s.path,-1)})),o=d((()=>{const e=l(a.value.next);return!1!==e?e:t(n.value,s.path,1)}));return(e,l)=>f(r)||f(o)?(g(),C("nav",tl,[j("p",al,[f(r)?(g(),C("span",nl,[sl,D(oe,{item:f(r)},null,8,["item"])])):M("",!0),f(o)?(g(),C("span",rl,[D(oe,{item:f(o)},null,8,["item"]),ol])):M("",!0)])])):M("",!0)}}),il={class:"page"},cl={class:"theme-default-content"},vl=i({setup:e=>(e,l)=>{const t=m("Content");return g(),C("main",il,[x(e.$slots,"top"),j("div",cl,[D(t)]),D(ll),D(ul),x(e.$slots,"bottom")])}}),dl=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),pl=(e,l)=>!!((e,l)=>void 0!==l&&(e.hash===l||dl(e.path)===dl(l)))(e,l.link)||!!l.children&&l.children.some((l=>pl(e,l))),hl=(e,l)=>e.link?te(oe,u(o({},l),{item:e})):te("p",l,e.text),bl=(e,l)=>{var t;return(null===(t=e.children)||void 0===t?void 0:t.length)?te("ul",{class:{"sidebar-sub-items":l>0}},e.children.map((e=>te("li",te(ml,{item:e,depth:l+1}))))):null},ml=({item:e,depth:l=0})=>{const t=c(),a=pl(t,e);return[hl(e,{class:{"sidebar-heading":0===l,"sidebar-item":!0,active:a}}),bl(e,l)]};ml.displayName="SidebarChild",ml.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const fl={class:"sidebar"},gl={class:"sidebar-links"},kl=i({setup(e){const l=ee();return(e,t)=>(g(),C("aside",fl,[D(ze),x(e.$slots,"top"),j("ul",gl,[(g(!0),C(z,null,E(f(l),(e=>(g(),k(f(ml),{key:e.link||e.text,item:e},null,8,["item"])))),128))]),x(e.$slots,"bottom")]))}}),yl=i({setup(e){const l=Z(),t=O(),a=U(),n=d((()=>!1!==t.value.navbar&&!1!==a.value.navbar)),s=ee(),r=q(!1),o=e=>{r.value="boolean"==typeof e?e:!r.value},u={x:0,y:0},i=e=>{u.x=e.changedTouches[0].clientX,u.y=e.changedTouches[0].clientY},c=e=>{const l=e.changedTouches[0].clientX-u.x,t=e.changedTouches[0].clientY-u.y;Math.abs(l)>Math.abs(t)&&Math.abs(l)>40&&(l>0&&u.x<=80?o(!0):o(!1))},v=d((()=>[{"no-navbar":!n.value,"no-sidebar":!s.value.length,"sidebar-open":r.value},t.value.pageClass]));let p;K((()=>{const e=I();p=e.afterEach((()=>{o(!1)}))})),ae((()=>{p()}));const h=ne(),b=h.resolve,m=h.pending;return(e,a)=>(g(),C("div",{class:_(["theme-container",f(v)]),onTouchstart:i,onTouchend:c},[x(e.$slots,"navbar",{},(()=>[f(n)?(g(),k(Ie,{key:0,onToggleSidebar:o},{before:y((()=>[x(e.$slots,"navbar-before")])),after:y((()=>[x(e.$slots,"navbar-after")])),_:3})):M("",!0)])),j("div",{class:"sidebar-mask",onClick:a[0]||(a[0]=e=>o(!1))}),x(e.$slots,"sidebar",{},(()=>[D(kl,null,{top:y((()=>[x(e.$slots,"sidebar-top")])),bottom:y((()=>[x(e.$slots,"sidebar-bottom")])),_:3})])),x(e.$slots,"page",{},(()=>[f(t).home?(g(),k(ge,{key:0})):(g(),k(S,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:f(b),onBeforeLeave:f(m)},{default:y((()=>[D(vl,{key:f(l).path},{top:y((()=>[x(e.$slots,"page-top")])),bottom:y((()=>[x(e.$slots,"page-bottom")])),_:3})])),_:3},8,["onBeforeEnter","onBeforeLeave"]))]))],34))}});export{yl as default};
