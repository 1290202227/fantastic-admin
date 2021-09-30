
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.1605775f.js";import{u as t,L as a,H as s,r as n,a as l,c as i,x as o,n as r,y as u,C as c,K as d,I as m,M as p,O as h,o as v,P as g,q as b,t as f,G as y,A as k,B as $,Q as w,R as _,T as x,p as S,S as C,U as V,V as q,W as F,w as T,F as E,D as P,X as M,Y as B,Z as U,J as z,_ as I,$ as L}from"./vendor.e08917c3.js";import{_ as A}from"./index.3057af96.js";import{_ as j}from"./logo.96f1da49.js";import{_ as D}from"./plugin-vue_export-helper.5a098b48.js";import{d as R}from"./index.3480c387.js";const O=["src"],N={key:1};var H,J,K,Q,Y,G,W=D({props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(e){const p=t(),h=a("Fantastic-admin 基础版"),v=a(j),g=s((()=>{let e={};return p.state.settings.enableDashboard&&(e.name="dashboard"),e}));return(t,a)=>{const s=n("router-link");return l(),i(s,{to:d(g),class:m(["title",{"is-link":t.$store.state.settings.enableDashboard}]),title:h.value},{default:o((()=>[e.showLogo?(l(),r("img",{key:0,src:v.value,class:"logo"},null,8,O)):u("v-if",!0),e.showTitle?(l(),r("span",N,c(h.value),1)):u("v-if",!0)])),_:1},8,["to","class","title"])}}},[["__scopeId","data-v-48bd2eee"]]),Z={exports:{}};
/*!
* screenfull
* v5.1.0 - 2020-12-24
* (c) Sindre Sorhus; MIT License
*/
H=Z,J="undefined"!=typeof window&&void 0!==window.document?window.document:{},K=H.exports,Q=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],a=0,s=t.length,n={};a<s;a++)if((e=t[a])&&e[1]in J){for(a=0;a<e.length;a++)n[t[0][a]]=e[a];return n}return!1}(),Y={change:Q.fullscreenchange,error:Q.fullscreenerror},G={request:function(e,t){return new Promise(function(a,s){var n=function(){this.off("change",n),a()}.bind(this);this.on("change",n);var l=(e=e||J.documentElement)[Q.requestFullscreen](t);l instanceof Promise&&l.then(n).catch(s)}.bind(this))},exit:function(){return new Promise(function(e,t){if(this.isFullscreen){var a=function(){this.off("change",a),e()}.bind(this);this.on("change",a);var s=J[Q.exitFullscreen]();s instanceof Promise&&s.then(a).catch(t)}else e()}.bind(this))},toggle:function(e,t){return this.isFullscreen?this.exit():this.request(e,t)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,t){var a=Y[e];a&&J.addEventListener(a,t,!1)},off:function(e,t){var a=Y[e];a&&J.removeEventListener(a,t,!1)},raw:Q},Q?(Object.defineProperties(G,{isFullscreen:{get:function(){return Boolean(J[Q.fullscreenElement])}},element:{enumerable:!0,get:function(){return J[Q.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(J[Q.fullscreenEnabled])}}}),K?H.exports=G:window.screenfull=G):K?H.exports={isEnabled:!1}:window.screenfull={isEnabled:!1};var X=Z.exports;const ee=e=>(k("data-v-6a1364e4"),e=e(),$(),e),te={class:"user"},ae={class:"tools"},se=ee((()=>b("span",{class:"title"},"查看专业版",-1))),ne={class:"user-wrapper"},le=ee((()=>b("i",{class:"el-icon-user-solid"},null,-1))),ie=ee((()=>b("i",{class:"el-icon-caret-bottom"},null,-1))),oe=y("控制台"),re=y("个人设置"),ue=y("退出登录");var ce=D({setup(e){const m=p("reload"),k=t(),$=h(),w=s((()=>X.isEnabled)),_=a(!1);function x(){X.toggle()}function S(){_.value=X.isFullscreen}function C(e){switch(e){case"dashboard":$.push({name:"dashboard"});break;case"setting":$.push({name:"personalSetting"});break;case"logout":k.dispatch("user/logout").then((()=>{$.push({name:"login"})}))}}function V(){window.open(`https://hooray.${location.origin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/vue3/pro`,"top")}return v((()=>{w.value&&X.on("change",S)})),g((()=>{w.value&&X.off("change",S)})),(e,t)=>{const a=A,s=n("el-avatar"),p=n("el-dropdown-item"),h=n("el-dropdown-menu"),v=n("el-dropdown");return l(),r("div",te,[b("div",ae,["pc"==e.$store.state.settings.mode?(l(),r("span",{key:0,class:"item item-pro",onClick:V},[f(a,{name:"pro"}),se])):u("v-if",!0),e.$store.state.settings.enableNavSearch?(l(),r("span",{key:1,class:"item",onClick:t[0]||(t[0]=t=>e.$eventBus.emit("global-search-toggle"))},[f(a,{name:"search"})])):u("v-if",!0),"pc"===e.$store.state.settings.mode&&d(w)&&e.$store.state.settings.enableFullscreen?(l(),r("span",{key:2,class:"item",onClick:x},[f(a,{name:_.value?"fullscreen-exit":"fullscreen"},null,8,["name"])])):u("v-if",!0),e.$store.state.settings.enablePageReload?(l(),r("span",{key:3,class:"item",onClick:t[1]||(t[1]=e=>d(m)())},[f(a,{name:"toolbar-reload"})])):u("v-if",!0),e.$store.state.settings.enableThemeSetting?(l(),r("span",{key:4,class:"item",onClick:t[2]||(t[2]=t=>e.$eventBus.emit("global-theme-toggle"))},[f(a,{name:"toolbar-theme"})])):u("v-if",!0)]),f(v,{class:"user-container",onCommand:C},{dropdown:o((()=>[f(h,{class:"user-dropdown"},{default:o((()=>[e.$store.state.settings.enableDashboard?(l(),i(p,{key:0,command:"dashboard"},{default:o((()=>[oe])),_:1})):u("v-if",!0),f(p,{command:"setting"},{default:o((()=>[re])),_:1}),f(p,{divided:"",command:"logout"},{default:o((()=>[ue])),_:1})])),_:1})])),default:o((()=>[b("div",ne,[f(s,{size:"medium"},{default:o((()=>[le])),_:1}),y(" "+c(e.$store.state.user.account)+" ",1),ie])])),_:1})])}}},[["__scopeId","data-v-6a1364e4"]]);const de={key:0},me={class:"header-container"},pe={class:"main"},he={class:"nav"},ve=["onClick"],ge={key:1};var be=D({setup(e){const t=p("switchMenu");return(e,a)=>{const s=A;return l(),i(x,{name:"header"},{default:o((()=>["pc"===e.$store.state.settings.mode&&"head"===e.$store.state.settings.menuMode?(l(),r("header",de,[b("div",me,[b("div",pe,[f(W),u(" 顶部模式 "),b("div",he,[(l(!0),r(w,null,_(e.$store.getters["menu/routes"],((a,n)=>(l(),r(w,null,[a.children&&0!==a.children.length?(l(),r("div",{key:n,class:m(["item",{active:n==e.$store.state.menu.headerActived}]),onClick:e=>d(t)(n)},[a.meta.icon?(l(),i(s,{key:0,name:a.meta.icon,class:"icon"},null,8,["name"])):u("v-if",!0),a.meta.title?(l(),r("span",ge,c(a.meta.title),1)):u("v-if",!0)],10,ve)):u("v-if",!0)],64)))),256))])]),f(ce)])])):u("v-if",!0)])),_:1})}}},[["__scopeId","data-v-98dd44fa"]]);const fe={key:0,class:"main-sidebar-container"},ye={class:"nav"},ke=["title","onClick"];var $e=D({setup(e){const t=p("switchMenu");return(e,a)=>{const s=A;return l(),i(x,{name:"main-sidebar"},{default:o((()=>["side"===e.$store.state.settings.menuMode||"mobile"===e.$store.state.settings.mode?(l(),r("div",fe,[f(W,{"show-title":!1,class:"sidebar-logo"}),u(" 侧边栏模式（含主导航） "),b("div",ye,[(l(!0),r(w,null,_(e.$store.getters["menu/routes"],((a,n)=>(l(),r(w,null,[a.children&&0!==a.children.length?(l(),r("div",{key:n,class:m({item:!0,active:n===e.$store.state.menu.headerActived}),title:a.meta.title,onClick:e=>d(t)(n)},[a.meta.icon?(l(),i(s,{key:0,name:a.meta.icon,class:"icon"},null,8,["name"])):u("v-if",!0),b("span",null,c(a.meta.title),1)],10,ke)):u("v-if",!0)],64)))),256))])])):u("v-if",!0)])),_:1})}}},[["__scopeId","data-v-c660bfb4"]]);const we={key:0,class:"sidebar-item"},_e={class:"title"},xe=["href","target","onClick"],Se={class:"title"},Ce={class:"title"};var Ve=D({props:{item:{type:Object,required:!0},basePath:{type:String,default:""}},setup(e){const t=e,a=s((()=>{let e=!0;return t.item.children?t.item.children.every((e=>!1===e.meta.sidebar))&&(e=!1):e=!1,e}));function p(e){return/^(https?:|mailto:|tel:)/.test(e)}function h(e){return p(e)?e:p(t.basePath)?t.basePath:t.basePath?S.resolve(t.basePath,e):e}return(t,s)=>{const v=A,g=n("el-sub-menu"),y=n("el-menu-item"),k=n("router-link");return!1!==e.item.meta.sidebar?(l(),r("div",we,[null==e.item.path?(l(),i(g,{key:0,title:e.item.meta.title,index:e.item},{title:o((()=>[e.item.meta.icon?(l(),i(v,{key:0,name:e.item.meta.icon,class:"icon"},null,8,["name"])):u("v-if",!0),b("span",_e,c(e.item.meta.title),1)])),default:o((()=>[(l(!0),r(w,null,_(e.item.children,(e=>(l(),i(Ve,{key:e.path,item:e},null,8,["item"])))),128))])),_:1},8,["title","index"])):d(a)?(l(),i(g,{key:2,title:e.item.meta.title,index:h(e.item.path)},{title:o((()=>[e.item.meta.icon?(l(),i(v,{key:0,name:e.item.meta.icon,class:"icon"},null,8,["name"])):u("v-if",!0),b("span",Ce,c(e.item.meta.title),1)])),default:o((()=>[(l(!0),r(w,null,_(e.item.children,(t=>(l(),i(Ve,{key:t.path,item:t,"base-path":h(e.item.path)},null,8,["item","base-path"])))),128))])),_:1},8,["title","index"])):(l(),i(k,{key:1,custom:"",to:h(e.item.path)},{default:o((({href:t,navigate:a,isActive:s,isExactActive:n})=>[b("a",{href:p(h(e.item.path))?h(e.item.path):t,class:m([s&&"router-link-active",n&&"router-link-exact-active"]),target:p(h(e.item.path))?"_blank":"_self",onClick:a},[f(y,{title:e.item.meta.title,index:h(e.item.path)},{default:o((()=>[e.item.meta.icon?(l(),i(v,{key:0,name:e.item.meta.icon,class:"icon"},null,8,["name"])):u("v-if",!0),b("span",Se,c(e.item.meta.title),1)])),_:1},8,["title","index"])],10,xe)])),_:1},8,["to"]))])):u("v-if",!0)}}},[["__scopeId","data-v-4da9d326"]]);var qe=D({setup(e){const t=a(0);function s(e){t.value=e.target.scrollTop}return(e,a)=>{const c=n("el-menu");return["side","head","single"].includes(e.$store.state.settings.menuMode)||"mobile"===e.$store.state.settings.mode?(l(),r("div",{key:0,class:m(["sub-sidebar-container",{"is-collapse":"pc"===e.$store.state.settings.mode&&e.$store.state.settings.sidebarCollapse}]),onScroll:s},[f(W,{"show-logo":"single"===e.$store.state.settings.menuMode,class:m({"sidebar-logo":!0,"sidebar-logo-bg":"single"===e.$store.state.settings.menuMode,shadow:t.value})},null,8,["show-logo","class"]),u(" 侧边栏模式（无主导航） "),f(c,{"unique-opened":e.$store.state.settings.sidebarUniqueOpened,"default-openeds":e.$store.state.menu.defaultOpenedPaths,"default-active":e.$route.meta.activeMenu||e.$route.path,collapse:"pc"===e.$store.state.settings.mode&&e.$store.state.settings.sidebarCollapse,"collapse-transition":!1,class:m({"is-collapse-without-logo":"single"!==e.$store.state.settings.menuMode&&"pc"===e.$store.state.settings.mode&&e.$store.state.settings.sidebarCollapse})},{default:o((()=>[f(C,{name:"sub-sidebar"},{default:o((()=>[(l(!0),r(w,null,_(e.$store.getters["menu/sidebarRoutes"],(e=>(l(),r(w,null,[!1!==e.meta.sidebar?(l(),i(Ve,{key:e.path,item:e,"base-path":e.path},null,8,["item","base-path"])):u("v-if",!0)],64)))),256))])),_:1})])),_:1},8,["unique-opened","default-openeds","default-active","collapse","class"])],34)):u("v-if",!0)}}},[["__scopeId","data-v-0c7ba236"]]);const Fe={class:"left-box"};var Te=D({setup(e){const p=t(),h=V(),g=s((()=>{let e=[];return p.state.settings.enableDashboard&&e.push({path:"/dashboard",title:p.state.settings.dashboardTitle}),h.meta.breadcrumbNeste&&h.meta.breadcrumbNeste.map(((t,a)=>{let s=R(t);0!=a&&(s.path=`${h.meta.breadcrumbNeste[0].path}/${t.path}`),e.push(s)})),e})),k=a(0);function $(){k.value=document.documentElement.scrollTop||document.body.scrollTop}return v((()=>{window.addEventListener("scroll",$)})),q((()=>{window.removeEventListener("scroll",$)})),(e,t)=>{const a=A,s=n("el-breadcrumb-item"),p=n("el-breadcrumb");return l(),r("div",{class:m(["topbar-container",{fixed:e.$store.state.settings.topbarFixed,shadow:k.value}]),"data-fixed-calc-width":""},[b("div",Fe,["mobile"===e.$store.state.settings.mode||["side","head","single"].includes(e.$store.state.settings.menuMode)&&e.$store.state.settings.enableSidebarCollapse?(l(),r("div",{key:0,class:m(["sidebar-collapse",{"is-collapse":e.$store.state.settings.sidebarCollapse}]),onClick:t[0]||(t[0]=t=>e.$store.commit("settings/toggleSidebarCollapse"))},[f(a,{name:"toolbar-collapse"})],2)):u("v-if",!0),e.$store.state.settings.enableBreadcrumb&&"pc"===e.$store.state.settings.mode?(l(),i(p,{key:1,"separator-class":"el-icon-arrow-right"},{default:o((()=>[f(C,{name:"breadcrumb"},{default:o((()=>[(l(!0),r(w,null,_(d(g),((e,t)=>{return l(),r(w,null,[t<d(g).length-1?(l(),i(s,{key:e.path,to:(a=e.path,F(a)(h.params))},{default:o((()=>[y(c(e.title),1)])),_:2},1032,["to"])):(l(),i(s,{key:e.path},{default:o((()=>[y(c(e.title),1)])),_:2},1024))],64);var a})),256))])),_:1})])),_:1})):u("v-if",!0)]),f(ce)],2)}}},[["__scopeId","data-v-5f4e8edc"]]);const Ee=e=>(k("data-v-f74de7e6"),e=e(),$(),e),Pe={class:"container"},Me={key:0,class:"tips"},Be=Ee((()=>b("div",{class:"tip"},[b("span",null,"Alt"),y("+"),b("span",null,"S"),y(" 唤醒搜索面板 ")],-1))),Ue={class:"tip"},ze=y(" 切换搜索结果 "),Ie={class:"tip"},Le=y(" 访问页面 "),Ae=Ee((()=>b("div",{class:"tip"},[b("span",null,"ESC"),y(" 退出 ")],-1))),je=["href","target","onClick","onMouseover"],De={class:"icon"},Re={class:"info"},Oe={class:"title"},Ne={class:"breadcrumb"},He=Ee((()=>b("i",{class:"el-icon-arrow-right"},null,-1))),Je={class:"path"};var Ke=D({setup(e){const{proxy:p}=M(),h=t(),g=a(!1),k=a(""),$=a([]),x=a(-1),S=s((()=>{let e=[];return e=$.value.filter((e=>{let t=!1;return e.title.indexOf(k.value)>=0&&(t=!0),e.path.indexOf(k.value)>=0&&(t=!0),e.breadcrumb.some((e=>e.indexOf(k.value)>=0))&&(t=!0),t})),e}));function C(e){return/^(https?:|mailto:|tel:)/.test(e)}function V(e){e.map((e=>{if(!1!==e.meta.sidebar)if(function(e){let t=!0;return e.children?e.children.every((e=>!1===e.meta.sidebar))&&(t=!1):t=!1,t}(e)){let t=e.meta.baseBreadcrumb?R(e.meta.baseBreadcrumb):[];t.push(e.meta.title);let a=R(e.children);a.map((a=>{a.meta.baseIcon=e.meta.icon||e.meta.baseIcon,a.meta.baseBreadcrumb=t,a.meta.basePath=e.meta.basePath?[e.meta.basePath,e.path].join("/"):e.path})),V(a)}else{let t=[];e.meta.baseBreadcrumb&&(t=R(e.meta.baseBreadcrumb)),t.push(e.meta.title);let a="";a=C(e.path)?e.path:e.meta.basePath?[e.meta.basePath,e.path].join("/"):e.path,$.value.push({icon:e.meta.icon||e.meta.baseIcon,title:e.meta.title,i18n:e.meta.i18n,breadcrumb:t,path:a,isExternal:C(e.path)})}}))}function q(){S.value.length&&(x.value-=1,x.value<0&&(x.value=S.value.length-1),U(p.$refs[`search-item-${x.value}`].offsetTop))}function F(){S.value.length&&(x.value+=1,x.value>S.value.length-1&&(x.value=0),U(p.$refs[`search-item-${x.value}`].offsetTop))}function B(){-1!==x.value&&p.$refs[`search-item-${x.value}`].click()}function U(e){-1!==x.value&&(e+p.$refs[`search-item-${x.value}`].clientHeight>p.$refs.search.scrollTop+p.$refs.search.clientHeight||e+p.$refs[`search-item-${x.value}`].clientHeight<=p.$refs.search.scrollTop)&&p.$refs.search.scrollTo({top:e,behavior:"smooth"})}return T((()=>g.value),(e=>{e?(document.querySelector("body").classList.add("hidden"),p.$refs.search.scrollTop=0,p.$hotkeys("up",q),p.$hotkeys("down",F),p.$hotkeys("enter",B),setTimeout((()=>{p.$refs.input.$el.children[0].focus()}),100)):(document.querySelector("body").classList.remove("hidden"),p.$hotkeys.unbind("up",q),p.$hotkeys.unbind("down",F),p.$hotkeys.unbind("enter",B),setTimeout((()=>{k.value="",x.value=-1}),500))})),T((()=>S.value),(()=>{x.value=-1,U(0)})),v((()=>{p.$eventBus.on("global-search-toggle",(()=>{g.value=!g.value})),p.$hotkeys("alt+s",(e=>{h.state.settings.enableNavSearch&&(e.preventDefault(),g.value=!0)})),h.state.menu.routes.map((e=>{V(e.children)}))})),(e,t)=>{const a=n("el-input"),s=A,p=n("router-link");return l(),r("div",{id:"search",class:m({searching:g.value}),onClick:t[3]||(t[3]=t=>g.value&&e.$eventBus.emit("global-search-toggle"))},[b("div",Pe,[b("div",{class:"search-box",onClick:t[2]||(t[2]=E((()=>{}),["stop"]))},[f(a,{ref:(e,t)=>{t.input=e},modelValue:k.value,"onUpdate:modelValue":t[0]||(t[0]=e=>k.value=e),"prefix-icon":"el-icon-search",placeholder:"搜索页面，支持标题、URL模糊查询",clearable:"",onKeydown:[t[1]||(t[1]=P((t=>e.$eventBus.emit("global-search-toggle")),["esc"])),P(E(q,["prevent"]),["up"]),P(E(F,["prevent"]),["down"]),P(E(B,["prevent"]),["enter"])]},null,8,["modelValue","onKeydown"]),"pc"===e.$store.state.settings.mode?(l(),r("div",Me,[Be,b("div",Ue,[b("span",null,[f(s,{name:"search-up"})]),b("span",null,[f(s,{name:"search-down"})]),ze]),b("div",Ie,[b("span",null,[f(s,{name:"search-enter"})]),Le]),Ae])):u("v-if",!0)]),b("div",{ref:(e,t)=>{t.search=e},class:m(["result",{mobile:"mobile"===e.$store.state.settings.mode}])},[(l(!0),r(w,null,_(d(S),((e,t)=>(l(),i(p,{key:e.path,custom:"",to:g.value?e.path:""},{default:o((({href:a,navigate:n})=>[b("a",{ref:`search-item-${t}`,href:C(e.path)?e.path:a,class:m(["item",{actived:t===x.value}]),target:C(e.path)?"_blank":"_self",onClick:n,onMouseover:e=>x.value=t},[b("div",De,[e.icon?(l(),i(s,{key:0,name:e.icon},null,8,["name"])):u("v-if",!0)]),b("div",Re,[b("div",Oe,[y(c(e.title)+" ",1),e.isExternal?(l(),i(s,{key:0,name:"external-link"})):u("v-if",!0)]),b("div",Ne,[(l(!0),r(w,null,_(e.breadcrumb,((e,t)=>(l(),r("span",{key:t},[y(c(e)+" ",1),He])))),128))]),b("div",Je,c(e.path),1)])],42,je)])),_:2},1032,["to"])))),128))],2)])],2)}}},[["__scopeId","data-v-f74de7e6"]]);const Qe=e=>(k("data-v-41c8115a"),e=e(),$(),e),Ye=y("导航栏模式"),Ge={key:1,class:"menu-mode"},We=y("侧边栏"),Ze={key:2,class:"setting-item"},Xe=Qe((()=>b("div",{class:"label"},"折叠按钮",-1))),et={class:"setting-item"},tt=Qe((()=>b("div",{class:"label"},"是否折叠",-1))),at={class:"setting-item"},st={class:"label"},nt=y(" 切换跳转 "),lt={class:"setting-item"},it={class:"label"},ot=y(" 保持展开一个 "),rt=y("顶栏"),ut={class:"setting-item"},ct={class:"label"},dt=y(" 顶栏固定 "),mt={key:3,class:"setting-item"},pt=Qe((()=>b("div",{class:"label"},"面包屑导航",-1))),ht=y("功能按钮"),vt={class:"setting-item"},gt={class:"label"},bt=y(" 导航栏搜索 "),ft={key:4,class:"setting-item"},yt={class:"label"},kt=y(" 全屏 "),$t={class:"setting-item"},wt={class:"label"},_t=y(" 页面刷新 "),xt=y("其它"),St={class:"setting-item"},Ct={class:"label"},Vt=y(" 组件尺寸 "),qt={class:"setting-item"},Ft=Qe((()=>b("div",{class:"label"},"底部版权",-1))),Tt={class:"setting-item"},Et={class:"label"},Pt=y(" 加载进度条 "),Mt={class:"setting-item"},Bt={class:"label"},Ut=y(" 动态标题 "),zt={class:"setting-item"},It={class:"label"},Lt=y(" 欢迎页 ");var At=D({setup(e){const{proxy:c}=M(),h=t(),g=V(),y=p("reload"),k=a(!1),$=s({get:function(){return h.state.settings.menuMode},set:function(e){h.commit("menu/switchHeaderActived",0),h.commit("settings/updateThemeSetting",{menuMode:e}),"single"!==h.state.settings.menuMode&&h.commit("menu/setHeaderActived",g.fullPath)}}),w=s({get:function(){return h.state.settings.elementSize},set:function(e){c.$ELEMENT.size=e,h.commit("settings/updateThemeSetting",{elementSize:e}),y()}}),_=s({get:function(){return h.state.settings.enableSidebarCollapse},set:function(e){h.commit("settings/updateThemeSetting",{enableSidebarCollapse:e})}}),x=s({get:function(){return h.state.settings.sidebarCollapse},set:function(e){h.commit("settings/updateThemeSetting",{sidebarCollapse:e})}}),S=s({get:function(){return h.state.settings.switchSidebarAndPageJump},set:function(e){h.commit("settings/updateThemeSetting",{switchSidebarAndPageJump:e})}}),C=s({get:function(){return h.state.settings.sidebarUniqueOpened},set:function(e){h.commit("settings/updateThemeSetting",{sidebarUniqueOpened:e})}}),q=s({get:function(){return h.state.settings.topbarFixed},set:function(e){h.commit("settings/updateThemeSetting",{topbarFixed:e})}}),F=s({get:function(){return h.state.settings.enableBreadcrumb},set:function(e){h.commit("settings/updateThemeSetting",{enableBreadcrumb:e})}}),T=s({get:function(){return h.state.settings.showCopyright},set:function(e){h.commit("settings/updateThemeSetting",{showCopyright:e})}}),E=s({get:function(){return h.state.settings.enableNavSearch},set:function(e){h.commit("settings/updateThemeSetting",{enableNavSearch:e})}}),P=s({get:function(){return h.state.settings.enableFullscreen},set:function(e){h.commit("settings/updateThemeSetting",{enableFullscreen:e})}}),U=s({get:function(){return h.state.settings.enablePageReload},set:function(e){h.commit("settings/updateThemeSetting",{enablePageReload:e})}}),z=s({get:function(){return h.state.settings.enableProgress},set:function(e){h.commit("settings/updateThemeSetting",{enableProgress:e})}}),I=s({get:function(){return h.state.settings.enableDynamicTitle},set:function(e){h.commit("settings/updateThemeSetting",{enableDynamicTitle:e})}}),L=s({get:function(){return h.state.settings.enableDashboard},set:function(e){h.commit("settings/updateThemeSetting",{enableDashboard:e})}});return v((()=>{c.$eventBus.on("global-theme-toggle",(()=>{k.value=!k.value}))})),(e,t)=>{const a=n("el-alert"),s=n("el-divider"),c=A,p=n("el-tooltip"),h=n("el-switch"),v=n("el-option"),g=n("el-select"),y=n("el-drawer");return l(),r("div",null,[f(y,{modelValue:k.value,"onUpdate:modelValue":t[17]||(t[17]=e=>k.value=e),title:"主题配置",direction:"rtl",size:300},{default:o((()=>[f(a,{title:"主题配置可实时预览效果，更多设置请在 src/settings.js 中进行设置，建议在生产环境隐藏主题配置功能",type:"error",closable:!1}),"pc"===e.$store.state.settings.mode?(l(),i(s,{key:0},{default:o((()=>[Ye])),_:1})):u("v-if",!0),"pc"===e.$store.state.settings.mode?(l(),r("div",Ge,[f(p,{content:"侧边栏模式（含主导航）",placement:"top","show-after":500,"append-to-body":!1},{default:o((()=>[b("div",{class:m(["mode mode-side",{active:"side"===d($)}]),onClick:t[0]||(t[0]=e=>$.value="side")},[f(c,{name:"el-icon-check"})],2)])),_:1}),f(p,{content:"顶部模式",placement:"top","show-after":500,"append-to-body":!1},{default:o((()=>[b("div",{class:m(["mode mode-head",{active:"head"===d($)}]),onClick:t[1]||(t[1]=e=>$.value="head")},[f(c,{name:"el-icon-check"})],2)])),_:1}),f(p,{content:"侧边栏模式（不含主导航）",placement:"top","show-after":500,"append-to-body":!1},{default:o((()=>[b("div",{class:m(["mode mode-single",{active:"single"===d($)}]),onClick:t[2]||(t[2]=e=>$.value="single")},[f(c,{name:"el-icon-check"})],2)])),_:1})])):u("v-if",!0),f(s,null,{default:o((()=>[We])),_:1}),"pc"===e.$store.state.settings.mode?(l(),r("div",Ze,[Xe,f(h,{modelValue:d(_),"onUpdate:modelValue":t[3]||(t[3]=e=>B(_)?_.value=e:null)},null,8,["modelValue"])])):u("v-if",!0),b("div",et,[tt,f(h,{modelValue:d(x),"onUpdate:modelValue":t[4]||(t[4]=e=>B(x)?x.value=e:null)},null,8,["modelValue"])]),b("div",at,[b("div",st,[nt,f(p,{content:"开启该功能后，切换侧边栏时，页面自动跳转至该侧边栏导航下第一个路由地址",placement:"top","append-to-body":!1},{default:o((()=>[f(c,{name:"el-icon-question"})])),_:1})]),f(h,{modelValue:d(S),"onUpdate:modelValue":t[5]||(t[5]=e=>B(S)?S.value=e:null),disabled:["single"].includes(e.$store.state.settings.menuMode)},null,8,["modelValue","disabled"])]),b("div",lt,[b("div",it,[ot,f(p,{content:"开启该功能后，侧边栏只保持一个子菜单的展开",placement:"top","append-to-body":!1},{default:o((()=>[f(c,{name:"ri-question-line"})])),_:1})]),f(h,{modelValue:d(C),"onUpdate:modelValue":t[6]||(t[6]=e=>B(C)?C.value=e:null)},null,8,["modelValue"])]),f(s,null,{default:o((()=>[rt])),_:1}),b("div",ut,[b("div",ct,[dt,f(p,{content:"包含顶部导航栏和标签栏",placement:"top","append-to-body":!1},{default:o((()=>[f(c,{name:"el-icon-question"})])),_:1})]),f(h,{modelValue:d(q),"onUpdate:modelValue":t[7]||(t[7]=e=>B(q)?q.value=e:null)},null,8,["modelValue"])]),"pc"===e.$store.state.settings.mode?(l(),r("div",mt,[pt,f(h,{modelValue:d(F),"onUpdate:modelValue":t[8]||(t[8]=e=>B(F)?F.value=e:null)},null,8,["modelValue"])])):u("v-if",!0),f(s,null,{default:o((()=>[ht])),_:1}),b("div",vt,[b("div",gt,[bt,f(p,{content:"对导航栏进行快捷搜索",placement:"top","append-to-body":!1},{default:o((()=>[f(c,{name:"el-icon-question"})])),_:1})]),f(h,{modelValue:d(E),"onUpdate:modelValue":t[9]||(t[9]=e=>B(E)?E.value=e:null)},null,8,["modelValue"])]),"pc"===e.$store.state.settings.mode?(l(),r("div",ft,[b("div",yt,[kt,f(p,{content:"该功能使用场景极少，用户习惯于通过窗口“最大化”功能来扩大显示区域，以显示更多内容，并且使用 F11 键也可以进入全屏效果",placement:"top","append-to-body":!1},{default:o((()=>[f(c,{name:"el-icon-question"})])),_:1})]),f(h,{modelValue:d(P),"onUpdate:modelValue":t[10]||(t[10]=e=>B(P)?P.value=e:null)},null,8,["modelValue"])])):u("v-if",!0),b("div",$t,[b("div",wt,[_t,f(p,{content:"开启时会阻止原生 F5 键刷新功能，并采用框架提供的刷新模式进行页面刷新",placement:"top","append-to-body":!1},{default:o((()=>[f(c,{name:"el-icon-question"})])),_:1})]),f(h,{modelValue:d(U),"onUpdate:modelValue":t[11]||(t[11]=e=>B(U)?U.value=e:null)},null,8,["modelValue"])]),f(s,null,{default:o((()=>[xt])),_:1}),b("div",St,[b("div",Ct,[Vt,f(p,{content:"全局设置 Element Plus 组件的默认尺寸大小",placement:"top","append-to-body":!1},{default:o((()=>[f(c,{name:"el-icon-question"})])),_:1})]),f(g,{modelValue:d(w),"onUpdate:modelValue":t[12]||(t[12]=e=>B(w)?w.value=e:null),size:"small"},{default:o((()=>[f(v,{label:"默认 (large)",value:"large"}),f(v,{label:"中等 (medium)",value:"medium"}),f(v,{label:"小 (small)",value:"small"}),f(v,{label:"极小 (mini)",value:"mini"})])),_:1},8,["modelValue"])]),b("div",qt,[Ft,f(h,{modelValue:d(T),"onUpdate:modelValue":t[13]||(t[13]=e=>B(T)?T.value=e:null)},null,8,["modelValue"])]),b("div",Tt,[b("div",Et,[Pt,f(p,{content:"该功能开启时，跳转路由会看到页面顶部有条蓝色的进度条",placement:"top","append-to-body":!1},{default:o((()=>[f(c,{name:"el-icon-question"})])),_:1})]),f(h,{modelValue:d(z),"onUpdate:modelValue":t[14]||(t[14]=e=>B(z)?z.value=e:null)},null,8,["modelValue"])]),b("div",Mt,[b("div",Bt,[Ut,f(p,{content:"该功能开启时，页面标题会显示当前路由标题，格式为“页面标题 - 网站名称”；关闭时则显示网站名称，网站名称在项目根目录下 .env.* 文件里配置",placement:"top","append-to-body":!1},{default:o((()=>[f(c,{name:"el-icon-question"})])),_:1})]),f(h,{modelValue:d(I),"onUpdate:modelValue":t[15]||(t[15]=e=>B(I)?I.value=e:null)},null,8,["modelValue"])]),b("div",zt,[b("div",It,[Lt,f(p,{content:"欢迎页即控制台页面，该功能开启时，登录成功默认进入控制台页面；关闭时则默认进入侧边栏导航第一个导航页面",placement:"top","append-to-body":!1},{default:o((()=>[f(c,{name:"el-icon-question"})])),_:1})]),f(h,{modelValue:d(L),"onUpdate:modelValue":t[16]||(t[16]=e=>B(L)?L.value=e:null)},null,8,["modelValue"])])])),_:1},8,["modelValue"])])}}},[["__scopeId","data-v-41c8115a"]]);const jt=e=>(k("data-v-13d30201"),e=e(),$(),e),Dt=jt((()=>b("span",{class:"title"},[y("在线"),b("br"),y("咨询")],-1))),Rt=jt((()=>b("span",{class:"title"},[y("加入"),b("br"),y("QQ群")],-1))),Ot=jt((()=>b("span",{class:"title"},[y("购买"),b("br"),y("专业版")],-1))),Nt=jt((()=>b("span",{class:"title"},[y("开发"),b("br"),y("文档")],-1))),Ht=jt((()=>b("span",{class:"title"},[y("下载"),b("br"),y("基础版")],-1)));var Jt=D({setup(e){const{proxy:t}=M(),s=a(location.href),n=a(!0);function i(e){window.open(e,"top")}return setTimeout((()=>{n.value=!1}),5e3),v((()=>{t.$notify({type:"success",title:"温馨提示",dangerouslyUseHTMLString:!0,message:`\n                <p>当前访问的是<b>基础版</b> (Vue3)</p>\n                <p>你可以点<a href="https://hooray.${location.origin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/vue3/pro/" target="_blank"><b>这里</b></a>访问专业版 (Vue3)</p>\n            `,position:"bottom-right",duration:5e3})})),(e,t)=>{const a=A;return l(),r("div",{class:m(["buy-it",{actived:n.value}])},[b("div",{class:"item",onClick:t[0]||(t[0]=e=>i("https://wpa.qq.com/msgrd?v=3&uin=304327508&site=qq&menu=yes"))},[f(a,{name:"fixed-right-qq"}),Dt]),b("div",{class:"item chat",onClick:t[1]||(t[1]=e=>i("https://qm.qq.com/cgi-bin/qm/qr?k=WoDBYN0S9r94f9oBZkxlGbiYxu3dEzgt&jump_from=webapi"))},[f(a,{name:"fixed-right-chat"}),Rt]),b("div",{class:"item buy",onClick:t[2]||(t[2]=e=>i(`https://hooray.${s.value.includes("gitee")?"gitee":"github"}.io/fantastic-admin/buy.html`))},[f(a,{name:"fixed-right-buy"}),Ot]),b("div",{class:"item doc",onClick:t[3]||(t[3]=e=>i(`https://hooray.${s.value.includes("gitee")?"gitee":"github"}.io/fantastic-admin/`))},[f(a,{name:"fixed-right-doc"}),Nt]),b("div",{class:"item code",onClick:t[4]||(t[4]=e=>i(`https://${s.value.includes("gitee")?"gitee":"github"}.com/hooray/fantastic-admin/`))},[f(a,{name:"fixed-right-code"}),Ht])],2)}}},[["__scopeId","data-v-13d30201"]]);const Kt={class:"layout"},Qt={class:"wrapper"},Yt={class:"main"};var Gt=D({setup(a){const{proxy:c}=M(),p=t(),g=V(),y=h(),k=s((()=>void 0!==g.meta.copyright?g.meta.copyright:p.state.settings.showCopyright));function $(){y.push({name:"reload"})}return T((()=>p.state.settings.sidebarCollapse),(e=>{"mobile"===p.state.settings.mode&&(e?document.querySelector("body").classList.remove("hidden"):document.querySelector("body").classList.add("hidden"))})),v((()=>{c.$hotkeys("f5",(e=>{p.state.settings.enablePageReload&&(e.preventDefault(),$())}))})),U("reload",$),U("switchMenu",(function(e){p.commit("menu/switchHeaderActived",e),p.state.settings.switchSidebarAndPageJump&&y.push(p.getters["menu/sidebarRoutes"][0].path)})),(t,a)=>{const s=n("router-view"),c=e,p=n("el-backtop");return l(),r("div",Kt,[b("div",{id:"app-main",class:m({"main-page-maximize":t.$store.state.settings.mainPageMaximizeStatus})},[f(be),b("div",Qt,[b("div",{class:m(["sidebar-container",{show:"mobile"===t.$store.state.settings.mode&&!t.$store.state.settings.sidebarCollapse}])},[f($e),f(qe)],2),b("div",{class:m(["sidebar-mask",{show:"mobile"===t.$store.state.settings.mode&&!t.$store.state.settings.sidebarCollapse}]),onClick:a[0]||(a[0]=e=>t.$store.commit("settings/toggleSidebarCollapse"))},null,2),b("div",{class:"main-container",style:z({"padding-bottom":t.$route.meta.paddingBottom})},[f(Te),b("div",Yt,[f(s,null,{default:o((({Component:e,route:a})=>[f(x,{name:"main",mode:"out-in",appear:""},{default:o((()=>[(l(),i(L,{include:t.$store.state.keepAlive.list},[(l(),i(I(e),{key:a.fullPath}))],1032,["include"]))])),_:2},1024)])),_:1})]),d(k)?(l(),i(c,{key:0})):u("v-if",!0)],4)]),f(p,{right:20,bottom:20,title:"回到顶部"})],2),f(Ke),f(At),f(Jt)])}}},[["__scopeId","data-v-3e2e2d84"]]);export{Gt as default};
