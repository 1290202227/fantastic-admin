import{r as e,c as l,a,b as n,w as r,F as o,d as t,o as s}from"./app.3fd1e979.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";const d={},u={id:"快速生成文件",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#快速生成文件","aria-hidden":"true"},"#",-1),c=t(" 快速生成文件 "),h=a("h2",{id:"介绍",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),t(" 介绍")],-1),m=a("p",null,"开发过程中，避免不了手动去频繁创建页面、组件等文件，并且还要在文件里写一些必要的代码，是不是觉得很麻烦？现在你可以用更简洁的方式来处理这一切。",-1),f=a("p",null,[t("框架默认提供了 page（页面）、component（组件）、store（全局状态）、module（模块）共 4 种模式，通过 "),a("code",null,"yarn new"),t(" 指令可以自行选择。")],-1),g=a("h2",{id:"page",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#page","aria-hidden":"true"},"#"),t(" page")],-1),b=["src"],v=a("p",null,[t("page 模式下，只能在 "),a("code",null,"/src/views/"),t(" 目录下选择指定的文件夹进行生成，生成的文件中，部分关键位置会被替换掉，例如 "),a("code",null,"<page-header />"),t(" 中的 "),a("code",null,"title"),t(" 会按照你输入的中文名称替换，页面的 "),a("code",null,"name"),t(" 会根据当前文件目录和文件名自动生成，确保唯一。")],-1),w=a("h2",{id:"component",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#component","aria-hidden":"true"},"#"),t(" component")],-1),x=["src"],B=a("p",null,[t("component 模式可以选择生成的是全局组件还是局部组件，全局组件生成目录为 "),a("code",null,"/src/components/"),t(" ，局部组件则在 "),a("code",null,"/src/views/"),t(" 目录下选择指定的文件夹进行生成。")],-1),j=a("h2",{id:"store",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#store","aria-hidden":"true"},"#"),t(" store")],-1),k=["src"],$=a("p",null,[t("store 模式则会在 "),a("code",null,"/src/store/modules/"),t(" 目录下生成一个空模板")],-1),_=a("h2",{id:"module",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#module","aria-hidden":"true"},"#"),t(" module")],-1),y=["src"],L=a("p",null,"module 模式是一个标准模块模板，会在指定目录下生成模块文件夹，并且包含列表页、编辑（详情）页，以及相关局部组件。",-1),F=t("这块部分详细介绍建议移步《"),O=t("标准模块"),R=t("》"),q=a("h2",{id:"扩展",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#扩展","aria-hidden":"true"},"#"),t(" 扩展")],-1),z={class:"custom-container tip"},A=a("p",{class:"custom-container-title"},"说明",-1),C=t("该功能基于 "),D={href:"https://www.npmjs.com/package/plop",target:"_blank",rel:"noopener noreferrer"},E=t("plop"),G=t(" 实现，在扩展新的模式前，请先详细阅读 plop 文档。"),H=a("p",null,"除了框架提供的 4 种模式，你还可以自定义新的模式，其原理就是通过预设模板，按照特定规则创建文件或者文件夹。",-1),I=a("p",null,[t("预设模板文件存放在 "),a("code",null,"./plop-templates/"),t(" 目录下，并在 "),a("code",null,"./plopfile.js"),t(" 文件里进行引用，你可以参考现有 4 种模式的目录结构进行创建新的模板。")],-1);var J=p(d,[["render",function(t,p){const d=e("Badge"),J=e("RouterLink"),K=e("OutboundLink");return s(),l(o,null,[a("h1",u,[i,c,n(d,{type:"tip",text:"专业版",vertical:"top"})]),h,m,f,g,a("p",null,[a("img",{src:t.$withBase("/vue2/plop-page.gif")},null,8,b)]),v,w,a("p",null,[a("img",{src:t.$withBase("/vue2/plop-component.gif")},null,8,x)]),B,j,a("p",null,[a("img",{src:t.$withBase("/vue2/plop-store.gif")},null,8,k)]),$,_,a("p",null,[a("img",{src:t.$withBase("/vue2/plop-module.gif")},null,8,y)]),L,a("p",null,[F,n(J,{to:"/guide-vue2/module.html"},{default:r((()=>[O])),_:1}),R]),q,a("div",z,[A,a("p",null,[C,a("a",D,[E,n(K)]),G])]),H,I],64)}]]);export{J as default};