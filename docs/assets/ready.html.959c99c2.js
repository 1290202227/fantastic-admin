import{r as e,c as t,a as r,b as a,w as n,F as o,e as l,d as i,o as s}from"./app.2ed959af.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";const h={},m=l('<h1 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h1><h2 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h2><p>阅读开发文档前，请确保手上已经有 Fantastic-admin 源码，因为文档中提及的内容，都是需要在本地项目中编写或修改代码并运行才能呈现的。如果还没有源码，可以通过下面两种方式获取：</p><h3 id="基础版" tabindex="-1"><a class="header-anchor" href="#基础版" aria-hidden="true">#</a> 基础版</h3><div class="custom-container warning"><p class="custom-container-title">分支说明</p><ul><li><code>master</code> 演示源码，即在<strong>框架源码</strong>基础上提供各种特性展示，含有大量示例代码</li><li><code>template</code> 框架源码，不含示例代码，适合直接用于项目开发</li></ul></div>',5),c=i("手动下载 "),p=i("去 "),d={href:"https://gitee.com/hooray/fantastic-admin",target:"_blank",rel:"noopener noreferrer"},g=i("Gitee"),f=i(" 下载"),k=i("去 "),b={href:"https://github.com/hooray/fantastic-admin",target:"_blank",rel:"noopener noreferrer"},v=i("Github"),_=i(" 下载"),j=r("li",null,"git 克隆",-1),C=r("div",{class:"language-bash ext-sh"},[r("pre",{class:"language-bash"},[r("code",null,[r("span",{class:"token comment"},"# 拉取演示源码"),i("\n"),r("span",{class:"token function"},"git"),i(" clone https://gitee.com/hooray/fantastic-admin.git\n"),r("span",{class:"token comment"},"# 拉取框架源码"),i("\n"),r("span",{class:"token function"},"git"),i(" clone -b template https://gitee.com/hooray/fantastic-admin.git\n")])])],-1),N=r("div",{class:"language-bash ext-sh"},[r("pre",{class:"language-bash"},[r("code",null,[r("span",{class:"token comment"},"# 拉取演示源码"),i("\n"),r("span",{class:"token function"},"git"),i(" clone https://github.com/hooray/fantastic-admin.git\n"),r("span",{class:"token comment"},"# 拉取框架源码"),i("\n"),r("span",{class:"token function"},"git"),i(" clone -b template https://github.com/hooray/fantastic-admin.git\n")])])],-1),x=r("h3",{id:"专业版",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#专业版","aria-hidden":"true"},"#"),i(" 专业版")],-1),V=i("去购买"),y=r("h2",{id:"开发环境",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#开发环境","aria-hidden":"true"},"#"),i(" 开发环境")],-1),w=i("使用本模板前，需要在本地依次安装好 "),S={href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},T=i("Node.js"),E=i(", "),G={href:"https://pnpm.io/zh/",target:"_blank",rel:"noopener noreferrer"},L=i("pnpm"),z=i(", "),P={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},I=i("Git"),H=i(" 和 "),M={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},A=i("Visual Studio Code"),R=i("，并且在 Visual Studio Code 里安装好以下扩展："),F={href:"https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig",target:"_blank",rel:"noopener noreferrer"},D=i("EditorConfig for VS Code"),O={href:"https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv",target:"_blank",rel:"noopener noreferrer"},q=i("DotENV"),B={href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"},J=i("ESLint"),K={href:"https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint",target:"_blank",rel:"noopener noreferrer"},Q=i("stylelint"),U={href:"https://marketplace.visualstudio.com/items?itemName=octref.vetur",target:"_blank",rel:"noopener noreferrer"},W=i("Vetur"),X={class:"custom-container tip"},Y=r("p",{class:"custom-container-title"},"TIP",-1),Z=r("p",null,"以上 5 个为 Visual Studio Code 必备扩展，以下则是作者建议安装的扩展，安装它们将在一定程度上提升开发效率。",-1),$={href:"https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans",target:"_blank",rel:"noopener noreferrer"},ee=i("Chinese (Simplified) Language Pack for Visual Studio Code"),te=i(" 中文语言包"),re={href:"https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag",target:"_blank",rel:"noopener noreferrer"},ae=i("Auto Close Tag"),ne=i(" 自动添加 HTML 的闭合标签"),oe={href:"https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag",target:"_blank",rel:"noopener noreferrer"},le=i("Auto Rename Tag"),ie=i(" 自动重命名配对 HTML 标签"),se={href:"https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight",target:"_blank",rel:"noopener noreferrer"},ue=i("Color Highlight"),he=i(" 在代码中高亮颜色"),me={href:"https://marketplace.visualstudio.com/items?itemName=anseki.vscode-color",target:"_blank",rel:"noopener noreferrer"},ce=i("Color Picker"),pe=i(" 取色器"),de={href:"https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag",target:"_blank",rel:"noopener noreferrer"},ge=i("Highlight Matching Tag"),fe=i(" 高亮显示匹配的标签"),ke={href:"https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview",target:"_blank",rel:"noopener noreferrer"},be=i("Image preview"),ve=i(" 图片预览"),_e={href:"https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow",target:"_blank",rel:"noopener noreferrer"},je=i("indent-rainbow"),Ce=i(" 彩虹缩进提示"),Ne={href:"https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete",target:"_blank",rel:"noopener noreferrer"},xe=i("Path Autocomplete"),Ve=i(" 路径自动补全"),ye=i("除此之外，还需要准备好开发使用的浏览器，推荐使用 "),we={href:"https://www.google.cn/chrome/",target:"_blank",rel:"noopener noreferrer"},Se=i("Chrome"),Te=i(" ，并且在 Chrome 里安装好 "),Ee={href:"https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg",target:"_blank",rel:"noopener noreferrer"},Ge=i("Vue.js devtools"),Le=i(" 扩展，这一步很重要，安装 Vue 官方提供的调试工具将大大提升解决 bug 的效率。"),ze={class:"custom-container tip"},Pe=r("p",{class:"custom-container-title"},"TIP",-1),Ie=r("p",null,"Vue.js devtools 目前有两个版本，分别是正式版和 beta 版，需要安装的是 beta 版。如果之前有安装过正式版，在进行开发调试的时候，需要禁用或删除正式版，也就是只保留一个 Vue.js devtools 扩展才行。",-1),He=i("另外，由于 Vue.js devtools 的 Chrome 扩展需要访问 Chrome 应用商店，如果在大陆地区访问，需要自行准备相关"),Me=r("strong",null,"可访问外网",-1),Ae=i("的工具。如果不具备该条件，也可通过访问 "),Re={href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener noreferrer"},Fe=i("devtools"),De=i(" 仓库并下载 "),Oe=r("code",null,".xpi",-1),qe=i(" 文件进行本地安装，支持 chrome 和 firefox ，详细说明请访问 "),Be={href:"https://devtools.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},Je=i("Vue.js devtools"),Ke=i(" 官网了解。"),Qe=r("h2",{id:"技术栈",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#技术栈","aria-hidden":"true"},"#"),i(" 技术栈")],-1),Ue=r("p",null,"了解并熟悉框架使用到的技术栈，能让你使用本框架更得心应手。",-1),We={href:"https://cn.vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},Xe=i("Vite"),Ye={href:"https://v3.cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},Ze=i("Vue 3"),$e=i(" ("),et={href:"https://v3.cn.vuejs.org/guide/migration/introduction.html",target:"_blank",rel:"noopener noreferrer"},tt=i("v3 迁移指南"),rt=i(")"),at={href:"https://next.router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},nt=i("Vue Router 4"),ot={href:"https://next.vuex.vuejs.org/zh/index.html",target:"_blank",rel:"noopener noreferrer"},lt=i("Vuex 4"),it={href:"https://element-plus.org/#/zh-CN",target:"_blank",rel:"noopener noreferrer"},st=i("Element Plus");var ut=u(h,[["render",function(l,i){const u=e("OutboundLink"),h=e("CodeGroupItem"),ut=e("CodeGroup"),ht=e("RouterLink");return s(),t(o,null,[m,r("ul",null,[r("li",null,[c,r("ul",null,[r("li",null,[p,r("a",d,[g,a(u)]),f]),r("li",null,[k,r("a",b,[v,a(u)]),_])])]),j]),a(ut,null,{default:n((()=>[a(h,{title:"从 Gitee 克隆"},{default:n((()=>[C])),_:1}),a(h,{title:"从 Github 克隆"},{default:n((()=>[N])),_:1})])),_:1}),x,r("p",null,[a(ht,{to:"/buy.html"},{default:n((()=>[V])),_:1})]),y,r("p",null,[w,r("a",S,[T,a(u)]),E,r("a",G,[L,a(u)]),z,r("a",P,[I,a(u)]),H,r("a",M,[A,a(u)]),R]),r("ul",null,[r("li",null,[r("a",F,[D,a(u)])]),r("li",null,[r("a",O,[q,a(u)])]),r("li",null,[r("a",B,[J,a(u)])]),r("li",null,[r("a",K,[Q,a(u)])]),r("li",null,[r("a",U,[W,a(u)])])]),r("div",X,[Y,Z,r("ul",null,[r("li",null,[r("a",$,[ee,a(u)]),te]),r("li",null,[r("a",re,[ae,a(u)]),ne]),r("li",null,[r("a",oe,[le,a(u)]),ie]),r("li",null,[r("a",se,[ue,a(u)]),he]),r("li",null,[r("a",me,[ce,a(u)]),pe]),r("li",null,[r("a",de,[ge,a(u)]),fe]),r("li",null,[r("a",ke,[be,a(u)]),ve]),r("li",null,[r("a",_e,[je,a(u)]),Ce]),r("li",null,[r("a",Ne,[xe,a(u)]),Ve])])]),r("p",null,[ye,r("a",we,[Se,a(u)]),Te,r("a",Ee,[Ge,a(u)]),Le]),r("div",ze,[Pe,Ie,r("p",null,[He,Me,Ae,r("a",Re,[Fe,a(u)]),De,Oe,qe,r("a",Be,[Je,a(u)]),Ke])]),Qe,Ue,r("ul",null,[r("li",null,[r("a",We,[Xe,a(u)])]),r("li",null,[r("a",Ye,[Ze,a(u)]),$e,r("a",et,[tt,a(u)]),rt]),r("li",null,[r("a",at,[nt,a(u)])]),r("li",null,[r("a",ot,[lt,a(u)])]),r("li",null,[r("a",it,[st,a(u)])])])],64)}]]);export{ut as default};
