
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as N}from"./index.83ef838b.js";import{_ as $}from"./index.27d09c8d.js";import{r as f,A as x,j,D as t,C as o,F as w,o as T,$ as i}from"./vendor.399b4c48.js";import"./index.f5876f78.js";const B=i("\u8BBF\u95EE iNotify"),W=i("\u8BBE\u7F6E Favicon"),A=i("\u8BBE\u7F6E Favicon \u989C\u8272(\u767D\u5E95\u9ED1\u5B57)"),E=i("\u6E05\u7A7A Favicon"),I=i("\u5F00\u59CB\u6EDA\u52A8\u6807\u9898"),S=i("\u505C\u6B62\u6EDA\u52A8\u6807\u9898"),V=i("\u6253\u5F00\u901A\u77E5"),D=i("\u6253\u5F00\u901A\u77E5(\u70B9\u51FB\u6253\u5F00\u9875\u9762)"),P=i("\u6253\u5F00\u901A\u77E5(\u8BBE\u7F6E icon)"),U=i("\u6253\u5F00\u901A\u77E5(\u56DE\u8C03\u4E8B\u4EF6)"),L={setup(q){const{proxy:s}=w(),e=s.$iNotify({effect:"scroll",interval:500}),c=f(e.isPermission()),a=f(!1);function r(){e.setFavicon(5).setFaviconColor("#fff").setFaviconBackgroundColor("#2F9A00"),a.value=!0}function v(){e.setFaviconColor("#000").setFaviconBackgroundColor("#fff"),a.value=!0}function p(){e.faviconClear(),a.value=!1}const l=f(!1);function m(){e.setTitle("\u60A8\u67095\u6761\u901A\u77E5\u672A\u5904\u7406\uFF0C\u8BF7\u5C3D\u5FEB\u5904\u7406\u5662~"),l.value=!0}function h(){e.setTitle(),l.value=!1}function y(){e.notify({title:"Fantastic-admin",body:"Fantastic-admin \u662F\u4E00\u6B3E\u5F00\u7BB1\u5373\u7528\u7684\u4E2D\u540E\u53F0\u6846\u67B6"})}function C(){e.notify({title:"\u6E29\u99A8\u63D0\u793A",body:"\u7528 Fantastic-admin \u505A\u5F00\u53D1\u8BB0\u5F97\u8981\u770B\u5F00\u53D1\u6587\u6863\u5662\uFF0C\u70B9\u51FB\u6211\u8BBF\u95EE\u5F00\u53D1\u6587\u6863",openurl:`https://hooray.${location.origin.includes("gitee")?"gitee":"github"}.io/fantastic-admin`})}function b(){e.notify({title:"\u6E29\u99A8\u63D0\u793A",body:"icon \u9ED8\u8BA4\u663E\u793A favicon \uFF0C\u4E5F\u53EF\u4EE5\u624B\u52A8\u8BBE\u7F6E",icon:"https://picsum.photos/100"})}function F(){e.notify({title:"\u6E29\u99A8\u63D0\u793A",body:"\u6CE8\u610F\u770B\u76F8\u5173\u89E6\u53D1\u4E8B\u4EF6",onshow:()=>{s.$message("\u89E6\u53D1 onshow \u4E8B\u4EF6")},onclick:()=>{s.$message("\u89E6\u53D1 onclick \u4E8B\u4EF6")},onerror:()=>{s.$message("\u89E6\u53D1 onerror \u4E8B\u4EF6")},onclose:()=>{s.$message("\u89E6\u53D1 onclose \u4E8B\u4EF6")}})}function k(_){window.open(_,"top")}return(_,u)=>{const n=x("el-button"),g=$,d=N;return T(),j("div",null,[t(g,{title:"\u901A\u77E5",content:"\u57FA\u4E8E iNotify \uFF0C\u652F\u6301 favicon\u3001\u7F51\u9875\u6807\u9898\u3001Chrome\u684C\u9762\u901A\u77E5"},{default:o(()=>[t(n,{icon:"el-icon-link",onClick:u[0]||(u[0]=z=>k("https://github.com/jaywcjlove/iNotify"))},{default:o(()=>[B]),_:1})]),_:1}),t(d,{title:"Favicon \u901A\u77E5"},{default:o(()=>[t(n,{onClick:r},{default:o(()=>[W]),_:1}),t(n,{onClick:v},{default:o(()=>[A]),_:1}),t(n,{disabled:!a.value,onClick:p},{default:o(()=>[E]),_:1},8,["disabled"])]),_:1}),t(d,{title:"\u6807\u9898\u901A\u77E5"},{default:o(()=>[t(n,{onClick:m},{default:o(()=>[I]),_:1}),t(n,{disabled:!l.value,onClick:h},{default:o(()=>[S]),_:1},8,["disabled"])]),_:1}),t(d,{title:"\u684C\u9762\u901A\u77E5\uFF08\u5982\u679C\u6309\u94AE\u88AB\u7981\u7528\uFF0C\u8BF4\u660E\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\uFF09"},{default:o(()=>[t(n,{disabled:!c.value,onClick:y},{default:o(()=>[V]),_:1},8,["disabled"]),t(n,{disabled:!c.value,onClick:C},{default:o(()=>[D]),_:1},8,["disabled"]),t(n,{disabled:!c.value,onClick:b},{default:o(()=>[P]),_:1},8,["disabled"]),t(n,{onClick:F},{default:o(()=>[U]),_:1})]),_:1})])}}};export{L as default};
