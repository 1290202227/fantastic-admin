import{r as e,o as r,c as a,a as s,b as l,F as o,d as t}from"./app.08c37072.js";const n={},c={id:"错误日志",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#错误日志","aria-hidden":"true"},"#",-1),u=t(" 错误日志 "),i=s("p",null,[t("在配置里开启错误日志后，需要去 "),s("code",null,"/src/util/error.log.js"),t(" 文件里编写业务代码。框架为方便演示，将错误日志记录在 "),s("code",null,"sessionStorage"),t(" 里，开发者需要根据实际业务情况修改代码，例如将错误日志进行上报，或者增加上报信息，记录用户账号、token等数据。")],-1),p=s("p",null,[t("由于开启错误日志监控后，所有的 js 错误都不会在控制台里显示，所以开发环境下即使开启错误日志也不会启用，如果需要在开发环境下测试，可在 "),s("code",null,"/src/util/error.log.js"),t(" 里自行处理。")],-1);n.render=function(t,n){const h=e("Badge");return r(),a(o,null,[s("h1",c,[d,u,l(h,{type:"tip",text:"专业版",vertical:"top"})]),i,p],64)};export{n as default};
