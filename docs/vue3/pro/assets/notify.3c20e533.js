
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as N}from"./index.cc6d1ed1.js";import{_ as x}from"./index.a912659c.js";import{i as $,P as f,r as j,m as w,Q as T,t,q as o,Y as i}from"./vendor.4daee5e9.js";import"./plugin-vue_export-helper.5a098b48.js";const B=i("\u8BBF\u95EE iNotify"),W=i("\u8BBE\u7F6E Favicon"),E=i("\u8BBE\u7F6E Favicon \u989C\u8272(\u767D\u5E95\u9ED1\u5B57)"),I=i("\u6E05\u7A7A Favicon"),P=i("\u5F00\u59CB\u6EDA\u52A8\u6807\u9898"),S=i("\u505C\u6B62\u6EDA\u52A8\u6807\u9898"),V=i("\u6253\u5F00\u901A\u77E5"),q=i("\u6253\u5F00\u901A\u77E5(\u70B9\u51FB\u6253\u5F00\u9875\u9762)"),A=i("\u6253\u5F00\u901A\u77E5(\u8BBE\u7F6E icon)"),Q=i("\u6253\u5F00\u901A\u77E5(\u56DE\u8C03\u4E8B\u4EF6)"),J={setup(U){const{proxy:s}=$(),e=s.$iNotify({effect:"scroll",interval:500}),c=f(e.isPermission()),a=f(!1);function r(){e.setFavicon(5).setFaviconColor("#fff").setFaviconBackgroundColor("#2F9A00"),a.value=!0}function v(){e.setFaviconColor("#000").setFaviconBackgroundColor("#fff"),a.value=!0}function p(){e.faviconClear(),a.value=!1}const l=f(!1);function m(){e.setTitle("\u60A8\u67095\u6761\u901A\u77E5\u672A\u5904\u7406\uFF0C\u8BF7\u5C3D\u5FEB\u5904\u7406\u5662~"),l.value=!0}function h(){e.setTitle(),l.value=!1}function y(){e.notify({title:"Fantastic-admin",body:"Fantastic-admin \u662F\u4E00\u6B3E\u5F00\u7BB1\u5373\u7528\u7684\u4E2D\u540E\u53F0\u6846\u67B6"})}function C(){e.notify({title:"\u6E29\u99A8\u63D0\u793A",body:"\u7528 Fantastic-admin \u505A\u5F00\u53D1\u8BB0\u5F97\u8981\u770B\u5F00\u53D1\u6587\u6863\u5662\uFF0C\u70B9\u51FB\u6211\u8BBF\u95EE\u5F00\u53D1\u6587\u6863",openurl:`https://hooray.${location.origin.includes("gitee")?"gitee":"github"}.io/fantastic-admin`})}function b(){e.notify({title:"\u6E29\u99A8\u63D0\u793A",body:"icon \u9ED8\u8BA4\u663E\u793A favicon \uFF0C\u4E5F\u53EF\u4EE5\u624B\u52A8\u8BBE\u7F6E",icon:"https://picsum.photos/100"})}function g(){e.notify({title:"\u6E29\u99A8\u63D0\u793A",body:"\u6CE8\u610F\u770B\u76F8\u5173\u89E6\u53D1\u4E8B\u4EF6",onshow:()=>{s.$message("\u89E6\u53D1 onshow \u4E8B\u4EF6")},onclick:()=>{s.$message("\u89E6\u53D1 onclick \u4E8B\u4EF6")},onerror:()=>{s.$message("\u89E6\u53D1 onerror \u4E8B\u4EF6")},onclose:()=>{s.$message("\u89E6\u53D1 onclose \u4E8B\u4EF6")}})}function k(u){window.open(u,"top")}return(u,_)=>{const n=j("el-button"),F=x,d=N;return w(),T("div",null,[t(F,{title:"\u901A\u77E5",content:"\u57FA\u4E8E iNotify \uFF0C\u652F\u6301 favicon\u3001\u7F51\u9875\u6807\u9898\u3001Chrome\u684C\u9762\u901A\u77E5"},{default:o(()=>[t(n,{icon:"el-icon-link",onClick:_[0]||(_[0]=Y=>k("https://github.com/jaywcjlove/iNotify"))},{default:o(()=>[B]),_:1})]),_:1}),t(d,{title:"Favicon \u901A\u77E5"},{default:o(()=>[t(n,{onClick:r},{default:o(()=>[W]),_:1}),t(n,{onClick:v},{default:o(()=>[E]),_:1}),t(n,{disabled:!a.value,onClick:p},{default:o(()=>[I]),_:1},8,["disabled"])]),_:1}),t(d,{title:"\u6807\u9898\u901A\u77E5"},{default:o(()=>[t(n,{onClick:m},{default:o(()=>[P]),_:1}),t(n,{disabled:!l.value,onClick:h},{default:o(()=>[S]),_:1},8,["disabled"])]),_:1}),t(d,{title:"\u684C\u9762\u901A\u77E5\uFF08\u5982\u679C\u6309\u94AE\u88AB\u7981\u7528\uFF0C\u8BF4\u660E\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\uFF09"},{default:o(()=>[t(n,{disabled:!c.value,onClick:y},{default:o(()=>[V]),_:1},8,["disabled"]),t(n,{disabled:!c.value,onClick:C},{default:o(()=>[q]),_:1},8,["disabled"]),t(n,{disabled:!c.value,onClick:b},{default:o(()=>[A]),_:1},8,["disabled"]),t(n,{onClick:g},{default:o(()=>[Q]),_:1})]),_:1})])}}};export{J as default};
